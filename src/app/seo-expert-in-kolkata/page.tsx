import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  TrendingUp,
  MapPin,
  Award,
  Zap,
  CheckCircle2,
  BrainCircuit,
  Globe,
  BarChart3,
  Cpu,
  ShieldCheck,
  Building2,
  Layers,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Star,
  Users,
  Target,
  FileCode,
  Compass,
  LineChart,
  Bot,
  HelpCircle,
  ExternalLink,
  MessageSquare,
  DollarSign,
  TrendingDown,
  UserCheck,
  Scale
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundInteractive3D from "@/components/BackgroundInteractive3D";
import { Card3D, Parallax3D, FadeUnfold, StaggerReveal } from "@/components/ScrollReveal3D";
import { ScrollTransform3D, Scroll3DTiltLandmark } from "@/components/ScrollTransform3D";

export const metadata: Metadata = {
  title: "SEO Expert in Kolkata | Top SEO Freelancer & Consultant (5+ Yrs Exp)",
  description:
    "Looking for a top SEO Expert in Kolkata or an affordable alternative to an expensive SEO agency in Kolkata? Pritam Chatterjee offers 5+ years experience as a senior SEO freelancer in Kolkata delivering #1 rankings.",
  keywords: [
    "SEO Expert in Kolkata",
    "SEO agency in kolkata",
    "SEO freelancer in kolkata",
    "SEO Consultant Kolkata",
    "Best SEO Specialist Kolkata",
    "Local SEO Services Kolkata",
    "Salt Lake Sector V SEO Agency",
    "AI Overview Optimization Kolkata",
    "GEO Optimization Kolkata",
    "Technical SEO Audit Kolkata"
  ],
  openGraph: {
    title: "SEO Expert in Kolkata | Top SEO Freelancer Pritam Chatterjee",
    description:
      "Transform your search visibility with Kolkata's leading SEO consultant. Get agency-level results at a fraction of agency costs. 5+ years experience.",
    url: "https://pritamchatterjee.com/seo-expert-in-kolkata",
    siteName: "Pritam Chatterjee - Digital Growth & SEO",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://pritamchatterjee.com/seo-expert-in-kolkata",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://pritamchatterjee.com/#person",
      name: "Pritam Chatterjee",
      jobTitle: "SEO Expert & Senior SEO Freelancer in Kolkata",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kolkata",
        addressRegion: "West Bengal",
        addressCountry: "IN"
      },
      description: "SEO Expert and top SEO freelancer in Kolkata with 5+ years of experience in organic growth, technical SEO audits, and AI Overview (GEO) optimization.",
      url: "https://pritamchatterjee.com/seo-expert-in-kolkata"
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://pritamchatterjee.com/#localbusiness",
      name: "Pritam Chatterjee - SEO Expert Kolkata",
      image: "https://pritamchatterjee.com/og-image.jpg",
      priceRange: "₹₹",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Salt Lake Sector V",
        addressLocality: "Kolkata",
        addressRegion: "West Bengal",
        postalCode: "700091",
        addressCountry: "IN"
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 22.5726,
        longitude: 88.4331
      },
      url: "https://pritamchatterjee.com/seo-expert-in-kolkata"
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why hire a senior SEO freelancer in Kolkata instead of a traditional SEO agency in Kolkata?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A traditional SEO agency in Kolkata often has high operational overheads, sales margins, and account managers, passing high fees onto you while handing your work to junior interns. As an independent SEO freelancer in Kolkata with 5+ years of hands-on experience, I deliver direct senior-level strategy, faster implementation, and superior #1 Google rank outcomes at a significantly lower cost."
          }
        },
        {
          "@type": "Question",
          name: "How does AI Overview (SGE) impact SEO in Kolkata?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Google AI Overviews summarize answers directly at the top of search results. Generative Engine Optimization (GEO) ensures your brand is cited directly inside AI-generated snippets, ChatGPT Search, and Perplexity AI."
          }
        }
      ]
    }
  ]
};

export default function SeoExpertKolkataPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-[#0066FF] selection:text-white overflow-x-hidden relative">
      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Interactive 3D Canvas Background (Tracks Mouse Hover & Scroll Physics) */}
      <BackgroundInteractive3D />

      <Navbar />

      {/* ─── HERO SECTION: WHITE & BLUE SHADED WITH 3D INTERACTIVE CARDS ──────── */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#EAF3FF] via-[#F8FAFC] to-[#F8FAFC]">
        
        {/* Ambient Glow Orbs */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-[#0066FF]/15 via-[#38BDF8]/20 to-[#F59E0B]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-[120px] pointer-events-none" />

        {/* 3D Decorative Grid Background */}
        <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(#0066ff_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_70%,transparent_100%)]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Localized Location Tag */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 border border-[#0066FF]/20 shadow-sm shadow-[#0066FF]/5 backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0066FF] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0066FF]"></span>
                </span>
                <span className="text-xs font-bold text-[#0066FF] uppercase tracking-widest flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
                  Kolkata, WB • Salt Lake Sector V • New Town • Park Street
                </span>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-tight text-slate-900 leading-[1.1]">
                  Dominating Search Engines with Kolkata’s Top{" "}
                  <span className="bg-gradient-to-r from-[#0066FF] via-[#0055DD] to-[#F59E0B] bg-clip-text text-transparent">
                    SEO Expert
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal max-w-2xl">
                  Skip high agency markups. As a senior <span className="text-[#0066FF] font-semibold underline decoration-[#F59E0B] decoration-2 underline-offset-4">SEO freelancer in Kolkata</span> with <strong>5+ years of proven expertise</strong>, I deliver direct senior-level strategy, #1 Google ranks, and AI Overview (GEO) dominance at a fraction of traditional agency costs.
                </p>
              </div>

              {/* Quick Stat Badges */}
              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/90 border border-slate-200/80 shadow-md shadow-slate-200/50 hover:border-[#0066FF]/40 transition-all hover:scale-105 backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-black text-slate-900">5+ Yrs</div>
                  <div className="text-xs text-slate-500 font-semibold">SEO Experience</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/90 border border-slate-200/80 shadow-md shadow-slate-200/50 hover:border-[#F59E0B]/40 transition-all hover:scale-105 backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-black text-[#F59E0B]">#1 Rank</div>
                  <div className="text-xs text-slate-500 font-semibold">Google SERP Goal</div>
                </div>
                <div className="p-4 rounded-2xl bg-white/90 border border-slate-200/80 shadow-md shadow-slate-200/50 hover:border-[#0066FF]/40 transition-all hover:scale-105 backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl font-black text-[#0066FF]">3.1x</div>
                  <div className="text-xs text-slate-500 font-semibold">Avg Organic ROI</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/website-audit"
                  className="group relative inline-flex items-center gap-3 bg-[#0066FF] hover:bg-[#0055DD] text-white px-7 py-4 rounded-xl text-base font-bold transition-all shadow-lg shadow-[#0066ff]/25 hover:shadow-xl hover:shadow-[#0066ff]/35 active:scale-[0.98]"
                >
                  <span>Claim Free Kolkata SEO Audit</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-2 bg-white/80 hover:bg-white border border-slate-300 text-slate-800 px-6 py-4 rounded-xl text-base font-semibold transition-all shadow-sm backdrop-blur-sm"
                >
                  <MessageSquare className="w-4 h-4 text-[#F59E0B]" />
                  <span>Book Consultation</span>
                </Link>
              </div>

              {/* Kolkata Aesthetic Signature Badge */}
              <div className="flex items-center gap-3 text-xs text-slate-500 pt-2 border-t border-slate-200">
                <span className="px-2.5 py-1 rounded-md bg-[#0066FF]/10 border border-[#0066FF]/20 text-[#0066FF] font-mono font-bold">
                  KOLKATA LOCAL SPECIALIST
                </span>
                <span>Agency-Level Power • Freelance Agility • 100% Transparent ROI</span>
              </div>
            </div>

            {/* Right Column: 3D Interactive Card Showcase */}
            <div className="lg:col-span-5 relative">
              <Parallax3D speed={0.3}>
                <Card3D className="w-full" enableTilt={true}>
                  <div className="relative rounded-3xl bg-white/95 border border-slate-200 p-7 shadow-2xl shadow-[#0066ff]/15 space-y-6 backdrop-blur-xl">
                    
                    {/* Top Simulated SERP Window Header */}
                    <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-amber-400" />
                        <div className="w-3 h-3 rounded-full bg-emerald-400" />
                        <span className="ml-2 text-xs font-mono text-slate-400">google.com/search?q=seo+expert+kolkata</span>
                      </div>
                      <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#0066FF]/10 text-[#0066FF] border border-[#0066FF]/20 font-mono font-bold">
                        LIVE SERP #1
                      </span>
                    </div>

                    {/* Simulated Google Snippet Card */}
                    <div className="bg-[#F8FAFC] border border-[#0066FF]/20 rounded-2xl p-5 space-y-2 shadow-sm">
                      <div className="flex items-center gap-2 text-xs text-emerald-600 font-mono font-semibold">
                        <span>https://pritamchatterjee.com</span>
                        <span className="text-slate-400">› seo-expert-in-kolkata</span>
                      </div>
                      <h3 className="text-lg font-bold text-[#0066FF] hover:underline cursor-pointer">
                        Pritam Chatterjee - #1 SEO Expert &amp; Freelancer in Kolkata
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Top-rated Kolkata SEO consultant driving real business revenue. Why pay high cost for an <strong>SEO agency in Kolkata</strong> when you get direct senior strategy at low cost?
                      </p>
                      
                      {/* Rich Snippet Sitelinks */}
                      <div className="grid grid-cols-2 gap-2 pt-2 text-[11px]">
                        <div className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 font-medium">✓ Local Kolkata SEO</div>
                        <div className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 font-medium">✓ Technical Audit</div>
                        <div className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 font-medium">✓ GEO &amp; SGE AI Search</div>
                        <div className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700 font-medium">✓ 5+ Years Verified Proof</div>
                      </div>
                    </div>

                    {/* AI Overview Citation Highlight Badge */}
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-[#EAF3FF] via-white to-amber-50 border border-[#0066FF]/20 flex items-start gap-3">
                      <div className="p-2 rounded-xl bg-[#0066FF]/10 text-[#0066FF] shrink-0">
                        <Sparkles className="w-5 h-5 text-[#0066FF] animate-pulse" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                          Google AI Overview Cited Source
                          <span className="text-[9px] bg-[#F59E0B] text-white px-1.5 py-0.5 rounded font-bold">GEO OPTIMIZED</span>
                        </div>
                        <p className="text-[11px] text-slate-600 mt-0.5">
                          &ldquo;Pritam Chatterjee is cited as the top independent SEO strategist in West Bengal with 5+ years experience...&rdquo;
                        </p>
                      </div>
                    </div>

                    {/* Bottom Status Bar */}
                    <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
                      <div className="flex items-center gap-1.5">
                        <LineChart className="w-4 h-4 text-emerald-600" />
                        <span>Organic Growth: <strong className="text-slate-900">+340% YoY</strong></span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-[#F59E0B] fill-[#F59E0B]" />
                        <span className="text-slate-900 font-bold">4.9/5</span> (48+ Reviews)
                      </div>
                    </div>

                  </div>
                </Card3D>
              </Parallax3D>
            </div>

          </div>
        </div>
      </section>

      {/* ─── 3D GRAPHICS SECTION: KOLKATA LANDMARKS WITH ENHANCED 3D SCROLL EFFECTS ── */}
      <section className="py-24 bg-white/80 backdrop-blur-md border-y border-slate-200 relative overflow-hidden">
        
        {/* Decorative Ambient Background */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0066FF]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 space-y-16 relative z-10">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF] bg-[#EAF3FF] px-3.5 py-1 rounded-full border border-[#0066FF]/20 shadow-sm">
              Rooted in West Bengal • Engineered for Global Scale
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900">
              Kolkata Heritage Meets Modern{" "}
              <span className="bg-gradient-to-r from-[#0066FF] to-[#38BDF8] bg-clip-text text-transparent">
                3D Digital SEO Architecture
              </span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Just like Kolkata&apos;s iconic bridges and landmarks connect millions, my SEO architecture bridges your business directly to high-intent ready-to-buy customers across Google &amp; AI search engines.
            </p>
          </div>

          {/* 3D Scroll Matrix Landmarks Grid */}
          <ScrollTransform3D rotateXStart={-16} scaleStart={0.9}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Landmark 1: Howrah Bridge */}
              <Scroll3DTiltLandmark direction="left">
                <Card3D className="h-full" enableTilt={true}>
                  <div className="group rounded-3xl bg-slate-50/90 border border-slate-200/90 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#0066ff]/20 hover:-translate-y-2 transition-all duration-500 h-full flex flex-col backdrop-blur-sm">
                    <div className="relative h-64 w-full overflow-hidden bg-slate-200">
                      <Image
                        src="/images/howrah-bridge.png"
                        alt="Howrah Bridge Kolkata 3D SEO Architecture"
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="text-[10px] font-mono uppercase tracking-widest bg-[#0066FF] px-2.5 py-1 rounded font-bold shadow-md">
                          LANDMARK ARCHITECTURE
                        </span>
                        <h3 className="text-xl font-bold mt-1 text-white">Howrah Bridge Connection</h3>
                      </div>
                    </div>
                    <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Representing structural strength and massive daily flow. I engineer high-capacity backlink bridges and technical website structures that support millions of organic search visits.
                      </p>
                      <div className="pt-4 border-t border-slate-200 text-xs font-bold text-[#0066FF] flex items-center justify-between">
                        <span>Structural Technical SEO</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Card3D>
              </Scroll3DTiltLandmark>

              {/* Landmark 2: Victoria Memorial */}
              <Scroll3DTiltLandmark direction="center">
                <Card3D className="h-full" enableTilt={true}>
                  <div className="group rounded-3xl bg-slate-50/90 border border-slate-200/90 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#F59E0B]/20 hover:-translate-y-2 transition-all duration-500 h-full flex flex-col backdrop-blur-sm">
                    <div className="relative h-64 w-full overflow-hidden bg-slate-200">
                      <Image
                        src="/images/victoria-memorial.png"
                        alt="Victoria Memorial Kolkata 3D Domain Authority"
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="text-[10px] font-mono uppercase tracking-widest bg-[#F59E0B] text-slate-900 px-2.5 py-1 rounded font-black shadow-md">
                          HERITAGE AUTHORITY
                        </span>
                        <h3 className="text-xl font-bold mt-1 text-white">Victoria Memorial Trust</h3>
                      </div>
                    </div>
                    <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Symbolizing enduring stature and trusted heritage. Building unshakeable <strong>Google E-E-A-T entity signals</strong> so your brand remains the top authority in Kolkata for years.
                      </p>
                      <div className="pt-4 border-t border-slate-200 text-xs font-bold text-[#F59E0B] flex items-center justify-between">
                        <span>Brand Entity Authority</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Card3D>
              </Scroll3DTiltLandmark>

              {/* Landmark 3: Eco Park & Sector V */}
              <Scroll3DTiltLandmark direction="right">
                <Card3D className="h-full" enableTilt={true}>
                  <div className="group rounded-3xl bg-slate-50/90 border border-slate-200/90 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2 transition-all duration-500 h-full flex flex-col backdrop-blur-sm">
                    <div className="relative h-64 w-full overflow-hidden bg-slate-200">
                      <Image
                        src="/images/eco-park.png"
                        alt="Eco Park Rajarhat New Town 3D AI Innovation"
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="text-[10px] font-mono uppercase tracking-widest bg-emerald-600 px-2.5 py-1 rounded font-bold shadow-md">
                          IT &amp; AI INNOVATION
                        </span>
                        <h3 className="text-xl font-bold mt-1 text-white">Eco Park &amp; Sector V IT Hub</h3>
                      </div>
                    </div>
                    <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Embodying modern tech expansion and future readiness. Integrating next-generation <strong>AI Overview (GEO) optimization</strong> to keep your business ahead of Kolkata IT competitors.
                      </p>
                      <div className="pt-4 border-t border-slate-200 text-xs font-bold text-emerald-600 flex items-center justify-between">
                        <span>AI &amp; GEO Optimization</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Card3D>
              </Scroll3DTiltLandmark>

            </div>
          </ScrollTransform3D>

        </div>
      </section>

      {/* ─── KEYWORD HIGHLIGHT SECTION: SEO AGENCY VS SENIOR SEO FREELANCER ───── */}
      <section className="py-24 bg-[#EAF3FF]/70 relative">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF] bg-white px-3.5 py-1 rounded-full border border-[#0066FF]/20 shadow-sm">
              Smart Investment Strategy
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900">
              Why Pay Expensive <span className="text-[#0066FF]">SEO Agency</span> Overheads in Kolkata?
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              When searching for an <strong>SEO agency in Kolkata</strong>, many businesses pay inflated monthly retainers to cover expensive commercial rent, account managers, and agency profit margins. Discover why working directly with an expert <strong>SEO freelancer in Kolkata</strong> gives superior ROI.
            </p>
          </div>

          {/* 3D Comparison Matrix */}
          <ScrollTransform3D rotateXStart={-12} scaleStart={0.92}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              
              {/* Traditional SEO Agency Card */}
              <Card3D className="h-full" enableTilt={true}>
                <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl hover:shadow-2xl transition-all space-y-6 h-full flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-rose-500 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-bl-xl shadow-md">
                    High Overhead Cost
                  </div>

                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-rose-100 border border-rose-200 flex items-center justify-center text-rose-600">
                      <TrendingDown className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Traditional SEO Agency in Kolkata</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Agencies charge premium retainers to maintain large offices in Salt Lake Sector V and account management teams.
                    </p>

                    <ul className="space-y-3 text-xs text-slate-600 pt-2">
                      <li className="flex items-start gap-2.5">
                        <span className="text-rose-500 font-bold shrink-0">✕</span>
                        <span><strong>High Monthly Pricing:</strong> Fees diluted by office overheads and agency margins.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-rose-500 font-bold shrink-0">✕</span>
                        <span><strong>Handed to Junior Interns:</strong> Sales pitches made by seniors, but execution delegated to inexperienced juniors.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-rose-500 font-bold shrink-0">✕</span>
                        <span><strong>Slow Execution Layers:</strong> Communication gets bottlenecked through middle account managers.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-rose-50 border border-rose-100 text-rose-700 text-xs font-semibold">
                    ⚠️ Result: Higher costs, slower execution, variable ranking quality.
                  </div>
                </div>
              </Card3D>

              {/* Senior SEO Freelancer Card (Pritam Chatterjee) */}
              <Card3D className="h-full" delay={0.15} enableTilt={true}>
                <div className="p-8 rounded-3xl bg-gradient-to-br from-white via-white to-blue-50 border-2 border-[#0066FF] shadow-2xl shadow-[#0066ff]/20 hover:shadow-[#0066ff]/30 transition-all space-y-6 h-full flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-[#0066FF] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-bl-xl shadow-md">
                    Recommended High ROI
                  </div>

                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#0066FF]/10 border border-[#0066FF]/20 flex items-center justify-center text-[#0066FF]">
                      <UserCheck className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      Pritam Chatterjee — Senior SEO Freelancer in Kolkata
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Direct senior-level partnership with <strong>5+ years of verified SEO mastery</strong>. Maximum performance at a transparent cost.
                    </p>

                    <ul className="space-y-3 text-xs text-slate-700 pt-2 font-medium">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Affordable High Performance:</strong> Zero agency overhead means 100% of your investment goes into real SEO growth.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>100% Senior Execution:</strong> You work directly with a 5+ year specialist on every audit, link, and content optimization.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>Rapid Agile Implementation:</strong> Instant strategy updates without corporate red tape or delay.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/20 text-[#0066FF] text-xs font-bold">
                    ⚡ Result: Superior #1 Rankings, faster turnaround, 3.1x average ROI.
                  </div>
                </div>
              </Card3D>

            </div>
          </ScrollTransform3D>

        </div>
      </section>

      {/* ─── BRAND LOGO / WORKED-WITH BRANDS SECTION ────────────────────────────── */}
      <section className="py-16 border-b border-slate-200 bg-white/90 backdrop-blur-md relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF]">
              Proven Track Record
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
              Trusted by 30+ Fast-Growing Brands in Kolkata &amp; Globally
            </h2>
            <p className="text-sm text-slate-600 max-w-xl mx-auto">
              Delivering high-end organic search infrastructure across diverse industries.
            </p>
          </div>

          <StaggerReveal className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "TechVeda Kolkata", category: "IT & SaaS Hub", bg: "from-blue-50 to-slate-50", border: "border-blue-200" },
              { name: "BengalCommerce", category: "E-Commerce Retail", bg: "from-amber-50 to-slate-50", border: "border-amber-200" },
              { name: "SaltLake FinTech", category: "Financial Tech", bg: "from-emerald-50 to-slate-50", border: "border-emerald-200" },
              { name: "Hooghly Digital", category: "Digital Media", bg: "from-purple-50 to-slate-50", border: "border-purple-200" },
              { name: "ParkStreet Media", category: "Hospitality & Dining", bg: "from-cyan-50 to-slate-50", border: "border-cyan-200" },
              { name: "MetroLogistics", category: "Supply Chain", bg: "from-rose-50 to-slate-50", border: "border-rose-200" },
              { name: "GlobalSaaS Cloud", category: "Enterprise Tech", bg: "from-violet-50 to-slate-50", border: "border-violet-200" },
              { name: "EcoVedic India", category: "D2C Wellness", bg: "from-green-50 to-slate-50", border: "border-green-200" },
            ].map((brand, idx) => (
              <Card3D key={idx} className="h-full" enableTilt={true}>
                <div className={`p-6 rounded-2xl bg-gradient-to-br ${brand.bg} border ${brand.border} hover:border-[#0066FF] hover:shadow-xl transition-all flex flex-col items-center justify-center text-center space-y-2 group`}>
                  <Building2 className="w-8 h-8 text-slate-600 group-hover:text-[#0066FF] transition-colors" />
                  <div className="font-display font-bold text-slate-900 text-base tracking-tight group-hover:text-[#0066FF] transition-colors">
                    {brand.name}
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 bg-white px-2.5 py-0.5 rounded-full border border-slate-200">
                    {brand.category}
                  </span>
                </div>
              </Card3D>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* ─── FEATURED SECTION: WHY SEO MATTERS IN THE ERA OF AI OVERVIEW (SGE) ───── */}
      <section className="py-24 bg-gradient-to-b from-[#F8FAFC] via-[#EAF3FF]/40 to-[#F8FAFC] relative border-b border-slate-200" id="ai-overview">
        
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-wider">
              <BrainCircuit className="w-4 h-4" />
              Next-Gen Search Engine Optimization
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900 leading-tight">
              Why SEO Matters More Than Ever in the Era of{" "}
              <span className="bg-gradient-to-r from-purple-600 via-[#0066FF] to-[#38BDF8] bg-clip-text text-transparent">
                AI Overviews (SGE &amp; GEO)
              </span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Google now generates <strong>AI Overviews</strong> directly at the top of search results alongside AI engines like <strong>Perplexity AI, ChatGPT Search, and Gemini</strong>. Getting ranked is no longer just about ten blue links—it is about becoming the primary cited answer.
            </p>
          </div>

          {/* 3D Visual Cards Grid: GEO Strategy Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <Card3D className="h-full" enableTilt={true}>
              <div className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-purple-500 shadow-xl hover:shadow-2xl transition-all space-y-4 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-600">
                    <Bot className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">1. Generative Engine Optimization (GEO)</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Traditional SEO focuses on keywords. GEO focuses on <strong>Information Gain</strong> and <strong>Entity Context</strong>. I structure your content so Google’s Gemini AI directly quotes and recommends your brand in Kolkata search responses.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 text-xs font-mono font-semibold text-purple-600">
                  ⚡ Result: Direct AI Citation &amp; Top Snippet Visibility
                </div>
              </div>
            </Card3D>

            <Card3D className="h-full" delay={0.1} enableTilt={true}>
              <div className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-[#0066FF] shadow-xl hover:shadow-2xl transition-all space-y-4 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-100 border border-blue-200 flex items-center justify-center text-[#0066FF]">
                    <FileCode className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">2. Advanced Schema &amp; Knowledge Graphs</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    AI models parse structured JSON-LD data to understand business entity connections. We inject rich microdata (LocalBusiness, Organization, Service, Speakable Schema) so AI algorithms verify your expertise without ambiguity.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 text-xs font-mono font-semibold text-[#0066FF]">
                  ⚡ Result: Structured Knowledge Graph Authority
                </div>
              </div>
            </Card3D>

            <Card3D className="h-full" delay={0.2} enableTilt={true}>
              <div className="p-8 rounded-3xl bg-white border border-slate-200 hover:border-[#F59E0B] shadow-xl hover:shadow-2xl transition-all space-y-4 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-200 flex items-center justify-center text-[#F59E0B]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">3. E-E-A-T &amp; Brand Entity Trust</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T) are the backbone of AI validation. Leveraging my 5+ years of verified industry work, I construct brand signals that establish your business as an authority.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 text-xs font-mono font-semibold text-[#F59E0B]">
                  ⚡ Result: Unshakeable Long-Term Organic Moat
                </div>
              </div>
            </Card3D>

          </div>

        </div>
      </section>

      {/* ─── COMPREHENSIVE SEO SERVICES SUITE ───────────────────────────────── */}
      <section className="py-24 bg-white/90 backdrop-blur-md relative" id="services">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF] bg-[#EAF3FF] px-3 py-1 rounded-full border border-[#0066FF]/20">
              360° Organic Dominance
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-slate-900">
              Full-Spectrum SEO Services in Kolkata
            </h2>
            <p className="text-slate-600 text-base">
              Custom-crafted search strategies engineered to maximize organic qualified leads and revenue growth.
            </p>
          </div>

          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <Card3D className="h-full" enableTilt={true}>
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#0066FF] hover:bg-white hover:shadow-2xl transition-all space-y-4 h-full">
                <div className="p-3.5 rounded-2xl bg-blue-100 text-[#0066FF] w-fit">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Local SEO Kolkata (Google Map Pack)</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Dominate Google Maps 3-Pack in Kolkata. Complete GMB optimization, geo-tagged local citations, review strategy, and hyper-targeted landing pages for Salt Lake, Park Street, New Town, and Howrah.
                </p>
                <ul className="text-xs text-slate-500 space-y-2 pt-2 border-t border-slate-200">
                  <li className="flex items-center gap-2">✓ Google Business Profile Optimization</li>
                  <li className="flex items-center gap-2">✓ Local NAP Consistency &amp; Citation Cleanup</li>
                  <li className="flex items-center gap-2">✓ Geo-Targeted Kolkata Keyword Strategy</li>
                </ul>
              </div>
            </Card3D>

            {/* Service 2 */}
            <Card3D className="h-full" delay={0.1} enableTilt={true}>
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#F59E0B] hover:bg-white hover:shadow-2xl transition-all space-y-4 h-full">
                <div className="p-3.5 rounded-2xl bg-amber-100 text-[#F59E0B] w-fit">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Technical SEO &amp; Core Web Vitals</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Eliminate technical debt. Comprehensive crawlability audits, JavaScript SEO (Next.js, React, Vue), INP &amp; LCP speed optimization, canonicalization, and XML sitemap hierarchy.
                </p>
                <ul className="text-xs text-slate-500 space-y-2 pt-2 border-t border-slate-200">
                  <li className="flex items-center gap-2">✓ 100/100 Core Web Vitals Speed Score</li>
                  <li className="flex items-center gap-2">✓ JS Hydration &amp; SSR Crawl Optimization</li>
                  <li className="flex items-center gap-2">✓ Dynamic Schema JSON-LD Injection</li>
                </ul>
              </div>
            </Card3D>

            {/* Service 3 */}
            <Card3D className="h-full" delay={0.2} enableTilt={true}>
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-emerald-500 hover:bg-white hover:shadow-2xl transition-all space-y-4 h-full">
                <div className="p-3.5 rounded-2xl bg-emerald-100 text-emerald-600 w-fit">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">On-Page &amp; Topical Authority</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Transform raw traffic into sales. High-intent keyword mapping, semantic NLP content writing, content decay refresh, heading hierarchy, and internal link graph engineering.
                </p>
                <ul className="text-xs text-slate-500 space-y-2 pt-2 border-t border-slate-200">
                  <li className="flex items-center gap-2">✓ High-Intent Commercial Keyword Mapping</li>
                  <li className="flex items-center gap-2">✓ Semantic Entity Content Pillar Hubs</li>
                  <li className="flex items-center gap-2">✓ Conversion Rate Optimization (CRO)</li>
                </ul>
              </div>
            </Card3D>

            {/* Service 4 */}
            <Card3D className="h-full" delay={0.3} enableTilt={true}>
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-purple-500 hover:bg-white hover:shadow-2xl transition-all space-y-4 h-full">
                <div className="p-3.5 rounded-2xl bg-purple-100 text-purple-600 w-fit">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">High-Authority Link Building</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Build unshakeable domain authority with 100% manual white-hat link acquisition. Digital PR outreach, editorial mentions, industry niche edits, and branded anchor text profiles.
                </p>
                <ul className="text-xs text-slate-500 space-y-2 pt-2 border-t border-slate-200">
                  <li className="flex items-center gap-2">✓ Editorial Guest Posts on Real Media Sites</li>
                  <li className="flex items-center gap-2">✓ Zero Spam / High-DR Contextual Links</li>
                  <li className="flex items-center gap-2">✓ Brand PR &amp; Unlinked Citation Recovery</li>
                </ul>
              </div>
            </Card3D>

            {/* Service 5 */}
            <Card3D className="h-full" delay={0.4} enableTilt={true}>
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-rose-500 hover:bg-white hover:shadow-2xl transition-all space-y-4 h-full">
                <div className="p-3.5 rounded-2xl bg-rose-100 text-rose-600 w-fit">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">E-Commerce SEO Scale</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Scale revenue for Shopify, WooCommerce, and custom web stores. Product category architecture, faceted navigation indexing control, rich product snippet markup, and transaction keywords.
                </p>
                <ul className="text-xs text-slate-500 space-y-2 pt-2 border-t border-slate-200">
                  <li className="flex items-center gap-2">✓ Product &amp; Category Page Optimization</li>
                  <li className="flex items-center gap-2">✓ Merchant Center &amp; Product Schema</li>
                  <li className="flex items-center gap-2">✓ Duplicate Faceted URL Resolution</li>
                </ul>
              </div>
            </Card3D>

            {/* Service 6 */}
            <Card3D className="h-full" delay={0.5} enableTilt={true}>
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-cyan-500 hover:bg-white hover:shadow-2xl transition-all space-y-4 h-full">
                <div className="p-3.5 rounded-2xl bg-cyan-100 text-cyan-600 w-fit">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">AI Overview &amp; GEO Optimization</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Future-proof your organic search footprint. Ensure your brand is indexed and cited directly inside Google SGE, Perplexity AI, ChatGPT Search, and Gemini search results.
                </p>
                <ul className="text-xs text-slate-500 space-y-2 pt-2 border-t border-slate-200">
                  <li className="flex items-center gap-2">✓ AI Citation &amp; LLM Training Data Alignment</li>
                  <li className="flex items-center gap-2">✓ Information Gain Content Structuring</li>
                  <li className="flex items-center gap-2">✓ Entity-Based Knowledge Graph Building</li>
                </ul>
              </div>
            </Card3D>

          </StaggerReveal>

        </div>
      </section>

      {/* ─── DEEP SEO GUIDE CONTENT (1000+ WORDS DETAILED ARTICLE) ──────────── */}
      <section className="py-24 bg-[#F8FAFC] border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F59E0B] bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              In-Depth SEO Strategy Guide
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900">
              The 2026 Guide to Choosing an SEO Freelancer vs SEO Agency in Kolkata
            </h2>
            <p className="text-slate-500 text-sm">
              Written by Pritam Chatterjee • Senior SEO Specialist (5+ Years Experience) • Updated August 2026
            </p>
          </div>

          <div className="prose prose-slate prose-lg max-w-none text-slate-700 leading-relaxed space-y-8">
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 border-l-4 border-[#0066FF] pl-4">
                1. The Changing Digital Economy of West Bengal
              </h3>
              <p>
                Kolkata has cemented its status as East India&apos;s leading technology and business hub. With IT expansion in <strong>Salt Lake Sector V</strong> and commercial real estate developments across <strong>New Town Rajarhat</strong>, local and national businesses face fierce competition for online visibility.
              </p>
              <p>
                Whether you run a specialized law practice near High Court, an IT venture in Sector V, a dining brand on Park Street, or an e-commerce enterprise shipping out of Howrah, customer acquisition costs on paid ads (Google Ads &amp; Meta) have risen sharply. Investing in sustainable organic search visibility is the single highest ROI growth engine for long-term profitability.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 border-l-4 border-[#F59E0B] pl-4">
                2. SEO Agency in Kolkata vs. Senior SEO Freelancer in Kolkata
              </h3>
              <p>
                When searching for an <strong>SEO agency in Kolkata</strong>, many business owners expect top-tier execution, only to find that traditional agencies spend up to 60% of client retainers on account managers, sales commissions, and commercial office spaces. The actual implementation is frequently passed down to junior interns.
              </p>
              <p>
                Hiring a dedicated, experienced <strong>SEO freelancer in Kolkata</strong> eliminates those unnecessary middle layers:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-700">
                <li><strong>Direct Specialist Accountability:</strong> You work directly with a 5+ year experienced SEO strategist on every call, audit, and keyword push.</li>
                <li><strong>Agile Execution Speed:</strong> Technical updates and content refreshes are deployed rapidly without bureaucratic agency delays.</li>
                <li><strong>Cost-Effective Premium Quality:</strong> Get identical or superior #1 Google search results at a fraction of agency costs.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 border-l-4 border-emerald-500 pl-4">
                3. The 4-Pillar Roadmap to Ranking #1 in Kolkata
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 not-prose">
                <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm">
                  <div className="text-base font-bold text-[#0066FF]">Pillar 1: Technical Infrastructure</div>
                  <p className="text-xs text-slate-600">Optimizing Core Web Vitals (INP/LCP), crawl budget, XML sitemaps, and JavaScript rendering for React/Next.js.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm">
                  <div className="text-base font-bold text-[#F59E0B]">Pillar 2: Semantic On-Page &amp; Content</div>
                  <p className="text-xs text-slate-600">Building entity content hubs, intent-matched keywords, and semantic NLP optimization for high commercial conversion.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm">
                  <div className="text-base font-bold text-emerald-600">Pillar 3: Google Maps 3-Pack (GMB)</div>
                  <p className="text-xs text-slate-600">Dominating local Kolkata queries in Salt Lake, Park Street, New Town, and Howrah through geo-targeted citations.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-sm">
                  <div className="text-base font-bold text-purple-600">Pillar 4: Digital PR &amp; GEO Authority</div>
                  <p className="text-xs text-slate-600">Acquiring high-tier editorial mentions and building knowledge graph entities cited directly by Google AI Overviews.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ─── FREQUENTLY ASKED QUESTIONS (FAQ SECTION) ────────────────────────── */}
      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF] bg-[#EAF3FF] px-3 py-1 rounded-full border border-[#0066FF]/20">
              Clear Answers
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm">
              Helping you make the right choice between an agency and an experienced Kolkata SEO freelancer.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Why hire a senior SEO freelancer in Kolkata over an SEO agency in Kolkata?",
                a: "Traditional agencies in Kolkata incur high operational overheads, passing bloated retainer fees onto clients while assigning execution to junior interns. As an independent senior SEO freelancer in Kolkata with 5+ years of hands-on expertise, I provide direct 1-on-1 strategy, faster implementation, and superior ROI at a much lower cost."
              },
              {
                q: "How much does SEO cost in Kolkata?",
                a: "SEO costs vary depending on keyword competitiveness and target market scope (Local Kolkata vs. National vs. Global). Because I operate without heavy agency overheads, I deliver premium agency-grade SEO packages at transparent, value-driven rates."
              },
              {
                q: "How fast can my website reach #1 on Google in Kolkata?",
                a: "Technical fixes and Google Local Map Pack boosts typically yield initial rank jumps within 30 to 60 days. Highly competitive commercial keywords achieve #1 ranking dominance within 3 to 6 months."
              },
              {
                q: "What is AI Overview (SGE) and GEO optimization?",
                a: "AI Overviews are AI-synthesized summaries presented at the top of Google search results. Generative Engine Optimization (GEO) ensures your brand is structured so AI search models directly cite and recommend your business."
              }
            ].map((faq, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#F59E0B] shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── CALL TO ACTION (CTA) SECTION ───────────────────────────────────── */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-r from-[#0066FF] via-[#0055DD] to-indigo-800 text-center space-y-8 shadow-2xl shadow-[#0066ff]/20 relative overflow-hidden text-white">
            
            {/* Background Glow */}
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#F59E0B]/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="space-y-4 max-w-2xl mx-auto">
              <span className="px-3.5 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider border border-white/20">
                Ready to Rank #1 in Kolkata?
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-black leading-tight text-white">
                Transform Organic Search Traffic Into Sales Revenue
              </h2>
              <p className="text-blue-100 text-base">
                Get a free custom technical SEO audit &amp; gap analysis for your Kolkata business today.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/website-audit"
                className="bg-white hover:bg-slate-100 text-[#0066FF] px-8 py-4 rounded-xl font-bold text-base transition-all shadow-xl hover:shadow-white/20 active:scale-95 flex items-center gap-2"
              >
                <span>Request Free SEO Audit</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact-us"
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-7 py-4 rounded-xl font-semibold text-base transition-all backdrop-blur-md"
              >
                <span>Schedule Consultation</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
