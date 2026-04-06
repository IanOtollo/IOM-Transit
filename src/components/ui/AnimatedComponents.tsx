"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// --- HOVER PRESS BUTTON ---
export function PhysicalButton({ 
  href, 
  children, 
  variant = "primary", 
  className = "" 
}: { 
  href?: string, 
  children: React.ReactNode, 
  variant?: "primary" | "outline",
  className?: string
}) {
  const base = "inline-flex items-center justify-center px-12 py-6 font-bold uppercase tracking-[0.2em] text-xs transition-colors";
  const styles = variant === "primary" 
    ? "bg-gold text-navy hover:bg-white hover:text-navy"
    : "border border-border-gold text-white hover:bg-gold hover:text-navy hover:border-gold";

  const Content = (
    <motion.div
      whileHover={{ scale: 0.97 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{Content}</Link>;
  }
  return <button type="submit">{Content}</button>;
}

// --- STAGGERED TEXT REVEAL ---
export function StaggerText({ 
  text, 
  className = "", 
  delay = 0 
}: { 
  text: string, 
  className?: string, 
  delay?: number 
}) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: delay * 0.15 },
    }),
  };

  const child = {
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, damping: 30, stiffness: 100 } },
    hidden: { opacity: 0, y: 40 },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="mr-3 lg:mr-6 mb-2">
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

// --- COUNT UP ANIMATION ---
export function CountUp({
  to,
  className = "",
  suffix = "",
}: {
  to: number;
  className?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / to));
      
      const timer = setInterval(() => {
        start += Math.ceil(to / 50); // Speed up counting
        if (start >= to) {
          setCount(to);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, stepTime || 20);

      return () => clearInterval(timer);
    }
  }, [isInView, to]);

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  );
}

// --- WATERMARK BANNER ---
export function SectionWatermark({ text }: { text: string }) {
  return (
    <div className="absolute top-0 right-0 overflow-hidden w-full h-full pointer-events-none select-none z-0">
      <motion.p 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 0.04, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="font-heading text-watermark absolute top-10 right-0 whitespace-nowrap"
      >
        {text}
      </motion.p>
    </div>
  );
}

// --- DRAWING LINE BAR ---
export function GoldenRule({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className={`h-px bg-gold origin-left w-full ${className}`}
    />
  );
}
