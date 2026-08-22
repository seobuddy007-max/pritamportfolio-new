import { getPostsByAuthor, getAllPosts } from "@/lib/wordpress";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, ArrowRight, Award, ShieldCheck, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const authorName = slug === "pritam-chatterjee" ? "Pritam Chatterjee" : slug.toUpperCase();
  return {
    title: `${authorName} Profile & Articles | Pritam Chatterjee Insights`,
    description: `Read articles and expert marketing notes authored by ${authorName}, Digital Marketing & SEO Consultant.`,
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  // Get all unique authors
  const authors = Array.from(new Set(posts.map((p) => p.author.slug)));
  return authors.map((slug) => ({
    slug,
  }));
}

export default async function AuthorPage({ params }: Props) {
  const { slug } = await params;
  const posts = await getPostsByAuthor(slug);

  // Take author profile from first post or provide fallback details
  const author = posts[0]?.author || {
    name: "Pritam Chatterjee",
    slug: "pritam-chatterjee",
    avatar: "/images/pritam-chatterjee.jpg",
    bio: "Pritam Chatterjee is a seasoned SEO Specialist & Digital Marketing Consultant with 5+ years of experience helping businesses scale their organic visibility, maximize ROI on ad spend, and build high-converting web applications.",
    role: "Founder & Chief SEO Consultant",
  };

  return (
    <>
      <Navbar />

      <main className="flex-1 bg-white pt-32 pb-24 text-left">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Back button */}
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-gray-500 hover:text-[#0066FF] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Hub
          </Link>

          {/* Author Profile card */}
          <div className="bg-gray-50 border border-gray-150 rounded-3xl p-8 sm:p-10 mb-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-3 flex justify-center">
              <img
                src={author.avatar}
                alt={author.name}
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
              />
            </div>
            
            <div className="md:col-span-9 text-left">
              <div className="inline-flex items-center gap-1.5 bg-[#EAF3FF] text-[#0066FF] px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2">
                <Award className="w-3.5 h-3.5" /> Verified Author
              </div>
              <h1 className="font-display font-black text-3xl text-gray-900 mb-1">{author.name}</h1>
              <div className="text-xs font-semibold text-gray-400 uppercase mb-4">{author.role}</div>
              <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-2xl">{author.bio}</p>
              
              <div className="flex items-center gap-4 text-xs font-bold text-gray-500">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#0066FF]" />
                  <span>Google Ads Certified</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-[#4DA3FF]" />
                  <span>contact@pritamchatterjee.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Heading for author's articles */}
          <h2 className="font-display font-black text-2xl text-gray-900 mb-8">
            Articles Written by <span className="text-gradient">{author.name}</span>
          </h2>

          {posts.length === 0 ? (
            <div className="py-12 text-center text-gray-500">
              This author has not published any articles yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white border border-gray-150 rounded-2xl overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="text-left">
                    <div className="relative h-48 w-full overflow-hidden">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-3 text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-lg text-gray-900 leading-snug tracking-tight mb-2 group-hover:text-[#0066FF] transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>

                      <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 border-t border-gray-100 flex items-center justify-between">
                    <div className="text-xs font-bold text-[#0066FF] group-hover:underline flex items-center gap-1">
                      <span>Read Full Post</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

        </div>
      </main>

      <Footer />
    </>
  );
}
