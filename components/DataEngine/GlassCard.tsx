import React from 'react';
import { Button } from '../ui/Button';
import { ChevronRight } from 'lucide-react';

interface GlassCardProps {
  badge: string;
  title: string;
  subtitle: string;
  ctaText?: string;
  children: React.ReactNode;
}

export const GlassCard: React.FC<GlassCardProps> = ({ badge, title, subtitle, ctaText, children }) => {
  return (
    <article 
      className="group relative flex flex-col h-full bg-white dark:bg-[#003d33]/50 backdrop-blur-md border border-zinc-200 dark:border-white/10 rounded-[24px] overflow-hidden transition-all duration-500 hover:border-[#FF8A65]/40 shadow-sm hover:shadow-2xl dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] hover:-translate-y-2"
      aria-label={title}
    >
      {/* Top Visual Area */}
      <div className="relative h-64 bg-zinc-50/50 dark:bg-gradient-to-b dark:from-white/5 dark:to-transparent border-b border-zinc-100 dark:border-white/5 flex items-center justify-center overflow-hidden transition-colors duration-500">
        <div className="w-full h-full p-8 flex items-center justify-center scale-95 transition-transform duration-500 group-hover:scale-105">
            {children}
        </div>
        
        {/* Subtle Shine */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 dark:via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      </div>

      {/* Bottom Content Area */}
      <div className="flex flex-col flex-1 p-8">
        
        {/* Badge */}
        <div className="mb-4">
            <span className="inline-block text-[10px] font-bold text-white uppercase tracking-widest bg-[#FF8A65] px-3 py-1 rounded-full shadow-sm">
                {badge}
            </span>
        </div>

        {/* Typography */}
        <h3 className="font-bold text-2xl text-zinc-900 dark:text-white tracking-tight mb-4 transition-colors">
            {title}
        </h3>
        
        <p className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">
          {subtitle}
        </p>

        {/* CTA Button */}
        {ctaText && (
            <div className="mt-auto">
                <Button 
                    variant="outline" 
                    className="w-full sm:w-auto rounded-full bg-zinc-50 dark:bg-white/5 border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-300 font-semibold group/btn hover:border-[#FF8A65]/50 hover:text-[#FF8A65] transition-all"
                >
                    {ctaText}
                    <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
            </div>
        )}
      </div>
    </article>
  );
};