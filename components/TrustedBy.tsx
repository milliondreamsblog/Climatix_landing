import React from 'react';
import { Globe, Satellite, Landmark, Waves } from 'lucide-react';

export const TrustedBy: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900 relative overflow-hidden">
      
      {/* Background decoration - matching the grid from other sections */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <p className="text-center text-xs font-bold text-zinc-500 dark:text-zinc-500 uppercase tracking-[0.2em] mb-12">
          Trusted by Leading Institutions
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-700">
           
           {/* Logo 1: Global/World Bank Style */}
           <div className="group flex flex-col items-center gap-2 cursor-pointer hover:-translate-y-1 transition-transform duration-300">
              <Globe className="w-12 h-12 md:w-14 md:h-14 text-zinc-700 dark:text-zinc-300 group-hover:text-brand" strokeWidth={1.2} />
           </div>

           {/* Logo 2: Satellite/Space Agency */}
           <div className="group flex flex-col items-center gap-2 cursor-pointer hover:-translate-y-1 transition-transform duration-300">
              <Satellite className="w-12 h-12 md:w-14 md:h-14 text-zinc-700 dark:text-zinc-300 group-hover:text-blue-500" strokeWidth={1.2} />
           </div>

           {/* Logo 3: University Seal */}
           <div className="group flex flex-col items-center gap-2 cursor-pointer hover:-translate-y-1 transition-transform duration-300">
               <div className="relative flex items-center justify-center w-14 h-14 rounded-full border-2 border-zinc-700 dark:border-zinc-300 group-hover:border-red-800 transition-colors p-2">
                   <Landmark className="w-6 h-6 text-zinc-700 dark:text-zinc-300 group-hover:text-red-800" strokeWidth={1.5} />
                   <svg className="absolute inset-0 w-full h-full rotate-[-90deg]" viewBox="0 0 100 100">
                        <path id="curve" d="M 25, 50 a 25,25 0 1,1 50,0 a 25,25 0 1,1 -50,0" fill="transparent" />
                        <text className="text-[10px] fill-current text-zinc-700 dark:text-zinc-300 group-hover:fill-red-800 uppercase font-bold tracking-widest">
                            <textPath href="#curve" startOffset="50%" textAnchor="middle">University</textPath>
                        </text>
                   </svg>
               </div>
           </div>

           {/* Logo 4: Hazard Agency (NOAA Style) */}
            <div className="group flex flex-col items-center gap-2 cursor-pointer hover:-translate-y-1 transition-transform duration-300">
               <div className="w-14 h-14 rounded-full border-2 border-zinc-700 dark:border-zinc-300 group-hover:border-cyan-600 flex items-center justify-center relative overflow-hidden transition-colors">
                   <Waves className="w-8 h-8 text-zinc-700 dark:text-zinc-300 group-hover:text-cyan-600 absolute top-2" strokeWidth={1.5} />
                   <div className="absolute bottom-0 w-full h-[40%] bg-zinc-700 dark:bg-zinc-300 group-hover:bg-cyan-600 opacity-20 group-hover:opacity-40 transition-colors"></div>
               </div>
           </div>

        </div>
      </div>
    </section>
  );
};