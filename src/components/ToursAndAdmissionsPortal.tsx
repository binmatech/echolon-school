import React, { useState, useEffect } from 'react';
import { X, Calendar, CheckCircle, GraduationCap, ArrowRight, User, Phone, Mail, MapPin, Clock, FileText, Check, AlertCircle } from 'lucide-react';
import { AdmissionApplication, TourBooking } from '../types';

interface PortalProps {
  isApplyOpen: boolean;
  setIsApplyOpen: (open: boolean) => void;
  isBookTourOpen: boolean;
  setIsBookTourOpen: (open: boolean) => void;
  onSuccess?: (type: 'apply' | 'tour') => void;
}

export default function ToursAndAdmissionsPortal({
  isApplyOpen,
  setIsApplyOpen,
  isBookTourOpen,
  setIsBookTourOpen,
  onSuccess
}: PortalProps) {
  // Persistence States
  const [applications, setApplications] = useState<AdmissionApplication[]>([]);
  const [tours, setTours] = useState<TourBooking[]>([]);
  const [showPortalHub, setShowPortalHub] = useState(false);

  // Form States
  const [applyForm, setApplyForm] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    gender: 'male' as 'male' | 'female',
    classGrade: 'Nursery 1',
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    address: '',
    additionalInfo: '',
  });

  const [tourForm, setTourForm] = useState({
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    preferredDate: '',
    preferredTime: '10:00 AM',
    gradeOfInterest: 'Primary 1',
  });

  // Success Feedback Toast/Modals
  const [justAppliedId, setJustAppliedId] = useState<string | null>(null);
  const [justBookedId, setJustBookedId] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Load from LocalStorage
  useEffect(() => {
    const savedApps = localStorage.getItem('echelon_admissions');
    const savedTours = localStorage.getItem('echelon_tours');
    if (savedApps) setApplications(JSON.parse(savedApps));
    if (savedTours) setTours(JSON.parse(savedTours));
  }, []);

  // Save changes to localStorage
  const saveApps = (newApps: AdmissionApplication[]) => {
    setApplications(newApps);
    localStorage.setItem('echelon_admissions', JSON.stringify(newApps));
  };

  const saveTours = (newTours: TourBooking[]) => {
    setTours(newTours);
    localStorage.setItem('echelon_tours', JSON.stringify(newTours));
  };

  // Submit App Handler
  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    // Dynamic Client Validation
    if (!applyForm.firstName || !applyForm.lastName || !applyForm.dob || !applyForm.parentName || !applyForm.parentPhone || !applyForm.parentEmail || !applyForm.address) {
      setValidationError('Please fill in all required fields marked with *');
      return;
    }

    const newApp: AdmissionApplication = {
      id: 'ECHS-APP-' + Math.floor(100000 + Math.random() * 900000),
      studentFirstName: applyForm.firstName,
      studentLastName: applyForm.lastName,
      studentDob: applyForm.dob,
      gender: applyForm.gender,
      classGrade: applyForm.classGrade,
      parentName: applyForm.parentName,
      parentPhone: applyForm.parentPhone,
      parentEmail: applyForm.parentEmail,
      residentialAddress: applyForm.address,
      additionalInfo: applyForm.additionalInfo,
      status: 'Received',
      dateSubmitted: new Date().toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' }),
    };

    const updated = [newApp, ...applications];
    saveApps(updated);
    setJustAppliedId(newApp.id);
    if (onSuccess) onSuccess('apply');

    // Reset Form (except parent details for convenience)
    setApplyForm(prev => ({
      ...prev,
      firstName: '',
      lastName: '',
      dob: '',
      additionalInfo: '',
    }));
  };

  // Submit Tour Booking Handler
  const handleTourSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    if (!tourForm.parentName || !tourForm.parentPhone || !tourForm.parentEmail || !tourForm.preferredDate) {
      setValidationError('Please enter all required contact fields and choose a preferred date');
      return;
    }

    const newTour: TourBooking = {
      id: 'ECHS-TOUR-' + Math.floor(10000 + Math.random() * 90000),
      parentName: tourForm.parentName,
      parentPhone: tourForm.parentPhone,
      parentEmail: tourForm.parentEmail,
      preferredDate: new Date(tourForm.preferredDate).toLocaleDateString('en-NG', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' }),
      preferredTime: tourForm.preferredTime,
      gradeOfInterest: tourForm.gradeOfInterest,
      status: 'Confirmed',
      dateBooked: new Date().toLocaleDateString('en-NG', { day: 'numeric', month: 'short', year: 'numeric' }),
    };

    const updated = [newTour, ...tours];
    saveTours(updated);
    setJustBookedId(newTour.id);
    if (onSuccess) onSuccess('tour');

    // Reset Form
    setTourForm(prev => ({
      ...prev,
      preferredDate: '',
    }));
  };

  const deleteApp = (id: string) => {
    const updated = applications.filter(a => a.id !== id);
    saveApps(updated);
  };

  const deleteTour = (id: string) => {
    const updated = tours.filter(t => t.id !== id);
    saveTours(updated);
  };

  return (
    <>
      {/* 1. APPLY FOR ADMISSION MODAL */}
      {isApplyOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/65 backdrop-blur-sm flex items-start sm:items-center justify-center p-2 sm:p-4">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[96vh] sm:max-h-[90vh]">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-echelon-blue to-blue-700 p-4 sm:p-6 text-white relative flex-shrink-0">
              <button
                onClick={() => { setIsApplyOpen(false); setJustAppliedId(null); setValidationError(null); }}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="p-2 sm:p-3 bg-white/15 rounded-xl flex-shrink-0">
                  <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-echelon-gold" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-display">Student Admission Application</h3>
                  <p className="text-xs sm:text-sm text-blue-100 mt-0.5">Echelon Nursery & Primary School Portal • Session 2026/2027</p>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1">
              {justAppliedId ? (
                /* Success screen */
                <div className="text-center py-8 px-4 flex flex-col items-center">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-4">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-950 font-display">Application Received Successfully!</h4>
                  <p className="text-slate-600 mt-2 max-w-md mx-auto">
                    We have received your child's application. Our admissions officer will contact you shortly to schedule an assessment.
                  </p>
                  
                  {/* Secure receipt slip */}
                  <div className="mt-6 p-5 bg-slate-50 border border-dashed border-slate-300 rounded-xl w-full text-left space-y-2.5 max-w-md font-mono text-xs">
                    <div className="flex justify-between pb-2 border-b border-slate-200 text-slate-800 font-bold font-sans">
                      <span>ECHELON SCHOOLS ADMISSIONS</span>
                      <span className="text-emerald-600">SUBMITTED</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Application No:</span>
                      <span className="font-bold text-slate-950">{justAppliedId}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Student Applied:</span>
                      <span className="font-bold text-slate-950">
                        {applications.find(a => a.id === justAppliedId)?.studentFirstName} {applications.find(a => a.id === justAppliedId)?.studentLastName}
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Class / Grade:</span>
                      <span className="font-bold text-slate-950">
                        {applications.find(a => a.id === justAppliedId)?.classGrade}
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Parent / Guardian:</span>
                      <span className="font-bold text-slate-950">
                        {applications.find(a => a.id === justAppliedId)?.parentName}
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Status:</span>
                      <span className="font-bold text-amber-600 uppercase">Received / Under Review</span>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full max-w-md">
                    <button
                      onClick={() => setJustAppliedId(null)}
                      className="w-full sm:flex-1 py-3 px-4 border border-slate-300 rounded-xl font-bold font-display hover:bg-slate-50 transition-colors text-slate-700 text-sm"
                    >
                      Apply Another Child
                    </button>
                    <button
                      onClick={() => { setIsApplyOpen(false); setJustAppliedId(null); setShowPortalHub(true); }}
                      className="w-full sm:flex-1 py-3 px-4 bg-echelon-blue text-white rounded-xl font-bold font-display hover:bg-echelon-blue-hover transition-colors text-sm flex items-center justify-center gap-1.5"
                    >
                      View Parent Hub <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                /* Primary apply form */
                <form onSubmit={handleApplySubmit} className="space-y-6">
                  {validationError && (
                    <div className="p-4 bg-rose-50 border-l-4 border-rose-500 rounded text-rose-800 flex items-start gap-2.5 text-sm">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 text-rose-600" />
                      <div>{validationError}</div>
                    </div>
                  )}

                  {/* Student Details Row */}
                  <div>
                    <h5 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 font-mono">1. Student Information</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Child's First Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Oluwaseun"
                          value={applyForm.firstName}
                          onChange={(e) => setApplyForm({ ...applyForm, firstName: e.target.value })}
                          className="w-full h-11 px-4 rounded-xl border border-slate-200 outline-none focus:border-echelon-blue transition-colors focus:ring-2 focus:ring-blue-100 text-sm font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Child's Last Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Adeleke"
                          value={applyForm.lastName}
                          onChange={(e) => setApplyForm({ ...applyForm, lastName: e.target.value })}
                          className="w-full h-11 px-4 rounded-xl border border-slate-200 outline-none focus:border-echelon-blue transition-colors focus:ring-2 focus:ring-blue-100 text-sm font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Date of Birth *</label>
                        <input
                          type="date"
                          required
                          value={applyForm.dob}
                          onChange={(e) => setApplyForm({ ...applyForm, dob: e.target.value })}
                          className="w-full h-11 px-4 rounded-xl border border-slate-200 outline-none focus:border-echelon-blue transition-colors focus:ring-2 focus:ring-blue-100 text-sm font-medium"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">Gender *</label>
                          <select
                            value={applyForm.gender}
                            onChange={(e) => setApplyForm({ ...applyForm, gender: e.target.value as 'male' | 'female' })}
                            className="w-full h-11 px-3 rounded-xl border border-slate-200 outline-none focus:border-echelon-blue transition-colors text-sm font-medium bg-white"
                          >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">Class/Grade *</label>
                          <select
                            value={applyForm.classGrade}
                            onChange={(e) => setApplyForm({ ...applyForm, classGrade: e.target.value })}
                            className="w-full h-11 px-3 rounded-xl border border-slate-200 outline-none focus:border-echelon-blue transition-colors text-sm font-medium bg-white"
                          >
                            <option value="Creche">Creche (3mnth +)</option>
                            <option value="Early Years">Early Years</option>
                            <option value="Nursery 1">Nursery 1 (Age 3)</option>
                            <option value="Nursery 2">Nursery 2 (Age 4)</option>
                            <option value="Primary 1">Primary 1 (Age 5+)</option>
                            <option value="Primary 2">Primary 2</option>
                            <option value="Primary 3">Primary 3</option>
                            <option value="Primary 4">Primary 4</option>
                            <option value="Primary 5">Primary 5</option>
                            <option value="Primary 6">Primary 6</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Parent Details Row */}
                  <div>
                    <h5 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 font-mono">2. Parent / Guardian Information</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Full Parent/Guardian Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Mr. & Mrs. Adeleke"
                          value={applyForm.parentName}
                          onChange={(e) => setApplyForm({ ...applyForm, parentName: e.target.value })}
                          className="w-full h-11 px-4 rounded-xl border border-slate-200 outline-none focus:border-echelon-blue transition-colors focus:ring-2 focus:ring-blue-100 text-sm font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 08031234567"
                          value={applyForm.parentPhone}
                          onChange={(e) => setApplyForm({ ...applyForm, parentPhone: e.target.value })}
                          className="w-full h-11 px-4 rounded-xl border border-slate-200 outline-none focus:border-echelon-blue transition-colors focus:ring-2 focus:ring-blue-100 text-sm font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. adeleke@gmail.com"
                          value={applyForm.parentEmail}
                          onChange={(e) => setApplyForm({ ...applyForm, parentEmail: e.target.value })}
                          className="w-full h-11 px-4 rounded-xl border border-slate-200 outline-none focus:border-echelon-blue transition-colors focus:ring-2 focus:ring-blue-100 text-sm font-medium"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Home Address in Lagos *</label>
                        <textarea
                          rows={2}
                          required
                          placeholder="e.g. Suite 4, Echelon Way, near Idimu-Ikotun Road, Lagos, Nigeria"
                          value={applyForm.address}
                          onChange={(e) => setApplyForm({ ...applyForm, address: e.target.value })}
                          className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:border-echelon-blue transition-colors focus:ring-2 focus:ring-blue-100 text-sm font-medium resize-none"
                        ></textarea>
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-slate-700 mb-1">Medical/Learning Concerns or Remarks (Optional)</label>
                        <textarea
                          rows={2}
                          placeholder="e.g. Left handed, minor peanut allergy..."
                          value={applyForm.additionalInfo}
                          onChange={(e) => setApplyForm({ ...applyForm, additionalInfo: e.target.value })}
                          className="w-full p-4 rounded-xl border border-slate-200 outline-none focus:border-echelon-blue transition-colors focus:ring-2 focus:ring-blue-100 text-sm font-medium resize-none"
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  {/* Form Actions */}
                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <span className="text-xs text-slate-500 flex items-center gap-1.5 font-mono self-start sm:self-auto">
                      <LockIcon /> Secure SSL Data Transfer
                    </span>
                    <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                      <button
                        type="button"
                        onClick={() => setIsApplyOpen(false)}
                        className="h-11 px-5 border border-slate-200 rounded-xl font-bold font-display hover:bg-slate-50 text-slate-700 text-sm transition-colors w-full sm:w-auto"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="h-11 px-6 bg-gradient-to-r from-echelon-blue to-blue-600 text-white rounded-xl font-bold font-display hover:opacity-95 text-sm flex items-center justify-center gap-1.5 transition-all shadow-md shadow-blue-500/15 w-full sm:w-auto"
                      >
                        Submit Application <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 2. BOOK A SCHOOL TOUR MODAL */}
      {isBookTourOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/65 backdrop-blur-sm flex items-start sm:items-center justify-center p-2 sm:p-4">
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[96vh] sm:max-h-[90vh]">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-echelon-gold to-amber-600 p-4 sm:p-6 text-white relative flex-shrink-0">
              <button
                onClick={() => { setIsBookTourOpen(false); setJustBookedId(null); setValidationError(null); }}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="p-2 sm:p-3 bg-white/15 rounded-xl flex-shrink-0">
                  <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-display">Schedule a Private Tour</h3>
                  <p className="text-xs sm:text-sm text-amber-50 mt-0.5">Experience our campus, smart classrooms, & ICT Lab firsthand</p>
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1">
              {justBookedId ? (
                /* Success */
                <div className="text-center py-6 px-4 flex flex-col items-center">
                  <div className="w-16 h-16 bg-amber-50 text-echelon-gold rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 stroke-[2]" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-950 font-display">School Tour Scheduled!</h4>
                  <p className="text-slate-600 mt-2 text-sm max-w-sm mx-auto">
                    Your school tour has been registered. A representative will ring or email you to finalize your arrival.
                  </p>

                  <div className="mt-5 p-4 bg-orange-50/50 border border-orange-100 rounded-xl text-left space-y-2 text-xs font-mono w-full max-w-sm">
                    <div className="flex justify-between font-bold text-orange-900 font-sans pb-1.5 border-b border-orange-100">
                      <span>ECHELON CAMPUS VISIT</span>
                      <span className="text-amber-600">CONFIRMED</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Scheduled Date:</span>
                      <strong className="text-slate-950">{tours.find(t => t.id === justBookedId)?.preferredDate}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Arrival Time:</span>
                      <strong className="text-slate-950">{tours.find(t => t.id === justBookedId)?.preferredTime}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Contact Parent:</span>
                      <strong className="text-slate-950">{tours.find(t => t.id === justBookedId)?.parentName}</strong>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                    <button
                      onClick={() => { setIsBookTourOpen(false); setJustBookedId(null); }}
                      className="w-full sm:flex-1 py-2.5 px-4 bg-echelon-gold text-white font-bold font-display hover:bg-echelon-gold-hover rounded-xl text-sm transition-colors"
                    >
                      Done
                    </button>
                    <button
                      onClick={() => { setIsBookTourOpen(false); setJustBookedId(null); setShowPortalHub(true); }}
                      className="w-full sm:flex-1 py-2.5 px-4 border border-slate-200 text-slate-700 font-bold font-display hover:bg-slate-50 rounded-xl text-sm transition-colors flex items-center justify-center"
                    >
                      View in Hub
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleTourSubmit} className="space-y-4">
                  {validationError && (
                    <div className="p-3 bg-rose-50 border-l-4 border-rose-500 rounded text-rose-800 flex items-start gap-2 text-sm">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-600 mt-0.5" />
                      <div>{validationError}</div>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Mrs. Adebayo Lagos"
                      value={tourForm.parentName}
                      onChange={(e) => setTourForm({ ...tourForm, parentName: e.target.value })}
                      className="w-full h-11 px-4 rounded-xl border border-slate-200 outline-none focus:border-echelon-gold transition-colors focus:ring-2 focus:ring-amber-100 text-sm font-medium"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 08122334455"
                        value={tourForm.parentPhone}
                        onChange={(e) => setTourForm({ ...tourForm, parentPhone: e.target.value })}
                        className="w-full h-11 px-4 rounded-xl border border-slate-200 outline-none focus:border-echelon-gold transition-colors focus:ring-2 focus:ring-amber-100 text-sm font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. adebayo@yahoo.com"
                        value={tourForm.parentEmail}
                        onChange={(e) => setTourForm({ ...tourForm, parentEmail: e.target.value })}
                        className="w-full h-11 px-4 rounded-xl border border-slate-200 outline-none focus:border-echelon-gold transition-colors focus:ring-2 focus:ring-amber-100 text-sm font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Date *</label>
                      <input
                        type="date"
                        required
                        value={tourForm.preferredDate}
                        onChange={(e) => setTourForm({ ...tourForm, preferredDate: e.target.value })}
                        className="w-full h-11 px-4 rounded-xl border border-slate-200 outline-none focus:border-echelon-gold transition-colors focus:ring-2 focus:ring-amber-100 text-sm font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Time *</label>
                      <select
                        value={tourForm.preferredTime}
                        onChange={(e) => setTourForm({ ...tourForm, preferredTime: e.target.value })}
                        className="w-full h-11 px-3 rounded-xl border border-slate-200 outline-none focus:border-echelon-gold transition-colors text-sm font-medium bg-white"
                      >
                        <option value="09:00 AM">09:00 AM (Morning Slot)</option>
                        <option value="10:30 AM">10:30 AM</option>
                        <option value="12:00 PM">12:00 PM (Noon Slot)</option>
                        <option value="02:00 PM">02:00 PM (Afternoon Slot)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Grade of Interest</label>
                    <select
                      value={tourForm.gradeOfInterest}
                      onChange={(e) => setTourForm({ ...tourForm, gradeOfInterest: e.target.value })}
                      className="w-full h-11 px-3 rounded-xl border border-slate-200 outline-none focus:border-echelon-gold transition-colors text-sm font-medium bg-white"
                    >
                      <option value="Creche">Creche Section</option>
                      <option value="Nursery">Nursery Section</option>
                      <option value="Primary 1 - 3">Lower Primary (Grades 1-3)</option>
                      <option value="Primary 4 - 6">Upper Primary (Grades 4-6)</option>
                    </select>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:justify-end gap-2.5 w-full">
                    <button
                      type="button"
                      onClick={() => setIsBookTourOpen(false)}
                      className="h-11 px-4 border border-slate-200 rounded-xl font-bold font-display hover:bg-slate-50 text-slate-700 text-sm transition-colors w-full sm:w-auto"
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="h-11 px-5 bg-gradient-to-r from-echelon-gold to-amber-500 text-white rounded-xl font-bold font-display hover:opacity-95 text-sm flex items-center justify-center gap-1.5 transition-all shadow-md shadow-orange-500/15 w-full sm:w-auto"
                    >
                      Book Free Visitation <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 3. FLOATING PARENT PORTAL HUB TRAY (WIDGET TO VIEW REGISTERED ENQUIRIES) */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3.5">
        {(applications.length > 0 || tours.length > 0) && !showPortalHub && (
          <button
            onClick={() => setShowPortalHub(true)}
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2.5 sm:py-3 bg-gradient-to-r from-echelon-blue to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all font-bold hover:scale-105 group border-2 border-white animate-bounce text-xs sm:text-sm"
            id="parent-hub-floating-btn"
          >
            <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-echelon-gold" />
            <span className="font-display">Parent Portal Hub ({applications.length + tours.length})</span>
          </button>
        )}

        {/* Floating Portal Drawer */}
        {showPortalHub && (
          <div className="w-[calc(100vw-2rem)] sm:w-92 max-w-sm bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[500px] animate-in slide-in-from-bottom-5 duration-300">
            {/* Drawer Header */}
            <div className="bg-slate-900 p-4 text-white flex justify-between items-center border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-echelon-blue/10 text-echelon-blue rounded flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-echelon-gold" />
                </div>
                <div>
                  <h4 className="font-bold text-sm tracking-tight font-display">Your Applications & Tours</h4>
                  <p className="text-[10px] text-slate-400">Manage client submissions offline (Lagos Local)</p>
                </div>
              </div>
              <button
                onClick={() => setShowPortalHub(false)}
                className="p-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-400 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Drawer Body - Scrollable lists */}
            <div className="p-4 overflow-y-auto space-y-4 flex-1">
              {/* Admissions list */}
              <div>
                <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 font-mono flex items-center justify-between">
                  <span>Online Applications ({applications.length})</span>
                  <span className="h-1 bg-slate-100 flex-1 ml-2"></span>
                </h5>

                {applications.length === 0 ? (
                  <p className="text-xs text-slate-400 italic py-1">No children registered yet.</p>
                ) : (
                  <div className="space-y-2">
                    {applications.map((app) => (
                      <div key={app.id} className="p-3 bg-slate-50 border border-slate-100 rounded-xl space-y-2.5 relative group/item">
                        <button
                          onClick={() => deleteApp(app.id)}
                          className="absolute top-2 right-2 text-slate-300 hover:text-rose-500 opacity-0 group-hover/item:opacity-100 transition-all p-1 rounded-md"
                          title="Remove admission slip"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                        <div>
                          <p className="font-semibold text-xs text-slate-950 font-display">
                            {app.studentFirstName} {app.studentLastName}
                          </p>
                          <p className="text-[10px] text-slate-500 font-mono mt-0.5">{app.id} • Applying for: {app.classGrade}</p>
                        </div>
                        <div className="flex justify-between items-center pt-1.5 border-t border-slate-100">
                          <span className="text-[10px] font-mono text-slate-400">{app.dateSubmitted}</span>
                          <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded-full border border-emerald-100 flex items-center gap-0.5">
                            <span className="w-1 h-1 bg-emerald-500 rounded-full animate-ping"></span>
                            {app.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Tours list */}
              <div>
                <h5 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 font-mono flex items-center justify-between">
                  <span>Campus Visit Bookings ({tours.length})</span>
                  <span className="h-1 bg-slate-100 flex-1 ml-2"></span>
                </h5>

                {tours.length === 0 ? (
                  <p className="text-xs text-slate-400 italic py-1">No active tours booked.</p>
                ) : (
                  <div className="space-y-2">
                    {tours.map((tour) => (
                      <div key={tour.id} className="p-3 bg-orange-50/20 border border-orange-50 rounded-xl space-y-2 relative group/item">
                        <button
                          onClick={() => deleteTour(tour.id)}
                          className="absolute top-2 right-2 text-slate-300 hover:text-rose-500 opacity-0 group-hover/item:opacity-100 transition-all p-1"
                          title="Remove booking slip"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                        <div>
                          <p className="font-semibold text-xs text-slate-950 font-display">
                            Campus Visit: {tour.parentName}
                          </p>
                          <p className="text-[10px] text-slate-500 font-mono mt-0.5">Grade Level interest: {tour.gradeOfInterest}</p>
                        </div>
                        <div className="flex justify-between items-center text-[10px] pt-1.5 border-t border-orange-100/30">
                          <span className="text-slate-500 font-mono flex items-center gap-1">
                            <Clock className="w-3 h-3 text-echelon-gold" /> {tour.preferredTime}
                          </span>
                          <span className="font-bold text-amber-700">
                            {tour.preferredDate}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="p-4 bg-slate-50 border-t border-slate-100 flex gap-2">
              <button
                onClick={() => { setIsApplyOpen(true); setShowPortalHub(false); }}
                className="flex-1 py-2 px-3 bg-echelon-blue text-white text-xs font-bold font-display rounded-lg text-center hover:bg-echelon-blue-hover transition-colors"
              >
                Apply Another
              </button>
              <button
                onClick={() => { setIsBookTourOpen(true); setShowPortalHub(false); }}
                className="flex-1 py-2 px-3 bg-echelon-gold text-white text-xs font-bold font-display rounded-lg text-center hover:bg-echelon-gold-hover transition-colors"
              >
                Book Visitor Slot
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

function LockIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-xs text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
