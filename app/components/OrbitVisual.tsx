import React from "react";

const OrbitVisual: React.FC = () => {
  return (
    <div className="flex-1 flex items-center justify-center relative w-full max-w-[420px] aspect-square">
      <div className="absolute inset-0 rounded-full bg-amber-400/5 dark:bg-amber-500/5 blur-3xl ml-4" />
      
      {/* Orbital path 1 */}
      <div className="absolute w-[90%] h-[90%] border border-slate-350/30 dark:border-slate-800/40 rounded-full animate-[spin_50s_linear_infinite]" />
      
      {/* Orbital path 2 */}
      <div className="absolute w-[68%] h-[68%] border border-dashed border-slate-350/30 dark:border-slate-800/50 rounded-full animate-[spin_35s_linear_infinite_reverse]" />
      
      {/* Orbital path 3 */}
      <div className="absolute w-[45%] h-[45%] border border-slate-350/40 dark:border-slate-800/60 rounded-full animate-[spin_20s_linear_infinite]" />

      {/* Central Sphere */}
      <div className="relative w-36 h-36 rounded-full bg-gradient-to-tr from-amber-500 to-orange-600 dark:from-amber-400 dark:to-orange-500 shadow-[0_0_50px_rgba(245,158,11,0.4)] flex items-center justify-between overflow-hidden group">
        <span className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
        <div className="m-auto text-white text-5xl font-black select-none pointer-events-none tracking-tighter">
          K
        </div>
        {/* Solar flares effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
      </div>

      {/* Planet 1 on Orbit 1 */}
      <div className="absolute w-[90%] h-[90%] animate-[spin_30s_linear_infinite]">
        <div className="absolute top-[8%] left-[78%] w-5 h-5 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 shadow-md" />
      </div>
      
      {/* Planet 2 on Orbit 2 */}
      <div className="absolute w-[68%] h-[68%] animate-[spin_18s_linear_infinite_reverse]">
        <div className="absolute bottom-[2%] left-[15%] w-4.5 h-4.5 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 shadow-md" />
      </div>
      
      {/* Planet 3 on Orbit 3 */}
      <div className="absolute w-[45%] h-[45%] animate-[spin_12s_linear_infinite]">
        <div className="absolute top-[84%] right-[22%] w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 shadow-inner" />
      </div>
    </div>
  );
};

export default OrbitVisual;
