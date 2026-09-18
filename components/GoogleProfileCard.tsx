'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Navigation, Phone, Star, ShieldCheck, Check, Share2, Bookmark, Globe } from 'lucide-react';
import { businessInfo } from '@/lib/businessData';

export function GoogleProfileCard() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleWebsiteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast('Viewing NCR Cooling Centre Official Website');
  };

  const handleShareClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: 'NCR Cooling Centre - Gurugram Appliance Repair',
          text: 'Verified 5.0 Star Appliance Repair & AC Gas Filling in Gurgaon. Call: +91 90536 53619',
          url: typeof window !== 'undefined' ? window.location.origin : 'https://ncrcoolingcentre.in',
        });
        return;
      } catch (err) {
        // user dismissed share sheet
      }
    }

    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      await navigator.clipboard.writeText(
        typeof window !== 'undefined' ? window.location.origin : 'https://ncrcoolingcentre.in'
      );
      showToast('Website Link Copied to Clipboard!');
    }
  };

  const handleSaveClick = (e: React.MouseEvent) => {
    e.preventDefault();
    showToast('Opening Google Maps to Save Location...');
    window.open(businessInfo.googleMapsUrl, '_blank', 'noopener,noreferrer');
  };

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    'NCR Cooling Centre, ' + businessInfo.address
  )}`;

  return (
    <div className="w-full max-w-[480px] mx-auto group relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-full shadow-2xl border border-sky-500/40 animate-in fade-in slide-in-from-top-2 flex items-center gap-2 whitespace-nowrap">
          <Check className="h-3.5 w-3.5 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Google Verified Header Badge */}
      <div className="flex items-center justify-between px-3.5 py-2 mb-2 bg-[#062f50]/85 backdrop-blur-md rounded-xl border border-sky-500/40 text-xs text-sky-200 shadow-md">
        <div className="flex items-center gap-1.5 font-medium">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          <span className="text-white font-semibold">Google Verified Business</span>
        </div>
        <div className="flex items-center gap-1 text-amber-300 font-bold">
          <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          <span>5.0 (21 Reviews)</span>
        </div>
      </div>

      {/* Main Card Container */}
      <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200/90 transition-all duration-300 group-hover:shadow-blue-500/10 group-hover:border-blue-300">
        
        {/* Exact Google Business Card Image & Single-Line Buttons */}
        <div className="relative w-full aspect-[585/664] overflow-hidden bg-white select-none">
          <Image
            src="/images/google-profile-card-singleline.png"
            alt="NCR Cooling Centre Google Business Profile Card"
            width={585}
            height={664}
            priority
            unoptimized
            className="w-full h-full object-contain pointer-events-none"
          />

          {/* Upper Image Area: Clicking anywhere on photo/header opens full Google Profile */}
          <a
            href={businessInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="View Full Profile on Google Maps"
            className="absolute top-0 left-0 right-0 h-[61%] cursor-pointer z-10"
          />

          {/* SINGLE-LINE 5 ACTION BUTTONS: Website, Directions, Call, Save, Share */}
          <div 
            style={{ top: '61.8%', height: '9.2%' }}
            className="absolute left-0 right-0 z-20 flex items-center justify-center gap-1 sm:gap-1.5 px-2 select-none"
          >
            {/* 1. Website */}
            <a
              href="/"
              onClick={handleWebsiteClick}
              title="Visit Official Website"
              className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 hover:text-blue-600 shadow-sm text-[10.5px] sm:text-[11.5px] font-medium transition-all active:scale-95"
            >
              <Globe className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#1a73e8] flex-shrink-0" />
              <span>Website</span>
            </a>

            {/* 2. Directions */}
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Get Directions on Google Maps"
              className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 hover:text-blue-600 shadow-sm text-[10.5px] sm:text-[11.5px] font-medium transition-all active:scale-95"
            >
              <Navigation className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#1a73e8] flex-shrink-0" />
              <span>Directions</span>
            </a>

            {/* 3. Call */}
            <a
              href={`tel:${businessInfo.phone}`}
              title={`Call ${businessInfo.phoneDisplay}`}
              className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 hover:text-blue-600 shadow-sm text-[10.5px] sm:text-[11.5px] font-medium transition-all active:scale-95"
            >
              <Phone className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#1a73e8] flex-shrink-0" />
              <span>Call</span>
            </a>

            {/* 4. Save */}
            <button
              type="button"
              onClick={handleSaveClick}
              title="Save to Google Maps"
              className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 hover:text-blue-600 shadow-sm text-[10.5px] sm:text-[11.5px] font-medium transition-all active:scale-95 cursor-pointer"
            >
              <Bookmark className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#1a73e8] flex-shrink-0" />
              <span>Save</span>
            </button>

            {/* 5. Share */}
            <button
              type="button"
              onClick={handleShareClick}
              title="Share Business Link"
              className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 hover:text-blue-600 shadow-sm text-[10.5px] sm:text-[11.5px] font-medium transition-all active:scale-95 cursor-pointer"
            >
              <Share2 className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#1a73e8] flex-shrink-0" />
              <span>Share</span>
            </button>
          </div>

          {/* Bottom Area: Open hours & address info clicks to Google listing */}
          <a
            href={businessInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="View Location & Working Hours on Google Maps"
            style={{
              top: '71.5%',
              left: '0',
              right: '0',
              bottom: '0',
            }}
            className="absolute cursor-pointer z-10 hover:bg-slate-900/5 transition-colors"
          />
        </div>
      </div>

      {/* Caption / Address notice */}
      <p className="text-center text-[11px] text-slate-400 mt-2.5">
        Sector 49, Gurugram, Haryana · 7 Days Open 8:00 AM – 7:30 PM
      </p>
    </div>
  );
}
