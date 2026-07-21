"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare, Sparkles } from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    orderNumber: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
    toast.success("Message sent! Our island team will respond within 24 hours.", {
      icon: "🌺",
    });
  };

  return (
    <div className="min-h-screen bg-sand-50/40">
      {/* Hero */}
      <div className="bg-gradient-to-r from-ocean-900 via-ocean-800 to-emerald-950 py-16 sm:py-20 px-4 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-gold-300 text-xs font-semibold uppercase tracking-widest mb-4 border border-white/20">
            We're Here for You 🌴
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-white font-[family-name:var(--font-display)] tracking-tight">
            Contact Us
          </h1>
          <p className="text-ocean-200 mt-4 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            Have questions about your order, sizing, live shows, or boutique visits? Get in touch with our team in Las Vegas.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Details Column */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-sand-200 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-ocean-900 font-[family-name:var(--font-display)] flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-coral-500" /> Store Information
              </h2>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-ocean-50 text-ocean-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-ocean-900">Boutique Location</p>
                    <p className="text-sand-600 mt-0.5">
                      1234 Paradise Road<br />
                      Las Vegas, NV 89109
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold-50 text-gold-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-ocean-900">Store Hours</p>
                    <p className="text-sand-600 mt-0.5">
                      Mon – Sun: 10:00 AM – 8:00 PM PST<br />
                      <span className="text-coral-600 font-medium">Live Shows: Tue & Thu 6PM PST</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-coral-50 text-coral-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-ocean-900">Phone</p>
                    <a href="tel:+17025551234" className="text-sand-600 hover:text-ocean-600 mt-0.5 block">
                      (702) 555-1234
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-ocean-900">Email</p>
                    <a href="mailto:aloha@islandvibetreasures.com" className="text-sand-600 hover:text-ocean-600 mt-0.5 block">
                      aloha@islandvibetreasures.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gold-500/10 to-coral-500/10 rounded-3xl p-6 border border-gold-200 text-center">
              <span className="text-3xl">🌺</span>
              <h3 className="font-bold text-ocean-900 mt-2 text-base">Quick Response Guarantee</h3>
              <p className="text-xs text-sand-600 mt-1 leading-relaxed">
                We respond to all customer emails and inquiries within 24 hours (usually much faster during live show days!).
              </p>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-sand-200 shadow-sm">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-bold text-ocean-900 font-[family-name:var(--font-display)]">
                    Mahalo! Message Received
                  </h2>
                  <p className="text-sand-600 max-w-md mx-auto text-sm">
                    Thank you for reaching out to Island Vibe Treasures. A member of our team will get back to you at <span className="font-semibold text-ocean-900">{formData.email}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "general", orderNumber: "", message: "" });
                    }}
                    className="mt-6 px-6 py-2.5 bg-ocean-500 hover:bg-ocean-600 text-white font-semibold rounded-xl text-sm transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-ocean-900 font-[family-name:var(--font-display)] mb-1">
                      Send Us a Message
                    </h2>
                    <p className="text-sm text-sand-600">
                      Fill out the form below and our customer care team will assist you.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-ocean-800 uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Maria Santos"
                        className="w-full px-4 py-3 rounded-xl border border-sand-300 focus:outline-none focus:ring-2 focus:ring-gold-400 text-sm text-ocean-900"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-ocean-800 uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-sand-300 focus:outline-none focus:ring-2 focus:ring-gold-400 text-sm text-ocean-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-ocean-800 uppercase tracking-wider mb-2">
                        Topic / Category
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-sand-300 focus:outline-none focus:ring-2 focus:ring-gold-400 text-sm text-ocean-900 bg-white"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="order">Order Status / Delivery</option>
                        <option value="live">Facebook Live Show Flash Deal</option>
                        <option value="sizing">Sizing & Styling Advice</option>
                        <option value="returns">Returns & Exchanges</option>
                        <option value="boutique">In-Store Las Vegas Pickup</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-ocean-800 uppercase tracking-wider mb-2">
                        Order Number (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.orderNumber}
                        onChange={(e) => setFormData({ ...formData, orderNumber: e.target.value })}
                        placeholder="#IVT-84920"
                        className="w-full px-4 py-3 rounded-xl border border-sand-300 focus:outline-none focus:ring-2 focus:ring-gold-400 text-sm text-ocean-900"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-ocean-800 uppercase tracking-wider mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us how we can help..."
                      className="w-full px-4 py-3 rounded-xl border border-sand-300 focus:outline-none focus:ring-2 focus:ring-gold-400 text-sm text-ocean-900"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 bg-gold-500 hover:bg-gold-400 text-ocean-950 font-bold text-base rounded-xl transition-all shadow-lg shadow-gold-500/25 active:scale-95 inline-flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
