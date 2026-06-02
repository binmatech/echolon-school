import React, { useState, useEffect } from 'react';
import { Target, Eye, Shield, Award, Users, BookOpen, Star, Sparkles } from 'lucide-react';

export default function AboutUs() {
  // Animated Counters States
  const [teachersCount, setTeachersCount] = useState(0);
  const [successCount, setSuccessCount] = useState(0);
  const [activitiesCount, setActivitiesCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);

  // Trigger counters count-up on load/intersection
  useEffect(() => {
    const duration = 1500; // ms
    const steps = 60;
    const stepTime = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      
      // Calculate eased counts
      setTeachersCount(Math.min(Math.round((35 / steps) * step), 35));
      setSuccessCount(Math.min(Math.round((100 / steps) * step), 100));
      setActivitiesCount(Math.min(Math.round((18 / steps) * step), 18));
      setYearsCount(Math.min(Math.round((12 / steps) * step), 12));

      if (step >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const coreValues = [
    {
      title: 'Academic Excellence',
      desc: 'Nurturing a relentless curiosity and standard of intelligence that drives highest school passing and assessment performance.',
      icon: Award,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    },
    {
      title: 'Discipline & Character',
      desc: 'Cultivating respectful, responsible, honest, and morally sound future leaders in the vibrant communities of Lagos state.',
      icon: Shield,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    },
    {
      title: 'Innovation & Technology',
      desc: 'Developing forward-thinking minds prepared for digital realities through modern classrooms, electronic library tools, and ICT labs.',
      icon: Sparkles,
      color: 'bg-amber-50 text-amber-600 border-amber-100',
    },
  ];

  return (
    <section id="about-echelon" className="py-24 bg-white relative overflow-hidden">
      {/* Absolute Decorative Blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-echelon-blue/5 rounded-full filter blur-3xl -z-10 -translate-y-12 translate-x-12"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-echelon-gold/5 rounded-full filter blur-3xl -z-10 translate-y-12 -translate-x-12"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* ROW 1: BRIEF HISTORY & DUAL BLOCK */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Block: Narrative Card */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-block">
              <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-echelon-blue font-mono bg-[#00AEEF]/10 px-3.5 py-1.5 rounded-full border border-blue-200/50">
                Welcome to Echelon
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase font-display leading-[1.05]">
              Where Academic <span className="text-echelon-blue font-serif italic tracking-wide lowercase italic font-normal">potential</span> Meets Creative Leadership
            </h2>
            <p className="text-slate-600 leading-relaxed font-light">
              Founded on the pillars of character, academic absolute precision, and discipline, <strong className="font-medium text-slate-900">Echelon Nursery & Primary School</strong> has quickly blossomed into a highly-respected institute of trust in Lagos. Located at Ikotun/Idimu, we cater to families seeking an exceptionally high-trust, safe, and modern primary level education.
            </p>
            
            {/* Highlighted core quote */}
            <div className="p-5 bg-slate-50 border-l-4 border-echelon-blue rounded-r-xl">
              <p className="text-sm font-semibold italic text-slate-800 leading-relaxed">
                "We believe every child deserves a strong academic foundation and character development."
              </p>
            </div>

            <p className="text-slate-600 leading-relaxed text-sm font-light">
              Our holistic methodology blends the rigorous Nigerian national syllabus with creative international primary guidelines, ensuring that children leave our care ready to set global trends and solve problems with confidence.
            </p>
          </div>

          {/* Right Block: Image collage / Visual Trust banner */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl group border-[6px] border-slate-50 max-w-lg mx-auto">
              <img
                src="https://imgur.com/B33NaG1.png"
                alt="Pupils learning inside Echelon library classroom"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent"></div>
              {/* Overlay quote */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="text-xs font-mono text-echelon-gold font-bold uppercase tracking-wider">Lagos Ikotun campus</p>
                <p className="text-sm font-bold mt-1 font-sans">A spacious library and collaborative study areas optimized for children's focus.</p>
              </div>
            </div>

            {/* Quick Experience Badge */}
            <div className="absolute -bottom-5 right-4 md:right-12 p-4 bg-[#F4B400] text-slate-950 rounded-2xl shadow-xl flex items-center gap-3">
              <div className="text-3xl font-black font-display leading-none">10+</div>
              <div className="text-[10px] font-bold font-mono uppercase tracking-wider leading-tight">
                Years of<br />Excellence in Lagos
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2: CRITICAL MISSION / VISION BENTO BLOCK */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
          {/* Mission Card */}
          <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 text-white relative flex flex-col justify-between group overflow-hidden border border-slate-800 shadow-xl text-left">
            <div className="absolute top-0 right-0 w-32 h-32 bg-echelon-blue/10 rounded-full filter blur-xl transition-all duration-300 group-hover:bg-echelon-blue/20"></div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-echelon-blue/20 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-echelon-blue" />
              </div>
              <h3 className="text-2xl font-bold font-display text-white">Our Mission</h3>
              <p className="text-sm text-slate-300 mt-3 leading-relaxed font-light">
                To provide a modern, nurturing and inclusive academic environment where young kids are rigorously trained to discover their talents, build self-discipline, acquire solid educational concepts, and emerge as high-integrity leaders of tomorrow's society.
              </p>
            </div>
            <div className="h-1 bg-echelon-blue w-1/3 rounded mt-8"></div>
          </div>

          {/* Vision Card */}
          <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 text-white relative flex flex-col justify-between group overflow-hidden border border-slate-800 shadow-xl text-left">
            <div className="absolute top-0 right-0 w-32 h-32 bg-echelon-gold/10 rounded-full filter blur-xl transition-all duration-300 group-hover:bg-echelon-gold/20"></div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-echelon-gold/20 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-echelon-gold" />
              </div>
              <h3 className="text-2xl font-bold font-display text-white">Our Vision</h3>
              <p className="text-sm text-slate-300 mt-3 leading-relaxed font-light">
                To be the top-tier school of choice in Lagos, Nigeria, universally recognized for nurturing pupils with an insatiable appetite for learning, moral code clarity, creative adaptability, and premium scholastic distinctions.
              </p>
            </div>
            <div className="h-1 bg-echelon-gold w-1/3 rounded mt-8"></div>
          </div>
        </div>

        {/* ROW 3: CORE VALUES DISPLAY */}
        <div className="mt-20">
          <div className="text-center space-y-4 mb-12">
            <div className="inline-block">
              <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-[#F4B400] font-mono bg-[#F4B400]/10 px-3.5 py-1.5 rounded-full border border-amber-150">
                Our Pillars
              </span>
            </div>
            <h3 className="text-2xl md:text-4xl font-black text-slate-950 uppercase tracking-tighter font-display leading-[1.1]">Values That Define Echelon Schools</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((val) => (
              <div
                key={val.title}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100/50 flex flex-col items-start text-left hover:shadow-lg hover:border-slate-200 transition-all duration-300"
              >
                <div className={`p-3.5 rounded-xl border mb-5 ${val.color}`}>
                  <val.icon className="w-5 h-5 stroke-[2]" />
                </div>
                <h4 className="font-bold text-lg text-slate-900 font-display">{val.title}</h4>
                <p className="text-slate-500 text-sm mt-2 leading-relaxed font-light">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4: ANIMATED STATISTICS GRID (ACADEMIC EXCELLENCE PANEL) */}
        <div className="mt-28 bg-[#1F2937] rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl border-t-8 border-echelon-blue">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-900/40"></div>
          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center text-white">
            
            {/* Stat Item 1 */}
            <div className="space-y-2">
              <div className="inline-flex p-3 rounded-full bg-white/5 border border-white/10 text-echelon-blue mb-1">
                <Users className="w-6 h-6" />
              </div>
              <div className="text-4xl md:text-6xl font-black font-display text-white tracking-tighter">
                {teachersCount}<span className="text-echelon-gold">+</span>
              </div>
              <div className="text-xs md:text-sm text-slate-300 font-bold uppercase tracking-wide font-mono">Qualified Teachers</div>
            </div>

            {/* Stat Item 2 */}
            <div className="space-y-2">
              <div className="inline-flex p-3 rounded-full bg-white/5 border border-white/10 text-echelon-gold mb-1">
                <Star className="w-6 h-6" />
              </div>
              <div className="text-4xl md:text-6xl font-black font-display text-white tracking-tighter">
                {successCount}<span className="text-echelon-gold">%</span>
              </div>
              <div className="text-xs md:text-sm text-slate-300 font-bold uppercase tracking-wide font-mono">Assessment Success</div>
            </div>

            {/* Stat Item 3 */}
            <div className="space-y-2">
              <div className="inline-flex p-3 rounded-full bg-white/5 border border-white/10 text-emerald-400 mb-1">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="text-4xl md:text-6xl font-black font-display text-white tracking-tighter">
                {activitiesCount}<span className="text-echelon-gold">+</span>
              </div>
              <div className="text-xs md:text-sm text-slate-300 font-bold uppercase tracking-wide font-mono">Activity Clubs</div>
            </div>

            {/* Stat Item 4 */}
            <div className="space-y-2">
              <div className="inline-flex p-3 rounded-full bg-white/5 border border-white/10 text-indigo-400 mb-1">
                <Award className="w-6 h-6" />
              </div>
              <div className="text-4xl md:text-6xl font-black font-display text-white tracking-tighter">
                {yearsCount}<span className="text-echelon-gold">+</span>
              </div>
              <div className="text-xs md:text-sm text-slate-300 font-bold uppercase tracking-wide font-mono">Years Excellence</div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
