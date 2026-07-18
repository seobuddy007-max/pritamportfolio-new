"use client";

import { useState, useRef, useEffect } from "react";
import { ShieldCheck, Star, Users, Brain, Code, BarChart, Award } from "lucide-react";

const SKILLS = [
  { name: "5+ Years Exp", icon: Award, desc: "Years of consulting expertise" },
  { name: "SEO Strategy", icon: Brain, desc: "High-intent keyword layouts" },
  { name: "Technical SEO", icon: Code, desc: "Speed & schema architectures" },
  { name: "Local SEO", icon: Users, desc: "Google Map packs & local search" },
  { name: "Google Ads", icon: BarChart, desc: "Paid search lead capture" },
  { name: "Website Dev", icon: Code, desc: "Next.js/React engineering" },
  { name: "Web Analytics", icon: ShieldCheck, desc: "Data compliance & GA4 graphs" }
];

export default function ExpertiseWheel() {
  const containerRef = useRef<HTMLDivElement>(null);
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

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || !isDesktop) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Normalize coordinates relative to center (-0.5 to 0.5)
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
      className="relative py-28 bg-[#FFFFFF] overflow-hidden px-6 border-b border-gray-100 flex flex-col items-center"
    >
      {/* Background soft glows */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-[#EAF3FF] rounded-full filter blur-[100px] opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full text-center relative z-10">
        
        {/* Header */}
        <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF]">
          Core Intelligence
        </span>
        <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-gray-900 mt-2 mb-20 tracking-tight">
          Consultant <span className="text-gradient">Expertise Wheel</span>
        </h2>

        {/* Orbit Wheel container */}
        <div className="relative w-full max-w-[600px] h-[400px] sm:h-[500px] mx-auto flex items-center justify-center">
          
          {/* SVG Orbit Rings (Rotated and tilted in 3D perspective) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] border border-[#0066ff]/10 rounded-full absolute animate-spin" style={{ animationDuration: "40s" }}></div>
            <div className="w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] border border-dashed border-[#7dd3fc]/20 rounded-full absolute animate-spin" style={{ animationDuration: "25s", animationDirection: "reverse" }}></div>
          </div>

          {/* Center Hub: Pritam Chatterjee */}
          <div
            className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#0F172A] border-4 border-[#0066FF] flex flex-col items-center justify-center text-white shadow-2xl z-20 relative transition-transform duration-300 pointer-events-none"
            style={{
              transform: `translate3d(${coords.x * 20}px, ${coords.y * 20}px, 0px)`,
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF] animate-ping absolute top-4"></div>
            <span className="text-[10px] font-bold text-[#4DA3FF] uppercase tracking-wider mb-1">Consultant</span>
            <h3 className="font-display font-black text-sm sm:text-base text-center px-4 leading-tight">
              Pritam <br /> Chatterjee
            </h3>
            <span className="text-[9px] text-gray-400 mt-2 font-medium">SEO & Growth</span>
          </div>

          {/* Orbit Nodes */}
          {SKILLS.map((skill, idx) => {
            const SkillIcon = skill.icon;
            
            // Calculate orbital coordinates
            const count = SKILLS.length;
            const angle = (idx * 2 * Math.PI) / count;
            const radius = isDesktop ? 200 : 130; // Orbit radius
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            // Apply interactive offsets
            const parallaxX = coords.x * (40 + idx * 5);
            const parallaxY = coords.y * (40 + idx * 5);

            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveSkill(skill)}
                className="absolute w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white border border-gray-200/80 shadow-md flex items-center justify-center cursor-pointer hover:border-[#0066FF] hover:text-[#0066FF] hover:shadow-lg hover:shadow-[#0066ff]/10 z-10 transition-transform duration-300"
                style={{
                  transform: `translate3d(${x + parallaxX}px, ${y + parallaxY}px, 0px) scale(${activeSkill?.name === skill.name ? 1.15 : 1})`,
                }}
              >
                <SkillIcon className="w-5 h-5" />
                
                {/* Node Tooltip Label */}
                <div className="absolute -bottom-7 bg-white border border-gray-100 shadow-sm px-2 py-0.5 rounded-md text-[10px] font-bold whitespace-nowrap opacity-80 pointer-events-none">
                  {skill.name}
                </div>
              </div>
            );
          })}
        </div>

        {/* Orbit Node Details display */}
        <div className="h-16 max-w-sm mx-auto mt-8 text-center text-xs text-gray-500 italic">
          {activeSkill ? (
            <div className="animate-fade-in">
              <strong className="text-[#0066FF] block not-italic font-bold text-sm mb-1">
                {activeSkill.name}
              </strong>
              <span>{activeSkill.desc}</span>
            </div>
          ) : (
            <span>Hover over any orbit node to inspect expertise credentials.</span>
          )}
        </div>

      </div>
    </section>
  );
}
