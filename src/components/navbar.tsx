"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  Menu,
  X,
  Heart,
  Search,
  ChevronDown,
  MapPin,
  Play,
  Phone,
  User,
  Sparkles,
} from "lucide-react";
import { useCartStore } from "@/store/cart-store";
import { useWishlistStore } from "@/store/wishlist-store";
import { cn } from "@/lib/utils";

const navLinks = [
  {
    label: "Shop",
    children: [
      { label: "Women's Apparel", href: "/shop/women" },
      { label: "Men's Style", href: "/shop/men" },
      { label: "Jewelry", href: "/shop/jewelry" },
      { label: "Accessories", href: "/shop/accessories" },
      { label: "Vacation Essentials", href: "/shop/vacation" },
      { label: "View All", href: "/shop" },
    ],
  },
  { label: "Live", href: "/live", icon: Play },
  { label: "About", href: "/about" },
  { label: "Visit Us", href: "/visit", icon: MapPin },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const cartItems = useCartStore((s) => s.items);
  const cartTotal = useCartStore((s) => s.totalItems());
  const openCart = useCartStore((s) => s.openCart);
  const wishlistCount = useWishlistStore((s) => s.items.length);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setShopOpen(false);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-ocean-900 text-sand-50 text-xs py-1.5 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" /> Las Vegas, NV — In-Store Pickup Available
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+17025551234" className="flex items-center gap-1 hover:text-gold-300 transition-colors">
              <Phone className="w-3 h-3" /> (702) 555-1234
            </a>
            <Link href="/live" className="flex items-center gap-1 text-coral-400 hover:text-coral-300 transition-colors font-medium">
              <Play className="w-3 h-3 fill-coral-400" /> LIVE Now
            </Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-sand-50/95 backdrop-blur-md shadow-lg shadow-ocean-900/5 border-b border-sand-200"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 -ml-2 text-ocean-800 hover:text-ocean-600"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <span className="text-2xl">🌴</span>
              <div className="hidden sm:block">
                <span className="block text-lg font-bold text-ocean-800 leading-tight font-[family-name:var(--font-display)]">
                  Island Vibe
                </span>
                <span className="block text-xs text-gold-600 tracking-[0.2em] uppercase -mt-0.5">
                  Treasures
                </span>
              </div>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden lg:flex items-center gap-1">
              {/* Shop dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setShopOpen(true)}
                onMouseLeave={() => setShopOpen(false)}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    shopOpen ? "text-ocean-600 bg-ocean-50" : "text-ocean-800 hover:text-ocean-600 hover:bg-ocean-50/50"
                  )}
                >
                  Shop <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <AnimatePresence>
                  {shopOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl border border-sand-200 shadow-xl shadow-ocean-900/10 overflow-hidden"
                    >
                      {[
                        { label: "👗 Women's Apparel", href: "/shop/women" },
                        { label: "👔 Men's Style", href: "/shop/men" },
                        { label: "💎 Jewelry", href: "/shop/jewelry" },
                        { label: "👜 Accessories", href: "/shop/accessories" },
                        { label: "🏝️ Vacation Essentials", href: "/shop/vacation" },
                        { label: "✨ View All", href: "/shop" },
                      ].map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm text-ocean-800 hover:bg-ocean-50 hover:text-ocean-600 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.label}
                  href={link.href!}
                  className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-ocean-800 hover:text-ocean-600 hover:bg-ocean-50/50 transition-colors"
                >
                  {link.icon && <link.icon className="w-3.5 h-3.5" />}
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-1">
              {/* Search button */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-ocean-700 hover:text-ocean-500 transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist */}
              <Link
                href="/wishlist"
                className="relative p-2 text-ocean-700 hover:text-coral-500 transition-colors"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-coral-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Account placeholder */}
              <Link
                href="/account"
                className="p-2 text-ocean-700 hover:text-ocean-500 transition-colors"
                aria-label="Account"
              >
                <User className="w-5 h-5" />
              </Link>

              {/* Cart */}
              <button
                onClick={openCart}
                className="relative p-2 text-ocean-700 hover:text-ocean-500 transition-colors"
                aria-label="Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {cartTotal > 0 && (
                  <motion.span
                    key={cartTotal}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-gold-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center"
                  >
                    {cartTotal}
                  </motion.span>
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Search bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-t border-sand-200 bg-white overflow-hidden"
            >
              <div className="max-w-2xl mx-auto px-4 py-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-sand-500" />
                  <input
                    type="text"
                    placeholder="Search for island treasures..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-sand-50 border border-sand-200 rounded-xl text-sm text-ocean-800 placeholder:text-sand-400 focus:outline-none focus:ring-2 focus:ring-ocean-400 focus:border-transparent"
                    autoFocus
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-ocean-900/40 z-50 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed inset-y-0 left-0 w-80 bg-white z-50 lg:hidden overflow-y-auto shadow-2xl"
            >
              <div className="flex items-center justify-between p-4 border-b border-sand-200">
                <span className="text-lg font-bold text-ocean-800 flex items-center gap-2">
                  <span className="text-2xl">🌴</span> Island Vibe Treasures
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-ocean-600 hover:text-ocean-800"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4 space-y-1">
                <div className="text-xs font-semibold text-sand-500 uppercase tracking-wider mb-2">
                  Shop
                </div>
                {[
                  { label: "👗 Women's Apparel", href: "/shop/women" },
                  { label: "👔 Men's Style", href: "/shop/men" },
                  { label: "💎 Jewelry", href: "/shop/jewelry" },
                  { label: "👜 Accessories", href: "/shop/accessories" },
                  { label: "🏝️ Vacation Essentials", href: "/shop/vacation" },
                  { label: "✨ View All", href: "/shop" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2.5 rounded-lg text-ocean-800 hover:bg-ocean-50 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <hr className="my-3 border-sand-200" />
                {navLinks.slice(1).map((link) => (
                  <Link
                    key={link.label}
                    href={link.href!}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-ocean-800 hover:bg-ocean-50 transition-colors"
                  >
                    {link.icon && <link.icon className="w-4 h-4" />}
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="p-4 border-t border-sand-200 mt-auto">
                <div className="text-xs text-sand-500 mb-1">
                  <MapPin className="w-3 h-3 inline mr-1" />
                  1234 Paradise Rd, Las Vegas, NV 89109
                </div>
                <a
                  href="tel:+17025551234"
                  className="text-xs text-ocean-600 hover:text-ocean-800"
                >
                  (702) 555-1234
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for fixed nav */}
      <div className="h-16" />
    </>
  );
}
