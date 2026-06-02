import React from 'react';
import { Users, ShieldCheck, Cpu, Star, ClipboardCheck, GraduationCap, Heart, Check } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Experienced & Caring Teachers',
      desc: 'Our certified educators are thoroughly vetted, highly professional, and continuously trained. They understand the psychology of child care, ensuring every child receives tailored learning attention.',
      icon: GraduationCap,
      color: 'text-echelon-blue bg-blue-50 border-blue-100',
    },
    {
      title: 'Small, Highly-Focused Class Sizes',
      desc: 'We maintain low teacher-to-student ratios to ensure that no child gets lost in the crowd. Educators track development charts, milestones, and diagnostic progress sheets daily.',
      icon: Users,
      color: 'text-amber-600 bg-amber-50 border-amber-100',
    },
    {
      title: 'Modern Learning Methods',
      desc: 'Moving far beyond rote memorization, we emphasize interactive discovery, cognitive logic, critical questioning, and creative hands-on projects that embed real understanding.',
      icon: ClipboardCheck,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
    },
    {
      title: 'Safe, Serene & Secure Campus',
      desc: 'Equipped with perimeter defense, verified visitors protocols, professional guards, and fully safe furnishings, Echelon offers a complete peace-of-mind haven for parents.',
      icon: ShieldCheck,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    },
    {
      title: 'Character & Moral Development',
      desc: 'Integrity and discipline are fundamental to Echelon. We guide children to adopt strong virtues, respectful manners, honesty, and cooperative social intelligence from day one.',
      icon: Heart,
      color: 'text-rose-600 bg-rose-50 border-rose-100',
    },
    {
      title: 'Technology-Enhanced Education',
      desc: 'From our modern computer lab to interactive monitors, we introduce age-appropriate digital skills early. Pupils learn standard, valuable computing concepts organically.',
      icon: Cpu,
      color: 'text-purple-600 bg-purple-50 border-purple-100',
    },
  ];

  return (
    <section id="why-echelon" className="py-24 bg-slate-50 relative border-t border-b border-slate-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block">
            <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-[#00AEEF] font-mono bg-[#00AEEF]/10 px-3.5 py-1.5 rounded-full border border-blue-200">
              The Echelon Difference
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase font-display leading-[1.05]">
            Why Discerning Parents choose <span className="text-echelon-blue font-serif italic tracking-wide lowercase italic font-normal">echelon schools</span>
          </h2>
          <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed">
            We understand that choosing a nursery or primary school defines your child’s lifelong trajectory. Here is how we guarantee academic success and moral discipline.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {features.map((feat, index) => {
            // Apply distinct design layouts matching the exact Design HTML guidelines
            let cardBgClass = "bg-white border-slate-100 border text-slate-900";
            let topBorderClass = "";
            let bottomBorderClass = "";
            let textColorDescClass = "text-slate-500";
            let iconBgClass = feat.color;
            let titleColorClass = "text-slate-900";
            let checkColorClass = "text-emerald-500";
            let badgeText = "COMMITTED TO EXCELLENCE";

            if (index === 0) {
              cardBgClass = "bg-white border-slate-150 border text-slate-900";
              topBorderClass = "border-t-[5px] border-echelon-blue";
            } else if (index === 1) {
              cardBgClass = "bg-[#F4B400] text-slate-950 border-none shadow-xl hover:scale-103";
              textColorDescClass = "text-slate-950/80 font-normal";
              iconBgClass = "bg-white/20 text-slate-950";
              titleColorClass = "text-slate-950";
              checkColorClass = "text-slate-950";
              badgeText = "INDIVIDUAL DEVELOPMENT CHARTS";
            } else if (index === 2) {
              cardBgClass = "bg-[#1F2937] text-white border-none shadow-xl border-t-[5px] border-[#F4B400]";
              textColorDescClass = "text-slate-300";
              iconBgClass = "bg-white/10 text-[#F4B400]";
              titleColorClass = "text-white";
              checkColorClass = "text-[#F4B400]";
              badgeText = "MODERN ACADEMICS CHANNELS";
            } else if (index === 3) {
              cardBgClass = "bg-white border-slate-150 border text-slate-900 shadow-xl";
              bottomBorderClass = "border-b-[5px] border-[#F4B400]";
            } else if (index === 4) {
              cardBgClass = "bg-white border-slate-150 border text-slate-900";
              topBorderClass = "border-t-[5px] border-emerald-500";
              badgeText = "MORAL VIRTUES GUIDELINES";
            } else if (index === 5) {
              cardBgClass = "bg-gradient-to-br from-[#00AEEF] to-indigo-600 text-white border-none shadow-2xl";
              textColorDescClass = "text-slate-100/95";
              iconBgClass = "bg-white/15 text-white";
              titleColorClass = "text-white";
              checkColorClass = "text-white";
              badgeText = "DIGITAL CODING & SMART LABS";
            }

            return (
              <div
                key={feat.title}
                className={`${cardBgClass} ${topBorderClass} ${bottomBorderClass} rounded-2xl p-7 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between text-left group`}
              >
                <div>
                  {/* Icon Panel */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-105 ${iconBgClass}`}>
                    <feat.icon className="w-5.5 h-5.5 stroke-[2]" />
                  </div>

                  {/* Title & Desc */}
                  <h3 className={`text-lg font-extrabold ${titleColorClass} font-display mb-3 tracking-tight`}>
                    {feat.title}
                  </h3>
                  
                  <p className={`${textColorDescClass} text-xs md:text-sm leading-relaxed mb-6 font-light`}>
                    {feat.desc}
                  </p>
                </div>

                {/* Bullet list key value indicator */}
                <div className="border-t border-black/5 dark:border-white/5 pt-3.5 mt-auto flex items-center gap-1.5 text-[10px] font-bold font-mono tracking-wider opacity-85">
                  <Check className={`w-4 h-4 ${checkColorClass} flex-shrink-0`} />
                  <span>{badgeText}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Bottom Quote bar */}
        <div className="mt-16 text-center">
          <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
            All curriculum pathways are fully audited and backed by the <strong className="font-semibold text-slate-700">Lagos State Ministry of Education</strong> curriculum guidelines.
          </p>
        </div>

      </div>
    </section>
  );
}
