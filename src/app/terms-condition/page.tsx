import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Pritam Chatterjee Consulting",
  description: "Read the terms of service governing website use, SEO audits, and marketing consulting agreements with Pritam Chatterjee.",
  alternates: {
    canonical: "/terms-condition",
  },
};

export default function TermsConditionPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white pt-32 pb-24 text-left">
        <div className="max-w-4xl mx-auto px-6 font-sans text-gray-600 leading-relaxed">
          
          <h1 className="font-display font-black text-3xl sm:text-4xl text-gray-900 mb-8 tracking-tight">
            Terms and Conditions
          </h1>
          <p className="text-xs text-gray-400 mb-6">Last Updated: July 18, 2026</p>

          <div className="space-y-6 text-sm">
            <p>
              Welcome to the digital marketing portfolio of Pritam Chatterjee. These Terms and Conditions govern your access to and use of our domain and consulting services.
            </p>

            <h3 className="font-display font-bold text-gray-900 text-lg mt-8">1. Acceptable Use</h3>
            <p>
              You agree to use this site for lawful purposes only. You are prohibited from uploading malicious code scripts, running scraping programs that damage site bandwidth, or submitting fake business domains and spam credentials via our SEO Audit form.
            </p>

            <h3 className="font-display font-bold text-gray-900 text-lg mt-8">2. Intellectual Property Rights</h3>
            <p>
              The code architecture, layout tokens, branding graphics, copy playbooks, and Case Study data displayed on this website are the property of Pritam Chatterjee. You may view and copy insights for individual educational purposes, but commercial redistribution is forbidden.
            </p>

            <h3 className="font-display font-bold text-gray-900 text-lg mt-8">3. Limitation of Consulting Liability</h3>
            <p>
              The SEO crawl audits, search traffic estimates, and advice shared in our playbooks represent consulting estimates. We construct optimized code structures, but search engine algorithms update autonomously. We make no ironclad guarantees regarding exact search ranking positions or ad conversion volumes.
            </p>

            <h3 className="font-display font-bold text-gray-900 text-lg mt-8">4. Modifications to Website</h3>
            <p>
              We reserve the right to modify services, retract articles, or update these terms at any time without notice. Continued use of the website following changes denotes agreement to the updated clauses.
            </p>

            <h3 className="font-display font-bold text-gray-900 text-lg mt-8">5. Governing Law</h3>
            <p>
              Any disputes arising from using our website or consulting services shall be governed under the jurisdiction laws of West Bengal, India.
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
