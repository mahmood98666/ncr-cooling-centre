'use client';

import Image from 'next/image';
import Link from 'next/link';
import { 
  Star, X, Navigation, Bookmark, Compass, 
  Smartphone, Share2, MapPin 
} from 'lucide-react';
import { businessInfo } from '@/lib/businessData';
import { useState } from 'react';

export function GoogleMapsPanel() {
  const [activeTab, setActiveTab] = useState<'overview' | 'reviews' | 'about'>('overview');
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: businessInfo.name,
        text: 'NCR Cooling Centre - Top Appliance Repair in Gurgaon',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSendToPhone = () => {
    window.location.href = `tel:${businessInfo.phone}`;
  };

  return (
    <div className="w-full max-w-[420px] mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 text-slate-800">
      
      {/* Top Banner Image with Floating Close Button */}
      <div className="relative h-56 w-full bg-slate-900">
        <Image 
          src="/images/real/ncr-cooling-centre-banner.jpg" 
          alt="NCR Cooling Centre Banner" 
          fill 
          className="object-cover"
          priority
        />
        <button 
          className="absolute top-3 right-3 bg-white/95 hover:bg-white text-slate-800 rounded-full w-8 h-8 flex items-center justify-center shadow-lg transition-transform hover:scale-105"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Header Info */}
      <div className="p-5 pb-0">
        <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
          NCR Cooling Centre
        </h2>
        <p className="text-sm text-slate-600 font-medium mt-0.5">
          एनसीआर कूलिंग सेंटर
        </p>

        {/* Rating Line */}
        <div className="flex items-center gap-1.5 mt-1.5 text-sm">
          <span className="font-bold text-slate-900">5.0</span>
          <div className="flex text-amber-500 text-sm">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="text-slate-600 text-xs">({businessInfo.reviewCount})</span>
        </div>

        <p className="text-xs text-slate-500 mt-0.5">
          Appliance repair service
        </p>

        {/* Google Maps Tabs (Overview, Reviews, About) */}
        <div className="flex items-center gap-6 mt-4 border-b border-slate-200 text-sm">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`pb-2.5 font-bold transition-colors ${
              activeTab === 'overview'
                ? 'text-teal-700 border-b-2 border-teal-700'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Overview
          </button>
          <Link 
            href="/reviews"
            className="pb-2.5 font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            Reviews
          </Link>
          <Link 
            href="/services"
            className="pb-2.5 font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            About
          </Link>
        </div>
      </div>

      {/* Google Maps Round Action Buttons */}
      <div className="p-4 pt-3">
        <div className="grid grid-cols-5 gap-1 text-center">
          
          {/* 1. Directions */}
          <a 
            href={businessInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-teal-700 group-hover:bg-teal-800 text-white flex items-center justify-center shadow transition-all">
              <Navigation className="h-4 w-4" />
            </div>
            <span className="text-[11px] font-semibold text-teal-800 mt-1.5">
              Directions
            </span>
          </a>

          {/* 2. Save */}
          <button 
            onClick={() => setSaved(!saved)}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
              saved 
                ? 'bg-teal-700 text-white' 
                : 'bg-sky-100 group-hover:bg-sky-200 text-teal-800'
            }`}>
              <Bookmark className="h-4 w-4" />
            </div>
            <span className="text-[11px] font-semibold text-teal-800 mt-1.5">
              {saved ? 'Saved' : 'Save'}
            </span>
          </button>

          {/* 3. Nearby */}
          <a 
            href={businessInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-sky-100 group-hover:bg-sky-200 text-teal-800 flex items-center justify-center transition-all">
              <Compass className="h-4 w-4" />
            </div>
            <span className="text-[11px] font-semibold text-teal-800 mt-1.5">
              Nearby
            </span>
          </a>

          {/* 4. Send to phone */}
          <button 
            onClick={handleSendToPhone}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-sky-100 group-hover:bg-sky-200 text-teal-800 flex items-center justify-center transition-all">
              <Smartphone className="h-4 w-4" />
            </div>
            <span className="text-[11px] font-semibold text-teal-800 mt-1.5 leading-tight">
              Send to phone
            </span>
          </button>

          {/* 5. Share */}
          <button 
            onClick={handleShare}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-sky-100 group-hover:bg-sky-200 text-teal-800 flex items-center justify-center transition-all">
              <Share2 className="h-4 w-4" />
            </div>
            <span className="text-[11px] font-semibold text-teal-800 mt-1.5">
              {copied ? 'Copied!' : 'Share'}
            </span>
          </button>

        </div>
      </div>

      {/* Thin Divider */}
      <div className="border-t border-slate-100"></div>

      {/* Address Row */}
      <div className="p-4 pt-3 pb-4">
        <a 
          href={businessInfo.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-3.5 hover:opacity-80 transition-opacity"
        >
          <MapPin className="h-5 w-5 text-teal-700 flex-shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
            Sarswati Kunj 2, Orchid Petals, Block S, wazirabad, Sector 49, Gurugram, Haryana 122003
          </p>
        </a>
      </div>

    </div>
  );
}
