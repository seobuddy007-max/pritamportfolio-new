"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { Search, TrendingUp, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Dynamically import R3F HeroCanvas to prevent SSR bottlenecks and save bundle size
const HeroCanvas = dynamic(() => import("./HeroCanvas"), { ssr: false });

const QUERIES = [
  {
    q: "E-commerce SEO Services",
    vol: "2.1K",
    diff: "36",
    ctr: "6.9%",
    rank: ["#49", "#3"],
    sugg: [
      "ecommerce SEO services Shopify",
      "ecommerce SEO services pricing",
      "ecommerce SEO case study"
    ]
  },
  {
    q: "SEO Services in Kolkata",
    vol: "2.4K",
    diff: "38",
    ctr: "6.1%",
    rank: ["#47", "#3"],
    sugg: [
      "SEO services in Kolkata for startups",
      "SEO services in Kolkata price",
      "SEO services in Kolkata reviews"
    ]
  },
  {
    q: "Digital Marketing Consultant",
    vol: "5.1K",
    diff: "44",
    ctr: "4.8%",
    rank: ["#52", "#5"],
    sugg: [
      "digital marketing consultant near me",
      "digital marketing consultant fees",
      "digital marketing consultant vs agency"
    ]
  },
  {
    q: "Local SEO Expert",
    vol: "1.6K",
    diff: "29",
    ctr: "7.4%",
    rank: ["#38", "#2"],
    sugg: [
      "local SEO expert for small business",
      "local SEO expert cost",
      "local SEO expert Google Maps"
    ]
  },
  {
    q: "Website SEO Audit",
    vol: "3.3K",
    diff: "33",
    ctr: "8.2%",
    rank: ["#61", "#4"],
    sugg: [
      "free website SEO audit tool",
      "website SEO audit checklist",
      "website SEO audit report sample"
    ]
  },
  {
    q: "Google Ads Management",
    vol: "4.7K",
    diff: "41",
    ctr: "5.5%",
    rank: ["#55", "#6"],
    sugg: [
      "google ads management services",
      "google ads management cost",
      "google ads management agency"
    ]
  },
  {
    q: "Technical SEO Specialist",
    vol: "1.2K",
    diff: "31",
    ctr: "9.1%",
    rank: ["#41", "#2"],
    sugg: [
      "technical SEO specialist freelance",
      "technical SEO specialist skills",
      "technical SEO audit checklist"
    ]
  },
  {
    q: "SEO Consultant Near Me",
    vol: "2.9K",
    diff: "35",
    ctr: "7.0%",
    rank: ["#58", "#4"],
    sugg: [
      "seo consultant near me reviews",
      "seo consultant near me pricing",
      "best seo consultant near me"
    ]
  }
];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [queryIndex, setQueryIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  
  // Typing simulation state values
  const [currentRank, setCurrentRank] = useState(QUERIES[0].rank[0]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [rankGainText, setRankGainText] = useState("↑ tracking");

  // Mouse coords for card parallax tilt
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activeQuery = QUERIES[queryIndex];

  // Search Engine typing loop
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = activeQuery.q;
    const typingSpeed = isDeleting ? 25 : 60;

    const tick = () => {
      if (!isDeleting) {
        const nextText = fullText.substring(0, displayText.length + 1);
        setDisplayText(nextText);
        
        if (nextText === fullText) {
          setShowSuggestions(true);
          setCurrentRank(activeQuery.rank[0]);
          setRankGainText("↑ tracking");
          
          // Trigger rank improvement and pause
          timer = setTimeout(() => {
            setCurrentRank(activeQuery.rank[1]);
            const startRankVal = parseInt(activeQuery.rank[0].slice(1));
            const endRankVal = parseInt(activeQuery.rank[1].slice(1));
            setRankGainText(`↑ +${startRankVal - endRankVal} positions`);
            
            timer = setTimeout(() => {
              setIsDeleting(true);
            }, 2500);
          }, 80000 / 100); // Wait 800ms before rank lift
          return;
        }
      } else {
        const nextText = fullText.substring(0, displayText.length - 1);
        setDisplayText(nextText);
        
        if (nextText === "") {
          setShowSuggestions(false);
          setIsDeleting(false);
          setQueryIndex((prev) => (prev + 1) % QUERIES.length);
          return;
        }
      }
      timer = setTimeout(tick, typingSpeed);
    };

    timer = setTimeout(tick, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, queryIndex]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || !isDesktop) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen pt-28 pb-20 flex flex-col items-center justify-center bg-dot-grid overflow-hidden px-6"
    >
      {/* 3D WebGL Background (Desktop only) */}
      {isDesktop && <HeroCanvas />}

      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#EAF3FF] to-[#DCEBFF] rounded-full filter blur-[120px] opacity-70 pointer-events-none z-0 animate-pulse-glow" style={{ animation: "pulse-glow 12s ease-in-out infinite" }}></div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side Info */}
        <div className="lg:col-span-6 flex flex-col items-start text-left gap-6">
          <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-gray-200/80 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
              Available for new projects — Kolkata & Remote
            </span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-gray-900 leading-[1.05] tracking-tight">
            Search is a system. <br />
            I <span className="text-gradient">reverse-engineer</span> it.
          </h1>

          <p className="text-gray-500 text-sm sm:text-base max-w-xl leading-relaxed">
            Technical SEO, content strategy and paid media for brands that want to own page one — not rent it. Full-stack execution: audits, on-page, content, and Google & Meta ads under one roof.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-2">
            <a
              href="#contact"
              className="w-full sm:w-auto text-center bg-[#0066FF] hover:bg-[#0055DD] text-white px-8 py-3.5 rounded-xl text-sm font-bold transition-all hover:shadow-lg hover:shadow-[#0066ff]/20 active:scale-95 cursor-pointer"
            >
              Get a Free SEO Audit
            </a>
            <a
              href="#portfolio"
              className="w-full sm:w-auto text-center border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 px-8 py-3.5 rounded-xl text-sm font-bold transition-all cursor-pointer"
            >
              See the Results →
            </a>
          </div>

          {/* Trust stats row */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-100 w-full max-w-md">
            <div>
              <div className="text-xl font-black text-gray-900">40+</div>
              <div className="text-[10px] text-gray-400 font-bold uppercase">Client Accounts</div>
            </div>
            <div>
              <div className="text-xl font-black text-gray-900">7</div>
              <div className="text-[10px] text-gray-400 font-bold uppercase">Industries Served</div>
            </div>
            <div>
              <div className="text-xl font-black text-gray-900">#1–3</div>
              <div className="text-[10px] text-gray-400 font-bold uppercase">Target SERP Rank</div>
            </div>
          </div>
        </div>

        {/* Right Side: Exact Browser SERP Simulator */}
        <div className="lg:col-span-6 relative h-[500px] w-full flex items-center justify-center">
          
          {/* Main simulator card */}
          <div
            className="w-full max-w-lg bg-white rounded-3xl border border-gray-200 p-6 shadow-2xl transition-transform duration-300 relative"
            style={{
              transform: `translate3d(${mousePos.x * 20}px, ${mousePos.y * 20}px, 0px) rotateX(${mousePos.y * -10}deg) rotateY(${mousePos.x * 10}deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            {/* Topbar browser dots */}
            <div className="flex gap-1.5 mb-5">
              <span className="w-2.5 h-2.5 rounded-full bg-gray-200"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-gray-200"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-gray-200"></span>
            </div>

            {/* Search Input Box */}
            <div className="flex items-center w-full bg-white rounded-xl border border-gray-200 px-4 py-3.5 shadow-sm">
              <Search className="w-5 h-5 text-gray-400 mr-3 shrink-0" />
              <div className="flex-1 text-sm font-medium text-gray-800 select-none text-left">
                {displayText}
                <span className="inline-block w-[2px] h-[1.15em] bg-[#0066FF] animate-pulse ml-0.5 align-middle"></span>
              </div>
            </div>

            {/* Live suggestions list matching screenshot */}
            <div className="mt-2 min-h-[140px]">
              <AnimatePresence>
                {showSuggestions && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="flex flex-col border-t border-gray-100"
                  >
                    {activeQuery.sugg.map((s, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 py-3 border-b border-gray-100 text-sm text-gray-500 font-medium text-left"
                      >
                        <Search className="w-4 h-4 text-purple-400 shrink-0" />
                        <span>{s}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Blue Ranking Card matches screenshot */}
            <div className="mt-4 bg-gradient-to-r from-[#0A1F6B] to-[#1456F0] rounded-2xl p-5 text-white flex items-center justify-between gap-4">
              <div className="flex items-center gap-6 text-left">
                <div>
                  <div className="text-[10px] text-white/70 uppercase tracking-widest font-bold mb-1">
                    Ranking
                  </div>
                  <div className="text-4xl font-black font-mono leading-none">
                    {currentRank}
                  </div>
                </div>
                <div className="bg-emerald-500/20 text-[#6EE7B7] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {rankGainText}
                </div>
              </div>

              {/* Glowing SVG sparkline from screenshot */}
              <svg className="opacity-90 shrink-0" width="90" height="34" viewBox="0 0 90 34" fill="none">
                <polyline
                  points="0,30 15,26 30,28 45,18 60,20 75,8 90,4"
                  stroke="#00D4FF"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Bottom Metrics row matches screenshot */}
            <div className="flex gap-3 mt-4 text-left">
              <div className="flex-1 bg-gray-50 border border-gray-100 rounded-xl p-3">
                <div className="text-base font-black text-gray-900 font-mono">
                  {activeQuery.vol}
                </div>
                <div className="text-[9px] text-gray-400 uppercase font-bold tracking-wider mt-1">
                  Search Vol/mo
                </div>
              </div>
              <div className="flex-1 bg-gray-50 border border-gray-100 rounded-xl p-3">
                <div className="text-base font-black text-gray-900 font-mono">
                  {activeQuery.diff}
                </div>
                <div className="text-[9px] text-gray-400 uppercase font-bold tracking-wider mt-1">
                  Difficulty
                </div>
              </div>
              <div className="flex-1 bg-gray-50 border border-gray-100 rounded-xl p-3">
                <div className="text-base font-black text-gray-900 font-mono">
                  {activeQuery.ctr}
                </div>
                <div className="text-[9px] text-gray-400 uppercase font-bold tracking-wider mt-1">
                  CTR Gain
                </div>
              </div>
            </div>

            {/* Parallax Floating Badges overlapping the card */}
            {/* Top Right Floating Badge */}
            <div
              className="absolute -top-6 -right-6 bg-white border border-gray-200 rounded-2xl py-2.5 px-4 shadow-xl flex items-center gap-2 pointer-events-none text-xs font-mono font-bold text-[#0066FF] transition-transform duration-300"
              style={{
                transform: `translate3d(${mousePos.x * 35}px, ${mousePos.y * 35}px, 20px)`,
              }}
            >
              📈 <span>+186% organic traffic</span>
            </div>

            {/* Bottom Left Floating Badge */}
            <div
              className="absolute -bottom-4 -left-6 bg-white border border-gray-200 rounded-2xl py-2.5 px-4 shadow-xl flex items-center gap-2 pointer-events-none text-xs font-bold text-emerald-600 transition-transform duration-300"
              style={{
                transform: `translate3d(${mousePos.x * -25}px, ${mousePos.y * -25}px, 20px)`,
              }}
            >
              ✅ <span>Page 1 in 90 days</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
