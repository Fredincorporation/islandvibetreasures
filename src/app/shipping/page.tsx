import Link from "next/link";
import { Truck, RotateCcw, PackageCheck, ShieldCheck, MapPin, ArrowRight } from "lucide-react";

export default function ShippingPage() {
  return (
    <div className="min-h-screen bg-sand-50/40">
      {/* Hero */}
      <div className="bg-gradient-to-r from-ocean-900 via-ocean-800 to-emerald-950 py-16 sm:py-20 px-4 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-gold-300 text-xs font-semibold uppercase tracking-widest mb-4 border border-white/20">
            Hassle-Free Shipping & Easy Returns 🌊
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-white font-[family-name:var(--font-display)] tracking-tight">
            Shipping & Returns
          </h1>
          <p className="text-ocean-200 mt-4 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            Fast domestic shipping from Las Vegas, free returns within 30 days, and local in-store pickup options.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* Shipping Rates & Delivery Times */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 border border-sand-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-ocean-100 text-ocean-600 rounded-2xl flex items-center justify-center">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-ocean-900 font-[family-name:var(--font-display)]">
                Shipping Rates & Delivery Times
              </h2>
              <p className="text-sand-600 text-sm">All orders ship directly from our Las Vegas, NV boutique warehouse.</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-sand-200 text-ocean-900 font-semibold bg-sand-100/50">
                  <th className="p-4 rounded-tl-xl">Shipping Method</th>
                  <th className="p-4">Delivery Estimate</th>
                  <th className="p-4 rounded-tr-xl">Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand-200 text-sand-700">
                <tr>
                  <td className="p-4 font-semibold text-ocean-900">Standard Island Delivery</td>
                  <td className="p-4">3–5 Business Days</td>
                  <td className="p-4 font-bold text-emerald-600">FREE on orders $100+ ($5.95 under $100)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-ocean-900">Priority Resort Air</td>
                  <td className="p-4">2 Business Days</td>
                  <td className="p-4 font-semibold text-ocean-800">$12.95</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-ocean-900">Next-Day Express</td>
                  <td className="p-4">1 Business Day (order by 1PM PST)</td>
                  <td className="p-4 font-semibold text-ocean-800">$24.95</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-ocean-900">Same-Day In-Store Pickup</td>
                  <td className="p-4">Ready in 2 hours at Paradise Rd Store</td>
                  <td className="p-4 font-bold text-gold-600">FREE (Always)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 30-Day Return Policy */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 border border-sand-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-coral-100 text-coral-600 rounded-2xl flex items-center justify-center">
              <RotateCcw className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-ocean-900 font-[family-name:var(--font-display)]">
                30-Day Hassle-Free Island Return Policy
              </h2>
              <p className="text-sand-600 text-sm">We want you to love everything you purchase from Island Vibe Treasures.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="bg-sand-50 p-6 rounded-2xl border border-sand-200">
              <span className="w-8 h-8 bg-coral-500 text-white rounded-full flex items-center justify-center font-bold text-xs mb-3">1</span>
              <h3 className="font-bold text-ocean-900 text-base mb-1">Initiate Return</h3>
              <p className="text-sand-600 text-xs leading-relaxed">
                Contact our customer support team or visit our boutique within 30 days of receiving your item.
              </p>
            </div>

            <div className="bg-sand-50 p-6 rounded-2xl border border-sand-200">
              <span className="w-8 h-8 bg-coral-500 text-white rounded-full flex items-center justify-center font-bold text-xs mb-3">2</span>
              <h3 className="font-bold text-ocean-900 text-base mb-1">Prepaid Label</h3>
              <p className="text-sand-600 text-xs leading-relaxed">
                We'll email you a prepaid return shipping label. Simply pack your unwashed, unworn item in original condition.
              </p>
            </div>

            <div className="bg-sand-50 p-6 rounded-2xl border border-sand-200">
              <span className="w-8 h-8 bg-coral-500 text-white rounded-full flex items-center justify-center font-bold text-xs mb-3">3</span>
              <h3 className="font-bold text-ocean-900 text-base mb-1">Fast Refund</h3>
              <p className="text-sand-600 text-xs leading-relaxed">
                Once received, your refund will be processed back to your original payment method within 2-3 business days.
              </p>
            </div>
          </div>
        </section>

        {/* In-Store Pickup Callout */}
        <div className="bg-gradient-to-r from-ocean-900 to-ocean-800 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-500/20 text-gold-300 rounded-full text-xs font-semibold">
              <MapPin className="w-3.5 h-3.5" /> Local Las Vegas Shoppers
            </div>
            <h3 className="text-2xl font-bold font-[family-name:var(--font-display)]">Prefer to Pick Up in Person?</h3>
            <p className="text-ocean-200 text-sm max-w-lg">
              Select "In-Store Pickup" at checkout. Your order will be beautifully gift-wrapped and waiting for you at 1234 Paradise Road.
            </p>
          </div>
          <Link
            href="/visit"
            className="px-6 py-3.5 bg-gold-500 hover:bg-gold-400 text-ocean-950 font-bold rounded-xl text-sm transition-all whitespace-nowrap shadow-lg shadow-gold-500/20"
          >
            Visit Our Store <ArrowRight className="w-4 h-4 inline ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
