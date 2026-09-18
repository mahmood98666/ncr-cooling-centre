'use client';

import Link from 'next/link';
import { 
  Phone, Snowflake, MapPin, Star, Camera, MessageCircle, 
  ChevronDown, Flame, Wind, Wrench, Sparkles, BookOpen
} from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { businessInfo } from '@/lib/businessData';

export function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const serviceLinks = [
    { name: 'AC Gas Filling', href: '/services#gas-filling', badge: 'Popular', icon: Wind, desc: '100% Genuine R32 / R410A / R22' },
    { name: 'Geyser Repair & Service', href: '/services#geyser', badge: 'Fast', icon: Flame, desc: 'Instant & Storage Water Heaters' },
    { name: 'AC Repair & Service', href: '/services#ac-repair', icon: Snowflake, desc: 'Split & Window AC Doorstep Care' },
    { name: 'Washing Machine Repair', href: '/services#washing-machine', icon: Wrench, desc: 'Front & Top Load All Brands' },
    { name: 'Refrigerator Repair', href: '/services#refrigerator', icon: Snowflake, desc: 'Single & Double Door Cooling Issues' },
    { name: 'Microwave & Oven Repair', href: '/services#microwave', icon: Sparkles, desc: 'Heating & Panel Touch Repairs' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top micro-bar for Google Rating & Emergency Support */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-3 sm:px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-1 bg-blue-900/70 text-blue-300 px-2 py-0.5 rounded text-[11px] font-semibold border border-blue-700/60">
              <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
              <span>Google 5.0 Star Rated (21 Reviews)</span>
            </div>
            <span className="hidden md:inline text-slate-500">|</span>
            <span className="hidden md:inline text-slate-300 text-[11px]">
              <MapPin className="h-3 w-3 text-red-400 inline mr-0.5" /> Sector 49, Wazirabad, Gurugram
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
            <span className="text-emerald-400 font-medium">● Open: 8:00 AM – 7:30 PM</span>
            <a 
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              <MessageCircle className="h-3 w-3" />
              WhatsApp Help
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          
          {/* Logo & Name - Compact, Single Color & Size */}
          <div className="flex-shrink-0 mr-2 sm:mr-4 lg:mr-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/30 group-hover:bg-emerald-700 transition-colors">
                <Snowflake className="h-4.5 w-4.5 sm:h-5.5 sm:w-5.5 text-white" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-extrabold text-base sm:text-lg lg:text-xl tracking-tight text-slate-900 leading-tight">
                  NCR Cooling Centre
                </span>
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-slate-500 -mt-0.5">
                  Gurugram Appliance Care
                </span>
              </div>
            </Link>
          </div>
          
          {/* Desktop & Tablet Navigation Links - Always Outside */}
          <nav className="hidden md:flex items-center space-x-3 lg:space-x-5 xl:space-x-6 text-xs lg:text-sm font-bold">
            <Link 
              href="/" 
              className="text-slate-700 hover:text-blue-600 transition-colors py-1.5"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative" 
              ref={dropdownRef}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center gap-1 py-1.5 transition-colors ${
                  servicesOpen ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'
                }`}
                aria-expanded={servicesOpen}
              >
                <span>Services</span>
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
              </button>

              {/* Dropdown Menu */}
              {servicesOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-slate-200/90 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-4 pb-2 mb-2 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Our Doorstep Services</span>
                    <Link 
                      href="/services" 
                      onClick={() => setServicesOpen(false)}
                      className="text-xs text-blue-600 font-bold hover:underline"
                    >
                      All Services →
                    </Link>
                  </div>

                  <div className="space-y-0.5 px-2">
                    {serviceLinks.map((s) => {
                      const IconComponent = s.icon;
                      return (
                        <Link
                          key={s.name}
                          href={s.href}
                          onClick={() => setServicesOpen(false)}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                        >
                          <div className="h-8 w-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors mt-0.5">
                            <IconComponent className="h-4 w-4" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                                {s.name}
                              </span>
                              {s.badge && (
                                <span className="text-[10px] font-extrabold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                                  {s.badge}
                                </span>
                              )}
                            </div>
                            <span className="text-[11px] text-slate-500 line-clamp-1">
                              {s.desc}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  <div className="mt-2 pt-2 px-3 border-t border-slate-100">
                    <Link
                      href="/services"
                      onClick={() => setServicesOpen(false)}
                      className="block text-center py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold rounded-xl text-xs transition-colors"
                    >
                      Explore All 7 Specialized Services
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Blog Link */}
            <Link 
              href="/blog" 
              className="text-slate-700 hover:text-blue-600 transition-colors py-1.5"
            >
              Blog
            </Link>

            <Link 
              href="/#gallery" 
              className="text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1 py-1.5"
            >
              <Camera className="h-3.5 w-3.5 text-blue-600" />
              <span>Real Photos</span>
            </Link>

            <Link 
              href="/reviews" 
              className="text-slate-700 hover:text-blue-600 transition-colors flex items-center gap-1 py-1.5"
            >
              <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
              <span>Reviews</span>
            </Link>

            <Link 
              href="/contact" 
              className="text-slate-700 hover:text-blue-600 transition-colors py-1.5"
            >
              Contact
            </Link>
          </nav>

          {/* Right Call Button */}
          <div className="flex items-center gap-2">
            <a 
              href={`tel:${businessInfo.phone}`} 
              className="flex items-center gap-1.5 bg-blue-600 text-white px-3 py-1.5 sm:px-4.5 sm:py-2 rounded-full font-extrabold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg shadow-blue-600/20 text-xs sm:text-sm whitespace-nowrap"
            >
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden xs:inline">{businessInfo.phoneDisplay}</span>
              <span className="xs:hidden">Call Now</span>
            </a>
          </div>

        </div>
      </div>

      {/* Mobile Bar - Always Outside! No 3 Lines / Hamburger Needed */}
      <div className="md:hidden border-t border-slate-100 bg-slate-50/90 px-3 py-2 overflow-x-auto scrollbar-none">
        <div className="flex items-center space-x-2 text-xs font-bold whitespace-nowrap">
          <Link 
            href="/" 
            className="px-3 py-1.5 rounded-full bg-white text-slate-800 shadow-sm border border-slate-200/80 hover:bg-blue-50 hover:text-blue-600"
          >
            Home
          </Link>
          <Link 
            href="/services" 
            className="px-3 py-1.5 rounded-full bg-white text-slate-800 shadow-sm border border-slate-200/80 hover:bg-blue-50 hover:text-blue-600"
          >
            Services
          </Link>
          <Link 
            href="/blog" 
            className="px-3 py-1.5 rounded-full bg-white text-slate-800 shadow-sm border border-slate-200/80 hover:bg-blue-50 hover:text-blue-600"
          >
            Blog
          </Link>
          <Link 
            href="/#gallery" 
            className="px-3 py-1.5 rounded-full bg-white text-slate-800 shadow-sm border border-slate-200/80 hover:bg-blue-50 hover:text-blue-600"
          >
            Photos
          </Link>
          <Link 
            href="/reviews" 
            className="px-3 py-1.5 rounded-full bg-white text-slate-800 shadow-sm border border-slate-200/80 hover:bg-blue-50 hover:text-blue-600"
          >
            Reviews
          </Link>
          <Link 
            href="/contact" 
            className="px-3 py-1.5 rounded-full bg-white text-slate-800 shadow-sm border border-slate-200/80 hover:bg-blue-50 hover:text-blue-600"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
