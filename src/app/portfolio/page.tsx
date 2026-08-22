import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { TrendingUp, Calendar, Zap, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO & Digital Marketing Portfolio | Pritam Chatterjee",
  description: "Explore verified growth marketing results, technical SEO rebuilds, high-converting PPC funnels, and performance Next.js web applications designed by Pritam Chatterjee.",
  alternates: {
    canonical: "/portfolio",
  },
};

const PORTFOLIO_PROJECTS = [
  {
    id: "apex-ecommerce",
    title: "Apex E-commerce Scale",
    category: "SEO",
    niche: "B2B E-commerce",
    duration: "6 Months Strategy",
    beforeTraffic: "12,400/mo",
    afterTraffic: "48,800/mo",
    growth: "+293%",
    ranking: "140+ Keywords in Top 3",
    leadGrowth: "+214% Sales Orders",
    summary: "Complete Technical SEO rebuild combined with content category silo restructuring. Solved server rendering crawl budget blockages, and pushed high-intent transaction terms to position #1.",
    highlights: ["Fixed Next.js hydration crawl lags", "Optimized collection taxonomy mapping", "Structured schema entities for products"],
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "global-saas",
    title: "Global SaaS Lead Flow",
    category: "PPC",
    niche: "Enterprise Software",
    duration: "4 Months Strategy",
    beforeTraffic: "1,500/mo",
    afterTraffic: "8,900/mo",
    growth: "+493%",
    ranking: "Avg Position 24 → 3.1",
    leadGrowth: "+310% Demos Booked",
    summary: "Built a programmatic content graph targeting high-competition competitor alternatives. Cleaned Core Web Vitals (CLS/LCP) and implemented FAQ schema maps, tripling organic signups.",
    highlights: ["Built dynamic competitor landers", "Reduced average demo acquisition cost by 44%", "Multi-touch pixel retargeting funnel"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "metro-healthcare",
    title: "Metro Healthcare Partners",
    category: "SEO",
    niche: "Local Medical Firm",
    duration: "5 Months Strategy",
    beforeTraffic: "5,100/mo",
    afterTraffic: "22,300/mo",
    growth: "+337%",
    ranking: "Local Pack Domination",
    leadGrowth: "+180% Calls & Bookings",
    summary: "Structured local business schema grids, optimized Google Business listings, and localized search landing structures. Boosted local organic search visibility for city clinical categories.",
    highlights: ["Configured localized city-page siloing", "Structured LocalBusiness citation schemas", "3.2x mobile call-button CTR conversion"],
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "quantum-fintech",
    title: "Quantum Fintech Platform",
    category: "Web Dev",
    niche: "Financial Services",
    duration: "3 Months Rebuild",
    beforeTraffic: "8,200/mo",
    afterTraffic: "19,500/mo",
    growth: "+137%",
    ranking: "100/100 Core Web Vitals Score",
    leadGrowth: "+95% Account Signups",
    summary: "Engineered a headless Next.js frontend with Tailwind CSS and GSAP animations. Optimized load paths for lightning-fast delivery on edge servers, bypassing DB processing entirely.",
    highlights: ["Migrated legacy server to static Jamstack", "Optimized LCP from 4.2s to 0.8s", "Secured API connections against CSRF"],
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800",
  }
];

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white pt-32 pb-24 text-left">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF] mb-2 block">
              Case Studies & Proof
            </span>
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-gray-900 tracking-tight leading-[1.1] mb-6">
              Futuristic Growth <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Explore the digital campaigns, technical SEO configurations, and custom web applications deployed by Pritam Chatterjee. We connect technical excellence with business KPIs.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-gray-50 border border-gray-100 rounded-3xl mb-16 shadow-sm">
            <div>
              <div className="text-3xl sm:text-4xl font-display font-black text-[#0066FF]">+300%</div>
              <div className="text-xs text-gray-400 font-semibold uppercase mt-1">Avg Traffic Growth</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-display font-black text-[#0066FF]">$2.5M+</div>
              <div className="text-xs text-gray-400 font-semibold uppercase mt-1">PPC Ads Managed</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-display font-black text-[#0066FF]">100%</div>
              <div className="text-xs text-gray-400 font-semibold uppercase mt-1">Audit Transparency</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-display font-black text-[#0066FF]">5+ Years</div>
              <div className="text-xs text-gray-400 font-semibold uppercase mt-1">Active Experience</div>
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {PORTFOLIO_PROJECTS.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-gray-150 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image */}
                  <div className="relative h-60 w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-[#0066FF] border border-[#0066ff]/10">
                      {project.category}
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-8 text-left">
                    <div className="flex items-center gap-2 mb-3 text-xs text-gray-400">
                      <span className="font-semibold text-gray-700">{project.niche}</span>
                      <span>•</span>
                      <span>{project.duration}</span>
                    </div>

                    <h3 className="font-display font-black text-2xl text-gray-900 mb-3 group-hover:text-[#0066FF] transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs text-gray-500 leading-relaxed mb-6">
                      {project.summary}
                    </p>

                    {/* Stats Box */}
                    <div className="grid grid-cols-2 gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-4 mb-6">
                      <div>
                        <span className="text-[10px] text-gray-400 font-bold block mb-1">Growth Metric</span>
                        <span className="text-lg font-black text-emerald-500 flex items-center gap-1">
                          {project.growth}
                          <TrendingUp className="w-3.5 h-3.5" />
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] text-gray-400 font-bold block mb-1">Conversion Metric</span>
                        <span className="text-xs font-bold text-gray-800 flex items-center gap-1.5">
                          <Zap className="w-3.5 h-3.5 text-[#0066FF]" />
                          {project.leadGrowth}
                        </span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2">
                      <span className="text-[10px] text-gray-400 font-bold block uppercase tracking-wider">Key Milestones</span>
                      {project.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-[#0066FF] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="p-8 pt-0 border-t border-gray-50 flex items-center justify-between mt-6">
                  <span className="text-[10px] text-gray-400 font-semibold">{project.ranking}</span>
                  <Link
                    href="/contact-us"
                    className="group flex items-center gap-1 bg-[#0066FF] hover:bg-[#0055DD] text-white text-xs font-bold px-4 py-2 rounded-xl transition-all"
                  >
                    <span>Request Audit Info</span>
                    <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Audit CTA Panel */}
          <div className="bg-[#0F172A] text-white rounded-3xl p-8 sm:p-12 mt-16 text-left relative overflow-hidden border border-white/5">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#0066FF] rounded-full filter blur-[120px] opacity-20 pointer-events-none"></div>
            <div className="relative z-10 max-w-2xl flex flex-col items-start gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#4DA3FF]">Analyze Your Site</span>
              <h2 className="font-display font-black text-2xl sm:text-3xl tracking-tight leading-tight">
                Want to see numbers like these on your analytics dashboard?
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
                We'll run a technical crawl analysis on your domains, audit search queries, assess page-rendering times, and compare your keyword positioning against market competitors.
              </p>
              <Link
                href="/website-audit"
                className="group flex items-center gap-2 bg-[#0066FF] hover:bg-[#0055DD] text-white px-6 py-3.5 rounded-full text-xs font-bold transition-all shadow-lg hover:shadow-[#0066ff]/20"
              >
                <span>Book Free SEO Audit</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
