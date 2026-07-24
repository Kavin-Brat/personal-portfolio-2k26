"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import emailjs from "@emailjs/browser";
import { CONTACT_CONTENT } from "../constants/portfolioConstants";
import { toast } from "../hooks/useToast";

// EmailJS configuration constants (can be overridden via environment variables)
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const EMAILJS_NOTIFICATION_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_NOTIFICATION_TEMPLATE_ID || "";
const EMAILJS_AUTO_REPLY_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  type: "text" | "email" | "textarea";
  value: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

/**
 * FormField Component
 * 
 * Reusable input and textarea form field wrapper following the site's design system.
 */
const FormField: React.FC<FormFieldProps> = ({
  id,
  name,
  label,
  type,
  value,
  placeholder,
  required = true,
  disabled = false,
  onChange,
}) => {
  const baseClasses = "w-full px-4 py-3 rounded-lg border border-slate-350 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:border-amber-500 transition-colors text-sm font-medium disabled:opacity-60 disabled:cursor-not-allowed";
  
  return (
    <div className="space-y-2 text-left">
      <label htmlFor={id} className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          rows={5}
          value={value}
          onChange={onChange}
          className={`${baseClasses} resize-none`}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          className={baseClasses}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
        />
      )}
    </div>
  );
};

/**
 * ContactForm Component
 * 
 * Handles user contact form submission. Concurrently dispatches a notification email
 * to the owner and an auto-acknowledgement reply back to the sender via EmailJS.
 */
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const statusTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Clean up active timers on unmount to prevent state updates on unmounted component
  useEffect(() => {
    return () => {
      if (statusTimeoutRef.current) {
        clearTimeout(statusTimeoutRef.current);
      }
    };
  }, []);

  // Stable input change handler using functional state updates
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  }, []);

  // Form submission handler with client-side environment conditional checks
  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    
    // Clear any currently running status auto-reset timers
    if (statusTimeoutRef.current) {
      clearTimeout(statusTimeoutRef.current);
    }
    
    setStatus("sending");
    setErrorMessage("");

    // Verify presence of required configurations
    if (!EMAILJS_SERVICE_ID || !EMAILJS_NOTIFICATION_TEMPLATE_ID || !EMAILJS_AUTO_REPLY_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      const configError = CONTACT_CONTENT.statusMessages.credentialsMissing;
      setErrorMessage(configError);
      setStatus("error");
      toast.error(configError);
      
      console.error(configError);
      
      // Auto-hide configuration error warning after 5 seconds
      statusTimeoutRef.current = setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);
      return;
    }
    
    try {
      // Load and initialises EmailJS connection pool
      emailjs.init(EMAILJS_PUBLIC_KEY);
 
      // Concurrent delivery of templates (notification + confirmation auto-reply)
      await Promise.all([
        emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_NOTIFICATION_TEMPLATE_ID, e.currentTarget),
        emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_AUTO_REPLY_TEMPLATE_ID, e.currentTarget)
      ]);
 
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      toast.success(CONTACT_CONTENT.statusMessages.success);
 
      // Auto-hide success alert text after 5 seconds
      statusTimeoutRef.current = setTimeout(() => {
        setStatus("idle");
      }, 5000);
    } catch (error) {
      const errMsg = error instanceof Error ? error.message : JSON.stringify(error);
      setErrorMessage(errMsg);
      setStatus("error");
      toast.error("Failed to send email. Please try again.");
      
      console.error("Failed to send email via EmailJS:", error);
 
      // Auto-hide failure alert text after 5 seconds
      statusTimeoutRef.current = setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);
    }
  }, []);

  const isSending = status === "sending";

  return (
    <div className="w-full p-6 sm:p-8 rounded-2xl border border-slate-200/30 dark:border-slate-800/40 bg-slate-50/20 backdrop-blur-sm">
      <form id="contact-form" onSubmit={handleSubmit} className="space-y-6 text-left">
        <div className="grid sm:grid-cols-2 gap-6">
          <FormField
            id="name"
            name="from_name"
            label={CONTACT_CONTENT.formLabels.name}
            type="text"
            value={formData.name}
            placeholder={CONTACT_CONTENT.formPlaceholders.name}
            disabled={isSending}
            onChange={handleChange}
          />
          <FormField
            id="email"
            name="from_email"
            label={CONTACT_CONTENT.formLabels.email}
            type="email"
            value={formData.email}
            placeholder={CONTACT_CONTENT.formPlaceholders.email}
            disabled={isSending}
            onChange={handleChange}
          />
        </div>

        <FormField
          id="message"
          name="message"
          label={CONTACT_CONTENT.formLabels.message}
          type="textarea"
          value={formData.message}
          placeholder={CONTACT_CONTENT.formPlaceholders.message}
          disabled={isSending}
          onChange={handleChange}
        />

        <div className="flex items-center gap-4">
          <button
            type="submit"
            id="submit-btn"
            disabled={isSending}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-200 transition-all shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSending ? CONTACT_CONTENT.statusMessages.sending : "Send Message"}
          </button>
          
          {status === "success" && (
            <p className="text-sm font-semibold text-emerald-500 font-sans">
              {process.env.NODE_ENV === "development"
                ? CONTACT_CONTENT.statusMessages.devSuccess
                : CONTACT_CONTENT.statusMessages.success}
            </p>
          )}

          {status === "error" && (
            <p className="text-sm font-semibold text-rose-500 font-sans">
              {process.env.NODE_ENV === "development" && errorMessage
                ? CONTACT_CONTENT.statusMessages.devError.replace("{error}", errorMessage)
                : CONTACT_CONTENT.statusMessages.error}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
