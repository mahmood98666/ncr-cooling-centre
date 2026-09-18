'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle, ExternalLink } from 'lucide-react';
import { businessInfo } from '@/lib/businessData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    appliance: 'ac',
    address: '',
    issue: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSubmit = () => {
    const message = `*New Service Booking Request - NCR Cooling Centre*
*Name:* ${formData.name || 'Customer'}
*Phone:* ${formData.phone || 'Not provided'}
*Appliance:* ${formData.appliance.toUpperCase()}
*Address:* ${formData.address || 'Gurgaon'}
*Issue:* ${formData.issue || 'Appliance repair required'}`;

    const url = `https://wa.me/919053653619?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Top Banner */}
      <div className="bg-slate-900 py-16 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block bg-blue-600/30 text-blue-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            Fast Response Service
          </span>
          <h1 className="text-3xl sm:text-5xl font-black mb-4">Book a Doorstep Technician</h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Need urgent repair in Gurgaon? Contact NCR Cooling Centre directly. Same-day service with transparent prices.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Contact Details Left Column */}
            <div className="lg:col-span-5 bg-gradient-to-b from-blue-700 to-indigo-800 p-8 sm:p-12 text-white flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-200">
                  Google Verified Business
                </span>
                <h2 className="text-2xl sm:text-3xl font-black mt-1 mb-8">
                  Get In Touch Directly
                </h2>
                
                <div className="space-y-6 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-blue-200" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">Direct Phone Call</h3>
                      <a href={`tel:${businessInfo.phone}`} className="text-blue-100 hover:text-white font-extrabold text-lg block mt-0.5">
                        {businessInfo.phoneDisplay}
                      </a>
                      <p className="text-xs text-blue-200">Instant technician dispatch in Gurgaon</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/30 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-5 w-5 text-emerald-300" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">WhatsApp Booking</h3>
                      <a 
                        href={businessInfo.whatsappUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-emerald-200 hover:text-white font-bold block mt-0.5"
                      >
                        Click to Chat on WhatsApp &rarr;
                      </a>
                      <p className="text-xs text-blue-200">Fast photo sharing of damaged appliance</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-blue-200" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">Working Hours</h3>
                      <p className="text-blue-100 font-semibold">{businessInfo.workingHours}</p>
                      <p className="text-xs text-blue-200">Open all 7 days a week</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-blue-200" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">Business Address</h3>
                      <p className="text-blue-100 leading-relaxed text-xs sm:text-sm mt-0.5">
                        {businessInfo.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-blue-200" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base">Email Support</h3>
                      <a href={`mailto:${businessInfo.email}`} className="text-blue-100 hover:text-white">
                        {businessInfo.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <a
                  href={businessInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl text-xs font-semibold backdrop-blur-sm transition-colors"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  <span>Open in Google Maps Application</span>
                </a>
              </div>
            </div>

            {/* Right Column: Google Maps & Booking Form */}
            <div className="lg:col-span-7 p-8 sm:p-12">
              
              {/* Google Maps Location Preview */}
              <div className="mb-10">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    Our Google Business Location (Sector 49)
                  </h3>
                  <span className="text-xs text-emerald-600 font-bold">5.0 ★ Google Verified</span>
                </div>
                <div className="w-full h-56 rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight={0} 
                    marginWidth={0} 
                    src={businessInfo.googleEmbedMap}
                    title="NCR Cooling Centre Google Maps"
                  ></iframe>
                </div>
              </div>

              {/* Booking Request Form */}
              <h3 className="text-xl font-bold text-slate-900 mb-2">Book Service Online</h3>
              <p className="text-xs text-slate-500 mb-6">
                Fill the form below to receive a technician callback within 15 minutes, or send it instantly via WhatsApp.
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center text-emerald-900">
                  <CheckCircle className="h-12 w-12 text-emerald-600 mx-auto mb-3" />
                  <h4 className="text-lg font-bold">Service Request Received!</h4>
                  <p className="text-sm text-emerald-700 mt-1 mb-4">
                    Our Gurgaon service coordinator will call you at {formData.phone || 'your number'} within 15 minutes to confirm technician arrival.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-blue-600 underline"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-slate-700 mb-1">Your Full Name</label>
                      <input 
                        type="text" 
                        id="name"
                        required
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                        placeholder="e.g. Rahul Sharma" 
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                        className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                        placeholder="+91 98765 43210" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="appliance" className="block text-xs font-bold text-slate-700 mb-1">Select Appliance</label>
                      <select 
                        id="appliance"
                        value={formData.appliance}
                        onChange={e => setFormData({...formData, appliance: e.target.value})}
                        className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                      >
                        <option value="ac">Air Conditioner (AC Repair / Service)</option>
                        <option value="gas-filling">AC Gas Refilling / Gas Charging</option>
                        <option value="geyser">Geyser / Water Heater Repair</option>
                        <option value="fridge">Refrigerator / Fridge Repair</option>
                        <option value="washing-machine">Washing Machine Repair</option>
                        <option value="microwave">Microwave Oven Repair</option>
                        <option value="ro">RO / Water Purifier Service</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="address" className="block text-xs font-bold text-slate-700 mb-1">Address / Sector (Gurgaon)</label>
                      <input 
                        type="text" 
                        id="address"
                        required
                        value={formData.address}
                        onChange={e => setFormData({...formData, address: e.target.value})}
                        className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                        placeholder="e.g. Sector 49, Orchid Petals" 
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="issue" className="block text-xs font-bold text-slate-700 mb-1">Describe Appliance Problem</label>
                    <textarea 
                      id="issue" 
                      rows={3} 
                      value={formData.issue}
                      onChange={e => setFormData({...formData, issue: e.target.value})}
                      className="w-full border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none" 
                      placeholder="e.g. AC is not cooling, Geyser tripping MCB, Washing machine not spinning..."
                    ></textarea>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <button 
                      type="submit" 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm transition-colors shadow-md"
                    >
                      <Send className="h-4 w-4" />
                      Submit Request
                    </button>

                    <button 
                      type="button" 
                      onClick={handleWhatsAppSubmit}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm transition-colors shadow-md"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Send via WhatsApp
                    </button>
                  </div>
                </form>
              )}

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
