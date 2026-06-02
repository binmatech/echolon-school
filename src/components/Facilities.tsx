import React from 'react';
import { BookOpen, Monitor, ShieldAlert, Bus, Dumbbell, Sparkles } from 'lucide-react';
import { Facility } from '../types';

export default function Facilities() {
  const facilitiesList: Facility[] = [
    {
      name: 'Smart Classrooms',
      description: 'Brightly-lit, well-ventilated, and air-conditioned classes equipped with modern visual displays and ergonomic chairs adapted for children’s back support and posture comfort.',
      category: 'Academic Learning',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=600',
    },
    {
      name: 'Rich Resource Library',
      description: 'An extensive physical and electronic library stack. Houses junior textbooks, encyclopedias, interactive fictional storylines, and audiobooks to foster voluntary reading habits.',
      category: 'Research & Study',
      image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=600',
    },
    {
      name: 'Modern ICT Computer Lab',
      description: 'Featuring flat-screen child-safe workstations and curated basic coding blocks. Children gain digital mastery, keyboard literacy, and age-appropriate design skills early.',
      category: 'Technology Literacy',
      image: 'https://images.unsplash.com/photo-1562774053-f5a02f6ef87a?auto=format&fit=crop&q=80&w=600',
    },
    {
      name: 'Soft-Padded Pediatric Playground',
      description: 'A fully secured recreation park with high-grade, round-edged non-toxic swings, slides, and obstacle runs. Built resting on shock-absorbing synthetic padding turf for play safety.',
      category: 'Physical Agility',
      image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=600',
    },
    {
      name: 'Secure Air-conditioned School Bus',
      description: 'Supervised, GPS-tracked transportation routes across major neighborhoods in Idimu, Ikotun, Egbeda, and environ. Accompanied by experienced wardens on every transit.',
      category: 'Transport & Transit',
      image: 'https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&q=80&w=600',
    },
    {
      name: 'Ironclad Secure Campus',
      description: '24/7 guarded security gates, active CCTV monitors covering blindspots, visitor badge audits, and medical first-aid teams fully prepared on campus for pediatric emergencies.',
      category: 'Safety & Healthcare',
      image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=600',
    },
  ];

  return (
    <section id="facilities" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block">
            <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-echelon-blue font-mono bg-[#00AEEF]/10 px-3.5 py-1.5 rounded-full border border-blue-200">
              World-class Infrastructure
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase font-display leading-[1.05]">
            Premium Facilities for <span className="text-echelon-blue font-serif italic tracking-wide lowercase italic font-normal">ultimate learning</span>
          </h2>
          <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed">
            Excellent mental acuity requires stellar environments. We list infrastructural components built strictly for children’s comfort, safety, and creative engineering discovery.
          </p>
        </div>

        {/* Facilities Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilitiesList.map((fac) => (
            <div
              key={fac.name}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={fac.image}
                    alt={fac.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Category Pill Tag */}
                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-slate-800 text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full shadow border border-slate-100">
                    {fac.category}
                  </span>
                </div>

                {/* Content description */}
                <div className="p-6 space-y-2.5">
                  <h3 className="text-base font-bold text-slate-900 font-display group-hover:text-echelon-blue transition-colors">
                    {fac.name}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-light">
                    {fac.description}
                  </p>
                </div>
              </div>

              {/* Verified Bottom label */}
              <div className="px-6 pb-5 flex items-center gap-1 text-[10px] font-bold text-emerald-600 uppercase font-mono tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Active Infrastructure</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
