"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FileText, BarChart3, ShieldCheck, Scale, Package, Clock, ArrowRight } from "lucide-react";

const BLUR_NAVY = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJQAB//Z";

const CAPABILITIES = [
  { icon: FileText, title: "Import Declarations (IDF)", desc: "Complete import declaration filing on KRA iCMS — Import Declaration Form lodgement, tariff classification under East Africa Community Common External Tariff, customs entry submission and assessment tracking through to final release order." },
  { icon: FileText, title: "Export Declarations (EDF)", desc: "Export Declaration Form processing, export permits where required, certificate of origin from the Kenya National Chamber of Commerce, and coordination with SGS pre-shipment inspection authority for goods subject to pre-export verification." },
  { icon: BarChart3, title: "HS Code Classification", desc: "Accurate Harmonised System classification is the foundation of correct duty computation. IOM Transit's classification desk applies the EAC Common External Tariff and WTO valuation methodology to minimise duty exposure and eliminate costly reclassification disputes." },
  { icon: Scale, title: "Duty Computation & Payment", desc: "Precise calculation of import duty, Value Added Tax, railway development levy, import declaration fee and other applicable levies. IOM Transit facilitates duty payment through KRA authorised payment channels, providing clients with full duty breakdowns before goods are released." },
  { icon: ShieldCheck, title: "Bond Management", desc: "Management of customs bonds for temporary importation, transit bonds for goods moving through Kenya to land-locked countries, and warehouse bonds for goods held in bonded facilities pending duty payment or re-exportation." },
  { icon: Clock, title: "Pre-Arrival Processing", desc: "Advance cargo declaration through KRA iCMS pre-arrival processing reduces port dwell time by enabling duty assessment before the vessel arrives. IOM Transit systematically files pre-arrival entries to achieve the fastest possible cargo release at Mombasa." },
  { icon: ShieldCheck, title: "Appeals & Disputes", desc: "Where KRA issues a disputed classification, assessment or detention notice, IOM Transit's compliance team prepares the technical grounds for appeal, liaises with KRA customs officers at valuation and the Kenya Revenue Authority Dispute Resolution Committee." },
  { icon: Package, title: "Restricted & Controlled Goods", desc: "Handling of NEMA-regulated goods, KEPHIS agricultural imports, KEBS standards-controlled products, radiation authority regulated equipment and Ministry of Health pharmaceutical imports — each requiring specific licence, permit or test certificate before release." }
];

const PROCESS = [
  { step: "01", title: "Document Receipt from Client", desc: "Client submits original shipping documents — commercial invoice, packing list, bill of lading or airway bill, certificate of origin and any applicable permits — to the IOM Transit customs desk for review." },
  { step: "02", title: "HS Classification & Duty Computation", desc: "Our classification desk verifies the HS code, applies EAC CET rates, computes import duty, VAT, RDL and IDF levies, and presents the duty estimate to the client for approval before entry lodgement." },
  { step: "03", title: "Entry Lodgement on KRA iCMS", desc: "Customs entry is formally lodged on Kenya Revenue Authority's integrated Customs Management System. Declaration is submitted, acknowledgement receipt obtained and assessment number registered." },
  { step: "04", title: "Examination Coordination with KRA", desc: "Where KRA selects the entry for physical or documentary examination, IOM Transit coordinates examination scheduling, ensures cargo access is facilitated at the container freight station or port warehouse, and accompanies KRA officers during examination." },
  { step: "05", title: "Duty Payment & Release Order", desc: "Once assessment is confirmed and approved by the client, duty is paid through KRA-authorised banking channels. The customs release order is obtained and forwarded to the port or terminal for cargo release." },
  { step: "06", title: "Physical Cargo Release", desc: "IOM Transit's port operations team coordinates physical gate release at Mombasa Port or ICD Embakasi, managing container pick-up logistics and confirming trailer allocation for inland delivery." },
  { step: "07", title: "Inland Delivery", desc: "Cargo is transported from the release point to the client's designated delivery address. A Proof of Delivery is formally issued and all original documents are archived in the client's shipment file." }
];

const CREDENTIALS = [
  { title: "KRA Licensed Clearing Agent", detail: "License No. KRA-CA/2004/0178" },
  { title: "KEBS Standards Liaison", detail: "Kenya Bureau of Standards approved" },
  { title: "KEPHIS Coordination", detail: "Agricultural import phytosanitary clearance" },
  { title: "NEMA Compliance", detail: "Environmental regulatory coordination" },
  { title: "Anti-Counterfeiting Authority", detail: "ACA brand protection liaison" },
  { title: "EAC CET Certified", detail: "East Africa Community tariff authority" }
];

export default function CustomsImports() {
  return (
    <main className="bg-[#0a1628]">

      {/* ── Hero ── */}
      <section className="relative min-h-[92vh] flex flex-col justify-end pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1920&q=80"
            alt="Customs documentation desk with official trade documents"
            fill className="object-cover object-center" priority sizes="100vw"
            placeholder="blur" blurDataURL={BLUR_NAVY}
          />
          <div className="absolute inset-0 bg-[#0a1628]/87" />
        </div>
        <div className="absolute bottom-0 right-[-2%] pointer-events-none select-none overflow-hidden z-0">
          <span className="type-watermark text-white">CUSTOMS</span>
        </div>
        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="type-micro text-[#c9a84c] mb-8">Services — Customs &amp; Imports</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.9 }} className="type-h1-hero text-white mb-10 max-w-4xl">
            Customs &amp;<br /><span className="text-[#c9a84c]">Imports</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="type-body-large text-[#8a9bb5] max-w-[560px] mb-16">
            Licensed KRA clearing agents with deep expertise in import declarations, duty management and border compliance across Kenya and East Africa.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="flex flex-col sm:flex-row gap-12 border-t border-[rgba(201,168,76,0.2)] pt-10">
            {[{ v: "40,000+", l: "Declarations Processed" }, { v: "0", l: "Compliance Failures" }, { v: "KRA", l: "Licensed Agent" }, { v: "24hr", l: "Pre-Arrival Processing" }].map(s => (
              <div key={s.l}><p className="type-stat text-white">{s.v}</p><p className="type-micro text-[#8a9bb5] mt-2">{s.l}</p></div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="py-32 bg-[#0a1628] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-20">
            <p className="type-micro text-[#c9a84c] mb-4">Customs Services</p>
            <h2 className="type-h2 text-white max-w-2xl">Complete Import &amp; Export Compliance Coverage</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(201,168,76,0.1)]">
            {CAPABILITIES.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: i * 0.08, duration: 0.7 }} className="bg-[#0a1628] p-8 hover:bg-[#112240] transition-colors duration-300">
                <s.icon className="text-[#c9a84c] w-6 h-6 mb-6" />
                <h3 className="type-h4 text-white mb-3">{s.title}</h3>
                <p className="type-body-small text-[#8a9bb5] leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Timeline ── */}
      <section className="py-32 bg-[#112240] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-20">
            <p className="type-micro text-[#c9a84c] mb-4">Clearance Process</p>
            <h2 className="type-h2 text-white">From Documents to Release. Precisely Managed.</h2>
          </div>
          <div className="relative">
            <div className="absolute left-[22px] top-0 bottom-0 w-px bg-[rgba(201,168,76,0.2)] hidden md:block" />
            <div className="flex flex-col gap-0">
              {PROCESS.map((step, i) => (
                <motion.div key={step.step} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: i * 0.1, duration: 0.7 }} className="flex gap-10 md:gap-16 pb-14 relative">
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-[46px] h-[46px] bg-[#c9a84c] flex items-center justify-center shrink-0 z-10">
                      <span className="type-micro text-[#0a1628]">{step.step}</span>
                    </div>
                  </div>
                  <div className="md:hidden shrink-0"><span className="type-stat text-[#c9a84c] opacity-40">{step.step}</span></div>
                  <div className="pt-2 md:pt-3 pb-8 border-b border-[rgba(201,168,76,0.1)] flex-1">
                    <h3 className="type-h3 text-white mb-4">{step.title}</h3>
                    <p className="type-body text-[#8a9bb5] max-w-3xl">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Credentials ── */}
      <section className="py-24 bg-[#0a1628] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <p className="type-micro text-[#c9a84c] mb-12">Compliance Credentials</p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(201,168,76,0.1)]">
            {CREDENTIALS.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-[#0a1628] p-8">
                <div className="w-2 h-2 bg-[#c9a84c] mb-6" />
                <h4 className="type-h4 text-white mb-2">{c.title}</h4>
                <p className="type-body-small text-[#8a9bb5]">{c.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Agent CTA ── */}
      <section className="py-32 bg-[#112240] border-t border-[rgba(201,168,76,0.2)] relative overflow-hidden">
        <div className="absolute -bottom-10 -right-10 pointer-events-none select-none overflow-hidden">
          <span className="type-watermark text-white">IOM</span>
        </div>
        <div className="container mx-auto px-6 max-w-[900px] relative z-10 text-center">
          <p className="type-micro text-[#c9a84c] mb-6">Begin Your Clearance Enquiry</p>
          <h2 className="type-h2 text-white mb-6">Zero Compliance Failures. Every Time.</h2>
          <p className="type-body-large text-[#8a9bb5] mb-16">Your clearance will be managed by <strong className="text-white font-medium">David Omondi</strong>, Head of Customs &amp; Compliance, with over 18 years of KRA border operations experience.</p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-6 bg-[#0a1628] border border-[rgba(201,168,76,0.2)] px-8 py-5 mb-12">
            <div className="w-12 h-12 bg-[#c9a84c] flex items-center justify-center shrink-0">
              <span className="type-micro text-[#0a1628] font-bold">DO</span>
            </div>
            <div className="text-left">
              <p className="type-body text-white font-medium">David Omondi</p>
              <p className="type-body-small text-[#8a9bb5]">Head of Customs &amp; Compliance</p>
              <a href="mailto:customs@iomtransit.com" className="type-micro text-[#c9a84c] hover:text-white transition-colors">customs@iomtransit.com</a>
            </div>
          </motion.div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote?service=customs-imports&agent=david-omondi" className="inline-flex items-center gap-3 bg-[#c9a84c] text-[#0a1628] px-10 py-5 type-btn font-bold tracking-widest uppercase hover:bg-white transition-colors">
              Request Customs Clearance Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
