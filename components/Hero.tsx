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
  Award,
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
      className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Glowing Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-sky-500/15 via-indigo-500/10 to-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Grid subtle overlay */}
      <div className="absolute inset-0 bg-grid opacity-[0.16] pointer-events-none -z-10 [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_80%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 cols on lg) */}
          <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-2 leading-tight">
              สวัสดีครับ, ผม{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-200 to-cyan-300 drop-shadow-sm">
                {personal.name}
              </span>
            </h1>
            <p className="text-base sm:text-lg font-mono text-slate-400 mb-5">
              {personal.englishName}
            </p>

            {/* Dynamic Target Role pill */}
            <div className="h-12 flex items-center justify-center lg:justify-start mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 border border-sky-500/30 text-sky-400 font-mono text-sm sm:text-lg font-semibold shadow-lg shadow-sky-950/40">
                <Sparkles className="w-4 h-4 text-sky-400 animate-spin" style={{ animationDuration: "8s" }} />
                <span className="text-slate-400">ตำแหน่งเป้าหมาย:</span>
                <span className="text-white transition-all duration-300 transform inline-block">
                  {personal.titles[roleIndex]}
                </span>
              </div>
            </div>

            {/* Core Summary */}
            <p className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-slate-300 leading-relaxed mb-6 font-light">
              {personal.bio}
            </p>

            {/* Highlights Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 max-w-2xl mx-auto lg:mx-0 mb-8">
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                ประสบการณ์รวมกว่า 7 ปี
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                Team Lead &amp; SLA 98%+
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                Software Testing &amp; Test Cases
              </span>
              <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                ลดเวลาแก้ปัญหาลง 33%
              </span>
            </div>

            {/* Action Buttons: View Projects, Download Resume, Call */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 mb-8">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-blue-600 hover:from-sky-400 hover:to-indigo-500 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/35 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>ดูผลงาน &amp; Test Cases</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={onDownloadResume}
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-200 hover:text-white bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <FileText className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
                <span>ดาวน์โหลด Resume (PDF)</span>
              </button>

              <a
                href={`tel:${personal.phone.replace(/[^0-9]/g, "")}`}
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-emerald-300 hover:text-white bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-500/30 hover:border-emerald-500/50 transition-all duration-200"
              >
                <Phone className="w-4 h-4 text-emerald-400 group-hover:rotate-12 transition-transform" />
                <span>โทร {personal.phone}</span>
              </a>
            </div>

            {/* Quick Contact Info Strip */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-1.5 hover:text-sky-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-400" />
                <span>{personal.email}</span>
              </a>
              <span className="hidden sm:inline text-slate-700">•</span>
              <span className="text-slate-300 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                พร้อมย้ายไปปฏิบัติงานกรุงเทพฯ / Remote
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Profile Picture with Modern Flair (5 cols on lg) */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative group">
              {/* Outer Glowing Atmosphere */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-sky-500/30 via-indigo-500/20 to-purple-600/30 rounded-[2.5rem] blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-75 group-hover:opacity-100 -z-10 animate-pulse-glow" />

              {/* Decorative Tech Grid Dots */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-grid opacity-30 pointer-events-none -z-10" />

              {/* Main Image Container with Gradient Border */}
              <div className="relative p-[3px] rounded-[2rem] bg-gradient-to-tr from-sky-400 via-indigo-500 to-cyan-400 shadow-2xl shadow-sky-500/20 transform transition-transform duration-500 group-hover:scale-[1.02]">
                <div className="relative w-64 sm:w-72 lg:w-80 h-80 sm:h-96 lg:h-[420px] rounded-[1.85rem] overflow-hidden bg-slate-950">
                  <img
                    src="/profile.jpg"
                    alt="กิตติศักดิ์ สัพโส (Kittisak Sapphaso)"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle gradient vignette at the bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Bottom Image Caption Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-slate-800/80 text-left">
                    <p className="text-xs font-bold text-white flex items-center justify-between">
                      <span>{personal.name}</span>
                      <span className="text-[10px] font-mono text-emerald-400 font-normal">Active</span>
                    </p>
                    <p className="text-[11px] text-sky-400 font-mono mt-0.5">
                      IT Support Specialist &amp; QA Lead
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Interactive Badge 1: Top Right */}
              <div className="absolute -top-4 -right-4 sm:-right-6 p-2.5 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-slate-700/80 shadow-xl shadow-black/40 flex items-center gap-2 transform transition-transform duration-300 hover:scale-110 cursor-default animate-float-slow">
                <div className="p-1.5 rounded-xl bg-sky-500/20 text-sky-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 font-mono">Expertise</p>
                  <p className="text-xs font-bold text-white">Software QA</p>
                </div>
              </div>

              {/* Floating Interactive Badge 2: Bottom Left */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 p-2.5 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-slate-700/80 shadow-xl shadow-black/40 flex items-center gap-2 transform transition-transform duration-300 hover:scale-110 cursor-default animate-float-reverse">
                <div className="p-1.5 rounded-xl bg-indigo-500/20 text-indigo-400">
                  <Award className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 font-mono">Experience</p>
                  <p className="text-xs font-bold text-white">7+ Years Team Lead</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Floating Tech & Competency Badges Strip at bottom */}
        <div className="border-t border-slate-800/80 pt-10 mt-14">
          <p className="text-xs uppercase tracking-widest text-slate-400 font-mono mb-4 text-center lg:text-left">
            Core Competencies &amp; Hands-on Tools
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
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
