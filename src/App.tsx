import React, { useState } from 'react';
import { GraduationCap, Phone, Sparkles, CheckSquare, HeartHandshake } from 'lucide-react';

// Custom Modular Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import WhyChooseUs from './components/WhyChooseUs';
import Programs from './components/Programs';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Admissions from './components/Admissions';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ToursAndAdmissionsPortal from './components/ToursAndAdmissionsPortal';

export default function App() {
  // Global Admissions or Tour popup state controllers
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [isBookTourOpen, setIsBookTourOpen] = useState(false);

  // Success Feedback
  const handlePortalSuccess = (type: 'apply' | 'tour') => {
    console.log(`Successfully completed parent portal action: ${type}`);
  };

  return (
    <div className="relative bg-white text-slate-900 min-h-screen font-sans selection:bg-echelon-blue selection:text-white">
      {/* Dynamic Navigation Sticky Header */}
      <Navbar
        onApplyClick={() => setIsApplyOpen(true)}
        onBookTourClick={() => setIsBookTourOpen(true)}
      />

      {/* Main Sections Body */}
      <main className="outline-none ring-0">
        
        {/* HERO BANNER SECTION */}
        <Hero
          onApplyClick={() => setIsApplyOpen(true)}
          onBookTourClick={() => setIsBookTourOpen(true)}
        />

        {/* SECTION 1 & 4: ABOUT HISTORY & ANIMATED STATISTICS EXCELLENCE COUNTERS */}
        <AboutUs />

        {/* SECTION 2: WHY CHOOSE ECHELON */}
        <WhyChooseUs />

        {/* SECTION 3: ACADEMIC CURRICULUMS & PROGRAMS */}
        <Programs onApplyClick={() => setIsApplyOpen(true)} />

        {/* SECTION 5: WORLD CLASS INFRASTRUCTURAL FACILITIES */}
        <Facilities />

        {/* SECTION 6: MOSAIC GALLERY COLLAGE */}
        <Gallery />

        {/* SECTION 7: TESTIMONIALS CAROUSEL */}
        <Testimonials />

        {/* SECTION 8: ADMISSIONS ONBOARDING PATHWAYS */}
        <Admissions
          onApplyClick={() => setIsApplyOpen(true)}
          onBookTourClick={() => setIsBookTourOpen(true)}
        />

        {/* SECTION 9: ADDRESS, WHATSAPP CHAT, FAQS, GOOGLE MAPS */}
        <Contact />

        {/* SECTION 10: FINAL CTA BANNER */}
        <section id="final-cta-section" className="py-20 relative bg-slate-950 overflow-hidden text-center">
          {/* Accent graphics background */}
          <div className="absolute inset-0 bg-gradient-to-r from-echelon-blue/15 to-[#F4B400]/10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-140 h-140 bg-echelon-blue/5 rounded-full filter blur-3xl -z-5"></div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
            <div className="inline-flex p-3 rounded-2xl bg-[#F4B400]/10 border border-[#F4B400]/15 text-[#F4B400] mx-auto animate-bounce mb-2">
              <HeartHandshake className="w-8 h-8" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
              Give Your Child the Echelon Advantage
            </h2>
            
            <p className="text-slate-300 text-sm md:text-base font-light max-w-2xl mx-auto leading-relaxed">
              Academic excellence, world-class smart labs, moral discipline, and bespoke attention are not items we compromise on. Begin your child's journey toward globally competitive leadership today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-4">
              <button
                onClick={() => setIsApplyOpen(true)}
                className="w-full sm:w-auto px-8 h-13 bg-echelon-blue hover:bg-echelon-blue-hover text-white rounded-xl font-bold font-display text-xs uppercase tracking-wider transition-colors shadow-lg shadow-blue-500/15"
              >
                Apply Now For Admission
              </button>
              
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 h-13 bg-white/5 border border-white/10 hover:border-white/20 text-white rounded-xl font-bold font-display text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1 hover:bg-white/10"
              >
                <span>Contact Administrative Team</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER quick links, credits and brand copyright marks */}
      <Footer />

      {/* SECURE SUBMISSIONS PORTAL OVERLAY */}
      <ToursAndAdmissionsPortal
        isApplyOpen={isApplyOpen}
        setIsApplyOpen={setIsApplyOpen}
        isBookTourOpen={isBookTourOpen}
        setIsBookTourOpen={setIsBookTourOpen}
        onSuccess={handlePortalSuccess}
      />
    </div>
  );
}
