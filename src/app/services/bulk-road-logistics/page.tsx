"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Truck, AlertTriangle, Thermometer, MapPin, ArrowRight, Route } from "lucide-react";

const BLUR_NAVY = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJQAB//Z";

const CAPABILITIES = [
  { icon: Truck, title: "Full Truckload (FTL)", desc: "Dedicated vehicle per consignment, providing maximum security, speed and accountability from load point to delivery. FTL eliminates co-loading risk and allows direct routing without intermediate stops." },
  { icon: AlertTriangle, title: "Abnormal Load Haulage", desc: "Oversized, overweight and out-of-gauge cargo transported with full route survey, escort vehicles, national transport authority permits and police coordination. Our low-loaders handle up to 200 tonne payloads." },
  { icon: Thermometer, title: "Refrigerated Transport", desc: "Temperature-controlled trailers with active monitoring systems for pharmaceutical products, food and beverage, cut flowers and other perishables. All reefer units are pre-cooled and calibrated before loading." },
  { icon: Truck, title: "Livestock Haulage", desc: "Certified livestock carriers with animal welfare compliance, veterinary documentation, KEPHIS export health certificates and transit country import permits. IOM Transit operates across all major livestock corridors in East Africa." },
  { icon: Route, title: "Flatbed & Low-Loader", desc: "Industrial machinery, fabricated steel, precast concrete, construction materials and wind turbine components transported on flatbed and extendable low-loader configurations with full rigging and lashing by certified operators." },
  { icon: MapPin, title: "Cross-Border Road Freight", desc: "Active corridors to Uganda, Tanzania, Rwanda, DRC, South Sudan, Ethiopia and Burundi. IOM Transit manages corridor permits, transit bonds, border crossing documentation, driver fatigue compliance and cross-border weighbridge procedures." }
];

const FLEET_SPECS = [
  { brand: "Scania", models: "R-Series / S-Series V8", payload: "40–45 Tonnes", config: "6x4 / 8x4 Prime Mover", range: "Pan-Africa Long Haul", units: "120+ Units Available" },
  { brand: "Volvo", models: "FH-Series / FM-Series", payload: "38–44 Tonnes", config: "6x4 / 6x2 Prime Mover", range: "International Corridors", units: "130+ Units Available" },
  { brand: "Mercedes", models: "Actros / Arocs OM471", payload: "32–42 Tonnes", config: "6x4 Urban / National", range: "National Distribution", units: "90+ Units Available" }
];

const PROCESS = [
  { step: "01", title: "Load Assessment & Vehicle Allocation", desc: "Cargo dimensions, weight and classification are assessed. The appropriate vehicle type and configuration is nominated from IOM Transit's managed fleet." },
  { step: "02", title: "Route Survey & Permit Acquisition", desc: "Route is surveyed for road condition, bridge load limits, weighbridge locations and restricted area compliance. All necessary transit permits and authority approvals are obtained before dispatch." },
  { step: "03", title: "Vehicle Pre-Departure Inspection", desc: "Every vehicle undergoes a certified pre-departure mechanical inspection. Tyre pressure, brake systems, GPS unit calibration and auxiliary lighting are verified before loading commences." },
  { step: "04", title: "Loading & Seal", desc: "Cargo is loaded under IOM Transit supervision, with weight distribution certified against the vehicle's gross combination mass. Container seals or load locks are applied and documented." },
  { step: "05", title: "GPS-Tracked Transit", desc: "Vehicles are monitored in real time through our telematics platform. Speed, route deviation, driver rest compliance and cargo temperature (where applicable) are tracked continuously." },
  { step: "06", title: "Border Crossing Coordination", desc: "Our cross-border desk manages transit documentation, border post queuing coordination, transit bond presentation and destination country customs entry pre-notification." },
  { step: "07", title: "Delivery & Sign-Off", desc: "Cargo is offloaded at the consignee's premises. A Proof of Delivery is signed by the authorised receiver, GPS-timestamped and uploaded to the client's shipment portal within the hour." }
];

const CORRIDORS = [
  { from: "Nairobi", to: "Kampala, Uganda", dist: "530 km", time: "12–16 hrs" },
  { from: "Nairobi", to: "Dar es Salaam, Tanzania", dist: "850 km", time: "18–22 hrs" },
  { from: "Nairobi", to: "Kigali, Rwanda", dist: "1,240 km", time: "26–30 hrs" },
  { from: "Nairobi", to: "Juba, South Sudan", dist: "1,640 km", time: "36–42 hrs" },
  { from: "Nairobi", to: "Addis Ababa, Ethiopia", dist: "1,280 km", time: "28–34 hrs" },
  { from: "Nairobi", to: "Bujumbura, Burundi", dist: "1,430 km", time: "30–36 hrs" }
];

export default function BulkRoadLogistics() {
  return (
    <main className="bg-[#0a1628]">

      {/* ── Hero ── */}
      <section className="relative min-h-[92vh] flex flex-col justify-end pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1920&q=80"
            alt="Scania truck driving on open highway"
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
          <span className="type-watermark text-white">ROAD</span>
        </div>
        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="type-micro text-[#c9a84c] mb-8">Services — Bulk Road Logistics</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.9 }} className="type-h1-hero text-white mb-10 max-w-4xl">
            Bulk Road<br /><span className="text-[#c9a84c]">Logistics</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="type-body-large text-[#8a9bb5] max-w-[560px] mb-16">
            Pan-Africa heavy haulage powered by 340+ Scania, Volvo and Mercedes vehicles — built for distance, load and terrain across every major corridor.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="flex flex-col sm:flex-row gap-12 border-t border-[rgba(201,168,76,0.2)] pt-10">
            {[{ v: "340+", l: "Managed Vehicles" }, { v: "6", l: "Cross-Border Corridors" }, { v: "45T", l: "Max Payload" }, { v: "24/7", l: "GPS Monitoring" }].map(s => (
              <div key={s.l}><p className="type-stat text-white">{s.v}</p><p className="type-micro text-[#8a9bb5] mt-2">{s.l}</p></div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="py-32 bg-[#0a1628] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-20">
            <p className="type-micro text-[#c9a84c] mb-4">Fleet Capabilities</p>
            <h2 className="type-h2 text-white max-w-2xl">What Our Fleet Can Move</h2>
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

      {/* ── Fleet Specs Panel ── */}
      <section className="py-32 bg-[#112240] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-16">
            <p className="type-micro text-[#c9a84c] mb-4">Fleet Composition</p>
            <h2 className="type-h2 text-white">Three Elite Brands. One Fleet Standard.</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[rgba(201,168,76,0.1)]">
            {FLEET_SPECS.map((f, i) => (
              <motion.div key={f.brand} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="bg-[#112240] p-10">
                <h3 className="font-heading text-5xl text-[#c9a84c] mb-2">{f.brand}</h3>
                <p className="type-micro text-[#8a9bb5] mb-10">{f.models}</p>
                <div className="space-y-5">
                  {[["Payload Capacity", f.payload], ["Configuration", f.config], ["Primary Range", f.range], ["Fleet Size", f.units]].map(([k, v]) => (
                    <div key={k} className="flex justify-between border-b border-[rgba(201,168,76,0.1)] pb-3">
                      <span className="type-body-small text-[#8a9bb5]">{k}</span>
                      <span className="type-body-small text-white font-medium">{v}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cross-Border Corridors ── */}
      <section className="py-32 bg-[#0a1628] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-16">
            <p className="type-micro text-[#c9a84c] mb-4">Active Corridors</p>
            <h2 className="type-h2 text-white">Cross-Border Routes We Operate Daily</h2>
          </div>
          <div className="border border-[rgba(201,168,76,0.2)]">
            <div className="grid grid-cols-4 border-b border-[rgba(201,168,76,0.2)] bg-[rgba(201,168,76,0.05)]">
              {["Origin", "Destination", "Distance", "Transit Time"].map(h => <div key={h} className="px-6 py-4"><p className="type-micro text-[#c9a84c]">{h}</p></div>)}
            </div>
            {CORRIDORS.map((c, i) => (
              <motion.div key={c.to} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="grid grid-cols-4 border-b border-[rgba(201,168,76,0.1)] last:border-b-0 hover:bg-[rgba(201,168,76,0.04)] transition-colors">
                <div className="px-6 py-5"><p className="type-body-small text-white">{c.from}</p></div>
                <div className="px-6 py-5"><p className="type-body-small text-white font-medium">{c.to}</p></div>
                <div className="px-6 py-5"><p className="type-body-small text-[#8a9bb5]">{c.dist}</p></div>
                <div className="px-6 py-5"><p className="type-body-small text-[#c9a84c]">{c.time}</p></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="py-32 bg-[#112240] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-20">
            <p className="type-micro text-[#c9a84c] mb-4">Operational Process</p>
            <h2 className="type-h2 text-white">Load to Delivery. Every Step Managed.</h2>
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
      <section className="py-32 bg-[#0a1628] border-t border-[rgba(201,168,76,0.2)] relative overflow-hidden">
        <div className="absolute -bottom-10 -right-10 pointer-events-none select-none overflow-hidden">
          <span className="type-watermark text-white">IOM</span>
        </div>
        <div className="container mx-auto px-6 max-w-[900px] relative z-10 text-center">
          <p className="type-micro text-[#c9a84c] mb-6">Move Your Cargo by Road</p>
          <h2 className="type-h2 text-white mb-6">The Continent Is Our Road Network.</h2>
          <p className="type-body-large text-[#8a9bb5] mb-16">
            Your enquiry will be handled directly by <strong className="text-white font-medium">James Njoroge</strong>, Head of Fleet Management, who oversees all bulk road logistics operations across East and Central Africa.
          </p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-6 bg-[#112240] border border-[rgba(201,168,76,0.2)] px-8 py-5 mb-12">
            <div className="w-12 h-12 bg-[#c9a84c] flex items-center justify-center shrink-0">
              <span className="type-micro text-[#0a1628] font-bold">JN</span>
            </div>
            <div className="text-left">
              <p className="type-body text-white font-medium">James Njoroge</p>
              <p className="type-body-small text-[#8a9bb5]">Head of Fleet Management</p>
              <a href="mailto:fleet@iomtransit.com" className="type-micro text-[#c9a84c] hover:text-white transition-colors">fleet@iomtransit.com</a>
            </div>
          </motion.div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote?service=bulk-road-logistics&agent=james-njoroge" className="inline-flex items-center gap-3 bg-[#c9a84c] text-[#0a1628] px-10 py-5 type-btn font-bold tracking-widest uppercase hover:bg-white transition-colors">
              Request Road Logistics Quote <ArrowRight size={16} />
            </Link>
            <Link href="/services/customs-imports" className="inline-flex items-center gap-3 border border-[rgba(201,168,76,0.4)] text-white px-10 py-5 type-btn tracking-widest uppercase hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors">
              Customs &amp; Imports
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
