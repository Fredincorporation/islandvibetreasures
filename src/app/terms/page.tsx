import { Metadata } from "next";
import Link from "next/link";
import { FileCheck, ShoppingBag, Truck, RefreshCw, ShieldAlert, Scale, Mail, Phone, MapPin, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Island Vibe Treasures",
  description: "Terms and conditions governing the use of Island Vibe Treasures website, boutique services, and online purchases.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-sand-50/40 pb-20">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-ocean-950 via-ocean-900 to-emerald-950 text-white py-16 sm:py-20 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-4 text-center relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-gold-300 text-xs font-semibold tracking-wider transition-colors border border-white/10 mb-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
          <span className="inline-block px-3 py-1 bg-gold-500/20 text-gold-300 font-bold text-xs rounded-full uppercase tracking-widest border border-gold-400/30">
            Terms & Conditions
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-display)] tracking-tight">
            Terms of Service
          </h1>
          <p className="text-ocean-200 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Welcome to Island Vibe Treasures. Please review the terms and conditions that govern your use of our website, boutique services, and orders.
          </p>
          <p className="text-xs text-sand-400 font-medium">
            Last Updated: July 21, 2026 &bull; Effective Immediately
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-10">
        {/* Core Highlights Box */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl p-5 border border-sand-200 shadow-xs space-y-2 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-xl bg-ocean-50 text-ocean-700 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-ocean-900">Artisan Authenticity</h3>
            <p className="text-xs text-sand-600">Handcrafted natural materials feature unique organic beauty & subtle variations.</p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-sand-200 shadow-xs space-y-2 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-xl bg-coral-50 text-coral-600 flex items-center justify-center">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-ocean-900">30-Day Returns</h3>
            <p className="text-xs text-sand-600">Hassle-free returns on unworn, tagged resort wear and jewelry pieces.</p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-sand-200 shadow-xs space-y-2 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-xl bg-gold-50 text-gold-600 flex items-center justify-center">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-ocean-900">Nevada Jurisdiction</h3>
            <p className="text-xs text-sand-600">Governed by the laws of the State of Nevada and Clark County.</p>
          </div>
        </div>

        {/* Article Body */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-sand-200 shadow-sm space-y-8 text-sand-700 text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ocean-900 font-[family-name:var(--font-display)] flex items-center gap-2 border-b border-sand-100 pb-3">
              <FileCheck className="w-5 h-5 text-coral-600" /> 1. Acceptance of Terms
            </h2>
            <p>
              By browsing, accessing, or purchasing from <strong>Island Vibe Treasures</strong> (including our online store at <em>islandvibetreasures.com</em>, mobile applications, social media live shopping streams, or Paradise Road boutique in Las Vegas), you agree to be bound by these Terms of Service and our Privacy Policy.
            </p>
            <p>
              If you do not agree to all terms, please refrain from using our services or placing orders.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ocean-900 font-[family-name:var(--font-display)] flex items-center gap-2 border-b border-sand-100 pb-3">
              <ShoppingBag className="w-5 h-5 text-coral-600" /> 2. Handcrafted Artisan Products & Natural Variations
            </h2>
            <p>
              Many of our products — including handwoven ATA grass bags, Panama sun hats, natural sea glass, mother-of-pearl shells, Sleeping Beauty turquoise, pink coral, and pure linen garments — are individually handcrafted by independent artisans across French Polynesia, Oaxaca, Bali, and Key West.
            </p>
            <p>
              Due to the organic nature of natural stones, hand-dyed plant fibers, and handcrafted weaves, minor variations in color hue, pattern texture, dimensions, or weave grain are natural characteristics of authenticity — not manufacturing defects.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ocean-900 font-[family-name:var(--font-display)] flex items-center gap-2 border-b border-sand-100 pb-3">
              <FileCheck className="w-5 h-5 text-coral-600" /> 3. Pricing, Payments & Orders
            </h2>
            <ul className="space-y-2 pl-5 list-disc">
              <li>All prices are displayed in U.S. Dollars ($ USD) unless explicitly selected otherwise.</li>
              <li>We reserve the right to modify pricing, promotional offers, or product availability at any time without prior notice.</li>
              <li>In the event of an inadvertent typographical pricing error, we reserve the right to cancel or refund any affected unfulfilled orders.</li>
              <li>Orders are subject to acceptance and availability verification. We reserve the right to limit order quantities per household or business.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ocean-900 font-[family-name:var(--font-display)] flex items-center gap-2 border-b border-sand-100 pb-3">
              <Truck className="w-5 h-5 text-coral-600" /> 4. Shipping, Transit & Risk of Loss
            </h2>
            <p>
              We strive to dispatch orders within 1 to 2 business days. Estimated delivery times provided during checkout are estimates supplied by shipping carriers (USPS, FedEx, UPS).
            </p>
            <p>
              Risk of loss and title for items purchased pass to you upon delivery of the package to the shipping carrier. Please inspect your package upon receipt and contact us immediately if items arrive damaged in transit.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ocean-900 font-[family-name:var(--font-display)] flex items-center gap-2 border-b border-sand-100 pb-3">
              <RefreshCw className="w-5 h-5 text-coral-600" /> 5. Returns, Exchanges & Store Credit
            </h2>
            <p>
              We want you to love your island treasures. If you are not completely satisfied with your purchase:
            </p>
            <ul className="space-y-2 pl-5 list-disc">
              <li>Items may be returned within <strong>30 days of delivery</strong> for a full refund or store exchange.</li>
              <li>Garments must be unworn, unwashed, and in original condition with all tags intact.</li>
              <li>Jewelry must be returned in its original anti-tarnish protective velvet pouch.</li>
              <li>Final sale items, customized special orders, and unsealed body oils are non-refundable for hygiene reasons.</li>
            </ul>
            <p className="pt-2">
              For complete details, please visit our <Link href="/shipping" className="text-coral-600 font-semibold hover:underline">Shipping & Returns Page</Link>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ocean-900 font-[family-name:var(--font-display)] flex items-center gap-2 border-b border-sand-100 pb-3">
              <ShieldAlert className="w-5 h-5 text-coral-600" /> 6. Intellectual Property Rights
            </h2>
            <p>
              All content on this website — including text, logos, graphics, icons, photography, blog articles, product designs, and video streams — is the exclusive property of <strong>Island Vibe Treasures LLC</strong> and is protected by United States and international copyright and trademark laws.
            </p>
            <p>
              Reproduction, distribution, or commercial exploitation of any material without express written consent is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ocean-900 font-[family-name:var(--font-display)] flex items-center gap-2 border-b border-sand-100 pb-3">
              <Scale className="w-5 h-5 text-coral-600" /> 7. Governing Law & Dispute Resolution
            </h2>
            <p>
              These Terms of Service and any separate agreements shall be governed by and construed in accordance with the laws of the <strong>State of Nevada</strong>, without regard to its conflict of law principles. Any legal action or proceeding shall be brought exclusively in the state or federal courts located in Clark County, Nevada.
            </p>
          </section>

          <section className="space-y-4 pt-4 border-t border-sand-200">
            <h2 className="text-xl sm:text-2xl font-bold text-ocean-900 font-[family-name:var(--font-display)]">
              Questions Regarding Our Terms
            </h2>
            <p>If you have any questions or require clarification regarding our Terms of Service, please contact us:</p>
            <div className="bg-sand-50 rounded-2xl p-6 border border-sand-200/80 space-y-3 text-xs sm:text-sm">
              <div className="flex items-center gap-3 text-ocean-900 font-semibold">
                <Mail className="w-4 h-4 text-coral-600" />
                <a href="mailto:legal@islandvibetreasures.com" className="hover:underline">
                  legal@islandvibetreasures.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-ocean-900 font-semibold">
                <Phone className="w-4 h-4 text-coral-600" />
                <a href="tel:+17025551234" className="hover:underline">
                  (702) 555-1234
                </a>
              </div>
              <div className="flex items-center gap-3 text-ocean-900 font-semibold">
                <MapPin className="w-4 h-4 text-coral-600" />
                <span>Island Vibe Treasures, 1234 Paradise Road, Las Vegas, NV 89109</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
