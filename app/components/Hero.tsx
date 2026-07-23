"use client";

import React from "react";
import { SOCIAL_LINKS } from "../constants/portfolioConstants";
import { GitHubIcon, LinkedInIcon, EmailIcon, DownloadIcon } from "./Icons";
import OrbitVisual from "./OrbitVisual";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="w-full min-h-[90vh] max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between py-12 md:py-24 gap-12"
    >
      <div className="flex-1 space-y-6 text-left">
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Hi, I'm <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-600 bg-clip-text text-transparent">Kavin Barath</span>
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-slate-700 dark:text-slate-200">
            Senior Software Engineer · Full Stack Developer
          </p>
        </div>
        <p className="text-slate-600 dark:text-slate-400 max-w-lg text-base sm:text-lg leading-relaxed font-sans">
          Senior Full-Stack Engineer with 5 years of experience building enterprise-level fintech applications using React.js and Node.js. Specializing in Micro Frontend architecture, high-volume transaction systems, and real-time financial dashboards.
        </p>

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
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full border border-slate-300 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300 hover:text-amber-500 hover:border-amber-500 hover:bg-amber-500/10 dark:hover:bg-amber-500/10 transition-all"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full border border-slate-300 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300 hover:text-amber-500 hover:border-amber-500 hover:bg-amber-500/10 dark:hover:bg-amber-500/10 transition-all"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="p-3 rounded-full border border-slate-300 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300 hover:text-amber-500 hover:border-amber-500 hover:bg-amber-500/10 dark:hover:bg-amber-500/10 transition-all"
              aria-label="Email"
            >
              <EmailIcon />
            </a>
          </div>
        </div>
      </div>

      <OrbitVisual />
    </section>
  );
};

export default Hero;
