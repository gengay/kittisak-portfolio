"use client";

import React from "react";
import {
  X,
  Printer,
  FileText,
  Phone,
  Mail,
  MapPin,
  Award,
  GraduationCap,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const { personal, skills, experience, certifications } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="glass-card max-w-4xl w-full rounded-2xl p-6 sm:p-8 border border-slate-700 bg-slate-950 shadow-2xl relative my-6 max-h-[92vh] overflow-y-auto print:border-none print:shadow-none print:p-0 print:bg-white print:text-black">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors print:hidden"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6 print:hidden">
          <div className="p-3 rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-600 text-white">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">ประวัติย่อ / Online Resume Preview</h3>
            <p className="text-xs text-slate-400">
              {personal.name} — {personal.titles[0]}
            </p>
          </div>
        </div>

        {/* Action bar (Print / Download) */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 p-3 rounded-xl bg-slate-900 border border-slate-800 print:hidden">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-xs font-semibold text-white shadow-md shadow-sky-500/20 transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>พิมพ์ / บันทึกเป็น PDF (Print to PDF)</span>
            </button>
          </div>
          <div className="text-xs text-slate-400">
            เบอร์โทรติดต่อ: <span className="text-emerald-400 font-semibold">{personal.phone}</span>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="p-6 sm:p-8 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-6 text-slate-300 text-xs sm:text-sm print:bg-white print:text-black print:p-0 print:border-none">
          {/* Header Info */}
          <div className="border-b border-slate-800 pb-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {personal.name}
                </h2>
                <p className="text-xs sm:text-sm font-medium text-slate-400 font-mono mt-0.5">
                  {personal.englishName}
                </p>
                <p className="text-sm font-semibold text-sky-400 mt-1">
                  {personal.titles.join(" | ")}
                </p>
              </div>
              <div className="text-left sm:text-right space-y-1 font-mono text-xs text-slate-300">
                <div className="flex sm:justify-end items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{personal.phone}</span>
                </div>
                <div className="flex sm:justify-end items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-sky-400" />
                  <span>{personal.email}</span>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs">
              <MapPin className="w-3.5 h-3.5" />
              <span>{personal.location}</span>
            </div>
          </div>

          {/* About Me / Summary */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-2 text-indigo-400 font-mono">
              เกี่ยวกับฉัน (About Me)
            </h4>
            <p className="text-slate-300 leading-relaxed text-xs sm:text-sm bg-slate-950/40 p-3 rounded-xl border border-slate-800/60">
              {personal.bio}
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-3 text-indigo-400 font-mono flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-sky-400" />
              <span>ประสบการณ์ทำงาน (Work Experience)</span>
            </h4>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1.5">
                    <span className="font-bold text-white text-sm">{exp.role}</span>
                    <span className="font-mono text-xs text-sky-400">{exp.period}</span>
                  </div>
                  <p className="text-xs text-indigo-300 font-medium mb-2.5">
                    {exp.company} — {exp.location}
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-2 text-indigo-400 font-mono flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
              <span>ประวัติการศึกษา (Education)</span>
            </h4>
            <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <p className="font-bold text-white text-sm">{personal.education.degree}</p>
                <p className="text-xs text-slate-300 mt-0.5">
                  {personal.education.faculty} {personal.education.university}
                </p>
              </div>
              <div className="text-left sm:text-right">
                <span className="inline-block px-2.5 py-1 rounded-md bg-sky-500/15 text-sky-300 border border-sky-500/30 font-mono text-xs font-semibold">
                  {personal.education.gpa}
                </span>
                <p className="text-[11px] text-slate-400 mt-1">{personal.education.graduationYear}</p>
              </div>
            </div>
          </div>

          {/* Skills Summary */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-2 text-indigo-400 font-mono">
              ทักษะความสามารถ (Skills &amp; Competencies)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {skills.map((cat) => (
                <div key={cat.title} className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                  <p className="font-semibold text-slate-200 text-xs mb-1.5">{cat.title}</p>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {cat.skills.map((s) => s.name).join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div>
            <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-2 text-indigo-400 font-mono flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>ใบรับรองและผลงาน (Certifications &amp; Achievements)</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {certifications.map((cert, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                  <p className="font-semibold text-white text-xs">{cert.title}</p>
                  <p className="text-[11px] text-sky-400 font-mono mt-0.5">{cert.issuer}</p>
                  <p className="text-[11px] text-slate-400 mt-1 leading-normal">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-6 flex justify-end gap-3 print:hidden">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-colors"
          >
            ปิดหน้าต่าง
          </button>
        </div>
      </div>
    </div>
  );
}
