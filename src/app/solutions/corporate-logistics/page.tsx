"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BarChart3, Shield, Users, Zap, FileText, Network, ArrowRight } from "lucide-react";

const FEATURES = [
  { icon: Users, title: "Dedicated Account Management", desc: "Every corporate client is assigned a named account manager who acts as the single point of contact for all operational queries, escalations, billing disputes and service expansions. The account manager is contactable directly by phone and email during business hours with a 1-hour response SLA." },
  { icon: FileText, title: "SLA-Backed Agreements with KPI Commitments", desc: "IOM Transit formalises all corporate relationships through a Master Service Agreement with Schedule of Services, specifying transit times, damage thresholds, reporting cadences, escalation procedures and penalty frameworks for breach of agreed service levels." },
  { icon: BarChart3, title: "Monthly Performance Reporting", desc: "All corporate clients receive a structured monthly performance report covering: consignment volumes, on-time delivery rate, failed delivery exception rate, average transit time versus SLA, damage incidents and claims status. Presented in client-accessible portal and PDF format." },
  { icon: Zap, title: "Bulk Rate Contract Frameworks", desc: "High-volume corporate clients access bulk rate frameworks negotiated quarterly, structured around committed minimum volumes per lane. Pricing is locked for the contract period with fuel adjustment clauses for extended agreements exceeding 12 months." },
  { icon: Network, title: "Supply Chain Integration via API", desc: "IOM Transit's Operations API allows direct integration between the client's ERP or WMS and our dispatch system. Orders flow without manual intervention — from origination in the client's system through to POD capture and status update back into the client's platform." },
  { icon: Shield, title: "Dedicated Vehicle Allocation", desc: "Corporate clients requiring guaranteed vehicle availability can reserve dedicated vehicles from IOM Transit's fleet. Dedicated vehicles are branded with client livery, allocated exclusively to the client's routes and operate on the client's preferred schedule." }
];

const SLA_TIERS = [
  { tier: "Standard", transit: "Next Day National / 4-Hour Nairobi", reporting: "Weekly Summary", account: "Shared Account Team", vehicles: "From Managed Pool", support: "Business Hours" },
  { tier: "Priority", transit: "Same Day Nairobi / Next Day National", reporting: "Daily Dashboard", account: "Named Account Manager", vehicles: "Reserved Allocation", support: "Extended Hours" },
  { tier: "Enterprise", transit: "Custom SLA Per Lane", reporting: "Real-Time Portal + Monthly Review", account: "Dedicated Account Director", vehicles: "Exclusively Allocated Fleet", support: "24/7 Direct Line" }
];

export default function CorporateLogistics() {
  return (
    <main className="bg-[#0a1628]">

      {/* ── Hero ── */}
      <section className="relative min-h-[75vh] flex flex-col justify-end pb-24 overflow-hidden bg-[#0a1628] border-b border-[rgba(201,168,76,0.2)]">
        <div className="absolute bottom-0 right-[-2%] pointer-events-none select-none overflow-hidden z-0">
          <span className="type-watermark text-white">ENTERPRISE</span>
        </div>
        <div className="container mx-auto px-6 max-w-[1400px] relative z-10 pt-40">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="type-micro text-[#c9a84c] mb-8">Solutions — Corporate Logistics</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="type-h1-hero text-white mb-10 max-w-4xl">
            Corporate<br /><span className="text-[#c9a84c]">Logistics</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="type-body-large text-[#8a9bb5] max-w-[560px] mb-16">
            SLA-backed enterprise supply chain solutions designed for organisations that require guaranteed performance, dedicated infrastructure and a single accountable logistics partner across all trade lanes.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="flex gap-12 border-t border-[rgba(201,168,76,0.2)] pt-10">
            {[{ v: "200+", l: "Corporate Clients" }, { v: "API", l: "ERP Integration" }, { v: "Named", l: "Account Manager Per Client" }, { v: "3", l: "Service Tiers" }].map(s => (
              <div key={s.l}><p className="type-stat text-white">{s.v}</p><p className="type-micro text-[#8a9bb5] mt-2">{s.l}</p></div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-32 bg-[#0a1628] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-20">
            <p className="type-micro text-[#c9a84c] mb-4">Enterprise Features</p>
            <h2 className="type-h2 text-white max-w-2xl">What Makes an IOM Transit Corporate Account Different</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(201,168,76,0.1)]">
            {FEATURES.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-[#0a1628] p-10 hover:bg-[#112240] transition-colors">
                <f.icon className="text-[#c9a84c] w-7 h-7 mb-8" />
                <h3 className="type-h3 text-white mb-4">{f.title}</h3>
                <p className="type-body-small text-[#8a9bb5] leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SLA Tiers ── */}
      <section className="py-32 bg-[#112240] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-16">
            <p className="type-micro text-[#c9a84c] mb-4">Service Level Agreement Tiers</p>
            <h2 className="type-h2 text-white">Choose Your SLA Tier</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[rgba(201,168,76,0.1)]">
            {SLA_TIERS.map((tier, i) => (
              <motion.div key={tier.tier} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className={`p-10 ${i === 2 ? 'bg-[rgba(201,168,76,0.08)] border border-[#c9a84c]' : 'bg-[#112240]'}`}>
                <p className="type-micro text-[#c9a84c] mb-3">{i === 2 ? "Recommended" : `Tier 0${i + 1}`}</p>
                <h3 className="font-heading text-4xl text-white mb-8">{tier.tier}</h3>
                <div className="space-y-5">
                  {[["Transit SLA", tier.transit], ["Reporting", tier.reporting], ["Account Structure", tier.account], ["Vehicle Access", tier.vehicles], ["Support Hours", tier.support]].map(([k, v]) => (
                    <div key={k} className="pb-4 border-b border-[rgba(201,168,76,0.1)]">
                      <p className="type-micro text-[#8a9bb5] mb-1">{k}</p>
                      <p className="type-body-small text-white">{v}</p>
                    </div>
                  ))}
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
          <p className="type-micro text-[#c9a84c] mb-6">Enterprise Account Enquiry</p>
          <h2 className="type-h2 text-white mb-6">Your Supply Chain, Structured.</h2>
          <p className="type-body-large text-[#8a9bb5] mb-16">Corporate account structuring is handled by <strong className="text-white font-medium">Amina Kariuki</strong>, Chief Operations Officer, who designs all enterprise SLA frameworks.</p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-6 bg-[#112240] border border-[rgba(201,168,76,0.2)] px-8 py-5 mb-12">
            <div className="w-12 h-12 bg-[#c9a84c] flex items-center justify-center shrink-0"><span className="type-micro text-[#0a1628] font-bold">AK</span></div>
            <div className="text-left">
              <p className="type-body text-white font-medium">Amina Kariuki</p>
              <p className="type-body-small text-[#8a9bb5]">Chief Operations Officer</p>
              <a href="mailto:amina.kariuki@iomtransit.com" className="type-micro text-[#c9a84c] hover:text-white transition-colors">amina.kariuki@iomtransit.com</a>
            </div>
          </motion.div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote?service=corporate-logistics&agent=amina-kariuki" className="inline-flex items-center gap-3 bg-[#c9a84c] text-[#0a1628] px-10 py-5 type-btn font-bold tracking-widest uppercase hover:bg-white transition-colors">
              Request Corporate Account Proposal <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
