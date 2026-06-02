import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, ChevronDown, ChevronUp, ExternalLink, HelpCircle } from 'lucide-react';

export default function Contact() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // WhatsApp helper link
  const whatsappNumber = '2348148452841';
  const whatsappText = encodeURIComponent("Hello Echelon Schools admissions team. My name is [Name] and I am inquiring about nursery/primary enrollment for my child. Please guide me on next steps.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  const faqs = [
    {
      q: 'What is the teacher-to-student ratio at Echelon?',
      a: 'We strictly regulate our classroom density. Our Creche operates at 1 teacher to 3 infants, Toddlers/Early Years at 1:10, and Primary classrooms at approximately 1 teacher to 18 pupils max. This guarantees bespoke, continuous attention.',
    },
    {
      q: 'Which neighborhoods does the school bus cover?',
      a: 'Our school bus service offers reliable pickup and dropoff routes spanning major corridors in Ikotun, Idimu, Egbeda, Alimosho, Akowonjo, and nearby sub-regions. GPS tracking and experienced transit chaperones accompany every ride.',
    },
    {
      q: 'Does Echelon offer bilingual options or digital skills?',
      a: 'Yes, absolutely. We introduce bilingual literacy early, teaching French along with local cultural languages. In addition, basic computer keyboard literacy and visual drag-and-drop coding are integrated into our ICT computer laboratory curriculum.',
    },
    {
      q: 'What are the school uniform requirements?',
      a: 'Registered pupils receive two packs of our premium branded school uniforms, sportswear for Inter-house activities, and custom cardigans. Shoes are recommended to be closed black leather, and white canvas socks.',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50 relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* ROW 1: BRIEF TITLE */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#F4B400] font-mono bg-[#F4B400]/10 px-3.5 py-1.5 rounded-full border border-amber-200">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase font-display leading-[1.05]">
            Contact Echelon Schools <span className="text-echelon-blue font-serif italic tracking-wide lowercase italic font-normal">enquiries team</span>
          </h2>
          <p className="text-slate-500 font-light text-sm md:text-base leading-relaxed">
            Have questions about tuition fees, campus enrollment guidelines, or academic calendar structures? Connect with our caring administrative desks today.
          </p>
        </div>

        {/* ROW 2: CONTACT DETAILS & ACCORDION DUAL GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Traditional Details Card */}
          <div className="lg:col-span-5 space-y-7 text-left">
            <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-slate-900 font-display border-b border-slate-50 pb-3">
                Contact Information
              </h3>

              {/* Address card */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-echelon-blue flex items-center justify-center flex-shrink-0 border border-blue-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold font-display text-slate-950 uppercase block">School Campus Addresses</span>
                  <p className="text-xs text-slate-500 leading-relaxed font-light mt-1">
                    Suite 4, Echelon Way, off Idimu-Ikotun Road, Alimosho LGA, Lagos State, Nigeria.
                  </p>
                </div>
              </div>

              {/* Telephone Card */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0 border border-amber-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold font-display text-slate-950 uppercase block">Phone Admissions Desk</span>
                  <a href="tel:+2348148452841" className="text-sm font-bold text-slate-800 hover:text-echelon-blue block mt-1 transition-colors">
                    +234 814 845 2841
                  </a>
                  <a href="tel:+2348031234567" className="text-xs text-slate-500 hover:text-echelon-blue block mt-0.5 transition-colors">
                    +234 803 123 4567 (Secondary Desk)
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0 border border-purple-100">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold font-display text-slate-950 uppercase block">Official Email Address</span>
                  <a href="mailto:info@echelonschools.com.ng" className="text-sm font-medium text-slate-800 hover:text-echelon-blue block mt-1 transition-colors">
                    info@echelonschools.com.ng
                  </a>
                </div>
              </div>

              {/* Admin Hours Card */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 border border-emerald-100">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold font-display text-slate-950 uppercase block">Visiting Hours</span>
                  <p className="text-xs text-slate-500 font-light mt-1 leading-relaxed">
                    Monday – Friday: 7:30 AM – 4:30 PM<br />
                    Saturday Visitor desk: 9:00 AM – 1:00 PM
                  </p>
                </div>
              </div>

              {/* WHATSAPP CLICK TO INTEGRATE CHAT */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-12 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl font-bold font-display text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/10"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat live on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Block: Expansion Accordion */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm space-y-6">
              <div className="flex items-center gap-2 border-b border-slate-50 pb-3">
                <HelpCircle className="w-5.5 h-5.5 text-echelon-blue" />
                <h3 className="text-lg font-bold text-slate-900 font-display">
                  Admissions FAQs for Parents
                </h3>
              </div>
              
              <div className="space-y-4">
                {faqs.map((faq, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-slate-100 rounded-xl overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => setActiveFaq(isOpen ? null : idx)}
                        className="w-full p-4 flex justify-between items-center bg-slate-50/50 hover:bg-slate-50 text-left transition-colors"
                      >
                        <span className="font-bold text-slate-800 text-xs sm:text-sm font-display pr-4">{faq.q}</span>
                        {isOpen ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                      </button>
                      
                      {isOpen && (
                        <div className="p-4 bg-white border-t border-slate-100 font-light text-slate-500 text-xs leading-relaxed">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

        {/* ROW 3: GOOGLE MAPS EMBED */}
        <div className="mt-12 text-left">
          <div className="bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 shadow-sm overflow-hidden">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-50 pb-5 mb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-display flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-echelon-blue" />
                  <span>School Location Map</span>
                </h3>
                <p className="text-xs text-slate-500 font-light mt-1">
                  Suite 4, Echelon Way, off Idimu-Ikotun Road, Alimosho LGA, Lagos State, Nigeria.
                </p>
              </div>
              <a 
                href="https://maps.google.com/?q=Ikotun,Lagos" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs font-bold text-echelon-blue hover:text-echelon-blue-hover flex items-center gap-1.5 bg-blue-50 px-3.5 py-2 rounded-xl border border-blue-100 transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="w-full h-80 sm:h-[400px] rounded-xl overflow-hidden border border-slate-100 shadow-inner relative">
              <iframe
                title="Echelon Schools Campus Map"
                src="https://maps.google.com/maps?q=Suite%204,%20Echelon%20Way,%20off%20Idimu-Ikotun%20Road,%20Alimosho,%20Lagos&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
