import React from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "../components/Icons";
import Footer from "../components/Footer";
import { FUTURE_TOPICS } from "../constants/portfolioConstants";
import { ErrorBoundary } from "../components/ErrorBoundary";

/**
 * BlogPage Component
 * 
 * Renders the blog preview layout containing upcoming article topics.
 * Wrapped in an ErrorBoundary to ensure route visual resilience.
 */
export default function BlogPage() {
  return (
    <div className="w-full min-h-[90vh] flex flex-col justify-between">
      <div className="w-full max-w-4xl mx-auto px-6 py-12 md:py-24 text-left flex-grow flex flex-col justify-center">
        <ErrorBoundary name="Blog Content Details">
          <div className="space-y-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-500 hover:underline mb-4 font-sans"
            >
              <ArrowLeftIcon />
              Back to Portfolio
            </Link>
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-widest text-[#FFD166] uppercase bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 font-sans">
                Publishing
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white pt-2">
                Blog Coming Soon
              </h1>
            </div>
            <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed max-w-2xl font-sans">
              I&apos;m working on detailed breakdowns describing full stack application architectures, interactive dashboards, micro-frontend modules, and client-side optimization patterns. Stay tuned!
            </p>

            <div className="border-t border-slate-200/20 dark:border-slate-800/10 pt-8 mt-8 space-y-6">
              <h2 className="text-xl font-bold text-slate-850 dark:text-slate-200">
                Check back soon for articles on:
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {FUTURE_TOPICS.map((topic, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-xl border border-slate-200/30 dark:border-slate-800/35 bg-slate-50/20 dark:bg-slate-900/5 hover:border-amber-500/35 transition-colors"
                  >
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">
                      {topic.title}
                    </h3>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mt-2 leading-relaxed font-sans">
                      {topic.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ErrorBoundary>
      </div>
      <Footer />
    </div>
  );
}
