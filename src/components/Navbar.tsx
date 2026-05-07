"use client";

import React from "react";
import { ChevronRight, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 px-6 md:px-10 w-full relative z-10">
      <div className="flex-1 hidden md:block" />
      <div className="md:hidden">
        <Link href="/" className="font-bold tracking-tighter text-xl text-white drop-shadow-md">Noir Studio</Link>
      </div>
      <ul className="hidden md:flex items-center gap-8 text-white font-medium text-sm drop-shadow-md">
        <Link href="/features" className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group">Features</Link>
        <Link href="/pricing" className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group">Pricing</Link>
        <Link href="/faq" className="cursor-pointer hover:opacity-70 transition-opacity flex items-center gap-1 group">FAQ</Link>
      </ul>
      <div className="flex-1 flex justify-end">
        <Link href="/login"
          className="flex items-center bg-[#0164FF]/90 text-white rounded-full pl-2 pr-4 md:pr-6 py-1.5 md:py-2 gap-2 md:gap-3 hover:bg-[#0164FF] transition-colors group shadow-lg"
        >
          <div className="bg-white/20 p-1 md:p-1.5 rounded-full flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </div>
          <span className="text-xs md:text-sm font-semibold">Login</span>
        </Link>
      </div>
    </nav>
  );
}
