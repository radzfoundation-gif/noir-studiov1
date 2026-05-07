"use client";

import React, { useState } from "react";
import {
  User, Mail, Bell, ShieldAlert, Trash2, Settings, Puzzle,
  BarChart3, CreditCard, Receipt, Users, HelpCircle, MessageCircle,
  Crown, Zap, Sparkles, Check, ExternalLink, Globe, ArrowLeft,
  Palette, Camera, Clapperboard, Box, Lightbulb, Wand2,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

/* ── Settings Tabs ── */
const TABS = [
  { id: "overview", label: "Overview", icon: <User className="w-4 h-4" /> },
  { id: "settings", label: "Settings", icon: <Settings className="w-4 h-4" /> },
  { id: "integrations", label: "Integrations", icon: <Puzzle className="w-4 h-4" /> },
];

const SUB_TABS = [
  { id: "usage", label: "Usage", icon: <BarChart3 className="w-4 h-4" /> },
  { id: "spending", label: "Spending", icon: <CreditCard className="w-4 h-4" /> },
  { id: "billing", label: "Billing & Invoices", icon: <Receipt className="w-4 h-4" /> },
  { id: "referrals", label: "Referrals", icon: <Users className="w-4 h-4" /> },
  { id: "help", label: "Help", icon: <HelpCircle className="w-4 h-4" /> },
  { id: "contact", label: "Contact Us", icon: <MessageCircle className="w-4 h-4" /> },
];

/* ── Plans ── */
const PLANS = [
  {
    id: "starter",
    name: "Starter",
    price: "Free",
    description: "Basic image generation with standard models and styles.",
    features: ["5 generations/day", "Standard models", "720p resolution"],
    cta: "Current Plan",
    current: true,
  },
  {
    id: "creator",
    name: "Creator",
    price: "$20",
    description: "Unlock all models, HD output, and bulk generation features.",
    features: ["50 generations/day", "All AI models", "2K resolution", "Reference images"],
    cta: "Upgrade to Creator",
    color: "bg-[#0164FF]",
  },
  {
    id: "ultra",
    name: "Ultra",
    price: "$60",
    description: "Maximum power with 4K output, priority queue, and API access.",
    features: ["Unlimited generations", "Priority queue", "4K Ultra HD", "API access", "Custom styles"],
    cta: "Upgrade to Ultra",
    color: "bg-gradient-to-r from-violet-600 to-indigo-600",
  },
];

/* ── Themes / Styles ── */
const THEMES = [
  { id: "minimal", label: "Minimal", icon: <Box className="w-5 h-5" />, active: true },
  { id: "classic", label: "Classic", icon: <Camera className="w-5 h-5" /> },
  { id: "cinematic", label: "Cinematic", icon: <Clapperboard className="w-5 h-5" /> },
  { id: "neon", label: "Neon", icon: <Lightbulb className="w-5 h-5" /> },
  { id: "artistic", label: "Artistic", icon: <Palette className="w-5 h-5" /> },
  { id: "dreamy", label: "Dreamy", icon: <Wand2 className="w-5 h-5" /> },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [activeTheme, setActiveTheme] = useState("minimal");
  const [emailNotif, setEmailNotif] = useState(true);
  const [promoNotif, setPromoNotif] = useState(false);

  return (
    <div className="flex flex-col gap-6 max-w-6xl mx-auto pb-10">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#0F172A] mb-1">Settings</h1>
        <p className="text-[#5E6470] text-sm">Manage your account, plans, and preferences.</p>
      </div>

      <div className="flex gap-8">

        {/* ── Left Sidebar Navigation ── */}
        <div className="w-56 shrink-0 hidden md:flex flex-col gap-1">
          {/* Main tabs */}
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all text-left ${
                activeTab === tab.id
                  ? "bg-[#0F172A] text-white shadow-sm"
                  : "text-[#5E6470] hover:bg-[#f5f5f7] hover:text-[#0F172A]"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}

          {/* Divider */}
          <div className="h-px bg-black/[0.06] my-2" />

          {/* Sub tabs */}
          {SUB_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all text-left ${
                activeTab === tab.id
                  ? "bg-[#0F172A] text-white shadow-sm"
                  : "text-[#5E6470] hover:bg-[#f5f5f7] hover:text-[#0F172A]"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Main Content ── */}
        <div className="flex-1 flex flex-col gap-6 min-w-0">

          {/* Plans Section */}
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-lg font-bold text-[#0F172A] mb-4">Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {PLANS.map((plan) => (
                <div
                  key={plan.id}
                  className={`rounded-2xl border p-5 flex flex-col ${
                    plan.current
                      ? "border-black/[0.08] bg-white"
                      : "border-black/[0.06] bg-white"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-[#0F172A]">{plan.name}</h3>
                    <span className="text-[#0F172A] font-bold">{plan.price}<span className="text-[#5E6470] font-normal text-xs">{plan.price !== "Free" ? "/mo" : ""}</span></span>
                  </div>
                  <p className="text-xs text-[#5E6470] mb-4 leading-relaxed">{plan.description}</p>

                  {/* Features */}
                  <ul className="flex flex-col gap-1.5 mb-5 flex-1">
                    {plan.features.map((f, i) => (
                      <li key={i} className="text-xs text-[#5E6470] flex items-center gap-1.5">
                        <Check className="w-3 h-3 text-emerald-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {plan.current ? (
                    <div className="flex items-center gap-1.5 text-xs text-[#5E6470] font-medium bg-[#f5f5f7] px-3 py-2 rounded-lg justify-center">
                      <Crown className="w-3.5 h-3.5" />
                      Current Plan
                    </div>
                  ) : (
                    <button className={`text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-all hover:opacity-90 ${plan.color}`}>
                      {plan.cta}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Pick Your Style */}
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl border border-black/[0.06] p-5"
          >
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-base font-bold text-[#0F172A]">Pick Your Default Style</h2>
              <div className="flex items-center gap-1.5 text-[10px] text-[#5E6470] bg-[#f5f5f7] px-2 py-1 rounded font-medium">
                <Crown className="w-3 h-3" /> Current
              </div>
            </div>
            <p className="text-xs text-[#5E6470] mb-4">Default style applied to all new generations. You can override per-session.</p>

            <div className="flex items-center gap-3 overflow-x-auto pb-1 no-scrollbar">
              {THEMES.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setActiveTheme(theme.id)}
                  className={`flex flex-col items-center gap-2 px-5 py-4 rounded-xl border min-w-[88px] transition-all ${
                    activeTheme === theme.id
                      ? "bg-[#0F172A] border-[#0F172A] text-white"
                      : "border-black/[0.08] text-[#5E6470] hover:bg-[#f5f5f7] hover:text-[#0F172A]"
                  }`}
                >
                  {theme.icon}
                  <span className="text-[11px] font-medium">{theme.label}</span>
                  {activeTheme === theme.id && (
                    <span className="text-[9px] text-white/60">×</span>
                  )}
                </button>
              ))}
            </div>
          </motion.section>

          {/* Profile Section */}
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="bg-white rounded-2xl border border-black/[0.06] p-5"
          >
            <h2 className="text-base font-bold text-[#0F172A] mb-5">Profile Details</h2>

            <div className="flex items-center gap-5 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-100 to-cyan-100 flex items-center justify-center border-2 border-white shadow">
                <User className="w-6 h-6 text-[#0164FF]/50" />
              </div>
              <div>
                <button className="bg-white border border-black/10 text-[#0F172A] px-3.5 py-2 rounded-lg text-xs font-medium hover:bg-[#f5f5f7] transition-colors shadow-sm mb-1">
                  Upload new avatar
                </button>
                <p className="text-[10px] text-[#5E6470]">JPG, GIF or PNG. Max size 2MB.</p>
              </div>
            </div>

            <form className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-[#0F172A]">First Name</label>
                  <input type="text" defaultValue="John" className="w-full px-3.5 py-2.5 rounded-lg border border-black/10 focus:outline-none focus:border-[#0164FF] focus:ring-1 focus:ring-[#0164FF] text-sm text-[#0F172A]" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-[#0F172A]">Last Name</label>
                  <input type="text" defaultValue="Doe" className="w-full px-3.5 py-2.5 rounded-lg border border-black/10 focus:outline-none focus:border-[#0164FF] focus:ring-1 focus:ring-[#0164FF] text-sm text-[#0F172A]" />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-[#0F172A]">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5E6470]" />
                  <input type="email" defaultValue="johndoe@example.com" disabled className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-black/10 bg-[#f5f5f7] text-sm text-[#5E6470] cursor-not-allowed" />
                </div>
              </div>

              <div className="flex justify-end">
                <button type="button" className="bg-[#0164FF] text-white px-5 py-2.5 rounded-lg text-xs font-semibold hover:bg-[#0150d4] transition-colors shadow-sm">
                  Save Changes
                </button>
              </div>
            </form>
          </motion.section>

          {/* Notification Preferences */}
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl border border-black/[0.06] p-5"
          >
            <h2 className="text-base font-bold text-[#0F172A] mb-5 flex items-center gap-2">
              <Bell className="w-4 h-4 text-[#5E6470]" /> Notifications
            </h2>

            <div className="flex flex-col gap-5">
              {/* Generation Complete */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-[#0F172A]">Generation Completed</h4>
                  <p className="text-xs text-[#5E6470] mt-0.5">Receive an email when your photos are ready.</p>
                </div>
                <button
                  onClick={() => setEmailNotif(!emailNotif)}
                  className={`w-11 h-6 rounded-full transition-colors relative flex items-center ${emailNotif ? "bg-[#0164FF]" : "bg-slate-200"}`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full absolute transition-all duration-300 ${emailNotif ? "left-[calc(100%-18px)]" : "left-[2px]"}`} />
                </button>
              </div>

              {/* Promos */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-[#0F172A]">Never miss a template drop ;)</h4>
                  <p className="text-xs text-[#5E6470] mt-0.5">Be first to get new templates and feature launches.</p>
                </div>
                <button
                  onClick={() => setPromoNotif(!promoNotif)}
                  className={`w-11 h-6 rounded-full transition-colors relative flex items-center ${promoNotif ? "bg-[#0164FF]" : "bg-slate-200"}`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full absolute transition-all duration-300 ${promoNotif ? "left-[calc(100%-18px)]" : "left-[2px]"}`} />
                </button>
              </div>
            </div>
          </motion.section>

          {/* Chrome Extension Promo */}
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="bg-white rounded-2xl border border-black/[0.06] p-5 flex items-center gap-4"
          >
            <div className="w-10 h-10 bg-[#f5f5f7] rounded-xl flex items-center justify-center shrink-0">
              <Globe className="w-5 h-5 text-[#5E6470]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <h3 className="text-sm font-bold text-[#0F172A]">Get the Browser Extension</h3>
                <span className="text-[9px] bg-emerald-500 text-white px-1.5 py-0.5 rounded font-bold uppercase">New</span>
              </div>
              <p className="text-xs text-[#5E6470]">Generate images directly from any webpage with one click.</p>
            </div>
            <button className="text-[#5E6470] hover:text-[#0F172A] transition-colors shrink-0">
              <ExternalLink className="w-4 h-4" />
            </button>
          </motion.section>

          {/* Danger Zone */}
          <motion.section
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-red-50/50 rounded-2xl border border-red-100 p-5"
          >
            <h2 className="text-sm font-bold text-red-600 mb-1.5 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4" /> Danger Zone
            </h2>
            <p className="text-xs text-[#5E6470] mb-4">Permanently delete your account and all generated photos. This action cannot be undone.</p>

            <button className="flex items-center gap-2 bg-white text-red-600 border border-red-200 px-4 py-2 rounded-lg text-xs font-semibold hover:bg-red-50 transition-colors shadow-sm">
              <Trash2 className="w-3.5 h-3.5" />
              Delete Account
            </button>
          </motion.section>

        </div>
      </div>
    </div>
  );
}
