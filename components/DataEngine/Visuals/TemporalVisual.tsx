import React from 'react';
import { Clock, TrendingUp } from 'lucide-react';

export const TemporalVisual: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-end items-center gap-4 select-none" aria-hidden="true">
      {/* Chart Area */}
      <div className="flex items-end gap-3 h-32 pb-2 w-full max-w-[240px]">
        {/* Historical Bars - Darker gray in light mode, transparent white in dark mode */}
        <div className="flex-1 bg-zinc-200 dark:bg-white/20 rounded-t-sm animate-grow-up [animation-delay:0ms] h-[30%] hover:bg-zinc-300 dark:hover:bg-white/40 transition-colors"></div>
        <div className="flex-1 bg-zinc-200 dark:bg-white/20 rounded-t-sm animate-grow-up [animation-delay:100ms] h-[45%] hover:bg-zinc-300 dark:hover:bg-white/40 transition-colors"></div>
        <div className="flex-1 bg-zinc-200 dark:bg-white/20 rounded-t-sm animate-grow-up [animation-delay:200ms] h-[60%] hover:bg-zinc-300 dark:hover:bg-white/40 transition-colors"></div>
        
        {/* Projected Bars */}
        <div className="flex-1 bg-[#FF8A65] rounded-t-sm animate-grow-up [animation-delay:300ms] h-[75%] shadow-[0_0_15px_rgba(255,138,101,0.4)]"></div>
        <div className="flex-1 bg-[#FF8A65] rounded-t-sm animate-grow-up [animation-delay:400ms] h-[90%] shadow-[0_0_20px_rgba(255,138,101,0.6)] relative group/bar">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-[#FF8A65] opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap">
            2050
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="flex justify-between w-full max-w-[240px] text-[10px] uppercase font-mono tracking-wider text-zinc-400 dark:text-white/40 border-t border-zinc-200 dark:border-white/10 pt-2 transition-colors">
        <span className="flex items-center gap-1"><Clock size={10} /> 1950-2023</span>
        <span className="flex items-center gap-1 text-[#FF8A65]"><TrendingUp size={10} /> 2050+</span>
      </div>
    </div>
  );
};