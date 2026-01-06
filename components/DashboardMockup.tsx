import React, { useState, useEffect } from 'react';
import { Map, BarChart3, CloudRain, Layers, Settings, Bell, Search, Menu, ChevronDown, Download, Share2, Calendar, Database, Thermometer, Wind, Droplets, Zap, Activity, Waves } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const TABS = [
  { id: 'hazard', label: 'Multi-Hazard', icon: CloudRain, color: '#025B5F' }, // Brand Green
  { id: 'temp', label: 'Temperature', icon: Thermometer, color: '#f97316' }, // Orange
  { id: 'precip', label: 'Precipitation', icon: Droplets, color: '#10b981' }, // Emerald (Secondary Green)
  { id: 'wind', label: 'Wind Speed', icon: Wind, color: '#d97706' } // Dark Amber/Orange
];

const DURATION = 5000; // 5 seconds per tab

export const DashboardMockup: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % TABS.length);
    }, DURATION);
    return () => clearInterval(timer);
  }, [activeTab]); // Reset timer when tab changes manually or auto

  const currentTabInfo = TABS[activeTab];

  // Dynamic content logic
  const getGradientColors = (id: string) => {
    switch (id) {
        case 'temp': return { start: '#f97316', end: '#fdba74' }; // Orange -> Light Orange
        case 'precip': return { start: '#10b981', end: '#6ee7b7' }; // Emerald -> Light Emerald
        case 'wind': return { start: '#d97706', end: '#fcd34d' }; // Dark Orange -> Amber
        default: return { start: '#025B5F', end: '#2dd4bf' }; // Brand Green -> Teal
    }
  };

  const gradient = getGradientColors(currentTabInfo.id);

  return (
    <div className="w-full h-full bg-transparent flex flex-col relative group overflow-hidden font-sans select-none transition-colors duration-300">
      {/* Top Navigation Bar - Opaque */}
      <div className="h-14 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between px-4 bg-white dark:bg-zinc-900 z-20">
        <div className="flex items-center gap-4">
          <Menu className="w-5 h-5 text-zinc-500 cursor-pointer hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors" />
          
          {/* Live Indicator */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-700">
            <div className="w-2 h-2 rounded-full bg-orange-500 animate-[pulse_2s_ease-in-out_infinite]"></div>
            <span className="text-xs font-medium text-zinc-600 dark:text-zinc-300">Live Intelligence</span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
           <div className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors cursor-pointer relative">
              <Bell className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />
              <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-brand rounded-full"></div>
           </div>
           {/* User Avatar with Smiling Face */}
           <img 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop" 
              alt="User Profile" 
              className="w-8 h-8 rounded-full border border-zinc-200 dark:border-zinc-700 shadow-sm object-cover cursor-pointer hover:opacity-90 transition-opacity" 
           />
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar - Opaque */}
        <div className="w-16 border-r border-zinc-200 dark:border-zinc-800 flex flex-col items-center py-6 gap-6 bg-white dark:bg-zinc-900 z-20 transition-colors">
            <div className="p-2.5 bg-brand/10 text-brand rounded-xl shadow-sm"><Map className="w-5 h-5" /></div>
            <div className="p-2.5 text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors cursor-pointer"><BarChart3 className="w-5 h-5" /></div>
            <div className="p-2.5 text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors cursor-pointer"><Layers className="w-5 h-5" /></div>
            <div className="p-2.5 text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors cursor-pointer"><Database className="w-5 h-5" /></div>
            <div className="mt-auto p-2.5 text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors cursor-pointer"><Settings className="w-5 h-5" /></div>
        </div>

        {/* Main Map Area - Solid/Opaque BG */}
        <div className="flex-1 relative bg-zinc-100 dark:bg-black transition-colors overflow-hidden">
             
             {/* Dynamic Map Background Pattern */}
             <div className="absolute inset-0 opacity-[0.4] dark:opacity-[0.3] transition-opacity duration-1000">
                <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
                    <filter id="noiseFilter">
                        <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch"/>
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noiseFilter)" opacity="0.3" />
                    
                    {/* Animated Heatmap Blobs - Changing colors AND POSITIONS based on tab to visually simulate distinct images */}
                    <AnimatePresence mode="wait">
                         <motion.g 
                             key={activeTab}
                             initial={{ opacity: 0, scale: 0.95 }}
                             animate={{ opacity: 1, scale: 1 }}
                             exit={{ opacity: 0, scale: 1.05 }}
                             transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                         >
                            {activeTab === 0 && ( // Hazard (Multi) - Brand Green
                                <>
                                    <circle cx="200" cy="200" r="150" fill="url(#dynamicGradient1)" opacity="0.6" />
                                    <circle cx="600" cy="400" r="180" fill="url(#dynamicGradient2)" opacity="0.5" />
                                    <path d="M 0 500 Q 400 300 800 500" stroke="url(#dynamicGradient1)" strokeWidth="40" fill="none" opacity="0.3" filter="blur(20px)" />
                                </>
                            )}
                            {activeTab === 1 && ( // Temperature (Orange)
                                <>
                                    <ellipse cx="400" cy="300" rx="300" ry="200" fill="url(#dynamicGradient1)" opacity="0.5" />
                                    <circle cx="400" cy="300" r="100" fill="url(#dynamicGradient2)" opacity="0.7" />
                                </>
                            )}
                            {activeTab === 2 && ( // Precip (Emerald)
                                <>
                                    <circle cx="150" cy="150" r="120" fill="url(#dynamicGradient1)" opacity="0.6" />
                                    <circle cx="350" cy="250" r="100" fill="url(#dynamicGradient2)" opacity="0.5" />
                                    <circle cx="650" cy="150" r="140" fill="url(#dynamicGradient1)" opacity="0.6" />
                                    <circle cx="500" cy="450" r="160" fill="url(#dynamicGradient2)" opacity="0.5" />
                                </>
                            )}
                            {activeTab === 3 && ( // Wind (Dark Amber)
                                <>
                                    <path d="M -100 100 C 200 100, 400 300, 900 300" stroke="url(#dynamicGradient1)" strokeWidth="60" fill="none" opacity="0.4" filter="blur(30px)" />
                                    <path d="M -100 300 C 300 300, 500 500, 900 500" stroke="url(#dynamicGradient2)" strokeWidth="50" fill="none" opacity="0.4" filter="blur(30px)" />
                                    <circle cx="600" cy="200" r="150" fill="url(#dynamicGradient1)" opacity="0.3" />
                                </>
                            )}
                        </motion.g>
                    </AnimatePresence>
                    
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-zinc-300 dark:text-zinc-700" opacity="0.3"/>
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                    
                    <defs>
                        <radialGradient id="dynamicGradient1">
                            <stop offset="0%" stopColor={gradient.start} stopOpacity="0.6" />
                            <stop offset="100%" stopColor={gradient.start} stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="dynamicGradient2">
                            <stop offset="0%" stopColor={gradient.end} stopOpacity="0.6" />
                            <stop offset="100%" stopColor={gradient.end} stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
             </div>

             {/* Scanning Line Animation */}
             <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="w-full h-16 bg-gradient-to-b from-transparent via-brand/5 to-brand/20 absolute -top-16 animate-scan">
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand to-transparent shadow-[0_0_20px_2px_rgba(2,91,95,0.6)]"></div>
                </div>
             </div>

             {/* Dynamic Feature Tabs (Vertical Right Side) */}
             <div className="absolute right-4 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-5">
                 {TABS.map((tab, index) => {
                     const isActive = index === activeTab;
                     return (
                         <button 
                             key={tab.id}
                             onClick={() => setActiveTab(index)}
                             className="relative group flex flex-col items-center justify-center outline-none"
                         >
                             {/* Label Tooltip */}
                             <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-white/95 dark:bg-zinc-800/95 border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 text-[10px] font-medium rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none transform translate-x-2 group-hover:translate-x-0 transition-transform duration-200">
                                {tab.label}
                                {/* Arrow */}
                                <span className="absolute top-1/2 right-[-4px] -translate-y-1/2 border-l-4 border-y-4 border-y-transparent border-l-zinc-200 dark:border-l-zinc-700"></span>
                             </span>

                             {/* Icon Container */}
                             <div 
                                className={`w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-500 z-10 
                                ${isActive ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-xl scale-100 border border-zinc-200 dark:border-zinc-600' : 'bg-white/80 dark:bg-zinc-900/80 text-zinc-500 dark:text-zinc-400 scale-90 hover:scale-95 border border-zinc-200/50 dark:border-zinc-800/50'}`}
                             >
                                <tab.icon className={`w-5 h-5 transition-colors duration-300 ${isActive ? 'text-[var(--tab-color)]' : ''}`} style={{ '--tab-color': tab.color } as React.CSSProperties} />
                             </div>

                             {/* Progress Ring (Only if active) */}
                             {isActive && (
                                <svg className="absolute inset-[-6px] w-[56px] h-[56px] rotate-[-90deg] pointer-events-none z-0">
                                     {/* Background Circle */}
                                     <circle
                                        cx="28" cy="28" r="26"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        className="text-zinc-200 dark:text-zinc-700"
                                     />
                                     {/* Progress Circle */}
                                     <circle 
                                         cx="28" cy="28" r="26" 
                                         fill="none"
                                         stroke={tab.color}
                                         strokeWidth="2" 
                                         strokeLinecap="round"
                                         strokeDasharray="163" // 2 * pi * 26 ≈ 163.3
                                         pathLength="100"
                                         className="animate-progress" // Defined in index.html
                                     />
                                 </svg>
                             )}
                         </button>
                     );
                 })}
             </div>

             {/* Top Left Panel: Climate Metrics - Semi-Opaque */}
             <div className="absolute top-8 left-8 w-60 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border border-zinc-200 dark:border-zinc-700 rounded-xl p-5 shadow-xl z-10 flex flex-col gap-4 transition-transform hover:scale-[1.02] duration-300">
                <div className="flex items-center justify-between">
                    <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                        {currentTabInfo.label} Metrics
                    </h3>
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: currentTabInfo.color }}></div>
                </div>
                
                <AnimatePresence mode="wait">
                    <motion.div 
                        key={activeTab}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="flex flex-col gap-4"
                    >
                        {/* Metric 1 */}
                        <div className="flex items-center justify-between group cursor-pointer">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-zinc-50 dark:bg-zinc-800" style={{ color: currentTabInfo.color }}>
                                    <Activity className="w-4 h-4" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-zinc-500 font-medium">
                                        {activeTab === 0 ? 'Risk Score' : activeTab === 1 ? 'Peak Temp' : activeTab === 2 ? 'Precipitation' : 'Max Gust'}
                                    </span>
                                    <span className="text-lg font-bold text-zinc-900 dark:text-white tracking-tight">
                                        {activeTab === 0 ? '82/100' : activeTab === 1 ? '42.4°C' : activeTab === 2 ? '124 mm' : '45 km/h'}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Metric 2 */}
                        <div className="flex items-center justify-between group cursor-pointer">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                                    <Waves className="w-4 h-4" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-zinc-500 font-medium">Anomaly</span>
                                    <span className="text-base font-bold text-zinc-900 dark:text-white">
                                        {activeTab === 0 ? '+12%' : activeTab === 1 ? '+2.1°C' : activeTab === 2 ? '+15%' : '+8km/h'}
                                    </span>
                                </div>
                            </div>
                            <span className="text-[10px] font-bold bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 px-1.5 py-0.5 rounded">+2.4%</span>
                        </div>
                    </motion.div>
                </AnimatePresence>
             </div>

             {/* Top Right Panel: Contextual Analysis - Semi-Opaque */}
             <div className="absolute top-8 right-24 w-72 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border border-zinc-200 dark:border-zinc-700 rounded-xl p-5 shadow-2xl z-10 flex flex-col gap-4 transition-all hover:scale-[1.02]">
                <div>
                    <h3 className="text-sm font-semibold text-zinc-900 dark:text-white flex items-center gap-2 mb-1">
                        <currentTabInfo.icon className="w-4 h-4" style={{ color: currentTabInfo.color }} />
                        {currentTabInfo.label} Analysis
                    </h3>
                    <p className="text-[10px] text-zinc-500">Real-time & Projected Data</p>
                </div>
                
                <div className="space-y-4">
                    {/* Item 1 */}
                    <div>
                        <div className="flex justify-between text-xs mb-2">
                            <span className="text-zinc-700 dark:text-zinc-300 font-medium">Current Severity</span>
                            <span className="font-bold" style={{ color: currentTabInfo.color }}>
                                {activeTab === 0 ? 'High' : activeTab === 1 ? 'Extreme' : 'Moderate'}
                            </span>
                        </div>
                        <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                            <motion.div 
                                key={activeTab}
                                initial={{ width: 0 }}
                                animate={{ width: activeTab === 0 ? '82%' : activeTab === 1 ? '94%' : '45%' }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="h-full rounded-full relative overflow-hidden"
                                style={{ backgroundColor: currentTabInfo.color }}
                            >
                                <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Delivery Formats */}
                    <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex gap-2">
                         <div className="flex-1 text-center py-1 bg-zinc-50 dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700">
                             <span className="text-[10px] text-zinc-400 block uppercase tracking-wider">Format</span>
                             <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">NetCDF</span>
                         </div>
                         <div className="flex-1 text-center py-1 bg-zinc-50 dark:bg-zinc-800 rounded border border-zinc-200 dark:border-zinc-700">
                             <span className="text-[10px] text-zinc-400 block uppercase tracking-wider">Resolution</span>
                             <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">0.25°</span>
                         </div>
                    </div>
                </div>
             </div>

             {/* Bottom Center: Timeline - Semi-Opaque */}
             <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[50%] max-w-md bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md border border-zinc-200 dark:border-zinc-700 rounded-xl p-3 shadow-2xl z-10 transition-colors">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3 text-brand" />
                        <span className="text-[10px] font-semibold text-zinc-900 dark:text-white">Temporal Depth</span>
                    </div>
                    <div className="text-[9px] font-mono text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">1901 — 2100</div>
                </div>
                
                <div className="relative h-6 flex items-center group/timeline cursor-pointer">
                    <div className="absolute left-0 right-0 h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full"></div>
                    <div className="absolute left-0 h-1 bg-emerald-500/50 rounded-l-full w-[45%]"></div>
                    <div className="absolute left-[45%] h-1 bg-brand w-[20%] relative overflow-hidden rounded-r-full">
                        <div className="absolute inset-0 bg-white/30 animate-shimmer"></div>
                    </div>
                    <div className="absolute left-0 top-3 text-[8px] text-zinc-400 font-medium">1901</div>
                    <div className="absolute left-[45%] top-3 text-[8px] text-zinc-900 dark:text-white font-bold -translate-x-1/2">Present</div>
                    <div className="absolute right-0 top-3 text-[8px] text-zinc-400 font-medium">2100</div>
                    <div className="absolute left-[65%] top-1/2 -translate-y-1/2 w-3 h-3 bg-white dark:bg-brand border-2 border-brand dark:border-white rounded-full shadow-lg z-10 -translate-x-1/2 transition-transform group-hover/timeline:scale-125"></div>
                </div>
             </div>

        </div>
      </div>
    </div>
  );
};