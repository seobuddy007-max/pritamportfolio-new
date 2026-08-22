import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin, Calendar, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Pritam Chatterjee | Request Custom SEO Strategy",
  description: "Get in touch with Pritam Chatterjee, premium Technical SEO and Digital Marketing consultant. Schedule an alignment call, or request a custom growth audit.",
  alternates: {
    canonical: "/contact-us",
  },
};

export default function ContactUsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white">
        
        {/* Contact Coordinates Info Header */}
        <section className="pt-32 pb-16 bg-gray-50 border-b border-gray-100 text-left">
          <div className="max-w-7xl mx-auto px-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF] mb-2 block">
              Direct Channels
            </span>
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-gray-900 tracking-tight leading-[1.1] mb-12">
              Get In <span className="text-gradient">Touch</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-150 rounded-2xl p-6 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 bg-[#EAF3FF] rounded-lg flex items-center justify-center text-[#0066FF] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 font-bold block uppercase tracking-wider mb-1">Send Email</span>
                  <a href="mailto:contact@pritamchatterjee.com" className="text-sm font-bold text-gray-900 hover:text-[#0066FF] transition-colors">
                    contact@pritamchatterjee.com
                  </a>
                  <span className="text-xs text-gray-500 block mt-1">Average reply time: 12 Hours</span>
                </div>
              </div>

              <div className="bg-white border border-gray-150 rounded-2xl p-6 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 bg-[#EAF3FF] rounded-lg flex items-center justify-center text-[#0066FF] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 font-bold block uppercase tracking-wider mb-1">Phone Inquiry</span>
                  <a href="tel:+919876543210" className="text-sm font-bold text-gray-900 hover:text-[#0066FF] transition-colors">
                    +91 98765 43210
                  </a>
                  <span className="text-xs text-gray-500 block mt-1">Mon-Fri, 10 AM to 7 PM IST</span>
                </div>
              </div>

              <div className="bg-white border border-gray-150 rounded-2xl p-6 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 bg-[#EAF3FF] rounded-lg flex items-center justify-center text-[#0066FF] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 font-bold block uppercase tracking-wider mb-1">Office Hours</span>
                  <span className="text-sm font-bold text-gray-900">
                    10:00 - 19:00 (GMT+5:30)
                  </span>
                  <span className="text-xs text-gray-500 block mt-1">Sector V, Salt Lake City, Kolkata</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <ContactForm />

        {/* Local Map Citation info */}
        <section className="py-20 bg-white border-t border-gray-100 text-left">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF] mb-2 block">
                Office Location
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-gray-900 tracking-tight mb-4">
                Salt Lake Sector V, Kolkata
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6">
                Our main consulting node is in the IT hub of West Bengal: Salt Lake Sector V, Kolkata. If you are operating in West Bengal, we can arrange face-to-face marketing consultations. For global clients, we schedule alignment sessions via Google Meet or Zoom.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2.5 text-xs text-gray-600 font-medium">
                  <MapPin className="w-4 h-4 text-[#0066FF]" />
                  <span>Kolkata, WB, India - 700091</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-7">
              {/* Decorative Map Box */}
              <div className="relative w-full h-[300px] bg-gray-50 border border-gray-150 rounded-3xl overflow-hidden flex items-center justify-center p-6 shadow-inner">
                <div className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-[#0066FF] flex items-center justify-center shadow-lg shadow-[#0066ff]/45">
                    <span className="absolute -inset-4 rounded-full border-2 border-[#0066FF]/40 animate-ping"></span>
                  </div>
                  <span className="text-[10px] font-bold text-gray-800 bg-white border border-gray-200 shadow-sm px-2.5 py-1 rounded-full mt-3 uppercase tracking-wider whitespace-nowrap">
                    Pritam Consulting Node
                  </span>
                </div>
                {/* Decorative map grids */}
                <svg viewBox="0 0 100 50" className="w-full h-full opacity-5" stroke="currentColor" strokeWidth="0.3">
                  <pattern id="contactGrid" width="4" height="4" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="0.5" fill="black" />
                  </pattern>
                  <rect width="100" height="50" fill="url(#contactGrid)" />
                </svg>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
