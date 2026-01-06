import React from 'react';
import { AlertTriangle, XCircle, FileText, Database, AlertOctagon } from 'lucide-react';

export const ChaosVisual: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center z-10">
      
      {/* Background Image Blob - Now the primary visual element behind the badges */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[180%] -z-10 opacity-100 pointer-events-none select-none mix-blend-multiply dark:mix-blend-normal dark:opacity-80">
            <img 
                decoding="auto" 
                src="https://framerusercontent.com/images/UBZ9X5BHbNP7sRuU7qGfH2i38C8.png?width=2268&height=1004" 
                alt="" 
                className="w-full h-full object-contain rotate-180"
            />
      </div>

      {/* Top Label */}
      <div className="text-base font-bold text-zinc-900 dark:text-white mb-8">Raw Data Processing</div>

      {/* Container for Badges - Transparent, no card styles */}
      <div className="relative w-80 h-56 md:w-96 md:h-64 flex items-center justify-center">
         
         {/* Badges - Floating directly on the composition */}
         
         {/* Top Left - Error */}
         <div className="absolute top-5 left-0 md:left-5 bg-white/95 dark:bg-zinc-900/90 backdrop-blur-md shadow-lg border border-red-100 dark:border-red-900/30 text-zinc-800 dark:text-zinc-200 px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-bold transition-transform hover:scale-105 duration-300 animate-pulse">
            <div className="bg-red-50 dark:bg-red-900/20 p-0.5 rounded-sm">
              <AlertTriangle className="w-3 h-3 text-red-500" />
            </div>
            Error
         </div>

         {/* Top Right - Missing Values */}
         <div className="absolute top-8 right-0 md:right-6 bg-white/95 dark:bg-zinc-900/90 backdrop-blur-md shadow-lg border border-orange-100 dark:border-orange-900/30 text-zinc-800 dark:text-zinc-200 px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-bold transition-transform hover:scale-105 duration-300 delay-75">
            <div className="bg-orange-50 dark:bg-orange-900/20 p-0.5 rounded-sm">
                <XCircle className="w-3 h-3 text-orange-500" />
            </div>
            Missing Values
         </div>

         {/* Middle Left - Error */}
         <div className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/95 dark:bg-zinc-900/90 backdrop-blur-md shadow-lg border border-red-100 dark:border-red-900/30 text-zinc-800 dark:text-zinc-200 px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-bold transition-transform hover:scale-105 duration-300 delay-100">
            <div className="bg-red-50 dark:bg-red-900/20 p-0.5 rounded-sm">
                <AlertOctagon className="w-3 h-3 text-red-500" />
            </div>
            Error
         </div>

         {/* Bottom Left - Raw Data */}
         <div className="absolute bottom-5 left-4 md:left-8 bg-white/95 dark:bg-zinc-900/90 backdrop-blur-md shadow-lg border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-bold transition-transform hover:scale-105 duration-300 delay-150">
            <div className="bg-zinc-100 dark:bg-zinc-800 p-0.5 rounded-sm">
                <Database className="w-3 h-3 text-zinc-500" />
            </div>
            Raw Data
         </div>

         {/* Bottom Right - Unstructured */}
         <div className="absolute bottom-6 right-2 md:right-8 bg-white/95 dark:bg-zinc-900/90 backdrop-blur-md shadow-lg border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 px-3 py-1.5 rounded-lg flex items-center gap-2 text-xs font-bold transition-transform hover:scale-105 duration-300 delay-200">
            <div className="bg-zinc-100 dark:bg-zinc-800 p-0.5 rounded-sm">
                <FileText className="w-3 h-3 text-zinc-500" />
            </div>
            Unstructured
         </div>
      </div>

      {/* Bottom Label */}
      <div className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-8">8 Months of Cleaning</div>
    </div>
  );
};