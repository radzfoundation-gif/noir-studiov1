"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, Mail, Lock } from "lucide-react";
import { motion } from "motion/react";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
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
        <div className="text-center mb-8 flex flex-col items-center">
          <Link href="/" className="inline-block mb-4 hover:scale-105 transition-transform duration-300">
            <Image 
              src="/noir-studio-logo.png" 
              alt="Noir Studio Logo" 
              width={80} 
              height={80} 
              className="h-20 w-20 object-cover rounded-[1.4rem] shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/10"
            />
          </Link>
          <p className="text-white/60 text-sm">Welcome back. Please enter your details.</p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="email"
              placeholder="Email address"
              required
              className="w-full bg-black/20 border border-white/10 text-white placeholder:text-white/40 rounded-xl px-4 py-3.5 pl-12 focus:outline-none focus:ring-2 focus:ring-[#0164FF]/50 transition-all"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full bg-black/20 border border-white/10 text-white placeholder:text-white/40 rounded-xl px-4 py-3.5 pl-12 focus:outline-none focus:ring-2 focus:ring-[#0164FF]/50 transition-all"
            />
          </div>

          <div className="flex items-center justify-between mt-1 mb-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded bg-black/20 border-white/10 text-[#0164FF] focus:ring-[#0164FF]" />
              <span className="text-white/60 text-sm">Remember me</span>
            </label>
            <Link href="/forgot-password" className="text-white/80 text-sm hover:text-white transition-colors">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-[#0164FF] hover:bg-[#0164FF]/90 text-white font-semibold transition-all shadow-[0_0_15px_rgba(1,100,255,0.3)] flex items-center justify-center gap-2"
          >
            Sign In
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <p className="mt-8 text-center text-white/60 text-sm">
          Don't have an account?{' '}
          <Link href="/register" className="text-white font-medium hover:underline">
            Register now
          </Link>
        </p>
      </motion.div>
    </main>
  );
}
