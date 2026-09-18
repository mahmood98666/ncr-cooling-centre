import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight, ShieldCheck, Star, Phone, MessageCircle, BookOpen } from 'lucide-react';
import { blogsData } from '@/lib/blogData';
import { businessInfo } from '@/lib/businessData';

export const metadata: Metadata = {
  title: 'Appliance Care Blog & Expert Maintenance Tips | NCR Cooling Centre Gurgaon',
  description: 'Read in-depth appliance repair and maintenance guides by NCR Cooling Centre Gurgaon. Learn AC gas filling, geyser fixes, washing machine troubleshooting & fridge tips.',
};

export default function BlogPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Blog Hero Banner */}
      <section className="bg-gradient-to-br from-[#072c49] via-[#0a4877] to-[#0284c7] text-white py-14 sm:py-20 border-b border-sky-800/60 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-sky-950/70 border border-sky-400/40 text-sky-200 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-sm">
            <BookOpen className="h-3.5 w-3.5" />
            <span>NCR Cooling Centre Knowledge Hub</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
            Appliance Care & Repair Guides
          </h1>
          <p className="text-sky-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Written by certified senior technicians at <strong className="text-white">NCR Cooling Centre</strong>. Practical DIY diagnostics, preventive maintenance guides, and local advice for Gurgaon residents.
          </p>
        </div>
      </section>

      {/* Blog Listing Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Latest Expert Articles ({blogsData.length})
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Practical guides on AC, Gas Filling, Geyser, Washing Machine, Fridge & Microwave
            </p>
          </div>
          <span className="hidden sm:inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
            Gurugram Appliance Care
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogsData.map((blog) => (
            <article 
              key={blog.id} 
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Container - aspect-[16/10] so full image is seen */}
              <Link href={`/blog/${blog.slug}`} className="block relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                <Image 
                  src={blog.image} 
                  alt={blog.title} 
                  fill 
                  unoptimized
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-blue-600 text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-md">
                  {blog.category}
                </div>
              </Link>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {blog.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {blog.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                    <Link href={`/blog/${blog.slug}`}>
                      {blog.title}
                    </Link>
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-500">
                    By NCR Cooling Centre
                  </span>
                  <Link 
                    href={`/blog/${blog.slug}`}
                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-extrabold text-xs sm:text-sm group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-16 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-amber-500 font-bold text-xs mb-2">
              <Star className="h-4 w-4 fill-amber-400" />
              <span>5.0 Star Google Rated · 21 Verified Reviews</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
              Have an Appliance Emergency in Gurgaon?
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Don’t wait for small issues to turn into costly breakdowns. Call NCR Cooling Centre for quick 30–45 minute doorstep inspection across Gurugram.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href={`tel:${businessInfo.phone}`}
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-3 px-6 rounded-xl text-sm shadow-md transition-all active:scale-95 whitespace-nowrap"
            >
              <Phone className="h-4 w-4" />
              <span>Call: {businessInfo.phoneDisplay}</span>
            </a>
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl text-sm shadow-md transition-all active:scale-95 whitespace-nowrap"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp Booking</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
