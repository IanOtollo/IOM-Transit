"use client";

import { motion } from "framer-motion";

const warehouseStats = [
  { val: "06", lbl: "Facilities" },
  { val: "480k", lbl: "Sq Ft Storage" },
  { val: "24/7", lbl: "Security & Monitoring" },
  { val: "03", lbl: "Bonded Facilities" },
];

export default function Warehousing() {
  return (
    <section id="warehousing" className="bg-navy py-32 border-b border-border-gold">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-gold font-bold tracking-[0.3em] text-xs uppercase text-left w-full">Warehousing</span>
            </div>
            <h2 className="font-heading text-5xl md:text-6xl mb-8 leading-tight">High-Security Global Storage Authority</h2>
            <p className="text-white/60 text-xl leading-relaxed mb-10 max-w-xl font-light">
              Equipped with cold-chain reach and advanced bonded storage capability, our warehousing facilities provide a secure platform for your international inventory optimization.
            </p>
            
            <div className="relative aspect-video w-full overflow-hidden border border-border-gold shadow-2xl group mb-12">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200" 
                alt="IOM Modern Warehousing"
                className="w-full h-full object-cover filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors" />
              <div className="absolute bottom-6 left-6 flex items-center gap-4">
                <div className="h-0.5 w-10 bg-gold" />
                <span className="text-[10px] text-gold font-black uppercase tracking-[0.4em]">Bonded Facility 03</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-8 w-full">
            {warehouseStats.map((stat, i) => (
              <motion.div 
                key={stat.lbl}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="bg-navy-mid/40 border border-border-gold p-12 group hover:border-gold transition-all duration-500 hover:shadow-2xl hover:shadow-gold/5"
              >
                <div className="font-heading text-6xl text-gold mb-3 transition-transform duration-500 group-hover:scale-110 tracking-tighter">{stat.val}</div>
                <div className="text-[10px] text-white/50 font-black uppercase tracking-[0.3em]">{stat.lbl}</div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
