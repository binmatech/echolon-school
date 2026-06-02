import React, { useState } from 'react';
import { Sparkles, Calendar, BookOpen, Clock, Heart, ArrowRight, X, ShieldAlert } from 'lucide-react';
import { Program } from '../types';

interface ProgramsProps {
  onApplyClick: () => void;
}

export default function Programs({ onApplyClick }: ProgramsProps) {
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  const programsData: Program[] = [
    {
      title: 'Creche Section',
      age: '3 Months to 18 Months',
      description: 'A cozy, ultra-sanitized, and loving home away from home. We monitor feeding schedules and sensory development in a peaceful environment.',
      detailedDescription: 'Our Creche services provide premium infant care tailored for working parents in Lagos. Under the supervision of highly certified childminders and medical health partners, your infant is nurtured with maximum hygiene, tender attention, and stimulating sensory play.',
      image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=600',
      features: ['24/7 childminder active attention', 'Daily diaper and feeding diary', 'Sensory and motor skill activities', 'Strictly audited sanitization protocols'],
      color: 'border-blue-100 dark:border-blue-500/10 hover:shadow-blue-500/5',
    },
    {
      title: 'Early Years / Toddler',
      age: '1.5 Years to 3 Years',
      description: 'Encouraging active speech development, cooperative social behavior, toilet training, and motor coordination through guided visual games.',
      detailedDescription: 'In our Toddler and Early Years group, kids transition into cooperative social play. The curriculum merges standard Montessori motor-skill items with rich language and vocabulary learning to unlock immediate creative communication capabilities.',
      image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=600',
      features: ['Active toilet training support', 'Basic vocabulary & phonetics builders', 'Creative paint and modeling activities', 'Safe physical agility playgrounds'],
      color: 'border-purple-100 dark:border-purple-500/10 hover:shadow-purple-500/5',
    },
    {
      title: 'Nursery School',
      age: '3 Years to 5 Years',
      description: 'Developing foundational phonics, reading readiness, writing control, and basic numerical reasoning using interactive visual objects.',
      detailedDescription: 'Our Nursery curriculum is carefully structured to introduce formal academics in a highly engaging, non-intimidating way. Pupils develop fluent blended-reading habits through Phonics, acquire basic subtraction/addition principles, and practice elegant cursive penmanship.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=600',
      features: ['Full Phonics & English Blended Reading', 'Early Math Concepts (Shapes, Quantities)', 'Bilingual intro classes (French & Yoruba)', 'Cultural and moral etiquettes integration'],
      color: 'border-amber-100 dark:border-amber-500/10 hover:shadow-amber-500/5',
    },
    {
      title: 'Primary School Level',
      age: '5 Years to 10+ Years',
      description: 'Comprehensive preparation spanning English, Mathematics, Science, ICT literacy, and public speaking. Excellence at its best.',
      detailedDescription: 'Our hallmark primary school program builds robust leaders and critical thinkers. Combining core national education requirements with international inquiry systems, pupils master algebra, physical sciences, creative writing, programming basics, and presentation styles.',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=600',
      features: ['Advanced Mathematics and Applied Sciences', 'Computer Science & ICT Lab projects', 'Creative Writing and Public Speaking', 'National common entrance preparations'],
      color: 'border-emerald-100 dark:border-emerald-500/10 hover:shadow-emerald-500/5',
    },
  ];

  return (
    <section id="programs" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block">
            <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-[#F4B400] font-mono bg-[#F4B400]/10 px-3.5 py-1.5 rounded-full border border-amber-100">
              Ages & Curriculums
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase font-display text-center leading-[1.05]">
            Our Care & Academic <span className="text-[#F4B400] font-serif italic tracking-wide lowercase italic font-normal">programs</span>
          </h2>
          <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed text-center">
            Carefully curated, stage-specific curriculum modules tailored to foster early motor logic, advanced analytical speech, and competitive common entrance preparation.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programsData.map((prog) => (
            <div
              key={prog.title}
              className={`bg-white rounded-2xl border ${prog.color} overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left`}
            >
              <div>
                {/* Image Section */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  {/* Age Tag */}
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white px-2.5 py-1 rounded-full text-[10px] font-bold font-mono tracking-wide uppercase border border-white/10">
                    Age: {prog.age}
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-5 space-y-2.5">
                  <h3 className="text-lg font-bold text-slate-900 font-display leading-tight">{prog.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-light line-clamp-3">
                    {prog.description}
                  </p>
                </div>
              </div>

              {/* Learn More Action Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => setSelectedProgram(prog)}
                  className="w-full text-center py-2 px-4 rounded-xl text-xs font-bold font-display text-echelon-blue bg-blue-50 border border-blue-100 hover:bg-echelon-blue hover:text-white hover:border-transparent transition-all duration-300 flex items-center justify-center gap-1"
                >
                  <span>Learn More Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 4. PROGRAM POP-UP INFORMATION MODAL */}
        {selectedProgram && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-100 relative max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProgram(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white z-10 transition-transform hover:scale-110 shadow-sm"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header Visual Banner */}
              <div className="relative h-48 flex-shrink-0">
                <img
                  src={selectedProgram.image}
                  alt={selectedProgram.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                <div className="absolute bottom-4 left-5">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest font-mono text-echelon-gold bg-[#F4B400]/15 px-2.5 py-1 rounded border border-[#F4B400]/25">
                    {selectedProgram.age}
                  </span>
                  <h4 className="text-white text-xl font-bold font-display mt-2">{selectedProgram.title}</h4>
                </div>
              </div>

              {/* Details Content Box */}
              <div className="p-6 overflow-y-auto space-y-5 text-left">
                <div className="space-y-2">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Overview Description</h5>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    {selectedProgram.detailedDescription}
                  </p>
                </div>

                {/* Key Curricular Points */}
                <div className="space-y-3">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">Curriculum Focus</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProgram.features.map((item, index) => (
                      <div key={index} className="flex gap-2 items-start text-xs text-slate-800">
                        <span className="w-5 h-5 rounded bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-[10px] flex-shrink-0">✔</span>
                        <span className="font-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Schedule times fact */}
                <div className="p-3.5 bg-slate-50 rounded-xl flex items-center gap-3 border border-slate-100">
                  <Clock className="w-5 h-5 text-echelon-blue flex-shrink-0" />
                  <div className="text-xs">
                    <span className="font-bold text-slate-800 font-sans block">Routine Schedule Hour Indicators</span>
                    <span className="text-slate-500 font-light mt-0.5 block">Monday – Friday: 7:45 AM – 1:30 PM (Creche available until 5 PM)</span>
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex gap-2.5">
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="flex-1 py-2.5 border border-slate-200 text-slate-700 bg-white hover:bg-slate-50 text-xs font-bold font-display rounded-xl transition-colors"
                >
                  Close Window
                </button>
                <button
                  onClick={() => { setSelectedProgram(null); onApplyClick(); }}
                  className="flex-1 py-2.5 bg-echelon-blue hover:bg-echelon-blue-hover text-white text-xs font-bold font-display rounded-xl tracking-wide transition-colors flex items-center justify-center gap-1"
                >
                  <span>Apply Online</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
