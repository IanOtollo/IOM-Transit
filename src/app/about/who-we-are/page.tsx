"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const MILESTONES = [
  { year: "2002", event: "IOM Transit founded in Nairobi by Ian Otollo Marabi with a single 10-tonne truck and a local distribution contract." },
  { year: "2005", event: "Fleet expanded to 15 vehicles. First cross-border contract established on the Nairobi–Kampala corridor." },
  { year: "2008", event: "KRA Licensed Clearing Agent certification granted. Customs brokerage division launched in Mombasa." },
  { year: "2011", event: "International freight division established. First FCL bookings from Mombasa to Rotterdam and Dubai." },
  { year: "2014", event: "Fleet reaches 100 vehicles. Kisumu and Eldoret branch hubs opened." },
  { year: "2016", event: "IATA affiliate membership obtained. Air freight desk launched at JKIA." },
  { year: "2018", event: "ISO 9001 certification achieved. Corporate logistics division launched with first enterprise SLA client." },
  { year: "2020", event: "COVID-19 response: IOM Transit provides logistics support to Ministry of Health for medical supply distribution across all 47 counties." },
  { year: "2022", event: "Fleet exceeds 300 vehicles. International branch network established across Dubai, London, Rotterdam and Shanghai." },
  { year: "2024", event: "800+ employees. 50+ countries served. Africa's fastest-growing logistics authority." },
  { year: "2026", event: "IOM Transit enters its third decade as a global logistics company — from one truck in Nairobi to a continental force." }
];

const VALUES = [
  { title: "Precision", desc: "Every shipment is a promise. IOM Transit does not approximate — we deliver exactly what we commit to, on time, every time." },
  { title: "Integrity", desc: "We operate transparently with every client, partner and authority. No hidden fees, no misleading transit claims, no shortcuts where compliance is required." },
  { title: "Scale", desc: "Our infrastructure is built to grow with Africa's trade volumes. The size of the opportunity does not intimidate us — it drives us." },
  { title: "Speed", desc: "The world does not wait. Neither do we. From enquiry to dispatch, IOM Transit operates at the pace of global commerce." },
  { title: "Partnership", desc: "Every client relationship is a long-term partnership. We succeed when our clients' supply chains succeed over years, not transactions." }
];

export default function WhoWeAre() {
  return (
    <main className="bg-[#0a1628]">
      {/* ── Hero ── */}
      <section className="relative min-h-[75vh] flex flex-col justify-end pb-24 overflow-hidden bg-[#0a1628] border-b border-[rgba(201,168,76,0.2)]">
        <div className="absolute bottom-0 right-[-2%] pointer-events-none select-none overflow-hidden z-0"><span className="type-watermark text-white">IOM</span></div>
        <div className="container mx-auto px-6 max-w-[1400px] relative z-10 pt-40">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="type-micro text-[#c9a84c] mb-8">About — Who We Are</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="type-h1-hero text-white mb-10 max-w-4xl">Who We<br /><span className="text-[#c9a84c]">Are</span></motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="type-body-large text-[#8a9bb5] max-w-[620px] mb-16">From a single truck in Nairobi to a global logistics authority operating across 50+ countries — IOM Transit's story is a story of African ambition without limits.</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="flex gap-12 border-t border-[rgba(201,168,76,0.2)] pt-10">
            {[{v:"2002",l:"Founded"},{v:"800+",l:"Employees"},{v:"50+",l:"Countries"},{v:"20+",l:"Years"}].map(s => <div key={s.l}><p className="type-stat text-white">{s.v}</p><p className="type-micro text-[#8a9bb5] mt-2">{s.l}</p></div>)}
          </motion.div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-32 bg-[#112240] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="border-l-2 border-[#c9a84c] pl-8">
              <p className="type-micro text-[#c9a84c] mb-4">Our Mission</p>
              <h2 className="type-h2 text-white mb-6">To be Africa's most trusted logistics company.</h2>
              <p className="type-body text-[#8a9bb5] leading-relaxed">Trust is earned through consistency — in transit times, in documentation accuracy, in regulatory compliance, in how we communicate when things go wrong. IOM Transit has built its reputation as Africa's most trusted logistics company not through marketing, but through the operational discipline of 800 professionals who treat every consignment as a personal commitment.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="border-l-2 border-[#c9a84c] pl-8">
              <p className="type-micro text-[#c9a84c] mb-4">Our Vision</p>
              <h2 className="type-h2 text-white mb-6">A world where African trade moves without friction.</h2>
              <p className="type-body text-[#8a9bb5] leading-relaxed">Africa's intra-continental trade represents one of the greatest untapped economic opportunities on earth. Our vision is a continent where a manufacturer in Nairobi can reach a retailer in Lagos as easily as a shipper in Rotterdam reaches a buyer in Shanghai. IOM Transit is building the infrastructure, the networks, the regulatory expertise and the operational systems to make that world real.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-32 bg-[#0a1628] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-20">
            <p className="type-micro text-[#c9a84c] mb-4">Core Values</p>
            <h2 className="type-h2 text-white">Five Principles. Non-Negotiable.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-[rgba(201,168,76,0.1)]">
            {VALUES.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-[#0a1628] p-8">
                <p className="font-heading text-4xl text-[#c9a84c] mb-4">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="type-h3 text-white mb-4">{v.title}</h3>
                <p className="type-body-small text-[#8a9bb5] leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Milestones Timeline ── */}
      <section className="py-32 bg-[#112240] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-20">
            <p className="type-micro text-[#c9a84c] mb-4">Company History</p>
            <h2 className="type-h2 text-white">The IOM Transit Journey</h2>
          </div>
          <div className="relative">
            <div className="absolute left-[22px] top-0 bottom-0 w-px bg-[rgba(201,168,76,0.2)] hidden md:block" />
            <div className="flex flex-col gap-0">
              {MILESTONES.map((m, i) => (
                <motion.div key={m.year} initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ delay: i * 0.08, duration: 0.6 }} className="flex gap-10 md:gap-16 pb-10 relative">
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-[46px] h-[46px] bg-[#c9a84c] flex items-center justify-center shrink-0 z-10">
                      <span className="type-micro text-[#0a1628] font-bold">{m.year.slice(-2)}</span>
                    </div>
                  </div>
                  <div className="pt-2 md:pt-3 pb-6 border-b border-[rgba(201,168,76,0.1)] flex-1">
                    <p className="type-micro text-[#c9a84c] mb-2">{m.year}</p>
                    <p className="type-body text-[#8a9bb5]">{m.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0a1628] border-t border-[rgba(201,168,76,0.2)] text-center">
        <div className="container mx-auto px-6 max-w-[800px]">
          <p className="type-micro text-[#c9a84c] mb-6">Explore Further</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/about/leadership" className="bg-[#c9a84c] text-[#0a1628] px-8 py-4 type-btn font-bold tracking-widest uppercase hover:bg-white transition-colors">Leadership Team</Link>
            <Link href="/about/our-team" className="border border-[rgba(201,168,76,0.4)] text-white px-8 py-4 type-btn tracking-widest uppercase hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors">Our Team</Link>
            <Link href="/about/careers" className="border border-[rgba(201,168,76,0.4)] text-white px-8 py-4 type-btn tracking-widest uppercase hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors">Careers</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
