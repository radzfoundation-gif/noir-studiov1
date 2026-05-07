"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const logos = [
  { name: "Procure", src: "https://svgl.app/library/procure.svg", gradient: "from-blue-500/20 to-cyan-500/20" },
  { name: "Shopify", src: "https://svgl.app/library/shopify.svg", gradient: "from-green-500/20 to-emerald-500/20" },
  { name: "Blender", src: "https://svgl.app/library/blender.svg", gradient: "from-orange-500/20 to-amber-500/20" },
  { name: "Figma", src: "https://svgl.app/library/figma.svg", gradient: "from-purple-500/20 to-pink-500/20" },
  { name: "Spotify", src: "https://svgl.app/library/spotify.svg", gradient: "from-green-500/20 to-lime-500/20" },
  { name: "Lottielab", src: "https://svgl.app/library/lottielab.svg", gradient: "from-yellow-500/20 to-green-500/20" },
  { name: "Google Cloud", src: "https://svgl.app/library/google_cloud.svg", gradient: "from-blue-400/20 to-cyan-300/20" },
  { name: "Bing", src: "https://svgl.app/library/bing.svg", gradient: "from-teal-500/20 to-cyan-500/20" },
];

export default function WaitlistPage() {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#f9fafb] p-4 md:p-8 flex flex-col font-sans">

      {/* Hero Container */}
      <section className="relative w-full max-w-[1400px] mx-auto rounded-[48px] bg-white border border-slate-200/50 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] overflow-hidden h-[600px] flex flex-col">

        {/* Background Video */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105 transition-transform duration-1000"
          >
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Text Content */}
        <div className="relative z-20 flex-1 px-6 md:px-16 pt-10 md:pt-16 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center md:items-start"
          >
            <h1
              className="text-[42px] md:text-[56px] font-medium tracking-tight text-[#0a1b33] leading-[1.1]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Studio-Quality Photos<br />Powered by AI
            </h1>
            <p className="text-[14px] md:text-[15px] text-[#64748b] max-w-lg mt-5 leading-relaxed">
              Join the waitlist to access Noir Studio's exclusive AI generation pipeline. Transform ordinary selfies into professional, studio-grade portraits effortlessly.
            </p>
            <AnimatePresence mode="wait">
              {!showForm ? (
                <motion.button
                  key="btn"
                  onClick={() => setShowForm(true)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 bg-[#0164FF] text-white rounded-full px-7 py-3 text-sm font-semibold shadow-lg shadow-blue-500/20 hover:bg-[#0164FF]/90 transition-colors"
                >
                  Join the Waitlist
                </motion.button>
              ) : !isSubmitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="mt-8 flex flex-col sm:flex-row gap-3 w-full max-w-lg"
                >
                  <input type="text" placeholder="Name" required className="flex-1 px-4 py-2.5 rounded-full border border-slate-300 focus:outline-none focus:border-[#0164FF] focus:ring-1 focus:ring-[#0164FF] text-sm text-slate-800 placeholder:text-slate-400 bg-white/90 backdrop-blur-sm shadow-sm" />
                  <input type="email" placeholder="Email" required className="flex-1 px-4 py-2.5 rounded-full border border-slate-300 focus:outline-none focus:border-[#0164FF] focus:ring-1 focus:ring-[#0164FF] text-sm text-slate-800 placeholder:text-slate-400 bg-white/90 backdrop-blur-sm shadow-sm" />
                  <button type="submit" className="bg-[#0164FF] text-white rounded-full px-6 py-2.5 text-sm font-semibold shadow-lg shadow-blue-500/20 hover:bg-[#0164FF]/90 transition-colors whitespace-nowrap">
                    Submit
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-8 inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 border border-emerald-200 px-5 py-2.5 rounded-full shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="text-sm font-semibold">Success! Claim your trial.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Floating Bottom Navbar */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center bg-white/90 backdrop-blur-2xl px-1.5 py-1.5 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-slate-200/40"
          >
            <div className="w-9 h-9 rounded-full bg-white border border-slate-100 shadow-sm flex items-center justify-center sm:mr-2">
              <span className="text-lg text-slate-800">✦</span>
            </div>

            <button className="hidden sm:block text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33] px-3 transition-colors">
              Features
            </button>
            <button className="hidden sm:block text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33] px-3 mr-2 transition-colors">
              Pricing
            </button>

            <button className="bg-white px-5 py-2 rounded-full text-[12px] font-semibold text-[#0a1b33] border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all flex items-center gap-1 group ml-2 sm:ml-0">
              Request Access
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 transition-colors" />
            </button>
          </motion.nav>
        </div>
      </section>

      {/* Marquee Logo Scroller */}
      <section className="mt-10 w-full max-w-[1400px] mx-auto overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] py-4 gap-4">
          {[...logos, ...logos].map((logo, idx) => (
            <div
              key={idx}
              className="group relative h-24 w-40 shrink-0 flex items-center justify-center rounded-full bg-white border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all overflow-hidden cursor-pointer"
            >
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 scale-150 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out",
                  logo.gradient
                )}
              />
              <img
                src={logo.src}
                alt={logo.name}
                className="w-10 h-10 relative z-10 transition-all duration-300 group-hover:brightness-0 group-hover:invert opacity-70 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
