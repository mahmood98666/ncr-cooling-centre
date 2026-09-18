import type { Metadata } from 'next';
import { SeoTagDirectory } from '@/components/SeoTagDirectory';
import { businessInfo } from '@/lib/businessData';
import { Sparkles, MapPin, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Local SEO Search Directory & Also Known As | NCR Cooling Centre Gurgaon',
  description: 'Explore 1,400+ local appliance repair search queries, Google aliases, and locality tags for NCR Cooling Centre Gurgaon (AC, Fridge, Washing Machine, Geyser, Cooler).',
};

export default function DirectoryPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Directory Hero Header */}
      <section className="bg-gradient-to-br from-[#072c49] via-[#0a4877] to-[#0284c7] text-white py-12 sm:py-16 relative overflow-hidden border-b border-sky-800/60">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-sky-950/70 border border-sky-400/40 text-sky-200 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-sky-300" />
            <span>Google Local Search & SEO Index</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
            Popular Searches & Also Known As Directory
          </h1>
          <p className="text-sky-100 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Find <strong className="text-white">NCR Cooling Centre</strong> under our verified business aliases, local service terms, and sector-by-sector doorstep repair keywords across Gurugram.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-xs text-sky-200">
            <span className="flex items-center gap-1.5 bg-sky-900/50 px-3 py-1.5 rounded-full border border-sky-700/50">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
              1,430 Verified Local Tags
            </span>
            <span className="flex items-center gap-1.5 bg-sky-900/50 px-3 py-1.5 rounded-full border border-sky-700/50">
              <MapPin className="h-3.5 w-3.5 text-red-400" />
              All 40+ Gurgaon Sectors
            </span>
            <span className="flex items-center gap-1.5 bg-sky-900/50 px-3 py-1.5 rounded-full border border-sky-700/50">
              <ShieldCheck className="h-3.5 w-3.5 text-amber-300" />
              30–45 Mins Doorstep Arrival
            </span>
          </div>
        </div>
      </section>

      {/* The 1400+ Tag Interactive Directory */}
      <SeoTagDirectory />
    </div>
  );
}
