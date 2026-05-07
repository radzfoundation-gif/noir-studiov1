"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Baby, Camera, GraduationCap, Heart, Package, PartyPopper, Sparkles, Wand2, ArrowRight, Zap, Search, Flame, TrendingUp, Star, Layers, Brush, User, Film } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

/* ── Categories ── */
const CATEGORIES = [
  { id: "all", label: "All", icon: <Layers className="w-3.5 h-3.5" /> },
  { id: "portrait", label: "Portrait", icon: <User className="w-3.5 h-3.5" /> },
  { id: "product", label: "Product", icon: <Package className="w-3.5 h-3.5" /> },
  { id: "event", label: "Event", icon: <PartyPopper className="w-3.5 h-3.5" /> },
  { id: "creative", label: "Creative", icon: <Brush className="w-3.5 h-3.5" /> },
  { id: "cinematic", label: "Cinematic", icon: <Film className="w-3.5 h-3.5" /> },
];

/* ── Tabs ── */
const TABS = [
  { id: "new", label: "New", icon: <Sparkles className="w-3.5 h-3.5" /> },
  { id: "trending", label: "Trending", icon: <TrendingUp className="w-3.5 h-3.5" /> },
  { id: "popular", label: "Popular", icon: <Flame className="w-3.5 h-3.5" /> },
];

/* ── Templates ── */
const TEMPLATES = [
  {
    id: "baby-studio",
    name: "Baby Studio",
    description: "Dreamy cloud themes, soft pastels",
    image: "/templates/baby-studio.png",
    icon: <Baby className="w-4 h-4" />,
    badge: "Popular",
    badgeColor: "bg-pink-500",
    category: "portrait",
    tag: "new",
    credits: 1,
  },
  {
    id: "photo-booth",
    name: "Photo Booth",
    description: "Fun props, neon lights, party vibes",
    image: "/templates/photo-booth.png",
    icon: <PartyPopper className="w-4 h-4" />,
    badge: "Fun",
    badgeColor: "bg-violet-500",
    category: "event",
    tag: "trending",
    credits: 1,
  },
  {
    id: "corporate",
    name: "Corporate Headshot",
    description: "Professional business portraits",
    image: "/templates/corporate.png",
    icon: <Camera className="w-4 h-4" />,
    badge: "Professional",
    badgeColor: "bg-slate-600",
    category: "portrait",
    tag: "popular",
    credits: 1,
  },
  {
    id: "graduation",
    name: "Graduation",
    description: "Warm golden light, academic themes",
    image: "/templates/graduation.png",
    icon: <GraduationCap className="w-4 h-4" />,
    badge: "Trending",
    badgeColor: "bg-amber-500",
    category: "event",
    tag: "trending",
    credits: 1,
  },
  {
    id: "prewedding",
    name: "Pre-Wedding",
    description: "Romantic outdoor garden settings",
    image: "/templates/prewedding.png",
    icon: <Heart className="w-4 h-4" />,
    badge: "Romantic",
    badgeColor: "bg-rose-500",
    category: "cinematic",
    tag: "popular",
    credits: 2,
  },
  {
    id: "product",
    name: "Product Photography",
    description: "Premium commercial aesthetics",
    image: "/templates/product.png",
    icon: <Package className="w-4 h-4" />,
    badge: "Business",
    badgeColor: "bg-emerald-500",
    category: "product",
    tag: "new",
    credits: 1,
  },
];

export default function GeneratePage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTab, setSelectedTab] = useState("new");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTemplates = TEMPLATES.filter((t) => {
    const matchCategory = selectedCategory === "all" || t.category === selectedCategory;
    const matchSearch = t.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="flex flex-col gap-6 max-w-6xl mx-auto pb-10">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-[#0F172A] mb-1">Templates</h1>
          <p className="text-[#5E6470] text-sm">Choose a template to get started, or create from scratch.</p>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5E6470]/50" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search templates..."
            className="w-full pl-10 pr-4 py-2.5 bg-[#f5f5f7] border border-black/[0.06] rounded-xl text-sm text-[#0F172A] placeholder-[#5E6470]/50 focus:outline-none focus:ring-2 focus:ring-[#0164FF]/20 focus:border-[#0164FF]/40 transition-all"
          />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 flex-wrap">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium transition-all border ${
              selectedCategory === cat.id
                ? "bg-[#0F172A] text-white border-[#0F172A]"
                : "bg-white text-[#5E6470] border-black/[0.08] hover:bg-[#f5f5f7] hover:text-[#0F172A]"
            }`}
          >
            {cat.icon}
            {cat.label}
          </button>
        ))}
      </div>

      {/* Tabs + Custom CTA */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 bg-[#f5f5f7] rounded-xl p-1">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                selectedTab === tab.id
                  ? "bg-white text-[#0F172A] shadow-sm"
                  : "text-[#5E6470] hover:text-[#0F172A]"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        <Link href="/dashboard/playground"
          className="flex items-center gap-2 text-sm font-semibold text-[#0164FF] hover:text-[#0150d4] transition-colors"
        >
          <Wand2 className="w-4 h-4" />
          Custom Creation
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {filteredTemplates.map((template, i) => (
            <motion.div
              key={template.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
            >
              <Link href={`/dashboard/playground?template=${template.id}`}>
                <div className="bg-white rounded-2xl border border-black/[0.06] overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                  {/* Image */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#f5f5f7]">
                    <Image
                      src={template.image}
                      alt={template.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white text-[#0F172A] px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-xl">
                        Use Template <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-[#0F172A] text-sm">{template.name}</h3>
                      <span className={`${template.badgeColor} text-white text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider`}>
                        {template.badge}
                      </span>
                    </div>
                    <p className="text-[#5E6470] text-xs">{template.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty state */}
      {filteredTemplates.length === 0 && (
        <div className="text-center py-16">
          <div className="w-14 h-14 bg-[#f5f5f7] rounded-2xl flex items-center justify-center mx-auto mb-3">
            <Search className="w-6 h-6 text-[#5E6470]/30" />
          </div>
          <p className="text-[#5E6470] text-sm">No templates found. Try a different search or category.</p>
        </div>
      )}
    </div>
  );
}
