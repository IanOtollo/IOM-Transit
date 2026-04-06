"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { StaggerText, SectionWatermark } from "@/components/ui/AnimatedComponents";

export default function PageHero({ 
  title, 
  subtitle, 
  image, 
  category 
}: { 
  title: string, 
  subtitle: string, 
  image: string,
  category: string 
}) {
  return (
    <section className="relative min-h-[70vh] flex flex-col justify-end pb-32 bg-navy overflow-hidden z-10 pt-40">
      <SectionWatermark text={category.split(" ")[0].toUpperCase()} />

      {/* Background Image Layer */}
      <div className="absolute inset-0 pointer-events-none z-[-1] overflow-hidden opacity-30 mix-blend-luminosity">
        <Image 
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-transparent" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none mix-blend-screen opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10 w-full flex-grow flex flex-col justify-end">
        <div className="flex items-center gap-4 mb-12">
          <div className="w-10 h-px bg-gold" />
          <p className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase">
            {category}
          </p>
        </div>

        <div className="max-w-6xl mb-8 relative z-20">
           <StaggerText 
             text={title} 
             delay={0} 
             className="text-white font-heading text-extreme-heading -ml-1 lg:-ml-2" 
           />
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-text-muted text-lg max-w-[600px] leading-[1.7]"
        >
          {subtitle}
        </motion.p>
      </div>

      {/* Bottom Gold Rule */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gold origin-left"
      />
    </section>
  );
}
