"use client";

import { motion } from "framer-motion";
import { PhysicalButton, StaggerText, CountUp } from "@/components/ui/AnimatedComponents";

const STATS = [
  { value: 50, suffix: "+", label: "Countries" },
  { value: 2.4, suffix: "M", label: "Tonnes" },
  { value: 340, suffix: "+", label: "Vehicles" },
  { value: 12, suffix: "", label: "Branches" },
  { value: 98, suffix: "%", label: "On-Time" },
  { value: 20, suffix: "+", label: "Years" }
];

export default function Hero() {

  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center py-24 bg-navy overflow-hidden z-10">
      

      {/* Grid Background Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none mix-blend-screen opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Extreme Watermark Text */}
      <div className="absolute top-1/2 -translate-y-1/2 right-[-5%] overflow-hidden pointer-events-none select-none z-0">
        <p className="font-heading text-[280px] lg:text-[400px] leading-none tracking-tighter opacity-[0.04] text-white">
          TRANSIT
        </p>
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full flex-grow flex flex-col justify-center">
        
        {/* Badge */}
        <div className="flex items-center gap-4 mb-20">
          <div className="gold-pulse" />
          <p className="text-white text-[10px] font-bold tracking-[0.4em] uppercase">
            EST. NAIROBI &mdash; 6 CONTINENTS &mdash; 50+ COUNTRIES
          </p>
        </div>

        {/* Tagline */}
        <p className="text-gold text-[11px] font-bold tracking-[5px] uppercase mb-12">
          Boundless. Delivered.
        </p>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-20 mb-8 relative z-20">
          {/* Massive Staggered Headings */}
          <div className="flex flex-col gap-0">
             <StaggerText text="We" delay={0} className="text-white font-body text-extreme-sub tracking-tight" />
             <StaggerText text="Move" delay={1} className="text-gold font-heading text-extreme-heading -ml-2 lg:-ml-4 relative z-10 drop-shadow-2xl" />
             <StaggerText text="Everything." delay={2} className="text-white font-body text-extreme-sub tracking-tight" />
          </div>

          {/* Subheading & Actions Column */}
          <div className="flex flex-col gap-8 lg:max-w-[400px] lg:pb-6">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-text-muted text-sm leading-[1.8]"
            >
              From a single pallet to an entire supply chain. IOM Transit connects Nairobi to the world — by road, sea and air — with the precision of a company that has never missed a deadline.
            </motion.p>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 1.2, duration: 0.8 }}
               className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4"
            >
               <PhysicalButton href="/quote" variant="primary">Request Full Quotation</PhysicalButton>
               <PhysicalButton href="/#services" variant="outline">Explore Services</PhysicalButton>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative w-full border-t border-border-gold bg-navy/80 backdrop-blur-md">
         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-y lg:divide-y-0 divide-border-gold">
            {STATS.map((stat, idx) => (
               <div key={idx} className="p-8 flex flex-col justify-center items-center text-center">
                  <div className="font-heading text-5xl text-white mb-2 flex items-baseline">
                     <CountUp to={stat.value} />
                     <span className="text-3xl ml-1 text-gold">{stat.suffix}</span>
                  </div>
                  <p className="text-[10px] tracking-widest font-bold uppercase text-text-muted">
                     {stat.label}
                  </p>
               </div>
            ))}
         </div>
      </div>
    </section>
  );
}
