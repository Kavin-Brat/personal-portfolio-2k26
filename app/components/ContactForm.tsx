"use client";

import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulate server action
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <div className="w-full p-6 sm:p-8 rounded-2xl border border-slate-200/30 dark:border-slate-800/40 bg-slate-50/20 backdrop-blur-sm">
      <form onSubmit={handleSubmit} className="space-y-6 text-left">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">
              Your Name
            </label>
            <input
              type="text"
              id="name"
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
            disabled={status === "sending"}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-200 transition-all shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
          
          {status === "success" && (
            <p className="text-sm font-semibold text-emerald-500">
              Message sent successfully!
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
