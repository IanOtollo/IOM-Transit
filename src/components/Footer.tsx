"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Globe2, Layers, Send } from "lucide-react";
import Link from "next/link";

export function Marquee() {
  const keywords = [
    "International Freight", "Bulk Logistics", "Customs Clearance", 
    "Warehousing", "Moving Services", "Sea Freight", "Air Freight", 
    "Last Mile Delivery"
  ];

  return (
    <div className="bg-navy-dark border-y border-border-gold py-6 overflow-hidden">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        className="flex whitespace-nowrap gap-12"
      >
        {[...keywords, ...keywords, ...keywords].map((keyword, i) => (
          <div key={i} className="flex items-center gap-6">
            <span className="text-gold font-bold tracking-[0.4em] text-xs uppercase">{keyword}</span>
            <div className="w-1 h-1 bg-gold rounded-full" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy-dark pt-32 pb-12 border-t border-border-gold">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Column 1: Identity */}
          <div className="space-y-8">
            <div>
                <h2 className="font-heading text-3xl tracking-wide mb-1">IOM TRANSIT</h2>
                <p className="text-gold text-[10px] font-black tracking-[0.5em] uppercase">Boundless. Delivered.</p>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs font-light">
              Providing world-class logistics, freight, and shipping solutions from our global headquarters in Nairobi.
            </p>
            <div className="space-y-4">
                <div className="flex items-center gap-3 text-white/70 text-sm">
                    <Phone size={16} className="text-gold" />
                    <span>+254 700 399 641</span>
                </div>
                <div className="flex items-center gap-3 text-white/70 text-sm">
                    <Mail size={16} className="text-gold" />
                    <span>info@iomtransit.com</span>
                </div>
                <div className="flex items-center gap-3 text-white/70 text-sm">
                    <MapPin size={16} className="text-gold" />
                    <span>HQ: Nairobi, Kenya</span>
                </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-8">
            <h4 className="text-gold text-xs font-black tracking-[0.4em] uppercase">Services</h4>
            <ul className="space-y-4">
              {[
                { name: "International Freight", href: "/services/international-freight" },
                { name: "Sea Freight", href: "/services/sea-freight" },
                { name: "Air Freight", href: "/services/air-freight" },
                { name: "Bulk Road Logistics", href: "/services/bulk-road-logistics" },
                { name: "Customs & Imports", href: "/services/customs-imports" },
                { name: "Moving Services", href: "/services/moving-services" },
                { name: "Last Mile Delivery", href: "/services/last-mile-delivery" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-xs text-white/40 hover:text-gold transition-colors font-bold uppercase tracking-widest leading-loose">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-8">
            <h4 className="text-gold text-xs font-black tracking-[0.4em] uppercase">Company</h4>
            <ul className="space-y-4">
              {[
                { name: "Who We Are", href: "/about/who-we-are" },
                { name: "Leadership", href: "/about/leadership" },
                { name: "Our Team", href: "/about/our-team" },
                { name: "Careers", href: "/about/careers" },
                { name: "Warehousing", href: "/#warehousing" }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-xs text-white/40 hover:text-gold transition-colors font-bold uppercase tracking-widest leading-loose">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Global Hubs */}
          <div className="space-y-8">
            <h4 className="text-gold text-xs font-black tracking-[0.4em] uppercase">Global Hubs</h4>
            <div className="grid grid-cols-2 gap-4">
                {[
                    "Nairobi HQ", "Mombasa", "Kisumu", "Eldoret", 
                    "Nakuru", "Dubai", "London", "Rotterdam"
                ].map((hub) => (
                    <div key={hub} className="border-l border-white/5 pl-3">
                        <p className="text-[10px] text-white/60 font-bold tracking-tight mb-1">{hub}</p>
                        <p className="text-[8px] text-gold/40 uppercase font-black tracking-widest">Active Hub</p>
                    </div>
                ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-border-gold flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <p className="text-[10px] text-white/30 font-bold tracking-[0.1em] uppercase">
            &copy; 2026 IOM TRANSIT LTD. ALL RIGHTS RESERVED. REGISTERED IN KENYA.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <span className="text-[10px] text-gold font-bold tracking-[0.2em] uppercase">ISO 9001 Certified</span>
            <span className="text-[10px] text-gold font-bold tracking-[0.2em] uppercase">IATA Member</span>
            <span className="text-[10px] text-gold font-bold tracking-[0.2em] uppercase">KRA Licensed Agent</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
