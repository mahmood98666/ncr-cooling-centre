'use client';

import { Phone, MessageCircle, Star, Clock } from 'lucide-react';
import { businessInfo } from '@/lib/businessData';

export function QuickActionBar() {
  return (
    <>
      {/* Premium App-Like Mobile Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-3 py-2 md:hidden safe-area-pb">
        <div className="grid grid-cols-4 gap-1.5 text-center">
          <a
            href={`tel:${businessInfo.phone}`}
            className="flex flex-col items-center justify-center py-1 px-1 rounded-xl bg-blue-600 active:bg-blue-700 text-white font-bold text-[11px] shadow-sm transition-all"
          >
            <Phone className="h-4 w-4 mb-0.5" />
            <span>Call Now</span>
          </a>
          <a
            href={businessInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1 px-1 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-bold text-[11px] shadow-sm transition-all"
          >
            <MessageCircle className="h-4 w-4 mb-0.5" />
            <span>WhatsApp</span>
          </a>
          <a
            href={businessInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1 px-1 rounded-xl bg-slate-100 active:bg-slate-200 text-slate-800 font-bold text-[11px] border border-slate-200 transition-all"
          >
            <span className="text-sm leading-none mb-0.5">📍</span>
            <span>Directions</span>
          </a>
          <a
            href="/reviews"
            className="flex flex-col items-center justify-center py-1 px-1 rounded-xl bg-amber-50 active:bg-amber-100 text-amber-900 font-bold text-[11px] border border-amber-200/80 transition-all"
          >
            <div className="flex items-center gap-0.5 text-amber-500 mb-0.5">
              <Star className="h-3.5 w-3.5 fill-amber-400" />
            </div>
            <span>5.0 Reviews</span>
          </a>
        </div>
      </div>

      {/* Floating WhatsApp pill on Desktop */}
      <aside aria-label="Quick contact" className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3">
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-200 p-3.5 flex items-center gap-3 text-slate-800 animate-bounce hover:animate-none">
          <div className="flex items-center gap-1 bg-amber-50 text-amber-600 font-bold px-2 py-1 rounded-lg text-xs border border-amber-200">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            <span>5.0</span>
          </div>
          <div className="text-xs font-semibold">
            <span className="text-emerald-600 font-bold">● Open Now</span> · Closes 7:30 PM
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${businessInfo.phone}`}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-5 rounded-full shadow-xl transition-transform hover:scale-105"
          >
            <Phone className="h-4 w-4 fill-white" />
            <span>{businessInfo.phoneDisplay}</span>
          </a>
          <a
            href={businessInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-5 rounded-full shadow-xl transition-transform hover:scale-105"
          >
            <MessageCircle className="h-5 w-5 fill-white" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </aside>
    </>
  );
}
