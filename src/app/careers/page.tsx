"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, Heart, Award, MapPin, Briefcase, CheckCircle2, ArrowRight, Send } from "lucide-react";
import { toast } from "sonner";

interface JobPosting {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
  requirements: string[];
}

const openRoles: JobPosting[] = [
  {
    id: "j1",
    title: "Boutique Stylist & Customer Experience Specialist",
    department: "Retail Boutique",
    type: "Full-Time / Part-Time",
    location: "Paradise Road Boutique, Las Vegas, NV",
    description: "Guide customers through personalized island resort styling, assist with fitting sessions, and curate unforgettable in-store experiences.",
    requirements: [
      "2+ years fashion retail or boutique experience",
      "Passionate about resort fashion, linen apparel, and artisan jewelry",
      "Warm, hospitable, and customer-focused personality",
      "Flexible weekend & holiday availability"
    ]
  },
  {
    id: "j2",
    title: "Facebook Live Host & Content Creator",
    department: "Social Commerce & Media",
    type: "Part-Time (Tue & Thu Evenings)",
    location: "Las Vegas Studio / Boutique",
    description: "Host our bi-weekly Facebook Live broadcasts, present new arrivals and flash deals, and engage with our vibrant online island tribe community.",
    requirements: [
      "Natural on-camera presence, high energy, and charisma",
      "Knowledge of live shopping trends and social media audience engagement",
      "Comfortable styling outfits and demonstrating jewelry live",
      "Available Tuesday & Thursday evenings from 5:30 PM to 7:30 PM PST"
    ]
  },
  {
    id: "j3",
    title: "Inventory & Fulfillment Associate",
    department: "Warehouse & E-Commerce",
    type: "Full-Time",
    location: "Las Vegas, NV",
    description: "Inspect artisan shipments, manage inventory stock, and hand-pack online orders with our signature gift wrapping.",
    requirements: [
      "Detail-oriented with strong organizational skills",
      "Experience with e-commerce fulfillment platforms",
      "Ability to lift 30 lbs and work efficiently in a fast-paced setting"
    ]
  }
];

export default function CareersPage() {
  const [selectedRole, setSelectedRole] = useState<JobPosting | null>(null);
  const [applicant, setApplicant] = useState({ name: "", email: "", phone: "", notes: "" });
  const [applied, setApplied] = useState(false);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicant.name || !applicant.email) {
      toast.error("Please fill in your name and email.");
      return;
    }
    setApplied(true);
    toast.success(`Application submitted for ${selectedRole?.title}!`, { icon: "🌴" });
  };

  return (
    <div className="min-h-screen bg-sand-50/40">
      {/* Hero */}
      <div className="bg-gradient-to-r from-ocean-900 via-ocean-800 to-emerald-950 py-16 sm:py-20 px-4 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-gold-300 text-xs font-semibold uppercase tracking-widest mb-4 border border-white/20">
            Work in Paradise 🌴
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-white font-[family-name:var(--font-display)] tracking-tight">
            Careers at Island Vibe
          </h1>
          <p className="text-ocean-200 mt-4 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            Join our passionate team in Las Vegas. We bring island warmth, luxury linen fashion, and artisan treasures to people everywhere.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Perks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-3xl border border-sand-200 shadow-xs text-center space-y-3">
            <div className="w-12 h-12 bg-coral-100 text-coral-600 rounded-2xl flex items-center justify-center mx-auto">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-ocean-900 text-lg">Tropical Work Vibe</h3>
            <p className="text-sand-600 text-xs leading-relaxed">
              Step into a warm, supportive, and creative environment where hospitality meets vibrant island fashion.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-sand-200 shadow-xs text-center space-y-3">
            <div className="w-12 h-12 bg-gold-100 text-gold-700 rounded-2xl flex items-center justify-center mx-auto">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-ocean-900 text-lg">Generous Discounts</h3>
            <p className="text-sand-600 text-xs leading-relaxed">
              Enjoy a 40% employee discount across our entire linen clothing, gold jewelry, and vacation collections.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-sand-200 shadow-xs text-center space-y-3">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-ocean-900 text-lg">Growth & Live Bonus</h3>
            <p className="text-sand-600 text-xs leading-relaxed">
              Competitive hourly rates, performance bonuses, live show commission splits, and leadership advancement.
            </p>
          </div>
        </div>

        {/* Open Positions List */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-ocean-900 font-[family-name:var(--font-display)]">
              Open Positions
            </h2>
            <p className="text-sand-600 text-sm mt-2">
              Explore current opportunities at our Las Vegas boutique & studio.
            </p>
          </div>

          <div className="space-y-6">
            {openRoles.map((role) => (
              <div
                key={role.id}
                className="bg-white rounded-3xl p-8 border border-sand-200 shadow-sm hover:shadow-md transition-all space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold text-coral-600 uppercase tracking-widest">
                      {role.department} &bull; {role.type}
                    </span>
                    <h3 className="text-xl font-bold text-ocean-900 mt-1">{role.title}</h3>
                    <p className="text-xs text-sand-500 flex items-center gap-1 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-gold-600" /> {role.location}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedRole(role);
                      setApplied(false);
                    }}
                    className="px-6 py-3 bg-gold-500 hover:bg-gold-400 text-ocean-950 font-bold rounded-xl text-sm transition-all shadow-sm whitespace-nowrap self-start sm:self-center"
                  >
                    Apply Now
                  </button>
                </div>

                <p className="text-sand-700 text-sm leading-relaxed border-t border-sand-100 pt-4">
                  {role.description}
                </p>

                <div className="space-y-2 pt-2">
                  <p className="text-xs font-bold text-ocean-900 uppercase tracking-wider">Key Requirements:</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-sand-600">
                    {role.requirements.map((req, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-emerald-500 font-bold">•</span> {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Modal / Drawer */}
        {selectedRole && (
          <div className="fixed inset-0 z-50 bg-ocean-950/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-8 max-w-lg w-full space-y-6 shadow-2xl relative">
              <button
                onClick={() => setSelectedRole(null)}
                className="absolute top-6 right-6 w-8 h-8 rounded-full bg-sand-100 text-sand-600 hover:bg-sand-200 flex items-center justify-center font-bold text-sm"
              >
                ✕
              </button>

              <div>
                <span className="text-xs font-bold text-coral-600 uppercase tracking-wider">
                  Applying for
                </span>
                <h3 className="text-xl font-bold text-ocean-900">{selectedRole.title}</h3>
              </div>

              {applied ? (
                <div className="text-center py-8 space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                  <h4 className="text-xl font-bold text-ocean-900">Application Received!</h4>
                  <p className="text-sand-600 text-xs">
                    Thank you for applying. Our hiring manager will review your information and follow up via email.
                  </p>
                  <button
                    onClick={() => setSelectedRole(null)}
                    className="mt-4 px-6 py-2 bg-ocean-900 text-white font-bold rounded-xl text-xs"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApply} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-ocean-800 uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={applicant.name}
                      onChange={(e) => setApplicant({ ...applicant, name: e.target.value })}
                      placeholder="e.g. Jessica Taylor"
                      className="w-full px-4 py-2.5 rounded-xl border border-sand-300 text-sm text-ocean-900 focus:ring-2 focus:ring-gold-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-ocean-800 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={applicant.email}
                      onChange={(e) => setApplicant({ ...applicant, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-sand-300 text-sm text-ocean-900 focus:ring-2 focus:ring-gold-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-ocean-800 uppercase tracking-wider mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={applicant.phone}
                      onChange={(e) => setApplicant({ ...applicant, phone: e.target.value })}
                      placeholder="(702) 555-0199"
                      className="w-full px-4 py-2.5 rounded-xl border border-sand-300 text-sm text-ocean-900 focus:ring-2 focus:ring-gold-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-ocean-800 uppercase tracking-wider mb-1">
                      Brief Note / Relevant Experience
                    </label>
                    <textarea
                      rows={3}
                      value={applicant.notes}
                      onChange={(e) => setApplicant({ ...applicant, notes: e.target.value })}
                      placeholder="Tell us a little bit about yourself..."
                      className="w-full px-4 py-2.5 rounded-xl border border-sand-300 text-sm text-ocean-900 focus:ring-2 focus:ring-gold-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gold-500 hover:bg-gold-400 text-ocean-950 font-bold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Submit Application
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
