"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const BLUR_NAVY = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJQAB//Z";

const SPECS = [["Models","R-Series V8 & S-Series V8"],["Engine Output","520–770 hp"],["Torque","2,700–3,700 Nm"],["Payload","40–45 tonnes GCM"],["Configuration","6x4 / 8x4 Prime Mover"],["Transmission","Scania Opticruise 12-speed"],["Fuel Tank","400–800 litres"],["Cab","Streamline / Topline Sleeper"],["Fleet Size","120+ units"]];
const SAFETY = ["Electronic Stability Programme (ESP)","Advanced Emergency Braking System (AEBS)","Lane Departure Warning System","Adaptive Cruise Control with braking","Driver Alert Support (DAS)","Fire Suppression System (optional)"];

export default function ScaniaFleet() {
  return (
    <main className="bg-[#0a1628]">
      <section className="relative min-h-[88vh] flex flex-col justify-end pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1920&q=80" alt="Scania R-Series truck on open highway" fill className="object-cover object-center" priority sizes="100vw" placeholder="blur" blurDataURL={BLUR_NAVY} />
          <div className="absolute inset-0 bg-[#0a1628]/82" />
        </div>
        <div className="absolute bottom-0 right-[-2%] pointer-events-none select-none overflow-hidden z-0"><span className="type-watermark text-white">SCANIA</span></div>
        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="type-micro text-[#c9a84c] mb-8">Fleet — Scania</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.9 }} className="type-h1-hero text-white mb-10 max-w-4xl">Scania<br /><span className="text-[#c9a84c]">R & S Series</span></motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="type-body-large text-[#8a9bb5] max-w-[560px] mb-16">120+ Scania R-Series and S-Series V8 prime movers — the backbone of IOM Transit's long-haul pan-Africa operations across every major corridor.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="flex gap-12 border-t border-[rgba(201,168,76,0.2)] pt-10">
            {[{v:"120+",l:"Scania Units"},{v:"770hp",l:"Max Output"},{v:"45T",l:"Max GCM"},{v:"Pan-Africa",l:"Range"}].map(s => <div key={s.l}><p className="type-stat text-white">{s.v}</p><p className="type-micro text-[#8a9bb5] mt-2">{s.l}</p></div>)}
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-[#0a1628] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <p className="type-micro text-[#c9a84c] mb-6">Technical Specifications</p>
              <h2 className="type-h2 text-white mb-12">Scania V8. Built for Distance.</h2>
              <div className="border border-[rgba(201,168,76,0.2)]">
                {SPECS.map(([k, v], i) => (
                  <motion.div key={k} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="flex border-b border-[rgba(201,168,76,0.1)] last:border-b-0 hover:bg-[rgba(201,168,76,0.04)] transition-colors">
                    <div className="w-1/2 px-6 py-4 border-r border-[rgba(201,168,76,0.1)]"><p className="type-body-small text-[#8a9bb5]">{k}</p></div>
                    <div className="w-1/2 px-6 py-4"><p className="type-body-small text-white font-medium">{v}</p></div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <p className="type-micro text-[#c9a84c] mb-6">Safety Systems</p>
              <h2 className="type-h2 text-white mb-12">Driver & Cargo Protection.</h2>
              <div className="space-y-5">
                {SAFETY.map((s, i) => (
                  <motion.div key={s} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-start gap-4">
                    <CheckCircle className="text-[#c9a84c] w-5 h-5 mt-0.5 shrink-0" />
                    <p className="type-body text-[#8a9bb5]">{s}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#112240] border-t border-[rgba(201,168,76,0.2)] relative overflow-hidden">
        <div className="absolute -bottom-10 -right-10 pointer-events-none select-none overflow-hidden"><span className="type-watermark text-white">IOM</span></div>
        <div className="container mx-auto px-6 max-w-[900px] relative z-10 text-center">
          <p className="type-micro text-[#c9a84c] mb-6">Book Scania Capacity</p>
          <h2 className="type-h2 text-white mb-6">Put a Scania on Your Route.</h2>
          <p className="type-body-large text-[#8a9bb5] mb-16">Fleet allocation managed by <strong className="text-white font-medium">James Njoroge</strong>, Head of Fleet Management.</p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-6 bg-[#0a1628] border border-[rgba(201,168,76,0.2)] px-8 py-5 mb-12">
            <div className="w-12 h-12 bg-[#c9a84c] flex items-center justify-center shrink-0"><span className="type-micro text-[#0a1628] font-bold">JN</span></div>
            <div className="text-left">
              <p className="type-body text-white font-medium">James Njoroge</p>
              <p className="type-body-small text-[#8a9bb5]">Head of Fleet Management</p>
              <a href="mailto:fleet@iomtransit.com" className="type-micro text-[#c9a84c] hover:text-white transition-colors">fleet@iomtransit.com</a>
            </div>
          </motion.div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote?service=bulk-road-logistics&agent=james-njoroge&fleet=scania" className="inline-flex items-center gap-3 bg-[#c9a84c] text-[#0a1628] px-10 py-5 type-btn font-bold tracking-widest uppercase hover:bg-white transition-colors">Request Scania Capacity <ArrowRight size={16} /></Link>
            <Link href="/fleet/volvo" className="inline-flex items-center gap-3 border border-[rgba(201,168,76,0.4)] text-white px-10 py-5 type-btn tracking-widest uppercase hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors">View Volvo Fleet</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
