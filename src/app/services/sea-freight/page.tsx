"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Ship, Package, Anchor, Thermometer, Truck, ArrowRight } from "lucide-react";

const BLUR_NAVY = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJQAB//Z";

const SERVICES = [
  {
    icon: Ship,
    title: "Full Container Load (FCL)",
    desc: "Dedicated full container bookings from Mombasa to major global ports. IOM Transit manages space allocation, container type selection (20ft, 40ft, 40ft HC, open top, flat rack), booking confirmation with the shipping line and full export documentation through KRA iCMS."
  },
  {
    icon: Package,
    title: "Less Than Container Load (LCL)",
    desc: "For smaller cargo volumes, our LCL consolidation service compiles shipments into shared containers under IOM Transit's master bill. Cargo is professionally stuffed at our CFS, sealed, and tracked as a distinct consignment with its own house bill of lading."
  },
  {
    icon: Anchor,
    title: "Bulk Vessel Charter",
    desc: "For high-volume commodity shipments or oversized project cargo requiring full vessel occupation, IOM Transit coordinates bulk charter arrangements through our principal shipping broker network, managing all laytime, demurrage and port agency requirements."
  },
  {
    icon: Ship,
    title: "Mombasa Port Agency",
    desc: "As an authorised port agent at Mombasa, we coordinate vessel calls, berth applications through Kenya Ports Authority, cargo manifesting, stevedoring coordination, and port health clearance — ensuring minimum turnaround from vessel arrival to cargo release."
  },
  {
    icon: Thermometer,
    title: "Reefer Cargo",
    desc: "Temperature-controlled reefer containers for perishables, pharmaceuticals, cut flowers and other cold-chain sensitive cargo. IOM Transit monitors temperature logs throughout transit and provides pre-trip inspection certification before container stuffing."
  },
  {
    icon: Truck,
    title: "Roll-On Roll-Off (Ro-Ro)",
    desc: "Vehicle and machinery shipments requiring Ro-Ro handling are booked on dedicated Ro-Ro vessels calling Mombasa. IOM Transit manages vehicle receipt, blocking and lashing, stowage instructions and documentation including vehicle export certification."
  }
];

const PROCESS_STEPS = [
  { num: "01", title: "Booking & Space Confirmation", desc: "Client submits shipment details — cargo type, volume, origin, destination and required delivery date. IOM Transit's sea freight desk evaluates available sailings and confirms space allocation with the selected shipping line." },
  { num: "02", title: "Container Allocation & Stuffing", desc: "The appropriate container type is nominated and positioned at our approved CFS or client premises. IOM Transit oversees professional cargo stuffing, weight distribution, dunnage and container sealing before gate-in." },
  { num: "03", title: "Port Intake & Gate-In", desc: "Container is transported to Mombasa Port under IOM Transit coordination. Our port operations team manages gate-in procedures, shipping instruction submission and cargo manifest pre-declaration to KRA." },
  { num: "04", title: "Vessel Loading & Departure", desc: "Cargo is loaded aboard the nominated vessel. IOM Transit confirms vessel departure, obtains the shipped-on-board bill of lading and releases all original documents to the client for destination clearance." },
  { num: "05", title: "Ocean Transit Tracking", desc: "Throughout the sea journey, our operations team monitors vessel AIS position, transhipment port progress and carrier advisories. Estimated time of arrival updates are communicated at each milestone." },
  { num: "06", title: "Port Arrival & Discharge", desc: "At destination, IOM Transit's partner agent manages vessel arrival notification, cargo discharge and delivery order release. Pre-arrival processing is lodged with destination customs where applicable to reduce dwell time." },
  { num: "07", title: "Inland Delivery", desc: "Cargo is cleared through destination customs and transported to the final delivery address. A Proof of Delivery is issued, documentation is archived, and the file is formally closed." }
];

const MOMBASA_FACTS = [
  { value: "21", label: "Berths Operational" },
  { value: "1.4M+", label: "TEU Annual Capacity" },
  { value: "48hr", label: "Pre-Arrival Processing Window" },
  { value: "100%", label: "KPA Liaison Coverage" }
];

export default function SeaFreight() {
  return (
    <main className="bg-[#0a1628]">

      {/* ── Hero ── */}
      <section className="relative min-h-[92vh] flex flex-col justify-end pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1920&q=80"
            alt="Cargo container ship at sea"
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
          <span className="type-watermark text-white">SEA</span>
        </div>

        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="type-micro text-[#c9a84c] mb-8">
            Services — Sea Freight
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.9 }} className="type-h1-hero text-white mb-10 max-w-4xl">
            Sea<br /><span className="text-[#c9a84c]">Freight</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="type-body-large text-[#8a9bb5] max-w-[560px] mb-16">
            Full container loads, LCL consolidation and bulk vessel charters through Mombasa — East Africa's premier port gateway to global trade lanes.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="flex flex-col sm:flex-row gap-12 border-t border-[rgba(201,168,76,0.2)] pt-10">
            {[{ v: "FCL + LCL", l: "Container Solutions" }, { v: "21", l: "Mombasa Berths" }, { v: "50+", l: "Destination Ports" }, { v: "24/7", l: "Port Operations" }].map(s => (
              <div key={s.l}><p className="type-stat text-white">{s.v}</p><p className="type-micro text-[#8a9bb5] mt-2">{s.l}</p></div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── What We Handle ── */}
      <section className="py-32 bg-[#0a1628] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-20">
            <p className="type-micro text-[#c9a84c] mb-4">Sea Freight Capabilities</p>
            <h2 className="type-h2 text-white max-w-2xl">Complete Ocean Freight Coverage From Mombasa</h2>
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

      {/* ── 7-Step Process (Horizontal Sticky) ── */}
      <section className="py-32 bg-[#112240] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-20">
            <p className="type-micro text-[#c9a84c] mb-4">Operational Process</p>
            <h2 className="type-h2 text-white">Port-to-Port. Step by Step.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div key={step.num} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="border border-[rgba(201,168,76,0.15)] p-8 relative group hover:border-[#c9a84c] transition-colors duration-300">
                <span className="type-watermark text-[#c9a84c] text-[80px] absolute top-4 right-4 opacity-[0.06]">{step.num}</span>
                <p className="type-micro text-[#c9a84c] mb-4">{step.num}</p>
                <h4 className="type-h4 text-white mb-4">{step.title}</h4>
                <p className="type-body-small text-[#8a9bb5]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mombasa Port Expertise ── */}
      <section className="py-32 bg-[#0a1628] border-t border-[rgba(201,168,76,0.2)] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&w=1920&q=80"
            alt="Aerial view of Mombasa port"
            fill
            className="object-cover object-center opacity-10"
            sizes="100vw"
            placeholder="blur"
            blurDataURL={BLUR_NAVY}
          />
        </div>
        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="type-micro text-[#c9a84c] mb-6">Mombasa Port Authority</p>
              <h2 className="type-h2 text-white mb-8">Deep-Rooted Port Operations Experience</h2>
              <p className="type-body text-[#8a9bb5] mb-6 leading-relaxed">
                IOM Transit's dedicated Mombasa operations team has processed cargo across all operational berths at the Port of Mombasa, from the container terminal at Berths 1 through 17 to the bulk cargo berths at Berths 18 through 21. Our institutional knowledge of port dynamics, shifting congestion patterns and KPA procedural requirements translates directly into faster cargo release for our clients.
              </p>
              <p className="type-body text-[#8a9bb5] mb-6 leading-relaxed">
                We maintain active liaison with Kenya Ports Authority on daily vessel scheduling and berth allocation. SGS pre-shipment inspection coordination, KEBS standards verification and pre-arrival processing under KRA iCMS — with advance cargo declaration minimising port dwell time to industry-leading averages.
              </p>
              <p className="type-body text-[#8a9bb5] leading-relaxed">
                For transit cargo bound for Uganda, Rwanda, DRC and South Sudan, IOM Transit manages bonded transit movement under customs bond from Mombasa Port through to ICD Embakasi in Nairobi, coordinating with KRA bonded transit desk and the destination country customs authority.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-[rgba(201,168,76,0.1)]">
              {MOMBASA_FACTS.map((f, i) => (
                <motion.div key={f.label} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-[#0a1628] p-10 text-center">
                  <p className="type-stat text-[#c9a84c] mb-3">{f.value}</p>
                  <p className="type-micro text-[#8a9bb5]">{f.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Agent CTA ── */}
      <section className="py-32 bg-[#112240] border-t border-[rgba(201,168,76,0.2)] relative overflow-hidden">
        <div className="absolute -bottom-10 -right-10 pointer-events-none select-none overflow-hidden">
          <span className="type-watermark text-white">IOM</span>
        </div>
        <div className="container mx-auto px-6 max-w-[900px] relative z-10 text-center">
          <p className="type-micro text-[#c9a84c] mb-6">Begin Your Shipment Enquiry</p>
          <h2 className="type-h2 text-white mb-6">Your Shipment, Our Port.</h2>
          <p className="type-body-large text-[#8a9bb5] mb-16">
            Your shipment will be handled by our Mombasa Port Operations desk, led by <strong className="text-white font-medium">Samuel Otieno</strong>, Regional Manager Mombasa &amp; Port Operations.
          </p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-6 bg-[#0a1628] border border-[rgba(201,168,76,0.2)] px-8 py-5 mb-12">
            <div className="w-12 h-12 bg-[#c9a84c] flex items-center justify-center shrink-0">
              <span className="type-micro text-[#0a1628] font-bold">SO</span>
            </div>
            <div className="text-left">
              <p className="type-body text-white font-medium">Samuel Otieno</p>
              <p className="type-body-small text-[#8a9bb5]">Regional Manager, Mombasa &amp; Port Operations</p>
              <a href="mailto:ports@iomtransit.com" className="type-micro text-[#c9a84c] hover:text-white transition-colors">ports@iomtransit.com</a>
            </div>
          </motion.div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote?service=sea-freight&agent=samuel-otieno" className="inline-flex items-center gap-3 bg-[#c9a84c] text-[#0a1628] px-10 py-5 type-btn font-bold tracking-widest uppercase hover:bg-white transition-colors">
              Request Sea Freight Quote <ArrowRight size={16} />
            </Link>
            <Link href="/services/air-freight" className="inline-flex items-center gap-3 border border-[rgba(201,168,76,0.4)] text-white px-10 py-5 type-btn tracking-widest uppercase hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors">
              Air Freight
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
