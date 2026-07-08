import React from "react";
import { PORTFOLIO_SKILLS, DOMAIN_EXPERTISE } from "../constants/portfolioConstants";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full max-w-7xl mx-auto px-6 py-20 border-t border-slate-205/20 dark:border-slate-800/10 flex flex-col gap-12 scroll-mt-20"
    >
      <div className="space-y-4 text-left">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Who I Am
        </h2>
        <div className="w-12 h-1 bg-amber-500 rounded-full" />
      </div>

      <div className="grid md:grid-cols-12 gap-12 items-start">
        {/* Description */}
        <div className="md:col-span-7 space-y-6 text-slate-700 dark:text-slate-350 text-left text-base sm:text-lg leading-relaxed">
          <p>
            I am a passionate software architecture enthusiast with over **5 years** of hands-on professional journey building web-scale cloud services. My core development philosophies center around reliability, simplicity, and performance.
          </p>
          <p>
            I enjoy dismantling monolithic structures into decoupled **microservices** layouts, resolving container orchestrations, and formulating modular setups using **node.js / python** engines. A substantial portion of my time involves structuring Kafka-based queue models and managing critical database schema strategies.
          </p>
          <p>
            When I'm not configuring backend scripts, I enjoy reviewing modern frontends, building progressive APIs, and participating in tech mentorship sessions.
          </p>
        </div>

        {/* Domain Expertise */}
        <div className="md:col-span-5 p-6 rounded-2xl border border-slate-200/30 dark:border-slate-800/40 bg-slate-50/50 dark:bg-slate-900/15 backdrop-blur-sm space-y-6 text-left">
          <h3 className="font-bold text-lg text-slate-850 dark:text-white">
            Domain Expertise
          </h3>
          <div className="flex flex-wrap gap-2">
            {DOMAIN_EXPERTISE.map((domain) => (
              <span
                key={domain}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-900/5 dark:bg-white/5 border border-slate-900/10 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:border-amber-500 hover:text-amber-500 dark:hover:text-amber-400 transition-colors cursor-default"
              >
                {domain}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Skills Grid */}
      <div className="mt-8 space-y-6 text-left">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Tech Skills Inventory</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="p-5 rounded-xl border border-slate-200/30 dark:border-slate-800/30 bg-slate-50/20 dark:bg-slate-900/5 hover:border-amber-550/20 transition-all">
            <h4 className="font-bold text-sm uppercase text-amber-500 tracking-wider mb-3">Languages</h4>
            <ul className="space-y-1.5 text-sm text-slate-650 dark:text-slate-400 font-medium">
              {PORTFOLIO_SKILLS.languages.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
          <div className="p-5 rounded-xl border border-slate-200/30 dark:border-slate-800/30 bg-slate-50/20 dark:bg-slate-900/5 hover:border-amber-550/20 transition-all">
            <h4 className="font-bold text-sm uppercase text-indigo-400 tracking-wider mb-3">Frameworks</h4>
            <ul className="space-y-1.5 text-sm text-slate-650 dark:text-slate-400 font-medium">
              {PORTFOLIO_SKILLS.frameworks.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
          <div className="p-5 rounded-xl border border-slate-200/30 dark:border-slate-800/30 bg-slate-50/20 dark:bg-slate-900/5 hover:border-amber-550/20 transition-all">
            <h4 className="font-bold text-sm uppercase text-emerald-400 tracking-wider mb-3">Databases</h4>
            <ul className="space-y-1.5 text-sm text-slate-650 dark:text-slate-400 font-medium">
              {PORTFOLIO_SKILLS.databases.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
          <div className="p-5 rounded-xl border border-slate-200/30 dark:border-slate-800/30 bg-slate-50/20 dark:bg-slate-900/5 hover:border-amber-550/20 transition-all">
            <h4 className="font-bold text-sm uppercase text-cyan-400 tracking-wider mb-3">Cloud / Infra</h4>
            <ul className="space-y-1.5 text-sm text-slate-650 dark:text-slate-400 font-medium">
              {PORTFOLIO_SKILLS.cloud.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
          <div className="p-5 rounded-xl border border-slate-200/30 dark:border-slate-800/30 bg-slate-50/20 dark:bg-slate-900/5 hover:border-amber-550/20 transition-all">
            <h4 className="font-bold text-sm uppercase text-purple-400 tracking-wider mb-3">Concepts</h4>
            <ul className="space-y-1.5 text-sm text-slate-650 dark:text-slate-400 font-medium">
              {PORTFOLIO_SKILLS.concepts.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
