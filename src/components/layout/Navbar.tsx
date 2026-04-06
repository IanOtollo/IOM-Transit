"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Hexagon } from "lucide-react";
import { PhysicalButton } from "@/components/ui/AnimatedComponents";

const MENU_ITEMS = [
  {
    name: "Services",
    href: "/#services",
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
    href: "/#solutions",
    dropdown: [
      { name: "Global Operations", href: "/solutions/global-operations" },
      { name: "National Network", href: "/solutions/national-network" },
      { name: "Corporate Logistics", href: "/solutions/corporate-logistics" },
      { name: "Government Contracts", href: "/solutions/government-contracts" }
    ]
  },
  {
    name: "Fleet",
    href: "/#fleet",
    dropdown: [
      { name: "Scania", href: "/fleet/scania" },
      { name: "Volvo", href: "/fleet/volvo" },
      { name: "Mercedes-Benz", href: "/fleet/mercedes" }
    ]
  },
  {
    name: "Warehousing",
    href: "/#warehousing"
  },
  {
    name: "About",
    href: "/#about",
    dropdown: [
      { name: "Who We Are", href: "/about/who-we-are" },
      { name: "Leadership", href: "/about/leadership" },
      { name: "Our Team", href: "/about/our-team" },
      { name: "Careers", href: "/about/careers" }
    ]
  }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[90] h-[68px] transition-all duration-300 ${
          isScrolled ? "bg-navy/97 backdrop-blur-md border-b border-gold" : "bg-transparent border-b border-transparent"
        } lg:left-16`}
      >
        <div className="h-full px-6 flex items-center justify-between">
          
          <Link href="/" className="flex items-center gap-3 group">
            <Hexagon className="text-gold fill-gold w-6 h-6 group-hover:rotate-90 transition-transform duration-500" />
            <span className="font-heading text-[22px] tracking-tight text-white">
              IOM <span className="text-gold">Transit</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10 h-full">
            {MENU_ITEMS.map((item) => (
              <div 
                key={item.name} 
                className="relative h-full flex items-center"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  href={item.href}
                  className="text-[12px] tracking-[0.2em] font-bold uppercase text-white hover:text-gold transition-colors flex items-center gap-1"
                >
                  {item.name}
                  {item.dropdown && <ChevronDown size={14} className={`transition-transform ${activeDropdown === item.name ? 'rotate-180 text-gold' : ''}`} />}
                </Link>

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-[68px] left-0 min-w-[220px] bg-navy-mid border-t-2 border-gold py-4 shadow-2xl"
                      >
                        {item.dropdown.map((sub, i) => (
                          <motion.div
                            key={sub.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                          >
                            <Link 
                              href={sub.href}
                              className="block px-6 py-3 text-[12px] tracking-[0.2em] font-bold uppercase text-text-muted hover:text-white transition-colors relative group"
                            >
                              {/* Sliding Left Border on hover */}
                              <span className="absolute left-0 top-0 bottom-0 w-1 bg-gold scale-y-0 group-hover:scale-y-100 transition-transform origin-top" />
                              <span className="group-hover:translate-x-2 inline-block transition-transform">{sub.name}</span>
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}

            <motion.div whileHover={{ scale: 0.97 }} whileTap={{ scale: 0.95 }}>
               <Link 
                 href="/quote"
                 className="bg-gold text-navy text-[12px] tracking-[0.2em] font-bold uppercase px-6 py-3 hover:bg-white transition-colors ml-4"
               >
                 Get a Quote
               </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Toggle (Morphing 2x2 Grid -> X) */}
          <div className="lg:hidden flex items-center justify-center relative z-[110]">
             <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="w-[30px] h-[30px] relative focus:outline-none">
                <motion.svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                   {/* Top Left Square -> Line 1 */}
                   <motion.path 
                      animate={isMobileOpen ? { d: "M 6 6 L 24 24", stroke: "#ffffff", strokeWidth: 2, fill: "transparent" } : { d: "M 6 6 L 13 6 L 13 13 L 6 13 Z", stroke: "transparent", strokeWidth: 0, fill: "#c9a84c" }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                   />
                   {/* Top Right Square -> Line 2 */}
                   <motion.path 
                      animate={isMobileOpen ? { d: "M 6 24 L 24 6", stroke: "#ffffff", strokeWidth: 2, fill: "transparent" } : { d: "M 17 6 L 24 6 L 24 13 L 17 13 Z", stroke: "transparent", strokeWidth: 0, fill: "#c9a84c" }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                   />
                   {/* Bottom Left Square -> Fades Out */}
                   <motion.path d="M 6 17 L 13 17 L 13 24 L 6 24 Z" fill="#c9a84c" animate={{ opacity: isMobileOpen ? 0 : 1, scale: isMobileOpen ? 0 : 1 }} transition={{ duration: 0.2 }} style={{ transformOrigin: '9px 20px' }} />
                   {/* Bottom Right Square -> Fades Out */}
                   <motion.path d="M 17 17 L 24 17 L 24 24 L 17 24 Z" fill="#c9a84c" animate={{ opacity: isMobileOpen ? 0 : 1, scale: isMobileOpen ? 0 : 1 }} transition={{ duration: 0.2 }} style={{ transformOrigin: '20px 20px' }} />
                </motion.svg>
             </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Radial Expand */}
      <motion.div
        initial="closed"
        animate={isMobileOpen ? "open" : "closed"}
        variants={{
           open: {
             clipPath: "circle(150% at calc(100% - 40px) 34px)",
             transition: { type: "spring", stiffness: 30, restDelta: 2 }
           },
           closed: {
             clipPath: "circle(0px at calc(100% - 40px) 34px)",
             transition: { delay: 0.2, type: "spring", stiffness: 400, damping: 40 }
           }
        }}
        className="fixed inset-0 z-[100] bg-[#0a1628] flex flex-col pointer-events-auto"
        style={{ pointerEvents: isMobileOpen ? 'auto' : 'none' }}
      >
        {/* Background Watermark */}
        <div className="absolute -bottom-10 -right-10 pointer-events-none select-none overflow-hidden">
           <span className="font-heading text-[200px] text-white opacity-[0.04] leading-none">IOM</span>
        </div>

        {/* Mobile Header Inside Menu */}
        <div className="flex justify-between items-center px-6 h-[68px] relative z-20">
           <div className="flex items-center gap-3">
             <Hexagon className="text-gold fill-gold w-6 h-6" />
           </div>
           {/* Close button is handled by the morphing toggle which persists over the menu thanks to z-[110] */}
        </div>

        {/* Mobile Menu Links */}
        <div className="flex-1 overflow-y-auto px-6 py-10 flex flex-col gap-0 relative z-20">
           <AnimatePresence>
              {isMobileOpen && MENU_ITEMS.map((item, idx) => (
                 <motion.div 
                   key={item.name}
                   initial={{ opacity: 0, x: -30 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0, x: -20, transition: { delay: 0 } }}
                   transition={{ delay: 0.1 + (idx * 0.08), ease: "easeOut" }}
                   className="border-b border-gold/20"
                 >
                    <div 
                      className="py-4 flex justify-between items-center cursor-pointer"
                      onClick={() => item.dropdown ? setActiveDropdown(activeDropdown === item.name ? null : item.name) : setIsMobileOpen(false)}
                    >
                       {item.dropdown ? (
                         <span className="font-heading text-[48px] text-white tracking-tight">{item.name}</span>
                       ) : (
                         <Link href={item.href} className="font-heading text-[48px] text-white tracking-tight">{item.name}</Link>
                       )}
                       {item.dropdown && (
                          <ChevronDown className={`text-gold w-8 h-8 transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                       )}
                    </div>
                    
                    {/* Animated Dropdown Expansion */}
                    <AnimatePresence>
                       {item.dropdown && activeDropdown === item.name && (
                         <motion.div
                           initial={{ height: 0, opacity: 0 }}
                           animate={{ height: "auto", opacity: 1 }}
                           exit={{ height: 0, opacity: 0 }}
                           transition={{ duration: 0.3 }}
                           className="overflow-hidden"
                         >
                           <div className="flex flex-col gap-4 pb-6 pt-2">
                              {item.dropdown.map(sub => (
                                 <Link 
                                   key={sub.name} 
                                   href={sub.href}
                                   onClick={() => setIsMobileOpen(false)}
                                   className="text-[16px] text-gold tracking-wide font-body block hover:translate-x-2 transition-transform"
                                 >
                                   {sub.name}
                                 </Link>
                              ))}
                           </div>
                         </motion.div>
                       )}
                    </AnimatePresence>
                 </motion.div>
              ))}
           </AnimatePresence>
        </div>

        {/* Global CTA at Bottom */}
        <div className="p-6 pb-12 relative z-20 shrink-0">
           <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: isMobileOpen ? 1 : 0, y: isMobileOpen ? 0 : 20 }} transition={{ delay: 0.6 }}>
             <Link 
               href="/quote"
               onClick={() => setIsMobileOpen(false)}
               className="block w-full bg-gold text-navy py-5 text-center font-bold tracking-[0.2em] uppercase text-sm"
             >
               Get a Quote
             </Link>
           </motion.div>
        </div>
      </motion.div>
    </>
  );
}
