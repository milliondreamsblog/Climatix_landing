import React from 'react';
import { ArrowRight } from 'lucide-react';

export const LaserFlow: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col md:flex-row items-center justify-center relative w-full h-full min-h-[60px] px-0">
      
      {/* Gradient Beam Arrow */}
      <div className="relative w-full flex items-center">
          
          {/* Main Beam - Tighter gradient for a more 'focused' laser look */}
          <div className="w-full h-10 md:h-12 bg-gradient-to-r from-transparent via-brand/10 via-10% via-brand/80 via-30% to-brand relative rounded-r-full shadow-[0_0_30px_rgba(2,91,95,0.4)] overflow-hidden">
             
             {/* Dynamic Shooting Light - Shimmer effect */}
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-[50%] animate-shimmer pointer-events-none"></div>

             {/* Inner bright core - Layer 1: Soft Glow */}
             <div className="absolute top-1/2 left-[10%] right-0 -translate-y-1/2 h-[6px] bg-white/20 blur-[2px] rounded-full"></div>
             
             {/* Inner bright core - Layer 2: High Intensity Center */}
             <div className="absolute top-1/2 left-[15%] right-2 -translate-y-1/2 h-[2px] bg-white/70 blur-[0.5px] rounded-full"></div>
          </div>
          
          {/* Arrow Head - Enhanced with a pulse-like drop shadow and better centering */}
          <div className="relative flex items-center justify-center">
            {/* Background glow for the arrowhead */}
            <div className="absolute w-12 h-12 bg-brand/40 blur-xl rounded-full animate-pulse-slow"></div>
            
            <ArrowRight 
              className="w-16 h-16 md:w-20 md:h-20 text-brand -ml-5 md:-ml-8 filter drop-shadow-[0_0_15px_rgba(2,91,95,0.7)] relative z-10" 
              strokeWidth={4} 
            />
          </div>
      </div>

    </div>
  );
};