import React from 'react';
import { ArrowRight, Calendar, GraduationCap, CheckCircle, ShieldCheck, Star } from 'lucide-react';

interface HeroProps {
  onApplyClick: () => void;
  onBookTourClick: () => void;
}

export default function Hero({ onApplyClick, onBookTourClick }: HeroProps) {
  return (
    <section id="hero-section" className="relative ring-0 outline-none overflow-hidden min-h-[92vh] flex items-center pt-36 md:pt-44 pb-16 bg-slate-950">
      {/* Background Stock high-trust Educational Image */}
      <div className="absolute inset-0">
        <img
          src="https://imgur.com/B33NaG1.png"
          alt="Happy Nigerian Pupils in Classroom Echelon Schools"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-35 object-center animate-pulse-slow"
        />
        {/* Sky-Blue / Royal-Navy / Golden Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-950/85 to-echelon-blue/45"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/60 to-slate-950"></div>
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Primary Hero Copy */}
        <div className="lg:col-span-7 text-left space-y-6">


          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tighter uppercase font-display">
            Building <span className="text-echelon-blue font-serif italic tracking-wide lowercase font-normal italic">future leaders</span> Through <span className="text-echelon-gold">Quality</span> Education
          </h1>
          
          <p className="text-base md:text-lg text-slate-300 max-w-2xl font-light leading-relaxed">
            At <strong className="font-semibold text-white">Echelon Nursery & Primary School</strong>, we inspire young minds to learn, grow, and excel in a safe, technologically advanced, and nurturing environment.
          </p>

          {/* Educational Highlights Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 max-w-xl">
            <div className="flex items-center gap-2 text-slate-200">
              <CheckCircle className="w-4 h-4 text-echelon-blue flex-shrink-0" />
              <span className="text-xs font-semibold">Caring & Dedicated Staff</span>
            </div>
            <div className="flex items-center gap-2 text-slate-200">
              <CheckCircle className="w-4 h-4 text-echelon-blue flex-shrink-0" />
              <span className="text-xs font-semibold">Smart Tech Labs</span>
            </div>
            <div className="flex items-center gap-2 text-slate-200">
              <CheckCircle className="w-4 h-4 text-echelon-blue flex-shrink-0" />
              <span className="text-xs font-semibold">Integrity Focused</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={onApplyClick}
              className="px-8 h-14 bg-echelon-blue hover:bg-echelon-blue-hover text-white rounded-xl font-bold font-display tracking-wide flex items-center justify-center gap-2.5 shadow-lg shadow-blue-500/25 transition-all text-sm group active:scale-98"
            >
              <GraduationCap className="w-5 h-5" />
              <span>Apply for Admission</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            
            <button
              onClick={onBookTourClick}
              className="px-8 h-14 border border-white/20 hover:border-white/30 text-white bg-white/5 hover:bg-white/10 rounded-xl font-bold font-display tracking-wide flex items-center justify-center gap-2.5 transition-all text-sm backdrop-blur-sm active:scale-98"
            >
              <Calendar className="w-5 h-5 text-echelon-gold" />
              <span>Book a School Tour</span>
            </button>
          </div>
        </div>

        {/* Right Feature Card Display Column */}
        <div className="lg:col-span-5 hidden lg:block">
          <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-2xl relative space-y-6">
            {/* Corner Decorative Star */}
            <div className="absolute -top-4 -right-4 p-3 bg-echelon-gold text-slate-950 rounded-xl shadow-lg animate-bounce">
              <Star className="w-5 h-5 fill-current" />
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-bold text-white font-display">Admissions Information</h3>
              <p className="text-xs text-slate-350">Echelon Nursery & Primary School admissions are fully online</p>
            </div>

            <div className="space-y-4">
              {/* Point 1 */}
              <div className="flex gap-3.5 items-start">
                <div className="w-8 h-8 rounded-lg bg-echelon-blue/15 flex items-center justify-center font-bold text-echelon-blue font-mono text-sm">1</div>
                <div>
                  <h4 className="text-sm font-bold text-white">Fill Online Enrollment</h4>
                  <p className="text-xs text-slate-300 mt-0.5">Start child application under 5 minutes securely</p>
                </div>
              </div>
              
              {/* Point 2 */}
              <div className="flex gap-3.5 items-start">
                <div className="w-8 h-8 rounded-lg bg-[#F4B400]/15 flex items-center justify-center font-bold text-echelon-gold font-mono text-sm">2</div>
                <div>
                  <h4 className="text-sm font-bold text-white">Assessment & Diagnostic</h4>
                  <p className="text-xs text-slate-300 mt-0.5">Child undergoes professional and caring base assessment</p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex gap-3.5 items-start">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center font-bold text-emerald-400 font-mono text-sm">3</div>
                <div>
                  <h4 className="text-sm font-bold text-white">Offer of Admission</h4>
                  <p className="text-xs text-slate-300 mt-0.5">Formal onboarding letter and welcome packet delivery</p>
                </div>
              </div>
            </div>

            {/* Quick Fact Box */}
            <div className="p-4 bg-slate-950/60 rounded-xl border border-white/5 text-center">
              <span className="text-xl font-bold font-display text-echelon-gold">100%</span>
              <p className="text-[10px] text-slate-400 mt-1 uppercase font-mono tracking-widest">National Assessment Passing Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
