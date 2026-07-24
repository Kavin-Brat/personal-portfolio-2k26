"use client";

import React from "react";
import { useToastMessages, ToastMessage } from "../hooks/useToast";

/**
 * ToastCard Component
 * 
 * Individual toast item rendering color variations depending on type,
 * with an interactive close action button.
 */
const ToastCard: React.FC<{ toastItem: ToastMessage; onClose: () => void }> = ({ toastItem, onClose }) => {
  const variantStyles = {
    success: "bg-emerald-500 text-white border-emerald-600 dark:bg-emerald-600 dark:border-emerald-700",
    error: "bg-rose-500 text-white border-rose-600 dark:bg-rose-600 dark:border-rose-700",
    info: "bg-slate-800 text-white border-slate-900 dark:bg-slate-900 dark:border-slate-950",
    warning: "bg-amber-500 text-slate-950 border-amber-600 dark:bg-amber-600 dark:text-white dark:border-amber-700",
  }[toastItem.type];

  return (
    <div
      className={`p-4 rounded-xl shadow-2xl border text-sm font-sans flex items-center justify-between gap-4 transition-all duration-300 animate-slide-in ${variantStyles} w-full sm:min-w-[280px] sm:max-w-sm`}
    >
      <p className="font-semibold leading-relaxed text-left flex-1">{toastItem.message}</p>
      <button
        onClick={onClose}
        className="hover:opacity-75 transition-opacity text-current font-bold text-base cursor-pointer"
        aria-label="Dismiss toast"
      >
        ✕
      </button>
    </div>
  );
};

/**
 * ToastContainer Component
 * 
 * Floating wrapper rendered at the layout level that lists and presents
 * active toast messages stacked at the bottom-right corner.
 */
export const ToastContainer: React.FC = () => {
  const { messages, removeToast } = useToastMessages();

  if (messages.length === 0) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:bottom-6 sm:right-6 sm:left-auto z-[100] flex flex-col gap-3 pointer-events-none">
      {messages.map((item) => (
        <div key={item.id} className="pointer-events-auto">
          <ToastCard toastItem={item} onClose={() => removeToast(item.id)} />
        </div>
      ))}
    </div>
  );
};
