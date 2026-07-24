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
  levelLabel?: string;
  description?: string;
  tags?: string[];
  tooltipPositionClass?: string;
  arrowPositionClass?: string;
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
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 pointer-events-none ${skill.orbitClass}`}
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
            className={`absolute p-3 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200 dark:border-slate-800 shadow-xl transition-all duration-300 pointer-events-none z-50 ${
              skill.tooltipPositionClass || "bottom-full mb-3"
            } ${
              skill.description ? "w-60" : "w-44"
            } ${
              skill.tooltipClass || "left-1/2 -translate-x-1/2"
            } ${
              isActive
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-2 scale-95"
            }`}
          >
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold border ${skill.badgeBg}`}>
                {skill.category}
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                {skill.experience}
              </span>
            </div>
            <h4 className="text-xs font-bold text-slate-800 dark:text-slate-100 mb-1">{skill.name}</h4>
            
            {skill.description && (
              <p className="text-[10px] leading-relaxed text-slate-650 dark:text-slate-400 mb-2">
                {skill.description}
              </p>
            )}

            <div className="flex items-center justify-between text-[11px] border-t border-slate-100 dark:border-slate-800/60 pt-1.5 mt-1">
              <span className="text-slate-500 dark:text-slate-400 text-[10px]">
                {skill.levelLabel || "Proficiency:"}
              </span>
              <span className="font-semibold text-indigo-600 dark:text-indigo-400 text-[10px]">
                {skill.level}
              </span>
            </div>

            {skill.tags && skill.tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2 pt-1.5 border-t border-slate-100 dark:border-slate-800/60">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-1.5 py-0.5 rounded text-[8px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            {/* Tooltip Arrow */}
            <div className={`absolute border-4 border-transparent ${
              skill.arrowPositionClass || "top-full -mt-px border-t-white dark:border-t-slate-900"
            } ${
              skill.arrowClass || "left-1/2 -translate-x-1/2"
            }`} />
          </div>
        </div>
      </div>
    );
  }
);

SkillNode.displayName = "SkillNode";
