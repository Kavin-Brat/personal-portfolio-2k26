import React from "react";

export interface TechSkill {
  id: string;
  name: string;
  category: string;
  level: string;
  experience: string;
  color: string;
  badgeBg: string;
  orbitClass: string;
  positionClass: string;
  svgIcon: React.ReactNode;
  tooltipClass?: string;
  arrowClass?: string;
}

interface SkillNodeProps {
  skill: TechSkill;
  isActive: boolean;
  isPaused: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}

/**
 * SkillNode Component
 * 
 * Renders an individual orbiting tech skill node with brand icon,
 * hover scaling animation, and responsive tooltip badge popover.
 */
export const SkillNode: React.FC<SkillNodeProps> = React.memo(
  ({ skill, isActive, isPaused, onMouseEnter, onMouseLeave, onClick }) => {
    return (
      <div
        className={`absolute rounded-full transition-all duration-300 pointer-events-none ${skill.orbitClass}`}
        style={{ animationPlayState: isPaused ? "paused" : "running" }}
      >
        {/* Interactive Skill Node Button */}
        <div
          className={`absolute ${skill.positionClass} pointer-events-auto transform -translate-x-1/2 -translate-y-1/2 group/node cursor-pointer z-40`}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
        >
          {/* Glowing Ring Container around Icon */}
          <div
            className={`w-9 h-9 md:w-10 md:h-10 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 shadow-lg flex items-center justify-center transition-all duration-300 group-hover/node:scale-125 group-hover/node:border-indigo-500 group-hover/node:shadow-[0_0_20px_rgba(99,102,241,0.4)] ${
              isActive ? "scale-125 border-indigo-500 ring-4 ring-indigo-500/20" : ""
            }`}
          >
            {skill.svgIcon}
          </div>

          {/* Hover Tooltip Badge (responsive alignments to prevent horizontal screen cutoffs) */}
          <div
            className={`absolute bottom-full mb-3 w-44 p-3 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-xl transition-all duration-300 pointer-events-none z-50 ${
              skill.tooltipClass || "left-1/2 -translate-x-1/2"
            } ${
              isActive
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-2 scale-95"
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold border ${skill.badgeBg}`}>
                {skill.category}
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                {skill.experience}
              </span>
            </div>
            <h4 className="text-xs font-bold text-slate-800 dark:text-slate-100">{skill.name}</h4>
            <div className="mt-1 flex items-center justify-between text-[11px]">
              <span className="text-slate-500 dark:text-slate-400">Proficiency:</span>
              <span className="font-semibold text-indigo-600 dark:text-indigo-400">{skill.level}</span>
            </div>
            {/* Tooltip Arrow */}
            <div className={`absolute top-full -mt-px border-4 border-transparent border-t-white dark:border-t-slate-900 ${
              skill.arrowClass || "left-1/2 -translate-x-1/2"
            }`} />
          </div>
        </div>
      </div>
    );
  }
);

SkillNode.displayName = "SkillNode";
