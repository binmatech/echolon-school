import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, User } from 'lucide-react';
import { Testimonial } from '../types';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonialsList: Testimonial[] = [
    {
      id: 'testy-1',
      author: 'Mrs. Funmi Adebayo',
      relation: 'Mother of Caleb & Deborah (Primary 4 & Nursery 1)',
      rating: 5,
      text: "I am completely blown away by the rapid academic progress in my children since they transferred to Echelon. Caleb’s vocabulary is incredible, and Deborah, who is just in Nursery, can read three-letter words fluently. It is worth every single naira!",
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
    },
    {
      id: 'testy-2',
      author: 'Mr. Chinedu Okafor',
      relation: 'Father of Daniel Okafor (Grade 5 class)',
      rating: 5,
      text: "Daniel used to struggle with mathematics. The highly restricted class sizes and dedicated teachers at Echelon turned his results around completely. Now, he does algebra calculations comfortably and is even learning basic computing inside their new ICT Lab.",
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    },
    {
      id: 'testy-3',
      author: 'Mrs. Amina Yusuf',
      relation: 'Mother of Halima (Creche & Early Years)',
      rating: 5,
      text: "Safety, perimeter security, and complete sanitization were my absolute concerns when searching for a creche in Ikotun, Lagos. Echelon has exceeded my goals. Their toddler zone is clean, fully padded, and the caregivers have a beautiful heart.",
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonialsList.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonialsList.length - 1 ? 0 : prev + 1));
  };

  // Autoplay intervals
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8500);
    return () => clearInterval(timer);
  }, []);

  const currentTesty = testimonialsList[activeIndex];

  return (
    <section id="testimonials" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-echelon-blue/5 rounded-full filter blur-3xl -z-5"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-echelon-gold/5 rounded-full filter blur-3xl -z-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F4B400] font-mono bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
            Parent Outpours & Reviews
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase font-display text-center leading-[1.05]">
            What Echelon Families <span className="text-echelon-blue font-serif italic tracking-wide lowercase italic font-normal">are saying</span>
          </h2>
          <p className="text-slate-400 font-light text-sm md:text-base leading-relaxed text-center">
            Nothing testifies to academic precision and loving care better than parent evaluations. Read live experiences from homes around our campus.
          </p>
        </div>

        {/* Testimonial Active Slider Display */}
        <div className="max-w-4xl mx-auto bg-slate-950/45 border border-white/5 p-8 md:p-12 rounded-3xl shadow-xl flex flex-col md:flex-row gap-8 md:gap-10 items-center text-left relative">
          
          {/* Big Quote Accent decoration */}
          <div className="absolute top-6 right-8 text-white/5 flex-shrink-0">
            <Quote className="w-24 h-24 stroke-[1]" />
          </div>

          {/* Left Block: Parent Photo & Title */}
          <div className="text-center md:text-left flex-shrink-0 space-y-4">
            <div className="relative w-24 h-24 mx-auto md:mx-0 rounded-2xl overflow-hidden border-2 border-slate-700 p-0.5">
              <img
                src={currentTesty.avatar}
                alt={currentTesty.author}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div>
              <h4 className="font-bold text-base md:text-lg font-display text-white">{currentTesty.author}</h4>
              <p className="text-xs text-echelon-blue font-mono mt-1 font-semibold leading-relaxed max-w-56">{currentTesty.relation}</p>
            </div>
          </div>

          {/* Right Block: Content & Ratings */}
          <div className="flex-1 space-y-5">
            {/* Visual Gold Stars ratings */}
            <div className="flex items-center gap-1">
              {[...Array(currentTesty.rating)].map((_, i) => (
                <Star key={i} className="w-4.5 h-4.5 text-echelon-gold fill-[#F4B400] stroke-none" />
              ))}
              <span className="text-xs text-[#F4B400] font-bold font-mono ml-2">5.0 / 5.0 Rating</span>
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-sm md:text-base text-slate-300 leading-relaxed font-light italic">
              "{currentTesty.text}"
            </blockquote>

            {/* Verified Parent Label */}
            <div className="text-[10px] font-bold font-mono text-slate-500 uppercase tracking-widest">
              ✓ VERIFIED PARENT SUBMISSION
            </div>
          </div>
        </div>

        {/* Carousel Navigation Arrows & Indicators */}
        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={handlePrev}
            className="p-3 bg-slate-800 hover:bg-slate-705 text-white rounded-xl transition-all hover:scale-105 active:scale-95 border border-slate-700/50"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {testimonialsList.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'w-8 bg-echelon-gold' : 'w-2.5 bg-slate-700'
                }`}
              ></button>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 bg-slate-800 hover:bg-slate-705 text-white rounded-xl transition-all hover:scale-105 active:scale-95 border border-slate-700/50"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
