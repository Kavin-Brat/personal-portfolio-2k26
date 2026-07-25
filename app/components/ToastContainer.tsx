"use client";

import React from "react";
import { useToastMessages, ToastMessage } from "../hooks/useToast";

/**
 * ToastCard Component
 * 
 * Individual toast notification item. Renders semantic color themes depending on the message type,
 * and includes a fully accessible close action button.
 */
const ToastCard: React.FC<{ toastItem: ToastMessage; onClose: () => void }> = ({ toastItem, onClose }) => {
  // Map semantic notification states (success, error, info, warning) to theme-aware styling classes
  const variantStyles = {
    success: "bg-emerald-500 text-white border-emerald-600 dark:bg-emerald-600 dark:border-emerald-700",
    error: "bg-rose-500 text-white border-rose-600 dark:bg-rose-600 dark:border-rose-700",
    info: "bg-slate-800 text-white border-slate-900 dark:bg-slate-900 dark:border-slate-950",
    warning: "bg-amber-500 text-slate-950 border-amber-600 dark:bg-amber-600 dark:text-white dark:border-amber-700",
  }[toastItem.type];

  return (
    <div
      role="alert"
      className={`p-4 rounded-xl shadow-2xl border text-sm font-sans flex items-center justify-between gap-4 transition-all duration-300 animate-slide-in ${variantStyles} w-full sm:min-w-[280px] sm:max-w-sm`}
    >
      <p className="font-semibold leading-relaxed text-left flex-1">{toastItem.message}</p>
      
      {/* Tap-target-friendly close button with adaptive hover styling utilizing `bg-current/15` */}
      <button
        onClick={onClose}
        className="p-1 hover:bg-current/15 rounded-full transition-all text-current font-bold text-base cursor-pointer flex items-center justify-center min-w-[28px] min-h-[28px]"
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
 * Floating flex container that subscribes to the global toast notification stream.
 * 
 * Responsive Positioning Strategy:
 * - Mobile: Placed at the top (`top-4 left-4 right-4`) to prevent overlapping with bottom alerts/banners
 *   and avoid collision with screen keyboards.
 * - Desktop/Tablet: Floats at the top-right corner (`sm:top-6 sm:right-6 sm:left-auto`).
 */
export const ToastContainer: React.FC = () => {
  const { messages, removeToast } = useToastMessages();

  if (messages.length === 0) return null;

  return (
    <div className="fixed top-4 left-4 right-4 sm:top-6 sm:right-6 sm:left-auto z-[100] flex flex-col gap-3 pointer-events-none">
      {messages.map((item) => (
        <div key={item.id} className="pointer-events-auto">
          <ToastCard toastItem={item} onClose={() => removeToast(item.id)} />
        </div>
      ))}
    </div>
  );
};
