"use client";

import React, { useState, useEffect } from "react";
import { SOCIAL_LINKS } from "../constants/portfolioConstants";
import { GitHubIcon, LinkedInIcon, EmailIcon, DownloadIcon } from "./Icons";
import OrbitVisual from "./OrbitVisual";

/**
 * Roles list for the typewriter animation effect.
 */
const ROLES = [
  "Full Stack Developer",
  "Frontend Engineer",
  "Backend Architect",
];

/**
 * Hero Component
 * 
 * Main landing visual banner featuring:
 * - Dynamic typewriter effect cycling through developer roles
 * - Professional elevator pitch and call-to-action buttons (Resume download, Social links)
 * - Interactive Orbit Visual galaxy component
 */
const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState<number>(0);
  const [displayedText, setDisplayedText] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  // Typewriter animation timer loop
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayedText.length < currentRole.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }, 90);
      } else {
        // Pause at full word completion before deleting
        timer = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        }, 50);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="w-full min-h-[90vh] max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between py-12 md:py-24 gap-12"
    >
      {/* Left Column: Greeting, Role & Bio */}
      <div className="flex-1 space-y-6 text-left">
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-600 bg-clip-text text-transparent">
              Kavin Barath
            </span>
          </h1>
          <div className="text-xl sm:text-2xl font-medium text-slate-700 dark:text-slate-200 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            <span>Senior Software Engineer</span>
            <span className="hidden sm:inline text-amber-500 font-bold">·</span>
            <span className="inline-block text-amber-500 dark:text-amber-400 font-semibold min-h-[1.5em] border-r-2 border-amber-400 animate-pulse pr-1">
              {displayedText}
            </span>
          </div>
        </div>

        <p className="text-slate-600 dark:text-slate-400 max-w-lg text-base sm:text-lg leading-relaxed font-sans">
          Senior Full-Stack Engineer with 5 years of experience building enterprise-level fintech applications using React.js and Node.js. Specializing in Micro Frontend architecture, high-volume transaction systems, and real-time financial dashboards.
        </p>

        {/* Action Buttons: Resume & Social Links */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href={SOCIAL_LINKS.resume}
            download="KavinBarathS_Resume.pdf"
            className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-200 shadow-lg hover:translate-y-[-2px] transition-all"
          >
            <DownloadIcon />
            Resume
          </a>

          <div className="flex items-center gap-3">
            {/* GitHub Tooltip */}
            <div className="relative group">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full border border-slate-300 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300 hover:text-amber-500 hover:border-amber-500 hover:bg-amber-500/10 dark:hover:bg-amber-500/10 transition-all block"
                aria-label="GitHub Profile"
              >
                <GitHubIcon />
              </a>
              <div className="hidden md:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 text-[10px] font-semibold uppercase tracking-wider rounded bg-slate-900 text-white dark:bg-white dark:text-slate-900 border border-slate-800 dark:border-slate-200 shadow-md opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-200 pointer-events-none z-50">
                GitHub
              </div>
            </div>

            {/* LinkedIn Tooltip */}
            <div className="relative group">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full border border-slate-300 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300 hover:text-amber-500 hover:border-amber-500 hover:bg-amber-500/10 dark:hover:bg-amber-500/10 transition-all block"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon />
              </a>
              <div className="hidden md:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 text-[10px] font-semibold uppercase tracking-wider rounded bg-slate-900 text-white dark:bg-white dark:text-slate-900 border border-slate-800 dark:border-slate-200 shadow-md opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-200 pointer-events-none z-50">
                LinkedIn
              </div>
            </div>

            {/* Email Tooltip */}
            <div className="relative group">
              <a
                href={`mailto:${SOCIAL_LINKS.email}`}
                className="p-3 rounded-full border border-slate-300 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300 hover:text-amber-500 hover:border-amber-500 hover:bg-amber-500/10 dark:hover:bg-amber-500/10 transition-all block"
                aria-label="Email Contact"
              >
                <EmailIcon />
              </a>
              <div className="hidden md:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-2 py-1 text-[10px] font-semibold uppercase tracking-wider rounded bg-slate-900 text-white dark:bg-white dark:text-slate-900 border border-slate-800 dark:border-slate-200 shadow-md opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-200 pointer-events-none z-50">
                Email
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Orbiting Galaxy Component */}
      <OrbitVisual />
    </section>
  );
};

export default React.memo(Hero);
