"use client";

import { useEffect, useState } from "react";
import { Search, Calendar, User, Clock, ArrowRight, BookOpen, AlertCircle } from "lucide-react";
import { getAllPosts, getAllCategories, Post, Category } from "@/lib/wordpress";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function BlogSection() {
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

  // Filter logic: match search query & selected category
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
  const latestPosts = filteredPosts.slice(1);

  return (
    <section id="blog" className="py-28 bg-gray-50 overflow-hidden px-6 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0066FF]">
              Knowledge Hub & Insights
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-gray-900 mt-2 tracking-tight">
              Marketing <span className="text-gradient">Intelligence Blog</span>
            </h2>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-10 pr-4 text-xs font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0066FF] focus:ring-1 focus:ring-[#0066FF] transition-all"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-gray-200/60">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeCategory === "all"
                ? "bg-[#0066FF] text-white"
                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-100"
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
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-100"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {loading ? (
          /* Loading skeleton state */
          <div className="flex flex-col items-center justify-center py-20 gap-3">
            <span className="w-8 h-8 rounded-full border-4 border-gray-200 border-t-[#0066FF] animate-spin"></span>
            <span className="text-xs font-semibold text-gray-400">Syncing with Headless WordPress...</span>
          </div>
        ) : filteredPosts.length === 0 ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center py-20 bg-white border border-gray-100 rounded-3xl gap-4">
            <AlertCircle className="w-10 h-10 text-gray-300" />
            <h3 className="font-bold text-gray-700">No Articles Found</h3>
            <p className="text-gray-400 text-xs max-w-xs">
              We couldn't find any results matching "{searchQuery}" under the selected categories.
            </p>
          </div>
        ) : (
          /* Blog Grid List */
          <div className="flex flex-col gap-10">
            
            {/* 1. Featured Article (Big card) */}
            {featuredPost && activeCategory === "all" && !searchQuery && (
              <div className="grid grid-cols-1 lg:grid-cols-12 bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="lg:col-span-7 relative h-72 lg:h-full min-h-[300px]">
                  <img
                    src={featuredPost.featuredImage}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>

                <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between text-left items-start">
                  <div className="flex flex-col gap-4">
                    <span className="text-[10px] font-bold text-[#0066FF] bg-[#EAF3FF] px-2.5 py-1 rounded-full uppercase tracking-wider self-start">
                      Featured Article
                    </span>
                    
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-gray-900 leading-tight tracking-tight">
                      <Link href={`/blog/${featuredPost.slug}`} className="hover:text-[#0066FF] transition-colors">
                        {featuredPost.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="w-full mt-8 pt-6 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        className="w-8 h-8 rounded-full border border-gray-200"
                      />
                      <div>
                        <div className="text-xs font-bold text-gray-800">{featuredPost.author.name}</div>
                        <div className="text-[9px] text-gray-400">{featuredPost.date}</div>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="group flex items-center gap-1.5 text-xs font-bold text-[#0066FF] hover:underline"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* 2. Latest Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(activeCategory !== "all" || searchQuery ? filteredPosts : latestPosts).map((post) => (
                <article
                  key={post.slug}
                  className="bg-white border border-gray-150 rounded-2xl overflow-hidden flex flex-col justify-between hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="text-left">
                    {/* Featured Image */}
                    <div className="relative h-48 w-full overflow-hidden">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    {/* Metadata & Title */}
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

                      <h4 className="font-display font-bold text-lg text-gray-900 leading-snug tracking-tight mb-2 group-hover:text-[#0066FF] transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h4>

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
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
