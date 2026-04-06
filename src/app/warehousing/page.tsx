"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Warehouse, Zap, Shield, BarChart3, Clock, Package, ArrowRight } from "lucide-react";

const BLUR_NAVY = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJQAB//Z";

const FACILITIES = [
  { city: "Nairobi (HQ)", type: "Bonded & General", size: "25,000 sq ft", features: ["WMS Real-time Inventory", "Cold Chain Section", "24/7 Secure Perimeter"] },
  { city: "Mombasa Port", type: "Container Freight Station", size: "15,000 sq ft", features: ["Port Integrated Systems", "Direct CFS Load/Offload", "Secure Open Yard Storage"] },
  { city: "Kisumu", type: "Regional Distribution", size: "8,000 sq ft", features: ["Last-mile Hub", "Cross-docking Area", "LTL Consolidation Desk"] },
];

const CAPABILITIES = [
  { icon: Warehouse, title: "Bonded Warehousing", desc: "Storage of imported goods without immediate payment of duty, under customs supervision at our KRA-licensed facilities." },
  { icon: Zap, title: "Cross-Docking", desc: "Rapid transfer of goods from inbound to outbound transport with minimal or zero storage time — ideal for FMCG distribution." },
  { icon: Shield, title: "Pharma/Cold Storage", desc: "Temperature-controlled storage environments for sensitive pharmaceuticals and perishable exports needing a solid cold chain." },
  { icon: BarChart3, title: "Inventory Management", desc: "Full digital visibility of your stock levels through our client portal, including batch tracking and expiry date monitoring." },
];

export default function Warehousing() {
  return (
    <main className="bg-[#0a1628]">
      <section className="relative min-h-[85vh] flex flex-col justify-end pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1920&q=80"
            alt="Interior of IOM Transit modern warehouse"
            fill className="object-cover object-center" priority sizes="100vw"
            placeholder="blur" blurDataURL={BLUR_NAVY}
          />
          <div className="absolute inset-0 bg-[#0a1628]/85" />
        </div>
        <div className="absolute bottom-0 right-[-2%] pointer-events-none select-none overflow-hidden z-0"><span className="type-watermark text-white">STOCK</span></div>
        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="type-micro text-[#c9a84c] mb-8">Infrastructure — Warehousing</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="type-h1-hero text-white mb-10 max-w-4xl">Storage &<br /><span className="text-[#c9a84c]">Inventory</span></motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="type-body-large text-[#8a9bb5] max-w-[560px] mb-16">50,000+ sq ft of combined bonded and general warehouse capacity across Kenya's primary commerce hubs — fully integrated with our distribution network.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="flex gap-12 border-t border-[rgba(201,168,76,0.2)] pt-10">
            {[{v:"50K+",l:"Sq Ft Capacity"},{v:"3",l:"Strategic Hubs"},{v:"99.8%",l:"Inventory Accuracy"},{v:"24/7",l:"Secure Access"}].map(s => <div key={s.l}><p className="type-stat text-white">{s.v}</p><p className="type-micro text-[#8a9bb5] mt-2">{s.l}</p></div>)}
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-[#0a1628] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-20">
            <p className="type-micro text-[#c9a84c] mb-4">Core Capabilities</p>
            <h2 className="type-h2 text-white">More Than Four Walls.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(201,168,76,0.1)]">
            {CAPABILITIES.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-[#0a1628] p-10">
                <c.icon className="text-[#c9a84c] w-10 h-10 mb-8" />
                <h3 className="type-h3 text-white mb-5">{c.title}</h3>
                <p className="type-body-small text-[#8a9bb5] leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#112240] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-20">
            <p className="type-micro text-[#c9a84c] mb-4">Network Infrastructure</p>
            <h2 className="type-h2 text-white">Our Warehousing Facilities</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {FACILITIES.map((f, i) => (
              <motion.div key={f.city} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="border border-[rgba(201,168,76,0.2)] p-10 bg-[#0a1628] hover:border-[#c9a84c] transition-colors group">
                <p className="type-micro text-[#c9a84c] mb-4">{f.type}</p>
                <h3 className="type-h3 text-white mb-2">{f.city}</h3>
                <p className="type-stat text-[#c9a84c] text-3xl mb-8">{f.size}</p>
                <ul className="space-y-3 pt-6 border-t border-[rgba(201,168,76,0.1)]">
                  {f.features.map(feat => <li key={feat} className="flex gap-3 text-[#8a9bb5] type-body-small"><div className="w-1 h-1 bg-[#c9a84c] mt-2 shrink-0" />{feat}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#0a1628] border-t border-[rgba(201,168,76,0.2)] relative overflow-hidden">
        <div className="absolute -bottom-10 -right-10 pointer-events-none select-none overflow-hidden"><span className="type-watermark text-white">IOM</span></div>
        <div className="container mx-auto px-6 max-w-[900px] relative z-10 text-center">
          <p className="type-micro text-[#c9a84c] mb-6">Book Capacity</p>
          <h2 className="type-h2 text-white mb-6">Bonded Space. National Range.</h2>
          <p className="type-body-large text-[#8a9bb5] mb-16">Warehousing capacity and moving operations are managed by <strong className="text-white font-medium">Grace Wambui</strong>, Head of Warehousing.</p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-6 bg-[#112240] border border-[rgba(201,168,76,0.2)] px-8 py-5 mb-12">
            <div className="w-12 h-12 bg-[#c9a84c] flex items-center justify-center shrink-0"><span className="type-micro text-[#0a1628] font-bold">GW</span></div>
            <div className="text-left">
              <p className="type-body text-white font-medium">Grace Wambui</p>
              <p className="type-body-small text-[#8a9bb5]">Head of Warehousing</p>
              <a href="mailto:warehousing@iomtransit.com" className="type-micro text-[#c9a84c] hover:text-white transition-colors">warehousing@iomtransit.com</a>
            </div>
          </motion.div>
          <div>
            <Link href="/quote?service=moving-services&agent=grace-wambui" className="inline-flex items-center gap-3 bg-[#c9a84c] text-[#0a1628] px-10 py-5 type-btn font-bold tracking-widest uppercase hover:bg-white transition-colors">Request Stock Space <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
