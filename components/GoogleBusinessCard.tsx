'use client';

import Image from 'next/image';
import Link from 'next/link';
import { 
  Star, MoreVertical, X, Globe, Navigation, Bookmark, 
  Share2, Phone, Clock, MapPin, ChevronDown 
} from 'lucide-react';
import { businessInfo } from '@/lib/businessData';
import { useState } from 'react';

export function GoogleBusinessCard() {
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

  return (
    <div className="max-w-2xl mx-auto my-10 px-4">
      {/* Outer Google Business Card Frame */}
      <div className="bg-white rounded-[28px] border border-slate-200/90 shadow-2xl overflow-hidden text-slate-800 transition-all hover:shadow-slate-300/60">
        
        {/* Header: Title, Rating & Controls */}
        <div className="p-5 sm:p-6 pb-4">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                {businessInfo.name}
              </h2>
              <div className="flex items-center gap-1.5 mt-1 text-sm text-slate-700">
                <span className="font-semibold text-slate-900">5.0</span>
                <div className="flex text-amber-500 text-sm">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                </div>
                <span className="text-slate-600">({businessInfo.reviewCount})</span>
                <span className="text-slate-400">·</span>
                <span className="text-slate-600">Appliance repair service</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-slate-500">
              <button className="p-1.5 hover:bg-slate-100 rounded-full transition-colors" aria-label="More options">
                <MoreVertical className="h-5 w-5" />
              </button>
              <button className="p-1.5 hover:bg-slate-100 rounded-full transition-colors" aria-label="Close">
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Navigation Pills (Overview, Reviews, Photos) */}
          <div className="flex items-center gap-2.5 mt-5">
            <span className="bg-blue-100/90 text-blue-900 font-bold px-5 py-2 rounded-full text-sm cursor-pointer shadow-sm">
              Overview
            </span>
            <Link 
              href="/reviews"
              className="bg-slate-100/80 hover:bg-slate-200/80 text-slate-700 font-medium px-5 py-2 rounded-full text-sm transition-colors"
            >
              Reviews
            </Link>
            <a 
              href="/#gallery"
              className="bg-slate-100/80 hover:bg-slate-200/80 text-slate-700 font-medium px-5 py-2 rounded-full text-sm transition-colors"
            >
              Photos
            </a>
          </div>
        </div>

        {/* Media Row: Left 10-flyers collage, Right Video thumbnail */}
        <div className="px-5 sm:px-6 py-2">
          <div className="grid grid-cols-12 gap-2 h-64 sm:h-72 rounded-2xl overflow-hidden border border-slate-200">
            
            {/* Left Collage */}
            <div className="col-span-7 relative h-full bg-slate-900">
              <Image 
                src="/images/real/ncr-cooling-centre-banner.jpg" 
                alt="NCR Cooling Centre Banner & Portfolio" 
                fill 
                className="object-cover"
              />
            </div>

            {/* Right Video Thumbnail */}
            <div className="col-span-5 relative h-full bg-slate-900 group cursor-pointer">
              <Image 
                src="/images/google-video-thumb.jpg" 
                alt="NCR Cooling Centre Video" 
                fill 
                className="object-cover"
              />
            </div>

          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="p-5 sm:p-6 pt-4 space-y-3">
          
          {/* Action Pills */}
          <div className="flex items-center justify-between gap-2 overflow-x-auto pb-1 text-blue-600 text-xs sm:text-sm font-semibold">
            <Link 
              href="/"
              className="flex-1 min-w-[85px] flex items-center justify-center gap-1.5 border border-slate-300/90 rounded-full py-2 px-3 hover:bg-blue-50 transition-colors"
            >
              <Globe className="h-4 w-4" />
              <span>Website</span>
            </Link>

            <a 
              href={businessInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[95px] flex items-center justify-center gap-1.5 border border-slate-300/90 rounded-full py-2 px-3 hover:bg-blue-50 transition-colors"
            >
              <Navigation className="h-4 w-4" />
              <span>Directions</span>
            </a>

            <button 
              onClick={() => setSaved(!saved)}
              className={`flex-1 min-w-[75px] flex items-center justify-center gap-1.5 border border-slate-300/90 rounded-full py-2 px-3 transition-colors ${
                saved ? 'bg-blue-600 text-white border-blue-600' : 'hover:bg-blue-50'
              }`}
            >
              <Bookmark className="h-4 w-4" />
              <span>{saved ? 'Saved' : 'Save'}</span>
            </button>

            <button 
              onClick={handleShare}
              className="flex-1 min-w-[75px] flex items-center justify-center gap-1.5 border border-slate-300/90 rounded-full py-2 px-3 hover:bg-blue-50 transition-colors"
            >
              <Share2 className="h-4 w-4" />
              <span>{copied ? 'Copied!' : 'Share'}</span>
            </button>
          </div>

          {/* Central Call Pill */}
          <div className="flex justify-center pt-1">
            <a 
              href={`tel:${businessInfo.phone}`}
              className="inline-flex items-center justify-center gap-2 border border-slate-300/90 hover:border-blue-600 text-blue-600 hover:bg-blue-50/80 rounded-full py-2.5 px-10 font-bold text-sm transition-all shadow-sm"
            >
              <Phone className="h-4 w-4 fill-blue-600" />
              <span>Call</span>
            </a>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-200"></div>

        {/* Details Rows (Timings & Address with Mini Map) */}
        <div className="divide-y divide-slate-100 text-sm text-slate-800">
          
          {/* Row 1: Working Hours */}
          <div className="p-4 sm:p-5 flex items-center justify-between hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <span className="text-emerald-700 font-bold">Open</span>
                <span className="text-slate-600 font-medium"> · Closes 7:30 pm</span>
              </div>
            </div>
            <ChevronDown className="h-4 w-4 text-slate-400" />
          </div>

          {/* Row 2: Address & Google Mini Map */}
          <div className="p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin className="h-5 w-5" />
              </div>
              <p className="text-slate-700 font-normal leading-relaxed text-xs sm:text-sm max-w-sm">
                Sarswati Kunj 2, Orchid Petals, Block S, wazirabad, Sector 49, Gurugram, Haryana 122003
              </p>
            </div>

            {/* Google Mini Map with Red Pin on Sector 49 */}
            <a 
              href={businessInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-20 h-20 rounded-xl overflow-hidden border border-slate-200 shadow-sm flex-shrink-0 group"
              title="Open Sector 49 in Google Maps"
            >
              <Image 
                src="/images/google-minimap.png" 
                alt="Sector 49 Gurugram Google Maps Location" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform"
              />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
