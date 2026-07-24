import React from "react";
import Image from "next/image";

interface CentralAvatarProps {
  imageSrc: string;
  altText: string;
}

/**
 * CentralAvatar Component
 * 
 * Renders the central profile picture with a shine sweep hover effect,
 * ambient background glow, and theme-adaptive borders.
 */
export const CentralAvatar: React.FC<CentralAvatarProps> = React.memo(
  ({ imageSrc, altText }) => {
    return (
      <div className="relative w-[44%] h-[44%] md:w-[48%] md:h-[48%] rounded-full border-3 border-slate-300 dark:border-slate-800/80 bg-white dark:bg-slate-950 shadow-[0_10px_35px_rgba(0,0,0,0.15)] dark:shadow-[0_0_50px_rgba(99,102,241,0.15)] flex items-center justify-center overflow-hidden group z-10 cursor-pointer">
        <Image
          src={imageSrc}
          alt={altText}
          fill
          priority
          className="object-cover object-top pointer-events-none"
        />
        {/* Shine sweep hover effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out pointer-events-none z-20" />
      </div>
    );
  }
);

CentralAvatar.displayName = "CentralAvatar";
