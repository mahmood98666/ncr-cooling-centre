import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2, PhoneCall, MessageCircle, AlertCircle, Wrench, ShieldCheck, Clock, HelpCircle } from 'lucide-react';
import { servicesData } from '@/lib/servicesData';
import { businessInfo } from '@/lib/businessData';

export const metadata: Metadata = {
  title: 'Doorstep Appliance Repair Services in Gurgaon | AC, Gas Filling, Geyser, Fridge, Washing Machine',
  description: 'Complete home appliance repair in Gurgaon. AC repair, pure R32/R410A gas filling, geyser heating coil replacement, refrigerator compressor service, washing machine and microwave repairs.',
  keywords: [
    'AC repair services Gurgaon',
    'AC gas filling Gurgaon Sector 49',
    'Geyser repair near me Gurgaon',
    'Refrigerator repair Gurugram',
    'Washing machine service Gurgaon',
    'Microwave oven repair Gurgaon'
  ]
};

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block bg-blue-600/30 border border-blue-400/40 text-blue-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            Certified Doorstep Technicians · Gurugram
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            Expert Appliance Repair Services in Gurgaon
          </h1>
          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From emergency AC breakdowns and refrigerant gas refilling to geyser heating coil replacements and washing machine spin failures — we provide guaranteed, transparent, same-day repairs across all Gurgaon sectors.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a 
              href={`tel:${businessInfo.phone}`}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-full font-bold shadow-lg shadow-blue-900/40 transition-transform hover:scale-105 text-sm sm:text-base"
            >
              <PhoneCall className="h-4 w-4" />
              Call for Quick Visit: {businessInfo.phoneDisplay}
            </a>
            <a 
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3.5 rounded-full font-bold shadow-lg shadow-emerald-900/40 transition-transform hover:scale-105 text-sm sm:text-base"
            >
              <MessageCircle className="h-4 w-4" />
              Book on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Services Jump Navigation */}
      <nav aria-label="Services list" className="bg-white border-b border-slate-200 sticky top-20 z-30 shadow-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4 text-sm font-semibold text-slate-600">
            {servicesData.map((s) => (
              <a 
                key={s.id} 
                href={`#${s.id}`} 
                className="whitespace-nowrap hover:text-blue-600 transition-colors"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Services Detailed List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-16">
        {servicesData.map((service, index) => (
          <section 
            key={service.id} 
            id={service.id} 
            className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md scroll-mt-36"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              {/* Photo & Quick Stats */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-100 shadow-inner mb-6">
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill 
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>

                  {/* Brand Compatibility */}
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                      Brands Serviced:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.brands.map((b, i) => (
                        <span key={i} className="bg-white border border-slate-200 text-slate-700 text-[11px] font-semibold px-2.5 py-1 rounded">
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Call & WhatsApp Quick Buttons */}
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <a
                    href={`tel:${businessInfo.phone}`}
                    className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl text-sm transition-colors shadow-md"
                  >
                    <PhoneCall className="h-4 w-4" />
                    Book Visit
                  </a>
                  <a
                    href={`https://wa.me/919053653619?text=Hi%20NCR%20Cooling%20Centre,%20I%20need%20service%20for%20${encodeURIComponent(service.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl text-sm transition-colors shadow-md"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </a>
                </div>
              </div>

              {/* Comprehensive SEO Content */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">
                  <span>Service ID: #{service.id}</span>
                  <span>•</span>
                  <span>Verified Doorstep Service</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-4">
                  {service.title}
                </h2>

                <p className="text-slate-700 text-base leading-relaxed mb-6">
                  {service.fullDesc}
                </p>

                {/* Key Features / Inclusions */}
                <div className="mb-8">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
                    <Wrench className="h-4 w-4 text-blue-600" />
                    What&apos;s Included in Our Service:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Common Problems We Fix */}
                <div className="mb-8 bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-amber-600" />
                    Common Issues & How We Resolve Them:
                  </h3>
                  <div className="space-y-3">
                    {service.commonProblems.map((prob, i) => (
                      <div key={i} className="text-xs sm:text-sm">
                        <strong className="text-slate-900 block font-semibold">{i + 1}. {prob.problem}</strong>
                        <span className="text-slate-600">{prob.solution}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step-by-Step Procedure */}
                <div className="mb-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 mb-3 flex items-center gap-2">
                    <Clock className="h-4 w-4 text-blue-600" />
                    Our Step-by-Step Service Procedure:
                  </h3>
                  <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                    {service.process.map((step, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs flex-shrink-0">
                          {i + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* SEO FAQs */}
                {service.faqs && service.faqs.length > 0 && (
                  <div className="pt-6 border-t border-slate-200">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                      <HelpCircle className="h-3.5 w-3.5 text-blue-600" />
                      Frequently Asked Questions ({service.title}):
                    </h3>
                    <div className="space-y-3">
                      {service.faqs.map((faq, i) => (
                        <div key={i} className="text-xs sm:text-sm">
                          <strong className="text-slate-900 block font-medium">Q: {faq.q}</strong>
                          <p className="text-slate-600 text-xs mt-0.5">{faq.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Gurugram Locality & Contact CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl">
          <h2 className="text-2xl sm:text-4xl font-black mb-4">
            Need Same-Day Doorstep Service in Gurgaon?
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
            Call us directly. Our certified technicians will be at your home in Sector 49, Sohna Road, DLF, Golf Course Road, or anywhere in Gurgaon within 30 to 45 minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${businessInfo.phone}`}
              className="bg-white text-blue-700 font-bold px-8 py-3.5 rounded-full shadow-md hover:bg-slate-100 transition-colors"
            >
              Call {businessInfo.phoneDisplay}
            </a>
            <a
              href={businessInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-8 py-3.5 rounded-full shadow-md transition-colors"
            >
              WhatsApp Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
