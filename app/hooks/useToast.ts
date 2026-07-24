"use client";

import { useState, useEffect, useCallback } from "react";

export type ToastType = "success" | "error" | "info" | "warning";

export interface ToastMessage {
  id: string;
  message: string;
  type: ToastType;
  duration?: number;
}

/**
 * Event-driven Toast emitter to trigger toasts from outside the React tree
 * (e.g. inside helper functions, error boundaries, or network interceptors).
 */
export const showToast = (message: string, type: ToastType = "info", duration = 4000): void => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("app-toast", {
        detail: { message, type, duration },
      })
    );
  }
};

/**
 * Clean helper interface for trigger syntax:
 * toast.success("Message");
 * toast.error("Error occurred");
 */
export const toast = {
  success: (msg: string, dur?: number) => showToast(msg, "success", dur),
  error: (msg: string, dur?: number) => showToast(msg, "error", dur),
  info: (msg: string, dur?: number) => showToast(msg, "info", dur),
  warning: (msg: string, dur?: number) => showToast(msg, "warning", dur),
};

/**
 * useToastMessages Hook
 * 
 * Subscribes to the global toast event-bus and exposes stateful notifications
 * list to the toast container component.
 */
export function useToastMessages() {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const removeToast = useCallback((id: string) => {
    setMessages((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback((message: string, type: ToastType, duration = 4000) => {
    const id = Math.random().toString(36).substring(2, 9);
    setMessages((prev) => [...prev, { id, message, type, duration }]);

    setTimeout(() => {
      removeToast(id);
    }, duration);
  }, [removeToast]);

  useEffect(() => {
    const handleToastEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ message: string; type: ToastType; duration?: number }>;
      if (customEvent.detail) {
        const { message, type, duration } = customEvent.detail;
        addToast(message, type, duration);
      }
    };

    window.addEventListener("app-toast", handleToastEvent);
    return () => {
      window.removeEventListener("app-toast", handleToastEvent);
    };
  }, [addToast]);

  return { messages, removeToast };
}
