import React from "react";
import Link from "next/link";

const BlogTeaser: React.FC = () => {
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
        {/* Card 1 */}
        <div className="p-6 rounded-2xl border border-slate-200/30 dark:border-slate-800/40 bg-slate-50/50 dark:bg-slate-900/10 backdrop-blur-sm space-y-4 flex flex-col justify-between group hover:border-amber-500/50 dark:hover:border-amber-500/30 transition-all duration-300">
          <div className="space-y-2 font-sans">
            <span className="text-xs font-semibold text-amber-500">COMING SOON</span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
              Uncoupling Monoliths to Microservices
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Step-by-step roadmap to migrating single database monolithic architectures into fault-tolerant distributed networks.
            </p>
          </div>
          <div className="pt-2 text-xs font-semibold uppercase text-slate-400 font-sans">System Design</div>
        </div>

        {/* Card 2 */}
        <div className="p-6 rounded-2xl border border-slate-200/30 dark:border-slate-800/40 bg-slate-50/50 dark:bg-slate-900/10 backdrop-blur-sm space-y-4 flex flex-col justify-between group hover:border-amber-500/50 dark:hover:border-amber-500/30 transition-all duration-300">
          <div className="space-y-2 font-sans">
            <span className="text-xs font-semibold text-amber-500">COMING SOON</span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
              Securing AWS Event-Driven Models
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Implementing least-privilege IAM models across AWS Lambda triggers, API gateways, and Kafka stream consumers.
            </p>
          </div>
          <div className="pt-2 text-xs font-semibold uppercase text-slate-400 font-sans">AWS / Cloud</div>
        </div>

        {/* Card 3 */}
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
