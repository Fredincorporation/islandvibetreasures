"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Play,
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Truck,
  ShieldCheck,
  RotateCcw,
  MapPin,
  ShoppingBag,
  Clock,
} from "lucide-react";
import { ProductCard } from "@/components/product-card";
import {
  trendingProducts,
  newArrivals,
  womenProducts,
  menProducts,
  jewelryProducts,
  products,
} from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store/cart-store";

const heroImages = [
  {
    src: "/images/hero_tropical_resort_wear.jpg",
    alt: "High fashion model in flowing white linen tropical resort dress on a palm beach",
    badge: "Tropical Resort Fashion 🌴",
    title: "Discover Your",
    titleHighlight: "Island Vibe",
    subtitle: "Hand-embroidered linen dresses, airy coverups & sun-drenched resort wear",
    ctaText: "Shop Women's Apparel",
    ctaLink: "/shop/women",
  },
  {
    src: "/images/hero_artisan_ocean_jewelry.jpg",
    alt: "Handcrafted 18k gold mother-of-pearl necklace and ocean turquoise jewelry flatlay",
    badge: "Ocean-Inspired Treasures ✨",
    title: "Handcrafted",
    titleHighlight: "Island Jewels",
    subtitle: "18k gold plating, iridescent mother-of-pearl & genuine Sleeping Beauty turquoise",
    ctaText: "Explore Signature Jewelry",
    ctaLink: "/shop/jewelry",
  },
  {
    src: "/images/hero_island_boutique_store.jpg",
    alt: "Inside Island Vibe Treasures luxury boutique on Paradise Road in Las Vegas",
    badge: "Flagship Boutique • Las Vegas 📍",
    title: "Step Into",
    titleHighlight: "Paradise Oasis",
    subtitle: "Your desert sanctuary for handwoven raffia totes, island scents & boutique treasures",
    ctaText: "Visit Our Store",
    ctaLink: "/visit",
  },
  {
    src: "/images/hero_mens_tropical_style.jpg",
    alt: "Men's linen guayabera shirt and tropical resort style in golden light",
    badge: "Tropical Gentleman 👔",
    title: "The Classic",
    titleHighlight: "Resort Style",
    subtitle: "Breathable pure linen shirts, embroidered guayaberas & boardwalk essentials",
    ctaText: "Shop Men's Style",
    ctaLink: "/shop/men",
  },
];

const collections = [
  {
    title: "Women's Apparel",
    subtitle: "Island Elegance",
    image: "/images/hero_tropical_resort_wear.jpg",
    href: "/shop/women",
    color: "from-coral-500/80 to-ocean-500/80",
  },
  {
    title: "Men's Style",
    subtitle: "Tropical Gentleman",
    image: "/images/hero_mens_tropical_style.jpg",
    href: "/shop/men",
    color: "from-ocean-600/80 to-emerald-600/80",
  },
  {
    title: "Signature Jewelry",
    subtitle: "Ocean-Inspired",
    image: "/images/hero_artisan_ocean_jewelry.jpg",
    href: "/shop/jewelry",
    color: "from-gold-500/80 to-coral-500/80",
  },
  {
    title: "Artisan Accessories",
    subtitle: "Handwoven & Crafted",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80",
    href: "/shop/accessories",
    color: "from-emerald-500/80 to-ocean-500/80",
  },
  {
    title: "Vacation Essentials",
    subtitle: "Island Lifestyle",
    image: "/images/hero_island_boutique_store.jpg",
    href: "/shop/vacation",
    color: "from-ocean-700/80 to-gold-600/80",
  },
];

const testimonials = [
  {
    name: "Jessica M.",
    location: "Las Vegas, NV",
    avatar: "https://i.pravatar.cc/150?img=47",
    text: "Island Vibe Treasures is my go-to for vacation outfits! The quality is incredible and I always get compliments. The live shows are so fun too!",
    rating: 5,
  },
  {
    name: "Michael R.",
    location: "Henderson, NV",
    avatar: "https://i.pravatar.cc/150?img=12",
    text: "Finally a store that understands men's tropical fashion. The linen guayabera I bought is my favorite shirt. Great price for the quality.",
    rating: 5,
  },
  {
    name: "Ashley K.",
    location: "Summerlin, NV",
    avatar: "https://i.pravatar.cc/150?img=23",
    text: "The jewelry selection is stunning! I bought the Golden Sands pendant and a pair of earrings — they look even better in person. Fast shipping too!",
    rating: 5,
  },
  {
    name: "David L.",
    location: "Los Angeles, CA",
    avatar: "https://i.pravatar.cc/150?img=53",
    text: "Ordered online and picked up in store. Such a beautiful boutique on Paradise Road. The staff helped me pick the perfect anniversary gift for my wife.",
    rating: 5,
  },
];

export default function HomePage() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const addItem = useCartStore((s) => s.addItem);

  // Rotate hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) =>
        prev + 1 >= testimonials.length ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentHero = heroImages[heroIndex];

  const handlePrevHero = () => {
    setHeroIndex((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1));
  };

  const handleNextHero = () => {
    setHeroIndex((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <div className="overflow-hidden">
      {/* ───── HERO ───── */}
      <section className="relative h-[90vh] min-h-[620px] max-h-[920px] flex items-center group">
        {/* BG images */}
        <AnimatePresence mode="wait">
          <motion.div
            key={heroIndex}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={currentHero.src}
              alt={currentHero.alt}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-950/85 via-ocean-900/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/70 via-transparent to-ocean-950/20" />

        {/* Palm decorative */}
        <motion.div
          className="absolute right-8 top-10 text-8xl opacity-25 select-none pointer-events-none"
          animate={{ rotate: [0, 4, 0, -4, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          🌴
        </motion.div>

        {/* Carousel controls */}
        <button
          onClick={handlePrevHero}
          aria-label="Previous Slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNextHero}
          aria-label="Next Slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 hover:scale-110 active:scale-95"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={heroIndex}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <motion.span
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-white text-xs sm:text-sm font-semibold tracking-wide mb-6 border border-white/30 shadow-md"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="w-2 h-2 bg-coral-400 rounded-full animate-pulse" />
                {currentHero.badge}
              </motion.span>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-[1.1] font-[family-name:var(--font-display)] drop-shadow-md">
                {currentHero.title}
                <br />
                <span className="text-gold-400 drop-shadow-sm">{currentHero.titleHighlight}</span>
              </h1>

              <p className="text-lg sm:text-xl text-sand-100 mb-8 max-w-xl leading-relaxed drop-shadow-sm font-light">
                {currentHero.subtitle}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href={currentHero.ctaLink}
                  className="px-8 py-4 bg-gold-500 hover:bg-gold-400 text-ocean-950 font-bold text-lg rounded-xl transition-all shadow-lg shadow-gold-500/30 hover:shadow-xl hover:shadow-gold-400/40 active:scale-95 inline-flex items-center gap-2"
                >
                  {currentHero.ctaText} <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/live"
                  className="px-8 py-4 bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-bold text-lg rounded-xl border border-white/40 transition-all inline-flex items-center gap-2 hover:border-white"
                >
                  <Play className="w-5 h-5 fill-white text-white" /> Watch Live
                </Link>
              </div>

              {/* Hero dots */}
              <div className="flex items-center gap-3 mt-10">
                {heroImages.map((hero, i) => (
                  <button
                    key={i}
                    onClick={() => setHeroIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === heroIndex
                        ? "bg-gold-400 w-10 shadow-sm"
                        : "bg-white/40 hover:bg-white/70 w-3"
                    }`}
                    aria-label={`Slide ${i + 1}: ${hero.titleHighlight}`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ───── TRUST BAR ───── */}
      <section className="relative -mt-10 z-10 max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl shadow-ocean-900/10 border border-sand-200 p-4 sm:p-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            {
              icon: Truck,
              label: "Free Shipping",
              sub: "Orders $100+",
            },
            {
              icon: RotateCcw,
              label: "30-Day Returns",
              sub: "Hassle free",
            },
            {
              icon: MapPin,
              label: "In-Store Pickup",
              sub: "Las Vegas, NV",
            },
            {
              icon: ShieldCheck,
              label: "Secure Checkout",
              sub: "SSL encrypted",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center gap-1"
            >
              <item.icon className="w-6 h-6 text-ocean-500" />
              <span className="text-sm font-semibold text-ocean-800">
                {item.label}
              </span>
              <span className="text-xs text-sand-500">{item.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ───── FEATURED COLLECTIONS ───── */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold text-gold-600 uppercase tracking-wider">
              Explore
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ocean-800 mt-2 font-[family-name:var(--font-display)]">
              Featured Collections
            </h2>
            <p className="text-sand-600 mt-3 max-w-lg mx-auto">
              Curated island-inspired collections for every style and occasion
            </p>
            <div className="palm-divider mt-8 mb-4" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {collections.map((col, index) => (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={col.title === "Vacation Essentials" ? "lg:col-span-2 lg:max-w-sm lg:mx-auto" : ""}
              >
                <Link
                  href={col.href}
                  className="group relative block aspect-[4/5] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <Image
                    src={col.image}
                    alt={col.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${col.color}`}
                  />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <p className="text-white/80 text-sm font-medium">
                      {col.subtitle}
                    </p>
                    <h3 className="text-white text-2xl font-bold font-[family-name:var(--font-display)]">
                      {col.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-white text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      Shop Collection <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── LIVE SHOW BANNER ───── */}
      <section className="py-12 sm:py-16 px-4 bg-ocean-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-ocean-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl" />
        </div>
        <div className="max-w-5xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center gap-8"
          >
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-coral-500/20 border border-coral-400/30 rounded-full text-coral-300 text-sm mb-4">
                <span className="w-2 h-2 bg-coral-400 rounded-full animate-pulse" />
                LIVE NOW
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-sand-50 font-[family-name:var(--font-display)]">
                Today's Live Show
              </h2>
              <p className="text-ocean-300 mt-3 max-w-md">
                Join our Facebook Live every Tuesday & Thursday at 6PM PST
                for exclusive deals, new arrivals, and styling tips from our Las
                Vegas boutique!
              </p>
              <Link
                href="/live"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gold-500 hover:bg-gold-400 text-ocean-900 font-bold rounded-xl transition-colors"
              >
                <Play className="w-5 h-5 fill-ocean-900" /> Join the Live
              </Link>
            </div>
            <div className="flex-shrink-0 w-full lg:w-96 aspect-video bg-ocean-800 rounded-2xl border border-ocean-700 relative overflow-hidden shadow-2xl group cursor-pointer">
              <Image
                src="/images/live_stream_cover.jpg"
                alt="Island Vibe Facebook Live Broadcast"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/90 via-ocean-950/40 to-transparent flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 bg-coral-500 hover:bg-coral-400 rounded-full flex items-center justify-center mb-3 shadow-lg shadow-coral-500/40 transition-transform group-hover:scale-110">
                  <Play className="w-7 h-7 fill-white text-white ml-0.5" />
                </div>
                <p className="text-white font-bold text-base drop-shadow-sm">
                  Facebook Live Broadcast
                </p>
                <p className="text-coral-300 text-xs font-semibold mt-1">
                  Every Tue & Thu @ 6PM PST
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───── TRENDING PRODUCTS ───── */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold text-coral-500 uppercase tracking-wider">
              Trending Now
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ocean-800 mt-2 font-[family-name:var(--font-display)]">
              What's Hot in Paradise
            </h2>
            <p className="text-sand-600 mt-3 max-w-lg mx-auto">
              Our most-loved pieces flying off the shelves
            </p>
            <div className="palm-divider mt-8 mb-4" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {trendingProducts.slice(0, 8).map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-8 py-3 bg-ocean-500 hover:bg-ocean-600 text-white font-semibold rounded-xl transition-colors"
            >
              View All Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ───── NEW ARRIVALS ───── */}
      <section className="py-16 sm:py-20 px-4 bg-sand-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">
              Just Landed
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ocean-800 mt-2 font-[family-name:var(--font-display)]">
              New Arrivals
            </h2>
            <p className="text-sand-600 mt-3 max-w-lg mx-auto">
              Fresh styles straight from the islands
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {newArrivals.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── TESTIMONIALS ───── */}
      <section className="py-16 sm:py-20 px-4 relative overflow-hidden">
        <div className="absolute top-10 right-10 text-8xl opacity-5 select-none">
          🌺
        </div>
        <div className="absolute bottom-10 left-10 text-8xl opacity-5 select-none">
          🌴
        </div>
        <div className="max-w-3xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-sm font-semibold text-gold-600 uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ocean-800 mt-2 font-[family-name:var(--font-display)]">
              Loved by Island Souls
            </h2>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg border border-sand-200 text-center"
              >
                <Quote className="w-10 h-10 text-gold-300 mx-auto mb-4" />
                <p className="text-lg text-ocean-700 leading-relaxed mb-6">
                  &ldquo;{testimonials[testimonialIndex].text}&rdquo;
                </p>
                <div className="flex items-center justify-center gap-1 mb-3">
                  {Array.from({ length: testimonials[testimonialIndex].rating }).map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-gold-400 fill-gold-400"
                      />
                    )
                  )}
                </div>
                <div className="w-12 h-12 rounded-full bg-ocean-100 mx-auto mb-2 overflow-hidden">
                  <Image
                    src={testimonials[testimonialIndex].avatar}
                    alt={testimonials[testimonialIndex].name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-semibold text-ocean-800">
                  {testimonials[testimonialIndex].name}
                </p>
                <p className="text-sm text-sand-500">
                  {testimonials[testimonialIndex].location}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Nav arrows */}
            <button
              onClick={() =>
                setTestimonialIndex(
                  testimonialIndex === 0
                    ? testimonials.length - 1
                    : testimonialIndex - 1
                )
              }
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-10 h-10 bg-white rounded-full shadow-md border border-sand-200 flex items-center justify-center text-ocean-600 hover:text-ocean-800 hover:shadow-lg transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() =>
                setTestimonialIndex(
                  testimonialIndex + 1 >= testimonials.length
                    ? 0
                    : testimonialIndex + 1
                )
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-10 h-10 bg-white rounded-full shadow-md border border-sand-200 flex items-center justify-center text-ocean-600 hover:text-ocean-800 hover:shadow-lg transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-1.5 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setTestimonialIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === testimonialIndex ? "bg-gold-500 w-6" : "bg-sand-300"
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ───── INSTAGRAM / SOCIAL ───── */}
      <section className="py-16 sm:py-20 px-4 bg-sand-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold text-ocean-600 uppercase tracking-wider">
              Follow the Vibes
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-ocean-800 mt-2 font-[family-name:var(--font-display)]">
              @IslandVibeTreasures
            </h2>
            <p className="text-sand-600 mt-3 max-w-lg mx-auto">
              Tag us in your island-inspired looks for a chance to be featured!
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              "https://picsum.photos/seed/insta-1/300/300",
              "https://picsum.photos/seed/insta-2/300/300",
              "https://picsum.photos/seed/insta-3/300/300",
              "https://picsum.photos/seed/insta-4/300/300",
              "https://picsum.photos/seed/insta-5/300/300",
              "https://picsum.photos/seed/insta-6/300/300",
            ].map((src, i) => (
              <motion.a
                key={i}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="aspect-square rounded-xl overflow-hidden group relative"
              >
                <Image
                  src={src}
                  alt={`Instagram photo ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, 16vw"
                />
                <div className="absolute inset-0 bg-ocean-900/0 group-hover:bg-ocean-900/40 transition-colors flex items-center justify-center">
                  <span className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                    📸
                  </span>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-coral-500 to-gold-500 text-white font-semibold rounded-xl hover:shadow-lg transition-shadow"
            >
              Follow Us on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ───── NEWSLETTER CTA ───── */}
      <section className="py-16 sm:py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/seed/beach-paradise/1400/900"
            alt="Tropical beach"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-ocean-900/80" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto relative text-center"
        >
          <span className="text-4xl mb-4 block">🌺</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-sand-50 font-[family-name:var(--font-display)]">
            Join the Island Tribe
          </h2>
          <p className="text-ocean-300 mt-3 mb-8">
            Get 10% off your first order, exclusive live show alerts, and
            island-style inspiration delivered to your inbox.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex gap-2 max-w-sm mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gold-500 hover:bg-gold-400 text-ocean-900 font-bold rounded-xl transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-ocean-400 text-xs mt-4">
            No spam, just good vibes. Unsubscribe anytime.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
