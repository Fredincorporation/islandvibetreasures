"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  Search,
  Tag,
  Filter,
  BookOpen,
} from "lucide-react";
import { blogPosts, BlogPost } from "@/data/blog";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set(blogPosts.map((post) => post.category));
    return ["All", ...Array.from(set)];
  }, []);

  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.category.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];

  return (
    <div className="min-h-screen bg-sand-50/40 pb-20">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-ocean-950 via-ocean-900 to-emerald-950 py-16 sm:py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-gold-300 text-xs font-bold uppercase tracking-widest border border-white/20 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" /> Island Lifestyle & Style Journal 🌺
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-white font-[family-name:var(--font-display)] tracking-tight">
            The Island Journal
          </h1>
          <p className="text-ocean-200 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Resort wear trend reports, artisan stories, jewelry care guides, and tropical lifestyle inspiration curated by our team.
          </p>

          {/* Search bar */}
          <div className="pt-6 max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-sand-400" />
              <input
                type="text"
                placeholder="Search stories by topic, style, or tag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-white/15 backdrop-blur-lg border border-white/25 rounded-2xl text-white placeholder:text-sand-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:bg-white/20 transition-all shadow-inner"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        {/* Category Filters */}
        <div className="flex items-center justify-between flex-wrap gap-4 border-b border-sand-200 pb-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none max-w-full">
            <span className="text-xs font-bold text-ocean-900 flex items-center gap-1.5 uppercase tracking-wider mr-2">
              <Filter className="w-3.5 h-3.5 text-coral-600" /> Categories:
            </span>
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    active
                      ? "bg-ocean-900 text-white shadow-sm scale-105"
                      : "bg-white text-sand-700 border border-sand-200 hover:bg-sand-100 hover:text-ocean-900"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="text-xs font-semibold text-sand-500">
            Showing <span className="text-ocean-900 font-bold">{filteredPosts.length}</span> {filteredPosts.length === 1 ? "story" : "stories"}
          </div>
        </div>

        {/* Featured Post Card (Show if 'All' category and no search query) */}
        {selectedCategory === "All" && !searchQuery && featuredPost && (
          <div className="bg-white rounded-3xl border border-sand-200 shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-8 items-center group">
            <div className="relative aspect-[16/10] lg:aspect-square overflow-hidden bg-sand-100">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <span className="absolute top-4 left-4 px-3.5 py-1 bg-gold-500 text-ocean-950 font-extrabold text-xs rounded-full uppercase tracking-wider shadow-md">
                Featured Story
              </span>
            </div>

            <div className="p-8 sm:p-10 space-y-5">
              <div className="flex items-center gap-3 text-xs text-sand-500 font-medium">
                <span className="px-2.5 py-1 bg-coral-50 text-coral-600 font-bold rounded-lg uppercase tracking-wider border border-coral-200/60">
                  {featuredPost.category}
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-sand-400" /> {featuredPost.date}
                </span>
                <span>&bull;</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-sand-400" /> {featuredPost.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold text-ocean-900 font-[family-name:var(--font-display)] leading-tight group-hover:text-ocean-600 transition-colors">
                {featuredPost.title}
              </h2>

              <p className="text-sand-600 text-sm sm:text-base leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <div className="pt-4 flex items-center justify-between border-t border-sand-100">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gold-300">
                    <Image
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-ocean-900 leading-tight">
                      {featuredPost.author.name}
                    </h4>
                    <p className="text-[11px] text-sand-500">{featuredPost.author.role}</p>
                  </div>
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="px-6 py-3 bg-ocean-900 hover:bg-ocean-800 text-white font-bold rounded-xl text-xs transition-all inline-flex items-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-ocean-900 font-[family-name:var(--font-display)] flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-coral-600" />
              {selectedCategory === "All" && !searchQuery
                ? "Recent Stories"
                : `Articles in ${selectedCategory !== "All" ? selectedCategory : "Search Results"}`}
            </h2>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-sand-200 space-y-4">
              <div className="w-16 h-16 bg-sand-100 rounded-full flex items-center justify-center mx-auto text-sand-400">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-ocean-900">No articles found</h3>
              <p className="text-sand-600 text-sm max-w-md mx-auto">
                We couldn't find any articles matching your search criteria. Try adjusting your query or category selection.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="px-5 py-2.5 bg-ocean-900 text-white font-bold text-xs rounded-xl hover:bg-ocean-800 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-3xl border border-sand-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group hover:-translate-y-1"
                >
                  <div className="relative aspect-[16/10] bg-sand-100 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-md text-ocean-950 font-bold text-[10px] rounded-full uppercase tracking-wider shadow-xs border border-white/50">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-xs text-sand-500 font-medium">
                        <span>{post.date}</span>
                        <span>&bull;</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h3 className="font-bold text-ocean-900 text-lg leading-snug group-hover:text-coral-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-sand-600 text-xs leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-sand-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="relative w-6 h-6 rounded-full overflow-hidden border border-gold-300">
                          <Image
                            src={post.author.avatar}
                            alt={post.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-[11px] font-semibold text-ocean-900">
                          {post.author.name}
                        </span>
                      </div>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-coral-600 hover:text-coral-700 font-bold text-xs inline-flex items-center gap-1 transition-colors"
                      >
                        Read Story <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
