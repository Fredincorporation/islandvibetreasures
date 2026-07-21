"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Play,
  Clock,
  Calendar,
  MapPin,
  Bell,
  ArrowRight,
} from "lucide-react";
import { FacebookIcon } from "@/components/icons";

const upcomingShows = [
  {
    date: "Tuesday, July 28",
    time: "6:00 PM PST",
    title: "New Arrivals: Tropical Evening Wear",
    description:
      "Tune in for an exclusive first look at our newest collection — elegant island evening wear perfect for Vegas nights. Live try-ons, styling tips, and viewer-exclusive flash deals!",
  },
  {
    date: "Thursday, July 30",
    time: "6:00 PM PST",
    title: "Jewelry Showcase: Ocean Treasures",
    description:
      "Our master jeweler joins us to showcase handcrafted pieces. Learn about the artisans behind each treasure and snag limited-time bundle deals only available during the live show.",
  },
];

const pastHighlights = [
  {
    thumbnail: "/images/live_highlight_1.jpg",
    title: "Summer Collection Launch",
    views: "2.3K",
    date: "July 16, 2026",
  },
  {
    thumbnail: "/images/live_highlight_2.jpg",
    title: "Jewelry Styling Tips",
    views: "1.8K",
    date: "July 9, 2026",
  },
  {
    thumbnail: "/images/hero_tropical_resort_wear.jpg",
    title: "Beach to Bar Outfit Guide",
    views: "3.1K",
    date: "July 2, 2026",
  },
];

export default function LivePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-b from-ocean-900 to-ocean-800 py-16 sm:py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-coral-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold-500 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-coral-500/20 border border-coral-400/30 rounded-full text-coral-300 text-sm mb-4">
              <span className="w-2 h-2 bg-coral-400 rounded-full animate-pulse" />{" "}
              Facebook Live
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-white font-[family-name:var(--font-display)]">
              Island Vibe Live
            </h1>
            <p className="text-ocean-300 mt-4 max-w-lg mx-auto text-lg">
              Join us every Tuesday & Thursday at 6PM PST for exclusive
              deals, new arrivals, and island-style inspiration from our Las
              Vegas boutique.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Current stream embed */}
      <div className="max-w-5xl mx-auto px-4 -mt-8 relative z-10">
        <div className="bg-ocean-900 rounded-2xl border border-ocean-700 shadow-2xl overflow-hidden">
          <div className="aspect-video bg-ocean-800 flex items-center justify-center relative group overflow-hidden">
            <Image
              src="/images/live_stream_cover.jpg"
              alt="Island Vibe Treasures Live Broadcast"
              fill
              className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/90 via-ocean-950/40 to-transparent" />
            <div className="text-center relative z-10 p-6">
              <div className="w-20 h-20 bg-coral-500/90 hover:bg-coral-400 border-2 border-white/50 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl shadow-coral-500/40 transition-transform group-hover:scale-110 cursor-pointer">
                <Play className="w-9 h-9 fill-white text-white ml-1" />
              </div>
              <p className="text-white font-bold text-xl sm:text-2xl drop-shadow-md">
                Facebook Live Stream
              </p>
              <p className="text-coral-300 text-sm font-semibold mt-1">
                Every Tuesday & Thursday at 6:00 PM PST
              </p>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-8 py-3.5 bg-gold-500 hover:bg-gold-400 text-ocean-950 font-bold rounded-xl transition-all shadow-lg shadow-gold-500/25 active:scale-95"
              >
                <FacebookIcon className="w-5 h-5" /> Watch Broadcast on Facebook
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming shows */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-ocean-800 font-[family-name:var(--font-display)]">
              Upcoming Shows
            </h2>
            <p className="text-sand-600 mt-2">
              Mark your calendar — you won't want to miss these
            </p>
          </motion.div>

          <div className="space-y-4">
            {upcomingShows.map((show, i) => (
              <motion.div
                key={show.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-sand-200 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-shrink-0 flex items-center gap-3 sm:w-48">
                    <div className="w-12 h-12 bg-coral-100 rounded-xl flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-coral-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-ocean-800 text-sm">
                        {show.date}
                      </p>
                      <p className="text-xs text-sand-500 flex items-center gap-1 mt-0.5">
                        <Clock className="w-3 h-3" /> {show.time}
                      </p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-ocean-800">{show.title}</h3>
                    <p className="text-sm text-sand-600 mt-1">
                      {show.description}
                    </p>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-ocean-500 hover:bg-ocean-600 text-white rounded-xl text-sm font-medium transition-colors whitespace-nowrap">
                    <Bell className="w-4 h-4" /> Set Reminder
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past highlights */}
      <section className="py-16 sm:py-20 px-4 bg-sand-100">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-ocean-800 font-[family-name:var(--font-display)]">
              Past Live Shows
            </h2>
            <p className="text-sand-600 mt-2">
              Catch up on what you missed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastHighlights.map((video, i) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-sand-200 group cursor-pointer"
              >
                <div className="relative aspect-video bg-ocean-100 overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-ocean-900/20 group-hover:bg-ocean-900/40 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 bg-coral-500 rounded-full flex items-center justify-center">
                      <Play className="w-5 h-5 fill-white text-white ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 bg-ocean-900/80 text-white text-xs px-2 py-0.5 rounded">
                    {video.views} views
                  </span>
                </div>
                <div className="p-4">
                  <p className="font-semibold text-ocean-800 text-sm">
                    {video.title}
                  </p>
                  <p className="text-xs text-sand-500 mt-1">{video.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gold-500 relative overflow-hidden">
        <div className="absolute right-0 top-0 text-9xl opacity-20 select-none">
          🌴
        </div>
        <div className="max-w-2xl mx-auto text-center relative">
          <h2 className="text-3xl sm:text-4xl font-bold text-ocean-900 font-[family-name:var(--font-display)]">
            Never Miss a Show
          </h2>
          <p className="text-ocean-800 mt-3 mb-6">
            Follow us on Facebook and get notified when we go live. Exclusive
            deals drop during every broadcast!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-ocean-900 hover:bg-ocean-800 text-white font-bold rounded-xl transition-colors"
            >
              <FacebookIcon className="w-5 h-5" /> Follow on Facebook
            </a>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white hover:bg-sand-50 text-ocean-900 font-bold rounded-xl transition-colors border-2 border-ocean-900"
            >
              Shop the Collection <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
