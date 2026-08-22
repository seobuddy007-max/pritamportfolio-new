"use client";

import { useState, useRef, useEffect } from "react";
import { ShieldCheck, Brain, Code, BarChart, Award, Sparkles, Target, Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SKILLS = [
  { name: "5+ Years Exp", icon: Award, desc: "Years of high-impact strategic consulting", color: "from-blue-600 to-indigo-600" },
  { name: "SEO Strategy", icon: Brain, desc: "High-intent keyword silos & semantic architecture", color: "from-cyan-500 to-blue-600" },
  { name: "Technical SEO", icon: Code, desc: "Crawl optimization, Core Web Vitals & JSON-LD graphs", color: "from-[#0066FF] to-blue-700" },
  { name: "Local SEO", icon: Target, desc: "Google Map Pack domination & NAP citation networks", color: "from-sky-500 to-blue-600" },
  { name: "Google Ads", icon: BarChart, desc: "High-ROAS paid search & Shopping campaigns", color: "from-indigo-600 to-purple-600" },
  { name: "Website Dev", icon: Zap, desc: "Conversion-first Next.js & React engineering", color: "from-blue-600 to-cyan-600" },
  { name: "Web Analytics", icon: ShieldCheck, desc: "GA4 compliance, GTM tracking & custom dashboards", color: "from-[#0066FF] to-indigo-700" },
];

export default function ExpertiseWheel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const [scrollRotation, setScrollRotation] = useState(0);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [activeSkill, setActiveSkill] = useState<typeof SKILLS[0] | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Non-blocking GSAP ScrollTrigger for 3D scroll rotation
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let rafId: number;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          cancelAnimationFrame(rafId);
          rafId = requestAnimationFrame(() => {
            setScrollRotation(self.progress * Math.PI * 2);
          });
        },
      });
    });

    return () => {
      cancelAnimationFrame(rafId);
      ctx.revert();
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || !isDesktop) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setCoords({ x, y });
  };

  const handleMouseLeave = () => {
    setCoords({ x: 0, y: 0 });
    setActiveSkill(null);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative py-28 bg-[#FFFFFF] overflow-hidden px-6 border-b border-gray-150 flex flex-col items-center select-none"
    >
      {/* Background Soft 3D Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#EAF3FF] rounded-full filter blur-[120px] opacity-70 pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-100/50 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full text-center relative z-10">
        
        {/* Header */}
        <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF] mb-2 block">
          Core Intelligence
        </span>
        <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-gray-900 mt-1 mb-3 tracking-tight">
          Consultant <span className="text-gradient">3D Expertise Matrix</span>
        </h2>
        <p className="text-gray-500 text-sm max-w-xl mx-auto mb-16 font-medium">
          Scroll down to rotate the 3D orbital framework in real time. Hover over any sphere to inspect skills.
        </p>

        {/* 3D Stage Container */}
        <div 
          className="relative w-full max-w-[720px] h-[500px] sm:h-[580px] mx-auto flex items-center justify-center"
          style={{ perspective: "1200px" }}
        >
          
          {/* Tilted 3D Orbit Plane */}
          <div
            ref={orbitRef}
            className="absolute inset-0 flex items-center justify-center transition-transform duration-200 ease-out"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateX(${18 + coords.y * -20}deg) rotateY(${coords.x * 20}deg)`,
            }}
          >
            {/* SVG Orbit Rings */}
            <div className="w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] border-2 border-[#0066ff]/20 rounded-full absolute animate-spin" style={{ animationDuration: "40s" }}></div>
            <div className="w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] border border-dashed border-[#0066ff]/30 rounded-full absolute animate-spin" style={{ animationDuration: "25s", animationDirection: "reverse" }}></div>
            
            {/* Center Core Badge: Pritam Chatterjee */}
            <div
              className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-[#0F172A] border-4 border-[#0066FF] flex flex-col items-center justify-center text-white shadow-[0_20px_50px_rgba(0,102,255,0.3)] z-30 relative pointer-events-none"
              style={{
                transform: `translateZ(20px)`,
              }}
            >
              <div className="w-2 h-2 rounded-full bg-[#0066FF] animate-ping absolute top-4"></div>
              <span className="text-[10px] font-extrabold text-[#4DA3FF] uppercase tracking-widest mb-1">Lead Consultant</span>
              <h3 className="font-display font-black text-base sm:text-lg text-center px-4 leading-tight text-white drop-shadow-sm">
                Pritam <br /> Chatterjee
              </h3>
              <span className="text-[10px] text-gray-400 mt-2 font-semibold tracking-wide">SEO & Growth Architect</span>
            </div>

            {/* 3D Round Spherical Orbit Nodes */}
            {SKILLS.map((skill, idx) => {
              const SkillIcon = skill.icon;
              const count = SKILLS.length;
              
              // Angle calculated with smooth scroll rotation
              const angle = (idx * 2 * Math.PI) / count + scrollRotation;
              const radiusX = isDesktop ? 230 : 150;
              const radiusY = isDesktop ? 190 : 125;
              
              // 3D coordinates
              const x = radiusX * Math.cos(angle);
              const y = radiusY * Math.sin(angle);
              const z = radiusX * Math.sin(angle);

              // Depth perspective
              const depthNorm = (z + radiusX) / (2 * radiusX);
              const scale = 0.92 + depthNorm * 0.22;
              const zIndex = Math.round(depthNorm * 100);

              const isActive = activeSkill?.name === skill.name;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveSkill(skill)}
                  className="absolute cursor-pointer transition-all duration-300 group"
                  style={{
                    transform: `translate3d(${x}px, ${y}px, ${z}px) scale(${isActive ? scale * 1.2 : scale})`,
                    zIndex: isActive ? 300 : zIndex,
                  }}
                >
                  {/* 3D Round Sphere Container */}
                  <div className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${skill.color} p-[2px] shadow-lg transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(0,102,255,0.6)]`}>
                    
                    {/* Glass Specular Highlight */}
                    <div className="absolute top-1 left-2 w-5 h-2.5 bg-white/50 rounded-full blur-[1px] pointer-events-none transform -rotate-12"></div>
                    
                    {/* Sphere Inner Core */}
                    <div className="w-full h-full rounded-full bg-[#0F172A] flex items-center justify-center text-white group-hover:bg-[#0066FF] transition-colors duration-300">
                      <SkillIcon className="w-6 h-6 text-[#4DA3FF] group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* High Contrast Label Badge */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white border border-gray-200 shadow-md px-3 py-1 rounded-full text-[11px] font-bold text-gray-900 whitespace-nowrap group-hover:border-[#0066FF] group-hover:text-[#0066FF] transition-colors pointer-events-none">
                    {skill.name}
                  </div>
                </div>
              );
            })}

          </div>

        </div>

        {/* Orbit Node Details Display Card */}
        <div className="h-20 max-w-md mx-auto mt-6 text-center">
          {activeSkill ? (
            <div className="animate-fade-in bg-white border border-[#0066FF]/30 p-4 rounded-xl shadow-lg">
              <strong className="text-[#0066FF] block font-bold text-sm mb-0.5">
                {activeSkill.name}
              </strong>
              <span className="text-gray-600 text-xs font-medium">{activeSkill.desc}</span>
            </div>
          ) : (
            <div className="bg-gray-50 border border-gray-200 p-3.5 rounded-xl text-xs text-gray-500 italic font-medium">
              ✨ Scroll down to rotate the 3D wheel or hover over any sphere to inspect Pritam's consulting skills.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
