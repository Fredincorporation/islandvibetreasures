"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ChevronDown, HelpCircle, MessageSquare, ArrowRight, Sparkles } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: "orders" | "live" | "products" | "returns" | "store";
}

const faqs: FAQItem[] = [
  {
    category: "orders",
    question: "How long will my order take to arrive?",
    answer: "Orders placed before 1:00 PM PST ship same-day from our Las Vegas boutique. Standard delivery takes 3–5 business days, Priority takes 2 business days, and Next-Day Express is available at checkout."
  },
  {
    category: "orders",
    question: "Do you offer free shipping?",
    answer: "Yes! Standard shipping is FREE on all US orders over $100. In-store pickup at our Paradise Road boutique is always free with no minimum purchase."
  },
  {
    category: "live",
    question: "How do Facebook Live Show flash deals work?",
    answer: "Join us every Tuesday & Thursday at 6:00 PM PST on Facebook Live! During the broadcast, we show exclusive new arrivals and announce flash deal discount codes. You can shop directly on our website using the live code."
  },
  {
    category: "live",
    question: "Can I pick up my Facebook Live purchases in store?",
    answer: "Absolutely! Choose 'In-Store Pickup' during checkout and your live show items will be ready for pickup at 1234 Paradise Road within 2 hours."
  },
  {
    category: "products",
    question: "Are your linen clothes 100% pure linen?",
    answer: "Yes! All of our linen dresses, kaftans, and men's guayaberas are crafted from 100% pure woven linen or breathable Tencel lyocell for maximum comfort in warm weather."
  },
  {
    category: "products",
    question: "Is your jewelry water-resistant?",
    answer: "Our 18k gold-plated and sterling silver pieces feature protective tarnish-resistant coatings. We recommend removing jewelry before swimming in saltwater or chlorine to preserve maximum luster."
  },
  {
    category: "returns",
    question: "What is your return policy?",
    answer: "We offer a 30-day hassle-free return policy for unworn, unwashed items in original condition. We provide prepaid return shipping labels for all domestic orders."
  },
  {
    category: "store",
    question: "Where is your flagship boutique located?",
    answer: "Our boutique is located at 1234 Paradise Road in Las Vegas, NV 89109 — just minutes from the Las Vegas Strip. We are open daily from 10:00 AM to 8:00 PM."
  }
];

export default function FAQPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-sand-50/40">
      {/* Hero */}
      <div className="bg-gradient-to-r from-ocean-900 via-ocean-800 to-emerald-950 py-16 sm:py-20 px-4 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-gold-300 text-xs font-semibold uppercase tracking-widest mb-4 border border-white/20">
            Got Questions? We Have Answers 🌺
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-white font-[family-name:var(--font-display)] tracking-tight">
            Frequently Asked Questions
          </h1>
          
          {/* Search bar */}
          <div className="max-w-xl mx-auto mt-8 relative">
            <Search className="w-5 h-5 text-ocean-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search questions (e.g. shipping, linen care, live show deals)..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white text-ocean-900 placeholder:text-sand-400 text-sm focus:outline-none focus:ring-4 focus:ring-gold-400/40 shadow-xl"
            />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {[
            { id: "all", label: "All Questions" },
            { id: "orders", label: "Orders & Shipping" },
            { id: "live", label: "Facebook Live Shows" },
            { id: "products", label: "Products & Care" },
            { id: "returns", label: "Returns & Exchanges" },
            { id: "store", label: "Boutique Location" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === tab.id
                  ? "bg-gold-500 text-ocean-950 shadow-sm"
                  : "bg-white text-ocean-800 hover:bg-sand-100 border border-sand-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-3xl border border-sand-200 p-8">
              <HelpCircle className="w-12 h-12 text-sand-400 mx-auto mb-3" />
              <p className="font-bold text-ocean-900 text-lg">No matching questions found</p>
              <p className="text-sand-500 text-sm mt-1">Try searching with a different term or browse our categories.</p>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className="bg-white rounded-2xl border border-sand-200 overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-ocean-900 text-base hover:text-ocean-600 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gold-600 transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sand-700 text-sm leading-relaxed border-t border-sand-100 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-16 bg-white rounded-3xl p-8 border border-sand-200 text-center space-y-4">
          <h3 className="text-xl font-bold text-ocean-900 font-[family-name:var(--font-display)]">
            Still Have Questions?
          </h3>
          <p className="text-sand-600 text-sm max-w-md mx-auto">
            Our island team in Las Vegas is happy to help you find the right fit, style, or gift.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="px-6 py-3 bg-gold-500 hover:bg-gold-400 text-ocean-950 font-bold rounded-xl text-sm transition-colors inline-flex items-center gap-2 shadow-sm"
            >
              <MessageSquare className="w-4 h-4" /> Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
