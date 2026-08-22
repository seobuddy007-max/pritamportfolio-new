"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Search, Calendar, Clock, AlertCircle } from "lucide-react";
import { getAllPosts, getAllCategories, Post, Category } from "@/lib/wordpress";

export default function BlogsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [postsList, catsList] = await Promise.all([
          getAllPosts(),
          getAllCategories()
        ]);
        setPosts(postsList);
        setCategories(catsList);
      } catch (err) {
        console.error("Failed to load blog posts:", err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  // Filter posts
  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory =
      activeCategory === "all" ||
      post.categories.some((cat) => cat.slug === activeCategory);

    return matchesSearch && matchesCategory;
  });

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-white pt-32 pb-24 text-left">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF] mb-2 block">
              Knowledge Hub & Insights
            </span>
            <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-gray-900 tracking-tight leading-[1.1] mb-6">
              Marketing <span className="text-gradient">Intelligence Blog</span>
            </h1>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              In-depth research and actionable playbooks on technical SEO, Core Web Vitals optimizations, search crawl budgeting, entity architectures, and PPC growth strategies.
            </p>
          </div>

          {/* Search & Categories Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-6 border-b border-gray-150">
            {/* Categories */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === "all"
                    ? "bg-[#0066FF] text-white"
                    : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                All Insights
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setActiveCategory(cat.slug)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeCategory === cat.slug
                      ? "bg-[#0066FF] text-white"
                      : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search playbooks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-10 pr-4 text-xs font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
            </div>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-3">
              <span className="w-8 h-8 rounded-full border-4 border-gray-200 border-t-[#0066FF] animate-spin"></span>
              <span className="text-xs font-semibold text-gray-400">Syncing with Headless WordPress CMS...</span>
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 bg-gray-50 border border-gray-100 rounded-3xl gap-4">
              <AlertCircle className="w-10 h-10 text-gray-300" />
              <h3 className="font-bold text-gray-700">No Articles Found</h3>
              <p className="text-gray-400 text-xs max-w-xs text-center">
                We couldn't find any results matching "{searchQuery}" under the selected categories.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-12">
              {/* Featured Post (only displayed when not searching/filtering specific categories) */}
              {featuredPost && activeCategory === "all" && !searchQuery && (
                <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#0F172A] text-white border border-white/5 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <div className="lg:col-span-7 relative h-72 lg:h-full min-h-[350px]">
                    <img
                      src={featuredPost.featuredImage}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent"></div>
                  </div>

                  <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between text-left items-start">
                    <div className="flex flex-col gap-4">
                      <span className="text-[10px] font-bold text-[#4DA3FF] bg-white/10 px-2.5 py-1 rounded-full uppercase tracking-wider self-start">
                        Featured Article
                      </span>
                      
                      <h2 className="font-display font-black text-2xl sm:text-3xl text-white leading-tight tracking-tight">
                        <Link href={`/blog/${featuredPost.slug}`} className="hover:text-[#4DA3FF] transition-colors">
                          {featuredPost.title}
                        </Link>
                      </h2>
                      
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-4">
                        {featuredPost.excerpt}
                      </p>
                    </div>

                    <div className="w-full mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={featuredPost.author.avatar}
                          alt={featuredPost.author.name}
                          className="w-8 h-8 rounded-full border border-white/10"
                        />
                        <div>
                          <div className="text-xs font-bold text-white">{featuredPost.author.name}</div>
                          <div className="text-[9px] text-gray-500">{featuredPost.date}</div>
                        </div>
                      </div>

                      <Link
                        href={`/blog/${featuredPost.slug}`}
                        className="group flex items-center gap-1.5 text-xs font-bold text-[#4DA3FF] hover:underline"
                      >
                        <span>Read Article</span>
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Grid of articles */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(activeCategory !== "all" || searchQuery ? filteredPosts : remainingPosts).map((post) => (
                  <article
                    key={post.slug}
                    className="bg-white border border-gray-150 rounded-2xl overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="text-left">
                      {/* Image */}
                      <div className="relative h-48 w-full overflow-hidden">
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>

                      {/* Content */}
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

                    {/* Footer */}
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
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
