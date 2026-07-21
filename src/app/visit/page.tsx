import { MapPin, Clock, Phone, Mail, Store, Sparkles, Navigation, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function VisitPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-ocean-900 py-16 px-4 text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-white font-[family-name:var(--font-display)]">
          Visit Our Store
        </h1>
        <p className="text-ocean-300 mt-4 max-w-lg mx-auto">
          Experience the island vibes in person at our Las Vegas boutique
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Store info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-sand-200">
              <h2 className="text-xl font-bold text-ocean-800 mb-4 font-[family-name:var(--font-display)]">
                Store Details
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-ocean-800">Address</p>
                    <p className="text-sand-600 text-sm">
                      1234 Paradise Road
                      <br />
                      Las Vegas, NV 89109
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gold-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-ocean-800">Hours</p>
                    <p className="text-sand-600 text-sm">
                      Open Daily: 10:00 AM – 8:00 PM
                      <br />
                      <span className="text-coral-500 font-medium">
                        Live Shows: Tue & Thu 6PM PST
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gold-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-ocean-800">Phone</p>
                    <a
                      href="tel:+17025551234"
                      className="text-sand-600 text-sm hover:text-ocean-600"
                    >
                      (702) 555-1234
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gold-500 mt-0.5" />
                  <div>
                    <p className="font-semibold text-ocean-800">Email</p>
                    <a
                      href="mailto:aloha@islandvibetreasures.com"
                      className="text-sand-600 text-sm hover:text-ocean-600"
                    >
                      aloha@islandvibetreasures.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-ocean-50 rounded-2xl p-6 border border-ocean-100">
              <h3 className="font-bold text-ocean-800 mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-gold-500" /> Why Visit Us?
              </h3>
              <ul className="space-y-2 text-sm text-ocean-700">
                <li>• Try on pieces in our luxury fitting rooms</li>
                <li>• Exclusive in-store-only items and deals</li>
                <li>• Personal stylist consultations available</li>
                <li>• Free gift wrapping for in-store purchases</li>
                <li>• Complimentary tropical refreshments</li>
              </ul>
            </div>
          </div>

          {/* Store visual & Map card */}
          <div className="relative rounded-2xl border border-sand-200 overflow-hidden shadow-xl min-h-[420px] flex flex-col justify-end group">
            <Image
              src="/images/hero_island_boutique_store.jpg"
              alt="Island Vibe Treasures Las Vegas Store Front"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/90 via-ocean-900/50 to-transparent" />
            <div className="relative z-10 p-6 sm:p-8 text-white space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-gold-500/90 text-ocean-950 font-bold text-xs rounded-full">
                <MapPin className="w-3.5 h-3.5" /> Paradise Road Boutique
              </span>
              <h3 className="text-2xl font-bold font-[family-name:var(--font-display)]">
                Las Vegas Sanctuary
              </h3>
              <p className="text-sand-200 text-sm leading-relaxed">
                Step into our tropical oasis right off the Las Vegas Strip. Browse our complete collection of linen dresses, artisan guayaberas, and ocean jewelry in person.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://maps.google.com/?q=1234+Paradise+Rd+Las+Vegas+NV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-gold-500 hover:bg-gold-400 text-ocean-950 font-bold rounded-xl text-sm transition-all shadow-md inline-flex items-center gap-2"
                >
                  <Navigation className="w-4 h-4" /> Get Google Directions <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <Link
                  href="/shop"
                  className="px-5 py-2.5 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-semibold rounded-xl text-sm border border-white/30 transition-all"
                >
                  Shop Online
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
