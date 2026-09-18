'use client';

import { useState, useMemo } from 'react';
import { 
  Search, Sparkles, Wind, Snowflake, Wrench, Flame, 
  Clock, MapPin, ChevronDown, ChevronUp, Check, PhoneCall
} from 'lucide-react';
import { seoTagCategories, getTotalSeoTagCount } from '@/lib/seoTagsData';
import { businessInfo } from '@/lib/businessData';

const categoryIcons: Record<string, any> = {
  'also-known-as': Sparkles,
  'ac-gas-repair': Wind,
  'fridge-refrigerator': Snowflake,
  'washing-machine': Wrench,
  'geyser-water-heater': Flame,
  'coolers-cooling-centre': Wind,
  'microwave-appliances': Clock,
  'locality-near-me': MapPin,
};

export function SeoTagDirectory() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const totalCount = useMemo(() => getTotalSeoTagCount(), []);

  // Filter tags based on selected category & search input
  const filteredCategories = useMemo(() => {
    return seoTagCategories.map(cat => {
      let tags = cat.tags;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        tags = tags.filter(t => t.toLowerCase().includes(q));
      }
      return {
        ...cat,
        tags
      };
    }).filter(cat => {
      if (activeCategory === 'all') return cat.tags.length > 0;
      return cat.id === activeCategory && cat.tags.length > 0;
    });
  }, [activeCategory, searchQuery]);

  const totalFilteredTags = useMemo(() => {
    return filteredCategories.reduce((sum, c) => sum + c.tags.length, 0);
  }, [filteredCategories]);

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200" id="directory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 text-blue-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            <span>Local SEO & Google Search Directory</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            NCR Cooling Centre Is Also Known As
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2 max-w-2xl mx-auto leading-relaxed">
            Browse <strong>{totalCount}+ verified search tags</strong>, business aliases, and doorstep repair queries used by Gurgaon residents to find our certified technicians.
          </p>
        </div>

        {/* Live Search & Filter Bar */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 1,400+ tags (e.g. 'Sector 49', 'gas filling', 'LG', 'cooler', 'near me')..."
              className="w-full pl-12 pr-10 py-3.5 bg-white border border-slate-300 rounded-2xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-full w-6 h-6 flex items-center justify-center transition-colors"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
          {searchQuery && (
            <p className="text-xs text-slate-500 mt-2 text-center">
              Found <strong>{totalFilteredTags}</strong> matching tags for &ldquo;{searchQuery}&rdquo;
            </p>
          )}
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          <button
            onClick={() => setActiveCategory('all')}
            className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 flex-shrink-0 ${
              activeCategory === 'all'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <span>All Tags</span>
            <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${
              activeCategory === 'all' ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-600'
            }`}>
              {totalCount}
            </span>
          </button>

          {seoTagCategories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Sparkles;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 flex-shrink-0 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{cat.name.split(' ')[0]} {cat.name.split(' ')[1]}</span>
                <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                  isActive ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  {cat.tags.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tags Grid Display */}
        <div className="space-y-8">
          {filteredCategories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Sparkles;
            // Limit visible tags if not expanded and no active search query
            const visibleLimit = isExpanded || searchQuery ? cat.tags.length : 36;
            const displayedTags = cat.tags.slice(0, visibleLimit);
            const remainingCount = cat.tags.length - visibleLimit;

            return (
              <div 
                key={cat.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                        {cat.name}
                      </h3>
                      <p className="text-xs text-slate-500">
                        {cat.description}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full self-start sm:self-auto">
                    {cat.tags.length} Search Queries
                  </span>
                </div>

                {/* Tag Pills */}
                <div className="flex flex-wrap gap-2">
                  {displayedTags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 bg-slate-50 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 border border-slate-200/80 text-slate-700 text-xs px-3 py-1.5 rounded-xl font-medium transition-all cursor-default group"
                    >
                      <span className="text-[10px] text-slate-400 group-hover:text-blue-500">#</span>
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>

                {remainingCount > 0 && (
                  <div className="mt-4 pt-4 border-t border-slate-100 text-center">
                    <button
                      onClick={() => setIsExpanded(true)}
                      className="text-xs font-bold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1"
                    >
                      <span>Show all {cat.tags.length} tags in {cat.name} (+{remainingCount} more)</span>
                      <ChevronDown className="h-3.5 w-3.5" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Global Expand / Collapse Button */}
        {!searchQuery && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition-all shadow-md"
            >
              <span>{isExpanded ? 'Collapse Directory View' : `Explore All 1,400+ Local SEO Search Tags`}</span>
              {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
          </div>
        )}

        {/* Booking Strip */}
        <div className="mt-12 bg-gradient-to-r from-blue-700 via-blue-600 to-sky-700 rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-lg sm:text-xl font-black">
              Searching for Fast Doorstep Appliance Repair in Gurgaon?
            </h4>
            <p className="text-sky-100 text-xs sm:text-sm mt-1 max-w-xl">
              Whether it’s AC gas filling, cooler motor repairs, fridge cooling issues, or washing machine fixes, our technicians reach your home in 30–45 minutes.
            </p>
          </div>
          <a
            href={`tel:${businessInfo.phone}`}
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-sky-50 font-extrabold px-6 py-3 rounded-xl text-sm transition-all shadow-lg flex-shrink-0"
          >
            <PhoneCall className="h-4 w-4" />
            <span>Call {businessInfo.phoneDisplay}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
