"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Search, Eye, Users, TrendingUp, Sparkles } from "lucide-react";

const STAGES = [
  {
    title: "1. Search Visibility",
    desc: "Index optimization and entity structuring boost search visibility. Your brand becomes highly crawlable, dominating premium commercial keywords.",
    metrics: "Impressions +410%",
    icon: Search,
    color: "#0066FF"
  },
  {
    title: "2. Website Traffic",
    desc: "High ranking translates directly to highly qualified clicks. Intent-matching keeps bounce rates low and engagement metrics strong.",
    metrics: "CTR Increase: +3.2x",
    icon: Eye,
    color: "#4DA3FF"
  },
  {
    title: "3. Lead Generation",
    desc: "Engineered user landing experiences and clean CTAs prompt qualified buyers to book consults, schedule calls, and request audits.",
    metrics: "Conversion Rate: 4.8%",
    icon: Users,
    color: "#7DD3FC"
  },
  {
    title: "4. Sales Growth",
    desc: "Qualified leads turn directly into active sales pipeline and recurring client acquisitions, achieving high ROI and scaling business operations.",
    metrics: "Pipeline ROI: 312%",
    icon: TrendingUp,
    color: "#0F172A"
  }
];

export default function GrowthJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll inside the journey container for the glowing connecting line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section
      id="journey"
      ref={containerRef}
      className="relative py-28 bg-[#FFFFFF] overflow-hidden px-6"
    >
      {/* Background visual element */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#EAF3FF] rounded-full filter blur-[100px] opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF]">
          Digital Execution Model
        </span>
        <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-gray-900 mt-2 mb-16 tracking-tight">
          The 3D Digital <span className="text-gradient">Growth Journey</span>
        </h2>

        {/* Timeline container */}
        <div className="relative max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Vertical Connecting Path Line */}
          <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-1 bg-gray-100 rounded-full -translate-x-1/2 hidden sm:block">
            <motion.div
              style={{ scaleY, transformOrigin: "top" }}
              className="w-full h-full bg-gradient-to-b from-[#0066FF] via-[#4DA3FF] to-[#7DD3FC] rounded-full"
            />
          </div>

          {/* Timeline Stages */}
          <div className="flex flex-col gap-16 w-full">
            {STAGES.map((stage, idx) => {
              const isEven = idx % 2 === 0;
              const Icon = stage.icon;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="flex flex-col sm:flex-row items-start justify-start w-full relative"
                >
                  {/* Staggered layouts for larger screens */}
                  <div className={`flex w-full ${isEven ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                    
                    {/* Card Element */}
                    <div className="w-full sm:w-[45%] flex flex-col bg-white border border-gray-100 rounded-2xl p-6 shadow-md shadow-[#0066ff]/2 hover:shadow-xl hover:shadow-[#0066ff]/5 transition-all duration-300 relative group overflow-hidden glow-card">
                      
                      {/* Interactive Accent Glow */}
                      <div
                        className="absolute -right-10 -top-10 w-24 h-24 rounded-full filter blur-[30px] opacity-10 transition-opacity group-hover:opacity-20"
                        style={{ backgroundColor: stage.color }}
                      ></div>

                      {/* Header */}
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                          style={{ backgroundColor: stage.color }}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-lg text-gray-900">
                            {stage.title}
                          </h3>
                          <span
                            className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                            style={{
                              backgroundColor: `${stage.color}15`,
                              color: stage.color,
                            }}
                          >
                            {stage.metrics}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-gray-500 leading-relaxed mb-4">
                        {stage.desc}
                      </p>

                      {/* Link Audit CTA trigger */}
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-[#0066FF] hover:underline cursor-pointer">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Activate this stage</span>
                      </div>
                    </div>

                    {/* Middle Timeline Node Circle */}
                    <div className="absolute left-8 md:left-1/2 w-8 h-8 rounded-full border-4 border-white shadow-md -translate-x-1/2 flex items-center justify-center top-6 z-10 bg-white group-hover:scale-110 transition-transform duration-200 hidden sm:flex">
                      <div
                        className="w-2.5 h-2.5 rounded-full animate-pulse"
                        style={{ backgroundColor: stage.color }}
                      />
                    </div>

                    {/* Empty Space for alignment balance */}
                    <div className="w-0 sm:w-[45%] hidden sm:block"></div>

                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
