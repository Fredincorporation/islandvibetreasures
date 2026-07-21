import Image from "next/image";
import Link from "next/link";
import { MapPin, Store, Heart, Sparkles, Compass, ShieldCheck, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-sand-50/30">
      {/* Hero */}
      <div className="bg-gradient-to-r from-ocean-900 via-ocean-800 to-emerald-900 py-16 sm:py-24 px-4 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-gold-300 text-xs font-semibold uppercase tracking-widest mb-4 border border-white/20">
            Est. 2018 &bull; Las Vegas, NV
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-white font-[family-name:var(--font-display)] tracking-tight">
            About Island Vibe Treasures
          </h1>
          <p className="text-ocean-200 mt-4 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            Bringing the warmth, color, and soul of tropical islands directly to the heart of Las Vegas.
          </p>
        </div>
      </div>

      {/* Main Story */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Founder Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold text-coral-600 uppercase tracking-widest block">
              Our Beginnings 🌴
            </span>
            <h2 className="text-3xl font-bold text-ocean-900 font-[family-name:var(--font-display)]">
              Born from a Love Affair with the Tropics
            </h2>
            <p className="text-sand-700 leading-relaxed text-sm sm:text-base">
              Island Vibe Treasures was founded in 2018 by island soul Maria Santos. Having traveled extensively through the Caribbean, French Polynesia, and Southeast Asia, Maria wanted to create a sanctuary where every visitor could step out of the desert heat and immediately feel transported to a coastal oasis.
            </p>
            <p className="text-sand-700 leading-relaxed text-sm sm:text-base">
              Our flagship boutique on Paradise Road in Las Vegas has become a cherished destination for locals and travelers seeking hand-embroidered linen dresses, artisan guayaberas, 18k gold mother-of-pearl jewelry, handwoven sun hats, and tropical vacation essentials.
            </p>
          </div>

          <div className="relative h-96 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
            <Image
              src="/images/hero_island_boutique_store.jpg"
              alt="Inside Island Vibe Treasures Las Vegas Boutique"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/60 via-transparent to-transparent flex items-end p-6">
              <p className="text-white text-xs font-semibold">
                &ldquo;Where tropical soul meets Vegas vibrancy.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Quote Card */}
        <div className="bg-gradient-to-r from-gold-500/10 via-coral-500/10 to-ocean-500/10 rounded-3xl p-8 border border-gold-200 text-center relative">
          <p className="text-xl sm:text-2xl font-bold text-ocean-900 font-[family-name:var(--font-display)] max-w-2xl mx-auto italic leading-relaxed">
            &ldquo;We believe that what you wear should make you feel like you're on vacation — even if you're just running everyday errands.&rdquo;
          </p>
          <p className="text-sm font-bold text-coral-600 mt-4">— Maria Santos, Founder & Curator</p>
        </div>

        {/* Artisanal Commitment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-xl border-4 border-white md:order-2">
            <Image
              src="/images/hero_artisan_ocean_jewelry.jpg"
              alt="Artisan Jewelry Craftsmanship"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6 md:order-1">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block">
              Ethical & Sustainable 🌊
            </span>
            <h2 className="text-3xl font-bold text-ocean-900 font-[family-name:var(--font-display)]">
              Direct Partnerships with Island Artisans
            </h2>
            <p className="text-sand-700 leading-relaxed text-sm sm:text-base">
              Every piece in our collection is hand-selected. We partner directly with independent artisans and family-owned workshops across Bali, Oahu, Oaxaca, Key West, Jaipur, and Nassau.
            </p>
            <p className="text-sand-700 leading-relaxed text-sm sm:text-base">
              By eliminating corporate middlemen, we ensure fair-trade wages for our artisan partners and guarantee that every gown, ring, hat, and candle supports sustainable craftsmanship and island cultural heritage.
            </p>
          </div>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
          <div className="bg-white p-6 rounded-2xl border border-sand-200 shadow-xs text-center">
            <div className="w-12 h-12 bg-coral-100 text-coral-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-ocean-900 text-base mb-1">Authentic Curation</h3>
            <p className="text-xs text-sand-600 leading-relaxed">
              Curated directly from ocean communities for genuine island feel and aesthetic.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-sand-200 shadow-xs text-center">
            <div className="w-12 h-12 bg-gold-100 text-gold-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-ocean-900 text-base mb-1">Unmatched Quality</h3>
            <p className="text-xs text-sand-600 leading-relaxed">
              100% pure linen, 18k gold plating, genuine mother-of-pearl & Sleeping Beauty turquoise.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-sand-200 shadow-xs text-center">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-ocean-900 text-base mb-1">Community First</h3>
            <p className="text-xs text-sand-600 leading-relaxed">
              Supporting coral reef restoration and local artisan co-ops with every purchase.
            </p>
          </div>
        </div>

        {/* Visit Callout */}
        <div className="bg-ocean-900 text-white rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center">
          <span className="text-4xl mb-3">📍</span>
          <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-display)] mb-2">
            Visit Our Las Vegas Boutique
          </h2>
          <p className="text-ocean-200 text-sm max-w-md mb-6">
            1234 Paradise Road, Las Vegas, NV 89109 &bull; Open Daily 10 AM – 8 PM
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/shop"
              className="px-6 py-3 bg-gold-500 hover:bg-gold-400 text-ocean-950 font-bold rounded-xl transition-all shadow-md text-sm"
            >
              Explore Shop
            </Link>
            <Link
              href="/visit"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border border-white/30 text-sm"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
