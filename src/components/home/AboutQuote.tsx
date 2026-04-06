"use client";

import { motion } from "framer-motion";
import { User, Mail, Phone, Calculator, Calendar, MapPin, Weight, MessageSquare, Package, Building2, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { PhysicalButton } from "@/components/ui/AnimatedComponents";

const TEAM = [
  { name: "Amina Kariuki", role: "COO", desc: "MSc Transport Management UK, CSCP Certified. 15+ years operations.", initials: "AK" },
  { name: "David Omondi", role: "Head of Customs", desc: "LLB University of Nairobi, Licensed Customs Agent. 12+ years.", initials: "DO" },
  { name: "Fatuma Mwangi", role: "Director of Freight", desc: "BSc Maritime Studies, FIATA Diploma. 14+ years experience.", initials: "FM" },
  { name: "James Njoroge", role: "Head of Fleet", desc: "Diploma Automotive Engineering, Scania & Volvo Certified.", initials: "JN" },
  { name: "Grace Wambui", role: "Head of Warehousing", desc: "BSc Supply Chain Strathmore, LEAN Six Sigma Green Belt.", initials: "GW" },
  { name: "Samuel Otieno", role: "Regional Manager Mombasa", desc: "BSc Logistics TU, Port Operations Specialist.", initials: "SO" },
  { name: "Nadia Rahman", role: "Global Business Development", desc: "MBA International Business Dubai. 10+ years logistics.", initials: "NR" }
];

const quoteSchema = z.object({
  fullName: z.string().min(2, "Full name required"),
  companyName: z.string().min(2, "Company name required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number required"),
  service: z.string().min(1, "Please select a service"),
  cargoType: z.string().min(1, "Please select cargo type"),
  origin: z.string().min(2, "Origin required"),
  destination: z.string().min(2, "Destination required"),
  weight: z.string().min(1, "Weight required"),
  date: z.string().min(1, "Preferred date required"),
  details: z.string().optional(),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

export function Leadership() {
  return (
    <section id="about" className="bg-navy py-40 relative border-b border-border-gold">
      <div className="absolute top-10 right-10 flex gap-2 text-text-muted text-[10px] items-center">
         <span className="font-heading text-lg font-bold">04</span>
         <span className="w-8 h-px bg-text-muted/30 block" />
      </div>

      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* CEO Banner */}
        <div className="mb-20">
           <motion.div 
             initial={{ opacity: 0, scale: 0.98 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="w-full border-2 border-gold p-12 lg:p-20 bg-navy-mid flex flex-col lg:flex-row items-center gap-12"
           >
              <div className="flex-shrink-0 w-32 h-32 lg:w-48 lg:h-48 bg-navy border border-gold flex items-center justify-center">
                 <span className="font-heading text-5xl lg:text-7xl text-gold">IM</span>
              </div>
              <div>
                 <p className="text-gold text-[10px] tracking-[0.3em] font-bold uppercase mb-4">Chief Executive Officer</p>
                 <h3 className="font-heading text-[52px] text-white leading-none mb-6">Ian Otollo Marabi</h3>
                 <p className="text-text-muted text-sm leading-relaxed max-w-2xl">
                    MBA University of Nairobi &middot; BSc JKUAT &middot; 18+ years pan-Africa freight operations. <br/><br/>
                    "At IOM Transit, we do not just move cargo. We architect supply chains that power global trade. Precision, authority, and scale are not just buzzwords to us—they are the fixed metrics by which we measure every single delivery."
                 </p>
              </div>
           </motion.div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border-gold border border-border-gold">
          {TEAM.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-10 bg-navy hover:bg-navy-mid transition-colors group"
            >
              <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center mb-6">
                <span className="text-gold font-bold text-[10px] tracking-widest">{member.initials}</span>
              </div>
              <h4 className="text-white font-heading text-2xl mb-2">{member.name}</h4>
              <p className="text-gold text-[10px] font-bold tracking-[0.2em] uppercase mb-4">{member.role}</p>
              <p className="text-text-muted text-[11px] leading-relaxed italic">{member.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema)
  });

  const onSubmit = async (data: QuoteFormValues) => {
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) setSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  };

  if (submitted) {
    return (
      <section id="quote" className="bg-navy py-40 text-white text-center border-t border-border-gold relative">
        <div className="container mx-auto px-6">
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }} 
             animate={{ opacity: 1, scale: 1 }}
             className="max-w-3xl mx-auto border border-border-gold p-20 bg-navy-mid"
           >
             <h2 className="font-heading text-6xl text-white mb-6">Quotation Logged</h2>
             <p className="text-text-muted text-lg">Thank you. A logistics specialist will contact you with a customized SLA within 2 business hours.</p>
           </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="bg-navy py-40 text-white border-t border-border-gold relative">
      <div className="absolute top-10 right-10 flex gap-2 text-text-muted text-[10px] items-center">
         <span className="font-heading text-lg font-bold">05</span>
         <span className="w-8 h-px bg-text-muted/30 block" />
      </div>

      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="mb-24 text-center">
          <p className="text-gold text-[10px] tracking-[0.5em] font-bold uppercase mb-6">Action Required</p>
          <h2 className="font-heading text-[64px] leading-none mb-6">Request a Full Quotation</h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto">
             Enter your logistics specifications below. Our global operations team responds to all formal requests within 2 business hours.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 max-w-4xl mx-auto bg-[#112240] p-10 lg:p-20 border border-border-gold shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {/* Input Wrap - Name */}
            <div className="space-y-4">
              <label className="text-[10px] tracking-[0.2em] font-bold uppercase flex items-center gap-3 border-b border-white/10 pb-2">
                <User size={14} className="text-gold" /> Full Name
              </label>
              <input 
                {...register("fullName")}
                className="w-full bg-transparent p-2 text-sm focus:outline-none focus:ring-0 text-white placeholder:text-text-muted/50"
                placeholder="Ex. Ian Otollo"
              />
              {errors.fullName && <p className="text-[10px] tracking-widest text-red-500 font-bold uppercase">{errors.fullName.message}</p>}
            </div>

            {/* Input Wrap - Company */}
            <div className="space-y-4">
              <label className="text-[10px] tracking-[0.2em] font-bold uppercase flex items-center gap-3 border-b border-white/10 pb-2">
                <Building2 size={14} className="text-gold" /> Company Name
              </label>
              <input 
                {...register("companyName")}
                className="w-full bg-transparent p-2 text-sm focus:outline-none focus:ring-0 text-white placeholder:text-text-muted/50"
                placeholder="Ex. Global Logistics Ltd"
              />
              {errors.companyName && <p className="text-[10px] tracking-widest text-red-500 font-bold uppercase">{errors.companyName.message}</p>}
            </div>

            {/* Input Wrap - Email */}
            <div className="space-y-4">
              <label className="text-[10px] tracking-[0.2em] font-bold uppercase flex items-center gap-3 border-b border-white/10 pb-2">
                <Mail size={14} className="text-gold" /> Official Email
              </label>
              <input 
                {...register("email")}
                className="w-full bg-transparent p-2 text-sm focus:outline-none focus:ring-0 text-white placeholder:text-text-muted/50"
                placeholder="ian@iomtransit.com"
              />
              {errors.email && <p className="text-[10px] tracking-widest text-red-500 font-bold uppercase">{errors.email.message}</p>}
            </div>

            {/* Input Wrap - Phone */}
            <div className="space-y-4">
              <label className="text-[10px] tracking-[0.2em] font-bold uppercase flex items-center gap-3 border-b border-white/10 pb-2">
                <Phone size={14} className="text-gold" /> Direct Phone
              </label>
              <input 
                {...register("phone")}
                className="w-full bg-transparent p-2 text-sm focus:outline-none focus:ring-0 text-white placeholder:text-text-muted/50"
                placeholder="+254 700 000 000"
              />
              {errors.phone && <p className="text-[10px] tracking-widest text-red-500 font-bold uppercase">{errors.phone.message}</p>}
            </div>

            {/* Select - Service */}
            <div className="space-y-4">
              <label className="text-[10px] tracking-[0.2em] font-bold uppercase flex items-center gap-3 border-b border-white/10 pb-2">
                <Calculator size={14} className="text-gold" /> Logistics Service
              </label>
              <select 
                {...register("service")}
                className="w-full bg-transparent p-2 text-sm focus:outline-none focus:ring-0 text-white"
              >
                <option value="">Select Primary Service</option>
                <option value="freight">International Freight</option>
                <option value="sea">Sea Freight</option>
                <option value="air">Air Freight</option>
                <option value="road">Bulk Road Logistics</option>
                <option value="customs">Customs & Imports</option>
                <option value="moving">Moving Services</option>
                <option value="delivery">Last Mile Delivery</option>
              </select>
              {errors.service && <p className="text-[10px] tracking-widest text-red-500 font-bold uppercase">{errors.service.message}</p>}
            </div>

            {/* Select - Cargo Type */}
            <div className="space-y-4">
              <label className="text-[10px] tracking-[0.2em] font-bold uppercase flex items-center gap-3 border-b border-white/10 pb-2">
                <Package size={14} className="text-gold" /> Cargo Profile
              </label>
              <select 
                {...register("cargoType")}
                className="w-full bg-transparent p-2 text-sm focus:outline-none focus:ring-0 text-white"
              >
                <option value="">Select Cargo Type</option>
                <option value="general">General Cargo</option>
                <option value="bulk">Bulk Goods</option>
                <option value="hazardous">Hazardous Materials (HAZMAT)</option>
                <option value="perishable">Perishables / Cold Chain</option>
                <option value="machinery">Heavy Machinery / Abnormal</option>
                <option value="personal">Personal Effects</option>
                <option value="vehicles">Motor Vehicles</option>
              </select>
              {errors.cargoType && <p className="text-[10px] tracking-widest text-red-500 font-bold uppercase">{errors.cargoType.message}</p>}
            </div>

            {/* Input Wrap - Origin */}
            <div className="space-y-4">
               <label className="text-[10px] tracking-[0.2em] font-bold uppercase flex items-center gap-3 border-b border-white/10 pb-2">
                <MapPin size={14} className="text-gold" /> Origin Let
              </label>
              <input 
                {...register("origin")}
                className="w-full bg-transparent p-2 text-sm focus:outline-none focus:ring-0 text-white placeholder:text-text-muted/50"
                placeholder="City, Port, or Country"
              />
              {errors.origin && <p className="text-[10px] tracking-widest text-red-500 font-bold uppercase">{errors.origin.message}</p>}
            </div>

             <div className="space-y-4">
               <label className="text-[10px] tracking-[0.2em] font-bold uppercase flex items-center gap-3 border-b border-white/10 pb-2">
                <MapPin size={14} className="text-gold" /> Final Destination
              </label>
              <input 
                {...register("destination")}
                className="w-full bg-transparent p-2 text-sm focus:outline-none focus:ring-0 text-white placeholder:text-text-muted/50"
                placeholder="City, Port, or Country"
              />
              {errors.destination && <p className="text-[10px] tracking-widest text-red-500 font-bold uppercase">{errors.destination.message}</p>}
            </div>

            <div className="space-y-4">
               <label className="text-[10px] tracking-[0.2em] font-bold uppercase flex items-center gap-3 border-b border-white/10 pb-2">
                <Weight size={14} className="text-gold" /> Consignment Weight
              </label>
              <input 
                {...register("weight")}
                className="w-full bg-transparent p-2 text-sm focus:outline-none focus:ring-0 text-white placeholder:text-text-muted/50"
                placeholder="e.g. 25 Tonnes"
              />
              {errors.weight && <p className="text-[10px] tracking-widest text-red-500 font-bold uppercase">{errors.weight.message}</p>}
            </div>

            <div className="space-y-4">
               <label className="text-[10px] tracking-[0.2em] font-bold uppercase flex items-center gap-3 border-b border-white/10 pb-2">
                <Calendar size={14} className="text-gold" /> Operations Date
              </label>
              <input 
                {...register("date")}
                type="date"
                className="w-full bg-transparent p-2 text-sm focus:outline-none focus:ring-0 text-white"
              />
              {errors.date && <p className="text-[10px] tracking-widest text-red-500 font-bold uppercase">{errors.date.message}</p>}
            </div>
          </div>

          <div className="space-y-4 pt-6">
             <label className="text-[10px] tracking-[0.2em] font-bold uppercase flex items-center gap-3 border-b border-white/10 pb-2">
              <MessageSquare size={14} className="text-gold" /> Custom Specifications
            </label>
            <textarea 
              {...register("details")}
              rows={4}
              className="w-full bg-transparent p-2 text-sm focus:outline-none focus:ring-0 text-white placeholder:text-text-muted/50 resize-none"
              placeholder="Any specific handling requirements, insurance needs, or SLA expectations..."
            />
          </div>

          <motion.div whileHover={{ scale: 0.98 }} whileTap={{ scale: 0.96 }} className="pt-6">
             <button 
               type="submit"
               disabled={isSubmitting}
               className="w-full bg-navy text-white text-xs font-bold tracking-[0.3em] uppercase py-8 flex items-center justify-center gap-4 transition-colors hover:bg-gold hover:text-navy"
             >
               <span>{isSubmitting ? "TRANSMITTING..." : "SUBMIT QUOTATION REQUEST"}</span>
               {!isSubmitting && <ArrowRight size={18} />}
             </button>
          </motion.div>
        </form>
      </div>
    </section>
  );
}
