"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  Phone,
  Layers,
  Sparkles,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  X,
  FileText,
  Terminal,
} from "lucide-react";
import { portfolioData, Project } from "@/data/portfolioData";

export default function Projects() {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedQaProject, setSelectedQaProject] = useState<Project | null>(null);

  const filterCategories = [
    "All",
    "Support & SLA",
    "QA & Testing",
    "Documentation",
    "Infrastructure",
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-24 relative bg-slate-950/40">
      {/* Background decoration */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-indigo-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PORTFOLIO &amp; SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            ผลงานเด่น &amp; การทดสอบระบบ (Projects &amp; QA)
          </h2>
          <p className="mt-3 text-base text-slate-400">
            ตัวอย่างผลงานการจัดการ SLA, การออกแบบ Test Cases สำหรับ Software QA, การจัดทำ User Manual
            และการดูแลโครงสร้างพื้นฐานไอที
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeFilter === category
                  ? "bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/20 font-semibold"
                  : "bg-slate-900/90 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {category === "All" ? "ผลงานทั้งหมด" : category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative group border border-slate-800/80 bg-gradient-to-b from-slate-900/70 to-slate-950/70"
            >
              <div>
                {/* Header: Category Badge & Metric */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-sky-500/15 text-sky-300 border border-sky-500/30">
                    {project.category}
                  </span>
                  {project.metrics && (
                    <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-lg flex items-center gap-1">
                      {project.metrics}
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-indigo-400 mt-1 mb-3">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2 mb-6">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <ChevronRight className="w-3.5 h-3.5 text-sky-400 mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Special Button for QA Project to view interactive Test Cases */}
                {project.testCasesSample && (
                  <button
                    onClick={() => setSelectedQaProject(project)}
                    className="w-full mb-4 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-indigo-500/15 border border-indigo-500/40 text-indigo-300 hover:bg-indigo-500/25 text-xs font-semibold transition-all duration-200"
                  >
                    <ShieldCheck className="w-4 h-4 text-indigo-400" />
                    <span>คลิกดูตัวอย่าง Test Cases &amp; UAT Matrix</span>
                  </button>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/80 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-3">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl bg-sky-500/20 text-sky-300 border border-sky-500/40 hover:bg-sky-500/30 transition-all"
                  >
                    <span>สอบถามข้อมูลโปรเจกต์นี้</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* QA Test Case Modal (Interactive micro-interaction) */}
        {selectedQaProject && selectedQaProject.testCasesSample && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="glass-card max-w-2xl w-full rounded-2xl p-6 sm:p-8 border border-slate-700 bg-slate-950 shadow-2xl relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setSelectedQaProject(null)}
                className="absolute top-5 right-5 p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-5 h-5 text-indigo-400" />
                <h3 className="text-lg font-bold text-white">
                  {selectedQaProject.title}
                </h3>
              </div>
              <p className="text-xs text-slate-400 mb-6">
                ตัวอย่าง Test Cases ที่ออกแบบสำหรับการทดสอบความต้องการ (Requirement) และ UAT
              </p>

              {/* Test Cases Table */}
              <div className="space-y-3 mb-6">
                <p className="text-xs font-semibold text-slate-300 uppercase tracking-wider font-mono">
                  Sample Test Execution Matrix
                </p>
                {selectedQaProject.testCasesSample.map((tc) => (
                  <div
                    key={tc.testId}
                    className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono font-bold text-sky-400">
                          {tc.testId}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                          {tc.type}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300">{tc.description}</p>
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      {tc.status}
                    </span>
                  </div>
                ))}
              </div>

              {/* Requirement & QA Workflow Notes */}
              <div className="rounded-xl bg-slate-900 border border-slate-800 p-4">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                  <span className="flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-sky-400" />
                    QA &amp; Requirement Coordination Process
                  </span>
                  <span className="text-emerald-400 text-[10px]">Verified Quality</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  1. รับ Requirement จากลูกค้า ➔ 2. วิเคราะห์และประสานงานกับ Developer ➔ 3. จัดทำ Test Cases ➔ 4. ดำเนินการ Manual Test &amp; Regression ➔ 5. จัดทำ User Manual และส่งมอบ
                </p>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setSelectedQaProject(null)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-colors"
                >
                  ปิดหน้าต่าง
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
