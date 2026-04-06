"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const MARQUEE_ITEMS = [
  "International Freight",
  "Bulk Logistics",
  "Customs Clearance",
  "Warehousing",
  "Moving Services",
  "Sea Freight",
  "Air Freight",
  "Last Mile Delivery"
];

const LOGOS = [
  { name: "Google", src: "https://cdn.simpleicons.org/google/white" },
  { name: "Oracle", src: "https://cdn.simpleicons.org/oracle/white" },
  { name: "Amazon", src: "https://cdn.simpleicons.org/amazon/white" },
  { name: "IBM", src: "https://cdn.simpleicons.org/ibm/white" },
  { name: "PayPal", src: "https://cdn.simpleicons.org/paypal/white" },
  { name: "eBay", src: "https://cdn.simpleicons.org/ebay/white" },
  { name: "Shopify", src: "https://cdn.simpleicons.org/shopify/white" },
  { name: "Stripe", src: "https://cdn.simpleicons.org/stripe/white" },
  { name: "SAP", src: "https://cdn.simpleicons.org/sap/white" },
  { name: "Microsoft", src: "https://cdn.simpleicons.org/microsoft/white" },
  { name: "Salesforce", src: "https://cdn.simpleicons.org/salesforce/white" },
  { name: "Adobe", src: "https://cdn.simpleicons.org/adobe/white" }
];

export default function Trust() {
  return (
    <>
      <section className="bg-navy-mid border-y border-border-gold overflow-hidden py-4">
        <div className="flex whitespace-nowrap">
          <motion.div 
            animate={{ x: [0, -1030] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex items-center gap-10 min-w-max"
          >
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
              <div key={idx} className="flex items-center gap-10">
                <span className="text-white text-sm font-bold tracking-[0.2em] uppercase">{item}</span>
                <span className="text-gold text-[10px]">✦</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-navy py-32 border-b border-border-gold">
         <div className="container mx-auto px-6">
            <h3 className="text-center text-text-muted text-[11px] font-bold tracking-[0.4em] uppercase mb-16">
              Trusted By World-Class Organisations
            </h3>
            
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-8 items-center justify-items-center opacity-70">
               {LOGOS.map((logo) => (
                  <div key={logo.name} className="w-12 h-12 relative opacity-45 hover:opacity-100 transition-opacity duration-300">
                     <Image 
                       src={logo.src} 
                       alt={logo.name} 
                       fill 
                       className="object-contain"
                       unoptimized // Simpleicons handles optimization
                     />
                  </div>
               ))}
            </div>
         </div>
      </section>
    </>
  );
}
