"use client";

import { useState } from "react";
import { Laptop, Search, BarChart4, ArrowUpRight, HelpCircle, Code, Star, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const SERVICES = [
  {
    title: "Website Design & Development",
    desc: "Speed-optimized Next.js & React architectures. We build bespoke custom-designed websites engineered for high speed, premium visuals, and strong search engine crawls.",
    features: ["Responsive Apps", "Bespoke Portfolios", "E-commerce Platforms", "Lead Capture Pages"],
    metrics: { label: "Performance Score", val: "99/100", note: "Core Web Vitals Checked" },
    cubeText: "DEV",
    icon: Laptop,
    accent: "#0066FF"
  },
  {
    title: "SEO Services & Strategy",
    desc: "Full-scale organic traffic growth funnels. From deep technical infrastructure audits and rich schemas to local optimizations and high-level entity-focused content.",
    features: ["Technical SEO", "Local Pack SEO", "E-commerce Optimization", "Semantic Content Graph"],
    metrics: { label: "Organic Clicks", val: "+287%", note: "Avg 6-Month Increase" },
    cubeText: "SEO",
    icon: Search,
    accent: "#4DA3FF"
  },
  {
    title: "PPC & Lead Campaigns",
    desc: "Precision paid advertising campaigns. Stop wasting money on broad ad targeting—we align high-intent Google search ads with social media retargeting layers.",
    features: ["Google PPC Ads", "Facebook Pixel Funnels", "Conversion Retargeting", "ROI Analytics Dashboards"],
    metrics: { label: "Cost Per Lead", val: "-42%", note: "Average Client Savings" },
    cubeText: "PPC",
    icon: BarChart4,
    accent: "#0F172A"
  }
];

export default function ServicesCubes() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Rotation angles for 3D cubes on card hover
  const getCubeRotation = (idx: number) => {
    if (hoveredIdx === idx) {
      return "rotateX(145deg) rotateY(45deg)";
    }
    return "rotateX(-15deg) rotateY(25deg)";
  };

  return (
    <section
      id="services"
      className="relative py-28 bg-[#FFFFFF] overflow-hidden px-6 border-b border-gray-100"
    >
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#EAF3FF] rounded-full filter blur-[120px] opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF]">
              Specialist Capabilities
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-gray-900 mt-2 tracking-tight leading-[1.1]">
              Engineered Search <br />
              & <span className="text-gradient">Conversion Services</span>
            </h2>
          </div>
          <p className="text-gray-500 text-sm max-w-sm leading-relaxed text-left">
            We don't do generic brand marketing. We build data-backed customer acquisition channels that scale search visibility and PPC ROI.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => {
            const Icon = service.icon;

            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="group flex flex-col justify-between bg-white border border-gray-200/80 rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 relative overflow-hidden glow-card"
              >
                
                {/* 3D Interactive CSS Cube Container */}
                <div className="flex items-center justify-between mb-8">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
                    style={{ backgroundColor: service.accent }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* 3D Cube (GPU accelerated transforms) */}
                  <div className="cube-wrap pointer-events-none">
                    <div
                      className="cube"
                      style={{
                        transform: getCubeRotation(idx),
                        transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    >
                      <div className="cube-face face-front font-display font-black text-xs text-[#0066FF]">
                        {service.cubeText}
                      </div>
                      <div className="cube-face face-back font-display font-black text-xs text-[#4DA3FF]">
                        GROWTH
                      </div>
                      <div className="cube-face face-left font-display font-black text-xs text-gray-800">
                        ROI
                      </div>
                      <div className="cube-face face-right font-display font-black text-xs text-[#0066FF]">
                        LEADS
                      </div>
                      <div className="cube-face face-top font-display font-black text-xs text-gray-800">
                        DATA
                      </div>
                      <div className="cube-face face-bottom font-display font-black text-xs text-[#4DA3FF]">
                        TECH
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Details */}
                <div className="text-left mb-6">
                  <h3 className="font-display font-bold text-xl text-gray-900 mb-3 group-hover:text-[#0066FF] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  <ul className="flex flex-col gap-2.5">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs font-medium text-gray-600">
                        <CheckCircle className="w-4 h-4 text-[#0066FF] shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Floating Metric Card at Bottom */}
                <div className="border-t border-gray-100 pt-6 mt-4 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                      {service.metrics.label}
                    </div>
                    <div className="text-2xl font-black text-gray-900 tracking-tight">
                      {service.metrics.val}
                    </div>
                    <div className="text-[10px] text-gray-400">{service.metrics.note}</div>
                  </div>

                  <a
                    href="#contact"
                    className="w-10 h-10 rounded-xl bg-gray-50 text-gray-700 hover:bg-[#0066FF] hover:text-white flex items-center justify-center transition-all group-hover:shadow-lg group-hover:shadow-[#0066ff]/10"
                    aria-label="Request consultation"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
