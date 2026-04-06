"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fleet = [
  {
    id: "scania",
    brand: "SCANIA",
    model: "R-Series Flagship",
    image: "https://images.unsplash.com/photo-1591768793355-74d7c805a417?auto=format&fit=crop&q=80&w=800",
    watermark: "01",
    specs: [
      { label: "Payload", value: "45,000 KG" },
      { label: "Configuration", value: "6x4 Super" },
      { label: "Range", value: "1,200 KM+" },
      { label: "Units", value: "145 Units" },
    ],
  },
  {
    id: "volvo",
    brand: "VOLVO",
    model: "FH16 Heavy-Duty",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800",
    watermark: "02",
    specs: [
      { label: "Payload", value: "55,000 KG" },
      { label: "Configuration", value: "6x4 I-Shift" },
      { label: "Range", value: "1,100 KM+" },
      { label: "Units", value: "110 Units" },
    ],
    highlight: true,
  },
  {
    id: "mercedes",
    brand: "MERCEDES",
    model: "Actros Gen 5",
    image: "https://images.unsplash.com/photo-1519003300449-424ad040507b?auto=format&fit=crop&q=80&w=800",
    watermark: "03",
    specs: [
      { label: "Payload", value: "40,000 KG" },
      { label: "Configuration", value: "4x2 / 6x2" },
      { label: "Range", value: "1,400 KM+" },
      { label: "Units", value: "85 Units" },
    ],
  },
];

export default function Fleet() {
  return (
    <section id="fleet" className="bg-navy py-32 overflow-hidden border-t border-white/5">
      <div className="container max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-gold" />
            <span className="text-gold font-black tracking-[0.4em] text-[10px] uppercase text-left">Mobilized Authority</span>
          </div>
          <h2 className="font-heading text-5xl md:text-7xl mb-6">Engineered for Pan-Africa Reliability</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
          {fleet.map((item, index) => (
            <motion.div
              key={item.brand}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={item.highlight ? 'lg:z-10' : ''}
            >
              <Link
                href={`/fleet/${item.id}`}
                className={`relative block h-full bg-navy-mid/20 border border-white/5 overflow-hidden group transition-all duration-700 hover:bg-gold/5`}
              >
              {/* Truck Image Container */}
              <div className="relative h-80 w-full overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.brand}
                  className="w-full h-full object-cover filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4 font-heading text-8xl text-gold opacity-10 font-black tracking-tighter">
                  {item.watermark}
                </div>
              </div>

              <div className="p-12">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h3 className="font-heading text-4xl text-white group-hover:text-gold transition-colors">{item.brand}</h3>
                        <p className="text-gold text-[10px] font-black uppercase tracking-[0.3em] mt-1">
                          {item.model}
                        </p>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                        <ArrowRight size={20} className="text-gold" />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-y-6 gap-x-8">
                    {item.specs.map((spec) => (
                      <div key={spec.label} className="border-l border-white/10 pl-4">
                        <p className="text-[9px] font-black text-white/30 uppercase tracking-widest mb-1">{spec.label}</p>
                        <p className="text-white font-bold text-sm tracking-tight">{spec.value}</p>
                      </div>
                    ))}
                </div>

                <div className="mt-12 h-[1px] w-full bg-white/5 relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-full bg-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                </div>
              </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
