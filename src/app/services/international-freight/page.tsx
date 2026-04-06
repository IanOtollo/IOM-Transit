"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Globe, Ship, Plane, FileText, ShieldCheck, BarChart3, CheckCircle, ArrowRight, Award } from "lucide-react";

const FEATURES = [
  {
    icon: Globe,
    title: "Full Container Load (FCL)",
    desc: "IOM Transit secures dedicated container bookings on major shipping lines including MSC, Maersk and Hapag-Lloyd. We manage the full process from booking confirmation through to vessel loading and bill of lading issuance, ensuring your cargo moves on time without co-loading risks."
  },
  {
    icon: Ship,
    title: "Less Than Container Load (LCL)",
    desc: "For shipments that do not fill a full container, our LCL consolidation service groups cargo with other consignments under our master bill of lading. Your goods are professionally stuffed, sealed and tracked as a distinct unit within the shared container."
  },
  {
    icon: Plane,
    title: "Multimodal Transport",
    desc: "Complex international corridors requiring mode switching — sea-to-air, road-to-sea, or tri-modal — are handled by our routing desk. We design the optimal combination of modes based on your cost ceiling, cargo nature and delivery urgency."
  },
  {
    icon: FileText,
    title: "Freight Documentation",
    desc: "Our dedicated documentation desk prepares and verifies every commercial document required for border crossing: commercial invoice, packing list, certificate of origin, bill of lading, airway bill, import declaration forms and insurance certificates."
  },
  {
    icon: ShieldCheck,
    title: "Import & Export Compliance",
    desc: "IOM Transit operates as a KRA-licensed clearing agent with deep expertise in Kenya's import and export regulatory framework. We ensure full compliance with KRA iCMS, KEBS standards, KEPHIS import protocols and anti-counterfeiting requirements."
  },
  {
    icon: BarChart3,
    title: "Incoterms Advisory",
    desc: "Our freight specialists advise clients on the appropriate Incoterms 2020 rule for each shipment — whether EXW, FOB, CIF, DAP or DDP — ensuring clarity on cost allocation, risk transfer and insurance obligation between shipper and consignee."
  }
];

const PROCESS = [
  {
    step: "01",
    title: "Cargo Enquiry & Assessment",
    desc: "The client submits cargo details via our operational form or directly to the freight desk. IOM Transit's team evaluates weight, dimensions, hazard classification, HS code and destination requirements before providing a routing recommendation."
  },
  {
    step: "02",
    title: "Routing & Mode Selection",
    desc: "Our freight team designs the optimal route selecting sea, air or multimodal based on cost envelope, delivery urgency and cargo classification. Transit times and carrier options are presented for client approval before any booking is confirmed."
  },
  {
    step: "03",
    title: "Documentation Preparation",
    desc: "Commercial invoice, packing list, certificate of origin, bill of lading or airway bill, and all destination-specific import documents are prepared by our documentation desk, verified against the cargo manifest and submitted to the relevant authorities."
  },
  {
    step: "04",
    title: "Cargo Dispatch & Tracking",
    desc: "Cargo is formally handed to the carrier with tracking activated. IOM Transit's transit desk monitors every milestone — vessel departure, port of transhipment progress, estimated time of arrival updates — and communicates proactively with the client."
  },
  {
    step: "05",
    title: "Delivery & Sign-Off",
    desc: "At destination, our receiving agent or partner broker coordinates customs clearance and inland delivery. A Proof of Delivery is issued, the client is notified and the shipment file is closed with a complete documentation archive."
  }
];

const CERTS = [
  { label: "IATA Member", sub: "Air cargo documentation authority" },
  { label: "KRA Licensed Clearing Agent", sub: "Kenya Revenue Authority certified" },
  { label: "FIATA Affiliate", sub: "International freight forwarder network" },
  { label: "ISO 9001", sub: "Quality management systems certified" }
];

export default function InternationalFreight() {
  return (
    <main className="bg-[#0a1628]">

      {/* ── Hero ── */}
      <section className="relative min-h-[92vh] flex flex-col justify-end pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1920&q=80"
            alt="Cargo containers at international shipping port"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJQAB//Z"
          />
          <div className="absolute inset-0 bg-[#0a1628]/85" />
        </div>

        {/* Watermark */}
        <div className="absolute bottom-0 right-[-2%] pointer-events-none select-none overflow-hidden z-0">
          <span className="type-watermark text-white">FREIGHT</span>
        </div>

        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="type-micro text-[#c9a84c] mb-8"
          >
            Services — International Freight
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="type-h1-hero text-white mb-10 max-w-5xl"
          >
            International<br />
            <span className="text-[#c9a84c]">Freight</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="type-body-large text-[#8a9bb5] max-w-[580px] mb-16"
          >
            Moving goods across borders with documentation precision, compliance authority and multimodal expertise built on over two decades of international trade operations.
          </motion.p>

          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-12 border-t border-[rgba(201,168,76,0.2)] pt-10"
          >
            {[
              { value: "50+", label: "Countries Served" },
              { value: "2.4M", label: "Tonnes Annually" },
              { value: "40,000+", label: "International Shipments" },
              { value: "100%", label: "Compliance Rate" }
            ].map(stat => (
              <div key={stat.label}>
                <p className="type-stat text-white">{stat.value}</p>
                <p className="type-micro text-[#8a9bb5] mt-2">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── What We Handle ── */}
      <section className="py-32 bg-[#0a1628] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-20">
            <p className="type-micro text-[#c9a84c] mb-4">What We Handle</p>
            <h2 className="type-h2 text-white max-w-3xl">
              Full-Spectrum International Freight Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(201,168,76,0.1)]">
            {FEATURES.map((feat, idx) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: idx * 0.1, duration: 0.7 }}
                className="bg-[#0a1628] p-10 group hover:bg-[#112240] transition-colors duration-300"
              >
                <feat.icon className="text-[#c9a84c] w-7 h-7 mb-8" />
                <h3 className="type-h3 text-white mb-4">{feat.title}</h3>
                <p className="type-body-small text-[#8a9bb5] leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Process ── */}
      <section className="py-32 bg-[#112240] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-20">
            <p className="type-micro text-[#c9a84c] mb-4">How It Works</p>
            <h2 className="type-h2 text-white">Our Operational Process</h2>
          </div>

          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-[22px] top-0 bottom-0 w-px bg-[rgba(201,168,76,0.2)] hidden md:block" />

            <div className="flex flex-col gap-0">
              {PROCESS.map((step, idx) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: idx * 0.12, duration: 0.7 }}
                  className="flex gap-10 md:gap-16 pb-16 relative group"
                >
                  {/* Step Dot */}
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-[46px] h-[46px] bg-[#c9a84c] flex items-center justify-center shrink-0 z-10">
                      <span className="type-micro text-[#0a1628]">{step.step}</span>
                    </div>
                  </div>

                  {/* Mobile Step Number */}
                  <div className="md:hidden shrink-0">
                    <span className="type-stat text-[#c9a84c] opacity-40">{step.step}</span>
                  </div>

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

      {/* ── Why IOM Transit ── */}
      <section className="py-32 bg-[#0a1628] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <p className="type-micro text-[#c9a84c] mb-6">Why IOM Transit</p>
              <h2 className="type-h2 text-white mb-16">
                The Operational Authority Behind Every Shipment
              </h2>
            </div>

            <div className="space-y-10">
              {[
                "IOM Transit is licensed in Kenya and operates through a bonded agent network in Dubai, Rotterdam, London, Shanghai and Johannesburg. Our international footprint enables us to manage freight end-to-end without reliance on unknown third-party handlers at either origin or destination, maintaining documentary control throughout every corridor.",
                "Our dedicated documentation desk has processed over 40,000 international shipments with zero compliance failures on record. Every shipment file is cross-referenced against KRA iCMS entries, cargo manifests and destination authority requirements before a single container is moved, eliminating costly clearance delays at destination ports.",
                "A 24/7 operations centre monitors all live international shipments in real time. Vessel position data, port congestion updates, carrier advisories and customs status alerts are tracked continuously by our transit desk, with proactive client communication at every milestone — not just on arrival."
              ].map((para, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.7 }}
                  className="type-body text-[#8a9bb5] border-l-2 border-[#c9a84c] pl-6"
                >
                  {para}
                </motion.p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="py-24 bg-[#112240] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <p className="type-micro text-[#c9a84c] mb-12">Accreditations & Credentials</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(201,168,76,0.1)]">
            {CERTS.map((cert, idx) => (
              <motion.div
                key={cert.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#112240] p-8 flex flex-col gap-3"
              >
                <Award className="text-[#c9a84c] w-6 h-6" />
                <h4 className="type-h4 text-white">{cert.label}</h4>
                <p className="type-body-small text-[#8a9bb5]">{cert.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Agent CTA ── */}
      <section className="py-32 bg-[#0a1628] border-t border-[rgba(201,168,76,0.2)] relative overflow-hidden">
        <div className="absolute bottom-0 right-0 pointer-events-none select-none overflow-hidden">
          <span className="type-watermark text-white">IOM</span>
        </div>

        <div className="container mx-auto px-6 max-w-[900px] relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="type-micro text-[#c9a84c] mb-6"
          >
            Begin Your Freight Enquiry
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="type-h2 text-white mb-6"
          >
            Ready to Move Your Cargo?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="type-body-large text-[#8a9bb5] mb-16"
          >
            Your enquiry will be handled directly by <strong className="text-white font-medium">Fatuma Mwangi</strong>, Director of Freight &amp; Shipping.
          </motion.p>

          {/* Agent Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-6 bg-[#112240] border border-[rgba(201,168,76,0.2)] px-8 py-5 mb-12"
          >
            <div className="w-12 h-12 bg-[#c9a84c] flex items-center justify-center shrink-0">
              <span className="type-micro text-[#0a1628] font-bold">FM</span>
            </div>
            <div className="text-left">
              <p className="type-body text-white font-medium">Fatuma Mwangi</p>
              <p className="type-body-small text-[#8a9bb5]">Director of Freight &amp; Shipping</p>
              <a href="mailto:freight@iomtransit.com" className="type-micro text-[#c9a84c] hover:text-white transition-colors">freight@iomtransit.com</a>
            </div>
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote?service=international-freight&agent=fatuma-mwangi"
              className="inline-flex items-center gap-3 bg-[#c9a84c] text-[#0a1628] px-10 py-5 type-btn font-bold tracking-widest uppercase hover:bg-white transition-colors"
            >
              Request Freight Quotation <ArrowRight size={16} />
            </Link>
            <Link
              href="/services/sea-freight"
              className="inline-flex items-center gap-3 border border-[rgba(201,168,76,0.4)] text-white px-10 py-5 type-btn tracking-widest uppercase hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors"
            >
              Sea Freight
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
