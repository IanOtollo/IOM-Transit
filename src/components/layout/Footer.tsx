import Link from "next/link";
import { Hexagon } from "lucide-react";

const SERVICES = [
  { name: "International Freight", href: "/services/international-freight" },
  { name: "Sea Freight", href: "/services/sea-freight" },
  { name: "Air Freight", href: "/services/air-freight" },
  { name: "Bulk Road Logistics", href: "/services/bulk-road-logistics" },
  { name: "Customs & Imports", href: "/services/customs-imports" },
  { name: "Moving Services", href: "/services/moving-services" },
  { name: "Last Mile Delivery", href: "/services/last-mile-delivery" }
];

const COMPANY = [
  { name: "Who We Are", href: "/about/who-we-are" },
  { name: "Leadership", href: "/about/leadership" },
  { name: "Our Team", href: "/about/our-team" },
  { name: "Careers", href: "/about/careers" },
  { name: "Warehousing", href: "/#warehousing" }
];

const BRANCHES = [
  { name: "Nairobi HQ (Global Command)", href: "/#network" },
  { name: "Mombasa Port Operations", href: "/#network" },
  { name: "Kisumu Transit Hub", href: "/#network" },
  { name: "Dubai International Desk", href: "/#network" },
  { name: "London Representative Office", href: "/#network" }
];

export default function Footer() {
  return (
    <footer className="bg-navy border-t-2 border-gold pt-24 text-white relative z-50">
       <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
             
             {/* Column 1: Brand & Contact */}
             <div>
                <Link href="/" className="flex items-center gap-3 mb-6">
                  <Hexagon className="text-gold fill-gold w-6 h-6" />
                  <span className="font-heading text-[22px] tracking-tight text-white">
                    IOM <span className="text-gold">Transit</span>
                  </span>
                </Link>
                <p className="text-gold text-[10px] font-bold tracking-[0.4em] uppercase mb-6">Boundless. Delivered.</p>
                <p className="text-text-muted text-sm leading-relaxed mb-8">
                  Africa's foremost logistics powerhouse. We move bulk cargo, freight and goods across borders, oceans and continents.
                </p>
                <div className="space-y-2 text-sm text-white">
                   <p className="hover:text-gold transition-colors">+254 700 399 641</p>
                   <p className="hover:text-gold transition-colors">info@iomtransit.com</p>
                   <p className="text-text-muted mt-2">Nairobi, Kenya</p>
                </div>
             </div>

             {/* Column 2: Services */}
             <div>
                <h4 className="text-white text-[10px] font-bold tracking-[0.2em] uppercase border-b border-border-gold pb-4 mb-6">Services</h4>
                <ul className="space-y-4">
                   {SERVICES.map(srv => (
                      <li key={srv.name}>
                         <Link href={srv.href} className="text-text-muted text-sm hover:text-gold transition-colors">{srv.name}</Link>
                      </li>
                   ))}
                </ul>
             </div>

             {/* Column 3: Company */}
             <div>
                <h4 className="text-white text-[10px] font-bold tracking-[0.2em] uppercase border-b border-border-gold pb-4 mb-6">Company</h4>
                <ul className="space-y-4">
                   {COMPANY.map(cmp => (
                      <li key={cmp.name}>
                         <Link href={cmp.href} className="text-text-muted text-sm hover:text-gold transition-colors">{cmp.name}</Link>
                      </li>
                   ))}
                </ul>
             </div>

             {/* Column 4: Branches */}
             <div>
                <h4 className="text-white text-[10px] font-bold tracking-[0.2em] uppercase border-b border-border-gold pb-4 mb-6">Global Desks</h4>
                <ul className="space-y-4">
                   {BRANCHES.map(br => (
                      <li key={br.name}>
                         <Link href={br.href} className="text-text-muted text-sm hover:text-gold transition-colors">{br.name}</Link>
                      </li>
                   ))}
                </ul>
             </div>
          </div>

          <div className="border-t border-border-gold py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold tracking-[0.2em] uppercase text-text-muted">
             <p>&copy; {new Date().getFullYear()} IOM Transit. All rights reserved.</p>
             <div className="flex gap-4 md:gap-8 flex-wrap justify-center">
                <span>ISO 9001 Certified</span>
                <span className="hidden md:inline">&middot;</span>
                <span>IATA Member</span>
                <span className="hidden md:inline">&middot;</span>
                <span>KRA Licensed Agent</span>
             </div>
          </div>
       </div>
    </footer>
  );
}
