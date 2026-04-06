"use client";

import { motion } from "framer-motion";

const ceo = {
  name: "Ian Otollo Marabi",
  role: "Chief Executive Officer",
  initials: "IM",
  bio: "We don't just move cargo; we shift the foundation of global trade. IOM Transit was built to turn the once impossible corridors of Africa into the most efficient logistics arteries in the world.",
};

const team = [
  { name: "Amina Kariuki", role: "COO", initials: "AK", quals: "MSc Transport UK, CSCP" },
  { name: "David Omondi", role: "Head of Customs", initials: "DO", quals: "LLB, Licensed Agent" },
  { name: "Fatuma Mwangi", role: "Director of Freight", initials: "FM", quals: "FIATA Diploma" },
  { name: "James Njoroge", role: "Head of Fleet", initials: "JN", quals: "Scania & Volvo Certified" },
  { name: "Grace Wambui", role: "Head of Warehousing", initials: "GW", quals: "LEAN Six Sigma Green Belt" },
  { name: "Samuel Otieno", role: "Regional Manager Mombasa", initials: "SO", quals: "Port Ops Specialist" },
  { name: "Nadia Rahman", role: "Global Business Development", initials: "NR", quals: "MBA International Biz Dubai" },
];

export default function Leadership() {
  return (
    <section id="about" className="bg-navy-dark py-32">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-gold font-bold tracking-[0.3em] text-xs uppercase">Leadership</span>
          </div>
          <h2 className="font-heading text-5xl md:text-6xl mb-6">Foundation of Authority</h2>
        </div>

        {/* CEO Feature */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row items-center gap-12 bg-navy-mid border border-gold p-12 mb-20"
        >
          <div className="w-32 h-32 md:w-48 md:h-48 bg-gold flex items-center justify-center font-heading text-4xl md:text-6xl font-bold text-navy shrink-0">
            {ceo.initials}
          </div>
          <div className="flex-1">
            <h3 className="font-heading text-4xl mb-2">{ceo.name}</h3>
            <p className="text-gold font-bold uppercase tracking-[0.2em] text-xs mb-6">{ceo.role}</p>
            <p className="text-white/80 text-xl max-w-3xl leading-relaxed font-light">{ceo.bio}</p>
          </div>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div 
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-5 p-6 border border-border-gold hover:border-gold transition-colors duration-500"
            >
              <div className="w-12 h-12 bg-navy flex items-center justify-center font-bold text-gold border border-gold shrink-0">
                {member.initials}
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">{member.name}</h4>
                <p className="text-gold text-[10px] font-bold uppercase tracking-widest mb-1">{member.role}</p>
                <p className="text-white/50 text-[10px] uppercase font-bold tracking-tighter opacity-80">{member.quals}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
