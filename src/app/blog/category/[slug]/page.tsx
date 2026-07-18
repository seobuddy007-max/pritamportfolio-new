import { getPostsByCategory, getAllCategories } from "@/lib/wordpress";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cats = await getAllCategories();
  const matchedCat = cats.find((c) => c.slug === slug);
  const catName = matchedCat ? matchedCat.name : slug.toUpperCase();

  return {
    title: `${catName} Articles | Pritam Chatterjee Insights`,
    description: `Browse the latest professional digital marketing and technical consulting articles in our ${catName} archive.`,
  };
}

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map((cat) => ({
    slug: cat.slug,
  }));
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const posts = await getPostsByCategory(slug);
  const categories = await getAllCategories();
  const activeCat = categories.find((cat) => cat.slug === slug);
  const categoryName = activeCat ? activeCat.name : slug;

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

          {/* Heading */}
          <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF] block mb-2">
            Category Archive
          </span>
          <h1 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-12 tracking-tight">
            Articles in <span className="text-gradient">{categoryName}</span>
          </h1>

          {posts.length === 0 ? (
            <div className="py-20 text-center text-gray-500">
              No articles found in this category.
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

                      <h2 className="font-display font-bold text-lg text-gray-900 leading-snug tracking-tight mb-2 group-hover:text-[#0066FF] transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>

                      <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-6 h-6 rounded-full"
                      />
                      <span className="text-[10px] font-bold text-gray-700">{post.author.name}</span>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-xs font-bold text-[#0066FF] group-hover:underline flex items-center gap-1"
                    >
                      <span>Read</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
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
