import React from "react";
import Link from "next/link";
import { FUTURE_TOPICS } from "../constants/portfolioConstants";

const BlogTeaser: React.FC = () => {
  // Slice first 2 topics for the teaser grid
  const teaserTopics = FUTURE_TOPICS.slice(0, 2);

  return (
    <section
      id="blog"
      className="w-full max-w-7xl mx-auto px-6 py-20 border-t border-slate-200/20 dark:border-slate-800/10 flex flex-col gap-12 scroll-mt-20"
    >
      <div className="space-y-4 text-left">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Latest Articles
        </h2>
        <div className="w-12 h-1 bg-amber-500 rounded-full" />
      </div>

      <div className="grid md:grid-cols-3 gap-6 text-left">
        {/* Dynamic teaser cards */}
        {teaserTopics.map((topic) => (
          <div
            key={topic.title}
            className="p-6 rounded-2xl border border-slate-200/30 dark:border-slate-800/40 bg-slate-50/50 dark:bg-slate-900/10 backdrop-blur-sm space-y-4 flex flex-col justify-between group hover:border-amber-500/50 dark:hover:border-amber-500/30 transition-all duration-300"
          >
            <div className="space-y-2 font-sans">
              <span className="text-xs font-semibold text-amber-500">COMING SOON</span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
                {topic.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {topic.desc}
              </p>
            </div>
            <div className="pt-2 text-xs font-semibold uppercase text-slate-400 font-sans">
              {topic.tag}
            </div>
          </div>
        ))}

        {/* Card 3 - Visit Blog Link */}
        <div className="p-6 rounded-2xl border border-slate-200/30 dark:border-slate-800/40 bg-slate-50/50 dark:bg-slate-900/10 backdrop-blur-sm space-y-4 flex flex-col justify-between group hover:border-amber-500/50 dark:hover:border-amber-500/30 transition-all duration-300">
          <div className="space-y-2 font-sans">
            <span className="text-xs font-semibold text-indigo-400">VISIT BLOG PAGE</span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
              More Articles Coming Soon
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Stay tuned for technical breakdowns regarding Next.js 15+, React Hooks performance, and SQL optimizations.
            </p>
          </div>
          <Link href="/blog" className="pt-2 text-xs font-semibold uppercase text-amber-500 hover:underline font-sans">
            View Blog Page →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogTeaser;
