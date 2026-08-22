import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GrowthJourney from "@/components/GrowthJourney";
import ServicesCubes from "@/components/ServicesCubes";
import Dashboard from "@/components/Dashboard";
import ProjectShowcase from "@/components/ProjectShowcase";
import ExpertiseWheel from "@/components/ExpertiseWheel";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import BlogSection from "@/components/BlogSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  // SEO Schema Markup (ProfessionalService & FAQ)
  const schemaJson = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://pritamchatterjee.com/#consulting",
        "name": "Pritam Chatterjee | SEO & Digital Marketing Consultant",
        "url": "https://pritamchatterjee.com",
        "telephone": "+919876543210",
        "logo": "https://pritamchatterjee.com/logo.png",
        "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        "description": "Premium SEO, Next.js web design, and paid advertising consultation helping enterprise businesses scale search rankings and convert leads.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Salt Lake Sector V",
          "addressLocality": "Kolkata",
          "addressRegion": "West Bengal",
          "postalCode": "700091",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "22.5726",
          "longitude": "88.4331"
        },
        "sameAs": [
          "https://www.linkedin.com/in/pritam-chatterjee6/",
          "https://twitter.com"
        ],
        "priceRange": "$$"
      },
      {
        "@type": "FAQPage",
        "@id": "https://pritamchatterjee.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What services does Pritam Chatterjee provide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Pritam Chatterjee provides high-end Technical SEO consulting, enterprise-level Google Ads and Facebook Ads management, conversion-focused Next.js/React website design and development, and Web Analytics tracking (GA4/GTM)."
            }
          },
          {
            "@type": "Question",
            "name": "How does SEO consultation improve business revenue?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "By targeting search queries with high-intent search volume, optimizing site architecture for search crawl efficiency, and building structured Schema networks. This drives highly qualified organic traffic that converts directly into sales pipelines."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <GrowthJourney />
        <ServicesCubes />
        <Dashboard />
        <ProjectShowcase />
        <ExpertiseWheel />
        <TestimonialsCarousel />
        <BlogSection />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
