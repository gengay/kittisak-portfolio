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
    <div className="resume-modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="resume-modal-dialog glass-card max-w-4xl w-full rounded-2xl p-6 sm:p-8 border border-slate-700 bg-slate-950 shadow-2xl relative my-6 max-h-[92vh] overflow-y-auto">
        {/* Close Button (Hidden in Print) */}
        <button
          onClick={onClose}
          className="print-hidden absolute top-5 right-5 p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Header (Hidden in Print) */}
        <div className="print-hidden flex items-center gap-3.5 mb-6">
          <img
            src="/profile.jpg"
            alt={personal.name}
            className="w-12 h-12 rounded-xl object-cover object-top border-2 border-sky-400/40 shadow-md"
          />
          <div>
            <h3 className="text-xl font-bold text-white">ประวัติย่อ / Online Resume Preview</h3>
            <p className="text-xs text-slate-400">
              {personal.englishName} ({personal.thaiName}) — {personal.titles[0]}
            </p>
          </div>
        </div>

        {/* Action bar (Print / Download) - Hidden in Print */}
        <div className="print-hidden flex flex-wrap items-center justify-between gap-3 mb-6 p-3 rounded-xl bg-slate-900 border border-slate-800">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-xs font-semibold text-white shadow-md shadow-sky-500/20 transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>พิมพ์ / บันทึกเป็น PDF (Print to PDF)</span>
            </button>
          </div>
          <div className="text-xs text-slate-400">
            เบอร์โทรติดต่อ: <span className="text-emerald-400 font-semibold">{personal.phone}</span>
          </div>
        </div>

        {/* Printable Resume Sheet (Visible and Formatted for both Screen & Print) */}
        <div className="resume-print-sheet p-6 sm:p-8 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-6 text-slate-300 text-xs sm:text-sm print:space-y-4 print:text-black">
          
          {/* Header Info */}
          <div className="border-b border-slate-800 pb-5 print:border-slate-300 print:pb-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src="/profile.jpg"
                  alt={personal.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover object-top border-2 border-sky-400 shadow-md shrink-0 print:w-20 print:h-20 print:border-slate-400"
                />
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-white print:text-black">
                    {personal.englishName}
                  </h1>
                  <p className="text-sm sm:text-base font-semibold text-sky-400 print:text-indigo-700 mt-0.5">
                    {personal.thaiName}
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-slate-300 print:text-slate-700 mt-1">
                    {personal.titles.join(" | ")}
                  </p>
                </div>
              </div>
              <div className="text-left sm:text-right space-y-1 font-mono text-xs text-slate-300 print:text-black">
                <div className="flex sm:justify-end items-center gap-1.5 font-bold">
                  <Phone className="w-3.5 h-3.5 text-emerald-400 print:text-emerald-700" />
                  <span>{personal.phone}</span>
                </div>
                <div className="flex sm:justify-end items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-sky-400 print:text-sky-700" />
                  <span>{personal.email}</span>
                </div>
                <div className="flex sm:justify-end items-center gap-1.5 text-[11px] text-slate-400 print:text-slate-600">
                  <MapPin className="w-3 h-3 text-indigo-400 print:text-indigo-700" />
                  <span>ขอนแก่น / กรุงเทพฯ (พร้อมเริ่มงานทันที)</span>
                </div>
              </div>
            </div>

            {/* Availability Banner */}
            <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 print:bg-emerald-50 print:border-emerald-300 print:text-emerald-800 text-xs">
              <MapPin className="w-3.5 h-3.5" />
              <span>{personal.location}</span>
            </div>
          </div>

          {/* About Me / Summary */}
          <div>
            <h2 className="font-bold text-white print:text-black text-xs uppercase tracking-wider mb-2 text-indigo-400 print:text-indigo-700 font-mono">
              เกี่ยวกับฉัน (About Me)
            </h2>
            <p className="text-slate-300 print:text-slate-800 leading-relaxed text-xs sm:text-sm bg-slate-950/40 print:bg-slate-50 p-3 rounded-xl border border-slate-800/60 print:border-slate-200">
              {personal.bio}
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="font-bold text-white print:text-black text-xs uppercase tracking-wider mb-3 text-indigo-400 print:text-indigo-700 font-mono flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-sky-400 print:text-sky-700" />
              <span>ประสบการณ์ทำงาน (Work Experience)</span>
            </h2>
            <div className="space-y-3.5 print:space-y-3">
              {experience.map((exp) => (
                <div key={exp.id} className="p-4 rounded-xl bg-slate-950/60 print:bg-slate-50 border border-slate-800 print:border-slate-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                    <span className="font-bold text-white print:text-black text-sm">{exp.role}</span>
                    <span className="font-mono text-xs text-sky-400 print:text-sky-700 font-semibold">{exp.period}</span>
                  </div>
                  <p className="text-xs text-indigo-300 print:text-indigo-800 font-medium mb-2">
                    {exp.company} — {exp.location} ({exp.type})
                  </p>
                  <ul className="space-y-1 text-xs text-slate-300 print:text-slate-800">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 print:text-emerald-700 shrink-0 mt-0.5" />
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
            <h2 className="font-bold text-white print:text-black text-xs uppercase tracking-wider mb-2 text-indigo-400 print:text-indigo-700 font-mono flex items-center gap-1.5">
              <GraduationCap className="w-3.5 h-3.5 text-sky-400 print:text-sky-700" />
              <span>ประวัติการศึกษา (Education)</span>
            </h2>
            <div className="p-3.5 rounded-xl bg-slate-950/60 print:bg-slate-50 border border-slate-800 print:border-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <p className="font-bold text-white print:text-black text-sm">{personal.education.degree}</p>
                <p className="text-xs text-slate-300 print:text-slate-700 mt-0.5">
                  {personal.education.faculty} {personal.education.university}
                </p>
              </div>
              <div className="text-left sm:text-right">
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-sky-500/15 print:bg-sky-100 text-sky-300 print:text-sky-800 border border-sky-500/30 print:border-sky-300 font-mono text-xs font-semibold">
                  {personal.education.gpa}
                </span>
                <p className="text-[11px] text-slate-400 print:text-slate-600 mt-0.5">{personal.education.graduationYear}</p>
              </div>
            </div>
          </div>

          {/* Skills Summary */}
          <div>
            <h2 className="font-bold text-white print:text-black text-xs uppercase tracking-wider mb-2 text-indigo-400 print:text-indigo-700 font-mono">
              ทักษะความสามารถ (Skills &amp; Competencies)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {skills.map((cat) => (
                <div key={cat.title} className="p-3 rounded-lg bg-slate-950/60 print:bg-slate-50 border border-slate-800 print:border-slate-300">
                  <p className="font-semibold text-slate-200 print:text-black text-xs mb-1">{cat.title}</p>
                  <p className="text-[11px] text-slate-400 print:text-slate-700 leading-relaxed">
                    {cat.skills.map((s) => s.name).join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div>
            <h2 className="font-bold text-white print:text-black text-xs uppercase tracking-wider mb-2 text-indigo-400 print:text-indigo-700 font-mono flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-amber-400 print:text-amber-700" />
              <span>ใบรับรองและผลงาน (Certifications &amp; Achievements)</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {certifications.map((cert, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-slate-950/60 print:bg-slate-50 border border-slate-800 print:border-slate-300">
                  <p className="font-semibold text-white print:text-black text-xs">{cert.title}</p>
                  <p className="text-[10px] text-sky-400 print:text-sky-800 font-mono mt-0.5">{cert.issuer}</p>
                  <p className="text-[10px] text-slate-400 print:text-slate-600 mt-0.5 leading-normal">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer (Hidden in Print) */}
        <div className="print-hidden mt-6 flex justify-end gap-3">
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
