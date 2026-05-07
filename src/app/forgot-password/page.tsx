"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ForgotPasswordPage() {
  const [isSent, setIsSent] = useState(false);

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <main className="min-h-screen relative flex items-center justify-center p-4">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero_video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xl z-0"></div>

      {/* Auth Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2rem] p-8 shadow-2xl"
      >
        <div className="text-center mb-8">
          <Link href="/" className="inline-block font-bold tracking-tighter text-2xl text-white drop-shadow-md mb-2">Noir Studio</Link>
          <p className="text-white/60 text-sm">Reset your password to regain access.</p>
        </div>

        <AnimatePresence mode="wait">
          {!isSent ? (
            <motion.form 
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleReset} 
              className="flex flex-col gap-4"
            >
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input 
                  type="email" 
                  placeholder="Email address" 
                  required
                  className="w-full bg-black/20 border border-white/10 text-white placeholder:text-white/40 rounded-xl px-4 py-3.5 pl-12 focus:outline-none focus:ring-2 focus:ring-[#0164FF]/50 transition-all"
                />
              </div>

              <button 
                type="submit"
                className="w-full mt-2 py-3.5 rounded-xl bg-[#0164FF] hover:bg-[#0164FF]/90 text-white font-semibold transition-all shadow-[0_0_15px_rgba(1,100,255,0.3)] flex items-center justify-center gap-2"
              >
                Send Reset Link
              </button>
            </motion.form>
          ) : (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center text-center gap-3 py-4"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-white font-semibold text-lg">Check your email</h3>
              <p className="text-white/60 text-sm">We've sent a password reset link to your email address.</p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-8 flex justify-center">
          <Link href="/login" className="flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to login
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
