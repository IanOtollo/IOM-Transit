"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Globe, MapPin, Shield, Clock, ArrowRight, Network } from "lucide-react";

const BLUR_NAVY = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJQAB//Z";

const CAPABILITIES = [
  { icon: Globe, title: "Multi-Jurisdiction Customs Brokerage", desc: "IOM Transit operates licensed customs brokerage across Kenya and through bonded agent networks in Dubai, Rotterdam, London and Shanghai. Every destination customs regime is managed by a specialist desk with local authority relationships — not a generic third-party handler." },
  { icon: Network, title: "Bonded Warehousing at Key Nodes", desc: "Bonded warehousing at Mombasa ICD, Dubai Jebel Ali Free Zone, Rotterdam Europoort and Shanghai Waigaoqiao Free Trade Zone enables cargo to be held in tax-deferred status, inspected, consolidated or re-exported without triggering destination customs liabilities." },
  { icon: Globe, title: "Global Freight Partner Network", desc: "IOM Transit's membership in FIATA and IATA provides access to accredited freight partners in 120+ countries. Every partner is vetted annually against cargo handling standards, insurance certification and on-time performance metrics." },
  { icon: Shield, title: "International Compliance & Sanctions Screening", desc: "Prior to accepting any international consignment, IOM Transit screens parties against OFAC, UN, EU and UK consolidated sanctions lists. All dangerous goods are assessed under IATA DGR and IMDG code. Dual-use goods are assessed against EU and UK export control regulations." },
  { icon: Network, title: "Multimodal Global Routing Engine", desc: "Our routing desk designs optimal multimodal routes — combining sea, air and road segments — using a proprietary cost-time optimisation model updated weekly with current carrier rates, transit times, port congestion indices and fuel surcharge data." },
  { icon: Clock, title: "24/7 International Operations Desk", desc: "IOM Transit's international desk operates 24 hours a day, 7 days a week, monitoring all live global shipments. Vessel position tracking, airline departure alerts, border crossing confirmations and exception escalations are managed continuously without gaps." }
];

const BRANCHES = [
  {
    city: "Dubai",
    region: "Middle East & Gulf",
    image: "https://images.unsplash.com/photo-1597212720158-3c41fa2de02e?auto=format&fit=crop&w=800&q=80",
    role: "Middle East distribution hub, Gulf state import coordination, transshipment for Asia-Africa corridors",
    contact: "dubai@iomtransit.com"
  },
  {
    city: "Rotterdam",
    region: "European Gateway",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    role: "European FCL/LCL consolidation, Hapag-Lloyd and MSC gateway port operations, EU import compliance",
    contact: "rotterdam@iomtransit.com"
  },
  {
    city: "London",
    region: "UK & Western Europe",
    image: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=800&q=80",
    role: "UK imports management, post-Brexit customs entry, European road distribution coordination",
    contact: "london@iomtransit.com"
  },
  {
    city: "Shanghai",
    region: "Asia Pacific",
    image: "https://images.unsplash.com/photo-1538428494232-90d7a2a0e1cc?auto=format&fit=crop&w=800&q=80",
    role: "Asia Pacific sourcing logistics, China manufacturing freight, Far East consolidation for Africa-bound cargo",
    contact: "shanghai@iomtransit.com"
  },
  {
    city: "Johannesburg",
    region: "Southern Africa",
    image: "https://images.unsplash.com/photo-1577948000111-9c970dfe3743?auto=format&fit=crop&w=800&q=80",
    role: "SADC corridor operations, South African import procedures, sub-Saharan Africa road freight gateway",
    contact: "joburg@iomtransit.com"
  }
];

export default function GlobalOperations() {
  return (
    <main className="bg-[#0a1628]">

      {/* ── Hero ── */}
      <section className="relative min-h-[85vh] flex flex-col justify-end pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=1920&q=80"
            alt="Aerial view of global shipping port"
            fill className="object-cover object-center" priority sizes="100vw"
            placeholder="blur" blurDataURL={BLUR_NAVY}
          />
          <div className="absolute inset-0 bg-[#0a1628]/85" />
        </div>
        <div className="absolute bottom-0 right-[-2%] pointer-events-none select-none overflow-hidden z-0">
          <span className="type-watermark text-white">GLOBAL</span>
        </div>
        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="type-micro text-[#c9a84c] mb-8">Solutions — Global Operations</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.9 }} className="type-h1-hero text-white mb-10 max-w-4xl">
            Global<br /><span className="text-[#c9a84c]">Operations</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="type-body-large text-[#8a9bb5] max-w-[560px] mb-16">
            IOM Transit's international operations framework — connecting Nairobi to 50+ countries through owned branches, bonded agents and freight partnerships built over two decades.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="flex gap-12 border-t border-[rgba(201,168,76,0.2)] pt-10">
            {[{ v: "50+", l: "Countries" }, { v: "5", l: "Global Branches" }, { v: "24/7", l: "Operations Desk" }, { v: "120+", l: "Partner Network" }].map(s => (
              <div key={s.l}><p className="type-stat text-white">{s.v}</p><p className="type-micro text-[#8a9bb5] mt-2">{s.l}</p></div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="py-32 bg-[#0a1628] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-20">
            <p className="type-micro text-[#c9a84c] mb-4">Framework Pillars</p>
            <h2 className="type-h2 text-white max-w-2xl">What Powers Our International Infrastructure</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(201,168,76,0.1)]">
            {CAPABILITIES.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: i * 0.1, duration: 0.7 }} className="bg-[#0a1628] p-10 hover:bg-[#112240] transition-colors duration-300">
                <s.icon className="text-[#c9a84c] w-7 h-7 mb-8" />
                <h3 className="type-h3 text-white mb-4">{s.title}</h3>
                <p className="type-body-small text-[#8a9bb5] leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Global Branches ── */}
      <section className="py-32 bg-[#112240] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-20">
            <p className="type-micro text-[#c9a84c] mb-4">Branch Network</p>
            <h2 className="type-h2 text-white">Five Global Offices. One Integrated System.</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[rgba(201,168,76,0.1)]">
            {BRANCHES.map((branch, i) => (
              <motion.div key={branch.city} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-[#112240] group overflow-hidden">
                <div className="relative h-[200px] overflow-hidden">
                  <Image src={branch.image} alt={`${branch.city} office`} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 1024px) 100vw, 33vw" placeholder="blur" blurDataURL={BLUR_NAVY} />
                  <div className="absolute inset-0 bg-[#0a1628]/60" />
                  <div className="absolute bottom-4 left-6">
                    <p className="type-micro text-[#c9a84c]">{branch.region}</p>
                    <h3 className="font-heading text-3xl text-white">{branch.city}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="type-body-small text-[#8a9bb5] mb-6 leading-relaxed">{branch.role}</p>
                  <a href={`mailto:${branch.contact}`} className="type-micro text-[#c9a84c] hover:text-white transition-colors">{branch.contact}</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Agent CTA ── */}
      <section className="py-32 bg-[#0a1628] border-t border-[rgba(201,168,76,0.2)] relative overflow-hidden">
        <div className="absolute -bottom-10 -right-10 pointer-events-none select-none overflow-hidden">
          <span className="type-watermark text-white">IOM</span>
        </div>
        <div className="container mx-auto px-6 max-w-[900px] relative z-10 text-center">
          <p className="type-micro text-[#c9a84c] mb-6">Global Business Enquiry</p>
          <h2 className="type-h2 text-white mb-6">Connect to Our International Network.</h2>
          <p className="type-body-large text-[#8a9bb5] mb-16">Speak directly with <strong className="text-white font-medium">Nadia Rahman</strong>, Global Business Development, who manages all international freight partnerships and branch coordination.</p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-6 bg-[#112240] border border-[rgba(201,168,76,0.2)] px-8 py-5 mb-12">
            <div className="w-12 h-12 bg-[#c9a84c] flex items-center justify-center shrink-0"><span className="type-micro text-[#0a1628] font-bold">NR</span></div>
            <div className="text-left">
              <p className="type-body text-white font-medium">Nadia Rahman</p>
              <p className="type-body-small text-[#8a9bb5]">Global Business Development</p>
              <a href="mailto:nadia.rahman@iomtransit.com" className="type-micro text-[#c9a84c] hover:text-white transition-colors">nadia.rahman@iomtransit.com</a>
            </div>
          </motion.div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote?service=global-operations&agent=nadia-rahman" className="inline-flex items-center gap-3 bg-[#c9a84c] text-[#0a1628] px-10 py-5 type-btn font-bold tracking-widest uppercase hover:bg-white transition-colors">
              Request Global Operations Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
