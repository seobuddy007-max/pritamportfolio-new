import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Pritam Chatterjee Consulting",
  description: "Learn how Pritam Chatterjee collects, protects, and handles your personal data, SEO audit requests, and communication details.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white pt-32 pb-24 text-left">
        <div className="max-w-4xl mx-auto px-6 font-sans text-gray-600 leading-relaxed">
          
          <h1 className="font-display font-black text-3xl sm:text-4xl text-gray-900 mb-8 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-gray-400 mb-6">Last Updated: August 1, 2026</p>

          <div className="space-y-6 text-sm">
            <p>
              Your privacy is extremely important to us. This Privacy Policy details how Pritam Chatterjee Consulting collects, uses, and safeguards the personal and business information you share with us when visiting our website, requesting an SEO audit, or subscribing to our newsletter.
            </p>

            <h3 className="font-display font-bold text-gray-900 text-lg mt-8">1. Information We Collect</h3>
            <p>
              We collect information directly from you when you fill out forms on our website. This includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li><strong>Contact Information:</strong> Your full name, corporate email address, and phone number when submitting contact or booking forms.</li>
              <li><strong>Website Audit Data:</strong> Domain URL, current monthly search traffic, target marketing goals, and budget range submitted via our SEO Audit form.</li>
              <li><strong>Newsletter Subscription Data:</strong> Corporate email address submitted for weekly marketing insights.</li>
              <li><strong>Technical Analytics Data:</strong> IP address, browser type, referral sources, and page interaction data collected via standard web analytics tools.</li>
            </ul>

            <h3 className="font-display font-bold text-gray-900 text-lg mt-8">2. How We Use Your Information</h3>
            <p>
              We use the collected information solely for legitimate consulting and operational purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>To prepare customized technical SEO audit reports and search strategy proposals.</li>
              <li>To contact you regarding scheduled strategy consultations and lead inquiries.</li>
              <li>To send weekly marketing newsletters and algorithm updates (you can unsubscribe at any time).</li>
              <li>To analyze site performance, user navigation patterns, and improve overall user experience.</li>
            </ul>

            <h3 className="font-display font-bold text-gray-900 text-lg mt-8">3. Data Sharing &amp; Third-Party Services</h3>
            <p>
              We respect your privacy and <strong>never sell, trade, or rent</strong> your personal or business data to third parties. Data is shared only with trusted infrastructure providers (such as web hosting, email delivery systems, and analytics providers) strictly necessary to deliver our services.
            </p>

            <h3 className="font-display font-bold text-gray-900 text-lg mt-8">4. Cookies &amp; Tracking Technologies</h3>
            <p>
              Our website uses essential cookies and performance analytics scripts to analyze visitor behavior and optimize site speed. You can manage or disable cookies through your web browser settings at any time.
            </p>

            <h3 className="font-display font-bold text-gray-900 text-lg mt-8">5. Data Security</h3>
            <p>
              We implement industry-standard encryption protocols (HTTPS/SSL) and administrative access controls to safeguard your data against unauthorized access, disclosure, or alteration.
            </p>

            <h3 className="font-display font-bold text-gray-900 text-lg mt-8">6. Your Data Rights</h3>
            <p>
              You have the right to request access to the personal data we hold about you, request corrections, or request deletion of your information from our records. To exercise any of these rights, please contact us at <a href="mailto:contact@pritamchatterjee.com" className="text-[#0066FF] hover:underline font-semibold">contact@pritamchatterjee.com</a>.
            </p>

            <h3 className="font-display font-bold text-gray-900 text-lg mt-8">7. Contact Us</h3>
            <p>
              If you have any questions regarding this Privacy Policy or our data practices, please reach out to:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 mt-4">
              <strong className="text-gray-900 font-bold block mb-1">Pritam Chatterjee Consulting</strong>
              <p className="text-xs text-gray-600">Email: contact@pritamchatterjee.com</p>
              <p className="text-xs text-gray-600">Location: Kolkata, West Bengal, India</p>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
