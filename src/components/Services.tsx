"use client";

import { motion } from "framer-motion";
import { 
  Globe2, Ship, Plane, Truck, FileCheck, 
  PackageCheck, Warehouse, ShoppingCart, ArrowRight
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "International Freight",
    icon: Globe2,
    href: "/services/international-freight",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800",
    desc: "Global multi-modal transportation solutions connecting major trade hubs across six continents."
  },
  {
    title: "Sea Freight",
    icon: Ship,
    href: "/services/sea-freight",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b865c322?auto=format&fit=crop&q=80&w=800",
    desc: "Comprehensive ocean logistics including FCL, LCL, and specialized break-bulk cargo handling."
  },
  {
    title: "Air Freight",
    icon: Plane,
    href: "/services/air-freight",
    image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=800",
    desc: "Time-critical air transport solutions via a premier global network of partner carriers."
  },
  {
    title: "Bulk Road Logistics",
    icon: Truck,
    href: "/services/bulk-road-logistics",
    image: "https://images.unsplash.com/photo-1586191582151-f746323bc035?auto=format&fit=crop&q=80&w=800",
    desc: "Dominant road freight operations across East and Central Africa with a modern heavy-duty fleet."
  },
  {
    title: "Customs & Imports",
    icon: FileCheck,
    href: "/services/customs-imports",
    image: "https://images.unsplash.com/photo-1554469385994-73893325026b?auto=format&fit=crop&q=80&w=800",
    desc: "Seamless document processing and regulatory compliance managed by licensed experts."
  },
  {
    title: "Moving Services",
    icon: PackageCheck,
    href: "/services/moving-services",
    image: "https://images.unsplash.com/photo-1580674684081-4966270b2ec4?auto=format&fit=crop&q=80&w=1200",
    desc: "White-glove residential and corporate relocation services with global move management."
  },
  {
    title: "Last Mile Delivery",
    icon: ShoppingCart,
    href: "/services/last-mile-delivery",
    image: "https://images.unsplash.com/photo-1627961224213-9097e3f8ec4e?auto=format&fit=crop&q=80&w=800",
    desc: "Precision final-leg logistics ensuring on-time delivery to the destination doorstep."
  },
  {
    title: "Infrastructure Hubs",
    icon: Warehouse,
    href: "/#warehousing",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
    desc: "State-of-the-art storage and distribution centers powering regional supply chains."
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-navy-dark py-32 border-t border-white/5">
      <div className="container max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-0.5 bg-gold" />
            <span className="text-gold font-black tracking-[0.4em] text-[10px] uppercase">Service Corridors</span>
          </div>
          <h2 className="font-heading text-6xl md:text-8xl mb-8 leading-tight">Global Operational Authority</h2>
          <p className="max-w-3xl text-white/40 text-xl font-light leading-relaxed">
            Engineered for Maersk-scale precision, our cargo corridors navigate the world's most complex trade routes with absolute authority.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {services.map((service, i) => (
            <Link 
              key={service.title} 
              href={service.href}
              className="group relative h-[600px] overflow-hidden border border-white/5 bg-navy-mid/20"
            >
              {/* Image Hero Background */}
              <div className="absolute inset-0 z-0">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 filter brightness-[0.4] group-hover:brightness-[0.25]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent opacity-90" />
              </div>

              <div className="relative z-10 h-full p-10 flex flex-col justify-end">
                <div className="mb-8 p-4 border border-gold/20 inline-block w-fit group-hover:bg-gold group-hover:text-navy transition-all duration-500">
                  <service.icon size={24} className="text-gold group-hover:text-navy" />
                </div>
                <h3 className="font-heading text-4xl mb-6 group-hover:text-gold transition-colors">{service.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed font-light mb-10 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {service.desc}
                </p>
                <div className="flex items-center gap-3 text-gold text-[10px] font-black uppercase tracking-widest overflow-hidden">
                  <span className="translate-x-0 group-hover:translate-x-0 transition-transform">Command Port</span>
                  <ArrowRight size={14} className="-translate-x-4 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all" />
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-gold/10 opacity-0 group-hover:opacity-100 transition-all m-4" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
