"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Zap, Clock, Package, CreditCard, FileCheck, RotateCcw, BarChart3, ArrowRight, MapPin } from "lucide-react";

const BLUR_NAVY = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJQAB//Z";

const CAPABILITIES = [
  { icon: Zap, title: "Same-Day Urban Delivery", desc: "Nairobi CBD and residential estates delivered within a four-hour window. IOM Transit's urban fleet operates continuous dispatch cycles from our Nairobi hub, accepting same-day bookings until 12:00 noon." },
  { icon: Clock, title: "Next-Day National", desc: "Overnight linehaul to all 47 Kenyan counties. Cargo collected before 18:00 is loaded on the overnight trunk route and delivered to the destination county by the following business day morning." },
  { icon: Package, title: "FMCG Bulk Distribution", desc: "Scheduled route delivery for consumer goods manufacturers and distributors, managing repetitive multi-drop runs across designated trade routes with route sheets, beat plans and daily reconciliation reports." },
  { icon: BarChart3, title: "E-Commerce Fulfilment", desc: "Warehouse pick-pack-ship infrastructure for online retailers. IOM Transit integrates with client OMS platforms to receive orders, pick from managed inventory, pack, label and dispatch within published SLA windows." },
  { icon: CreditCard, title: "Cash on Delivery", desc: "COD collection on behalf of seller clients with same-day or next-business-day remittance. IOM Transit's field agents collect cash or M-Pesa payment at point of delivery and reconcile daily through our treasury system." },
  { icon: FileCheck, title: "Proof of Delivery", desc: "Digital POD with GPS timestamp, recipient signature capture and photo documentation at delivery. All PODs are accessible via client portal within 30 minutes of delivery completion." },
  { icon: RotateCcw, title: "Returns Management", desc: "Reverse logistics for damaged, rejected or returned goods. IOM Transit manages return collection, inspection, re-labelling and restocking or disposal per client's returns policy." }
];

const PROCESS = [
  { step: "01", title: "Manifest Receipt & Sorting", desc: "Daily manifest received from client system. All consignments are sorted by delivery zone, priority class and vehicle load capacity." },
  { step: "02", title: "Route Optimisation Algorithm", desc: "IOM Transit's dispatch system applies route optimisation across all active deliveries, grouping consignments by zone and sequence to minimise transit time." },
  { step: "03", title: "Driver Assignment & Dispatch", desc: "Allocated drivers are briefed, vehicles are loaded with sealed consignments and documents, and dispatch is confirmed via the fleet management system." },
  { step: "04", title: "Real-Time GPS Tracking", desc: "Every vehicle is monitored in real time. Clients can track individual consignment delivery windows through the IOM Transit portal or API integration." },
  { step: "05", title: "Delivery Attempt & POD Capture", desc: "Driver attempts delivery at the confirmed address. On successful delivery, digital POD is captured with signature and timestamp. On failed delivery, exception is logged immediately." },
  { step: "06", title: "Exception Handling", desc: "Failed delivery exceptions are escalated to the client within 30 minutes. Re-delivery is scheduled for the next available slot or consignment is returned to origin per client instruction." },
  { step: "07", title: "Daily Reporting", desc: "End-of-day delivery report issued to client by 20:00, showing delivered, failed and pending consignments, COD collections and any exceptions with resolution status." }
];

// Kenya counties grouped by region for coverage table
const COVERAGE_REGIONS = [
  { region: "Nairobi Region", counties: ["Nairobi"], frequency: "Daily — Multiple Runs", transit: "Same Day" },
  { region: "Central", counties: ["Kiambu", "Murang'a", "Kirinyaga", "Nyeri", "Nyandarua"], frequency: "Daily", transit: "Next Day" },
  { region: "Coast", counties: ["Mombasa", "Kwale", "Kilifi", "Tana River", "Lamu", "Taita Taveta"], frequency: "Daily", transit: "Next Day" },
  { region: "Rift Valley", counties: ["Nakuru", "Uasin Gishu", "Trans Nzoia", "Nandi", "Kericho", "Bomet"], frequency: "Daily", transit: "Next Day" },
  { region: "Western", counties: ["Kisumu", "Siaya", "Homa Bay", "Migori", "Kisii", "Nyamira"], frequency: "Daily", transit: "Next Day" },
  { region: "Eastern", counties: ["Machakos", "Makueni", "Kitui", "Embu", "Meru", "Tharaka Nithi"], frequency: "3x Weekly", transit: "2 Days" },
  { region: "North Eastern", counties: ["Garissa", "Wajir", "Mandera"], frequency: "Weekly", transit: "3–5 Days" },
  { region: "Upper Eastern", counties: ["Marsabit", "Isiolo", "Samburu", "Laikipia"], frequency: "Weekly", transit: "3–5 Days" }
];

export default function LastMileDelivery() {
  return (
    <main className="bg-[#0a1628]">

      {/* ── Hero ── */}
      <section className="relative min-h-[92vh] flex flex-col justify-end pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?auto=format&fit=crop&w=1920&q=80"
            alt="Delivery van in urban Nairobi street"
            fill className="object-cover object-center" priority sizes="100vw"
            placeholder="blur" blurDataURL={BLUR_NAVY}
          />
          <div className="absolute inset-0 bg-[#0a1628]/84" />
        </div>
        <div className="absolute bottom-0 right-[-2%] pointer-events-none select-none overflow-hidden z-0">
          <span className="type-watermark text-white">DELIVERY</span>
        </div>
        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="type-micro text-[#c9a84c] mb-8">Services — Last Mile Delivery</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.9 }} className="type-h1-hero text-white mb-10 max-w-4xl">
            Last Mile<br /><span className="text-[#c9a84c]">Delivery</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="type-body-large text-[#8a9bb5] max-w-[560px] mb-16">
            Reliable, tracked final-mile distribution across urban and rural Kenya — from our hubs to your customer's door, with digital proof of delivery on every consignment.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="flex flex-col sm:flex-row gap-12 border-t border-[rgba(201,168,76,0.2)] pt-10">
            {[{ v: "47", l: "Counties Covered" }, { v: "4hr", l: "Nairobi Same-Day SLA" }, { v: "Digital", l: "POD on Every Delivery" }, { v: "24/7", l: "Fleet Tracking" }].map(s => (
              <div key={s.l}><p className="type-stat text-white">{s.v}</p><p className="type-micro text-[#8a9bb5] mt-2">{s.l}</p></div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="py-32 bg-[#0a1628] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-20">
            <p className="type-micro text-[#c9a84c] mb-4">Delivery Services</p>
            <h2 className="type-h2 text-white max-w-2xl">Last Mile. Maximum Reach.</h2>
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

      {/* ── Process ── */}
      <section className="py-32 bg-[#112240] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-20">
            <p className="type-micro text-[#c9a84c] mb-4">Daily Operations</p>
            <h2 className="type-h2 text-white">How Every Delivery Day Runs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((step, i) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="border border-[rgba(201,168,76,0.15)] p-8 relative hover:border-[#c9a84c] transition-colors duration-300">
                <p className="type-micro text-[#c9a84c] mb-4">{step.step}</p>
                <h4 className="type-h4 text-white mb-4">{step.title}</h4>
                <p className="type-body-small text-[#8a9bb5]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Coverage Table ── */}
      <section className="py-32 bg-[#0a1628] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-16">
            <p className="type-micro text-[#c9a84c] mb-4">National Coverage</p>
            <h2 className="type-h2 text-white">All 47 Counties. One Network.</h2>
          </div>
          <div className="border border-[rgba(201,168,76,0.2)]">
            <div className="grid grid-cols-4 border-b border-[rgba(201,168,76,0.2)] bg-[rgba(201,168,76,0.05)]">
              {["Region", "Counties", "Frequency", "Transit Time"].map(h => <div key={h} className="px-6 py-4"><p className="type-micro text-[#c9a84c]">{h}</p></div>)}
            </div>
            {COVERAGE_REGIONS.map((r, i) => (
              <motion.div key={r.region} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="grid grid-cols-4 border-b border-[rgba(201,168,76,0.1)] last:border-b-0 hover:bg-[rgba(201,168,76,0.04)] transition-colors">
                <div className="px-6 py-5"><p className="type-body-small text-white font-medium">{r.region}</p></div>
                <div className="px-6 py-5"><p className="type-body-small text-[#8a9bb5]">{r.counties.join(", ")}</p></div>
                <div className="px-6 py-5"><p className="type-body-small text-[#8a9bb5]">{r.frequency}</p></div>
                <div className="px-6 py-5"><p className="type-body-small text-[#c9a84c]">{r.transit}</p></div>
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
          <p className="type-micro text-[#c9a84c] mb-6">Build Your Delivery Network</p>
          <h2 className="type-h2 text-white mb-6">Your Customer. Our Last Mile.</h2>
          <p className="type-body-large text-[#8a9bb5] mb-16">Your distribution solution will be designed by <strong className="text-white font-medium">Amina Kariuki</strong>, Chief Operations Officer, who oversees all last mile delivery infrastructure and SLA frameworks.</p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-6 bg-[#0a1628] border border-[rgba(201,168,76,0.2)] px-8 py-5 mb-12">
            <div className="w-12 h-12 bg-[#c9a84c] flex items-center justify-center shrink-0">
              <span className="type-micro text-[#0a1628] font-bold">AK</span>
            </div>
            <div className="text-left">
              <p className="type-body text-white font-medium">Amina Kariuki</p>
              <p className="type-body-small text-[#8a9bb5]">Chief Operations Officer</p>
              <a href="mailto:operations@iomtransit.com" className="type-micro text-[#c9a84c] hover:text-white transition-colors">operations@iomtransit.com</a>
            </div>
          </motion.div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote?service=last-mile-delivery&agent=amina-kariuki" className="inline-flex items-center gap-3 bg-[#c9a84c] text-[#0a1628] px-10 py-5 type-btn font-bold tracking-widest uppercase hover:bg-white transition-colors">
              Request Delivery Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
