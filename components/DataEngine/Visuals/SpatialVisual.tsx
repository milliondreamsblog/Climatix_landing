import React from 'react';
import { MapPin } from 'lucide-react';

export const SpatialVisual: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center perspective-[800px] group select-none" aria-hidden="true">
      <div className="relative w-32 h-32 transform rotate-x-[60deg] rotate-z-[-45deg] preserve-3d transition-transform duration-700 group-hover:rotate-x-[50deg] group-hover:rotate-z-[-35deg] group-hover:scale-110">
        
        {/* Layer 1: State (Bottom) */}
        <div className="absolute inset-0 border border-zinc-300 dark:border-white/10 bg-zinc-100 dark:bg-white/5 rounded-lg shadow-lg transform translate-z-[-30px] transition-transform duration-500 group-hover:translate-z-[-50px]"></div>

        {/* Layer 2: District (Middle) */}
        <div className="absolute inset-0 border border-zinc-300 dark:border-white/30 bg-zinc-100 dark:bg-white/5 rounded-lg shadow-lg transform translate-z-[0px]"></div>

        {/* Layer 3: Sub-District (Top/Active) */}
        <div className="absolute inset-0 border border-[#FF8A65] bg-[#FF8A65]/10 rounded-lg shadow-[0_0_30px_rgba(255,138,101,0.2)] transform translate-z-[30px] transition-transform duration-500 group-hover:translate-z-[50px] flex items-center justify-center backdrop-blur-sm">
          <MapPin className="text-[#FF8A65] drop-shadow-lg -rotate-[45deg] transform scale-125" size={32} fill="rgba(255,138,101,0.2)" />
        </div>
        
        {/* Connection Lines (CSS) */}
        <div className="absolute top-1/2 left-1/2 w-1 h-20 bg-gradient-to-b from-[#FF8A65] to-transparent opacity-0 group-hover:opacity-50 transform -translate-x-1/2 -translate-y-1/2 translate-z-[-20px] transition-opacity duration-500"></div>
      </div>
    </div>
  );
};