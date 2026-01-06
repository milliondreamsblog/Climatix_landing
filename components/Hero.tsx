import React from 'react';
import { Button } from './ui/Button';
import { ArrowRight, ChevronRight, PlayCircle } from 'lucide-react';
import { DashboardMockup } from './DashboardMockup';
import { WordRotate } from './ui/WordRotate';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Create parallax effects
  // Moving elements down as user scrolls down creates a "farther away" effect
  // relative to the faster moving foreground content
  const gradientY = useTransform(scrollY, [0, 1000], [0, 400]);
  const gridY = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden flex flex-col items-center">
      
      {/* Background Gradients */}
      <motion.div 
        style={{ y: gradientY }}
        className="absolute top-0 left-0 w-full h-[500px] hero-gradient pointer-events-none"
      />
      
      {/* Grid Pattern */}
      <motion.div 
        style={{ y: gridY }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none dark:[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Badge */}
        <div className="mb-6 inline-flex items-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-dark-surface/50 px-3 py-1 text-sm text-zinc-600 dark:text-zinc-400 backdrop-blur transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-200">
          <span className="flex h-2 w-2 rounded-full bg-brand mr-2 animate-pulse"></span>
          <span>Coverage expanded to 500+ districts</span>
          <ChevronRight className="ml-1 h-3 w-3" />
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6 max-w-4xl">
          Climate intelligence.<br />
          <span className="text-zinc-500 dark:text-zinc-400">
            Ready for <WordRotate words={["decisions", "analysis", "research", "finance", "resilience"]} className="text-brand font-bold" />
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl leading-relaxed">
          Climatics is an AI-powered climate data platform delivering harmonized, 
          high-resolution hazard intelligence across 500+ districts in India — built for 
          insurance, finance, government, and research.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto">
          <Button 
            size="lg" 
            className="w-full sm:w-auto gap-2 group shadow-xl shadow-brand/20 dark:shadow-lg dark:shadow-brand/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-brand/40 dark:hover:shadow-brand/30"
          >
            Request Demo
            <PlayCircle className="w-4 h-4 group-hover:fill-current transition-all" />
          </Button>
          <Button 
            variant="ghost" 
            size="lg" 
            className="w-full sm:w-auto gap-2 text-zinc-600 dark:text-zinc-300 hover:text-brand dark:hover:text-white transition-all duration-300 hover:scale-105 hover:bg-zinc-100/80 dark:hover:bg-zinc-800/80"
          >
            View datasets 
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>

      {/* Dashboard Cut-out Visualization */}
      <div className="relative w-full max-w-6xl mx-auto px-4 md:px-0 mt-8 perspective-container">
        
        {/* 
            Background 3D Fluid Shape 
        */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[180%] md:w-[130%] pointer-events-none select-none opacity-90 dark:opacity-80 mix-blend-normal">
            <img 
                decoding="auto"
                src="https://framerusercontent.com/images/UBZ9X5BHbNP7sRuU7qGfH2i38C8.png?width=2268&height=1004" 
                srcSet="https://framerusercontent.com/images/UBZ9X5BHbNP7sRuU7qGfH2i38C8.png?scale-down-to=512&width=2268&height=1004 512w,https://framerusercontent.com/images/UBZ9X5BHbNP7sRuU7qGfH2i38C8.png?scale-down-to=1024&width=2268&height=1004 1024w,https://framerusercontent.com/images/UBZ9X5BHbNP7sRuU7qGfH2i38C8.png?scale-down-to=2048&width=2268&height=1004 2048w,https://framerusercontent.com/images/UBZ9X5BHbNP7sRuU7qGfH2i38C8.png?width=2268&height=1004 2268w"
                alt="Background Fluid Shape" 
                className="w-full h-full object-contain transition-all duration-700 dark:hue-rotate-[155deg] dark:brightness-110 drop-shadow-2xl"
            />
        </div>

        {/* 
            Perspective Container for 3D effect
        */}
        <div 
            className="relative rounded-t-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#0c0c0e] shadow-2xl transform-style-3d rotate-x-12 scale-[0.95] origin-top transition-all duration-700 hover:rotate-x-6 hover:scale-[0.97]"
            style={{ 
                height: '600px', 
                transform: 'perspective(1200px) rotateX(15deg)',
                maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
            }}
        >
            <DashboardMockup />
            
            {/* Ultra-Refined Glossy Glass Overlay */}
            <div className="absolute inset-0 rounded-t-xl pointer-events-none z-30 overflow-hidden ring-1 ring-white/10 dark:ring-white/5">
                {/* Main Reflection Gradient - adjusted for realism */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-white/10 to-transparent opacity-40 mix-blend-overlay"></div>
                
                {/* Sharp Diagonal Sheen */}
                <div className="absolute -inset-full top-[-50%] w-[200%] h-[200%] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 pointer-events-none mix-blend-soft-light opacity-30"></div>

                {/* Top Edge Rim Light - Sharper */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/90 to-transparent opacity-70"></div>
                
                {/* Inner Glow / Vignette */}
                <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(255,255,255,0.05)] dark:shadow-[inset_0_0_60px_rgba(0,0,0,0.3)]"></div>
            </div>
        </div>
      </div>

    </section>
  );
};