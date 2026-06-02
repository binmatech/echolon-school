import React, { useState } from 'react';
import { MapPin, Navigation, Map as MapIcon, Compass, Bus, Clock, Calendar, CheckCircle2, ChevronRight, Copy, ExternalLink, ShieldAlert } from 'lucide-react';

interface NeighborhoodZone {
  name: string;
  distance: string;
  time: string;
  pickupTime: string;
  zone: 'Cover Area A' | 'Cover Area B' | 'Special Request Only';
  fee: string;
  busCoordinator: string;
}

export default function CampusMap() {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string>('Ikotun Central');
  const [copiedLink, setCopiedLink] = useState(false);

  const neighborhoods: NeighborhoodZone[] = [
    {
      name: 'Ikotun Central',
      distance: '1.2 km',
      time: '6 mins driving',
      pickupTime: '07:15 AM',
      zone: 'Cover Area A',
      fee: '₦12,500/term',
      busCoordinator: 'Mr. Olotu (0803 123 4567)'
    },
    {
      name: 'Idimu Expressway',
      distance: '2.5 km',
      time: '12 mins driving',
      pickupTime: '07:02 AM',
      zone: 'Cover Area A',
      fee: '₦15,000/term',
      busCoordinator: 'Mr. Olotu (0803 123 4567)'
    },
    {
      name: 'Egbeda / Ponle',
      distance: '4.8 km',
      time: '18 mins driving',
      pickupTime: '06:45 AM',
      zone: 'Cover Area B',
      fee: '₦18,000/term',
      busCoordinator: 'Mrs. Adebayo (0814 845 2841)'
    },
    {
      name: 'Alimosho Council Stop',
      distance: '3.1 km',
      time: '14 mins driving',
      pickupTime: '06:55 AM',
      zone: 'Cover Area A',
      fee: '₦15,000/term',
      busCoordinator: 'Mr. Olotu (0803 123 4567)'
    },
    {
      name: 'Akowonjo / Miccom',
      distance: '6.2 km',
      time: '24 mins driving',
      pickupTime: '06:30 AM',
      zone: 'Cover Area B',
      fee: '₦22,000/term',
      busCoordinator: 'Mrs. Adebayo (0814 845 2841)'
    },
    {
      name: 'Igando / General Hospital',
      distance: '5.5 km',
      time: '22 mins driving',
      pickupTime: '06:35 AM',
      zone: 'Special Request Only',
      fee: '₦25,000/term',
      busCoordinator: 'Mrs. Adebayo (0814 845 2841)'
    }
  ];

  const currentDetails = neighborhoods.find(n => n.name === selectedNeighborhood) || neighborhoods[0];

  const handleCopyPlusCode = () => {
    navigator.clipboard.writeText('GG83+3PX Alimosho, Lagos, Nigeria');
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const googleMapsUrl = 'https://maps.google.com/?q=Idimu-Ikotun+Road,+Alimosho,+Lagos';

  return (
    <div className="mt-16 space-y-10">
      
      {/* SECTION BANNER LABELS */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-slate-900 text-white rounded-3xl p-8 border-l-8 border-echelon-blue shadow-lg">
        <div className="text-left space-y-2">
          <div className="inline-flex items-center gap-2 bg-echelon-blue/10 px-3 py-1.5 rounded-md border border-echelon-blue/20">
            <Compass className="w-4 h-4 text-echelon-blue animate-spin" />
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#00AEEF] font-mono">Precision Campus Navigation</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight font-display text-white">
            Echelon Navigation & Transit Hub
          </h3>
          <p className="text-slate-400 font-light text-xs md:text-sm max-w-xl leading-relaxed">
            Locate our premium administrative blocks and smart halls. Estimate exact transit timelines, driving distance intervals, and school bus routes.
          </p>
        </div>
        
        {/* Rapid Actions */}
        <div className="flex flex-wrap gap-2.5">
          <button
            onClick={handleCopyPlusCode}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-echelon-blue hover:bg-[#00AEEF]/5 text-xs text-slate-200 transition-all font-mono"
          >
            <Copy className="w-4 h-4 text-[#00AEEF]" />
            <span>{copiedLink ? 'Copied plus code!' : 'Copy Plus Code'}</span>
          </button>
          
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-echelon-blue hover:bg-echelon-blue-hover text-white text-xs font-bold transition-all shadow-md shadow-blue-500/10 uppercase tracking-wider"
          >
            <span>Open in Google Maps App</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* DUAL DIVISION ROW */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* COLUMN 1: INTERACTIVE MAP WRAPPER WITH OVERLAYS */}
        <div className="lg:col-span-8 relative flex flex-col justify-between">
          
          {/* MAP CANVAS CONTEXT */}
          <div className="w-full relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl h-100 md:h-120 group">
            
            {/* GOOGLE MAPS IFRAME INTEGRATION */}
            <iframe
              title="Official Echelon Nursery and Primary Campus Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15856.332308696752!2d3.2420935327263593!3d6.51119566270417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b84dfbe5df93f%3A0xe5a363cbdf53eb2b!2sIkotun%2C%20Lagos!5e0!3m2!1sen!2sng!4v1717329524029!5m3!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full grayscale-[10%] brightness-[95%] contrast-[105%] filter group-hover:grayscale-0 transition-all duration-700"
            ></iframe>

            {/* FLOATING QUICK CARD - CAMPUS BADGE */}
            <div className="absolute bottom-5 left-5 right-5 md:right-auto bg-slate-950/95 backdrop-blur-md text-white p-5 rounded-2xl shadow-2xl border border-white/10 max-w-sm text-left transition-transform duration-300 group-hover:translate-y-[-2px] space-y-3.5">
              <div className="flex gap-2.5 items-center">
                <div className="w-8 h-8 rounded-lg bg-[#00AEEF] flex items-center justify-center text-white text-base font-bold font-mono">
                  E
                </div>
                <div>
                  <h4 className="font-extrabold text-[13px] tracking-wide uppercase leading-tight font-display">Echelon Primary Campus</h4>
                  <p className="text-[10px] text-slate-400 font-mono">6.5492° N, 3.2505° E</p>
                </div>
              </div>
              
              <div className="space-y-1.5 text-xs text-slate-300 font-light font-sans">
                <p className="flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-[#F4B400] flex-shrink-0 mt-0.5" />
                  <span>Suite 4, Echelon Way, Idimu-Ikotun Rd, Alimosho Local Govt, Lagos.</span>
                </p>
              </div>

              <div className="pt-2 border-t border-white/5 flex justify-between items-center text-[10px] font-bold text-[#00AEEF] font-mono tracking-wider">
                <span>ACTIVE ADMISSIONS HUBS</span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-emerald-400">VISIT DESK LIVE</span>
                </span>
              </div>
            </div>

          </div>

          <div className="mt-3 flex items-center gap-2 text-[10px] text-slate-400 font-mono uppercase font-semibold text-left">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF]"></span>
            <span>Real-time maps proxy synchronized via GPS satelite. Safe transport routes audited daily.</span>
          </div>

        </div>

        {/* COLUMN 2: SCHOOL BUS TRANSIT ROUTE ESTIMATOR */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div className="bg-white rounded-3xl border border-slate-150 p-6 shadow-xl flex flex-col justify-between h-full space-y-6 text-left">
            
            {/* Hub Header */}
            <div>
              <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3 mb-5">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-echelon-blue flex items-center justify-center border border-blue-100">
                  <Bus className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-slate-900 font-display tracking-tight uppercase">Bus Service Estimator</h4>
                  <span className="text-[10px] text-[#F4B400] font-bold tracking-wider font-mono uppercase block">Check cover zone timing</span>
                </div>
              </div>

              {/* Tool Guide text */}
              <p className="text-slate-500 font-light text-[11px] leading-relaxed mb-4">
                We operate multiple comfortable, air-conditioned co-curricular vans. Select your family neighborhood zone to verify approximate pickup timing brackets:
              </p>

              {/* Selector form */}
              <div className="space-y-4">
                <div>
                  <label className="text-[10px] tracking-wider uppercase font-extrabold text-slate-800 font-mono block mb-2">
                    Pickup Neighborhood Zone
                  </label>
                  <select
                    value={selectedNeighborhood}
                    onChange={(e) => setSelectedNeighborhood(e.target.value)}
                    className="w-full h-11 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold font-sans text-slate-900 focus:outline-none focus:ring-2 focus:ring-echelon-blue focus:bg-white transition-all"
                  >
                    {neighborhoods.map((n) => (
                      <option key={n.name} value={n.name}>
                        {n.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Grid stats */}
                <div className="bg-slate-50 p-4.5 rounded-2xl border border-slate-100 space-y-3 font-sans">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500 font-light">Distance to School:</span>
                    <span className="font-bold text-slate-900 font-mono">{currentDetails.distance}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500 font-light">Traffic Bracket Time:</span>
                    <span className="font-medium text-slate-800 ">{currentDetails.time}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500 font-light">Morning Pickup Time:</span>
                    <span className="font-extrabold text-[#00AEEF] flex items-center gap-1 font-mono">
                      <Clock className="w-3.5 h-3.5" />
                      {currentDetails.pickupTime}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500 font-light">Estimated Fee Index:</span>
                    <span className="font-bold text-emerald-600 font-sans">{currentDetails.fee}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs pt-2.5 border-t border-slate-200/60">
                    <span className="text-[10px] text-slate-400 font-extrabold uppercase font-mono">System Safety Zone:</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full font-mono uppercase ${
                      currentDetails.zone === 'Cover Area A' ? 'bg-emerald-50 text-emerald-700 border border-emerald-150' : 
                      currentDetails.zone === 'Cover Area B' ? 'bg-blue-50 text-blue-700 border border-blue-150' : 
                      'bg-amber-50 text-amber-700 border border-amber-150'
                    }`}>
                      {currentDetails.zone}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Coordinator and Safety Guarantee */}
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-orange-50/50 border border-orange-100 space-y-1">
                <span className="text-[10px] font-bold text-orange-700 tracking-wider uppercase font-mono flex items-center gap-1">
                  <ShieldAlert className="w-3.5 h-3.5 text-orange-600" />
                  Route Coordinator
                </span>
                <p className="text-[11px] font-semibold text-slate-800 font-sans leading-normal">
                  {currentDetails.busCoordinator}
                </p>
                <p className="text-[9px] text-slate-400 font-light leading-normal">
                  Call our transport department directly for physical confirmation of private street tracking.
                </p>
              </div>

              {/* Transit guarantees checklist icon bar */}
              <div className="flex items-center gap-1.5 text-[9px] font-bold text-slate-400 uppercase tracking-widest font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>GPS Monitored • Trained Escorts</span>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
