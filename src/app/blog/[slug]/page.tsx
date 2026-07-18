import { getPostBySlug, getAllPosts } from "@/lib/wordpress";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, User, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${post.title} | Pritam Chatterjee Insights`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      images: [{ url: post.featuredImage }],
    },
  };
}

// Pre-render static paths for performance target optimization
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Schema Markup (BlogPosting & Breadcrumb)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `https://pritamchatterjee.com/blog/${post.slug}/#post`,
        "url": `https://pritamchatterjee.com/blog/${post.slug}`,
        "headline": post.title,
        "datePublished": post.date,
        "dateModified": post.date,
        "description": post.excerpt,
        "image": post.featuredImage,
        "author": {
          "@type": "Person",
          "name": post.author.name,
          "url": `https://pritamchatterjee.com/blog/author/${post.author.slug}`,
          "image": post.author.avatar
        },
        "publisher": {
          "@type": "Organization",
          "name": "Pritam Chatterjee Consulting",
          "logo": {
            "@type": "ImageObject",
            "url": "https://pritamchatterjee.com/logo.png"
          }
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://pritamchatterjee.com/blog/${post.slug}/#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://pritamchatterjee.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://pritamchatterjee.com/#blog"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": `https://pritamchatterjee.com/blog/${post.slug}`
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="flex-1 bg-white pt-32 pb-24 text-left">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Back button */}
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-[#0066FF] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </Link>

          {/* Categories tag */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/category/${cat.slug}`}
                className="text-[10px] font-bold text-[#0066FF] bg-[#EAF3FF] px-2.5 py-1 rounded-full uppercase tracking-wider hover:bg-[#0066FF] hover:text-white transition-colors"
              >
                {cat.name}
              </Link>
            ))}
          </div>

          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-gray-900 leading-tight tracking-tight mb-6">
            {post.title}
          </h1>

          {/* Author Details & Meta */}
          <div className="flex flex-wrap items-center justify-between gap-6 border-y border-gray-100 py-6 mb-10">
            <div className="flex items-center gap-3">
              <Link href={`/blog/author/${post.author.slug}`}>
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full border border-gray-200"
                />
              </Link>
              <div>
                <Link
                  href={`/blog/author/${post.author.slug}`}
                  className="text-sm font-bold text-gray-900 hover:text-[#0066FF] block"
                >
                  {post.author.name}
                </Link>
                <span className="text-[10px] text-gray-400 font-semibold">{post.author.role}</span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs text-gray-400 font-medium">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="w-full h-[240px] sm:h-[400px] rounded-3xl overflow-hidden mb-12 shadow-md">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Main Article Content */}
          <article className="prose prose-blue prose-lg max-w-none text-gray-600 leading-relaxed font-sans">
            <div
              className="space-y-6 [&>h2]:font-display [&>h2]:font-black [&>h2]:text-2xl [&>h2]:text-gray-900 [&>h2]:mt-10 [&>h3]:font-display [&>h3]:font-bold [&>h3]:text-xl [&>h3]:text-gray-900 [&>h3]:mt-6 [&>blockquote]:border-l-4 [&>blockquote]:border-[#0066FF] [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-gray-500 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:space-y-2"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* Article Footer author bio box */}
          <div className="bg-gray-50 border border-gray-150 rounded-3xl p-6 sm:p-8 mt-16 flex flex-col sm:flex-row gap-6 items-start">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-16 h-16 rounded-full border border-gray-200 shrink-0"
            />
            <div className="text-left flex-1">
              <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Written By</span>
              <h4 className="font-display font-bold text-base text-gray-900 mb-2">{post.author.name}</h4>
              <p className="text-xs text-gray-500 leading-relaxed mb-4">{post.author.bio}</p>
              <Link
                href={`/blog/author/${post.author.slug}`}
                className="text-xs font-bold text-[#0066FF] hover:underline"
              >
                View Author Profile
              </Link>
            </div>
          </div>

          {/* Call to action panel at bottom */}
          <div className="bg-[#0F172A] text-white rounded-3xl p-8 sm:p-10 mt-12 text-left relative overflow-hidden border border-white/5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0066FF] rounded-full filter blur-[100px] opacity-20 pointer-events-none"></div>
            <div className="relative z-10 max-w-xl flex flex-col items-start gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#4DA3FF]">Next Steps</span>
              <h3 className="font-display font-black text-2xl tracking-tight">Need custom SEO mapping?</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-2">
                Let's run a manual search audit on your domains. We will map rankings, Core Web Vitals, and search queries against competitor structures to find pipeline growth opportunities.
              </p>
              <Link
                href="/#contact"
                className="group flex items-center gap-2 bg-[#0066FF] hover:bg-[#0055DD] text-white px-6 py-3 rounded-full text-xs font-bold transition-all"
              >
                <span>Request Free Audit</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
