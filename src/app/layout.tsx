import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { TopProgressBar } from "@/components/layout/GlobalLayoutClient";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IOM Transit | Boundless. Delivered.",
  description: "Africa's foremost logistics powerhouse. We move bulk cargo, freight and goods across borders, oceans and continents.",
  keywords: ["logistics", "freight", "shipping", "Nairobi", "Kenya", "IOM Transit", "global shipping", "moving services"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-navy text-white font-body selection:bg-gold selection:text-navy min-h-screen flex flex-col relative">
        <TopProgressBar />

        {/* Fixed vertical side text for desktop */}
        <div className="hidden lg:flex fixed left-0 top-0 bottom-0 w-16 items-center justify-center z-50 pointer-events-none mix-blend-difference">
           <p className="text-white text-[10px] font-bold tracking-[0.4em] uppercase -rotate-90 whitespace-nowrap">
              IOM Transit &mdash; Nairobi &mdash; Global
           </p>
        </div>

        <Navbar />
        <main className="flex-grow lg:pl-16">
          {children}
        </main>
        <div className="lg:pl-16">
          <Footer />
        </div>
      </body>
    </html>
  );
}
