"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  {
    name: "Services",
    id: "services",
    dropdown: [
      { name: "International Freight", href: "/services/international-freight" },
      { name: "Sea Freight", href: "/services/sea-freight" },
      { name: "Air Freight", href: "/services/air-freight" },
      { name: "Bulk Road Logistics", href: "/services/bulk-road-logistics" },
      { name: "Customs & Imports", href: "/services/customs-imports" },
      { name: "Moving Services", href: "/services/moving-services" },
      { name: "Last Mile Delivery", href: "/services/last-mile-delivery" }
    ]
  },
  {
    name: "Solutions",
    id: "network",
    dropdown: [
      { name: "Global Operations", href: "/solutions/global-operations" },
      { name: "National Network", href: "/solutions/national-network" },
      { name: "Corporate Logistics", href: "/solutions/corporate-logistics" },
      { name: "Government Contracts", href: "/solutions/government-contracts" }
    ]
  },
  {
    name: "Fleet",
    id: "fleet",
    dropdown: [
      { name: "Scania Fleet", href: "/fleet/scania" },
      { name: "Volvo Fleet", href: "/fleet/volvo" },
      { name: "Mercedes Fleet", href: "/fleet/mercedes" }
    ]
  },
  {
    name: "About",
    id: "about",
    dropdown: [
      { name: "Who We Are", href: "/about/who-we-are" },
      { name: "Leadership", href: "/about/leadership" },
      { name: "Our Team", href: "/about/our-team" },
      { name: "Careers", href: "/about/careers" }
    ]
  },
  { name: "Warehousing", id: "warehousing" }
];

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileAccordion, setActiveMobileAccordion] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const getHref = (id: string) => isHome ? `#${id}` : `/#${id}`;

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (isHome) {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500 border-b",
      scrolled 
        ? "bg-navy-dark/95 backdrop-blur-md py-3 border-border-gold shadow-2xl" 
        : "bg-transparent py-6 border-white/5"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="group flex flex-col pt-1">
          <span className="font-heading text-2xl tracking-tighter font-black leading-none">IOM TRANSIT</span>
          <span className="text-[8px] font-bold tracking-[0.6em] text-gold uppercase opacity-60 mt-1">Boundless. Delivered.</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li 
              key={link.name} 
              className="relative group"
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link 
                href={getHref(link.id)} 
                onClick={(e) => handleScrollClick(e, link.id)}
                className="flex items-center gap-1.5 text-sm font-bold tracking-widest text-white/80 hover:text-gold transition-colors uppercase"
              >
                {link.name}
                {link.dropdown && <ChevronDown size={12} className="opacity-50" />}
              </Link>

              {/* Mega Dropdown */}
              <AnimatePresence>
                {activeDropdown === link.name && link.dropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-4 w-72 bg-navy-dark backdrop-blur-2xl border border-white/5 p-6 shadow-3xl"
                  >
                    <div className="flex flex-col gap-4">
                      {link.dropdown.map((sub) => (
                        <Link 
                          key={sub.href} 
                          href={sub.href}
                          className="flex items-center justify-between group/sub text-sm text-white/50 hover:text-gold transition-all duration-300 font-medium"
                        >
                          {sub.name}
                          <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/sub:opacity-100 group-hover/sub:translate-x-0 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <Link 
            href="/quote" 
            className="bg-gold text-navy px-8 py-3 text-xs font-black uppercase tracking-[0.3em] hover:bg-gold-light transition-all transform hover:-translate-y-1 shadow-gold/20 shadow-lg"
          >
            Get a Quote
          </Link>
        </div>

        {/* Custom Animated Hamburger Button */}
        <button 
          className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-center z-50 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="flex flex-col gap-1.5 w-6">
            <motion.div 
              animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="h-0.5 w-full bg-gold rounded-full" 
            />
            <motion.div 
              animate={mobileMenuOpen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
              className="h-0.5 w-full bg-gold rounded-full" 
            />
            <motion.div 
              animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="h-0.5 w-full bg-gold rounded-full" 
            />
          </div>
        </button>
      </div>

      {/* Full-Screen Mobile Menu Tray */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 lg:hidden bg-navy-dark z-40 pt-24 px-6 overflow-y-auto pb-12"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col border-b border-white/5 pb-6">
                  {link.dropdown ? (
                    <>
                      <button 
                        onClick={() => setActiveMobileAccordion(activeMobileAccordion === link.name ? null : link.name)}
                        className="text-3xl font-heading text-white flex justify-between items-center"
                      >
                        <span className={cn(activeMobileAccordion === link.name && "text-gold")}>{link.name}</span>
                        <motion.div 
                          animate={{ rotate: activeMobileAccordion === link.name ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                            <ChevronDown size={28} />
                        </motion.div>
                      </button>
                      <AnimatePresence>
                        {activeMobileAccordion === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden flex flex-col gap-5 mt-6 pl-4 border-l border-gold/30"
                          >
                            {link.dropdown.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-lg text-white/50 hover:text-gold transition-colors font-bold uppercase tracking-[0.2em]"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={getHref(link.id)}
                      onClick={(e) => {
                        handleScrollClick(e, link.id);
                        setMobileMenuOpen(false);
                      }}
                      className="text-3xl font-heading text-white hover:text-gold"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <Link
                href="/quote"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-gold text-navy text-center py-6 font-black uppercase tracking-[0.4em] text-sm mt-4 shadow-2xl shadow-gold/10"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
