import Image from 'next/image';
import Link from 'next/link';
import { 
  PhoneCall, ShieldCheck, Clock, Wrench, MapPin, Star, 
  CheckCircle2, Flame, Wind, Snowflake, MessageCircle, 
  ExternalLink, ChevronRight, Sparkles, Award, BookOpen
} from 'lucide-react';
import { businessInfo } from '@/lib/businessData';
import { servicesData } from '@/lib/servicesData';
import { googleReviewsData } from '@/lib/reviewsData';
import { blogsData } from '@/lib/blogData';
import { WorkGallery } from '@/components/WorkGallery';
import { GoogleProfileCard } from '@/components/GoogleProfileCard';

export default function Home() {
  return (
    <div className="space-y-0">
      {/* Hero Section: 50% Name & Title, 50% Google Business Profile Card */}
      <section className="relative bg-gradient-to-br from-[#072c49] via-[#0a4877] to-[#0284c7] text-white overflow-hidden py-10 sm:py-12 lg:py-14">
        {/* Luminous sky blue ambient glows */}
        <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-sky-400/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left 50%: Name, Title, Details & Quick Actions */}
            <div className="w-full">
              <div className="inline-flex items-center gap-2 bg-sky-950/70 border border-sky-400/40 text-sky-200 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-sm">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                <span>5.0 Star Google Rated · 21 Verified Reviews</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white tracking-tight leading-tight mb-3">
                NCR Cooling Centre
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-sky-200 mb-5">
                Appliance Repair & AC Gas Filling in Gurgaon
              </p>

              <p className="text-sm sm:text-base text-sky-100/90 leading-relaxed mb-6 max-w-xl">
                Fast 30–45 minute doorstep service across all sectors of Gurugram. Expert certified technicians for <strong className="text-white">AC Repair, AC Gas Refilling, Refrigerator, Washing Machine, Geyser</strong>, and <strong className="text-white">Microwave</strong> repairs with 100% genuine parts.
              </p>
            </div>

            {/* Right 50%: The Exact Google Profile Card */}
            <div className="w-full flex justify-center lg:justify-end">
              <GoogleProfileCard />
            </div>

          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div className="max-w-2xl">
              <span className="text-blue-600 font-bold uppercase tracking-wider text-xs sm:text-sm">
                Doorstep Repair Services
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
                Specialized Home Appliance Services
              </h2>
              <p className="text-slate-600 mt-3 text-base">
                We repair all major appliance brands with authentic spare parts, transparent estimates, and service warranty across Gurgaon.
              </p>
            </div>
            <Link 
              href="/services" 
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold text-sm"
            >
              <span>Explore All Detailed Services</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div 
                key={service.id} 
                className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>

                    <ul className="space-y-1.5 mb-6 text-xs text-slate-700">
                      {service.features.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-blue-600 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                    <Link 
                      href={`/services#${service.id}`}
                      className="text-blue-600 font-bold text-sm hover:underline"
                    >
                      View Service Details &rarr;
                    </Link>
                    <a
                      href={`tel:${businessInfo.phone}`}
                      className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Live Work Gallery Component */}
      <WorkGallery />

      {/* Why Choose Us */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-wider text-xs sm:text-sm">
              Why Gurugram Trusts Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Fast, Reliable & Honest Doorstep Service
            </h2>
            <p className="text-slate-600 mt-3">
              We know the frustration of an appliance failing in harsh weather. Here is our customer satisfaction pledge:
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            <div className="bg-slate-50 p-4 sm:p-7 rounded-2xl sm:rounded-3xl border border-slate-100 text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 text-blue-600 w-11 h-11 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-6">
                <Clock className="h-5 w-5 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-sm sm:text-lg font-bold text-slate-900 mb-1 sm:mb-2">30–45 Mins Arrival</h3>
              <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 sm:line-clamp-none">
                Stationed near Sector 49, Sohna Rd & Golf Course Rd for immediate response.
              </p>
            </div>

            <div className="bg-slate-50 p-4 sm:p-7 rounded-2xl sm:rounded-3xl border border-slate-100 text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 text-blue-600 w-11 h-11 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-6">
                <ShieldCheck className="h-5 w-5 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-sm sm:text-lg font-bold text-slate-900 mb-1 sm:mb-2">100% Genuine Parts</h3>
              <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 sm:line-clamp-none">
                Only authentic factory spares used for Voltas, Daikin, LG, Samsung, Bajaj.
              </p>
            </div>

            <div className="bg-slate-50 p-4 sm:p-7 rounded-2xl sm:rounded-3xl border border-slate-100 text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 text-blue-600 w-11 h-11 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-6">
                <Award className="h-5 w-5 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-sm sm:text-lg font-bold text-slate-900 mb-1 sm:mb-2">90 Days Warranty</h3>
              <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 sm:line-clamp-none">
                Peace of mind with warranty on replaced components and follow-up support.
              </p>
            </div>

            <div className="bg-slate-50 p-4 sm:p-7 rounded-2xl sm:rounded-3xl border border-slate-100 text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 text-blue-600 w-11 h-11 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-6">
                <Wrench className="h-5 w-5 sm:h-8 sm:w-8" />
              </div>
              <h3 className="text-sm sm:text-lg font-bold text-slate-900 mb-1 sm:mb-2">Upfront Quotes</h3>
              <p className="text-slate-600 text-xs sm:text-sm line-clamp-3 sm:line-clamp-none">
                Transparent diagnostic breakdown before repair. Zero hidden charges.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Google Reviews Testimonial Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200" id="reviews">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between mb-14 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 text-amber-900 px-3 py-1 rounded-full text-xs font-bold mb-2">
                <Star className="h-3.5 w-3.5 fill-amber-500 text-amber-500" />
                Google 5.0 Star Rating
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                What Customers Say on Google
              </h2>
              <p className="text-slate-600 mt-2 text-base">
                Real customer feedback from homeowners and tenants across Gurgaon.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={businessInfo.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-slate-300 text-slate-800 font-bold px-5 py-3 rounded-full hover:bg-slate-50 text-sm transition-colors shadow-sm"
              >
                Write a Google Review
              </a>
              <Link
                href="/reviews"
                className="bg-blue-600 text-white font-bold px-6 py-3 rounded-full hover:bg-blue-700 text-sm transition-colors shadow-md"
              >
                View All 21 Reviews &rarr;
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {googleReviewsData.slice(0, 6).map((rev) => (
              <div 
                key={rev.id}
                className="bg-white p-7 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full ${rev.avatarColor} text-white font-bold flex items-center justify-center text-sm shadow`}>
                        {rev.avatarLetter}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">{rev.name}</h4>
                        <p className="text-xs text-slate-500">{rev.location}</p>
                      </div>
                    </div>
                    <div className="flex text-amber-400 text-xs">
                      ★★★★★
                    </div>
                  </div>

                  <p className="text-slate-700 text-sm leading-relaxed mb-4">
                    &ldquo;{rev.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span>{rev.service}</span>
                  <span className="text-emerald-600 font-medium">✓ Verified</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Latest Expert Appliance Guides & Blogs */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-sky-100 border border-sky-300 text-sky-800 px-3 py-1 rounded-full text-xs font-bold mb-2">
                <BookOpen className="h-3.5 w-3.5" />
                NCR Cooling Centre Knowledge Hub
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                Latest Appliance Care & Repair Guides
              </h2>
              <p className="text-slate-600 mt-2 text-sm sm:text-base">
                Professional troubleshooting, gas filling advice, and tips by certified technicians.
              </p>
            </div>
            <Link
              href="/blog"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-full text-sm transition-colors shadow-md flex items-center gap-2 self-start md:self-auto"
            >
              <span>View All 6 Guides</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogsData.slice(0, 3).map((blog) => (
              <article 
                key={blog.id} 
                className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
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

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                      <Link href={`/blog/${blog.slug}`}>
                        {blog.title}
                      </Link>
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                      {blog.excerpt}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">By NCR Cooling Centre</span>
                    <Link href={`/blog/${blog.slug}`} className="text-blue-600 font-bold hover:underline">
                      Read Guide &rarr;
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Area Coverage Section */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MapPin className="h-10 w-10 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
            Serving All Localities & Sectors in Gurgaon
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-10 text-sm sm:text-base">
            Our repair vans and technicians are distributed across key transit points in Gurugram to guarantee fast arrival within 30 to 45 minutes:
          </p>
          
          <div className="flex flex-wrap justify-center gap-2.5 max-w-5xl mx-auto">
            {businessInfo.areasServed.map((area, idx) => (
              <span 
                key={idx} 
                className="bg-slate-100 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 text-slate-700 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 py-16 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-black mb-6">
            Broken Appliance? Let’s Fix It Today!
          </h2>
          <p className="text-blue-100 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Don’t let your AC blow hot air, fridge spoil groceries, or geyser run cold. Call our expert technicians in Gurgaon right now.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={`tel:${businessInfo.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-slate-100 font-extrabold px-8 py-4 rounded-xl text-lg shadow-2xl transition-all"
            >
              <PhoneCall className="h-5 w-5" />
              Call Now: {businessInfo.phoneDisplay}
            </a>
            <a 
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold px-8 py-4 rounded-xl text-lg shadow-2xl transition-all"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </a>
          </div>

          <p className="text-xs text-blue-200 mt-6">
            Open Daily 8:00 AM – 7:30 PM · Sarswati Kunj 2, Orchid Petals, Sector 49, Gurugram
          </p>
        </div>
      </section>
    </div>
  );
}
