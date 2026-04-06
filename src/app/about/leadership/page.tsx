"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const LEADERSHIP = [
  {
    initials: "IO",
    name: "Ian Otollo Marabi",
    title: "Chief Executive Officer & Founder",
    bio: "Ian founded IOM Transit in 2002 with a single commercial vehicle and a vision that East Africa's logistics infrastructure could match global standards. Over two decades, he has grown the company from a local haulier to a continental freight authority operating across 50+ countries. His strategic philosophy combines African operational pragmatism with global trade framework discipline.",
    education: "BSc Transportation Management, University of Nairobi | Executive MBA, Strathmore Business School",
    highlights: ["Founded IOM Transit from a single vehicle in 2002", "Led the company through three consecutive decade-of-growth periods", "Sits on the Kenya National Chamber of Commerce Logistics Advisory Board", "FIATA board observer since 2018"],
    years: "22 years"
  },
  {
    initials: "AK",
    name: "Amina Kariuki",
    title: "Chief Operations Officer",
    bio: "Amina oversees all operational divisions at IOM Transit — from the 340-unit road fleet to the customs brokerage desk and last-mile delivery network. She joined IOM Transit in 2010 as Operations Manager, Nairobi, and has driven the operational system architecture that now supports 800+ employees across five regional hubs.",
    education: "BSc Logistics & Supply Chain Management, JKUAT | PMP Certified Project Manager",
    highlights: ["Designed the IOM Transit national hub-and-spoke distribution model", "Led the ISO 9001 certification project", "Developed the corporate enterprise SLA framework adopted in 2018"],
    years: "16 years"
  },
  {
    initials: "FM",
    name: "Fatuma Mwangi",
    title: "Director of Freight & Shipping",
    bio: "Fatuma leads the international freight division, managing FCL, LCL, multimodal and documentation operations across all 50+ countries. She joined IOM Transit in 2012 with a decade of experience at a leading Nairobi freight forwarder, and has overseen over 40,000 international shipments with a zero compliance failure record.",
    education: "BA International Trade, University of Nairobi | FIATA Diploma in Freight Forwarding",
    highlights: ["40,000+ international shipments with zero compliance failures", "Established the Rotterdam and Dubai agency relationships", "Led the FIATA affiliate application process"],
    years: "14 years"
  },
  {
    initials: "SO",
    name: "Samuel Otieno",
    title: "Regional Manager, Mombasa & Port Operations",
    bio: "Samuel manages all Mombasa port operations including the sea freight desk, port agency function, CFS operations and bonded warehouse. He has processed cargo across all operational berths at the Port of Mombasa and maintains direct relationships with Kenya Ports Authority, SGS and KRA Customs at the port level.",
    education: "BSc Maritime Studies, Technical University of Mombasa | Kenya Ports Authority Operations Certificate",
    highlights: ["20+ years port operations experience", "Managed Mombasa operations through the Mombasa Port expansion projects", "KPA recognised partner agent since 2009"],
    years: "12 years"
  },
  {
    initials: "DO",
    name: "David Omondi",
    title: "Head of Customs & Compliance",
    bio: "David oversees the customs and compliance division, managing import declarations, export documentation, duty computation, bond management and regulatory compliance across all IOM Transit operations. His 18 years of KRA system expertise spans the transition from SIMBA to iCMS and remains the company's institutional knowledge anchor for customs authority relationships.",
    education: "LLB Law, University of Nairobi | Post-Graduate Diploma in Customs & Trade Facilitation",
    highlights: ["18 years of KRA customs system expertise", "Led the transition from SIMBA to KRA iCMS systems", "Represents IOM Transit at KRA stakeholder consultative forums"],
    years: "10 years"
  },
  {
    initials: "JN",
    name: "James Njoroge",
    title: "Head of Fleet Management",
    bio: "James manages IOM Transit's 340+ vehicle fleet across all three brands — Scania, Volvo and Mercedes — including procurement, maintenance programme, telematics systems, driver certification and cross-border permit management. He has overseen the fleet growth from 80 vehicles when he joined to over 340 units today.",
    education: "BSc Mechanical Engineering, Dedan Kimathi University | Scania Fleet Management Certification",
    highlights: ["Scaled the fleet from 80 to 340+ vehicles under direct management", "Implemented the telematics monitoring system across all units", "Established the driver certification programme"],
    years: "11 years"
  },
  {
    initials: "NR",
    name: "Nadia Rahman",
    title: "Global Business Development",
    bio: "Nadia leads IOM Transit's international business development function, managing the global branch network, airline cargo relationships, and new market entry strategy. She is based between Nairobi and Dubai, managing the company's Middle East and Asia Pacific growth corridors and airline partnership agreements with Kenya Airways, Emirates and Ethiopian Airlines.",
    education: "BSc International Business, University of Sheffield | MSc Logistics & Supply Chain, Cranfield University",
    highlights: ["Established the Dubai and Shanghai branch operations", "Manages airline cargo space agreements with three major carriers", "Led IOM Transit's IATA application and membership onboarding"],
    years: "8 years"
  },
  {
    initials: "GW",
    name: "Grace Wambui",
    title: "Head of Warehousing & Moving Operations",
    bio: "Grace manages IOM Transit's warehousing facilities in Nairobi and Mombasa as well as the full residential and corporate moving services division. She joined the company in 2015 and has established the moving division's no-damage guarantee framework and the inventory management system currently operating across all warehouse locations.",
    education: "BSc Business Administration, Strathmore University | CILT Warehouse & Distribution Certificate",
    highlights: ["Established the IOM Transit moving services division from inception", "Implemented the no-damage guarantee and insurance claim framework", "Manages 25,000 sq ft of bonded warehouse capacity"],
    years: "9 years"
  }
];

export default function Leadership() {
  const [ceo, ...senior] = LEADERSHIP;

  return (
    <main className="bg-[#0a1628]">
      <section className="relative min-h-[65vh] flex flex-col justify-end pb-24 overflow-hidden bg-[#0a1628] border-b border-[rgba(201,168,76,0.2)]">
        <div className="absolute bottom-0 right-[-2%] pointer-events-none select-none overflow-hidden z-0"><span className="type-watermark text-white">TEAM</span></div>
        <div className="container mx-auto px-6 max-w-[1400px] relative z-10 pt-36">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="type-micro text-[#c9a84c] mb-8">About — Leadership</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="type-h1-hero text-white mb-10 max-w-4xl">The<br /><span className="text-[#c9a84c]">Leadership Team</span></motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="type-body-large text-[#8a9bb5] max-w-[560px]">Eight senior leaders. A combined 120+ years of logistics, customs, freight and fleet management experience. Every operational decision at IOM Transit originates from this team.</motion.p>
        </div>
      </section>

      {/* CEO Full Width */}
      <section className="py-24 bg-[#0a1628] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-3 gap-16 border border-[rgba(201,168,76,0.2)] p-12 bg-[#112240]">
            <div className="flex flex-col items-start gap-6">
              <div className="w-24 h-24 bg-[#c9a84c] flex items-center justify-center">
                <span className="font-heading text-4xl text-[#0a1628]">{ceo.initials}</span>
              </div>
              <div>
                <h2 className="font-heading text-4xl text-white mb-1">{ceo.name}</h2>
                <p className="type-micro text-[#c9a84c]">{ceo.title}</p>
              </div>
              <p className="type-body-small text-[#8a9bb5]">{ceo.years} at IOM Transit</p>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <p className="type-body text-[#8a9bb5] leading-relaxed">{ceo.bio}</p>
              <p className="type-body-small text-[#8a9bb5] leading-relaxed">{ceo.education}</p>
              <div className="space-y-2 pt-4 border-t border-[rgba(201,168,76,0.1)]">
                {ceo.highlights.map(h => (
                  <div key={h} className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-[#c9a84c] mt-2 shrink-0" />
                    <p className="type-body-small text-[#8a9bb5]">{h}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Senior Leaders Grid */}
      <section className="py-16 pb-32 bg-[#0a1628] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <p className="type-micro text-[#c9a84c] mb-16">Senior Leadership</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-[rgba(201,168,76,0.1)]">
            {senior.map((leader, i) => (
              <motion.div key={leader.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-[#0a1628] p-8 hover:bg-[#112240] transition-colors group">
                <div className="w-14 h-14 bg-[#c9a84c] flex items-center justify-center mb-6">
                  <span className="font-heading text-2xl text-[#0a1628]">{leader.initials}</span>
                </div>
                <h3 className="type-h4 text-white mb-1">{leader.name}</h3>
                <p className="type-micro text-[#c9a84c] mb-5">{leader.title}</p>
                <p className="type-body-small text-[#8a9bb5] leading-relaxed mb-5">{leader.bio.slice(0, 160)}...</p>
                <p className="type-micro text-[#8a9bb5]">{leader.years} at IOM Transit</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
