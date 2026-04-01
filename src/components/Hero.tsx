"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const badges = [
  { icon: "✅", text: "10 Years in Business" },
  { icon: "🏡", text: "Residential & Commercial" },
  { icon: "📋", text: "Free Estimates" },
  { icon: "🤝", text: "Locally Owned & Operated" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80&fit=crop"
        alt="Professional lawn mowing from ground level perspective"
        fill
        className="object-cover"
        preload
        unoptimized
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 pt-24 pb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
        >
          Your outdoor space, looking its best — every single week.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed"
        >
          Premier Lawn &amp; Landscape has been transforming yards across Southern
          California for over 10 years. Residential and commercial. Free
          estimates. Just give us a call.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="tel:7472409647"
            className="inline-flex items-center gap-2 rounded-full bg-forest px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-forest-dark hover:shadow-xl"
          >
            📞 Call for a Free Estimate
          </a>
          <a
            href="mailto:premierlawnlandscapeinc@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white/10"
          >
            ✉️ Email Us
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-4 text-sm text-white/60"
        >
          We&apos;ll pick up. Promise.
        </motion.p>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {badges.map((badge) => (
            <span
              key={badge.text}
              className="flex items-center gap-2 text-sm text-white/75"
            >
              <span>{badge.icon}</span>
              {badge.text}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
