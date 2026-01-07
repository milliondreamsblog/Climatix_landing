import React from 'react';
import { GlassCard } from './GlassCard';
import { TemporalVisual } from './Visuals/TemporalVisual';
import { SpatialVisual } from './Visuals/SpatialVisual';
import { HazardVisual } from './Visuals/HazardVisual';

export const DataEngine: React.FC = () => {
  return (
    <section className="relative bg-zinc-50 dark:bg-[#004d40] py-32 overflow-hidden transition-colors duration-500">
      
      {/* Background Grid Overlay - Adaptive */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] dark:hidden"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      ></div>
      <div className="absolute inset-0 pointer-events-none opacity-[0.15] hidden dark:block"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      ></div>

      {/* Soft Vignette */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-zinc-50/80 dark:to-[#004d40] opacity-90 pointer-events-none transition-colors duration-500"></div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        
        {/* Header - Left Aligned */}
        <div className="max-w-4xl mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white mb-8 tracking-tight leading-[1.1] transition-colors duration-300">
                Docs tools for teams who<br/>
                <span className="text-[#FF8A65]">care about quality.</span>
            </h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl transition-colors duration-300">
                Streamline your climate risk workflows with better collaboration, 
                version-controlled datasets, and proactive AI-driven anomaly detection.
            </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
            
            {/* Card 1: Temporal Depth */}
            <GlassCard 
                badge="TIME SERIES"
                title="Centennial & Future Horizons"
                subtitle="Access climate data spanning over a century of observations (1901-2024) seamlessly integrated with CMIP6-aligned projections extending to 2100. Why limit your analysis to incomplete temporal coverage?"
                ctaText="Explore Timeline"
            >
                <TemporalVisual />
            </GlassCard>

            {/* Card 2: Spatial Resolution */}
            <GlassCard 
                badge="SPATIAL PRECISION"
                title="Sub-District Granularity"
                subtitle="Navigate from state-level overviews to sub-district precision across 500+ micro-regions. Our hierarchical spatial indexing ensures you can zoom into the exact geographic resolution your analysis demands."
                ctaText="View Coverage Map"
            >
                <SpatialVisual />
            </GlassCard>

            {/* Card 3: Hazard Indices */}
            <GlassCard 
                badge="AI AGENT"
                title="Compound Hazard Metrics"
                subtitle="Monitor Heat, Flood, Drought, and Wet Spell indices calculated using standardized methods (SPI, CDD, R20mm). Our system learns from historical patterns and proactively generates multi-hazard risk assessments."
                ctaText="View Indices"
            >
                <HazardVisual />
            </GlassCard>

        </div>
      </div>
    </section>
  );
};