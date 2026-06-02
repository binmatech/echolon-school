import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, ArrowUp, GraduationCap } from 'lucide-react';
import SchoolLogo from './SchoolLogo';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { label: 'Facebook', url: 'https://facebook.com', icon: Facebook },
    { label: 'Twitter', url: 'https://twitter.com', icon: Twitter },
    { label: 'Instagram', url: 'https://instagram.com', icon: Instagram },
  ];

  const quickLinks = [
    { label: 'About History and Mission', href: '#about-echelon' },
    { label: 'Why Choose Echelon', href: '#why-echelon' },
    { label: 'Academic Programs', href: '#programs' },
    { label: 'Resource Facilities', href: '#facilities' },
    { label: 'Photo Gallery', href: '#gallery' },
    { label: 'Parents Testimonials', href: '#testimonials' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-100 pt-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: School Identity */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <SchoolLogo size="md" showText={true} className="text-white" />
            <p className="text-slate-400 text-xs md:text-sm font-light leading-relaxed max-w-sm">
              Echelon Nursery & Primary School is committed to academic absolute precision, early tech innovation, and disciplined moral integrity. Providing high-standard care and education to families across Lagos, Nigeria.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 pt-1">
              {socialLinks.map((soc) => (
                <a
                  key={soc.label}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-echelon-blue flex items-center justify-center hover:bg-echelon-blue hover:text-white transition-all hover:-translate-y-1"
                  title={soc.label}
                >
                  <soc.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="font-bold text-sm uppercase tracking-widest text-[#F4B400] font-mono border-b border-white/5 pb-2">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs text-slate-400 hover:text-echelon-blue transition-colors font-sans py-0.5"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Contacts Summary */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <h4 className="font-bold text-sm uppercase tracking-widest text-[#F4B400] font-mono border-b border-white/5 pb-2">
              Admissions Office
            </h4>
            <div className="space-y-3.5 text-xs text-slate-400 font-light">
              <div className="flex gap-3 items-start">
                <MapPin className="w-4.5 h-4.5 text-echelon-blue flex-shrink-0 mt-0.5" />
                <span>Suite 4, Echelon Way, along Idimu-Ikotun Road, Alimosho LGA, Lagos State, Nigeria.</span>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="w-4.5 h-4.5 text-echelon-gold flex-shrink-0" />
                <a href="tel:+2348148452841" className="hover:text-white transition-colors">+234 814 845 2841</a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="w-4.5 h-4.5 text-emerald-400 flex-shrink-0" />
                <a href="mailto:info@echelonschools.com.ng" className="hover:text-white transition-colors">info@echelonschools.com.ng</a>
              </div>
            </div>
          </div>

        </div>

        {/* Middle decorative border line */}
        <div className="w-full h-px bg-slate-900 my-10"></div>

        {/* Bottom Credits and scroll back to top */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-mono">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Echelon Schools. All Rights Reserved.</span>
            <span className="hidden sm:inline">|</span>
            <span className="font-sans font-semibold text-slate-400">
              Designed & Developed by <a href="#" className="hover:text-[#F4B400] transition-colors">Quotients Digital Horizon Ltd</a>
            </span>
          </div>
          
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all font-sans font-bold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
