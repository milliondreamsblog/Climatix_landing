import React from 'react';
import { Wind, Flame, Activity } from 'lucide-react';

export const ClarityCard: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center">
        
        {/* Glow Effect for Arrow Connection */}
        <div className="absolute top-1/2 -left-16 -translate-y-1/2 w-32 h-32 bg-brand/40 blur-[60px] rounded-full pointer-events-none z-0"></div>

        <div className="text-base font-bold text-zinc-900 dark:text-white mb-8 z-10 relative">Instant Hazard Intelligence</div>
      
        <div className="relative w-full max-w-xs bg-white dark:bg-zinc-900 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-zinc-100 dark:border-zinc-800 overflow-hidden z-10">
            
            {/* Card Header */}
            <div className="p-5 border-b border-zinc-50 dark:border-zinc-800 flex items-center gap-3">
                <Wind className="w-5 h-5 text-brand" />
                <span className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">Wind Speed Analysis</span>
            </div>

            {/* Card Body */}
            <div className="p-5 space-y-6">
                
                {/* Metric 1 */}
                <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-orange-50 dark:bg-orange-900/20 rounded-xl border border-orange-100 dark:border-orange-900/30">
                        <Flame className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                        <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-0.5">Drought Risk Score</div>
                        <div className="text-xl font-bold text-zinc-900 dark:text-zinc-100 leading-none">High</div>
                    </div>
                </div>

                {/* Metric 2 */}
                <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-900/30">
                        <Activity className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                        <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-0.5">Anomaly</div>
                        <div className="text-xl font-bold text-zinc-900 dark:text-zinc-100 leading-none">+15%</div>
                    </div>
                </div>

            </div>

            {/* Card Footer */}
            <div className="px-5 py-4 bg-zinc-50/50 dark:bg-zinc-800/30 flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">API Response: 200ms</span>
            </div>
        </div>

       <div className="text-sm font-medium text-zinc-400 mt-10 relative z-10">Analysis-Ready via API</div>
    </div>
  );
};