"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Truck, MapPin, Warehouse, Zap, ShieldCheck } from "lucide-react";
import { CountUp, SectionWatermark } from "@/components/ui/AnimatedComponents";
import GlobeWidget from "@/components/ui/GlobeWidget";

const FLEET = [
  {
    idx: "01",
    brand: "Scania",
    models: "R-Series · S-Series",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=1200",
    specs: [
      { k: "Engines", v: "450hp - 620hp V8" },
      { k: "Payload", v: "40 - 45 Tonnes" },
      { k: "Focus", v: "Long-Haul Routes" },
      { k: "Availability", v: "120+ Units" }
    ],
    href: "/fleet/scania"
  },
  {
    idx: "02",
    brand: "Volvo",
    models: "FH-Series",
    image: "https://images.unsplash.com/photo-1592838064575-70ed626d3a44?auto=format&fit=crop&q=80&w=1200",
    specs: [
      { k: "Engines", v: "500hp - 540hp" },
      { k: "Emission", v: "Euro 5 / Euro 6" },
      { k: "Focus", v: "Cross-Border" },
      { k: "Availability", v: "130+ Units" }
    ],
    href: "/fleet/volvo"
  },
  {
    idx: "03",
    brand: "Mercedes",
    models: "Actros · Arocs",
    image: "https://images.unsplash.com/photo-1590333746431-11d61994e439?auto=format&fit=crop&q=80&w=1200",
    specs: [
      { k: "Engines", v: "360hp - 480hp OM" },
      { k: "Safety", v: "ABA 5 Systems" },
      { k: "Focus", v: "National Distribution" },
      { k: "Availability", v: "90+ Units" }
    ],
    href: "/fleet/mercedes"
  }
];

export default function FleetNetwork() {
  return (
    <>
      <section id="fleet" className="bg-navy-mid pt-32 pb-40 relative">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-24">
            <h2 className="font-heading text-white text-[72px] leading-[0.85] tracking-tight">
               340+ Vehicles.<br/><span className="text-gold">Three Elite Brands.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-12">
             {FLEET.map((truck) => (
                <motion.div 
                  key={truck.brand}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="group flex flex-col md:flex-row bg-navy border border-border-gold overflow-hidden relative"
                >
                   {/* Left 40% Image */}
                   <div className="w-full md:w-[40%] relative aspect-video md:aspect-auto">
                      <Image 
                        src={truck.image}
                        alt={truck.brand}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500" />
                   </div>

                   {/* Right 60% Specs */}
                   <div className="w-full md:w-[60%] p-10 lg:p-20 relative flex flex-col justify-center">
                      <span className="absolute top-10 right-10 font-heading text-8xl text-white opacity-[0.03] select-none pointer-events-none">
                         {truck.idx}
                      </span>
                      
                      <h3 className="font-heading text-7xl text-gold mb-2">{truck.brand}</h3>
                      <p className="text-text-muted text-xs font-bold tracking-[0.3em] uppercase mb-12">{truck.models}</p>
                      
                      <div className="grid grid-cols-2 gap-8 mb-12">
                         {truck.specs.map(spec => (
                            <div key={spec.k}>
                               <p className="text-text-muted text-[10px] uppercase font-bold tracking-widest mb-1">{spec.k}</p>
                               <p className="text-white text-sm font-medium">{spec.v}</p>
                            </div>
                         ))}
                      </div>

                      <Link href={truck.href} className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase hover:text-white transition-colors">
                        View Full Fleet &rarr;
                      </Link>

                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                   </div>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      <section id="network" className="bg-navy py-40 border-y border-border-gold relative overflow-hidden">
        <SectionWatermark text="GLOBAL" />
        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                 <p className="text-gold text-[10px] tracking-[0.4em] font-bold uppercase mb-4">CONNECTIVITY</p>
                 <h2 className="font-heading text-white text-[72px] leading-[0.85] tracking-tight mb-16">
                    A Global Network.<br/>Anchored in Nairobi.
                 </h2>
                 
                 <div className="flex gap-20">
                    <ul className="space-y-6">
                       <li className="text-gold text-xs font-bold tracking-[0.2em] uppercase mb-8 border-b border-white/10 pb-4">Domestic Hubs</li>
                       {['Nairobi (HQ)', 'Mombasa Port', 'Kisumu Transit', 'Eldoret', 'Nakuru'].map(h => (
                          <li key={h} className="flex items-center gap-4 text-white text-sm"><div className="w-2 h-2 bg-gold rounded-full shadow-[0_0_10px_#c9a84c]"/> {h}</li>
                       ))}
                    </ul>
                    <ul className="space-y-6">
                       <li className="text-text-muted text-xs font-bold tracking-[0.2em] uppercase mb-8 border-b border-white/10 pb-4">Global Hubs</li>
                       {['Dubai', 'Rotterdam', 'London', 'Shanghai', 'Johannesburg'].map(h => (
                          <li key={h} className="flex items-center gap-4 text-text-muted text-sm"><div className="w-2 h-2 bg-text-muted/50 rounded-full"/> {h}</li>
                       ))}
                    </ul>
                 </div>
              </div>

              {/* Animated Map Representation */}
              <div className="relative border border-border-gold bg-navy-mid/30 flex items-center justify-center pt-10 rounded-full w-full max-w-[600px] overflow-hidden">
                 <GlobeWidget />
                 <div className="absolute top-10 left-10 text-gold font-body text-xs tracking-[0.2em] uppercase z-10 pointer-events-none fade-in mix-blend-difference">Trade Corridors Active</div>
              </div>
           </div>
        </div>
      </section>

      <section id="warehousing" className="bg-navy pt-32 pb-40 text-white relative">
        <div className="absolute top-10 right-10 flex gap-2 text-text-muted text-[10px] items-center">
           <span className="font-heading text-lg font-bold">03</span>
           <span className="w-8 h-px bg-text-muted/30 block" />
        </div>
        
        <div className="container mx-auto px-6 max-w-[1400px]">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 mb-32 border-b border-white/10 pb-20">
              <div className="text-center">
                 <h4 className="font-heading text-7xl lg:text-8xl text-gold mb-4"><CountUp to={6} /></h4>
                 <p className="text-text-muted font-bold text-[10px] tracking-[0.2em] uppercase">Facilities</p>
              </div>
              <div className="text-center border-l border-white/10">
                 <h4 className="font-heading text-7xl lg:text-8xl text-gold mb-4"><CountUp to={480} suffix="k" /></h4>
                 <p className="text-text-muted font-bold text-[10px] tracking-[0.2em] uppercase">Square Feet</p>
              </div>
              <div className="text-center border-l border-white/10">
                 <h4 className="font-heading text-7xl lg:text-8xl text-gold mb-4">24/7</h4>
                 <p className="text-text-muted font-bold text-[10px] tracking-[0.2em] uppercase">Security Surveillance</p>
              </div>
              <div className="text-center border-l border-white/10">
                 <h4 className="font-heading text-7xl lg:text-8xl text-gold mb-4"><CountUp to={3} /></h4>
                 <p className="text-text-muted font-bold text-[10px] tracking-[0.2em] uppercase">Bonded Warehouses</p>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                 { icon: ShieldCheck, title: "Bonded Storage", desc: "KRA approved bonded warehousing facilities located strategically in Nairobi and Mombasa for uncleared imported goods." },
                 { icon: Zap, title: "Cold Chain", desc: "Temperature-controlled environments equipped with active monitoring systems to preserve perishable and sensitive cargo." },
                 { icon: Warehouse, title: "Inventory Management", desc: "WMS technology integration providing real-time visibility, automated reporting, and precise stock reconciliation." }
              ].map(ft => (
                 <motion.div 
                    key={ft.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-10 border border-border-gold bg-[#112240]"
                 >
                    <ft.icon className="text-gold w-8 h-8 mb-6" />
                    <h5 className="font-heading text-2xl text-white mb-4">{ft.title}</h5>
                    <p className="text-text-muted text-sm leading-relaxed">{ft.desc}</p>
                 </motion.div>
              ))}
           </div>
        </div>
      </section>
    </>
  );
}
