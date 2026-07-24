import React from "react";
import { SOCIAL_LINKS } from "../constants/portfolioConstants";
import { GitHubIcon, LinkedInIcon, EmailIcon } from "./Icons";

/**
 * Footer Component
 * 
 * Renders the global page footer containing:
 * - Copyright & ownership information
 * - Tech stack badge credits (Next.js & Tailwind v4)
 * - Quick social profile redirection links
 */
const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-slate-200/20 dark:border-slate-800/10 bg-slate-50/10 dark:bg-slate-900/5 backdrop-blur-md py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left: Copyright (last on mobile, first on desktop) */}
        <div className="text-center md:text-left space-y-1 order-3 md:order-1">
          <p className="text-sm font-bold text-slate-800 dark:text-slate-100 font-sans">
            Kavin Barath S.
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-450">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Middle: Tech Stack Credits (remains in the middle, wrap on tiny screens) */}
        <div className="text-xs text-slate-500 dark:text-slate-400 flex flex-wrap items-center justify-center gap-1 font-medium order-2 md:order-2 relative group/build cursor-help">
          <span>Built with</span>
          <span className="font-semibold text-slate-700 dark:text-slate-300">Next.js</span>
          <span>&</span>
          <span className="font-semibold text-slate-700 dark:text-slate-300">Tailwind v4</span>
          
          {/* Build status check tooltip */}
          <div className="absolute bottom-full mb-2 w-max px-2.5 py-1 text-[9px] font-semibold tracking-wide uppercase rounded bg-slate-900 text-white dark:bg-white dark:text-slate-900 border border-slate-800 dark:border-slate-200 shadow-md opacity-0 group-hover/build:opacity-100 scale-95 group-hover/build:scale-100 transition-all duration-200 pointer-events-none z-50">
            Last Built: July 24, 2026
          </div>
        </div>

        {/* Right: Social icons (first on mobile, last on desktop) */}
        <div className="flex items-center gap-4 text-slate-550 dark:text-slate-400 order-1 md:order-3">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-amber-500 transition-colors"
            aria-label="GitHub"
          >
            <GitHubIcon className="w-4.5 h-4.5" />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-amber-500 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="w-4.5 h-4.5" />
          </a>
          <a
            href={`mailto:${SOCIAL_LINKS.email}`}
            className="hover:text-amber-500 transition-colors"
            aria-label="Email"
          >
            <EmailIcon className="w-4.5 h-4.5" />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
