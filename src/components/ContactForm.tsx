"use client";

import { FormEvent, useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";

export default function ContactForm() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "seo",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    // Simulate marketing lead API call (e.g., WordPress webhook or direct database sync)
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setFormState("success");
    
    // Trigger celebratory success confetti
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#0066FF", "#4DA3FF", "#7DD3FC"]
    });

    // Reset form after delay
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", service: "seo", message: "" });
      setFormState("idle");
    }, 6000);
  };

  return (
    <section
      id="contact"
      className="relative py-28 bg-[#0F172A] text-white overflow-hidden px-6"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#0066FF] rounded-full filter blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
        
        {/* Left Side: Dotted World Map & Info */}
        <div className="lg:col-span-6 flex flex-col justify-between text-left gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#4DA3FF]">
              Request Growth Strategy
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mt-2 mb-4 tracking-tight leading-[1.1]">
              Partner for <span className="text-gradient-neon">Digital Growth</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
              Ready to double your search impressions and paid ad ROI? Submit your website URL and marketing requirements to schedule a direct strategy alignment call.
            </p>
          </div>

          {/* Dotted World Map Vector (Vercel/Stripe aesthetic) */}
          <div className="relative w-full h-[240px] border border-white/5 bg-white/[0.02] rounded-2xl p-4 overflow-hidden flex items-center justify-center">
            {/* Pulsing City Nodes */}
            <div className="absolute top-[50%] left-[30%] w-2 h-2 bg-[#0066FF] rounded-full">
              <span className="absolute -inset-2 rounded-full border border-[#0066FF]/60 animate-ping"></span>
            </div>
            <div className="absolute top-[40%] left-[45%] w-2 h-2 bg-[#7DD3FC] rounded-full">
              <span className="absolute -inset-2 rounded-full border border-[#7DD3FC]/60 animate-ping"></span>
            </div>
            <div className="absolute top-[62%] left-[72%] w-2 h-2 bg-[#0066FF] rounded-full">
              <span className="absolute -inset-2 rounded-full border border-[#0066FF]/60 animate-ping"></span>
              <span className="absolute left-4 top-[-6px] text-[8px] bg-[#0F172A] border border-white/10 px-1.5 py-0.5 rounded text-white font-bold whitespace-nowrap">
                Kolkata Office
              </span>
            </div>
            <div className="absolute top-[68%] left-[75%] w-1.5 h-1.5 bg-[#4DA3FF] rounded-full"></div>
            
            {/* Stylized Dotted Map Grid SVG */}
            <svg viewBox="0 0 100 50" className="w-full h-full opacity-10" stroke="currentColor" strokeWidth="0.5">
              <pattern id="dotpattern" x="0" y="0" width="2" height="2" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.4" fill="white" />
              </pattern>
              <rect width="100" height="50" fill="url(#dotpattern)" />
            </svg>
            <div className="absolute bottom-3 left-4 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
              Global Client Node Network Map
            </div>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-400 border-t border-white/5 pt-6">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#4DA3FF]" />
              <div>
                <span className="text-[10px] text-gray-500 block uppercase font-bold">Primary Location</span>
                <span>Kolkata, West Bengal, India</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#7DD3FC]" />
              <div>
                <span className="text-[10px] text-gray-500 block uppercase font-bold">Inquiries</span>
                <span>contact@pritamchatterjee.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Lead Capture Form Card */}
        <div className="lg:col-span-6">
          <div className="bg-white/5 border border-white/85 rounded-3xl p-6 sm:p-8 relative">
            <AnimatePresence mode="wait">
              {formState === "success" ? (
                /* Success screen */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center text-center py-16 gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-2">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-display font-bold text-2xl">Strategy Request Sent!</h3>
                  <p className="text-gray-400 text-sm max-w-sm">
                    Thank you for reaching out, {formData.name}. Pritam Chatterjee will analyze your site metrics and send over an SEO diagnostics report within 24 hours.
                  </p>
                  <div className="flex items-center gap-2 text-xs text-[#4DA3FF] bg-[#0066FF]/10 border border-[#0066ff]/20 px-3 py-1.5 rounded-full mt-4">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Compliance Verified & Secured</span>
                  </div>
                </motion.div>
              ) : (
                /* Interactive Form fields */
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-4 text-left"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-[#0066FF] transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-1">
                        Corporate Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-[#0066FF] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-[#0066FF] transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-1">
                        Service Interested In
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-[#0066FF] transition-all text-gray-400"
                      >
                        <option value="seo" className="bg-[#0f172a]">SEO Optimization & Auditing</option>
                        <option value="webdev" className="bg-[#0f172a]">Next.js / Website Design</option>
                        <option value="ppc" className="bg-[#0f172a]">Google & Facebook Paid Ads</option>
                        <option value="fullstack" className="bg-[#0f172a]">Full Growth Consulting</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-1">
                      Project Brief / Website URL
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="List details about your website URL, search traffic goals, and budget constraints..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-[#0066FF] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="w-full flex items-center justify-center gap-2 bg-[#0066FF] hover:bg-[#0055DD] text-white py-3.5 rounded-xl font-bold transition-all mt-2 disabled:bg-gray-700 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-[#0066ff]/20 cursor-pointer"
                  >
                    {formState === "submitting" ? (
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                        <span>Analyzing site metrics...</span>
                      </div>
                    ) : (
                      <>
                        <span>Submit Strategy Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  
                  <div className="text-[10px] text-gray-500 text-center mt-2 flex items-center justify-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#4DA3FF]" />
                    <span>Free preliminary audit included. Response within 1 business day.</span>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
