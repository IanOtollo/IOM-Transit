"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Zap, Clock, Plane, AlertTriangle, Package, MapPin, ArrowRight } from "lucide-react";

const BLUR_NAVY = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJQAB//Z";

const SERVICES = [
  { icon: Zap, title: "Express Air Freight", desc: "Next-flight-out options for urgent shipments requiring same-day or next-day departure from JKIA or Mombasa Moi Airport. IOM Transit maintains direct relationships with Kenya Airways Cargo, Ethiopian Airlines Cargo and Emirates SkyCargo for priority space allocation." },
  { icon: Clock, title: "Deferred Air Freight", desc: "Cost-optimised air cargo with 2-to-5 day transit times on scheduled services. Suitable for time-sensitive but non-emergency shipments where cost efficiency is a factor alongside delivery speed. Consolidation options available for smaller parcels." },
  { icon: Plane, title: "Air Charter", desc: "Full aircraft charter for oversized, high-value, sensitive or politically time-critical cargo. IOM Transit coordinates charter flights through specialised operators with any aircraft type from light turboprops to wide-body freighters." },
  { icon: AlertTriangle, title: "Dangerous Goods (IATA DGR)", desc: "IATA Dangerous Goods Regulations certified handling and documentation for hazardous materials classified under IATA DGR categories. Full DG declaration, packaging specification, labelling and airline submission managed by our certified DG operators." },
  { icon: Package, title: "Hand Carry & Courier", desc: "Courier-level handling for critical documents, biological samples, high-value components and prototype cargo requiring personal escort or controlled custody chain from origin to destination." },
  { icon: MapPin, title: "Airport to Door", desc: "Comprehensive handling at the destination airport including customs clearance, local import duties, deconsolidation and final-mile delivery to the consignee's premises with digital Proof of Delivery." }
];

const CORRIDORS = [
  { route: "Nairobi JKIA → London Heathrow", transit: "9–11 hrs", freq: "Daily", partners: "Kenya Airways, British Airways" },
  { route: "Nairobi JKIA → Dubai DXB", transit: "5–6 hrs", freq: "3x Daily", partners: "Emirates, flydubai Cargo" },
  { route: "Nairobi JKIA → Shanghai PVG", transit: "13–16 hrs", freq: "4x Weekly", partners: "Ethiopian Airlines, China Eastern" },
  { route: "Mombasa MBA → Amsterdam AMS", transit: "11–13 hrs", freq: "3x Weekly", partners: "Kenya Airways, KLM Cargo" },
  { route: "Nairobi JKIA → Johannesburg JNB", transit: "4–5 hrs", freq: "Daily", partners: "FlySafair, Kenya Airways" },
  { route: "Nairobi JKIA → New York JFK", transit: "16–19 hrs", freq: "5x Weekly", partners: "Ethiopian Airlines, Delta Cargo" },
];

const PROCESS = [
  { step: "01", title: "Booking & Enquiry", desc: "Client submits cargo details, dimensions, weight, hazard classification and required departure window. IOM Transit's air desk identifies the optimal flight and service type." },
  { step: "02", title: "Cargo Screening & Classification", desc: "All cargo undergoes mandatory security screening and is classified under IATA commodity codes. Dangerous goods are assessed against IATA DGR tables and declared accordingly." },
  { step: "03", title: "Airline Allocation & Airway Bill", desc: "Space is confirmed with the selected airline and a Master Airway Bill (MAWB) is issued. House Airway Bills (HAWB) are prepared for consolidated shipments." },
  { step: "04", title: "Cargo Acceptance at Origin Airport", desc: "Cargo is tendered to the airline at the designated cargo acceptance facility with all documentation. IOM Transit manages check-in of cargo, weight verification and stowage instruction submission." },
  { step: "05", title: "Departure Confirmation", desc: "Departure is confirmed and the shipped-on-board airway bill is released. Flight tracking is activated and the client is notified of the confirmed ETD and ETA." },
  { step: "06", title: "Arrival Handling & Customs Clearance", desc: "At destination, our partner agent or in-house desk manages cargo arrival, customs entry lodgement, duty payment and physical cargo release." },
  { step: "07", title: "Door Delivery & POD", desc: "Cargo is transported from the destination airport to the consignee's premises. A digital Proof of Delivery is issued and the shipment file is formally archived." }
];

export default function AirFreight() {
  return (
    <main className="bg-[#0a1628]">

      {/* ── Hero ── */}
      <section className="relative min-h-[92vh] flex flex-col justify-end pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=80"
            alt="Cargo aircraft on airport tarmac at dusk"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL={BLUR_NAVY}
          />
          <div className="absolute inset-0 bg-[#0a1628]/82" />
        </div>

        <div className="absolute bottom-0 right-[-2%] pointer-events-none select-none overflow-hidden z-0">
          <span className="type-watermark text-white">AIR</span>
        </div>

        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="type-micro text-[#c9a84c] mb-8">Services — Air Freight</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.9 }} className="type-h1-hero text-white mb-10 max-w-4xl">
            Air<br /><span className="text-[#c9a84c]">Freight</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="type-body-large text-[#8a9bb5] max-w-[560px] mb-16">
            Time-critical cargo handled with speed, precision and full IATA compliance across major global air corridors — from next-flight-out express to full aircraft charter.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="flex flex-col sm:flex-row gap-12 border-t border-[rgba(201,168,76,0.2)] pt-10">
            {[{ v: "6+", l: "Global Corridors" }, { v: "24hr", l: "Express Options" }, { v: "IATA", l: "DG Certified" }, { v: "NFO", l: "Next Flight Out" }].map(s => (
              <div key={s.l}><p className="type-stat text-white">{s.v}</p><p className="type-micro text-[#8a9bb5] mt-2">{s.l}</p></div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── What We Handle ── */}
      <section className="py-32 bg-[#0a1628] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-20">
            <p className="type-micro text-[#c9a84c] mb-4">Air Freight Services</p>
            <h2 className="type-h2 text-white max-w-2xl">Every Urgency Level. Every Cargo Type.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(201,168,76,0.1)]">
            {SERVICES.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ delay: i * 0.1, duration: 0.7 }} className="bg-[#0a1628] p-10 hover:bg-[#112240] transition-colors duration-300">
                <s.icon className="text-[#c9a84c] w-7 h-7 mb-8" />
                <h3 className="type-h3 text-white mb-4">{s.title}</h3>
                <p className="type-body-small text-[#8a9bb5] leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Air Corridors Table ── */}
      <section className="py-32 bg-[#112240] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-16">
            <p className="type-micro text-[#c9a84c] mb-4">Active Routes</p>
            <h2 className="type-h2 text-white">Key Air Corridors &amp; Transit Times</h2>
          </div>
          <div className="border border-[rgba(201,168,76,0.2)]">
            {/* Header */}
            <div className="grid grid-cols-4 border-b border-[rgba(201,168,76,0.2)] bg-[rgba(201,168,76,0.05)]">
              {["Route", "Transit Time", "Frequency", "Partner Airlines"].map(h => (
                <div key={h} className="px-6 py-4"><p className="type-micro text-[#c9a84c]">{h}</p></div>
              ))}
            </div>
            {CORRIDORS.map((c, i) => (
              <motion.div key={c.route} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className={`grid grid-cols-4 border-b border-[rgba(201,168,76,0.1)] last:border-b-0 hover:bg-[rgba(201,168,76,0.04)] transition-colors`}>
                <div className="px-6 py-5"><p className="type-body-small text-white font-medium">{c.route}</p></div>
                <div className="px-6 py-5"><p className="type-body-small text-[#c9a84c]">{c.transit}</p></div>
                <div className="px-6 py-5"><p className="type-body-small text-[#8a9bb5]">{c.freq}</p></div>
                <div className="px-6 py-5"><p className="type-body-small text-[#8a9bb5]">{c.partners}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-32 bg-[#0a1628] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-20">
            <p className="type-micro text-[#c9a84c] mb-4">Operational Process</p>
            <h2 className="type-h2 text-white">From Booking to Delivery</h2>
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

      {/* ── Agent CTA ── */}
      <section className="py-32 bg-[#112240] border-t border-[rgba(201,168,76,0.2)] relative overflow-hidden">
        <div className="absolute -bottom-10 -right-10 pointer-events-none select-none overflow-hidden">
          <span className="type-watermark text-white">IOM</span>
        </div>
        <div className="container mx-auto px-6 max-w-[900px] relative z-10 text-center">
          <p className="type-micro text-[#c9a84c] mb-6">Begin Your Air Freight Enquiry</p>
          <h2 className="type-h2 text-white mb-6">When Time Is The Constraint.</h2>
          <p className="type-body-large text-[#8a9bb5] mb-16">
            Your enquiry will be handled by <strong className="text-white font-medium">Nadia Rahman</strong>, Global Business Development, who manages our key air freight corridors and premium cargo relationships.
          </p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-6 bg-[#0a1628] border border-[rgba(201,168,76,0.2)] px-8 py-5 mb-12">
            <div className="w-12 h-12 bg-[#c9a84c] flex items-center justify-center shrink-0">
              <span className="type-micro text-[#0a1628] font-bold">NR</span>
            </div>
            <div className="text-left">
              <p className="type-body text-white font-medium">Nadia Rahman</p>
              <p className="type-body-small text-[#8a9bb5]">Global Business Development</p>
              <a href="mailto:air@iomtransit.com" className="type-micro text-[#c9a84c] hover:text-white transition-colors">air@iomtransit.com</a>
            </div>
          </motion.div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote?service=air-freight&agent=nadia-rahman" className="inline-flex items-center gap-3 bg-[#c9a84c] text-[#0a1628] px-10 py-5 type-btn font-bold tracking-widest uppercase hover:bg-white transition-colors">
              Request Air Freight Quote <ArrowRight size={16} />
            </Link>
            <Link href="/services/bulk-road-logistics" className="inline-flex items-center gap-3 border border-[rgba(201,168,76,0.4)] text-white px-10 py-5 type-btn tracking-widest uppercase hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors">
              Road Logistics
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
