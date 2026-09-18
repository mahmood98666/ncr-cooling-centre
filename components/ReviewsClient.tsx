'use client';

import { useState } from 'react';
import { Star, ShieldCheck, ExternalLink, ThumbsUp, MessageSquare, MapPin } from 'lucide-react';
import { googleReviewsData } from '@/lib/reviewsData';
import { businessInfo } from '@/lib/businessData';

export function ReviewsClient() {
  const [filter, setFilter] = useState('all');

  const filteredReviews = filter === 'all'
    ? googleReviewsData
    : googleReviewsData.filter(r => r.service.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header & Google Scorecard */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              Verified Google Business Reviews
            </div>

            <h1 className="text-3xl sm:text-5xl font-black mb-4">
              What Gurgaon Says About Us
            </h1>
            <p className="text-slate-300 text-base sm:text-lg mb-8">
              Read authentic feedback from genuine homeowners and residents in Gurugram who trusted NCR Cooling Centre for their appliance repairs.
            </p>

            {/* Google Business Rating Badge */}
            <div className="bg-slate-800/90 rounded-3xl p-6 sm:p-8 border border-slate-700 shadow-2xl backdrop-blur-md max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                
                <div className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                    <img 
                      src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                      alt="Google" 
                      className="h-6 object-contain" 
                    />
                    <span className="font-bold text-slate-300 text-sm">Rating</span>
                  </div>
                  <div className="flex items-baseline justify-center sm:justify-start gap-2">
                    <span className="text-5xl font-black text-white">5.0</span>
                    <div className="flex text-amber-400 text-xl">★★★★★</div>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">Based on {businessInfo.reviewCount}+ Verified Google Reviews</p>
                </div>

                {/* Rating bars */}
                <div className="w-full sm:w-48 space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-300 w-3">5★</span>
                    <div className="flex-1 bg-slate-700 h-2.5 rounded-full overflow-hidden">
                      <div className="bg-amber-400 h-full w-full rounded-full"></div>
                    </div>
                    <span className="text-slate-400 text-[10px]">100%</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500">
                    <span className="w-3">4★</span>
                    <div className="flex-1 bg-slate-700 h-2.5 rounded-full"></div>
                    <span className="text-[10px]">0%</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500">
                    <span className="w-3">3★</span>
                    <div className="flex-1 bg-slate-700 h-2.5 rounded-full"></div>
                    <span className="text-[10px]">0%</span>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-6 border-t border-slate-700 flex flex-col sm:flex-row gap-3">
                <a
                  href={businessInfo.googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl text-xs transition-colors shadow"
                >
                  <MessageSquare className="h-4 w-4" />
                  Leave a Review on Google
                </a>
                <a
                  href={businessInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-4 rounded-xl text-xs transition-colors shadow"
                >
                  <ExternalLink className="h-4 w-4" />
                  View All on Google Maps
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Reviews Filter & List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {[
            { label: 'All Reviews', val: 'all' },
            { label: 'AC & Gas Refilling', val: 'ac' },
            { label: 'Geyser Service', val: 'geyser' },
            { label: 'Refrigerator', val: 'refrigerator' },
            { label: 'Washing Machine', val: 'washing' },
            { label: 'Microwave', val: 'microwave' }
          ].map(tab => (
            <button
              key={tab.val}
              onClick={() => setFilter(tab.val)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                filter === tab.val
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-full ${review.avatarColor} text-white font-bold flex items-center justify-center text-sm shadow-sm`}>
                      {review.avatarLetter}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm">{review.name}</h3>
                      <div className="flex items-center gap-1 text-slate-500 text-xs">
                        <MapPin className="h-3 w-3 text-slate-400" />
                        <span>{review.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex text-amber-400 text-xs">
                    ★★★★★
                  </div>
                </div>

                <div className="bg-slate-50 text-blue-700 text-[11px] font-semibold px-2.5 py-1 rounded-md inline-block mb-3 border border-slate-100">
                  {review.service}
                </div>

                <p className="text-slate-700 text-sm leading-relaxed mb-4 italic">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span>{review.date}</span>
                <span className="flex items-center gap-1 text-emerald-600 font-medium">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Google Verified User
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Review Encouragement Box */}
        <div className="mt-16 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 text-center max-w-3xl mx-auto shadow-sm">
          <ThumbsUp className="h-10 w-10 text-blue-600 mx-auto mb-3" />
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Did We Recently Service Your Appliance?</h2>
          <p className="text-slate-600 text-sm mb-6">
            Your honest feedback helps us maintain our 5.0 Google rating and lets other Gurgaon residents find dependable appliance technicians.
          </p>
          <a
            href={businessInfo.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3 rounded-full text-sm shadow-md transition-colors"
          >
            <Star className="h-4 w-4 fill-amber-300 text-amber-300" />
            Rate Us 5 Stars on Google
          </a>
        </div>

      </div>
    </div>
  );
}
