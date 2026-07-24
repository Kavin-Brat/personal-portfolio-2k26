import React from "react";
import { PORTFOLIO_SKILLS, DOMAIN_EXPERTISE, ABOUT_CONTENT } from "../constants/portfolioConstants";
import { SkillIcon } from "./Icons";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full max-w-7xl mx-auto px-6 py-20 border-t border-slate-205/20 dark:border-slate-800/10 flex flex-col gap-12 scroll-mt-20"
    >
      <div className="space-y-4 text-left">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          {ABOUT_CONTENT.titleWho}
        </h2>
        <div className="w-12 h-1 bg-amber-500 rounded-full" />
      </div>

      <div className="grid md:grid-cols-12 gap-12 items-start">
        {/* Description */}
        <div className="md:col-span-7 space-y-6 text-slate-700 dark:text-slate-400 text-left text-base sm:text-lg leading-relaxed">
          {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </div>

        {/* Domain Expertise */}
        <div className="md:col-span-5 p-6 rounded-2xl border border-slate-200/30 dark:border-slate-800/40 bg-slate-50/20 backdrop-blur-sm space-y-6 text-left">
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
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{ABOUT_CONTENT.titleSkills}</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="p-5 rounded-xl border border-slate-200/30 dark:border-slate-800/30 bg-slate-50/20 hover:border-amber-550/20 transition-all">
            <h4 className="font-bold text-sm uppercase text-amber-500 tracking-wider mb-3">Languages</h4>
            <ul className="space-y-1.5 text-sm text-slate-650 dark:text-slate-400 font-medium">
              {PORTFOLIO_SKILLS.languages.map((skill) => (
                <li key={skill.name} className="flex items-center gap-2"><SkillIcon name={skill.name} icon={skill.icon} />{skill.name}</li>
              ))}
            </ul>
          </div>
          <div className="p-5 rounded-xl border border-slate-200/30 dark:border-slate-800/30 bg-slate-50/20 hover:border-amber-550/20 transition-all">
            <h4 className="font-bold text-sm uppercase text-indigo-400 tracking-wider mb-3">Frameworks</h4>
            <ul className="space-y-1.5 text-sm text-slate-650 dark:text-slate-400 font-medium">
              {PORTFOLIO_SKILLS.frameworks.map((skill) => (
                <li key={skill.name} className="flex items-center gap-2"><SkillIcon name={skill.name} icon={skill.icon} />{skill.name}</li>
              ))}
            </ul>
          </div>
          <div className="p-5 rounded-xl border border-slate-200/30 dark:border-slate-800/30 bg-slate-50/20 hover:border-amber-550/20 transition-all">
            <h4 className="font-bold text-sm uppercase text-emerald-400 tracking-wider mb-3">Databases</h4>
            <ul className="space-y-1.5 text-sm text-slate-650 dark:text-slate-400 font-medium">
              {PORTFOLIO_SKILLS.databases.map((skill) => (
                <li key={skill.name} className="flex items-center gap-2"><SkillIcon name={skill.name} icon={skill.icon} />{skill.name}</li>
              ))}
            </ul>
          </div>
          <div className="p-5 rounded-xl border border-slate-200/30 dark:border-slate-800/30 bg-slate-50/20 hover:border-amber-550/20 transition-all">
            <h4 className="font-bold text-sm uppercase text-cyan-400 tracking-wider mb-3">Tools & Infra</h4>
            <ul className="space-y-1.5 text-sm text-slate-650 dark:text-slate-400 font-medium">
              {PORTFOLIO_SKILLS.tools.map((skill) => (
                <li key={skill.name} className="flex items-center gap-2"><SkillIcon name={skill.name} icon={skill.icon} />{skill.name}</li>
              ))}
            </ul>
          </div>
          <div className="p-5 rounded-xl border border-slate-200/30 dark:border-slate-800/30 bg-slate-50/20 hover:border-amber-550/20 transition-all">
            <h4 className="font-bold text-sm uppercase text-purple-400 tracking-wider mb-3">Concepts</h4>
            <ul className="space-y-1.5 text-sm text-slate-650 dark:text-slate-400 font-medium">
              {PORTFOLIO_SKILLS.concepts.map((skill) => (
                <li key={skill.name} className="flex items-center gap-2"><SkillIcon name={skill.name} icon={skill.icon} />{skill.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
