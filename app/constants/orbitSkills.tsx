import React from "react";
import { TechSkill } from "../types/orbit";

/**
 * TECH_SKILLS Data Registry
 * 
 * Defines all skill nodes orbiting around the central profile visual.
 * Includes official brand SVG marks, category tags, proficiency metrics,
 * and orbit CSS animation classes.
 */
export const TECH_SKILLS: TechSkill[] = [
  {
    id: "react",
    name: "React / Next.js",
    category: "Frontend",
    level: "Advanced",
    experience: "4+ Years",
    color: "from-cyan-400 to-blue-500",
    badgeBg: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
    orbitClass: "w-[90%] h-[90%] animate-[spin_32s_linear_infinite]",
    positionClass: "top-[6%] left-[74%]",
    svgIcon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        alt="React"
        className="w-5 h-5 object-contain"
      />
    ),
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Language",
    level: "Advanced",
    experience: "3+ Years",
    color: "from-blue-500 to-indigo-600",
    badgeBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    orbitClass: "w-[84%] h-[84%] animate-[spin_24s_linear_infinite_reverse]",
    positionClass: "bottom-[5%] left-[78%]",
    svgIcon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        alt="TypeScript"
        className="w-5 h-5 object-contain"
      />
    ),
  },
  {
    id: "nodejs",
    name: "Node.js / Express",
    category: "Backend",
    level: "Advanced",
    experience: "4+ Years",
    color: "from-emerald-400 to-green-600",
    badgeBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    orbitClass: "w-[84%] h-[84%] animate-[spin_19s_linear_infinite]",
    positionClass: "top-[78%] left-[10%]",
    svgIcon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        alt="Node.js"
        className="w-5 h-5 object-contain"
      />
    ),
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Styling",
    level: "Expert",
    experience: "4+ Years",
    color: "from-teal-400 to-cyan-500",
    badgeBg: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20",
    orbitClass: "w-[78%] h-[78%] animate-[spin_15s_linear_infinite_reverse]",
    positionClass: "top-[10%] left-[16%]",
    svgIcon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
        alt="Tailwind CSS"
        className="w-5 h-5 object-contain"
      />
    ),
  },
  {
    id: "ai-ml",
    name: "Python & AI/ML",
    category: "AI & ML",
    level: "Intermediate",
    experience: "1+ Year",
    color: "from-amber-400 to-orange-500",
    badgeBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    orbitClass: "w-[72%] h-[72%] animate-[spin_21s_linear_infinite]",
    positionClass: "bottom-[8%] right-[14%]",
    svgIcon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        alt="Python"
        className="w-5 h-5 object-contain"
      />
    ),
  },
];
