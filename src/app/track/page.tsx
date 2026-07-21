"use client";

import { useState } from "react";
import Link from "next/link";
import { Package, Search, Truck, CheckCircle2, Clock, MapPin, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState("");
  const [email, setEmail] = useState("");
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderNumber || !email) {
      toast.error("Please enter both your Order Number and Email Address.");
      return;
    }
    setSearched(true);
    toast.success("Order status retrieved!", { icon: "📦" });
  };

  return (
    <div className="min-h-screen bg-sand-50/40">
      {/* Hero */}
      <div className="bg-gradient-to-r from-ocean-900 via-ocean-800 to-emerald-950 py-16 sm:py-20 px-4 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-gold-300 text-xs font-semibold uppercase tracking-widest mb-4 border border-white/20">
            Real-Time Shipment Tracking 📦
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-white font-[family-name:var(--font-display)] tracking-tight">
            Track Your Order
          </h1>
          <p className="text-ocean-200 mt-4 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            Enter your order details below to check the live status of your island package.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Order Form */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-sand-200 shadow-sm space-y-6">
          <form onSubmit={handleSearch} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-ocean-800 uppercase tracking-wider mb-2">
                  Order Number *
                </label>
                <input
                  type="text"
                  required
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  placeholder="e.g. #IVT-84920"
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-sand-300 focus:outline-none focus:ring-2 focus:ring-gold-400 text-sm text-ocean-900"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gold-500 hover:bg-gold-400 text-ocean-950 font-bold text-base rounded-xl transition-all shadow-lg shadow-gold-500/25 active:scale-95 flex items-center justify-center gap-2"
            >
              <Search className="w-5 h-5" /> Track Package
            </button>
          </form>

          {/* Demo Results Display */}
          {searched && (
            <div className="pt-8 border-t border-sand-200 space-y-8 animate-fadeIn">
              <div className="bg-ocean-50 rounded-2xl p-6 border border-ocean-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-coral-600 uppercase tracking-widest block">
                    Order Status
                  </span>
                  <h3 className="text-xl font-bold text-ocean-900 mt-0.5">In Transit — On Its Way!</h3>
                  <p className="text-xs text-sand-600 mt-1">Carrier: USPS Priority Mail &bull; Tracking #9400111899564210</p>
                </div>
                <div className="px-4 py-2 bg-emerald-500 text-white rounded-xl text-xs font-bold shadow-sm">
                  Estimated Delivery: Tomorrow by 7PM
                </div>
              </div>

              {/* Status Timeline */}
              <div className="space-y-6 px-2">
                <h4 className="font-bold text-ocean-900 text-sm uppercase tracking-wider">Shipment Timeline</h4>

                <div className="relative pl-8 space-y-6 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-emerald-500">
                  <div className="relative flex items-start gap-4">
                    <div className="absolute -left-8 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      ✓
                    </div>
                    <div>
                      <p className="font-bold text-ocean-900 text-sm">Out for Delivery</p>
                      <p className="text-xs text-sand-500">Las Vegas Regional Hub &bull; 8:15 AM</p>
                    </div>
                  </div>

                  <div className="relative flex items-start gap-4">
                    <div className="absolute -left-8 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      ✓
                    </div>
                    <div>
                      <p className="font-bold text-ocean-900 text-sm">Departed Las Vegas Facility</p>
                      <p className="text-xs text-sand-500">Paradise Road Warehouse &bull; Yesterday 4:30 PM</p>
                    </div>
                  </div>

                  <div className="relative flex items-start gap-4">
                    <div className="absolute -left-8 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      ✓
                    </div>
                    <div>
                      <p className="font-bold text-ocean-900 text-sm">Order Placed & Gift Wrapped</p>
                      <p className="text-xs text-sand-500">Island Vibe Treasures &bull; Yesterday 11:20 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
