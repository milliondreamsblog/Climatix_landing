import React from 'react';
import { Flame, Droplet, Leaf, CloudRain, Zap } from 'lucide-react';

export const HazardVisual: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none" aria-hidden="true">
       {/* Central Node */}
       <div className="absolute w-14 h-14 bg-[#FF8A65] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,138,101,0.5)] z-10 animate-pulse-slow">
            <Zap size={28} className="text-white" fill="white" />
       </div>

       {/* Orbiting Nodes */}
       <div className="absolute w-44 h-44 border border-zinc-200 dark:border-white/10 rounded-full animate-spin-slow transition-colors">
            {/* Top: Heat (Fire) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-[#004d40] p-2 rounded-full border border-zinc-200 dark:border-white/20 transition-colors shadow-sm">
                <Flame size={18} className="text-[#FF8A65]" />
            </div>
            {/* Bottom: Precipitation (CloudRain) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white dark:bg-[#004d40] p-2 rounded-full border border-zinc-200 dark:border-white/20 transition-colors shadow-sm">
                <CloudRain size={18} className="text-blue-400" />
            </div>
            {/* Left: Drought (Leaf) */}
            <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-[#004d40] p-2 rounded-full border border-zinc-200 dark:border-white/20 transition-colors shadow-sm">
                <Leaf size={18} className="text-emerald-500" />
            </div>
            {/* Right: Water (Droplet) */}
            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-white dark:bg-[#004d40] p-2 rounded-full border border-zinc-200 dark:border-white/20 transition-colors shadow-sm">
                <Droplet size={18} className="text-blue-500" />
            </div>
       </div>
       
       {/* Background Rings */}
       <div className="absolute w-28 h-28 border border-zinc-200 dark:border-white/5 rounded-full transition-colors"></div>
       <div className="absolute w-64 h-64 border border-zinc-200 dark:border-white/5 rounded-full border-dashed opacity-50 transition-colors"></div>
    </div>
  );
};