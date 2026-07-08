import React from "react";
import { JOBS_EXPERIENCE } from "../constants/portfolioConstants";

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="w-full max-w-7xl mx-auto px-6 py-20 border-t border-slate-200/20 dark:border-slate-800/10 flex flex-col gap-12 scroll-mt-20"
    >
      <div className="space-y-4 text-left">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Professional Journey
        </h2>
        <div className="w-12 h-1 bg-amber-500 rounded-full" />
      </div>

      <div className="relative border-l border-slate-350/40 dark:border-slate-800/60 pl-8 ml-4 space-y-12 max-w-4xl text-left">
        {JOBS_EXPERIENCE.map((job, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Indicator Dot */}
            <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full border-4 border-slate-100 dark:border-slate-950 bg-slate-900 dark:bg-white group-hover:bg-amber-500 dark:group-hover:bg-amber-500 group-hover:scale-110 transition-all duration-300" />
            
            <div className="space-y-2">
              <span className="text-xs font-bold tracking-wider uppercase text-amber-500">
                {job.duration}
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {job.role} <span className="text-slate-450 dark:text-slate-550 font-medium">@</span> <span className="text-indigo-400">{job.company}</span>
              </h3>
              
              <ul className="mt-4 space-y-2 list-disc list-outside pl-4 text-slate-650 dark:text-slate-400 text-sm sm:text-base leading-relaxed font-sans">
                {job.description.map((desc, dIdx) => (
                  <li key={dIdx} className="pl-1">{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
