"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield, Package, Thermometer, FileText, Truck, Users, ArrowRight } from "lucide-react";

const CAPABILITIES = [
  { icon: FileText, title: "Government Tender Experience", desc: "IOM Transit has executed logistics contracts under Kenya Government procurement frameworks including open tender, restricted tender and direct procurement procedures governed by PPADA 2015. All contracts are executed with full audit trail documentation for public accountability." },
  { icon: Package, title: "NGO & Humanitarian Logistics", desc: "Specialist humanitarian logistics services for NGOs, INGOs and donor-funded organisations including UNHCR, World Food Programme, UNICEF, Médecins Sans Frontières and bilateral aid programmes under USAID, DFID and EU humanitarian funding." },
  { icon: Shield, title: "UN & USAID Consignment Handling", desc: "IOM Transit is experienced in handling UN system cargo — including diplomatic pouch equivalents, controlled substances for medical programmes, and restricted cargo under UN privilege — with the documentation and custody chain required by UN standard operating procedures." },
  { icon: Truck, title: "Bonded Transit for Government Imports", desc: "Government-to-government imports transiting Kenya en route to land-locked countries or entering Kenya under exemption from duty are managed under IOM Transit's customs bond, with dedicated handling at both entry and exit border posts." },
  { icon: Shield, title: "Security Escort Coordination", desc: "For high-value government cargo, cash-in-transit consignments or sensitive state property, IOM Transit coordinates police or private security escort from origin through all transit points to destination, with GPS tracking and chain of custody documentation." },
  { icon: Thermometer, title: "Ministry of Health Cold Chain", desc: "IOM Transit manages pharmaceutical cold chain logistics for Ministry of Health Kenya and county health department distribution — including COVID-19 vaccines, essential medicines and laboratory reagents — with unbroken temperature monitoring from warehouse to clinic." },
  { icon: Package, title: "WFP Food Distribution", desc: "World Food Programme food aid distribution operations in Kenya and across the region are supported by IOM Transit's fleet for last-mile delivery from WFP distribution points to targeted beneficiary populations in arid and semi-arid areas." },
  { icon: FileText, title: "PPADA Compliance", desc: "All IOM Transit public sector engagements comply with Kenya's Public Procurement and Asset Disposal Act 2015, maintaining required integrity declarations, tax compliance certificates, AGPO registration for relevant categories and corporate governance documentation." }
];

const CLIENTS = [
  "Government of Kenya — Ministry of Health",
  "World Food Programme (WFP)",
  "United Nations High Commissioner for Refugees (UNHCR)",
  "UNICEF Kenya Country Office",
  "Kenya Red Cross Society",
  "United States Agency for International Development (USAID)",
  "African Union Mission",
  "IGAD Regional Secretariat"
];

export default function GovernmentContracts() {
  return (
    <main className="bg-[#0a1628]">

      {/* ── Hero ── */}
      <section className="relative min-h-[75vh] flex flex-col justify-end pb-24 overflow-hidden bg-[#0a1628] border-b border-[rgba(201,168,76,0.2)]">
        <div className="absolute bottom-0 right-[-2%] pointer-events-none select-none overflow-hidden z-0">
          <span className="type-watermark text-white">GOV</span>
        </div>
        <div className="container mx-auto px-6 max-w-[1400px] relative z-10 pt-40">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="type-micro text-[#c9a84c] mb-8">Solutions — Government Contracts</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="type-h1-hero text-white mb-10 max-w-4xl">
            Government<br /><span className="text-[#c9a84c]">Contracts</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="type-body-large text-[#8a9bb5] max-w-[560px] mb-16">
            Humanitarian logistics, state-level consignment handling and public sector supply chain management executed to government audit standards and UN compliance frameworks.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="flex gap-12 border-t border-[rgba(201,168,76,0.2)] pt-10">
            {[{ v: "8+", l: "UN & Government Partners" }, { v: "PPADA", l: "Compliant Procurement" }, { v: "Cold Chain", l: "MoH Certified" }, { v: "24/7", l: "Government Account Support" }].map(s => (
              <div key={s.l}><p className="type-stat text-white">{s.v}</p><p className="type-micro text-[#8a9bb5] mt-2">{s.l}</p></div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="py-32 bg-[#0a1628] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-20">
            <p className="type-micro text-[#c9a84c] mb-4">Government & Humanitarian Services</p>
            <h2 className="type-h2 text-white max-w-2xl">Public Sector Logistics at State Scale</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(201,168,76,0.1)]">
            {CAPABILITIES.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-[#0a1628] p-8 hover:bg-[#112240] transition-colors">
                <s.icon className="text-[#c9a84c] w-6 h-6 mb-6" />
                <h3 className="type-h4 text-white mb-3">{s.title}</h3>
                <p className="type-body-small text-[#8a9bb5]">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Partners ── */}
      <section className="py-24 bg-[#112240] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <p className="type-micro text-[#c9a84c] mb-12">Partner Organisations</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(201,168,76,0.1)]">
            {CLIENTS.map((client, i) => (
              <motion.div key={client} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="bg-[#112240] p-8 flex items-center gap-4">
                <div className="w-2 h-2 bg-[#c9a84c] shrink-0" />
                <p className="type-body-small text-white">{client}</p>
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
          <p className="type-micro text-[#c9a84c] mb-6">Government Account Enquiry</p>
          <h2 className="type-h2 text-white mb-6">Trusted at the Highest Level.</h2>
          <p className="type-body-large text-[#8a9bb5] mb-16">Government and humanitarian contract enquiries are managed by <strong className="text-white font-medium">David Omondi</strong>, Head of Customs &amp; Compliance, who leads all public sector engagement.</p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-6 bg-[#112240] border border-[rgba(201,168,76,0.2)] px-8 py-5 mb-12">
            <div className="w-12 h-12 bg-[#c9a84c] flex items-center justify-center shrink-0"><span className="type-micro text-[#0a1628] font-bold">DO</span></div>
            <div className="text-left">
              <p className="type-body text-white font-medium">David Omondi</p>
              <p className="type-body-small text-[#8a9bb5]">Head of Customs &amp; Compliance</p>
              <a href="mailto:david.omondi@iomtransit.com" className="type-micro text-[#c9a84c] hover:text-white transition-colors">david.omondi@iomtransit.com</a>
            </div>
          </motion.div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote?service=government-contracts&agent=david-omondi" className="inline-flex items-center gap-3 bg-[#c9a84c] text-[#0a1628] px-10 py-5 type-btn font-bold tracking-widest uppercase hover:bg-white transition-colors">
              Request Government Contract Proposal <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
