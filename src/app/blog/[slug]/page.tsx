import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Tag,
  BookOpen,
  Sparkles,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";
import { blogPosts, getBlogPostBySlug, getRelatedBlogPosts } from "@/data/blog";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Island Vibe Treasures",
    };
  }

  return {
    title: `${post.title} | Island Vibe Treasures Journal`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogPosts(slug, 3);

  return (
    <div className="min-h-screen bg-sand-50/40 pb-20">
      {/* Top Banner & Navigation */}
      <div className="bg-gradient-to-r from-ocean-950 via-ocean-900 to-emerald-950 text-white py-12 sm:py-16 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-gold-300 text-xs font-semibold tracking-wider transition-colors border border-white/10"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Island Journal
          </Link>

          <div className="flex flex-wrap items-center gap-3 text-xs text-sand-300">
            <span className="px-3 py-1 bg-gold-500 text-ocean-950 font-bold rounded-full uppercase tracking-wider">
              {post.category}
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-gold-300" /> {post.date}
            </span>
            <span>&bull;</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-gold-300" /> {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-[family-name:var(--font-display)] leading-tight tracking-tight text-sand-50">
            {post.title}
          </h1>

          <p className="text-sand-200 text-base sm:text-xl leading-relaxed max-w-3xl">
            {post.excerpt}
          </p>

          {/* Author Header */}
          <div className="pt-4 flex items-center justify-between border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-gold-400 shadow-md">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white leading-tight">
                  {post.author.name}
                </h3>
                <p className="text-xs text-ocean-300">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://islandvibetreasures.com/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/10 hover:bg-white/20 rounded-full text-sand-200 hover:text-white transition-colors"
                title="Share on Twitter"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-12">
        {/* Featured Image */}
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border border-sand-200 bg-sand-100">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content Paragraphs */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-sand-200 shadow-sm space-y-6">
          {post.content.map((paragraph, idx) => {
            // Check if paragraph is a subheading (starts with ###)
            if (paragraph.startsWith("### ")) {
              return (
                <h3
                  key={idx}
                  className="text-2xl font-bold text-ocean-900 pt-6 pb-2 border-b border-sand-100 font-[family-name:var(--font-display)] flex items-center gap-2"
                >
                  <Sparkles className="w-5 h-5 text-gold-500" />
                  {paragraph.replace("### ", "")}
                </h3>
              );
            }

            // Check if paragraph contains bullet points or lists
            if (paragraph.includes("\n- ") || paragraph.startsWith("- ")) {
              const lines = paragraph.split("\n");
              return (
                <ul key={idx} className="space-y-2 py-2 pl-4 list-disc list-inside text-sand-700">
                  {lines.map((line, lIdx) => (
                    <li key={lIdx} className="leading-relaxed">
                      {line.replace("- ", "").replace(/\*(.*?)\*/g, "$1")}
                    </li>
                  ))}
                </ul>
              );
            }

            // Check if paragraph is a numbered list item
            if (/^\d+\.\s/.test(paragraph)) {
              return (
                <div key={idx} className="pl-4 border-l-2 border-gold-400 py-1 text-sand-800 font-medium">
                  {paragraph}
                </div>
              );
            }

            // Standard paragraph
            return (
              <p key={idx} className="text-sand-700 leading-relaxed text-base sm:text-lg">
                {paragraph}
              </p>
            );
          })}

          {/* Tags */}
          <div className="pt-8 border-t border-sand-200 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-ocean-950 uppercase tracking-wider flex items-center gap-1 mr-2">
              <Tag className="w-3.5 h-3.5 text-coral-600" /> Tags:
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-sand-100 hover:bg-sand-200 text-sand-700 text-xs font-semibold rounded-lg transition-colors cursor-default"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Author Bio Box */}
        <div className="bg-gradient-to-r from-sand-100 to-amber-50 rounded-3xl p-8 border border-sand-200/80 flex flex-col sm:flex-row items-center gap-6">
          <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-gold-400 shadow-md shrink-0">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-[11px] font-extrabold text-coral-600 uppercase tracking-widest">
              Written By
            </span>
            <h4 className="text-xl font-bold text-ocean-950 font-[family-name:var(--font-display)]">
              {post.author.name}
            </h4>
            <p className="text-xs font-semibold text-ocean-700">{post.author.role}</p>
            <p className="text-xs text-sand-600 leading-relaxed">
              Passionate about handcrafted resort wear, sustainable coastal fashion, and sharing the vibrant beauty of island culture with the world.
            </p>
          </div>
        </div>

        {/* Shop CTA Box */}
        <div className="bg-gradient-to-br from-ocean-900 to-emerald-950 rounded-3xl p-8 sm:p-10 text-white shadow-xl text-center space-y-4 relative overflow-hidden">
          <div className="max-w-xl mx-auto space-y-3 relative z-10">
            <span className="text-3xl">🌺</span>
            <h3 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-display)]">
              Bring Island Vibes to Your Wardrobe
            </h3>
            <p className="text-ocean-200 text-sm leading-relaxed">
              Explore our curated selection of 100% pure linen dresses, hand-embroidered guayaberas, and handcrafted 18k gold ocean jewelry.
            </p>
            <div className="pt-2 flex justify-center">
              <Link
                href="/shop"
                className="px-8 py-3.5 bg-gold-500 hover:bg-gold-400 text-ocean-950 font-bold rounded-xl text-sm transition-all shadow-md inline-flex items-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" /> Shop New Arrivals
              </Link>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="space-y-8 pt-6">
            <div className="flex items-center justify-between border-b border-sand-200 pb-4">
              <h2 className="text-2xl font-bold text-ocean-900 font-[family-name:var(--font-display)] flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-coral-600" /> Related Stories
              </h2>
              <Link
                href="/blog"
                className="text-xs font-bold text-coral-600 hover:text-coral-700 flex items-center gap-1"
              >
                View All Articles <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rPost) => (
                <article
                  key={rPost.id}
                  className="bg-white rounded-2xl border border-sand-200 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col group"
                >
                  <div className="relative aspect-[16/10] bg-sand-100 overflow-hidden">
                    <Image
                      src={rPost.image}
                      alt={rPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 bg-white/90 backdrop-blur-md text-ocean-950 font-bold text-[9px] rounded-full uppercase tracking-wider">
                      {rPost.category}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-2">
                      <div className="text-[11px] text-sand-500 font-medium">
                        {rPost.date} &bull; {rPost.readTime}
                      </div>

                      <h4 className="font-bold text-ocean-900 text-sm leading-snug group-hover:text-coral-600 transition-colors line-clamp-2">
                        {rPost.title}
                      </h4>
                    </div>

                    <Link
                      href={`/blog/${rPost.slug}`}
                      className="text-coral-600 font-bold text-xs inline-flex items-center gap-1 pt-2"
                    >
                      Read Article <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}
