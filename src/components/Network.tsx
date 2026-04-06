"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, TrendingUp, Briefcase, Landmark } from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    id: "global-operations",
    title: "Global Operations",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800",
    desc: "End-to-end supply chain mastery across six continents, navigating the world's most complex trade routes."
  },
  {
    id: "national-network",
    title: "National Network",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1586191582151-f746323bc035?auto=format&fit=crop&q=80&w=800",
    desc: "Dominant logistics infrastructure across East & Central Africa, powering regional economic growth."
  },
  {
    id: "corporate-logistics",
    title: "Corporate Logistics",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1454160833130-139f150531c3?auto=format&fit=crop&q=80&w=1000",
    desc: "Bespoke logistics partnerships for enterprise leaders, focusing on precision, visibility, and scale."
  },
  {
    id: "government-contracts",
    title: "Government & NGO",
    icon: Landmark,
    image: "https://images.unsplash.com/photo-1521791136064-7986c2959213?auto=format&fit=crop&q=80&w=800",
    desc: "Mission-critical logistics support for national governments and international aid organizations."
  }
];

export default function Network() {
  return (
    <section id="network" className="bg-navy-dark py-32 border-t border-white/5 relative overflow-hidden">
        {/* Decorative Visionary Background Element */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-gold" />
            <span className="text-gold font-black tracking-[0.5em] text-[10px] uppercase">Strategic Network</span>
          </div>
          <h2 className="font-heading text-6xl md:text-8xl mb-8 leading-tight">Mastering Global Solutions</h2>
          <p className="max-w-3xl text-white/40 text-xl font-light leading-relaxed">
            From critical aid corridors to enterprise supply chains, IOM Transit deploys absolute authority at every point of the global network.
          </p>
        </div>

        {/* Solutions Grid (High-Authority Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 px-1 lg:px-0">
          {solutions.map((solution, i) => (
            <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
            >
                <Link 
                href={`/solutions/${solution.id}`}
                className="group relative h-[600px] flex flex-col justify-end overflow-hidden border border-white/10 bg-navy-mid/20 hover:border-gold/30 transition-all duration-700"
                >
                {/* Image Hero Background */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src={solution.image} 
                        alt={solution.title}
                        className="w-full h-full object-cover filter grayscale brightness-[0.3] group-hover:grayscale-0 group-hover:brightness-[0.4] group-hover:scale-110 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/40 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 p-12 translate-y-16 group-hover:translate-y-0 transition-transform duration-700">
                    {/* Icon & Category */}
                    <div className="flex items-center gap-4 mb-6">
                        <div className="p-4 border border-gold/20 bg-navy-dark/40 text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-500">
                            <solution.icon size={24} />
                        </div>
                        <span className="text-gold text-[10px] font-black uppercase tracking-[0.4em] opacity-60 group-hover:opacity-100 transition-all">Strategic Hub</span>
                    </div>

                    <h3 className="font-heading text-4xl md:text-5xl text-white mb-6 group-hover:text-gold transition-colors">{solution.title}</h3>
                    
                    <p className="text-white/40 text-lg font-light leading-relaxed mb-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 max-w-md">
                        {solution.desc}
                    </p>

                    <div className="flex items-center gap-3 text-gold text-[10px] font-black uppercase tracking-[0.4em] overflow-hidden">
                        <span className="translate-x-0 group-hover:translate-x-0 transition-transform">Command Solution</span>
                        <ArrowRight size={14} className="-translate-x-4 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-white/5 group-hover:border-gold/30 transition-all m-6" />
                </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
