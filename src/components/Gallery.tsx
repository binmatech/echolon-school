import React, { useState } from 'react';
import { Camera, Eye, X, ChevronLeft, ChevronRight, Share2 } from 'lucide-react';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'classroom' | 'events' | 'sports' | 'culture' | 'graduation'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'gal-1',
      url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
      title: 'Active Scientific Discovery Class',
      category: 'classroom',
      description: 'Primary 4 students learning interactive chemical reaction basics in our smart science lab.',
    },
    {
      id: 'gal-2',
      url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
      title: 'Echelon Annual Spelling Bee Contest',
      category: 'events',
      description: 'Lively inter-house spelling context honoring vocabulary excellence across grades.',
    },
    {
      id: 'gal-3',
      url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800',
      title: 'Cultural Diversity Day Lagos',
      category: 'culture',
      description: 'Celebrating rich Nigerian heritage through traditional Yoruba, Igbo, and Hausa dressing and dance.',
    },
    {
      id: 'gal-4',
      url: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800',
      title: 'Inter-House Sports Festival',
      category: 'sports',
      description: 'Teaching team bonding, physical coordination, speed, and endurance goals.',
    },
    {
      id: 'gal-5',
      url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800',
      title: 'Kindergarten Graduation Ceremony',
      category: 'graduation',
      description: 'Honoring our young toddlers moving with pride and poise into Primary 1 classes.',
    },
    {
      id: 'gal-6',
      url: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80&w=800',
      title: 'Hands-on Clay Sculpting & Art Session',
      category: 'culture',
      description: 'Creepy molding and colors drawing to unlock manual fine-motor dexterity in preschool.',
    },
  ];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const categories = [
    { value: 'all', label: 'All Photos' },
    { value: 'classroom', label: 'Classroom Life' },
    { value: 'events', label: 'School Events' },
    { value: 'sports', label: 'Sports Days' },
    { value: 'culture', label: 'Cultural Activity' },
    { value: 'graduation', label: 'Graduation' },
  ];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => {
        if (prev === null) return 0;
        return prev === 0 ? filteredItems.length - 1 : prev - 1;
      });
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(prev => {
        if (prev === null) return 0;
        return prev === filteredItems.length - 1 ? 0 : prev + 1;
      });
    }
  };

  return (
    <section id="gallery" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F4B400] font-mono bg-[#F4B400]/10 px-3.5 py-1.5 rounded-full border border-amber-100">
            Pupil Experiences
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase font-display text-center leading-[1.05]">
            School Life & <span className="text-echelon-blue font-serif italic tracking-wide lowercase italic font-normal">memories gallery</span>
          </h2>
          <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed text-center">
            A visual overview celebrating our multi-cultural festivities, rigorous classroom engagements, academic graduations, and energetic track games.
          </p>
        </div>

        {/* Categories filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-3xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => { setActiveFilter(cat.value as any); setLightboxIndex(null); }}
              className={`h-10 px-4 py-2 text-xs font-bold font-display tracking-wide rounded-xl transition-all duration-300 ${
                activeFilter === cat.value
                  ? 'bg-slate-950 text-white shadow shadow-slate-950/20'
                  : 'bg-slate-50 text-slate-600 border border-slate-100/50 hover:bg-slate-150'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Interactive Mosaic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="group cursor-pointer rounded-2xl bg-white border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left"
            >
              {/* Image box */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={item.url}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Active Hover overlays */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white">
                    <Eye className="w-6 h-6" />
                  </div>
                </div>

                {/* Micro tag category */}
                <span className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur-sm text-white text-[9px] font-bold font-mono uppercase tracking-widest px-2.5 py-1 rounded">
                  {item.category}
                </span>
              </div>

              {/* Title descriptions */}
              <div className="p-4 space-y-1">
                <h4 className="font-bold text-slate-900 text-sm font-display line-clamp-1 group-hover:text-echelon-blue transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-500 text-xs font-light line-clamp-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 5. LIGHTBOX OVERLAY GRAPHICS MODAL */}
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-sm flex flex-col items-center justify-center p-4">
            {/* Close Button details */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all hover:scale-110"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Slider container */}
            <div className="relative max-w-4xl w-full flex items-center justify-center">
              {/* Left Arrow */}
              <button
                onClick={handlePrev}
                className="absolute left-2 md:-left-12 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-15"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Central high resolution display */}
              <div className="space-y-4 max-w-full text-center">
                <div className="rounded-2xl overflow-hidden max-h-[70vh] border border-white/10 shadow-2xl flex justify-center bg-slate-900">
                  <img
                    src={filteredItems[lightboxIndex].url}
                    alt={filteredItems[lightboxIndex].title}
                    referrerPolicy="no-referrer"
                    className="object-contain max-h-[70vh] w-auto max-w-full"
                  />
                </div>
                
                {/* Meta details text */}
                <div className="text-white max-w-lg mx-auto space-y-1.5 p-2">
                  <span className="text-[10px] font-mono tracking-widest text-[#F4B400] font-bold uppercase">
                    {filteredItems[lightboxIndex].category} Photo • {lightboxIndex + 1} of {filteredItems.length}
                  </span>
                  <h3 className="text-lg font-bold font-display">{filteredItems[lightboxIndex].title}</h3>
                  <p className="text-xs text-slate-400 font-light">{filteredItems[lightboxIndex].description}</p>
                </div>
              </div>

              {/* Right Arrow */}
              <button
                onClick={handleNext}
                className="absolute right-2 md:-right-12 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-15"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
