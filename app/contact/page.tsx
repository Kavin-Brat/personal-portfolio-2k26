"use client";

import React from "react";
import Link from "next/link";
import { SOCIAL_LINKS } from "../constants/portfolioConstants";
import { ArrowLeftIcon, EmailIcon, LocationIcon, GitHubIcon, LinkedInIcon } from "../components/Icons";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div className="w-full min-h-[90vh] flex flex-col justify-between">
      <div className="w-full max-w-7xl mx-auto px-6 py-12 md:py-24 text-left flex-grow flex flex-col justify-center gap-10">
        <div>
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-amber-500 hover:underline mb-4 font-sans">
            <ArrowLeftIcon />
            Back to Portfolio
          </Link>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white pt-2">
            Get In Touch
          </h1>
          <p className="text-slate-650 dark:text-slate-400 mt-2 text-base sm:text-lg max-w-2xl font-sans">
            Have a project in mind, need architecture reviews, or want to discuss full stack code? Drop a message below or reach out via socials.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          {/* Directories & Addresses */}
          <div className="md:col-span-5 space-y-4">
            {/* Email Item */}
            <div className="group p-4 rounded-xl border border-slate-200/30 dark:border-slate-800/40 bg-slate-50/20 dark:bg-slate-900/5 flex items-center gap-4 hover:border-amber-500/40 transition-colors">
              <div className="p-3 bg-amber-500/10 text-slate-500 dark:text-slate-400 group-hover:text-amber-500 rounded-lg transition-colors">
                <EmailIcon />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-450 uppercase">Email</h4>
                <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-sm sm:text-base font-bold text-slate-805 dark:text-slate-100 group-hover:text-amber-500 transition-colors">
                  {SOCIAL_LINKS.email}
                </a>
              </div>
            </div>

            {/* GitHub Item */}
            <div className="group p-4 rounded-xl border border-slate-200/30 dark:border-slate-800/40 bg-slate-50/20 dark:bg-slate-900/5 flex items-center gap-4 hover:border-amber-500/40 transition-colors">
              <div className="p-3 bg-slate-900/10 dark:bg-white/10 text-slate-700 dark:text-slate-350 group-hover:text-amber-500 rounded-lg transition-colors">
                <GitHubIcon />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-450 uppercase">GitHub</h4>
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="text-sm sm:text-base font-bold text-slate-805 dark:text-slate-100 group-hover:text-amber-500 transition-colors">
                  {SOCIAL_LINKS.github.replace("https://", "")}
                </a>
              </div>
            </div>

            {/* LinkedIn Item */}
            <div className="group p-4 rounded-xl border border-slate-200/30 dark:border-slate-800/40 bg-slate-50/20 dark:bg-slate-900/5 flex items-center gap-4 hover:border-amber-500/40 transition-colors">
              <div className="p-3 bg-blue-500/10 text-blue-500 group-hover:text-amber-500 rounded-lg transition-colors">
                <LinkedInIcon />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-455 uppercase">LinkedIn</h4>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="text-sm sm:text-base font-bold text-slate-805 dark:text-slate-100 group-hover:text-amber-500 transition-colors">
                  {SOCIAL_LINKS.linkedin.replace("https://", "")}
                </a>
              </div>
            </div>

            {/* Location Item */}
            <div className="group p-4 rounded-xl border border-slate-200/30 dark:border-slate-800/40 bg-slate-50/20 dark:bg-slate-900/5 flex items-center gap-4 hover:border-amber-500/40 transition-colors">
              <div className="p-3 bg-amber-500/10 text-slate-500 dark:text-slate-400 group-hover:text-amber-500 rounded-lg transition-colors">
                <LocationIcon />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-455 uppercase">Current Location</h4>
                <p className="text-sm sm:text-base font-bold text-slate-805 dark:text-slate-100 group-hover:text-amber-500 transition-colors">
                  Puducherry, Pondicherry, India
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
