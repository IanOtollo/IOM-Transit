"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Truck, Clock, Network, ArrowRight } from "lucide-react";

const HUBS = [
  { city: "Nairobi", role: "National Headquarters", detail: "Fleet operations, customs team, corporate accounts, warehousing management, HR and finance." },
  { city: "Mombasa", role: "Port Operations Hub", detail: "Sea freight desk, port agency, bonded warehousing, CFS operations, coastal distribution." },
  { city: "Kisumu", role: "Western Kenya Hub", detail: "Lake region distribution, Uganda corridor gateway, FMCG route coverage for Nyanza and Western regions." },
  { city: "Eldoret", role: "North Rift Hub", detail: "Rift Valley distribution, cross-border corridor to Uganda and South Sudan, grain and agriculture logistics." },
  { city: "Nakuru", role: "Central Rift Hub", detail: "Central Rift distribution, FMCG and pharmaceutical distribution across Nakuru and Nyandarua counties." }
];

const TRUNK_ROUTES = [
  { route: "Nairobi — Mombasa", distance: "480 km", departures: "06:00, 14:00, 22:00", transit: "7–9 hrs" },
  { route: "Nairobi — Kisumu", distance: "350 km", departures: "07:00, 16:00", transit: "5–7 hrs" },
  { route: "Nairobi — Eldoret", distance: "312 km", departures: "07:00, 17:00", transit: "4–6 hrs" },
  { route: "Nairobi — Nakuru", distance: "156 km", departures: "09:00, 14:00, 19:00", transit: "2–3 hrs" },
  { route: "Mombasa — Malindi", distance: "110 km", departures: "08:00, 15:00", transit: "2–3 hrs" },
  { route: "Kisumu — Eldoret", distance: "140 km", departures: "08:00, 16:00", transit: "2–3 hrs" }
];

const FEATURES = [
  { icon: MapPin, title: "Hub-and-Spoke Distribution", desc: "A central Nairobi hub processes inbound freight and dispatches daily to all four regional hubs. Each hub operates its own local spoke routes, enabling national coverage with coordinated overnight linehaul schedules." },
  { icon: Truck, title: "Overnight Linehaul Operations", desc: "IOM Transit's overnight trunk route network departs Nairobi at 22:00 nightly, delivering consolidated freight to all regional hubs for morning break-bulk and local distribution — matching next-day delivery SLAs across Kenya." },
  { icon: Network, title: "Highlands & Agricultural Coverage", desc: "Dedicated routes service the fertile highland regions of Nakuru, Nyandarua, Nyeri and Murang'a, supporting fresh produce, inputs distribution and agricultural equipment transport on scheduled multi-drop routes." },
  { icon: Clock, title: "Coastal Coverage", desc: "A dedicated coastal distribution fleet operates from Mombasa, covering Kilifi, Kwale, Malindi, Lamu and Taita Taveta counties on scheduled daily routes, with dedicated fresh cargo vehicles for perishable coastal commodities." }
];

export default function NationalNetwork() {
  return (
    <main className="bg-[#0a1628]">

      {/* ── Hero ── */}
      <section className="relative min-h-[75vh] flex flex-col justify-end pb-24 overflow-hidden bg-[#0a1628] border-b border-[rgba(201,168,76,0.2)]">
        <div className="absolute bottom-0 right-[-2%] pointer-events-none select-none overflow-hidden z-0">
          <span className="type-watermark text-white">NETWORK</span>
        </div>
        <div className="container mx-auto px-6 max-w-[1400px] relative z-10 pt-40">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="type-micro text-[#c9a84c] mb-8">Solutions — National Network</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="type-h1-hero text-white mb-10 max-w-4xl">
            National<br /><span className="text-[#c9a84c]">Network</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="type-body-large text-[#8a9bb5] max-w-[560px] mb-16">
            Five operational hubs. Daily trunk routes. 47-county coverage. IOM Transit's national infrastructure delivers freight across Kenya with the consistency of a scheduled public service.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="flex gap-12 border-t border-[rgba(201,168,76,0.2)] pt-10">
            {[{ v: "5", l: "Regional Hubs" }, { v: "47", l: "Counties Covered" }, { v: "Daily", l: "Trunk Route Frequency" }, { v: "22:00", l: "Overnight Linehaul Departure" }].map(s => (
              <div key={s.l}><p className="type-stat text-white">{s.v}</p><p className="type-micro text-[#8a9bb5] mt-2">{s.l}</p></div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Hub Network ── */}
      <section className="py-32 bg-[#0a1628] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-20">
            <p className="type-micro text-[#c9a84c] mb-4">Hub Infrastructure</p>
            <h2 className="type-h2 text-white">Five Hubs. One Network.</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-px bg-[rgba(201,168,76,0.1)]">
            {HUBS.map((hub, i) => (
              <motion.div key={hub.city} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-[#0a1628] p-8">
                <div className="w-2 h-2 bg-[#c9a84c] rounded-full shadow-[0_0_12px_#c9a84c] mb-6" />
                <h3 className="font-heading text-3xl text-white mb-1">{hub.city}</h3>
                <p className="type-micro text-[#c9a84c] mb-5">{hub.role}</p>
                <p className="type-body-small text-[#8a9bb5]">{hub.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trunk Route Schedule ── */}
      <section className="py-32 bg-[#112240] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-16">
            <p className="type-micro text-[#c9a84c] mb-4">Scheduled Departures</p>
            <h2 className="type-h2 text-white">Trunk Route Timetable</h2>
          </div>
          <div className="border border-[rgba(201,168,76,0.2)]">
            <div className="grid grid-cols-4 border-b border-[rgba(201,168,76,0.2)] bg-[rgba(201,168,76,0.05)]">
              {["Route", "Distance", "Daily Departures", "Transit Time"].map(h => <div key={h} className="px-6 py-4"><p className="type-micro text-[#c9a84c]">{h}</p></div>)}
            </div>
            {TRUNK_ROUTES.map((r, i) => (
              <motion.div key={r.route} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="grid grid-cols-4 border-b border-[rgba(201,168,76,0.1)] last:border-b-0 hover:bg-[rgba(201,168,76,0.04)] transition-colors">
                <div className="px-6 py-5"><p className="type-body-small text-white font-medium">{r.route}</p></div>
                <div className="px-6 py-5"><p className="type-body-small text-[#8a9bb5]">{r.distance}</p></div>
                <div className="px-6 py-5"><p className="type-body-small text-[#c9a84c]">{r.departures}</p></div>
                <div className="px-6 py-5"><p className="type-body-small text-[#8a9bb5]">{r.transit}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Network Features ── */}
      <section className="py-32 bg-[#0a1628] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-20">
            <p className="type-micro text-[#c9a84c] mb-4">Network Features</p>
            <h2 className="type-h2 text-white">Built for Kenyan Trade.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[rgba(201,168,76,0.1)]">
            {FEATURES.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-[#0a1628] p-10 hover:bg-[#112240] transition-colors">
                <f.icon className="text-[#c9a84c] w-7 h-7 mb-8" />
                <h3 className="type-h3 text-white mb-4">{f.title}</h3>
                <p className="type-body text-[#8a9bb5] leading-relaxed">{f.desc}</p>
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
          <p className="type-micro text-[#c9a84c] mb-6">National Distribution Enquiry</p>
          <h2 className="type-h2 text-white mb-6">Kenya Is Our Home Route.</h2>
          <p className="type-body-large text-[#8a9bb5] mb-16">Contact <strong className="text-white font-medium">Samuel Otieno</strong>, Regional Manager, to structure your national distribution SLA and route plan.</p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-6 bg-[#0a1628] border border-[rgba(201,168,76,0.2)] px-8 py-5 mb-12">
            <div className="w-12 h-12 bg-[#c9a84c] flex items-center justify-center shrink-0"><span className="type-micro text-[#0a1628] font-bold">SO</span></div>
            <div className="text-left">
              <p className="type-body text-white font-medium">Samuel Otieno</p>
              <p className="type-body-small text-[#8a9bb5]">Regional Manager, National Network</p>
              <a href="mailto:samuel.otieno@iomtransit.com" className="type-micro text-[#c9a84c] hover:text-white transition-colors">samuel.otieno@iomtransit.com</a>
            </div>
          </motion.div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote?service=national-network&agent=samuel-otieno" className="inline-flex items-center gap-3 bg-[#c9a84c] text-[#0a1628] px-10 py-5 type-btn font-bold tracking-widest uppercase hover:bg-white transition-colors">
              Request National Network Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
