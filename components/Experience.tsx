"use client";

import React from "react";
import {
  Briefcase,
  MapPin,
  CheckCircle2,
  Sparkles,
  Award,
  TrendingUp,
  GraduationCap,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Experience() {
  const { experience, personal, certifications } = portfolioData;

  return (
    <section id="experience" className="py-24 relative">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CAREER PATH &amp; ACHIEVEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            ประสบการณ์ทำงาน (Work Experience)
          </h2>
          <p className="mt-3 text-base text-slate-400">
            เส้นทางการทำงานรวมกว่า 7 ปี จาก IT Support และครูคอมพิวเตอร์ สู่ Team Lead Customer Service
            &amp; Support ที่เชี่ยวชาญการแก้ปัญหาเชิงเทคนิคและการทดสอบระบบ (QA)
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-slate-800 ml-4 sm:ml-32 space-y-12 mb-16">
          {experience.map((item) => (
            <div key={item.id} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Node Point */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-sky-400 group-hover:scale-125 group-hover:border-indigo-400 transition-all duration-300 shadow-md shadow-sky-500/30">
                <div className="w-1.5 h-1.5 bg-sky-400 rounded-full mx-auto my-[3px]"></div>
              </div>

              {/* Date badge on left for desktop */}
              <div className="hidden sm:block absolute -left-32 top-1 text-right w-24">
                <span className="text-xs font-mono font-semibold text-sky-400 bg-sky-500/10 border border-sky-500/20 px-2 py-0.5 rounded-md inline-block">
                  {item.period.split(" ")[0]}
                </span>
                <p className="text-[10px] text-slate-400 mt-1 font-mono">{item.period.split(" ").slice(1).join(" ")}</p>
              </div>

              {/* Experience Card */}
              <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 border border-slate-800/80 bg-slate-900/60 transition-all duration-300">
                {/* Mobile Period Tag */}
                <div className="sm:hidden flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-semibold text-sky-400 bg-sky-500/10 border border-sky-500/20 px-2.5 py-0.5 rounded-md">
                    {item.period}
                  </span>
                  <span className="text-xs text-slate-400">{item.type}</span>
                </div>

                {/* Role & Company Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                      {item.role}
                    </h3>
                    <p className="text-sm font-semibold text-indigo-400 flex items-center gap-1.5 mt-0.5">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{item.company}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Role Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Key Achievements */}
                <div className="space-y-2 mb-6">
                  <p className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    หน้าที่และความรับผิดชอบสำคัญ (Responsibilities &amp; Achievements)
                  </p>
                  {item.achievements.map((achievement, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-slate-950/40 p-2.5 rounded-xl border border-slate-800/60"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{achievement}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies / Competencies */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-800/70">
                  <span className="text-[11px] text-slate-400 font-mono">ทักษะที่ใช้:</span>
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md bg-slate-800/80 border border-slate-700/60 text-[11px] font-medium text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education & Certifications Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-slate-800/80">
          {/* Education Card */}
          <div className="glass-card rounded-2xl p-6 border border-slate-800 bg-slate-900/60">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-sky-500/15 text-sky-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">ประวัติการศึกษา (Education)</h4>
                <p className="text-xs text-slate-400">{personal.education.graduationYear}</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
              <p className="font-bold text-white text-sm">{personal.education.degree}</p>
              <p className="text-xs text-slate-300 mt-1">
                {personal.education.faculty}
              </p>
              <p className="text-xs text-indigo-300 mt-0.5">
                {personal.education.university}
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-500/15 border border-sky-500/30 text-sky-300 font-mono text-xs font-semibold">
                ผลการเรียนเฉลี่ย: {personal.education.gpa}
              </div>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="glass-card rounded-2xl p-6 border border-slate-800 bg-slate-900/60">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-amber-500/15 text-amber-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">ใบรับรองและผลงาน (Certifications)</h4>
                <p className="text-xs text-slate-400">การอบรมและกิจกรรมทางวิชาชีพ</p>
              </div>
            </div>

            <div className="space-y-2.5">
              {certifications.slice(0, 3).map((cert, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-slate-200">{cert.title}</p>
                    <p className="text-[11px] text-slate-400 font-mono mt-0.5">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
