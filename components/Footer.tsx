import Link from 'next/link';
import { Snowflake, Phone, Mail, MapPin, Star, MessageCircle, Clock, ShieldCheck } from 'lucide-react';
import { businessInfo } from '@/lib/businessData';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-24 md:pb-12 mt-auto border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Company & Google Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="h-9 w-9 rounded-lg bg-emerald-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/30">
                <Snowflake className="h-5 w-5" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                NCR Cooling Centre
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Gurugram’s premier doorstep home appliance repair specialist. Over 10+ years of dedicated service fixing ACs, Refrigerators, Washing Machines, Geysers, and Microwaves with genuine parts.
            </p>

            {/* Google Rating Card */}
            <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/60 inline-flex items-center gap-3">
              <div className="text-2xl font-black text-white">5.0</div>
              <div>
                <div className="flex text-amber-400 text-xs">
                  ★★★★★
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  Based on 21+ Verified Google Reviews
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4 text-base tracking-wide">Quick Navigation</h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Home Page</Link></li>
              <li><Link href="/services" className="hover:text-blue-400 transition-colors">All Repair Services</Link></li>
              <li><Link href="/#gallery" className="hover:text-blue-400 transition-colors">Live Real Photos Gallery</Link></li>
              <li><Link href="/reviews" className="hover:text-blue-400 transition-colors">Google Reviews (5.0 ⭐)</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Appliance Care Blog</Link></li>
              <li><Link href="/directory" className="hover:text-blue-400 transition-colors text-sky-400 font-semibold">Search Tags & Directory</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact & Location</Link></li>
            </ul>
          </div>

          {/* All Services */}
          <div>
            <h3 className="text-white font-bold mb-4 text-base tracking-wide">Our Key Services</h3>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link href="/services#ac-repair" className="hover:text-blue-400 transition-colors">Split & Window AC Repair</Link></li>
              <li><Link href="/services#gas-filling" className="hover:text-blue-400 transition-colors">AC Gas Refilling (R32, R410)</Link></li>
              <li><Link href="/services#geyser" className="hover:text-blue-400 transition-colors">Geyser & Water Heater Repair</Link></li>
              <li><Link href="/services#refrigerator" className="hover:text-blue-400 transition-colors">Refrigerator Service & Gas Charge</Link></li>
              <li><Link href="/services#washing-machine" className="hover:text-blue-400 transition-colors">Washing Machine Repair</Link></li>
              <li><Link href="/services#microwave" className="hover:text-blue-400 transition-colors">Microwave Oven Repair</Link></li>
              <li><Link href="/services#ro-purifier" className="hover:text-blue-400 transition-colors">RO Water Purifier Service</Link></li>
            </ul>
          </div>

          {/* Contact & Google Location */}
          <div>
            <h3 className="text-white font-bold mb-4 text-base tracking-wide">Business & Contact</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>{businessInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <span className="text-emerald-400">{businessInfo.workingHours}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <a href={`tel:${businessInfo.phone}`} className="hover:text-white font-bold text-slate-200">{businessInfo.phoneDisplay}</a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                <a href={businessInfo.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white text-emerald-400 font-semibold">
                  WhatsApp Support
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <a href={`mailto:${businessInfo.email}`} className="hover:text-white">{businessInfo.email}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Coverage Sectors */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-500">
          <p className="font-semibold text-slate-400 mb-2">Doorstep Service Available Across Gurgaon Sectors:</p>
          <p className="leading-relaxed">
            {businessInfo.areasServed.join(' • ')}
          </p>
        </div>

        {/* Also Known As & Popular Searches (Compact Footer) */}
        <div className="mt-6 pt-6 border-t border-slate-800/80 text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
            <p className="font-semibold text-slate-400">Also Known As & Popular Searches:</p>
            <Link 
              href="/directory" 
              className="text-sky-400 hover:text-sky-300 font-bold text-[11px] underline underline-offset-2 flex items-center gap-1"
            >
              <span>Explore All 1,400+ Search Tags &rarr;</span>
            </Link>
          </div>
          <p className="leading-relaxed text-[11px] text-slate-400">
            NCR Cooling Centre • NCR Cooling Center • Cooling Centre Near Me • Cooling Center Gurgaon • AC Repair Near Me • AC Gas Filling Gurgaon (R32, R410A) • Air Cooler Repair Gurgaon • Refrigerator Repair Near Me • Washing Machine Service Gurgaon • Geyser Repair Sector 49 • Microwave Oven Repair • Home Appliance Service Center • Doorstep AC Mechanic Sohna Road • Golf Course Road Cooling Centre • Sarswati Kunj Appliance Repair • Orchid Petals Service Center
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} {businessInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href={businessInfo.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              Google Profile
            </a>
            <span>•</span>
            <a href={businessInfo.googleReviewUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              Write a Review
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
