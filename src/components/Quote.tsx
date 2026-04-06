"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export default function Quote() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    serviceRequired: "International Freight",
    cargoType: "General Cargo",
    origin: "",
    destination: "",
    estimatedWeight: "",
    preferredDate: "",
    additionalDetails: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate high-authority processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitted(true);
    } catch (error) {
      console.error("Submission failed:", error);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="quote" className="bg-navy-dark py-40 border-t border-white/5 relative overflow-hidden">
        {/* Cinematic Success Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[150px] animate-pulse" />
        
        <div className="container max-w-2xl mx-auto px-6 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-navy-mid/40 backdrop-blur-3xl p-16 border border-gold shadow-[0_0_50px_rgba(201,168,76,0.2)] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gold" />
            <div className="flex justify-center mb-8">
                <div className="h-20 w-20 rounded-full border-2 border-gold flex items-center justify-center bg-gold/10">
                    <CheckCircle2 size={40} className="text-gold" />
                </div>
            </div>
            <h2 className="font-heading text-5xl text-white mb-6 uppercase tracking-tighter">Command Logged</h2>
            <p className="text-white/60 text-xl mb-12 leading-tight font-light">
              Your global logistics inquiry has been successfully routed to our command center. A logistics specialist will contact you with a full quotation within <span className="text-gold font-bold">2 business hours.</span>
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="text-gold font-black uppercase tracking-[0.4em] text-[10px] border-b border-gold/30 pb-2 hover:border-gold transition-all"
            >
              Submit Another Authorization
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="bg-navy-dark py-40 border-t border-white/5 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(201,168,76,0.05),transparent_70%)] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
            
            {/* Left: Authority Copy */}
            <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-0.5 bg-gold" />
                    <span className="text-gold font-black tracking-[0.5em] text-[10px] uppercase">Quotation Gateway</span>
                </div>
                <h2 className="font-heading text-6xl md:text-8xl text-white mb-10 leading-none tracking-tight">Precision Pricing. Global Scale.</h2>
                <div className="space-y-8 mb-12 text-white/50 text-xl font-light leading-relaxed">
                    <p>Initialize your global logistics command with absolute certainty. Every shipment handled with the uncompromising precision of a global superpower.</p>
                    <div className="flex items-center gap-4 text-gold">
                        <ShieldCheck size={24} />
                        <span className="text-xs font-black uppercase tracking-widest">Sovereign Data Protection Active</span>
                    </div>
                </div>
                
                <div className="bg-white/5 p-10 border-l-2 border-gold flex flex-col gap-2">
                    <span className="text-white text-xs font-bold uppercase tracking-widest">Command Response Time</span>
                    <span className="text-gold font-heading text-4xl">&lt; 120 Minutes</span>
                </div>
            </div>

            {/* Right: The Command Form */}
            <div className="lg:col-span-7">
                <motion.form 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  onSubmit={handleSubmit} 
                  className="bg-navy-mid/20 backdrop-blur-2xl p-12 md:p-16 border border-white/5 shadow-3xl space-y-16 relative group overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 -skew-x-12 translate-x-16" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                    {[
                        { name: "fullName", label: "Full Name", type: "text", placeholder: "e.g. Ian Otollo" },
                        { name: "company", label: "Company", type: "text", placeholder: "e.g. Nexus Global" },
                        { name: "email", label: "Email Address", type: "email", placeholder: "i.otollo@iomtransit.app" },
                        { name: "phone", label: "Phone Number", type: "tel", placeholder: "+254 700 399 641" },
                    ].map((field) => (
                        <div key={field.name} className="flex flex-col gap-4 group/field">
                            <label className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 group-focus-within/field:text-gold transition-colors">{field.label}</label>
                            <input 
                                name={field.name}
                                type={field.type} 
                                required 
                                value={formData[field.name as keyof typeof formData]}
                                onChange={handleChange}
                                className="border-b border-white/5 py-3 text-white font-medium focus:outline-none focus:border-gold transition-all bg-transparent placeholder:text-white/5 text-xl"
                            />
                        </div>
                    ))}

                    <div className="flex flex-col gap-4 group/field">
                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 group-focus-within/field:text-gold transition-colors">Port of Origin</label>
                        <input name="origin" value={formData.origin} onChange={handleChange} placeholder="City/Country" className="border-b border-white/5 py-3 text-white font-medium focus:outline-none focus:border-gold bg-transparent text-xl placeholder:text-white/5" />
                    </div>

                    <div className="flex flex-col gap-4 group/field">
                        <label className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 group-focus-within/field:text-gold transition-colors">Port of Discharge</label>
                        <input name="destination" value={formData.destination} onChange={handleChange} placeholder="City/Country" className="border-b border-white/5 py-3 text-white font-medium focus:outline-none focus:border-gold bg-transparent text-xl placeholder:text-white/5" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-6">
                    <label className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30">Strategic Notes</label>
                    <textarea 
                      name="additionalDetails"
                      rows={3} 
                      value={formData.additionalDetails}
                      onChange={handleChange}
                      placeholder="Specify mission-critical logistics requirements..."
                      className="border border-white/5 p-6 text-white font-medium focus:outline-none focus:border-gold/30 bg-white/5 hover:bg-white/10 transition-all font-body text-xl resize-none placeholder:text-white/5"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-gold text-navy py-10 font-black uppercase tracking-[0.5em] text-xs hover:bg-gold-light transition-all flex items-center justify-center gap-6 group disabled:opacity-50 relative overflow-hidden"
                  >
                    <span className="relative z-10">{loading ? "Authorizing Logistics Command..." : "Finalize Quotation Command"}</span>
                    {!loading && <Zap size={20} className="relative z-10 group-hover:scale-125 transition-transform" fill="#0a1628" />}
                    <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  </button>
                </motion.form>
            </div>
        </div>
      </div>
    </section>
  );
}
