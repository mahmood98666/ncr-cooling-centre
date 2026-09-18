'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { galleryPhotos, GalleryPhoto } from '@/lib/galleryData';
import { businessInfo } from '@/lib/businessData';
import { Camera, Phone, MessageSquare, MapPin, CheckCircle2, Search, ExternalLink, Sparkles, X, Tag, ZoomIn } from 'lucide-react';

export function WorkGallery() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(16);

  const filtered = useMemo(() => {
    return galleryPhotos.filter(p => {
      const matchesTab = activeTab === 'all' || p.category === activeTab;
      const matchesSearch = !searchQuery.trim() || 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.caption.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.seoKeywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  const displayedPhotos = filtered.slice(0, visibleCount);

  // Structured Schema for Google Image SEO
  const imageGallerySchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'NCR Cooling Centre Appliance Repair & AC Service Work Gallery',
    description: 'Authentic field photographs of AC repair, refrigerator servicing, washing machine repair, geyser installation, and microwave servicing by NCR Cooling Centre in Gurgaon.',
    publisher: {
      '@type': 'LocalBusiness',
      name: businessInfo.name,
      telephone: businessInfo.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: businessInfo.address,
        addressLocality: businessInfo.city,
        addressRegion: businessInfo.state,
        postalCode: businessInfo.pincode,
        addressCountry: 'IN'
      }
    },
    hasPart: galleryPhotos.map(p => ({
      '@type': 'ImageObject',
      contentUrl: `https://ncrcoolingcentre.com${p.src}`,
      name: p.title,
      description: p.caption,
      caption: p.caption,
      author: {
        '@type': 'Organization',
        name: 'NCR Cooling Centre'
      },
      contentLocation: {
        '@type': 'Place',
        name: p.location
      }
    }))
  };

  return (
    <section className="py-12 sm:py-20 bg-slate-950 text-white relative overflow-hidden" id="gallery">
      {/* Google Image SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallerySchema) }}
      />

      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-blue-500/15 border border-blue-400/30 text-blue-300 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[11px] sm:text-sm font-semibold mb-3 shadow-sm">
            <Camera className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-400" />
            <span>100% Authentic Live Work & Storefront Photos (Gurgaon)</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
            Our Live Work & Technicians in Action
          </h2>

          <p className="text-slate-300 text-xs sm:text-base lg:text-lg leading-relaxed px-2">
            Real photographs taken by <strong className="text-white font-semibold">NCR Cooling Centre</strong> technicians on-site across Sector 49, Sector 48, Sector 50, and Gurugram.
          </p>

          {/* Search Bar */}
          <div className="mt-6 max-w-xl mx-auto relative px-2 sm:px-0">
            <Search className="absolute left-5 sm:left-4 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search (LG, Samsung, Voltas, PCB, Fridge)..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(16);
              }}
              className="w-full pl-10 sm:pl-12 pr-10 py-2.5 sm:py-3 bg-slate-900 border border-slate-700/80 rounded-full text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-6 sm:right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mt-5">
            {[
              { key: 'all', label: 'All Works', count: galleryPhotos.length },
              { key: 'ac', label: 'AC Repair', count: galleryPhotos.filter(p => p.category === 'ac').length },
              { key: 'refrigerator', label: 'Fridge & Coolers', count: galleryPhotos.filter(p => p.category === 'refrigerator').length },
              { key: 'washing-machine', label: 'Washing Machine', count: galleryPhotos.filter(p => p.category === 'washing-machine').length },
              { key: 'microwave-geyser', label: 'Microwave & Geyser', count: galleryPhotos.filter(p => p.category === 'microwave-geyser').length },
              { key: 'storefront', label: 'Storefront', count: galleryPhotos.filter(p => p.category === 'storefront').length },
            ].map(tab => (
              <button
                key={tab.key}
                onClick={() => {
                  setActiveTab(tab.key);
                  setVisibleCount(16);
                }}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-sm font-semibold transition-all ${
                  activeTab === tab.key
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30 ring-1 ring-blue-400/40'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {tab.label} <span className="opacity-70 text-[10px] sm:text-xs">({tab.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* 2-Columns on Mobile, 3-Columns on Tablet/Desktop, 4-Columns on Large Screen */}
        {displayedPhotos.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/60 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm mb-2">No matching photos found for "{searchQuery}"</p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveTab('all'); }}
              className="text-blue-400 text-xs sm:text-sm font-semibold hover:underline"
            >
              Reset filters & show all photos
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-5">
            {displayedPhotos.map((photo) => (
              <figure
                key={photo.id}
                itemScope
                itemType="https://schema.org/ImageObject"
                className="group bg-slate-900/90 rounded-xl sm:rounded-2xl overflow-hidden border border-slate-800 shadow-md hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col"
              >
                {/* Image Box */}
                <div 
                  onClick={() => setSelectedPhoto(photo)}
                  className="relative aspect-[4/3] sm:aspect-[4/3] w-full bg-slate-950 overflow-hidden cursor-pointer"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    unoptimized
                    itemProp="contentUrl"
                    className="object-contain group-hover:scale-105 transition-transform duration-300 p-1"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {/* Category Pill Over Image */}
                  <div className="absolute top-1.5 left-1.5 sm:top-2.5 sm:left-2.5 bg-slate-950/80 backdrop-blur-md px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[9px] sm:text-[11px] font-semibold text-blue-300 border border-slate-700/60 truncate max-w-[120px]">
                    {photo.categoryName}
                  </div>
                  <div className="absolute bottom-1.5 right-1.5 sm:bottom-2.5 sm:right-2.5 bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white p-1 rounded-md sm:hidden">
                    <ZoomIn className="h-3 w-3" />
                  </div>
                </div>

                {/* Description Underneath Every Image */}
                <figcaption className="p-2.5 sm:p-4 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Company Branding & Verified Badge */}
                    <div className="flex items-center justify-between gap-1 mb-1.5">
                      <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs font-bold text-blue-400 uppercase tracking-wide truncate">
                        <CheckCircle2 className="h-3 w-3 text-emerald-400 shrink-0" />
                        <span itemProp="author" className="truncate">{photo.companyName}</span>
                      </span>
                    </div>

                    {/* Image Title */}
                    <h3 
                      itemProp="name"
                      onClick={() => setSelectedPhoto(photo)}
                      className="text-[11px] sm:text-sm font-bold text-white mb-1.5 group-hover:text-blue-300 transition-colors cursor-pointer line-clamp-2 leading-snug"
                    >
                      {photo.title}
                    </h3>

                    {/* Detailed Description */}
                    <p 
                      itemProp="description"
                      className="text-slate-300 text-[10px] sm:text-xs leading-relaxed mb-2 line-clamp-2 sm:line-clamp-3"
                    >
                      {photo.caption}
                    </p>

                    {/* Location Badge */}
                    <div className="flex items-center gap-1 text-[9px] sm:text-[11px] text-slate-400 mb-2">
                      <MapPin className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-red-400 shrink-0" />
                      <span className="truncate">{photo.location}</span>
                    </div>
                  </div>

                  {/* Direct Contact & Booking Row Under Description */}
                  <div className="pt-2 border-t border-slate-800/80 flex items-center gap-1.5 sm:gap-2">
                    <a
                      href={`tel:${photo.phone}`}
                      className="flex-1 inline-flex items-center justify-center gap-1 bg-blue-600 hover:bg-blue-700 text-white text-[10px] sm:text-xs font-bold py-1.5 px-2 rounded-lg transition-colors shadow-sm"
                    >
                      <Phone className="h-3 w-3" />
                      <span>Call</span>
                    </a>
                    <a
                      href={`https://wa.me/919053653619?text=Hello%20NCR%20Cooling%20Centre,%20I%20saw%20your%20work%20photo%20"${encodeURIComponent(photo.title)}"%20and%20need%20repair%20service.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1 bg-emerald-600 hover:bg-emerald-700 text-white text-[10px] sm:text-xs font-bold py-1.5 px-2 rounded-lg transition-colors shadow-sm"
                    >
                      <MessageSquare className="h-3 w-3" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        )}

        {/* Load More Button */}
        {visibleCount < filtered.length && (
          <div className="mt-8 sm:mt-12 text-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 16)}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-full transition-all shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 text-xs sm:text-sm"
            >
              <span>Load More Real Photos ({filtered.length - visibleCount} Remaining) &darr;</span>
            </button>
          </div>
        )}

        {/* Google Maps Profile Link Banner */}
        <div className="mt-10 sm:mt-14 p-5 sm:p-8 bg-gradient-to-r from-blue-900/30 via-slate-900 to-indigo-900/30 border border-blue-500/30 rounded-2xl sm:rounded-3xl text-center flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 shadow-xl">
          <div className="text-left">
            <h4 className="text-base sm:text-xl font-bold text-white mb-1 flex items-center gap-2">
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400 shrink-0" />
              Verified Google Business Photos & Customer Reviews
            </h4>
            <p className="text-slate-300 text-[11px] sm:text-sm max-w-2xl">
              All photos are captured by NCR Cooling Centre service technicians at residential and commercial client locations across Gurgaon. 100% genuine spares & 90 days repair warranty.
            </p>
          </div>
          <a
            href={businessInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1.5 sm:gap-2 bg-white text-slate-900 font-bold px-5 py-2.5 sm:px-6 sm:py-3 rounded-full hover:bg-slate-100 transition-all text-xs sm:text-sm shadow-md hover:shadow-lg"
          >
            <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-blue-600" />
            <span>Open Google Profile &rarr;</span>
          </a>
        </div>

      </div>

      {/* Full Resolution Lightbox Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="bg-slate-900 rounded-2xl sm:rounded-3xl overflow-hidden max-w-3xl w-full border border-slate-700 shadow-2xl flex flex-col max-h-[92vh]"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative h-64 sm:h-[420px] w-full bg-slate-950 flex items-center justify-center p-2">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                fill
                unoptimized
                className="object-contain"
              />
              <button 
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-3 right-3 bg-slate-900/80 hover:bg-slate-800 text-white text-sm font-bold h-8 w-8 rounded-full flex items-center justify-center border border-slate-700 transition-colors z-10"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-6 overflow-y-auto">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20">
                  {selectedPhoto.categoryName} · {selectedPhoto.companyName}
                </span>
                <span className="flex items-center gap-1 text-[11px] sm:text-xs text-slate-400">
                  <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-red-400" />
                  {selectedPhoto.location}
                </span>
              </div>

              <h3 className="text-lg sm:text-2xl font-bold text-white mb-2">{selectedPhoto.title}</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">{selectedPhoto.caption}</p>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                {selectedPhoto.seoKeywords.map((kw, idx) => (
                  <span key={idx} className="text-[10px] sm:text-xs bg-slate-800 text-slate-300 px-2 py-0.5 rounded-md border border-slate-700">
                    #{kw}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-slate-800">
                <a 
                  href={`tel:${selectedPhoto.phone}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl text-xs sm:text-sm transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call {selectedPhoto.phoneDisplay}</span>
                </a>
                <a 
                  href={`https://wa.me/919053653619?text=Hello%20NCR%20Cooling%20Centre,%20I%20saw%20your%20work%20photo%20"${encodeURIComponent(selectedPhoto.title)}"%20and%20want%20to%20book%20service.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl text-xs sm:text-sm transition-colors"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>WhatsApp Booking</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
