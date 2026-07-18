"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, TrendingUp, Calendar, Zap } from "lucide-react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: 1,
    title: "Apex E-commerce Scale",
    niche: "B2B E-commerce",
    duration: "6 Months Strategy",
    beforeTraffic: "12,400/mo",
    afterTraffic: "48,800/mo",
    growth: "+293%",
    ranking: "140+ Keywords in Top 3",
    leadGrowth: "+214% Sales Orders",
    summary: "Complete Technical SEO rebuild combined with content category silo restructuring. Solved server rendering crawl budget blockages, and pushed high-intent transaction terms to position #1.",
    bgGradient: "from-[#0066FF] to-[#4DA3FF]",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Global SaaS Lead Flow",
    niche: "Enterprise Software",
    duration: "4 Months Strategy",
    beforeTraffic: "1,500/mo",
    afterTraffic: "8,900/mo",
    growth: "+493%",
    ranking: "Avg Position 24 → 3.1",
    leadGrowth: "+310% Demos Booked",
    summary: "Built a programmatic content graph targeting high-competition competitor alternatives. Cleaned Core Web Vitals (CLS/LCP) and implemented FAQ schema maps, tripling organic signups.",
    bgGradient: "from-[#4DA3FF] to-[#7DD3FC]",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Metro Healthcare Partners",
    niche: "Local Medical Firm",
    duration: "5 Months Strategy",
    beforeTraffic: "5,100/mo",
    afterTraffic: "22,300/mo",
    growth: "+337%",
    ranking: "Local Pack Domination",
    leadGrowth: "+180% Calls & Bookings",
    summary: "Structured local business schema grids, optimized Google Business listings, and localized search landing structures. Boosted local organic search visibility for city clinical categories.",
    bgGradient: "from-[#7DD3FC] to-[#0F172A]",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800"
  }
];

export default function ProjectShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section
      id="portfolio"
      className="relative py-28 bg-[#FFFFFF] overflow-hidden px-6 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF]">
              Case Studies & Proof
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-gray-900 mt-2 tracking-tight leading-[1.1]">
              Verified Growth <span className="text-gradient">Case Studies</span>
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-sm leading-relaxed text-left">
            Real organic ranking metrics. We build long-term search authority and paid traffic efficiency for B2B and E-commerce companies.
          </p>
        </div>

        {/* Dynamic Hover-Expand Accordion Grid */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch w-full min-h-[500px]">
          {PROJECTS.map((project, idx) => {
            const isActive = activeIdx === idx;

            return (
              <div
                key={project.id}
                onMouseEnter={() => setActiveIdx(idx)}
                className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 overflow-hidden transition-all duration-500 cursor-pointer border ${
                  isActive
                    ? "lg:flex-[2.5] bg-[#0F172A] text-white border-[#0066ff]/30 shadow-2xl shadow-[#0066ff]/10"
                    : "lg:flex-[1] bg-gray-50 text-gray-700 border-gray-100 hover:bg-gray-100/50"
                }`}
              >
                
                {/* Background Accent Gradients (Active Card Only) */}
                {isActive && (
                  <div className="absolute top-0 right-0 w-80 h-80 bg-[#0066FF] rounded-full filter blur-[120px] opacity-20 pointer-events-none"></div>
                )}

                {/* Top Section */}
                <div className="relative z-10 text-left">
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                        isActive ? "bg-white/10 text-[#4DA3FF]" : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {project.niche}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-gray-400">
                      <Calendar className="w-3.5 h-3.5" />
                      {project.duration}
                    </span>
                  </div>

                  <h3
                    className={`font-display font-black tracking-tight transition-all duration-300 ${
                      isActive ? "text-2xl sm:text-3xl mb-3 text-white" : "text-xl text-gray-900"
                    }`}
                  >
                    {project.title}
                  </h3>

                  {/* Expanded Content Details */}
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-400 text-sm leading-relaxed max-w-xl mb-6"
                    >
                      {project.summary}
                    </motion.p>
                  )}
                </div>

                {/* Growth Metrics Section */}
                <div className="relative z-10 my-8">
                  {isActive ? (
                    /* Detailed Expanded Metrics */
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="grid grid-cols-2 sm:grid-cols-4 gap-6 bg-white/5 border border-white/5 rounded-2xl p-6"
                    >
                      <div>
                        <span className="text-[10px] uppercase text-gray-400 font-bold block mb-1">
                          Before Traffic
                        </span>
                        <div className="text-sm font-semibold line-through text-gray-500">
                          {project.beforeTraffic}
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] uppercase text-gray-400 font-bold block mb-1">
                          Organic Traffic
                        </span>
                        <div className="text-xl font-black text-white flex items-center gap-1">
                          <span>{project.afterTraffic}</span>
                          <TrendingUp className="w-4 h-4 text-[#4DA3FF]" />
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] uppercase text-gray-400 font-bold block mb-1">
                          Growth Rate
                        </span>
                        <div className="text-xl font-black text-emerald-400">
                          {project.growth}
                        </div>
                      </div>

                      <div>
                        <span className="text-[10px] uppercase text-gray-400 font-bold block mb-1">
                          Rank Performance
                        </span>
                        <div className="text-sm font-bold text-[#7DD3FC]">
                          {project.ranking}
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    /* Collapsed Card Minimal Metric */
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase">Growth Multiplier</div>
                      <div className="text-4xl font-black text-[#0066FF] tracking-tight">
                        {project.growth}
                      </div>
                      <div className="text-[10px] text-gray-400 mt-1">{project.ranking}</div>
                    </div>
                  )}
                </div>

                {/* Bottom Card elements */}
                <div className="relative z-10 flex items-center justify-between border-t border-gray-100/10 pt-4">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#0066FF]" />
                    <span className={`text-xs font-bold ${isActive ? "text-[#7DD3FC]" : "text-gray-500"}`}>
                      {project.leadGrowth}
                    </span>
                  </div>
                  
                  {isActive && (
                    <a
                      href="#contact"
                      className="group flex items-center gap-1.5 bg-[#0066FF] hover:bg-[#0055DD] text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
