"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";

// EmailJS configuration constants (can be overridden via environment variables)
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const EMAILJS_NOTIFICATION_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_NOTIFICATION_TEMPLATE_ID || "";
const EMAILJS_AUTO_REPLY_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_AUTO_REPLY_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    // Guard clause to check if the necessary environment variables are set
    if (!EMAILJS_SERVICE_ID || !EMAILJS_NOTIFICATION_TEMPLATE_ID || !EMAILJS_AUTO_REPLY_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      const configError = "EmailJS credentials are not configured. Please define them in your environment variables.";
      setErrorMessage(configError);
      setStatus("error");
      if (process.env.NODE_ENV === "development") {
        alert(configError);
      }
      console.error(configError);
      return;
    }
    
    try {
      // Initialize EmailJS with the Public Key
      emailjs.init(EMAILJS_PUBLIC_KEY);

      // Trigger both notification and auto-reply templates concurrently
      await Promise.all([
        emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_NOTIFICATION_TEMPLATE_ID, e.currentTarget),
        emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_AUTO_REPLY_TEMPLATE_ID, e.currentTarget)
      ]);

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Alert dialog is only displayed during local development
      if (process.env.NODE_ENV === "development") {
        alert("Message sent successfully! Check your inbox for confirmation.");
      }
    } catch (error) {
      const errMsg = error instanceof Error ? error.message : JSON.stringify(error);
      setErrorMessage(errMsg);
      setStatus("error");
      
      // Alert dialog is only displayed during local development
      if (process.env.NODE_ENV === "development") {
        alert("Failed to send email. Error: " + errMsg);
      }
      console.error("Failed to send email via EmailJS:", error);
    }
  };

  return (
    <div className="w-full p-6 sm:p-8 rounded-2xl border border-slate-200/30 dark:border-slate-800/40 bg-slate-50/20 backdrop-blur-sm">
      <form id="contact-form" onSubmit={handleSubmit} className="space-y-6 text-left">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="from_name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-350 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:border-amber-500 transition-colors text-sm font-medium"
              placeholder="John Doe"
              required
              disabled={status === "sending"}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="from_email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-slate-350 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:border-amber-500 transition-colors text-sm font-medium"
              placeholder="john@example.com"
              required
              disabled={status === "sending"}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-350 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:outline-none focus:border-amber-500 transition-colors text-sm font-medium resize-none animate-[pulse_0]"
            placeholder="Tell me about your project..."
            required
            disabled={status === "sending"}
          />
        </div>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            id="submit-btn"
            disabled={status === "sending"}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-200 transition-all shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          
          {status === "success" && (
            <p className="text-sm font-semibold text-emerald-500 font-sans">
              {process.env.NODE_ENV === "development"
                ? "Message sent successfully! (Dev Mode: Dispatched notification and auto-reply templates)"
                : "Thank you! Your message has been sent successfully."}
            </p>
          )}

          {status === "error" && (
            <p className="text-sm font-semibold text-rose-500 font-sans">
              {process.env.NODE_ENV === "development" && errorMessage
                ? `Error: ${errorMessage} (Verify EmailJS Service ID, Template IDs, or CSP)`
                : "Something went wrong while sending your message. Please try again later."}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
