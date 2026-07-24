"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "./components/Icons";
import Footer from "./components/Footer";
import { NOT_FOUND_CONTENT } from "./constants/portfolioConstants";

/**
 * NotFound Component
 * 
 * Styled custom 404 Page Not Found error handler route fallback.
 * Uses Next.js root route mapping.
 */
export default function NotFound() {
  return (
    <div className="w-full min-h-[90vh] flex flex-col justify-between font-sans">
      <div className="w-full max-w-4xl mx-auto px-6 py-12 md:py-24 text-left flex-grow flex flex-col justify-center">
        <div className="space-y-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-500 hover:underline mb-4"
          >
            <ArrowLeftIcon />
            {NOT_FOUND_CONTENT.backButtonText}
          </Link>
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-widest text-[#FFD166] uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              {NOT_FOUND_CONTENT.errorTag}
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white pt-2">
              {NOT_FOUND_CONTENT.title}
            </h1>
          </div>
          <p className="text-slate-650 dark:text-slate-400 text-lg leading-relaxed max-w-2xl">
            {NOT_FOUND_CONTENT.description}
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
