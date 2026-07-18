import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pritam Chatterjee | Premium SEO & Digital Marketing Consultant",
  description: "Transform your online presence with Pritam Chatterjee, a high-end Digital Marketing & Technical SEO Consultant. Futuristic growth strategies, data-backed Google & Facebook ads, and custom website design.",
  keywords: ["Pritam Chatterjee", "SEO Consultant", "Digital Marketing Consultant", "Technical SEO Specialist", "Google Ads Management", "Kolkata SEO Expert", "SEO Services Kolkata"],
  authors: [{ name: "Pritam Chatterjee", url: "https://pritamchatterjee.com" }],
  metadataBase: new URL("https://pritamchatterjee.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pritam Chatterjee | SEO & Digital Marketing Consultant",
    description: "Premium technical SEO, conversion-focused web design, and digital marketing consulting. Achieve exponential traffic growth and leads.",
    url: "https://pritamchatterjee.com",
    siteName: "Pritam Chatterjee Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900 selection:bg-[#0066FF] selection:text-white">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
