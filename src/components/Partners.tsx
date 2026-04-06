"use client";

import { motion } from "framer-motion";

const partners = [
  { name: "Mombasa Port Authority", id: "mombasa" },
  { name: "Kenya Revenue Authority", id: "kra" },
  { name: "IATA Official Member", id: "iata" },
  { name: "Dubai Port World Hub", id: "dpworld" },
  { name: "Heathrow Cargo Terminal", id: "heathrow" },
  { name: "Rotterdam Global Port", id: "rotterdam" },
  { name: "Shanghai Logistics Hub", id: "shanghai" },
  { name: "Johannesburg Southern Gateway", id: "jhb" },
];

export default function Partners() {
  return (
    <section className="bg-navy-dark py-24 border-b border-white/5 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
             <div className="w-8 h-[1px] bg-gold/30" />
             <span className="text-gold font-black tracking-[0.5em] text-[10px] uppercase">Operational Integration</span>
             <div className="w-8 h-[1px] bg-gold/30" />
          </div>
          <h2 className="text-white/40 font-heading text-3xl font-medium tracking-tight">
            Seamlessly integrated with global trade sovereigns.
          </h2>
        </div>

        <div className="relative">
          {/* Logo Marquee Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-x-12 gap-y-12 items-center justify-items-center opacity-40 hover:opacity-100 transition-opacity duration-1000">
            {partners.map((partner, i) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0.5, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="w-full flex flex-col items-center justify-center text-center group cursor-default"
              >
                 {/* Authority Watermark/Icon Pattern */}
                 <div className="mb-4 h-12 w-12 border border-gold/20 flex items-center justify-center font-heading text-lg font-bold text-gold/40 group-hover:text-gold group-hover:border-gold transition-all duration-500">
                    {partner.name.substring(0, 1)}
                 </div>
                 <span className="text-[9px] font-black uppercase text-white/30 group-hover:text-gold tracking-[0.2em] transition-colors leading-tight">
                    {partner.name}
                 </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
