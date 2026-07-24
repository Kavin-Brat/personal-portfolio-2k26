import React from "react";
import { TechSkill } from "../components/SkillNode";

/**
 * TECH_SKILLS Data Registry
 * 
 * Defines all skill nodes orbiting around the central profile visual.
 * Includes official brand SVG marks, category tags, proficiency metrics,
 * and orbit CSS animation classes.
 */
export const TECH_SKILLS: TechSkill[] = [
  // --- Orbit 1: React (Outermost Ring - 92% Radius, Clockwise 42s) ---
  {
    id: "react",
    name: "React / Next.js",
    category: "Frontend",
    level: "Advanced",
    experience: "4+ Years",
    color: "from-cyan-400 to-blue-500",
    badgeBg: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
    orbitClass: "w-[92%] h-[92%] animate-[spin_42s_linear_infinite]",
    positionClass: "top-0 left-1/2 -translate-x-1/2",
    svgIcon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        alt="React"
        className="w-5 h-5 object-contain"
      />
    ),
  },

  // --- Orbit 2: Python & AI/ML (Outer-Mid Ring - 84% Radius, Clockwise 34s) ---
  {
    id: "ai-ml",
    name: "Python & AI/ML",
    category: "AI & ML",
    level: "Intermediate",
    experience: "1+ Year",
    color: "from-amber-400 to-orange-500",
    badgeBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    orbitClass: "w-[84%] h-[84%] animate-[spin_34s_linear_infinite]",
    positionClass: "top-1/2 right-0 -translate-y-1/2",
    tooltipClass: "right-[-8px] translate-x-0 md:left-1/2 md:-translate-x-1/2",
    arrowClass: "right-4 translate-x-0 md:left-1/2 md:-translate-x-1/2",
    svgIcon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        alt="Python"
        className="w-5 h-5 object-contain"
      />
    ),
  },

  // --- Orbit 3: Node.js (Mid Ring - 76% Radius, Clockwise 27s) ---
  {
    id: "nodejs",
    name: "Node.js / Express",
    category: "Backend",
    level: "Advanced",
    experience: "4+ Years",
    color: "from-emerald-400 to-green-600",
    badgeBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    orbitClass: "w-[76%] h-[76%] animate-[spin_27s_linear_infinite]",
    positionClass: "top-1/2 left-0 -translate-y-1/2",
    tooltipClass: "left-[-8px] translate-x-0 md:left-1/2 md:-translate-x-1/2",
    arrowClass: "left-4 translate-x-0 md:left-1/2 md:-translate-x-1/2",
    svgIcon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        alt="Node.js"
        className="w-5 h-5 object-contain"
      />
    ),
  },

  // --- Orbit 4: TypeScript (Mid Ring - 78% Radius, Clockwise 23s) ---
  {
    id: "typescript",
    name: "TypeScript",
    category: "Language",
    level: "Advanced",
    experience: "3+ Years",
    color: "from-blue-500 to-indigo-600",
    badgeBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    orbitClass: "w-[78%] h-[78%] animate-[spin_23s_linear_infinite]",
    positionClass: "bottom-0 left-1/2 -translate-x-1/2",
    svgIcon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        alt="TypeScript"
        className="w-5 h-5 object-contain"
      />
    ),
  },

  // --- Orbit 5: AI Tools (Innermost Ring - 60% Radius, Clockwise 16s) ---
  {
    id: "ai-tools",
    name: "Gemini • OpenAI • Claude",
    category: "AI / LLM Stack",
    level: "Development",
    experience: "1+ Year",
    color: "from-blue-400 via-indigo-500 to-purple-500",
    badgeBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    orbitClass: "w-[60%] h-[60%] animate-[spin_16s_linear_infinite]",
    positionClass: "top-0 left-1/2 -translate-x-1/2",
    svgIcon: (
      <img
        src="https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/gemini.svg"
        alt="Gemini"
        className="w-5 h-5 object-contain"
      />
    ),
  },
  // --- Orbit 6: Tailwind CSS (Innermost Ring - 60% Radius, Clockwise 16s) ---
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "Styling",
    level: "Expert",
    experience: "4+ Years",
    color: "from-teal-400 to-cyan-500",
    badgeBg: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20",
    orbitClass: "w-[60%] h-[60%] animate-[spin_16s_linear_infinite]",
    positionClass: "bottom-0 left-1/2 -translate-x-1/2",
    svgIcon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
        alt="Tailwind CSS"
        className="w-5 h-5 object-contain"
      />
    ),
  },
];
