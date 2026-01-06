import React from 'react';
import { Button } from './ui/Button';
import { Globe } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-nav transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Left: Logo Area */}
        <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 flex items-center justify-center">
                {/* Circular Animation around logo */}
                <div className="absolute inset-0 rounded-full border border-zinc-200 dark:border-zinc-700"></div>
                <div className="absolute inset-[-2px] rounded-full border border-transparent border-t-brand border-r-brand/30 animate-spin-slow"></div>
                <div className="relative z-10 w-8 h-8 bg-zinc-100 dark:bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-200 dark:border-zinc-800">
                     <Globe className="w-5 h-5 text-brand" />
                </div>
            </div>
            
            <div className="flex flex-col justify-center h-[36px]">
                <span className="font-bold text-lg tracking-tight text-zinc-900 dark:text-white leading-none">Climatics</span>
                <span className="text-[10px] text-zinc-500 dark:text-zinc-500 uppercase tracking-widest leading-none mt-1">Intelligence</span>
            </div>
        </div>

        {/* Center: Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <a href="#" className="hover:text-brand dark:hover:text-white transition-colors">Platform</a>
            <a href="#" className="hover:text-brand dark:hover:text-white transition-colors">Datasets</a>
            <a href="#" className="hover:text-brand dark:hover:text-white transition-colors">Research</a>
        </div>

        {/* Right: CTA & Theme Toggle */}
        <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button size="sm" variant="default" className="font-semibold">
                Get Started
            </Button>
        </div>
      </div>
    </nav>
  );
};