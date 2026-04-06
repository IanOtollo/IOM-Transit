"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Globe, Ship, Plane, Truck, ShieldCheck, 
  Package, MapPin, BarChart3, Network, Building2, Briefcase
} from "lucide-react";
import { GoldenRule, SectionWatermark } from "@/components/ui/AnimatedComponents";

const SERVICES = [
  { icon: Globe, name: "International Freight", href: "/services/international-freight", desc: "Multimodal global transit solutions." },
  { icon: Ship, name: "Sea Freight", href: "/services/sea-freight", desc: "FCL and LCL ocean logistics." },
  { icon: Plane, name: "Air Freight", href: "/services/air-freight", desc: "Express and time-critical air cargo." },
  { icon: Truck, name: "Bulk Road Logistics", href: "/services/bulk-road-logistics", desc: "Heavy haulage across pan-Africa." },
  { icon: ShieldCheck, name: "Customs & Imports", href: "/services/customs-imports", desc: "Licensed KRA clearing and forwarding." },
  { icon: Package, name: "Moving Services", href: "/services/moving-services", desc: "Corporate and residential relocations." },
  { icon: MapPin, name: "Last Mile Delivery", href: "/services/last-mile-delivery", desc: "Urban and rural express distribution." }
];

const SOLUTIONS = [
  { icon: Network, name: "Global Operations", href: "/solutions/global-operations", desc: "Connecting East Africa\nto 6 continents." },
  { icon: MapPin, name: "National Network", href: "/solutions/national-network", desc: "Hubs across major\nKenyan counties." },
  { icon: Building2, name: "Corporate Logistics", href: "/solutions/corporate-logistics", desc: "SLA-backed enterprise\nsupply chains." },
  { icon: Briefcase, name: "Government Contracts", href: "/solutions/government-contracts", desc: "Humanitarian and\nstate-level handling." }
];

export default function Grids() {
  return (
    <>
      <section id="services" className="bg-navy-mid pt-32 pb-40 text-white relative border-b border-border-gold">
        <div className="absolute top-10 right-10 flex gap-2 text-text-muted text-[10px] items-center">
           <span className="font-heading text-lg font-bold">02</span>
           <span className="w-8 h-px bg-text-muted/30 block" />
        </div>
        
        <div className="container mx-auto px-6 max-w-[1400px]">
          <GoldenRule className="mb-16" />
          
          <div className="mb-24">
            <p className="text-gold text-[10px] tracking-[0.4em] font-bold uppercase mb-4">WHAT WE DO</p>
            <h2 className="font-heading text-white text-[72px] leading-[0.85] tracking-tight max-w-4xl">
               Full-Spectrum Logistics Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((srv, idx) => (
              <Link href={srv.href} key={srv.name}>
                 <motion.div 
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ delay: idx * 0.1, duration: 0.8 }}
                   whileHover={{ y: -8, backgroundColor: "#0a1628" }}
                   className="p-10 bg-[#0a1628] border border-border-gold flex flex-col h-full relative overflow-hidden group cursor-pointer transition-colors"
                 >
                   <srv.icon className="text-gold w-8 h-8 mb-8" />
                   <h3 className="font-heading text-2xl mb-4">{srv.name}</h3>
                   <p className="text-text-muted text-sm leading-relaxed mb-10 flex-grow">{srv.desc}</p>
                   
                   <p className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase">Learn More &rarr;</p>

                   {/* Hover Sliding Gold Border */}
                   <motion.div 
                     initial={{ x: "-100%" }}
                     whileHover={{ x: 0 }}
                     transition={{ ease: "circOut", duration: 0.4 }}
                     className="absolute bottom-0 left-0 right-0 h-1 bg-gold opacity-0 group-hover:opacity-100"
                   />
                 </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="bg-navy py-40 relative border-b border-border-gold overflow-hidden">
        <SectionWatermark text="SOLUTIONS" />
        
        <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {SOLUTIONS.map((sol, idx) => (
                <motion.div 
                   key={sol.name}
                   initial={{ opacity: 0, x: -30 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.15, duration: 0.8 }}
                   whileHover={{ y: -8 }}
                   className="p-10 border border-white/10 bg-navy-mid/80 backdrop-blur-md relative group flex flex-col h-full"
                >
                   <sol.icon className="text-gold w-8 h-8 mb-8" />
                   <h3 className="font-heading text-3xl text-white mb-4">{sol.name}</h3>
                   <p className="text-text-muted text-sm leading-relaxed whitespace-pre-line mb-10 flex-grow">{sol.desc}</p>
                   
                   <Link href={sol.href} className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase hover:text-white transition-colors">
                     Explore &rarr;
                   </Link>

                   {/* Subtle border bottom hover */}
                   <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </motion.div>
             ))}
          </div>
        </div>
      </section>
    </>
  );
}
