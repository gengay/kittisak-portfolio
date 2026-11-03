"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Headphones,
  Users,
  CheckCircle2,
  Search,
  Sparkles,
  Zap,
} from "lucide-react";
import { portfolioData, SkillCategory } from "@/data/portfolioData";

export default function Skills() {
  const { skills } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", ...skills.map((c) => c.title)];

  const filteredCategories = skills
    .filter((cat) => (selectedCategory === "All" ? true : cat.title === selectedCategory))
    .map((cat) => {
      if (!searchQuery.trim()) return cat;
      const filtered = cat.skills.filter((s) =>
        s.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return {
        ...cat,
        skills: filtered,
      };
    })
    .filter((cat) => cat.skills.length > 0);

  const getLevelBadge = (level: string) => {
    switch (level) {
      case "Specialist":
        return "bg-emerald-500/15 text-emerald-300 border-emerald-500/30";
      case "Advanced":
        return "bg-sky-500/15 text-sky-300 border-sky-500/30";
      case "Proficient":
        return "bg-indigo-500/15 text-indigo-300 border-indigo-500/30";
      default:
        return "bg-slate-700/30 text-slate-300 border-slate-600/30";
    }
  };

  const getCategoryIcon = (title: string) => {
    if (title.includes("Support") || title.includes("Infrastructure"))
      return <Headphones className="w-5 h-5 text-sky-400" />;
    if (title.includes("QA") || title.includes("Testing"))
      return <ShieldCheck className="w-5 h-5 text-indigo-400" />;
    return <Users className="w-5 h-5 text-cyan-400" />;
  };

  return (
    <section id="skills" className="py-24 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CORE COMPETENCIES &amp; SKILLS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            ทักษะความเชี่ยวชาญ (Core Skills)
          </h2>
          <p className="mt-3 text-base text-slate-400">
            ครอบคลุมทั้ง IT Support, Help Desk, Network, Software Testing &amp; QA, การรวบรวม
            Requirement และการบริหารจัดการทีม
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 max-w-4xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-xl bg-slate-900/90 border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-md shadow-sky-500/20"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                }`}
              >
                {cat === "All" ? "ทุกหมวดหมู่ (All)" : cat.split(" ")[0]}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="ค้นหาทักษะ (เช่น AnyDesk, QA, Test Case)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="glass-card rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:border-slate-700/80 hover:shadow-xl hover:shadow-black/40 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 shadow-inner">
                    {getCategoryIcon(category.title)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg text-slate-100">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills Badges Container */}
                <div className="flex flex-wrap gap-2.5 mt-5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group flex items-center justify-between gap-2 px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-800/80 transition-all duration-200"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-medium text-slate-200 group-hover:text-white">
                          {skill.name}
                        </span>
                      </div>
                      <span
                        className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${getLevelBadge(
                          skill.level
                        )}`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Note */}
              <div className="mt-6 pt-4 border-t border-slate-800/70 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <Zap className="w-3 h-3 text-sky-400" /> ประสบการณ์จริงกว่า 7 ปี
                </span>
                <span className="font-mono">{category.skills.length} รายการ</span>
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 text-slate-400">
            <p className="text-sm">ไม่พบทักษะที่ค้นหา &quot;{searchQuery}&quot;</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-3 text-xs text-sky-400 hover:underline"
            >
              ล้างคำค้นหา
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
