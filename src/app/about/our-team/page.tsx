"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const DEPARTMENTS = [
  { name: "Executive", headcount: "5", function: "Corporate strategy, board governance, investor relations, legal counsel and group finance direction.", culture: "A lean, decisive executive team that moves at the speed of the markets it serves." },
  { name: "Operations", headcount: "120", function: "Fleet dispatch, route planning, GPS monitoring, cross-border coordination, driver management and daily operational execution across all five hubs.", culture: "The operational core — disciplined, 24/7, results-measured by the consignment, not the hour." },
  { name: "Freight & Shipping", headcount: "65", function: "International sea freight, air freight, FCL/LCL booking, shipping line relationships, documentation desk and freight quotation.", culture: "Detail-driven professionals who know that a single character error on a bill of lading can hold cargo for weeks." },
  { name: "Customs & Compliance", headcount: "45", function: "Import and export declarations, duty computation, KRA iCMS entry lodgement, bond management, HS classification and regulatory appeals.", culture: "Zero tolerance for compliance shortcuts. The most technically precise department in the company." },
  { name: "Fleet Management", headcount: "80", function: "Vehicle procurement, maintenance scheduling, telematics systems, driver certification, workshop operations and permit management.", culture: "Mechanical precision meets operational urgency — every vehicle must be mission-ready every morning." },
  { name: "Warehousing", headcount: "60", function: "Bonded warehouse operations, moving services crew, inventory management, temperature monitoring and storage facility security.", culture: "Careful hands who treat every client's property with the same respect as their own." },
  { name: "Business Development", headcount: "30", function: "Corporate account acquisition, government tender management, international branch growth and strategic partnership development.", culture: "Commercially aggressive. Every new account won represents a long-term operational commitment honoured." },
  { name: "Finance", headcount: "25", function: "Accounts payable and receivable, treasury, payroll, management accounts, audit liaison and duty payment processing.", culture: "Financial discipline underpins operational freedom — the engine behind every investment in fleet and infrastructure." },
  { name: "Human Resources", headcount: "20", function: "Recruitment, driver welfare, staff training, performance management, benefits administration and industrial relations.", culture: "800 people, each with a career path. HR is the institutional memory of who IOM Transit is." },
  { name: "IT & Systems", headcount: "15", function: "Fleet telematics, KRA system integration, client portal, API development, cybersecurity and infrastructure management.", culture: "A small team with outsized influence — every system they maintain touches every shipment IOM Transit moves." },
];

const TESTIMONIALS = [
  { quote: "I joined IOM Transit as a driver in 2011. By 2019 I was a fleet coordinator. I have never worked anywhere that invested so heavily in helping you grow.", name: "Patrick Mutua", title: "Fleet Coordinator, Nairobi Hub" },
  { quote: "The standards here are serious. KRA iCMS, FIATA documentation, HS classification — you learn the correct way, not the shortcut. That makes you a better professional everywhere.", name: "Winnie Achieng", title: "Senior Customs Officer, Mombasa" },
  { quote: "I came from an NGO logistics background. IOM Transit gave me the structure, the scale and the training to become a freight specialist. It is not a job — it is a career.", name: "Brian Korir", title: "Freight Operations Lead, Nairobi" }
];

export default function OurTeam() {
  return (
    <main className="bg-[#0a1628]">
      <section className="relative min-h-[60vh] flex flex-col justify-end pb-24 overflow-hidden bg-[#0a1628] border-b border-[rgba(201,168,76,0.2)]">
        <div className="absolute bottom-0 right-[-2%] pointer-events-none select-none overflow-hidden z-0"><span className="type-watermark text-white">TEAM</span></div>
        <div className="container mx-auto px-6 max-w-[1400px] relative z-10 pt-36">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="type-micro text-[#c9a84c] mb-8">About — Our Team</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="type-h1-hero text-white mb-10 max-w-4xl">Our<br /><span className="text-[#c9a84c]">Team</span></motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="type-body-large text-[#8a9bb5] max-w-[560px]">800+ professionals. 10 specialist departments. One operational culture built on precision, integrity and the ambition to move Africa's trade without friction.</motion.p>
        </div>
      </section>

      {/* Departments */}
      <section className="py-32 bg-[#0a1628] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-20">
            <p className="type-micro text-[#c9a84c] mb-4">Department Structure</p>
            <h2 className="type-h2 text-white">10 Departments. 800+ Professionals.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-[rgba(201,168,76,0.1)]">
            {DEPARTMENTS.map((dept, i) => (
              <motion.div key={dept.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="bg-[#0a1628] p-8 hover:bg-[#112240] transition-colors">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="type-h4 text-white">{dept.name}</h3>
                  <span className="type-stat text-[#c9a84c] text-3xl">{dept.headcount}</span>
                </div>
                <p className="type-body-small text-[#8a9bb5] mb-5 leading-relaxed">{dept.function}</p>
                <p className="type-body-small text-[#c9a84c]/70 italic leading-relaxed">{dept.culture}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-[#112240] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-20">
            <p className="type-micro text-[#c9a84c] mb-4">From Our Team</p>
            <h2 className="type-h2 text-white">What It Means to Work Here</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-[rgba(201,168,76,0.1)]">
            {TESTIMONIALS.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="bg-[#112240] p-10">
                <div className="text-5xl text-[#c9a84c] font-heading mb-6 opacity-40">"</div>
                <p className="type-body text-[#8a9bb5] leading-relaxed mb-8 italic">{t.quote}</p>
                <div className="border-t border-[rgba(201,168,76,0.1)] pt-6">
                  <p className="type-body-small text-white font-medium">{t.name}</p>
                  <p className="type-micro text-[#c9a84c]">{t.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0a1628] border-t border-[rgba(201,168,76,0.2)] text-center">
        <div className="container mx-auto px-6 max-w-[700px]">
          <h2 className="type-h2 text-white mb-6">Join the Team</h2>
          <p className="type-body-large text-[#8a9bb5] mb-10">IOM Transit is always looking for professionals who bring precision, ambition and operational discipline.</p>
          <Link href="/about/careers" className="inline-block bg-[#c9a84c] text-[#0a1628] px-10 py-5 type-btn font-bold tracking-widest uppercase hover:bg-white transition-colors">View Open Positions</Link>
        </div>
      </section>
    </main>
  );
}
