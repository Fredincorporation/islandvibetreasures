"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, Sparkles } from "lucide-react";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/icons";

const footerLinks = {
  shop: {
    title: "Shop",
    links: [
      { label: "Women's Apparel", href: "/shop/women" },
      { label: "Men's Style", href: "/shop/men" },
      { label: "Jewelry", href: "/shop/jewelry" },
      { label: "Accessories", href: "/shop/accessories" },
      { label: "Vacation Essentials", href: "/shop/vacation" },
      { label: "New Arrivals", href: "/shop?filter=new" },
      { label: "Sale", href: "/shop?filter=sale" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Visit Our Store", href: "/visit" },
      { label: "Facebook Live", href: "/live" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
    ],
  },
  help: {
    title: "Help",
    links: [
      { label: "Contact Us", href: "/contact" },
      { label: "Shipping & Returns", href: "/shipping" },
      { label: "FAQ", href: "/faq" },
      { label: "Size Guide", href: "/size-guide" },
      { label: "Track Order", href: "/track" },
    ],
  },
};

export function Footer() {
  return (
    <footer className="bg-ocean-900 text-sand-200">
      {/* Top wave divider */}
      <div className="relative h-8 bg-ocean-800">
        <svg
          className="absolute bottom-full w-full h-12 text-ocean-800"
          viewBox="0 0 1440 48"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 48C240 0 480 0 720 48C960 96 1200 0 1440 48V48H0V48Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Newsletter */}
        <div className="bg-ocean-800 rounded-2xl p-6 sm:p-8 mb-12 border border-ocean-700">
          <div className="sm:flex items-center justify-between gap-8">
            <div className="mb-4 sm:mb-0">
              <h3 className="text-xl font-bold text-sand-50 mb-1 font-[family-name:var(--font-display)]">
                Join the Island Tribe 🌺
              </h3>
              <p className="text-ocean-300 text-sm">
                Get 10% off your first order + exclusive live show alerts
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2 max-w-md"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2.5 bg-ocean-900 border border-ocean-600 rounded-xl text-sm text-sand-50 placeholder:text-ocean-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-gold-500 hover:bg-gold-400 text-ocean-900 font-semibold text-sm rounded-xl transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Logo + About */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <span className="text-2xl">🌴</span>
              <div>
                <span className="block text-lg font-bold text-sand-50 leading-tight font-[family-name:var(--font-display)]">
                  Island Vibe
                </span>
                <span className="block text-xs text-gold-500 tracking-[0.2em] uppercase">
                  Treasures
                </span>
              </div>
            </Link>
            <p className="text-sm text-ocean-300 mb-4 leading-relaxed">
              Bringing the spirit of the islands to the heart of Las Vegas.
              Women's clothing, men's fashion, artisan jewelry, and
              treasures for the soul.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-ocean-800 hover:bg-ocean-700 rounded-lg flex items-center justify-center text-ocean-300 hover:text-gold-400 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-ocean-800 hover:bg-ocean-700 rounded-lg flex items-center justify-center text-ocean-300 hover:text-coral-400 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-ocean-800 hover:bg-ocean-700 rounded-lg flex items-center justify-center text-ocean-300 hover:text-coral-400 transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.values(footerLinks).map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-sand-50 uppercase tracking-wider mb-3">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ocean-300 hover:text-gold-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Store info + map placeholder */}
        <div className="border-t border-ocean-700 pt-8 flex flex-col md:flex-row gap-6 items-start justify-between">
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-ocean-300">
              <MapPin className="w-4 h-4 text-gold-500 flex-shrink-0" />
              <span>1234 Paradise Road, Las Vegas, NV 89109</span>
            </div>
            <div className="flex items-center gap-2 text-ocean-300">
              <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" />
              <a
                href="tel:+17025551234"
                className="hover:text-gold-400 transition-colors"
              >
                (702) 555-1234
              </a>
            </div>
            <div className="flex items-center gap-2 text-ocean-300">
              <Mail className="w-4 h-4 text-gold-500 flex-shrink-0" />
              <a
                href="mailto:aloha@islandvibetreasures.com"
                className="hover:text-gold-400 transition-colors"
              >
                aloha@islandvibetreasures.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-ocean-300">
              <Sparkles className="w-4 h-4 text-gold-500 flex-shrink-0" />
              <span>Open Daily 10AM – 8PM | Live Shows: Tue & Thu 6PM PST</span>
            </div>
          </div>

          {/* Mini map placeholder */}
          <div className="w-full md:w-48 h-32 bg-ocean-800 rounded-xl border border-ocean-700 flex items-center justify-center text-ocean-500 text-sm">
            <MapPin className="w-6 h-6 mb-1" />
            <span className="ml-1">Map</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-ocean-700 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ocean-500">
          <p>&copy; 2026 Island Vibe Treasures. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-ocean-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-ocean-300 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
