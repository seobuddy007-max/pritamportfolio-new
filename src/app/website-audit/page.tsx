"use client";

import { useState, FormEvent, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Terminal, RefreshCw, CheckCircle2, ArrowRight } from "lucide-react";

export default function WebsiteAuditPage() {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "scanning" | "completed">("idle");
  const [scanStep, setScanStep] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  const scanSteps = [
    "Initializing connection to crawler nodes...",
    "Querying DNS resolution & SSL certificate verification...",
    "Scanning home node HTML headers & canonical structures...",
    "Fetching site sitemap.xml and assessing crawling hierarchy...",
    "Executing rendering pipeline: Hydrating React DOM tree...",
    "Diagnosing Core Web Vitals: Measuring LCP, INP, and CLS margins...",
    "Validating relational Entity Schemas (JSON-LD Organization graph)...",
    "Auditing meta header descriptors, image alt tags, and structural tags...",
    "Generating crawler performance report...",
    "Syncing results with Pritam Chatterjee dashboard..."
  ];

  const handleAuditSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (url && email) {
      setStatus("scanning");
      setScanStep(0);
      setLogs([scanSteps[0]]);
    }
  };

  useEffect(() => {
    if (status !== "scanning") return;

    if (scanStep < scanSteps.length - 1) {
      const timer = setTimeout(() => {
        const nextStep = scanStep + 1;
        setScanStep(nextStep);
        setLogs((prev) => [...prev, scanSteps[nextStep]]);
      }, 700); // 700ms interval for each log item
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setStatus("completed");
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [status, scanStep]);

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white pt-32 pb-24 text-left">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Header */}
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF] mb-2 block">
              SEO Diagnostics
            </span>
            <h1 className="font-display font-black text-4xl sm:text-5xl text-gray-900 tracking-tight leading-[1.1] mb-4">
              Website <span className="text-gradient">SEO Audit</span> Scanner
            </h1>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              Input your target business URL below. Our crawling diagnostic engine will crawl your code structure, index headers, scan page responsiveness, and identify bottlenecks.
            </p>
          </div>

          <div className="bg-[#0F172A] text-white rounded-3xl border border-white/5 overflow-hidden shadow-2xl relative">
            
            {/* Terminal Top Window Bar */}
            <div className="bg-slate-900 px-6 py-4 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#4DA3FF]" />
                <span className="text-xs font-semibold text-gray-400 font-mono">seo_diagnostic_engine.sh</span>
              </div>
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-8 font-mono text-xs sm:text-sm min-h-[350px] flex flex-col justify-between">
              
              {status === "idle" && (
                <form onSubmit={handleAuditSubmit} className="flex-1 flex flex-col gap-6 max-w-lg mx-auto py-8 w-full">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-gray-400 uppercase font-sans">Business Domain URL</label>
                    <input
                      type="url"
                      required
                      placeholder="https://example.com"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all font-mono"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-gray-400 uppercase font-sans">Corporate Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="marketing@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all font-mono"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group flex items-center justify-center gap-2 bg-[#0066FF] hover:bg-[#0055DD] text-white px-6 py-4 rounded-xl text-xs font-bold transition-all mt-4 font-sans cursor-pointer"
                  >
                    <span>Start System Diagnostic Scanner</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </form>
              )}

              {status === "scanning" && (
                <div className="flex-1 flex flex-col gap-4 text-left font-mono">
                  <div className="flex items-center gap-2 text-[#4DA3FF] mb-2">
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span className="font-bold">SYSTEM SCANNING ACTIVE IN OBJECT: {url}</span>
                  </div>
                  <div className="space-y-2 overflow-y-auto max-h-[250px] pr-2 text-slate-300">
                    {logs.map((log, i) => (
                      <div key={i} className="flex gap-2 items-start">
                        <span className="text-[#0066FF] shrink-0">&gt;</span>
                        <span className={i === logs.length - 1 ? "text-white font-bold" : ""}>{log}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {status === "completed" && (
                <div className="flex-1 flex flex-col items-center justify-center text-center gap-4 py-8 max-w-md mx-auto">
                  <CheckCircle2 className="w-14 h-14 text-emerald-400" />
                  <h3 className="font-display font-black text-xl text-white">Diagnostics Synchronized</h3>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-sans">
                    Crawl logs for <strong className="text-white">{url}</strong> have been mapped. A copy of the audit findings is compiling and will be sent to <strong className="text-white">{email}</strong>.
                  </p>
                  <p className="text-xs text-gray-500 italic leading-relaxed font-sans mt-2">
                    Pritam Chatterjee will review the crawl reports manually and email you your customized optimization strategy within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-xs text-gray-400 hover:text-white underline mt-4 font-sans cursor-pointer"
                  >
                    Scan another URL
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
