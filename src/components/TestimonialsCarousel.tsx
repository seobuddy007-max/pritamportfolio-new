"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const REVIEWS = [
  {
    name: "Rajesh Sen",
    role: "Marketing Director, Zenith Retail",
    comment: "Pritam Chatterjee rebuilt our entire SEO directory from scratch. Within 6 months, our organic traffic increased from 12K to 48K sessions, and our online order volume tripled. Punctual, technical, and data-backed.",
    rating: 5,
    metrics: "Traffic: +293%"
  },
  {
    name: "Sarah Jenkins",
    role: "Growth Lead, CloudSaas Inc",
    comment: "We hired Pritam to run our Google Ads campaigns and fix crawl hydration issues on our Next.js dashboard. The PPC restructuring resulted in a 42% decrease in CPL, saving us thousands in wasted budget.",
    rating: 5,
    metrics: "Ad CPL: -42%"
  },
  {
    name: "Arindam Dey",
    role: "Founder, Dey Medical Clinics",
    comment: "Pritam's local SEO execution put our branches on top of every Google Map Pack search in the city. Our incoming patient booking calls increased by 180% in under 5 months. Excellent communicator.",
    rating: 5,
    metrics: "Calls: +180%"
  }
];

export default function TestimonialsCarousel() {
  const [activeIdx, setActiveIdx] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoRotation = () => {
    stopAutoRotation();
    timerRef.current = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % REVIEWS.length);
    }, 6000);
  };

  const stopAutoRotation = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    startAutoRotation();
    return () => stopAutoRotation();
  }, []);

  const handlePrev = () => {
    stopAutoRotation();
    setActiveIdx((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
    startAutoRotation();
  };

  const handleNext = () => {
    stopAutoRotation();
    setActiveIdx((prev) => (prev + 1) % REVIEWS.length);
    startAutoRotation();
  };

  // Card classes based on position index
  const getCardStyle = (idx: number) => {
    if (idx === activeIdx) {
      return {
        transform: "translate3d(0px, 0px, 0px) scale(1)",
        opacity: 1,
        zIndex: 10,
        pointerEvents: "auto" as const
      };
    }
    
    // Previous card (left background stack)
    const isPrev = idx === (activeIdx - 1 + REVIEWS.length) % REVIEWS.length;
    if (isPrev) {
      return {
        transform: "translate3d(-100px, 0px, -120px) scale(0.85) rotateY(15deg)",
        opacity: 0.4,
        zIndex: 5,
        pointerEvents: "none" as const
      };
    }

    // Next card (right background stack)
    return {
      transform: "translate3d(100px, 0px, -120px) scale(0.85) rotateY(-15deg)",
      opacity: 0.4,
      zIndex: 5,
      pointerEvents: "none" as const
    };
  };

  return (
    <section
      className="relative py-28 bg-[#FFFFFF] overflow-hidden px-6 border-b border-gray-100 flex flex-col items-center"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#EAF3FF] rounded-full filter blur-[120px] opacity-40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF] mb-2">
          Client Endorsements
        </span>
        <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-gray-900 mt-2 mb-16 tracking-tight text-center">
          What Growth <span className="text-gradient">Partners Say</span>
        </h2>

        {/* 3D Stack container */}
        <div className="relative w-full max-w-4xl h-[420px] sm:h-[350px] flex items-center justify-center cube-wrap">
          
          <div className="relative w-full h-full flex items-center justify-center">
            {REVIEWS.map((review, idx) => {
              const style = getCardStyle(idx);
              const isActive = idx === activeIdx;

              return (
                <div
                  key={idx}
                  style={style}
                  className={`absolute w-full max-w-lg glass-panel rounded-3xl p-8 shadow-xl transition-all duration-700 ease-out flex flex-col justify-between h-[340px] sm:h-[280px] border border-gray-100 ${
                    isActive ? "shadow-[#0066ff]/5 border-[#0066ff]/20" : ""
                  }`}
                >
                  {/* Quote & Stars Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-8 h-8 text-[#0066ff]/10" />
                  </div>

                  {/* Body Statement */}
                  <p className="text-sm text-gray-600 italic leading-relaxed text-left flex-1 mb-6">
                    "{review.comment}"
                  </p>

                  {/* Bio & Result metrics footer */}
                  <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <div className="text-left">
                      <div className="text-sm font-bold text-gray-900">{review.name}</div>
                      <div className="text-[10px] text-gray-400 font-semibold">{review.role}</div>
                    </div>
                    <div className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {review.metrics}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Carousel manual navigation buttons */}
        <div className="flex items-center gap-6 mt-8">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-gray-200 bg-white hover:bg-[#EAF3FF] hover:border-[#0066FF] hover:text-[#0066FF] flex items-center justify-center transition-all cursor-pointer active:scale-90"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-2">
            {REVIEWS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  stopAutoRotation();
                  setActiveIdx(idx);
                  startAutoRotation();
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                  idx === activeIdx ? "w-6 bg-[#0066FF]" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-gray-200 bg-white hover:bg-[#EAF3FF] hover:border-[#0066FF] hover:text-[#0066FF] flex items-center justify-center transition-all cursor-pointer active:scale-90"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
