"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Anchor } from "lucide-react";

const stats = [
  { label: "Countries", value: "50+" },
  { label: "Tonnes Per Year", value: "2.4M" },
  { label: "Fleet Vehicles", value: "340+" },
  { label: "Global Branches", value: "12" },
  { label: "On-Time Delivery", value: "98%" },
];

export default function Hero() {
  return (
    <header id="hero" className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-40">
      {/* Cinematic Superpower Overlays */}
      <div className="hero-grid-overlay absolute inset-0 pointer-events-none opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,168,76,0.15),transparent_70%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/5 blur-[150px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-900/10 blur-[150px] animate-pulse pointer-events-none" />
      
      <div className="container relative z-10 px-6 max-w-7xl mx-auto text-center flex-grow flex flex-col justify-center">
        
        {/* Authority Marker Bar */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center gap-8 mb-16"
        >
            <div className="flex items-center gap-3 text-gold/60">
                <Anchor size={14} />
                <span className="text-[10px] font-black uppercase tracking-[0.5em]">Pan-Africa Authority</span>
            </div>
            <div className="h-1 w-1 rounded-full bg-gold/50" />
            <div className="flex items-center gap-3 text-gold/60">
                <ShieldCheck size={14} />
                <span className="text-[10px] font-black uppercase tracking-[0.5em]">Global Security Protocol</span>
            </div>
        </motion.div>

        {/* Main Heading: Triple-Layer Cinematic */}
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
           className="relative inline-block mb-12"
        >
           <h1 className="font-heading text-8xl md:text-[13rem] leading-none tracking-tighter font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gold/20 drop-shadow-[0_30px_70px_rgba(201,168,76,0.25)]">
             IOM TRANSIT
           </h1>
           <div className="mt-4 flex justify-center gap-2">
                <div className="w-24 h-1 bg-gold shadow-[0_0_20px_rgba(201,168,76,0.8)]" />
                <div className="w-8 h-1 bg-gold opacity-30 shadow-[0_0_20px_rgba(201,168,76,0.5)]" />
           </div>
        </motion.div>

        {/* High-Impact Visionary Copy Override */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="max-w-5xl mx-auto mb-20 px-4"
        >
           <p className="text-white text-3xl md:text-5xl font-light mb-10 leading-tight tracking-tight">
             Commanding the world's most critical trade arteries with the uncompromising precision of a global superpower.
           </p>
           <div className="flex items-center justify-center gap-4">
             <div className="h-[1px] w-12 bg-gold/30" />
             <p className="text-gold text-sm md:text-xl font-black uppercase tracking-[0.6em] text-center w-full md:w-auto">
               The Pan-Africa Nexus. Global Scale.
             </p>
             <div className="h-[1px] w-12 bg-gold/30" />
           </div>
        </motion.div>

        {/* Absolute CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-12"
        >
          <Link 
            href="/quote" 
            className="group relative px-20 py-10 bg-gold text-navy font-black text-xs tracking-[0.5em] uppercase transition-all duration-500 hover:scale-[1.05] active:scale-95 shadow-[0_20px_60px_rgba(201,168,76,0.4)]"
          >
            <span className="relative z-10 flex items-center gap-5">
                Initialize Authority Quote
                <Zap size={20} fill="#0a1628" />
            </span>
            <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </Link>
          <Link 
            href="/#services" 
            className="px-12 py-10 border-2 border-white/10 font-black text-xs tracking-[0.4em] uppercase hover:bg-white/5 transition-all text-white/40 hover:text-white hover:border-gold/50 flex items-center gap-4 transition-all"
          >
            Critical Corridors
          </Link>
        </motion.div>
      </div>

      {/* Command Dashboard Stats Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-0 w-full border-t border-white/5 bg-navy-mid/40 backdrop-blur-3xl hidden md:block"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-5 h-48">
          {stats.map((stat, i) => (
            <div 
              key={stat.label} 
              className={`flex flex-col justify-center items-center px-12 relative group transition-all hover:bg-gold/5 cursor-default ${i < stats.length - 1 ? 'border-r border-white/5' : ''}`}
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              <div className="mb-4 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse shadow-[0_0_15px_rgba(201,168,76,1)]" />
                <span className="text-[11px] uppercase tracking-[0.4em] text-white/30 font-black">{stat.label}</span>
              </div>
              <span className="font-heading text-7xl text-white group-hover:text-gold transition-colors">{stat.value}</span>
              <div className="mt-4 text-[9px] text-gold font-black uppercase tracking-[0.5em] opacity-0 group-hover:opacity-100 transition-opacity">Global Logistics Superpower</div>
            </div>
          ))}
        </div>
      </motion.div>
    </header>
  );
}
