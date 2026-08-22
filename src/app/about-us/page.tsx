import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Award, ShieldCheck, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Pritam Chatterjee | SEO & Digital Marketing Consultant",
  description: "Learn more about Pritam Chatterjee, a digital marketing specialist with 5+ years of experience in enterprise SEO audits, Google Ads, and high-performance Web Development.",
  alternates: {
    canonical: "/about-us",
  },
};

const VALUES = [
  {
    title: "Absolute Transparency",
    desc: "We don't hide search metrics in convoluted PDFs. Clients receive direct logins to clean, real-time Looker Studio dashboards synced with search consoles.",
    icon: ShieldCheck,
  },
  {
    title: "Technical Execution Depth",
    desc: "We don't just write generic content checklists. We configure Server-Side Rendering (SSR) cache codes, optimize hydration layouts, and fix canonical loops.",
    icon: TrendingUp,
  },
  {
    title: "Business KPI Orientation",
    desc: "Ranking #1 for low-intent search terms is useless. We focus exclusively on commercial queries that deliver sales pipeline leads and demo signups.",
    icon: Award,
  }
];

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white pt-32 pb-24 text-left">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Biography Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF] mb-2 block">
                Founding Consultant
              </span>
              <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-gray-900 tracking-tight leading-[1.1] mb-6">
                About <span className="text-gradient">Pritam Chatterjee</span>
              </h1>
              
              <div className="space-y-4 text-gray-500 text-sm sm:text-base leading-relaxed mb-8">
                <p>
                  Pritam Chatterjee is a seasoned SEO Specialist, Pay-Per-Click Advertising Manager, and Full-Stack Frontend Engineer with over 5 years of professional digital consulting experience.
                </p>
                <p>
                  Working at the intersection of web performance and growth marketing, Pritam replaces slow, template-driven site designs with custom Next.js static structures. This methodology secures 100/100 Core Web Vitals performance benchmarks, allowing search engine bots to crawl and index nodes with maximum efficiency.
                </p>
                <p>
                  Based in Salt Lake Sector V, Kolkata, Pritam manages search marketing campaigns for e-commerce and B2B SaaS startups globally, transforming technical crawl speed into pipeline revenue growth.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 border-t border-gray-150 pt-8 max-w-md">
                <div>
                  <div className="text-2xl sm:text-3xl font-display font-black text-[#0066FF]">+300%</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase">Avg Rank Growths</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-display font-black text-[#0066FF]">$2.5M+</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase">Paid Ad Spend</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-display font-black text-[#0066FF]">50+</div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase">Clients Consulted</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-[#0066FF] rounded-full filter blur-[120px] opacity-10 pointer-events-none"></div>
              <div className="bg-gray-50 border border-gray-150 rounded-3xl p-6 relative z-10">
                <img
                  src="/images/pritam-chatterjee.jpg"
                  alt="Pritam Chatterjee Portrait"
                  className="w-full h-80 object-cover rounded-2xl shadow-sm mb-6"
                />
                <div className="text-left">
                  <h4 className="font-display font-black text-gray-900 text-lg">Pritam Chatterjee</h4>
                  <p className="text-[#0066FF] text-xs font-bold uppercase tracking-wider mt-0.5">
                    Founder & Chief SEO Consultant
                  </p>
                  <p className="text-xs text-gray-400 mt-2 font-mono">
                    Node: Sector V, Salt Lake, Kolkata, IN
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="border-t border-gray-100 pt-20 mb-20 text-left">
            <div className="max-w-2xl mb-16">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF] block mb-2">Our Foundation</span>
              <h2 className="font-display font-black text-3xl text-gray-900 tracking-tight">Consulting Philosophy & Values</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {VALUES.map((val, i) => {
                const Icon = val.icon;
                return (
                  <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                    <div className="w-10 h-10 bg-white rounded-lg border border-gray-150 flex items-center justify-center mb-6 shadow-sm text-[#0066FF]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-base mb-2">{val.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{val.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Certifications Banner */}
          <div className="bg-[#0F172A] text-white rounded-3xl p-8 sm:p-12 text-left relative overflow-hidden border border-white/5">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#0066FF] rounded-full filter blur-[120px] opacity-20 pointer-events-none"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7">
                <span className="text-xs font-bold uppercase tracking-widest text-[#4DA3FF] mb-2 block">Credentials</span>
                <h3 className="font-display font-black text-2xl sm:text-3xl tracking-tight mb-4">
                  Verified Industry Certifications
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                  Pritam's growth frameworks comply with official standards. Certifications include Google Ads Search Network Professional, Google Analytics GA4 Qualification, HubSpot Inbound Marketing, and Advanced Technical Audits.
                </p>
                <Link
                  href="/contact-us"
                  className="group inline-flex items-center gap-2 bg-[#0066FF] hover:bg-[#0055DD] text-white px-6 py-3.5 rounded-full text-xs font-bold transition-all shadow-md"
                >
                  <span>Book Consultation Call</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>

              <div className="lg:col-span-5 grid grid-cols-2 gap-4 text-left">
                <div className="bg-white/5 border border-white/5 p-4 rounded-xl">
                  <CheckCircle2 className="w-6 h-6 text-[#4DA3FF] mb-2" />
                  <span className="text-xs font-bold text-white block">Google Ads</span>
                  <span className="text-[10px] text-gray-500">Search Certified</span>
                </div>
                <div className="bg-white/5 border border-white/5 p-4 rounded-xl">
                  <CheckCircle2 className="w-6 h-6 text-[#4DA3FF] mb-2" />
                  <span className="text-xs font-bold text-white block">Google GA4</span>
                  <span className="text-[10px] text-gray-500">Analytics Qualified</span>
                </div>
                <div className="bg-white/5 border border-white/5 p-4 rounded-xl">
                  <CheckCircle2 className="w-6 h-6 text-[#4DA3FF] mb-2" />
                  <span className="text-xs font-bold text-white block">HubSpot</span>
                  <span className="text-[10px] text-gray-500">Inbound Certified</span>
                </div>
                <div className="bg-white/5 border border-white/5 p-4 rounded-xl">
                  <CheckCircle2 className="w-6 h-6 text-[#4DA3FF] mb-2" />
                  <span className="text-xs font-bold text-white block">Technical SEO</span>
                  <span className="text-[10px] text-gray-500">Audit Specialist</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
