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
      {/* Background ambient glow behind central sphere */}
      <div className="absolute inset-0 rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-3xl ml-4 pointer-events-none" />

      {/* Central Profile Avatar Component */}
      <CentralAvatar
        imageSrc="/kavin_profile_pic.png"
        altText="Kavin Barath"
      />

      {/* Orbiting Skill Nodes */}
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
