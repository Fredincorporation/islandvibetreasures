"use client";

import { useState } from "react";
import Link from "next/link";
import { Ruler, Sparkles, Check, Info } from "lucide-react";

export default function SizeGuidePage() {
  const [activeTab, setActiveTab] = useState<"women" | "men" | "shoes" | "rings">("women");

  return (
    <div className="min-h-screen bg-sand-50/40">
      {/* Hero */}
      <div className="bg-gradient-to-r from-ocean-900 via-ocean-800 to-emerald-950 py-16 sm:py-20 px-4 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-gold-300 text-xs font-semibold uppercase tracking-widest mb-4 border border-white/20">
            Find Your Perfect Fit 📐
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-white font-[family-name:var(--font-display)] tracking-tight">
            Size Guide & Fit Tips
          </h1>
          <p className="text-ocean-200 mt-4 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            Measurements and sizing tips for our linen resort wear, men's guayaberas, woven sandals, and artisan rings.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        {/* Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { id: "women", label: "Women's Apparel" },
            { id: "men", label: "Men's Shirts & Guayaberas" },
            { id: "shoes", label: "Sandals & Footwear" },
            { id: "rings", label: "Rings & Jewelry" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-3 rounded-2xl text-sm font-bold transition-all ${
                activeTab === tab.id
                  ? "bg-gold-500 text-ocean-950 shadow-md"
                  : "bg-white text-ocean-800 hover:bg-sand-100 border border-sand-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-sand-200 shadow-sm space-y-6">
          {activeTab === "women" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-ocean-900 font-[family-name:var(--font-display)] mb-1">
                  Women's Resort Apparel Sizing
                </h2>
                <p className="text-sand-600 text-sm">
                  Our dresses and linen kaftans feature relaxed, island-tailored silhouettes designed for comfort in warm climates.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-sand-200 text-ocean-900 font-semibold bg-sand-100/50">
                      <th className="p-4 rounded-tl-xl">Size</th>
                      <th className="p-4">US Size</th>
                      <th className="p-4">Bust (inches)</th>
                      <th className="p-4">Waist (inches)</th>
                      <th className="p-4 rounded-tr-xl">Hips (inches)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sand-200 text-sand-700">
                    <tr>
                      <td className="p-4 font-bold text-ocean-900">XS</td>
                      <td className="p-4">0 – 2</td>
                      <td className="p-4">31.5" – 33"</td>
                      <td className="p-4">24" – 25.5"</td>
                      <td className="p-4">34" – 35.5"</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-ocean-900">S</td>
                      <td className="p-4">4 – 6</td>
                      <td className="p-4">33.5" – 35"</td>
                      <td className="p-4">26" – 27.5"</td>
                      <td className="p-4">36" – 37.5"</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-ocean-900">M</td>
                      <td className="p-4">8 – 10</td>
                      <td className="p-4">35.5" – 37.5"</td>
                      <td className="p-4">28" – 30"</td>
                      <td className="p-4">38" – 40"</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-ocean-900">L</td>
                      <td className="p-4">12 – 14</td>
                      <td className="p-4">38" – 40.5"</td>
                      <td className="p-4">30.5" – 33"</td>
                      <td className="p-4">40.5" – 43"</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-ocean-900">XL</td>
                      <td className="p-4">16 – 18</td>
                      <td className="p-4">41" – 43.5"</td>
                      <td className="p-4">33.5" – 36"</td>
                      <td className="p-4">43.5" – 46"</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "men" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-ocean-900 font-[family-name:var(--font-display)] mb-1">
                  Men's Shirts & Guayaberas Sizing
                </h2>
                <p className="text-sand-600 text-sm">
                  Crafted from 100% breathable linen. Guayaberas are designed with a relaxed straight cut to be worn un-tucked.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-sand-200 text-ocean-900 font-semibold bg-sand-100/50">
                      <th className="p-4 rounded-tl-xl">Size</th>
                      <th className="p-4">Chest (inches)</th>
                      <th className="p-4">Neck (inches)</th>
                      <th className="p-4 rounded-tr-xl">Sleeve (inches)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sand-200 text-sand-700">
                    <tr>
                      <td className="p-4 font-bold text-ocean-900">S</td>
                      <td className="p-4">36" – 38"</td>
                      <td className="p-4">14" – 14.5"</td>
                      <td className="p-4">32" – 33"</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-ocean-900">M</td>
                      <td className="p-4">39" – 41"</td>
                      <td className="p-4">15" – 15.5"</td>
                      <td className="p-4">33.5" – 34"</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-ocean-900">L</td>
                      <td className="p-4">42" – 44"</td>
                      <td className="p-4">16" – 16.5"</td>
                      <td className="p-4">34.5" – 35"</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-ocean-900">XL</td>
                      <td className="p-4">45" – 48"</td>
                      <td className="p-4">17" – 17.5"</td>
                      <td className="p-4">35.5" – 36"</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-bold text-ocean-900">XXL</td>
                      <td className="p-4">49" – 52"</td>
                      <td className="p-4">18" – 18.5"</td>
                      <td className="p-4">36.5" – 37"</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "shoes" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-ocean-900 font-[family-name:var(--font-display)] mb-1">
                  Handwoven Leather Sandals Sizing
                </h2>
                <p className="text-sand-600 text-sm">
                  Handmade in Oaxaca, Mexico. Fits true to size. If you take a half size, we recommend sizing up.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-sand-200 text-ocean-900 font-semibold bg-sand-100/50">
                      <th className="p-4 rounded-tl-xl">US Size</th>
                      <th className="p-4">EU Size</th>
                      <th className="p-4">UK Size</th>
                      <th className="p-4 rounded-tr-xl">Foot Length (inches)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sand-200 text-sand-700">
                    <tr><td className="p-4 font-bold text-ocean-900">US 6</td><td className="p-4">EU 36.5</td><td className="p-4">UK 4</td><td className="p-4">9.1"</td></tr>
                    <tr><td className="p-4 font-bold text-ocean-900">US 7</td><td className="p-4">EU 37.5</td><td className="p-4">UK 5</td><td className="p-4">9.4"</td></tr>
                    <tr><td className="p-4 font-bold text-ocean-900">US 8</td><td className="p-4">EU 38.5</td><td className="p-4">UK 6</td><td className="p-4">9.7"</td></tr>
                    <tr><td className="p-4 font-bold text-ocean-900">US 9</td><td className="p-4">EU 39.5</td><td className="p-4">UK 7</td><td className="p-4">10.0"</td></tr>
                    <tr><td className="p-4 font-bold text-ocean-900">US 10</td><td className="p-4">EU 40.5</td><td className="p-4">UK 8</td><td className="p-4">10.3"</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "rings" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-ocean-900 font-[family-name:var(--font-display)] mb-1">
                  Artisan Ring Sizing Guide
                </h2>
                <p className="text-sand-600 text-sm">
                  Our sterling silver & turquoise rings are crafted according to standard US ring sizes.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-sand-200 text-ocean-900 font-semibold bg-sand-100/50">
                      <th className="p-4 rounded-tl-xl">US Ring Size</th>
                      <th className="p-4">Inside Diameter (mm)</th>
                      <th className="p-4 rounded-tr-xl">Inside Circumference (mm)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-sand-200 text-sand-700">
                    <tr><td className="p-4 font-bold text-ocean-900">Size 6</td><td className="p-4">16.5 mm</td><td className="p-4">51.8 mm</td></tr>
                    <tr><td className="p-4 font-bold text-ocean-900">Size 7</td><td className="p-4">17.3 mm</td><td className="p-4">54.4 mm</td></tr>
                    <tr><td className="p-4 font-bold text-ocean-900">Size 8</td><td className="p-4">18.1 mm</td><td className="p-4">56.9 mm</td></tr>
                    <tr><td className="p-4 font-bold text-ocean-900">Size 9</td><td className="p-4">18.9 mm</td><td className="p-4">59.5 mm</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Measuring Tip */}
        <div className="bg-ocean-50 rounded-3xl p-8 border border-ocean-100 flex items-start gap-4">
          <Info className="w-6 h-6 text-ocean-600 flex-shrink-0 mt-0.5" />
          <div className="space-y-1 text-sm text-ocean-800">
            <p className="font-bold">Need Personal Styling Assistance?</p>
            <p className="text-ocean-600 leading-relaxed text-xs sm:text-sm">
              If you're unsure about sizing for a specific gown or guayabera, drop us a line or tune in to our Facebook Live shows on Tuesdays & Thursdays at 6PM PST for live try-on demos!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
