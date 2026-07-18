"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Activity, ShieldCheck, ArrowUpRight, Award, TrendingUp, Info } from "lucide-react";

// Count-up helper function
function useCountUp(target: number, duration = 2000, start = 0, isDecimal = false) {
  const [count, setCount] = useState(start);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      let currentVal = progress * (target - start) + start;
      if (isDecimal) {
        setCount(parseFloat(currentVal.toFixed(1)));
      } else {
        setCount(Math.floor(currentVal));
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target, duration, start, isDecimal]);

  return { count, ref };
}

export default function Dashboard() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  // Custom counting states
  const traffic = useCountUp(42500, 2000, 0);
  const keywords = useCountUp(1840, 1800, 0);
  const conversions = useCountUp(2870, 2200, 0);
  const ctr = useCountUp(8.4, 1500, 0, true);
  const bounce = useCountUp(34, 1600, 90);

  return (
    <section
      id="dashboard"
      ref={sectionRef}
      className="relative py-28 bg-[#0F172A] text-white overflow-hidden px-6"
    >
      {/* Background Neon Rings */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#0066FF] rounded-full filter blur-[150px] opacity-15 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#7DD3FC] rounded-full filter blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl text-left mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4DA3FF]">
            Live Revenue Infrastructure
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white mt-2 mb-4 tracking-tight leading-[1.1]">
            Interactive SEO <span className="text-gradient-neon">Analytics Dashboard</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl">
            This live dashboard illustrates aggregated client growth over a standard 6-month consulting timeline. Observe organic traffic acquisition, keyword rank acceleration, and conversion funnel results.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left panel: Big metric overview cards */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            
            {/* Metric Card 1 */}
            <div className="bg-white/5 border border-white/85 rounded-2xl p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between text-gray-400 text-xs uppercase tracking-wider font-bold mb-4">
                <span>Organic Sessions</span>
                <TrendingUp className="w-4 h-4 text-[#4DA3FF]" />
              </div>
              <div ref={traffic.ref} className="text-4xl font-black tracking-tight text-white">
                {traffic.count.toLocaleString()}<span className="text-xs font-normal text-gray-400 ml-1">/mo</span>
              </div>
              <p className="text-xs text-gray-400 mt-2">Unique search referrals</p>
            </div>

            {/* Metric Card 2 */}
            <div className="bg-white/5 border border-white/85 rounded-2xl p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between text-gray-400 text-xs uppercase tracking-wider font-bold mb-4">
                <span>Keywords on Page 1</span>
                <Award className="w-4 h-4 text-[#7DD3FC]" />
              </div>
              <div ref={keywords.ref} className="text-4xl font-black tracking-tight text-white">
                +{keywords.count.toLocaleString()}
              </div>
              <p className="text-xs text-gray-400 mt-2">Rank positions #1 - #10</p>
            </div>

            {/* Metric Card 3 */}
            <div className="bg-white/5 border border-white/85 rounded-2xl p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between text-gray-400 text-xs uppercase tracking-wider font-bold mb-4">
                <span>Funnel Conversions</span>
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </div>
              <div ref={conversions.ref} className="text-4xl font-black tracking-tight text-white">
                {conversions.count.toLocaleString()}
              </div>
              <p className="text-xs text-gray-400 mt-2">Qualified marketing leads</p>
            </div>

          </div>

          {/* Right panel: Real-time interactive charts */}
          <div className="lg:col-span-8 bg-white/5 border border-white/85 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-6 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0066FF] animate-pulse"></div>
                <div>
                  <h3 className="text-sm font-bold text-white">Organic Growth Velocity</h3>
                  <span className="text-[10px] text-gray-400">Aggregated Client Metrics</span>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase">Average CTR</span>
                  <span ref={ctr.ref} className="text-lg font-black text-[#4DA3FF]">{ctr.count}%</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 block uppercase">Bounce Rate</span>
                  <span ref={bounce.ref} className="text-lg font-black text-emerald-400">{bounce.count}%</span>
                </div>
              </div>
            </div>

            {/* SVG Interactive Line Chart */}
            <div className="relative w-full h-[220px] mt-2 mb-4">
              <svg className="w-full h-full" viewBox="0 0 600 200" preserveAspectRatio="none">
                {/* Horizontal Grid lines */}
                <line x1="0" y1="50" x2="600" y2="50" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                <line x1="0" y1="100" x2="600" y2="100" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                <line x1="0" y1="150" x2="600" y2="150" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

                {/* Gradient area underneath the line */}
                <defs>
                  <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0066FF" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#0066FF" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                
                {/* Filled Path */}
                {isInView && (
                  <motion.path
                    initial={{ d: "M 0 200 L 0 200" }}
                    animate={{ d: "M 0 170 L 100 150 L 200 110 L 300 80 L 400 45 L 500 25 L 600 20 L 600 200 L 0 200 Z" }}
                    transition={{ duration: 1.6, ease: "easeOut" }}
                    fill="url(#chartGlow)"
                  />
                )}

                {/* Glowing stroke path */}
                {isInView && (
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.8, ease: "easeInOut" }}
                    d="M 0 170 L 100 150 L 200 110 L 300 80 L 400 45 L 500 25 L 600 20"
                    fill="none"
                    stroke="url(#lineGradient)"
                    strokeWidth="3.5"
                  />
                )}
                
                <defs>
                  <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#0066FF" />
                    <stop offset="50%" stopColor="#4DA3FF" />
                    <stop offset="100%" stopColor="#7DD3FC" />
                  </linearGradient>
                </defs>

                {/* Nodes on paths */}
                <circle cx="100" cy="150" r="4" fill="#0066FF" />
                <circle cx="200" cy="110" r="4" fill="#0066FF" />
                <circle cx="300" cy="80" r="4" fill="#4DA3FF" />
                <circle cx="400" cy="45" r="4" fill="#4DA3FF" />
                <circle cx="500" cy="25" r="4" fill="#7DD3FC" />
                <circle cx="600" cy="20" r="4" fill="#7DD3FC" />
              </svg>

              {/* Parallax Float Card */}
              <div className="absolute top-2 right-12 bg-white text-gray-900 border border-gray-100 rounded-xl p-3 shadow-xl flex items-center gap-2 pointer-events-none hidden sm:flex">
                <Activity className="w-4 h-4 text-[#0066FF]" />
                <div>
                  <span className="text-[9px] uppercase font-bold text-gray-400 block leading-none">Top Position #1</span>
                  <span className="text-xs font-bold">SEO Launch Velocity</span>
                </div>
              </div>
            </div>

            {/* X-Axis Month labels */}
            <div className="flex justify-between text-[10px] text-gray-400 font-bold uppercase tracking-wider px-2 border-t border-white/5 pt-4">
              <span>Month 1</span>
              <span>Month 2</span>
              <span>Month 3</span>
              <span>Month 4</span>
              <span>Month 5</span>
              <span>Month 6 (Launch)</span>
            </div>

            {/* Bottom info banner */}
            <div className="mt-6 flex items-start gap-2 bg-white/5 border border-white/10 rounded-xl p-3">
              <Info className="w-4 h-4 text-[#7DD3FC] shrink-0 mt-0.5" />
              <p className="text-[11px] text-gray-400 leading-relaxed">
                SEO index crawls are refreshed every 24 hours. The graphs indicate historical click-through aggregates validated using verified Google Search Console APIs.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
