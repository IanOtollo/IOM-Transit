"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";

interface BreadcrumbProps {
  category: string;
  categoryHref: string;
  subject: string;
}

export default function Breadcrumb({ category, categoryHref, subject }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-4 text-[10px] uppercase font-black tracking-[0.4em] mb-16 relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link href="/" className="text-white/30 hover:text-gold transition-colors flex items-center gap-3 group">
          <div className="p-2 border border-white/5 group-hover:border-gold transition-colors">
            <Home size={10} className="group-hover:scale-110 transition-transform" />
          </div>
          <span>IOM HQ</span>
        </Link>
      </motion.div>
      
      <ChevronRight size={12} className="text-white/10" />
      
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <Link href={categoryHref} className="text-white/30 hover:text-gold transition-colors border-b border-white/5 pb-1">
          {category}
        </Link>
      </motion.div>
      
      <ChevronRight size={12} className="text-white/10" />
      
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gold font-black bg-white/5 px-3 py-1 border border-gold/20"
      >
        {subject}
      </motion.div>
    </nav>
  );
}
