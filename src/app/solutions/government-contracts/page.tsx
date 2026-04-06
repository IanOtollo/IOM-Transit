"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, FileText, Globe, Truck, Anchor, Plane, ArrowRight } from "lucide-react";

const PILLARS = [
  { icon: Shield, title: "Strategic Security", desc: "Our government logistics division operates under the highest level of security protocols, ensuring the integrity of sensitive cargo and documentation for State departments and military agencies." },
  { icon: FileText, title: "Exempt & Bonded Goods", desc: "Specialised handling for goods under diplomatic exemption, G-series bonded cargo, and emergency medical supplies requiring accelerated clearance." },
  { icon: Globe, title: "G2G corridors", desc: "Facilitating bilateral trade and aid movements through dedicated Government-to-Government corridors across the East African Community." },
];

const CONTRACTS = [
  { id: "01", agency: "Ministry of Health", scope: "Emergency medical supply distribution across 47 counties" },
  { id: "02", agency: "National Treasury", scope: "International transport of secure documentation and currency" },
  { id: "03", agency: "State Department for Infrastructure", scope: "Logistics for national development projects — equipment and machinery" },
  { id: "04", agency: "Regional UN Agencies", scope: "Relief and humanitarian logistics for cross-border operations" }
];

export default function GovernmentContracts() {
  return (
    <main className="bg-[#0a1628]">
      <section className="relative min-h-[65vh] flex flex-col justify-end pb-24 overflow-hidden bg-[#0a1628] border-b border-[rgba(201,168,76,0.2)]">
        <div className="absolute bottom-0 right-[-2%] pointer-events-none select-none overflow-hidden z-0"><span className="type-watermark text-white">AFRICA</span></div>
        <div className="container mx-auto px-6 max-w-[1400px] relative z-10 pt-36">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="type-micro text-[#c9a84c] mb-8">Solutions — Government</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="type-h1-hero text-white mb-10 max-w-4xl">Government<br /><span className="text-[#c9a84c]">Contracts</span></motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="type-body-large text-[#8a9bb5] max-w-[560px]">IOM Transit's dedicated Government & Multi-Agency Desk provides the security, compliance and scale required for national-level logistics projects.</motion.p>
        </div>
      </section>

      <section className="py-32 bg-[#0a1628] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[rgba(201,168,76,0.1)]">
            {PILLARS.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-[#0a1628] p-10">
                <p.icon className="text-[#c9a84c] w-10 h-10 mb-8" />
                <h3 className="type-h3 text-white mb-5">{p.title}</h3>
                <p className="type-body text-[#8a9bb5] leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#112240] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <p className="type-micro text-[#c9a84c] mb-6">Track Record</p>
              <h2 className="type-h2 text-white mb-8">Serving National Priorities</h2>
              <div className="space-y-4">
                {CONTRACTS.map(c => (
                  <div key={c.id} className="flex gap-6 border-b border-[rgba(201,168,76,0.1)] pb-4 hover:bg-[rgba(201,168,76,0.04)] transition-colors p-4">
                    <span className="type-micro text-[#c9a84c] mt-1 font-bold">{c.id}</span>
                    <div>
                      <p className="type-body text-white font-medium mb-1">{c.agency}</p>
                      <p className="type-body-small text-[#8a9bb5]">{c.scope}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#0a1628] p-12 border border-[rgba(201,168,76,0.2)]">
              <p className="type-micro text-[#c9a84c] mb-6">Security Compliance</p>
              <h3 className="type-h3 text-white mb-8">High-Level Compliance Framework</h3>
              <ul className="space-y-4">
                {[
                  "Full KRA AEO (Authorized Economic Operator) status",
                  "Verified secure-corridor tracking on all government cargo",
                  "Vetted driver and staff clearance protocols",
                  "Bond management for all duty-exempt government imports",
                  "Dedicated 24/7 G-Desk hotline for agency coordination"
                ].map(item => (
                  <li key={item} className="flex gap-4 items-start">
                    <div className="w-1.5 h-1.5 bg-[#c9a84c] mt-2 shrink-0" />
                    <p className="type-body-small text-[#8a9bb5]">{item}</p>
                  </li>
                ))}
              </ul>
              <Link href="/quote?service=government-contracts&agent=amina-kariuki" className="inline-flex items-center gap-3 bg-[#c9a84c] text-[#0a1628] px-10 py-5 mt-16 type-btn font-bold tracking-widest uppercase hover:bg-white transition-colors">Contact G-Desk <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
