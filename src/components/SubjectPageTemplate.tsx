"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ChevronRight, Home, BarChart3, Briefcase, Globe } from "lucide-react";
import { SubjectData } from "@/lib/subject-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";

interface SubjectPageTemplateProps {
  data: SubjectData;
}

export default function SubjectPageTemplate({ data }: SubjectPageTemplateProps) {
  return (
    <main className="min-h-screen bg-navy-dark text-white font-sans selection:bg-gold selection:text-navy">
      <Navbar />

      {/* Production Hero */}
      <section className="relative h-[80vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={data.image} 
            alt={data.title}
            fill
            priority
            className="object-cover filter brightness-[0.35] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/40 to-transparent" />
          <div className="absolute inset-0 bg-navy-dark/20 backdrop-blur-[2px]" />
        </div>

        <div className="container relative z-10 max-w-7xl mx-auto px-6 pt-20">
          <Breadcrumb 
            category={data.category} 
            categoryHref={data.categoryHref} 
            subject={data.title} 
          />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="font-heading text-6xl md:text-8xl mb-8 leading-tight tracking-tight pb-4">
              {data.title}
            </h1>
            <div className="flex items-center gap-6">
                <div className="h-[1px] w-20 bg-gold" />
                <p className="text-gold font-black uppercase tracking-[0.5em] text-sm">Logistics Authority</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Operational Body Section */}
      <section className="py-32 bg-navy-dark border-t border-white/5">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            
            {/* Left: Capability Content */}
            <div className="space-y-16">
              <div>
                <h2 className="font-heading text-4xl mb-12 flex items-center gap-4">
                  <span className="text-gold/20 text-xl font-bold">OP-01</span>
                  Operational Capability
                </h2>
                <div className="flex flex-col gap-12">
                  {data.operations.map((op, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="group"
                    >
                      <p className="text-white/70 text-2xl font-light leading-relaxed group-hover:text-gold transition-colors border-l border-white/10 pl-10 hover:border-gold">
                        {op}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-white/5 border border-white/5">
                {data.specs.map((spec, i) => (
                  <div key={i} className="p-10 flex flex-col items-center text-center group hover:bg-gold/5 transition-colors">
                    <BarChart3 className="text-gold mb-6 opacity-40 group-hover:opacity-100 transition-opacity" size={24} />
                    <span className="text-[10px] text-white/40 uppercase font-black tracking-widest mb-4">
                      {spec.label}
                    </span>
                    <span className="text-white font-bold text-lg tracking-tight">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Process & CTA */}
            <div className="flex flex-col gap-12">
              <div className="bg-navy-mid/40 backdrop-blur-3xl border border-border-gold/30 p-16 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 opacity-5">
                    <Globe size={300} />
                </div>
                <h3 className="font-heading text-3xl mb-12 text-gold flex items-center gap-4">
                  <Briefcase size={28} />
                  Operational Protocol
                </h3>
                <ul className="flex flex-col gap-10">
                  {data.access.map((acc, i) => (
                    <li key={i} className="flex gap-6 group">
                        <div className="h-12 w-12 rounded-full border border-gold/30 flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:text-navy transition-all duration-500">
                            <span className="text-[10px] font-black">{i + 1}</span>
                        </div>
                        <div>
                            <span className="text-xs text-white/40 font-black uppercase tracking-widest block mb-1">Standard Action</span>
                            <span className="text-sm text-white/80 font-medium leading-relaxed">
                                {acc}
                            </span>
                        </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Closing CTA */}
              <Link 
                href="/quote"
                className="group relative overflow-hidden bg-gold p-12 flex justify-between items-center transition-all hover:scale-[1.02]"
              >
                <div className="relative z-10">
                    <p className="text-navy text-[10px] font-black uppercase tracking-[0.4em] mb-2">Initialize Shipment</p>
                    <p className="text-navy font-heading text-4xl">Request Authority Quote</p>
                </div>
                <ArrowRight className="text-navy transition-transform group-hover:translate-x-4" size={48} strokeWidth={1} />
                <div className="absolute top-0 right-0 w-32 h-full bg-white/10 -skew-x-12 translate-x-16" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
