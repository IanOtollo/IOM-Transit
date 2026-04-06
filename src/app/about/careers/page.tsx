"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { ChevronDown, Briefcase, MapPin, Clock, DollarSign } from "lucide-react";

const POSTINGS = [
  {
    title: "Freight Operations Manager",
    location: "Nairobi, Kenya",
    department: "Freight & Shipping",
    type: "Full-Time",
    salary: "KES 180,000 – 240,000/month",
    description: [
      "IOM Transit is seeking a Freight Operations Manager to lead the day-to-day execution of international freight bookings across sea, air and multimodal corridors. The successful candidate will manage a team of 12 freight coordinators and documentation specialists, serving as the senior escalation point for carrier disputes, documentation discrepancies and priority shipment exceptions.",
      "The role requires deep familiarity with FCL and LCL ocean freight systems, IATA cargo booking procedures, FIATA documentation standards and KRA iCMS customs entry requirements. You will work directly with the Director of Freight & Shipping to develop routing strategies for key client lanes and quarterly carrier rate negotiations.",
      "This is a senior individual contributor role with people management responsibility. You will be expected to perform at the highest level of technical knowledge while maintaining strong client-facing communication standards and meeting operational KPIs published monthly to the Operations Director.",
      "IOM Transit offers a competitive remuneration package, professional development budget, private medical cover and 21 days annual leave in addition to public holidays. The position is based at our Nairobi headquarters with frequent travel to Mombasa Port."
    ],
    responsibilities: ["Manage international FCL, LCL and air freight bookings end-to-end", "Oversee documentation desk output including bills of lading verifications", "Maintain carrier and shipping line relationships", "Ensure KPI delivery on transit time, documentation accuracy and client communication", "Manage escalations from freight coordinators and resolve carrier disputes", "Produce weekly freight operations reports for the Director of Freight & Shipping", "Lead carrier rate negotiation events quarterly", "Train and performance-manage a team of 12 freight coordinators"],
    requirements: ["Bachelor's degree in Logistics, International Trade or related field", "Minimum 7 years international freight forwarding experience", "Deep knowledge of FCL, LCL, Incoterms 2020 and multimodal transport", "KRA iCMS export and import entry experience", "Strong carrier relationship management skills", "Team leadership experience of 5+ people"]
  },
  {
    title: "Customs Clearing Officer",
    location: "Mombasa, Kenya",
    department: "Customs & Compliance",
    type: "Full-Time",
    salary: "KES 90,000 – 130,000/month",
    description: [
      "IOM Transit Mombasa is recruiting a Customs Clearing Officer to manage import and export declarations for sea freight cargo arriving at and departing from Mombasa Port. The successful candidate will operate within our KRA-licensed clearing agent framework, lodging entries on KRA iCMS, computing duties and managing cargo through to physical release.",
      "The role requires hands-on experience with Kenya Revenue Authority customs procedures, including HS classification under the EAC Common External Tariff, duty and VAT computation, bonded transit management and cargo examination coordination. You will work as part of a team of five clearing officers at our Mombasa Port office.",
      "The role involves direct interaction with KRA Customs Officers, Kenya Ports Authority gate staff, SGS inspection agents and shipping line agents at the Mombasa port facility. Mombasa-based candidates with existing port access credentials are strongly preferred.",
      "IOM Transit's Mombasa team operates within a performance culture where individual processing accuracy and turnaround time are measured daily. The company provides an excellent benefits package and clear career progression for clearing officers who demonstrate technical expertise."
    ],
    responsibilities: ["Lodge import and export entries on KRA iCMS", "Classify cargo under EAC Common External Tariff (HS codes)", "Compute import duty, VAT, RDL and IDF levies accurately", "Coordinate KRA examination scheduling and physical inspection", "Manage customs bonds for transit cargo", "Liaise with Kenya Ports Authority for gate release", "File pre-arrival declarations to reduce port dwell time", "Maintain compliance documentation per IOM Transit standards"],
    requirements: ["Diploma or Degree in Customs Management or related field", "Minimum 3 years practical KRA iCMS entry lodgement experience", "Strong HS classification skills under EAC CET", "Familiarity with Mombasa Port procedures", "KRA Mombasa port access credentials preferred", "Attention to detail and zero tolerance for documentation errors"]
  },
  {
    title: "Fleet Coordinator",
    location: "Nairobi, Kenya",
    department: "Fleet Management",
    type: "Full-Time",
    salary: "KES 80,000 – 110,000/month",
    description: [
      "IOM Transit is hiringa Fleet Coordinator to support the Head of Fleet Management in the daily coordination of vehicle allocations, maintenance scheduling, driver assignments and permit management across our 340+ vehicle fleet.",
      "The role involves using our fleet management system to track vehicle availability, coordinate pre-departure inspections, process maintenance job cards and monitor telematics data for driver compliance violations. You will be the operational liaison between the workshop, dispatch team and fleet management leadership.",
      "Fleet Coordinators at IOM Transit are the critical link between a vehicle leaving the workshop and arriving at the loading point on time. Precision, communication and an understanding of commercial vehicle mechanical systems are essential.",
      "The position offers structured career progression toward Fleet Manager roles for candidates who demonstrate technical competency, operational reliability and leadership qualities."
    ],
    responsibilities: ["Coordinate daily vehicle allocations and driver assignments", "Process pre-departure vehicle inspection checklists", "Schedule and track preventive maintenance jobs", "Monitor telematics data for compliance violations and driver behaviour", "Manage cross-border permit applications and renewals", "Liaise between workshop, dispatch and fleet management", "Maintain accurate vehicle records in the fleet management system", "Produce daily vehicle utilisation and availability reports"],
    requirements: ["Diploma or Degree in Automotive Engineering, Logistics or related field", "2+ years fleet coordination or transport management experience", "Familiarity with commercial vehicle maintenance systems", "Experience with fleet telematics platforms (Samsara, MiXT, or equivalent)", "Strong organisational and multi-tasking skills", "Valid driving licence preferred"]
  },
  {
    title: "Warehouse Supervisor",
    location: "Kisumu, Kenya",
    department: "Warehousing",
    type: "Full-Time",
    salary: "KES 70,000 – 95,000/month",
    description: [
      "IOM Transit's Kisumu Hub is seeking a Warehouse Supervisor to manage daily operations at our Western Kenya warehousing and distribution facility. The supervisor will oversee receiving, storage, order picking, dispatch and inventory management for FMCG, pharmaceutical and general cargo clients.",
      "The role involves managing a team of 15 warehouse operatives, coordinating inbound and outbound vehicle movements, maintaining inventory accuracy and operating our warehouse management system. The Kisumu facility serves distribution clients across Nyanza, Western and parts of the Rift Valley.",
      "The successful candidate must have demonstrated warehouse management experience, a strong understanding of FIFO and FEFO inventory practices and the ability to manage a team in a fast-paced, multi-client facility environment.",
      "IOM Transit Kisumu is one of our fastest-growing operations. The Warehouse Supervisor role is a critical hire and offers a clear path to Regional Warehouse Manager within 24 months for the right candidate."
    ],
    responsibilities: ["Manage daily inbound and outbound cargo operations", "Supervise and performance-manage a team of 15 warehouse operatives", "Maintain inventory accuracy using the warehouse management system", "Apply FIFO and FEFO principles across all client stock", "Coordinate vehicle docking schedules and dispatch sequences", "Conduct daily physical stock counts and reconcile variances", "Ensure facility health and safety compliance", "Report daily operational performance to the Head of Warehousing"],
    requirements: ["Diploma or Degree in Supply Chain, Logistics or related field", "3+ years warehouse supervision experience", "Experience managing double-digit teams", "Familiarity with WMS platforms and inventory systems", "Strong FIFO/FEFO understanding for pharmaceutical stock", "Kisumu-based or willing to relocate to Kisumu"]
  },
  {
    title: "Sales Executive — Logistics",
    location: "Nairobi, Kenya",
    department: "Business Development",
    type: "Full-Time",
    salary: "KES 80,000 + Uncapped Commission",
    description: [
      "IOM Transit's Business Development team is seeking a Sales Executive to drive new corporate account acquisition across the Nairobi market and key enterprise verticals including FMCG, pharmaceutical, manufacturing and retail. The Sales Executive will manage the full sales cycle from prospecting through proposal to contract signature.",
      "Unlike transactional logistics sales roles, IOM Transit Sales Executives sell complex, SLA-backed logistics solutions requiring a thorough understanding of supply chain economics, cost-per-tonne modelling and operational feasibility. You will work with the Head of Business Development and the COO to price and structure proposals for high-value enterprise accounts.",
      "Compensation is structured with a competitive base salary and an uncapped commission scheme that rewards new account wins and revenue growth on existing accounts. Top-performing Sales Executives at IOM Transit consistently earn 2× to 3× their base in annual total compensation.",
      "This role requires a self-starter with existing relationships in the Nairobi corporate market and the commercial intelligence to identify supply chain pain points that IOM Transit's infrastructure can solve. Candidates from freight forwarder, courier or FMCG distributor backgrounds are strongly preferred."
    ],
    responsibilities: ["Prospect and qualify corporate accounts in target verticals", "Manage the full B2B sales cycle from initial contact to contract", "Develop logistics solution proposals in collaboration with Operations and Finance", "Present IOM Transit capabilities to C-suite and procurement decision-makers", "Maintain a pipeline of 30+ qualified opportunities at all times", "Negotiate contract terms within approved rate structures", "Meet monthly new account and revenue targets", "Report pipeline and forecasts weekly to the Head of Business Development"],
    requirements: ["Bachelor's degree in Business, Commerce or related field", "Minimum 4 years B2B sales experience in logistics, freight or FMCG", "Proven track record of closing corporate logistics contracts", "Strong commercial numeracy and proposal structuring skills", "Existing Nairobi corporate relationships a significant advantage", "Self-motivated with high tolerance for a performance culture"]
  },
  {
    title: "Class G Driver — Long Haul",
    location: "Multiple Locations, Kenya",
    department: "Operations",
    type: "Full-Time",
    salary: "KES 55,000 – 75,000/month + Allowances",
    description: [
      "IOM Transit is continuously recruiting experienced Class G long-haul drivers for our Scania, Volvo and Mercedes-Benz prime mover fleet operating on national and cross-border corridors. Drivers operate on routes including Nairobi–Mombasa, Nairobi–Kampala, Nairobi–Dar es Salaam and Nairobi–Kigali.",
      "IOM Transit drivers are among the best compensated in the Kenyan market, with structured allowances for border crossings, overnight stays and cross-country distances in addition to the base monthly salary. All drivers are enrolled in the company's medical cover scheme from the first month of employment.",
      "Safety and professionalism are non-negotiable at IOM Transit. All new drivers complete an induction programme covering Scania/Volvo/Mercedes vehicle operation, IOM Transit's driver code of conduct, cross-border documentation procedures and telematics compliance training. Ongoing coaching is provided via Scania's Driver Coaching programme.",
      "IOM Transit promotes from within — experienced drivers who demonstrate leadership qualities are considered for Fleet Coordinator and Driver Trainer roles as they become available."
    ],
    responsibilities: ["Operate Class G vehicles on assigned national and cross-border routes", "Complete mandatory pre-departure vehicle inspection checklist", "Maintain cargo security and condition throughout transit", "Comply with IOM Transit driver code of conduct at all times", "Present correct documentation at all weighbridges and border posts", "Report vehicle defects immediately via the fleet management system", "Operate within telematics-monitored speed and driving behaviour standards", "Maintain accurate logbook records for driving hours and border crossings"],
    requirements: ["Valid Class G (heavy commercial) driving licence — minimum 5 years", "Clean driving record — no serious traffic convictions in the last 5 years", "Cross-border corridor experience (Uganda, Tanzania corridor preferred)", "Familiarity with Scania, Volvo or Mercedes-Benz prime movers", "Ability to read and complete border crossing documentation", "Good physical health — medical certificate required at application"]
  }
];

const appSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(9, "Phone number required"),
  position: z.string().min(1, "Please specify the position"),
  coverLetter: z.string().min(50, "Cover letter must be at least 50 characters"),
});
type AppForm = z.infer<typeof appSchema>;

function ApplicationForm({ position, onClose }: { position: string; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<AppForm>({
    resolver: zodResolver(appSchema),
    defaultValues: { position }
  });

  const onSubmit = async (data: AppForm) => {
    await new Promise(r => setTimeout(r, 800));
    setSubmitted(true);
  };

  const inputClass = "w-full bg-[#0a1628] border border-[rgba(201,168,76,0.3)] text-white px-5 py-4 type-form-input focus:outline-none focus:border-[#c9a84c] transition-colors";
  const labelClass = "block type-form-label text-[#8a9bb5] uppercase mb-2";

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 bg-[#c9a84c] flex items-center justify-center mx-auto mb-6">
          <span className="text-[#0a1628] text-2xl font-bold">✓</span>
        </div>
        <h3 className="type-h3 text-white mb-4">Application Received</h3>
        <p className="type-body text-[#8a9bb5] mb-8">Thank you for applying for <strong className="text-white">{position}</strong>. Our HR team will review your application and respond within 5 business days.</p>
        <button onClick={onClose} className="type-btn text-[#c9a84c] border border-[rgba(201,168,76,0.4)] px-8 py-3 uppercase tracking-widest hover:border-[#c9a84c] transition-colors">Close</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <h3 className="type-h3 text-white mb-8">Apply: {position}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className={labelClass}>Full Name</label>
          <input {...register("fullName")} className={inputClass} placeholder="Your full name" />
          {errors.fullName && <p className="type-micro text-red-400 mt-1">{errors.fullName.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Email Address</label>
          <input {...register("email")} type="email" className={inputClass} placeholder="your@email.com" />
          {errors.email && <p className="type-micro text-red-400 mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Phone Number</label>
          <input {...register("phone")} className={inputClass} placeholder="+254 700 000 000" />
          {errors.phone && <p className="type-micro text-red-400 mt-1">{errors.phone.message}</p>}
        </div>
        <div>
          <label className={labelClass}>Position Applied</label>
          <input {...register("position")} className={inputClass} readOnly />
        </div>
      </div>
      <div>
        <label className={labelClass}>Cover Letter</label>
        <textarea {...register("coverLetter")} rows={6} className={inputClass} placeholder="Tell us why you are the right candidate for this role..." />
        {errors.coverLetter && <p className="type-micro text-red-400 mt-1">{errors.coverLetter.message}</p>}
      </div>
      <div className="flex gap-4">
        <button type="submit" className="bg-[#c9a84c] text-[#0a1628] px-10 py-4 type-btn font-bold tracking-widest uppercase hover:bg-white transition-colors">Submit Application</button>
        <button type="button" onClick={onClose} className="border border-[rgba(201,168,76,0.4)] text-white px-8 py-4 type-btn tracking-widest uppercase hover:border-[#c9a84c] hover:text-[#c9a84c] transition-colors">Cancel</button>
      </div>
    </form>
  );
}

export default function Careers() {
  const [openPosting, setOpenPosting] = useState<string | null>(null);
  const [applyFor, setApplyFor] = useState<string | null>(null);

  return (
    <main className="bg-[#0a1628]">
      <section className="relative min-h-[60vh] flex flex-col justify-end pb-24 overflow-hidden bg-[#0a1628] border-b border-[rgba(201,168,76,0.2)]">
        <div className="absolute bottom-0 right-[-2%] pointer-events-none select-none overflow-hidden z-0"><span className="type-watermark text-white">JOIN</span></div>
        <div className="container mx-auto px-6 max-w-[1400px] relative z-10 pt-36">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="type-micro text-[#c9a84c] mb-8">About — Careers</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="type-h1-hero text-white mb-10 max-w-4xl">Careers at<br /><span className="text-[#c9a84c]">IOM Transit</span></motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="type-body-large text-[#8a9bb5] max-w-[560px]">We are building Africa's most trusted logistics company. We hire professionals who bring precision, discipline and genuine passion for the movement of goods across borders.</motion.p>
        </div>
      </section>

      <section className="py-32 bg-[#0a1628] border-t border-[rgba(201,168,76,0.2)]">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="mb-16">
            <p className="type-micro text-[#c9a84c] mb-4">Open Positions</p>
            <h2 className="type-h2 text-white">Current Vacancies</h2>
          </div>

          <div className="space-y-2">
            {POSTINGS.map((post, i) => (
              <motion.div key={post.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="border border-[rgba(201,168,76,0.15)] hover:border-[rgba(201,168,76,0.4)] transition-colors">
                <button onClick={() => setOpenPosting(openPosting === post.title ? null : post.title)} className="w-full flex items-center justify-between px-8 py-6 text-left">
                  <div className="flex flex-wrap gap-6 items-center">
                    <span className="type-h4 text-white">{post.title}</span>
                    <span className="flex items-center gap-1 type-micro text-[#8a9bb5]"><MapPin size={12} /> {post.location}</span>
                    <span className="flex items-center gap-1 type-micro text-[#8a9bb5]"><Briefcase size={12} /> {post.department}</span>
                    <span className="flex items-center gap-1 type-micro text-[#8a9bb5]"><Clock size={12} /> {post.type}</span>
                    <span className="flex items-center gap-1 type-micro text-[#c9a84c]"><DollarSign size={12} /> {post.salary}</span>
                  </div>
                  <ChevronDown className={`text-[#c9a84c] w-6 h-6 shrink-0 transition-transform ${openPosting === post.title ? 'rotate-180' : ''}`} />
                </button>

                {openPosting === post.title && (
                  <div className="px-8 pb-10 border-t border-[rgba(201,168,76,0.1)]">
                    {applyFor === post.title ? (
                      <div className="pt-8">
                        <ApplicationForm position={post.title} onClose={() => setApplyFor(null)} />
                      </div>
                    ) : (
                      <div className="pt-8 space-y-8">
                        <div>
                          <p className="type-micro text-[#c9a84c] mb-5">About the Role</p>
                          {post.description.map((para, j) => <p key={j} className="type-body text-[#8a9bb5] mb-4 leading-relaxed">{para}</p>)}
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                          <div>
                            <p className="type-micro text-[#c9a84c] mb-4">Responsibilities</p>
                            <div className="space-y-2">
                              {post.responsibilities.map(r => <div key={r} className="flex gap-3"><div className="w-1.5 h-1.5 bg-[#c9a84c] mt-2 shrink-0" /><p className="type-body-small text-[#8a9bb5]">{r}</p></div>)}
                            </div>
                          </div>
                          <div>
                            <p className="type-micro text-[#c9a84c] mb-4">Requirements</p>
                            <div className="space-y-2">
                              {post.requirements.map(r => <div key={r} className="flex gap-3"><div className="w-1.5 h-1.5 bg-[#c9a84c] mt-2 shrink-0" /><p className="type-body-small text-[#8a9bb5]">{r}</p></div>)}
                            </div>
                          </div>
                        </div>
                        <button onClick={() => setApplyFor(post.title)} className="bg-[#c9a84c] text-[#0a1628] px-10 py-4 type-btn font-bold tracking-widest uppercase hover:bg-white transition-colors">
                          Apply for This Position
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
