"use client";

import { motion } from "framer-motion";
import { subjectData } from "@/lib/subject-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function WarehousingPage() {
  const data = subjectData["warehousing-authority"];

  if (!data) return (
    <div className="bg-navy-dark min-h-screen text-white flex items-center justify-center font-heading text-4xl">
        Authority Record Not Found
    </div>
  );

  return (
    <main className="min-h-screen bg-navy-dark text-white">
      <Navbar />
      
      {/* Warehousing Hero */}
      <section className="relative h-[70vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={data.image} 
            alt={data.title}
            className="w-full h-full object-cover filter brightness-[0.35] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/40 to-transparent" />
        </div>

        <div className="container relative z-10 max-w-7xl mx-auto px-6 pt-20">
          <Breadcrumb 
            category={data.category} 
            categoryHref={data.categoryHref} 
            subject={data.title} 
          />
          
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-heading text-6xl md:text-8xl mb-6 leading-tight pb-2"
          >
            {data.title}
          </motion.h1>
          
          <div className="flex items-center gap-4">
            <div className="h-0.5 w-12 bg-gold" />
            <p className="text-gold font-black uppercase tracking-[0.4em] text-sm">Industrial Infrastructure</p>
          </div>
        </div>
      </section>

      {/* Warehousing Strategic Section */}
      <section className="py-24 border-t border-white/5 bg-navy-dark">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Storage Logic */}
            <div>
              <h2 className="font-heading text-4xl mb-12 flex items-center gap-4">
                <span className="text-gold opacity-30 text-xl font-bold">INV-01</span>
                Operational Storage Logic
              </h2>
              <div className="flex flex-col gap-10">
                {data.operations.map((op, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="group"
                  >
                    <p className="text-white/60 text-2xl font-light leading-relaxed group-hover:text-gold transition-colors border-l-2 border-white/5 pl-8 hover:border-gold">
                      {op}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Storage Specs & Access */}
            <div className="flex flex-col gap-16">
              {/* Infrastructure Spec Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-1 overflow-hidden border border-border-gold shadow-2xl">
                {data.specs.map((spec) => (
                  <div key={spec.label} className="bg-navy-mid/30 p-10 flex flex-col items-center text-center">
                    <span className="text-[10px] text-white/40 uppercase font-black tracking-widest mb-4">
                      {spec.label}
                    </span>
                    <span className="text-gold font-bold text-lg tracking-tighter">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Functional Storage Protocol */}
              <div className="bg-navy-mid/60 border border-border-gold/30 p-16">
                <h3 className="font-heading text-3xl mb-10 text-gold flex items-center gap-4">
                  <ArrowRight size={24} />
                  Access Protocol
                </h3>
                <ul className="flex flex-col gap-8">
                  {data.access.map((acc, i) => (
                    <li key={i} className="flex gap-4">
                        <CheckCircle2 size={16} className="text-gold mt-1 shrink-0" />
                        <span className="text-sm text-white/50 font-bold uppercase tracking-widest leading-loose">
                            {acc}
                        </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
