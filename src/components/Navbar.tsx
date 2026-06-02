import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, GraduationCap, Calendar, ShieldCheck, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import SchoolLogo from './SchoolLogo';

interface NavbarProps {
  onApplyClick: () => void;
  onBookTourClick: () => void;
}

export default function Navbar({ onApplyClick, onBookTourClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor Scroll for sticky navbar shrinkage & background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About Us', href: '#about-echelon' },
    { label: 'Why Choose Us', href: '#why-echelon' },
    { label: 'Our Programs', href: '#programs' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* 1. TOP UTILITY HEADER BAR */}
      <div 
        className={`bg-slate-900 text-slate-100 text-[11px] md:text-xs relative border-b border-slate-800 transition-all duration-300 overflow-hidden ${
          isScrolled 
            ? 'max-h-0 py-0 opacity-0 border-none' 
            : 'max-h-20 py-2.5 px-4 sm:px-6 opacity-100 animate-fade-in'
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Quick Contact Info */}
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 text-slate-300">
            <a href="tel:+2348148452841" className="flex items-center gap-1.5 hover:text-echelon-blue transition-colors">
              <Phone className="w-3.5 h-3.5 text-echelon-blue" />
              <span>+234 814 845 2841</span>
            </a>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <a href="mailto:info@echelonschools.com.ng" className="flex items-center gap-1.5 hover:text-echelon-blue transition-colors">
              <Mail className="w-3.5 h-3.5 text-echelon-gold" />
              <span>info@echelonschools.com.ng</span>
            </a>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-rose-400" />
              <span>Ikotun & Idimu, Lagos, Nigeria</span>
            </div>
          </div>
          
          {/* Top Actions & Motto */}
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] text-echelon-gold font-bold tracking-wider hidden md:inline uppercase bg-[#F4B400]/10 px-2 py-0.5 rounded border border-[#F4B400]/15">
              Motto: "Desire for Knowledge"
            </span>
            <span className="text-slate-700 hidden md:inline">|</span>
            {/* Quick Portals */}
            <div className="flex items-center gap-3">
              <a
                href="#admissions"
                className="hover:text-echelon-blue font-bold font-display transition-colors flex items-center gap-1 text-slate-100"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Admissions 2026/2027 Open</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN STICKY BRAND NAVIGATION BAR */}
      <nav
        id="navbar-sticky-header"
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 text-slate-900 border-b border-slate-100'
            : 'bg-transparent text-white py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Dynamic Logo Crest with White/Dark adaptation */}
          <a href="#" className="cursor-pointer">
            <SchoolLogo
              size="md"
              showText={true}
              className={`transition-colors duration-300 ${
                isScrolled ? 'text-slate-950' : 'text-white'
              }`}
            />
          </a>

          {/* Desktop Primary Nav Items */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-semibold tracking-wide hover:-translate-y-0.5 transition-all relative py-1 font-display hover:text-echelon-blue group ${
                  isScrolled ? 'text-slate-700' : 'text-slate-200'
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-echelon-blue transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Desktop CTA Action buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              id="nav-tour-btn"
              onClick={onBookTourClick}
              className={`h-10 px-4 rounded-xl text-xs font-bold font-display tracking-wider uppercase transition-all flex items-center gap-1.5 ${
                isScrolled
                  ? 'border border-slate-200 text-slate-700 hover:bg-slate-50'
                  : 'border border-white/20 text-white hover:bg-white/10 bg-white/5 backdrop-blur-sm'
              }`}
            >
              <Calendar className="w-3.5 h-3.5 text-echelon-gold" />
              <span>Book Tour</span>
            </button>
            
            <button
              id="nav-apply-btn"
              onClick={onApplyClick}
              className="h-10 px-4 bg-echelon-blue text-white rounded-xl text-xs font-bold font-display tracking-wider uppercase hover:bg-echelon-blue-hover transition-all flex items-center gap-1.5 shadow-md shadow-blue-500/10 hover:scale-102"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Apply Now</span>
            </button>
          </div>

          {/* Mobile Menu Open Toggle */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={onApplyClick}
              className="h-8.5 px-3 bg-echelon-blue text-white text-[11px] font-bold font-display rounded-lg uppercase flex items-center gap-1 shadow"
            >
              <GraduationCap className="w-3 h-3" />
              <span>Apply</span>
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-xl transition-colors ${
                isScrolled ? 'bg-slate-100 text-slate-800' : 'bg-white/10 text-white'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* 3. MOBILE DROP-DOWN MENU DRAWER */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Blur backdrop overlay to easily dismiss the menu */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="lg:hidden fixed inset-0 z-10 bg-slate-900/45 backdrop-blur-sm"
                style={{ top: '100%' }}
              />

              {/* Drawer dropdown panel */}
              <motion.div
                key="mobile-nav-menu"
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="lg:hidden absolute top-full left-0 w-full bg-white text-slate-950 border-b border-slate-200 shadow-xl py-6 px-4 space-y-5 z-20 overflow-y-auto max-h-[75vh]"
              >
                <div className="flex flex-col gap-3.5">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-base font-bold font-display text-slate-800 hover:text-echelon-blue border-b border-slate-100 pb-2.5 transition-colors block"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3.5 pt-2">
                  <button
                    onClick={() => { setIsMobileMenuOpen(false); onBookTourClick(); }}
                    className="h-11 border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-xl font-bold font-display text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-echelon-gold" />
                    <span>Visit Campus</span>
                  </button>
                  
                  <button
                    onClick={() => { setIsMobileMenuOpen(false); onApplyClick(); }}
                    className="h-11 bg-echelon-blue text-white rounded-xl font-bold font-display text-sm flex items-center justify-center gap-2 hover:bg-echelon-blue-hover transition-colors shadow-md shadow-blue-500/10 cursor-pointer"
                  >
                    <GraduationCap className="w-4 h-4" />
                    <span>Online Apply</span>
                  </button>
                </div>

                {/* Quick school info inside mobile panel */}
                <div className="bg-slate-50 p-3.5 rounded-xl text-center">
                  <p className="text-xs text-slate-500">Need immediate assistance with admission?</p>
                  <a href="tel:+2348148452841" className="text-sm font-bold text-echelon-blue flex items-center justify-center gap-1.5 mt-1 hover:underline">
                    <Phone className="w-4 h-4" /> +234 814 845 2841
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
