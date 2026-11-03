"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowDown,
  FileText,
  Send,
  Phone,
  Mail,
  ShieldCheck,
  Headphones,
  CheckCircle2,
  FileText as DocumentIcon,
  Sparkles,
  Zap,
  Users,
  Monitor,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

interface HeroProps {
  onDownloadResume?: () => void;
}

export default function Hero({ onDownloadResume }: HeroProps) {
  const { personal } = portfolioData;
  const [roleIndex, setRoleIndex] = useState(0);

  // Cycle target roles every 2.8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personal.titles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [personal.titles.length]);

  const floatingBadges = [
    { name: "IT Support (7+ ปี)", icon: Headphones, color: "from-sky-500 to-blue-600" },
    { name: "Software Testing & QA", icon: ShieldCheck, color: "from-indigo-600 to-purple-600" },
    { name: "Team Lead & SLA Management", icon: Users, color: "from-blue-600 to-indigo-600" },
    { name: "Remote Support (AnyDesk/TeamViewer)", icon: Monitor, color: "from-teal-500 to-emerald-600" },
    { name: "Requirement Gathering", icon: Zap, color: "from-amber-500 to-orange-600" },
    { name: "User Manual & Documentation", icon: DocumentIcon, color: "from-purple-500 to-pink-600" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Glowing Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-sky-500/15 via-indigo-500/10 to-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Grid subtle overlay */}
      <div className="absolute inset-0 bg-grid opacity-[0.18] pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/70 shadow-inner mb-6 backdrop-blur-md">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-medium text-slate-300">
            {personal.statusText}
          </span>
        </div>

        {/* Name & Target Role */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-200 to-cyan-300 drop-shadow-sm">
            {personal.name}
          </span>
        </h1>
        <p className="text-sm sm:text-base font-mono text-slate-400 mb-6">
          {personal.englishName}
        </p>

        {/* Dynamic Target Role pill */}
        <div className="h-12 flex items-center justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-sky-500/30 text-sky-400 font-mono text-base sm:text-xl font-semibold shadow-lg shadow-sky-950/40">
            <Sparkles className="w-4 h-4 text-sky-400 animate-spin" style={{ animationDuration: "8s" }} />
            <span>ตำแหน่งเป้าหมาย:</span>
            <span className="text-white transition-all duration-300 transform inline-block">
              {personal.titles[roleIndex]}
            </span>
          </div>
        </div>

        {/* Core Summary */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
          {personal.bio}
        </p>

        {/* Highlights Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-3xl mx-auto mb-10">
          <span className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
            ประสบการณ์รวมกว่า 7 ปี
          </span>
          <span className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
            SLA Management &amp; Team Lead
          </span>
          <span className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            Software Testing &amp; Test Cases
          </span>
          <span className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
            Requirement Gathering &amp; User Manual
          </span>
        </div>

        {/* Action Buttons: View Projects, Download Resume, Contact Me */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-blue-600 hover:from-sky-400 hover:to-indigo-500 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/35 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>ดูผลงาน &amp; การทดสอบระบบ</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <button
            onClick={onDownloadResume}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <FileText className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
            <span>ดาวน์โหลด Resume (PDF)</span>
          </button>

          <a
            href={`tel:${personal.phone.replace(/[^0-9]/g, "")}`}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-emerald-300 hover:text-white bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/30 hover:border-emerald-500/50 transition-all duration-200"
          >
            <Phone className="w-4 h-4 text-emerald-400 group-hover:rotate-12 transition-transform" />
            <span>โทร {personal.phone}</span>
          </a>
        </div>

        {/* Quick Contact Info Strip */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 mb-14">
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-2 hover:text-sky-300 transition-colors"
          >
            <Mail className="w-4 h-4 text-sky-400" />
            <span>{personal.email}</span>
          </a>
          <span className="hidden sm:inline text-slate-700">•</span>
          <span className="text-slate-300 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            พร้อมเริ่มงานทันที (กรุงเทพฯ / Remote)
          </span>
        </div>

        {/* Floating Tech & Competency Badges */}
        <div className="border-t border-slate-800/80 pt-8">
          <p className="text-xs uppercase tracking-widest text-slate-400 font-mono mb-4">
            Core Competencies &amp; Hands-on Tools
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {floatingBadges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <div
                  key={idx}
                  className="group relative inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-800/90 hover:border-sky-500/40 hover:bg-slate-800/80 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/10 cursor-default"
                >
                  <div className={`p-1.5 rounded-lg bg-gradient-to-tr ${badge.color} text-white shadow-sm`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-medium text-slate-300 group-hover:text-white transition-colors">
                    {badge.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
