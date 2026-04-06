"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Building2, Home, Globe, Package, Hammer, Warehouse, Car, ShieldCheck, Clock, CheckCircle, ArrowRight } from "lucide-react";

const BLUR_NAVY = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJQAB//Z";

const CAPABILITIES = [
  { icon: Building2, title: "Corporate Office Relocation", desc: "End-to-end office decommission, transport and recommission — including IT asset handling, server room migration, furniture disassembly, branded box packing, and phased reinstallation at the new premises with zero operational downtime." },
  { icon: Home, title: "Residential Moving", desc: "Household goods relocation across Nairobi, upcountry Kenya and internationally managed by trained crew with professional packing materials, item-by-item inventory, specialised wrapping for artwork and fragile items, and GPS-tracked transport." },
  { icon: Globe, title: "International Relocation", desc: "Door-to-door personal effects and household goods shipping with destination customs clearance. IOM Transit manages packing, export certification, sea or air freight booking, destination port clearance, and final delivery to the new home country address." },
  { icon: Package, title: "Packing & Unpacking", desc: "Professional crew deployment with double-wall cartons, foam wrap, anti-static bubble wrap, mirror boxes, wardrobe cartons and custom crating for high-value and fragile items. A full photographic inventory is completed before loading." },
  { icon: Hammer, title: "Furniture Disassembly & Reassembly", desc: "IOM Transit crew are trained in furniture system disassembly and reinstallation including modular office furniture, custom wardrobes, beds, shelving and kitchen units. All hardware is bagged, labelled and numbered during disassembly." },
  { icon: Warehouse, title: "Storage During Transit", desc: "Bonded warehouse holding at our Nairobi or Mombasa facilities during relocation gap periods where the origin property is handed over before the destination property is ready. Inventory-controlled access, 24/7 CCTV surveillance." },
  { icon: Car, title: "Vehicle Shipping", desc: "Personal vehicle transport locally and internationally. Domestic transport on enclosed car carriers. International export via Ro-Ro vessel from Mombasa. IOM Transit manages vehicle inspection, export certification, destination import clearance and delivery." }
];

const PROCESS = [
  { step: "01", title: "Pre-Move Survey", desc: "An IOM Transit move coordinator visits the origin premises to assess volume, identify specialist items, document fragile goods and establish an accurate quote basis." },
  { step: "02", title: "Customised Quote & Move Plan", desc: "A detailed quote is provided itemising packing materials, crew size, vehicle type, transit time and any specialist handling requirements. A move schedule is agreed and crew allocated." },
  { step: "03", title: "Packing Day Crew Deployment", desc: "Trained crew arrive at the agreed time with all materials. Items are systematically packed, wrapped, labelled, inventoried and photographed before any item is loaded onto the vehicle." },
  { step: "04", title: "Loading & Vehicle Dispatch", desc: "Cargo is loaded using professional moving blankets, load bars and load locks. Vehicles are sealed and GPS-tracked from departure. Client receives a real-time tracking link." },
  { step: "05", title: "Transit Tracking", desc: "Throughout transit, the client can track vehicle position in real time via IOM Transit's fleet portal. Any exception — traffic, route change, delay — is communicated immediately." },
  { step: "06", title: "Offloading & Placement", desc: "Crew offload, unwrap and place items in the designated rooms per the client's placement plan. Furniture is reassembled. All packing materials are removed from the premises." },
  { step: "07", title: "Unpacking & Inventory Check", desc: "All items are checked against the origin inventory list. Any discrepancy is documented and escalated under IOM Transit's no-damage guarantee policy before the crew departs." },
  { step: "08", title: "Client Sign-Off", desc: "Client formally signs off the move completion certificate confirming all items delivered in full and in agreed condition. Insurance claim process initiated immediately if any damage is noted." }
];

const GUARANTEES = [
  { icon: ShieldCheck, title: "No Damage Guarantee", desc: "Full marine and goods-in-transit insurance cover on every move. In the unlikely event of damage, IOM Transit initiates the claim process within 24 hours and arranges repair or replacement at no additional cost to the client." },
  { icon: Clock, title: "On-Time Guarantee", desc: "The agreed move date is honoured without exception. If IOM Transit fails to arrive within the agreed four-hour window on move day without 24-hour advance notice, a penalty compensation is issued per the client's service agreement." },
  { icon: CheckCircle, title: "Inventory Guarantee", desc: "Every item is listed on the pre-move inventory and verified at delivery. If any item listed on the origin inventory is not delivered at the destination, IOM Transit assumes full liability for the replacement value of that item." }
];

export default function MovingServices() {
  return (
    <main className="bg-[#0a1628]">

      {/* ── Hero ── */}
      <section className="relative min-h-[92vh] flex flex-col justify-end pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80"
            alt="Professional moving crew with branded boxes and packing materials"
            fill className="object-cover object-center" priority sizes="100vw"
            placeholder="blur" blurDataURL={BLUR_NAVY}
          />
          <div className="absolute inset-0 bg-[#0a1628]/85" />
        </div>
        <div className="absolute bottom-0 right-[-2%] pointer-events-none select-none overflow-hidden z-0">
          <span className="type-watermark text-white">MOVE</span>
        </div>
        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="type-micro text-[#c9a84c] mb-8">Services — Moving Services</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.9 }} className="type-h1-hero text-white mb-10 max-w-4xl">
            Moving<br /><span className="text-[#c9a84c]">Services</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="type-body-large text-[#8a9bb5] max-w-[560px] mb-16">
            Corporate and residential relocations executed with care, precision and zero disruption — locally, nationally and internationally.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="flex flex-col sm:flex-row gap-12 border-t border-[rgba(201,168,76,0.2)] pt-10">
            {[{ v: "3,000+", l: "Moves Completed" }, { v: "0", l: "Damage Claims" }, { v: "100%", l: "On-Time Rate" }, { v: "7", l: "Service Types" }].map(s => (
              <div key={s.l}><p className="type-stat text-white">{s.v}</p><p className="type-micro text-[#8a9bb5] mt-2">{s.l}</p></div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="py-32 bg-[#0a1628] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-20">
            <p className="type-micro text-[#c9a84c] mb-4">What We Move</p>
            <h2 className="type-h2 text-white max-w-2xl">Every Relocation Type. Every Scale.</h2>
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

      {/* ── Guarantees ── */}
      <section className="py-32 bg-[#112240] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-16">
            <p className="type-micro text-[#c9a84c] mb-4">Our Commitments</p>
            <h2 className="type-h2 text-white">Three Guarantees. No Exceptions.</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[rgba(201,168,76,0.1)]">
            {GUARANTEES.map((g, i) => (
              <motion.div key={g.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="bg-[#112240] p-12">
                <g.icon className="text-[#c9a84c] w-8 h-8 mb-8" />
                <h3 className="type-h3 text-white mb-5">{g.title}</h3>
                <p className="type-body text-[#8a9bb5] leading-relaxed">{g.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-32 bg-[#0a1628] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-20">
            <p className="type-micro text-[#c9a84c] mb-4">Move Execution</p>
            <h2 className="type-h2 text-white">Eight Steps to a Perfect Move</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((step, i) => (
              <motion.div key={step.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="border border-[rgba(201,168,76,0.15)] p-8 hover:border-[#c9a84c] transition-colors duration-300">
                <p className="type-micro text-[#c9a84c] mb-4">{step.step}</p>
                <h4 className="type-h4 text-white mb-4">{step.title}</h4>
                <p className="type-body-small text-[#8a9bb5]">{step.desc}</p>
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
          <p className="type-micro text-[#c9a84c] mb-6">Plan Your Relocation</p>
          <h2 className="type-h2 text-white mb-6">Your Move. Our Precision.</h2>
          <p className="type-body-large text-[#8a9bb5] mb-16">Your relocation will be planned and coordinated by <strong className="text-white font-medium">Grace Wambui</strong>, Head of Warehousing &amp; Moving Operations.</p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-6 bg-[#0a1628] border border-[rgba(201,168,76,0.2)] px-8 py-5 mb-12">
            <div className="w-12 h-12 bg-[#c9a84c] flex items-center justify-center shrink-0">
              <span className="type-micro text-[#0a1628] font-bold">GW</span>
            </div>
            <div className="text-left">
              <p className="type-body text-white font-medium">Grace Wambui</p>
              <p className="type-body-small text-[#8a9bb5]">Head of Warehousing &amp; Moving Operations</p>
              <a href="mailto:moving@iomtransit.com" className="type-micro text-[#c9a84c] hover:text-white transition-colors">moving@iomtransit.com</a>
            </div>
          </motion.div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote?service=moving-services&agent=grace-wambui" className="inline-flex items-center gap-3 bg-[#c9a84c] text-[#0a1628] px-10 py-5 type-btn font-bold tracking-widest uppercase hover:bg-white transition-colors">
              Request Moving Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
