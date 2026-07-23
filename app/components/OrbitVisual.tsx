"use client";

import React, { useState, useCallback } from "react";
import { CentralAvatar } from "./CentralAvatar";
import { SkillNode, TechSkill } from "./SkillNode";
import { TECH_SKILLS } from "../constants/orbitSkills";

/**
 * OrbitVisual Component
 * 
 * Interactive Hero section visual featuring an orbiting galaxy of tech skills
 * surrounding a central profile picture. Supports hover-to-pause animations,
 * high-resolution colored brand icons, and rich animated popover tooltips.
 */
const OrbitVisual: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<TechSkill | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Memoized event handlers to prevent unnecessary child re-renders
  const handleNodeMouseEnter = useCallback((skill: TechSkill) => {
    setIsPaused(true);
    setActiveSkill(skill);
  }, []);

  const handleNodeMouseLeave = useCallback(() => {
    setIsPaused(false);
    setActiveSkill(null);
  }, []);

  const handleNodeClick = useCallback((skill: TechSkill) => {
    setActiveSkill((prev) => (prev?.id === skill.id ? null : skill));
  }, []);

  return (
    <div className="flex-1 flex items-center justify-center relative w-full max-w-[400px] md:max-w-[480px] lg:max-w-[540px] aspect-square select-none">
      {/* 3 Decorative Colored Planet Dots */}
      {/* Dot 1: Vibrant Orange Planet Dot on Outer Orbit */}
      <div
        className="absolute w-[95%] h-[95%] rounded-full animate-[spin_40s_linear_infinite] pointer-events-none"
        style={{ animationPlayState: isPaused ? "paused" : "running" }}
      >
        <div className="absolute top-[8%] left-[78%] w-4 h-4 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 shadow-[0_0_12px_rgba(245,158,11,0.6)]" />
      </div>

      {/* Dot 2: Emerald/Teal Planet Dot on Mid Orbit */}
      <div
        className="absolute w-[82%] h-[82%] rounded-full animate-[spin_26s_linear_infinite] pointer-events-none"
        style={{ animationPlayState: isPaused ? "paused" : "running" }}
      >
        <div className="absolute bottom-[2%] left-[15%] w-3.5 h-3.5 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 shadow-md" />
      </div>

      {/* Dot 3: Indigo/Purple Planet Dot on Inner Orbit */}
      <div
        className="absolute w-[70%] h-[70%] rounded-full animate-[spin_18s_linear_infinite] pointer-events-none"
        style={{ animationPlayState: isPaused ? "paused" : "running" }}
      >
        <div className="absolute top-[84%] right-[22%] w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 shadow-inner" />
      </div>

      {/* Central Profile Avatar Component */}
      <CentralAvatar
        imageSrc="/kavin_profile_pic.png"
        altText="Kavin Barath"
      />

      {/* Orbiting Tech Skill Nodes */}
      {TECH_SKILLS.map((skill) => (
        <SkillNode
          key={skill.id}
          skill={skill}
          isActive={activeSkill?.id === skill.id}
          isPaused={isPaused}
          onMouseEnter={() => handleNodeMouseEnter(skill)}
          onMouseLeave={handleNodeMouseLeave}
          onClick={() => handleNodeClick(skill)}
        />
      ))}
    </div>
  );
};

export default React.memo(OrbitVisual);
