import React from "react";
import Image from "next/image";

const OrbitVisual: React.FC = () => {
  return (
    <div className="flex-1 flex items-center justify-center relative w-full max-w-[400px] md:max-w-[480px] lg:max-w-[540px] aspect-square">
      <div className="absolute inset-0 rounded-full bg-indigo-500/5 dark:bg-indigo-500/5 blur-3xl ml-4" />
      
      {/* Orbital path 1 */}
      <div className="absolute w-[100%] h-[100%] border border-slate-350/30 dark:border-slate-800/40 rounded-full animate-[spin_50s_linear_infinite] pointer-events-none" />
      
      {/* Orbital path 2 */}
      <div className="absolute w-[87%] h-[87%] border border-dashed border-slate-350/30 dark:border-slate-800/50 rounded-full animate-[spin_35s_linear_infinite_reverse] pointer-events-none" />
      
      {/* Orbital path 3 */}
      <div className="absolute w-[74%] h-[74%] border border-slate-350/40 dark:border-slate-800/60 rounded-full animate-[spin_20s_linear_infinite] pointer-events-none" />

      {/* Central Sphere */}
      <div className="relative w-[56%] h-[56%] rounded-full border-4 border-slate-200/50 dark:border-slate-800/80 shadow-[0_0_50px_rgba(99,102,241,0.15)] flex items-center justify-center overflow-hidden group z-10 cursor-pointer">
        <Image
          src="/kavin_profile_pic.png"
          alt="Kavin Barath"
          fill
          priority
          className="object-cover object-top pointer-events-none"
        />
        {/* Shine sweep effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out pointer-events-none z-20" />
      </div>

      {/* Planet 1 on Orbit 1 */}
      <div className="absolute w-[100%] h-[100%] animate-[spin_30s_linear_infinite] pointer-events-none">
        <div className="absolute top-[8%] left-[78%] w-5 h-5 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 shadow-md" />
      </div>
      
      {/* Planet 2 on Orbit 2 */}
      <div className="absolute w-[87%] h-[87%] animate-[spin_18s_linear_infinite_reverse] pointer-events-none">
        <div className="absolute bottom-[2%] left-[15%] w-4.5 h-4.5 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 shadow-md" />
      </div>
      
      {/* Planet 3 on Orbit 3 */}
      <div className="absolute w-[74%] h-[74%] animate-[spin_12s_linear_infinite] pointer-events-none">
        <div className="absolute top-[84%] right-[22%] w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 shadow-inner" />
      </div>
    </div>
  );
};

export default OrbitVisual;
