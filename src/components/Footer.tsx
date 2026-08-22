"use client";

import Link from "next/link";
import { Send, ArrowUp, Mail, Award, CheckCircle } from "lucide-react";
import { FormEvent, useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0F172A] text-white border-t border-white/10 pt-20 pb-8 overflow-hidden">
      {/* Background Decorator Particles */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#0066FF] rounded-full filter blur-[150px] opacity-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#7DD3FC] rounded-full filter blur-[150px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="font-display font-black text-3xl tracking-tight text-gradient-neon">
              PRITAM
            </span>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Award-winning SEO & growth marketing consultant. Building high-end digital infrastructure that turns organic search traffic into sales pipeline revenue.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#0066FF] hover:bg-[#0066FF]/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#0066FF] hover:bg-[#0066FF]/10 transition-all duration-300"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="mailto:contact@pritamchatterjee.com"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#0066FF] hover:bg-[#0066FF]/10 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Static Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/5 max-w-sm">
              <div>
                <div className="text-xl font-bold text-white">#1 Rank</div>
                <div className="text-[10px] text-gray-500 uppercase">Google SERP</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">3.1x</div>
                <div className="text-[10px] text-gray-500 uppercase">Avg ROI</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">+54K</div>
                <div className="text-[10px] text-gray-500 uppercase">Leads Sent</div>
              </div>
            </div>
          </div>

          {/* Links Col 1: Navigation */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">
                  Portfolio &amp; Proof
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-white transition-colors">
                  Blog &amp; Insights
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Col 2: HTML Sitemap */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#F59E0B]">
              HTML Sitemap
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-gray-400">
              <li>
                <Link
                  href="/seo-expert-in-kolkata"
                  className="text-white hover:text-[#38BDF8] font-medium transition-colors flex items-center gap-1.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]"></span>
                  SEO Expert in Kolkata
                </Link>
              </li>
              <li>
                <Link href="/seo-expert-in-kolkata#services" className="hover:text-white transition-colors text-xs text-gray-400 pl-3">
                  Kolkata SEO Services
                </Link>
              </li>
              <li>
                <Link href="/seo-expert-in-kolkata#ai-overview" className="hover:text-white transition-colors text-xs text-gray-400 pl-3">
                  AI Overview &amp; GEO
                </Link>
              </li>
              <li>
                <Link href="/website-audit" className="hover:text-white transition-colors">
                  Website Audit
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="hover:text-white transition-colors text-xs text-gray-500">
                  XML Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Col 3: Newsletter */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              Weekly SEO Intelligence
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Get raw SEO audits, marketing templates, and algorithm updates delivered straight to your inbox. No fluff.
            </p>
            <form onSubmit={handleSubscribe} className="relative mt-2">
              <input
                type="email"
                required
                placeholder="Enter corporate email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-4 pr-12 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 p-2 bg-[#0066FF] hover:bg-[#4DA3FF] text-white rounded-lg transition-colors cursor-pointer"
                aria-label="Subscribe"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            {subscribed && (
              <div className="flex items-center gap-2 text-xs text-[#7DD3FC]">
                <CheckCircle className="w-4 h-4" />
                <span>Subscription successful! Welcome aboard.</span>
              </div>
            )}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-gray-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} Pritam Chatterjee. All rights reserved. Designed &amp; created by Pritam Chatterjee.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms-condition" className="hover:text-white">Terms of Service</Link>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer group"
            >
              <span>Scroll to Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
