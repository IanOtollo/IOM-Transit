"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, CheckCircle } from "lucide-react";

const SERVICE_LABELS: Record<string, string> = {
  "international-freight": "International Freight",
  "sea-freight": "Sea Freight",
  "air-freight": "Air Freight",
  "bulk-road-logistics": "Bulk Road Logistics",
  "customs-imports": "Customs & Imports",
  "moving-services": "Moving Services",
  "last-mile-delivery": "Last Mile Delivery",
  "global-operations": "Global Operations",
  "national-network": "National Network",
  "corporate-logistics": "Corporate Logistics",
  "government-contracts": "Government Contracts",
};

const AGENT_LABELS: Record<string, { name: string; title: string; email: string; initials: string }> = {
  "fatuma-mwangi": { name: "Fatuma Mwangi", title: "Director of Freight & Shipping", email: "fatuma.mwangi@iomtransit.com", initials: "FM" },
  "samuel-otieno": { name: "Samuel Otieno", title: "Regional Manager, Mombasa & Port Operations", email: "samuel.otieno@iomtransit.com", initials: "SO" },
  "nadia-rahman": { name: "Nadia Rahman", title: "Global Business Development", email: "nadia.rahman@iomtransit.com", initials: "NR" },
  "james-njoroge": { name: "James Njoroge", title: "Head of Fleet Management", email: "james.njoroge@iomtransit.com", initials: "JN" },
  "david-omondi": { name: "David Omondi", title: "Head of Customs & Compliance", email: "david.omondi@iomtransit.com", initials: "DO" },
  "grace-wambui": { name: "Grace Wambui", title: "Head of Warehousing & Moving Operations", email: "grace.wambui@iomtransit.com", initials: "GW" },
  "amina-kariuki": { name: "Amina Kariuki", title: "Chief Operations Officer", email: "amina.kariuki@iomtransit.com", initials: "AK" },
};

const INCOTERMS = ["EXW", "FCA", "FAS", "FOB", "CFR", "CIF", "CPT", "CIP", "DAP", "DPU", "DDP"];
const CARGO_TYPES = ["General Cargo", "Perishables / Reefer", "Dangerous Goods (IATA/IMDG)", "Oversized / Out-of-Gauge", "Livestock", "High-Value / Sensitive", "Construction Materials", "Pharmaceutical", "Vehicles / Ro-Ro", "Other"];

const quoteSchema = z.object({
  companyName: z.string().min(2, "Company name required"),
  contactName: z.string().min(2, "Contact name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(9, "Phone required"),
  service: z.string().min(1, "Service type required"),
  originCountry: z.string().min(2, "Origin required"),
  originCity: z.string().min(2, "Origin city required"),
  destinationCountry: z.string().min(2, "Destination required"),
  destinationCity: z.string().min(2, "Destination city required"),
  cargoType: z.string().min(1, "Cargo type required"),
  weight: z.string().min(1, "Weight required"),
  volume: z.string().optional(),
  incoterm: z.string().min(1, "Incoterm required"),
  readyDate: z.string().min(1, "Ready date required"),
  description: z.string().min(10, "Please describe your cargo"),
  references: z.string().optional(),
});
type QuoteForm = z.infer<typeof quoteSchema>;

function QuoteContent() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const serviceParam = searchParams.get("service") || "";
  const agentParam = searchParams.get("agent") || "";
  const fleetParam = searchParams.get("fleet") || "";

  const agent = AGENT_LABELS[agentParam];
  const serviceLabel = SERVICE_LABELS[serviceParam] || "General Freight";

  const { register, handleSubmit, formState: { errors } } = useForm<QuoteForm>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { service: serviceLabel }
  });

  const onSubmit = async (data: QuoteForm) => {
    setSubmitting(true);
    try {
      await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, agent: agentParam, fleet: fleetParam })
      });
    } catch (_) {}
    setSubmitting(false);
    setSubmitted(true);
  };

  const inputClass = "w-full bg-[#0a1628] border border-[rgba(201,168,76,0.25)] text-white px-5 py-4 type-body focus:outline-none focus:border-[#c9a84c] transition-colors placeholder:text-[#4a5978]";
  const labelClass = "block type-micro text-[#8a9bb5] uppercase tracking-[0.12em] mb-2";
  const selectClass = `${inputClass} appearance-none`;

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0a1628] flex items-center justify-center px-6">
        <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="max-w-[600px] text-center">
          <div className="w-20 h-20 bg-[#c9a84c] flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="text-[#0a1628] w-10 h-10" />
          </div>
          <h1 className="type-h2 text-white mb-5">Quote Request Received</h1>
          <p className="type-body-large text-[#8a9bb5] mb-4">
            {agent ? `Your enquiry has been assigned to ${agent.name}, ${agent.title}.` : "Your enquiry has been received by our operations team."}
          </p>
          <p className="type-body text-[#8a9bb5] mb-12">You will receive a detailed quotation within <strong className="text-white">4 business hours</strong>. For urgent shipments call <strong className="text-white">+254 700 000 000</strong>.</p>
          <a href="/" className="inline-flex items-center gap-3 bg-[#c9a84c] text-[#0a1628] px-10 py-5 type-btn font-bold tracking-widest uppercase hover:bg-white transition-colors">Return to Home <ArrowRight size={16} /></a>
        </motion.div>
      </div>
    );
  }

  return (
    <main className="bg-[#0a1628] min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-[1000px]">

        {/* Header */}
        <div className="mb-16 border-b border-[rgba(201,168,76,0.2)] pb-16">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="type-micro text-[#c9a84c] mb-4">
            {serviceLabel}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="type-h1-inner text-white mb-6">
            Request a Quote
          </motion.h1>

          {agent && (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="inline-flex items-center gap-5 mt-4 bg-[#112240] border border-[rgba(201,168,76,0.2)] px-6 py-4">
              <div className="w-11 h-11 bg-[#c9a84c] flex items-center justify-center shrink-0">
                <span className="type-micro text-[#0a1628] font-bold">{agent.initials}</span>
              </div>
              <div>
                <p className="type-body-small text-white font-medium">Handled by {agent.name}</p>
                <p className="type-micro text-[#8a9bb5]">{agent.title}</p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Form */}
        <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} onSubmit={handleSubmit(onSubmit)} className="space-y-12">

          {/* Section 1: Company */}
          <div>
            <p className="type-micro text-[#c9a84c] mb-8 pb-4 border-b border-[rgba(201,168,76,0.15)]">01 — Company Details</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Company Name *</label>
                <input {...register("companyName")} className={inputClass} placeholder="Your company or organisation" />
                {errors.companyName && <p className="type-micro text-red-400 mt-1">{errors.companyName.message}</p>}
              </div>
              <div>
                <label className={labelClass}>Contact Name *</label>
                <input {...register("contactName")} className={inputClass} placeholder="Your full name" />
                {errors.contactName && <p className="type-micro text-red-400 mt-1">{errors.contactName.message}</p>}
              </div>
              <div>
                <label className={labelClass}>Email Address *</label>
                <input {...register("email")} type="email" className={inputClass} placeholder="you@company.com" />
                {errors.email && <p className="type-micro text-red-400 mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label className={labelClass}>Phone Number *</label>
                <input {...register("phone")} className={inputClass} placeholder="+254 700 000 000" />
                {errors.phone && <p className="type-micro text-red-400 mt-1">{errors.phone.message}</p>}
              </div>
            </div>
          </div>

          {/* Section 2: Service */}
          <div>
            <p className="type-micro text-[#c9a84c] mb-8 pb-4 border-b border-[rgba(201,168,76,0.15)]">02 — Service Type</p>
            <div>
              <label className={labelClass}>Service Required *</label>
              <input {...register("service")} className={inputClass} placeholder="e.g. International Sea Freight FCL" />
              {errors.service && <p className="type-micro text-red-400 mt-1">{errors.service.message}</p>}
            </div>
          </div>

          {/* Section 3: Route */}
          <div>
            <p className="type-micro text-[#c9a84c] mb-8 pb-4 border-b border-[rgba(201,168,76,0.15)]">03 — Shipment Route</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Origin Country *</label>
                <input {...register("originCountry")} className={inputClass} placeholder="e.g. Kenya" />
                {errors.originCountry && <p className="type-micro text-red-400 mt-1">{errors.originCountry.message}</p>}
              </div>
              <div>
                <label className={labelClass}>Origin City / Port *</label>
                <input {...register("originCity")} className={inputClass} placeholder="e.g. Mombasa" />
                {errors.originCity && <p className="type-micro text-red-400 mt-1">{errors.originCity.message}</p>}
              </div>
              <div>
                <label className={labelClass}>Destination Country *</label>
                <input {...register("destinationCountry")} className={inputClass} placeholder="e.g. Netherlands" />
                {errors.destinationCountry && <p className="type-micro text-red-400 mt-1">{errors.destinationCountry.message}</p>}
              </div>
              <div>
                <label className={labelClass}>Destination City / Port *</label>
                <input {...register("destinationCity")} className={inputClass} placeholder="e.g. Rotterdam" />
                {errors.destinationCity && <p className="type-micro text-red-400 mt-1">{errors.destinationCity.message}</p>}
              </div>
            </div>
          </div>

          {/* Section 4: Cargo */}
          <div>
            <p className="type-micro text-[#c9a84c] mb-8 pb-4 border-b border-[rgba(201,168,76,0.15)]">04 — Cargo Details</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Cargo Type *</label>
                <select {...register("cargoType")} className={selectClass}>
                  <option value="">Select cargo type</option>
                  {CARGO_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
                {errors.cargoType && <p className="type-micro text-red-400 mt-1">{errors.cargoType.message}</p>}
              </div>
              <div>
                <label className={labelClass}>Incoterm *</label>
                <select {...register("incoterm")} className={selectClass}>
                  <option value="">Select Incoterm</option>
                  {INCOTERMS.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
                {errors.incoterm && <p className="type-micro text-red-400 mt-1">{errors.incoterm.message}</p>}
              </div>
              <div>
                <label className={labelClass}>Total Weight (e.g. 1,200 kg / 24 MT) *</label>
                <input {...register("weight")} className={inputClass} placeholder="e.g. 1,200 kg" />
                {errors.weight && <p className="type-micro text-red-400 mt-1">{errors.weight.message}</p>}
              </div>
              <div>
                <label className={labelClass}>Volume / Dimensions (optional)</label>
                <input {...register("volume")} className={inputClass} placeholder="e.g. 4 CBM / 2 pallets / 1x20ft container" />
              </div>
              <div>
                <label className={labelClass}>Cargo Ready Date *</label>
                <input {...register("readyDate")} type="date" className={inputClass} />
                {errors.readyDate && <p className="type-micro text-red-400 mt-1">{errors.readyDate.message}</p>}
              </div>
              <div>
                <label className={labelClass}>Reference / PO Number (optional)</label>
                <input {...register("references")} className={inputClass} placeholder="e.g. PO-20241506" />
              </div>
            </div>
            <div className="mt-6">
              <label className={labelClass}>Cargo Description &amp; Special Requirements *</label>
              <textarea {...register("description")} rows={5} className={inputClass} placeholder="Describe your cargo and any special handling, temperature, hazard class or packaging requirements..." />
              {errors.description && <p className="type-micro text-red-400 mt-1">{errors.description.message}</p>}
            </div>
          </div>

          {/* Submit */}
          <div className="flex items-center gap-6 pt-4 border-t border-[rgba(201,168,76,0.2)]">
            <button type="submit" disabled={submitting} className="inline-flex items-center gap-3 bg-[#c9a84c] text-[#0a1628] px-12 py-5 type-btn font-bold tracking-widest uppercase hover:bg-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
              {submitting ? "Submitting..." : (<>Submit Quote Request <ArrowRight size={16} /></>)}
            </button>
            <p className="type-body-small text-[#8a9bb5]">Response within 4 business hours</p>
          </div>
        </motion.form>
      </div>
    </main>
  );
}

export default function QuotePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0a1628] flex items-center justify-center"><span className="text-[#c9a84c]">Loading...</span></div>}>
      <QuoteContent />
    </Suspense>
  );
}
