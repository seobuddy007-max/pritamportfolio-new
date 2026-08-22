"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blogs" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 glass-navbar shadow-md shadow-[#0066ff]/5"
            : "py-6 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-display font-black text-2xl tracking-tight text-gradient">
              PRITAM
            </span>
            <div className="hidden sm:flex items-center gap-1 bg-[#EAF3FF] px-2 py-0.5 rounded-full border border-[#0066ff]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF] animate-pulse"></span>
              <span className="text-[10px] font-medium text-[#0066FF] uppercase tracking-wider">
                SEO ACTIVE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-[#0066FF] transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Call to Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact-us"
              className="text-xs font-semibold text-[#0066FF] hover:underline"
            >
              Book Call
            </Link>
            <Link
              href="/website-audit"
              className="group flex items-center gap-2 bg-[#0066FF] hover:bg-[#0055DD] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-[#0066ff]/25 active:scale-95"
            >
              <span>Get Free SEO Audit</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <Link
              href="/website-audit"
              className="text-xs font-bold bg-[#0066FF] text-white px-4 py-2 rounded-full shadow-sm"
            >
              Audit
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 hover:text-[#0066FF] transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-white border-b border-gray-100 shadow-xl md:hidden px-6 py-8 overflow-y-auto max-h-[calc(100vh-60px)]"
          >
            <div className="flex flex-col gap-5 text-left">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col gap-2">
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-semibold text-gray-900 hover:text-[#0066FF]"
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
              <hr className="border-gray-100 my-2" />
              <div className="flex flex-col gap-4">
                <Link
                  href="/contact-us"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 border border-[#0066ff]/30 text-[#0066FF] font-semibold py-3 rounded-xl hover:bg-[#EAF3FF]"
                >
                  Book Free Consultation
                </Link>
                <Link
                  href="/website-audit"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 bg-[#0066FF] text-white font-semibold py-3 rounded-xl hover:bg-[#0055DD]"
                >
                  <span>Request Free SEO Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
