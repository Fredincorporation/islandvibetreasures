import { Metadata } from "next";
import Link from "next/link";
import { Shield, Lock, Eye, FileText, CheckCircle2, Mail, Phone, MapPin, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Island Vibe Treasures",
  description: "Learn how Island Vibe Treasures collects, uses, and protects your personal information and privacy.",
};

export default function PrivacyPolicyPage() {
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
            Legal & Data Protection
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-display)] tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-ocean-200 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Your privacy and trust mean everything to us. Learn how we collect, safeguard, and use your information when shopping with Island Vibe Treasures.
          </p>
          <p className="text-xs text-sand-400 font-medium">
            Last Updated: July 21, 2026 &bull; Effective Immediately
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-10">
        {/* Core Commitments Box */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl p-5 border border-sand-200 shadow-xs space-y-2 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-xl bg-ocean-50 text-ocean-700 flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-ocean-900">100% Data Protection</h3>
            <p className="text-xs text-sand-600">We encrypt and safeguard all transactions with 256-bit SSL technology.</p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-sand-200 shadow-xs space-y-2 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-xl bg-coral-50 text-coral-600 flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-ocean-900">Never Sold</h3>
            <p className="text-xs text-sand-600">We never rent or sell your personal details to third-party data brokers.</p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-sand-200 shadow-xs space-y-2 flex flex-col items-center text-center">
            <div className="w-10 h-10 rounded-xl bg-gold-50 text-gold-600 flex items-center justify-center">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-ocean-900">Full Transparency</h3>
            <p className="text-xs text-sand-600">You retain full control over your preferences, account data, and subscriptions.</p>
          </div>
        </div>

        {/* Article Body */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-sand-200 shadow-sm space-y-8 text-sand-700 text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ocean-900 font-[family-name:var(--font-display)] flex items-center gap-2 border-b border-sand-100 pb-3">
              <FileText className="w-5 h-5 text-coral-600" /> 1. Information We Collect
            </h2>
            <p>
              When you interact with Island Vibe Treasures — whether visiting our website, shopping in our Las Vegas flagship boutique, subscribing to our email newsletter, or joining our Facebook Live shopping streams — we collect certain information to deliver an exceptional experience:
            </p>
            <ul className="space-y-2 pl-5 list-disc">
              <li>
                <strong className="text-ocean-950">Personal Details Provided Directly:</strong> Your name, email address, shipping and billing addresses, telephone number, payment card details (processed securely via PCI-compliant gateways), and communication preferences.
              </li>
              <li>
                <strong className="text-ocean-950">Account & Order History:</strong> Your purchase history, wishlist items, saved sizing preferences, and customer service inquiries.
              </li>
              <li>
                <strong className="text-ocean-950">Automated Technical Information:</strong> IP address, browser type, device information, operating system, referrer URL, pages visited, and interaction data collected through cookies and web analytics.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ocean-900 font-[family-name:var(--font-display)] flex items-center gap-2 border-b border-sand-100 pb-3">
              <FileText className="w-5 h-5 text-coral-600" /> 2. How We Use Your Information
            </h2>
            <p>We utilize the collected information for specific, legitimate business purposes:</p>
            <ul className="space-y-2 pl-5 list-disc">
              <li>Processing, fulfilling, and shipping your orders for resort wear, jewelry, and gifts.</li>
              <li>Sending transactional updates, order status notifications, and delivery tracking.</li>
              <li>Providing customer support and resolving inquiries or return requests.</li>
              <li>Sending optional promotional emails, discount codes, and live stream show alerts (which you may opt out of at any time).</li>
              <li>Improving site navigation, product recommendations, and boutique inventory selection.</li>
              <li>Detecting, preventing, and investigating fraudulent transactions or security incidents.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ocean-900 font-[family-name:var(--font-display)] flex items-center gap-2 border-b border-sand-100 pb-3">
              <FileText className="w-5 h-5 text-coral-600" /> 3. Information Sharing & Third Parties
            </h2>
            <p>
              We prioritize your privacy. <strong className="text-ocean-950">Island Vibe Treasures does not sell, rent, or trade your personal information to third parties for marketing purposes.</strong>
            </p>
            <p>We share information only with trusted service providers essential to operating our business:</p>
            <ul className="space-y-2 pl-5 list-disc">
              <li><strong className="text-ocean-950">Payment Gateways:</strong> Encrypted payment processors (Stripe, PayPal, Apple Pay).</li>
              <li><strong className="text-ocean-950">Shipping & Logistics:</strong> Carriers (USPS, FedEx, UPS) to deliver your packages safely.</li>
              <li><strong className="text-ocean-950">Communication Tools:</strong> Email service providers to send transactional receipts and live alerts.</li>
              <li><strong className="text-ocean-950">Legal Obligations:</strong> If required by law, subpoena, or governmental regulation to protect our rights and property.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ocean-900 font-[family-name:var(--font-display)] flex items-center gap-2 border-b border-sand-100 pb-3">
              <FileText className="w-5 h-5 text-coral-600" /> 4. Cookies & Tracking Technologies
            </h2>
            <p>
              Our website uses cookies and similar technologies to enhance your browsing experience. Essential cookies keep your shopping cart intact while navigating between pages. Analytical cookies help us understand which product categories are most popular.
            </p>
            <p>
              You can control cookie settings through your internet browser preferences. Disabling essential cookies may affect cart functionality.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-ocean-900 font-[family-name:var(--font-display)] flex items-center gap-2 border-b border-sand-100 pb-3">
              <FileText className="w-5 h-5 text-coral-600" /> 5. Your Privacy Rights & State Regulations
            </h2>
            <p>Depending on your state or location, you have rights regarding your personal data:</p>
            <ul className="space-y-2 pl-5 list-disc">
              <li><strong className="text-ocean-950">Right to Access & Portability:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong className="text-ocean-950">Right to Rectification:</strong> Request correction of inaccurate account information.</li>
              <li><strong className="text-ocean-950">Right to Deletion:</strong> Request deletion of your account and personal records.</li>
              <li><strong className="text-ocean-950">Nevada Privacy Rights (NRS 603A):</strong> Nevada residents have the right to opt out of the sale of covered personal information.</li>
              <li><strong className="text-ocean-950">CCPA/CPRA Rights:</strong> California residents enjoy specific rights regarding data access and non-discrimination.</li>
            </ul>
          </section>

          <section className="space-y-4 pt-4 border-t border-sand-200">
            <h2 className="text-xl sm:text-2xl font-bold text-ocean-900 font-[family-name:var(--font-display)]">
              Contact Our Privacy Team
            </h2>
            <p>If you have questions regarding this Privacy Policy or wish to exercise your privacy rights, please reach out to us:</p>
            <div className="bg-sand-50 rounded-2xl p-6 border border-sand-200/80 space-y-3 text-xs sm:text-sm">
              <div className="flex items-center gap-3 text-ocean-900 font-semibold">
                <Mail className="w-4 h-4 text-coral-600" />
                <a href="mailto:privacy@islandvibetreasures.com" className="hover:underline">
                  privacy@islandvibetreasures.com
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
