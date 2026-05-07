"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Image as ImageIcon, CreditCard, Settings, LogOut, Menu, X, Coins } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const sidebarLinks = [
  { name: "Overview", href: "/dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
  { name: "My Projects", href: "/dashboard/projects", icon: <ImageIcon className="w-5 h-5" /> },
  { name: "Billing & Credits", href: "/dashboard/billing", icon: <CreditCard className="w-5 h-5" /> },
  { name: "Settings", href: "/dashboard/settings", icon: <Settings className="w-5 h-5" /> },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f0f0f0] flex p-2 md:p-4 gap-4">
      
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside 
        className={`fixed lg:sticky top-4 left-4 h-[calc(100vh-2rem)] w-64 bg-white/70 backdrop-blur-xl border border-white/40 rounded-3xl p-6 flex flex-col shadow-xl z-50 transition-transform duration-300 ${isMobileOpen ? 'translate-x-0' : '-translate-x-[120%] lg:translate-x-0'}`}
      >
        <div className="flex items-center justify-between mb-10">
          <Link href="/" className="font-bold text-2xl tracking-tighter text-[#0F172A]">Noir Studio</Link>
          <button className="lg:hidden text-[#5E6470]" onClick={() => setIsMobileOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 flex flex-col gap-2">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${isActive ? 'bg-[#0164FF] text-white shadow-md' : 'text-[#5E6470] hover:bg-white/60 hover:text-[#0F172A]'}`}
              >
                {link.icon}
                <span className="font-medium">{link.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto pt-6 border-t border-black/5 flex flex-col gap-4">
          <div className="bg-[#0164FF]/10 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Coins className="w-5 h-5 text-[#0164FF]" />
              <span className="font-semibold text-[#0F172A]">12 Credits</span>
            </div>
            <Link href="/dashboard/billing" className="text-[#0164FF] text-xs font-bold uppercase hover:underline">Add</Link>
          </div>
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-colors font-medium">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </motion.aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between bg-white/70 backdrop-blur-md border border-white/40 p-4 rounded-2xl mb-4 shadow-sm">
          <button onClick={() => setIsMobileOpen(true)} className="text-[#0F172A] p-1">
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2 bg-[#0164FF]/10 px-3 py-1.5 rounded-full">
            <Coins className="w-4 h-4 text-[#0164FF]" />
            <span className="font-semibold text-sm text-[#0F172A]">12</span>
          </div>
        </div>

        <div className="flex-1 bg-white/50 backdrop-blur-md border border-white/40 rounded-3xl p-6 lg:p-10 shadow-lg overflow-y-auto h-[calc(100vh-2rem)]">
          {children}
        </div>
      </main>
    </div>
  );
}
