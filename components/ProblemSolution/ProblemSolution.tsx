import React from 'react';
import { ChaosVisual } from './ChaosVisual';
import { LaserFlow } from './LaserFlow';
import { ClarityCard } from './ClarityCard';
import { Button } from '../ui/Button';
import { ArrowRight, Code2 } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-zinc-950 relative overflow-hidden border-t border-zinc-100 dark:border-zinc-900">
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">
                Turn Raw Climate Chaos into <span className="text-brand relative inline-block">
                    Risk Clarity
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                    </svg>
                </span>
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Stop wasting months on data prep. Climatics delivers harmonized, analysis-ready intelligence via API in milliseconds.
            </p>
        </div>

        {/* Flow Grid */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-0 mb-16 relative">
            
            {/* Left: Chaos - Lower Z-Index so arrow goes over it */}
            <div className="flex-1 w-full flex justify-center md:justify-end z-10">
                <ChaosVisual />
            </div>

            {/* Center: Laser - Higher Z-Index to sit on top of Chaos */}
            {/* Shifted left (negative margin) to overlap chaos for blending, but gradient makes it look like it starts forward */}
            {/* Replaced translate-y-[4px] with top-[2px] to force position shift */}
            <div className="w-full md:w-auto lg:w-[42rem] flex justify-center self-center py-12 md:py-0 md:mt-12 top-[2px] lg:-ml-12 lg:-mr-32 z-20 relative">
                <LaserFlow />
            </div>

            {/* Right: Clarity - Z-Index 20 to stay consistent, DOM order ensures it stays on top of arrow end if they overlap */}
            <div className="flex-1 w-full flex justify-center md:justify-start z-20">
                <ClarityCard />
            </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
            <Button size="lg" className="h-12 px-8 gap-2 group bg-brand hover:bg-brand-dark text-white shadow-lg shadow-brand/20">
                <Code2 className="w-4 h-4" />
                <span className="font-semibold">See the API Docs</span>
                <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </Button>
        </div>

      </div>
    </section>
  );
};