import React, { useState } from 'react';
import { FileText, Download, Phone, Mail, GraduationCap, ArrowRight, CheckSquare, X, ShieldAlert } from 'lucide-react';

interface AdmissionsProps {
  onApplyClick: () => void;
  onBookTourClick: () => void;
}

export default function Admissions({ onApplyClick, onBookTourClick }: AdmissionsProps) {
  const [downloadProgress, setDownloadProgress] = useState<number | null>(null);
  const [downloadType, setDownloadType] = useState<string | null>(null);

  const startDownload = (type: string) => {
    setDownloadType(type);
    setDownloadProgress(0);
    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev === null) return null;
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDownloadProgress(null);
            setDownloadType(null);
            // Simulate actual client download file trigger by creating virtual anchor
            const link = document.createElement('a');
            link.href = '#';
            link.setAttribute('download', 'echelon-admission-guide-2026.pdf');
            // Notify parent in alert/alert box
          }, 800);
          return 100;
        }
        return prev + 10;
      });
    }, 120);
  };

  const steps = [
    {
      num: '01',
      title: 'Online Application',
      desc: 'Fill our secure, responsive online form under 5 minutes. Enter your basic child details and home metrics.',
    },
    {
      num: '02',
      title: 'Caring Child Assessment',
      desc: 'We map out a pleasant diagnostic assessment session for your ward to test core literacy, phonics, and basic algebra levels.',
    },
    {
      num: '03',
      title: 'Admission Offer Made',
      desc: 'Based on assessment reviews, a detailed entry offer and parent guidelines prospectus are dispatched to your inbox.',
    },
  ];

  return (
    <section id="admissions" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* ROW 1: BRIEF GRID TITLE & INTRO COPY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Box */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00AEEF] font-mono bg-[#00AEEF]/10 px-3.5 py-1.5 rounded-full border border-blue-200">
              Enrolment 2026/2027
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase font-display leading-[1.05]">
              Admission guidelines & <span className="text-echelon-blue font-serif italic tracking-wide lowercase italic font-normal">simplified onboarding</span>
            </h2>
            <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed">
              At Echelon, we operate an inclusive, merit-based entry system designed to identify every child's development index without causing testing stress. We are actively accepting applications for <strong className="font-semibold text-slate-800">Creche, Early Years, Nursery, and Primary Levels (Grades 1 – 6)</strong>.
            </p>

            {/* Checklist criteria */}
            <div className="space-y-3.5">
              <div className="flex gap-3 items-start text-xs font-medium text-slate-700">
                <div className="w-5 h-5 rounded bg-blue-50 text-echelon-blue flex items-center justify-center font-bold">✓</div>
                <span>Creche Eligibility starts from 3 Months above</span>
              </div>
              <div className="flex gap-3 items-start text-xs font-medium text-slate-700">
                <div className="w-5 h-5 rounded bg-blue-50 text-echelon-blue flex items-center justify-center font-bold">✓</div>
                <span>Nursery Placement guidelines require ages 3 to 5 years</span>
              </div>
              <div className="flex gap-3 items-start text-xs font-medium text-slate-700">
                <div className="w-5 h-5 rounded bg-blue-50 text-echelon-blue flex items-center justify-center font-bold">✓</div>
                <span>Primary Admissions mapping maps kids starting age 5+ and above</span>
              </div>
            </div>

            {/* Downloader & Contact Block elements */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => startDownload('Admissions Prospectus')}
                className="h-12 px-5 rounded-xl border border-slate-200 hover:border-slate-300 text-slate-700 text-xs font-bold font-display uppercase tracking-wide flex items-center gap-2 transition-colors bg-slate-50"
              >
                <Download className="w-4 h-4 text-echelon-gold" />
                <span>Download Admission Guide</span>
              </button>
            </div>
          </div>

          {/* Right Enrollment visual map */}
          <div className="lg:col-span-6 bg-slate-50 rounded-2xl p-7 md:p-8 border border-slate-100/55 space-y-6 text-left">
            <h3 className="text-lg font-bold text-slate-900 font-display">Simple Onboarding Pathway</h3>
            
            <div className="space-y-6">
              {steps.map((st) => (
                <div key={st.num} className="flex gap-4 items-start relative group">
                  <span className="text-2xl font-black font-mono text-echelon-blue/20 group-hover:text-echelon-blue/40 transition-colors">
                    {st.num}
                  </span>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-sm font-display">{st.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed font-light">{st.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Apply / Tour CTAs inside card */}
            <div className="pt-6 border-t border-slate-200/60 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onApplyClick}
                className="flex-1 h-12 bg-echelon-blue text-white rounded-xl font-bold font-display text-xs tracking-wider uppercase hover:bg-echelon-blue-hover transition-colors flex items-center justify-center gap-1.5 shadow"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Begin Online Application</span>
              </button>
              
              <button
                onClick={onBookTourClick}
                className="flex-1 h-12 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold font-display text-xs tracking-wider uppercase hover:bg-slate-50 transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Request Assessment Visit</span>
              </button>
            </div>
          </div>

        </div>

        {/* 6. DYNAMIC FILE TRANSLATION POP-UP DOWNLOAD DIALOG */}
        {downloadProgress !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 md:p-8 max-w-sm w-full text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
              <div className="w-12 h-12 rounded-full bg-amber-50 text-echelon-gold flex items-center justify-center mx-auto">
                <FileText className="w-6 h-6 stroke-[2]" />
              </div>
              
              <div className="space-y-1.5">
                <h4 className="text-base font-bold text-slate-900 font-display">Downloading Prospectus</h4>
                <p className="text-xs text-slate-500">{downloadType}</p>
              </div>

              {/* Progress bar container */}
              <div className="space-y-2">
                <div className="h-2 w-full bg-slate-150 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-echelon-blue to-echelon-gold rounded-full transition-all duration-150"
                    style={{ width: `${downloadProgress}%` }}
                  ></div>
                </div>
                <span className="text-xs text-slate-400 font-mono">{downloadProgress}% Completed</span>
              </div>

              {downloadProgress === 100 && (
                <p className="text-[10px] text-emerald-600 font-semibold font-mono animate-pulse">
                  ✓ PDF downloaded to local printer files directory
                </p>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
