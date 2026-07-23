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
}
