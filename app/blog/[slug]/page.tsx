import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  Calendar, Clock, User, ArrowLeft, Phone, MessageCircle, 
  CheckCircle2, ShieldCheck, Star, HelpCircle, ChevronRight, Share2 
} from 'lucide-react';
import { blogsData, BlogPost } from '@/lib/blogData';
import { businessInfo } from '@/lib/businessData';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogsData.find((b) => b.slug === resolvedParams.slug);

  if (!post) {
    return {
      title: 'Post Not Found | NCR Cooling Centre',
      description: 'The requested appliance repair blog post was not found.',
    };
  }

  return {
    title: `${post.metaTitle} | NCR Cooling Centre Gurgaon`,
    description: post.metaDesc,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDesc,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 896,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = blogsData.find((b) => b.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogsData.filter((b) => b.id !== post.id).slice(0, 3);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumb & Top Bar */}
      <div className="bg-white border-b border-slate-200 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-xs sm:text-sm text-slate-500">
          <div className="flex items-center space-x-2">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-blue-600 transition-colors">Appliance Blog</Link>
            <span>/</span>
            <span className="text-slate-800 font-semibold truncate max-w-[200px] sm:max-w-xs">
              {post.title}
            </span>
          </div>
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-bold whitespace-nowrap"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>All Articles</span>
          </Link>
        </div>
      </div>

      {/* Main Article Body */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header Metadata */}
        <div className="mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            {post.category}
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-5">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-1.5 font-medium text-slate-700">
              <User className="h-4 w-4 text-blue-600" />
              <span>{post.author}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-slate-400" />
              <span>{post.date}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-slate-400" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Featured Image - 100% full view with aspect-[16/10] */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 shadow-md mb-8 sm:mb-12 border border-slate-200">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            unoptimized
            className="object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8 text-slate-700 leading-relaxed text-base sm:text-lg">
          
          {/* Introduction */}
          <div className="p-5 sm:p-6 bg-blue-50/70 rounded-2xl border-l-4 border-blue-600 text-slate-800 text-base sm:text-lg font-medium leading-relaxed">
            {post.content.intro}
          </div>

          {/* Dynamic Sections */}
          {post.content.sections.map((section, idx) => (
            <div key={idx} className="space-y-4 pt-4 border-t border-slate-100 first:border-t-0 first:pt-0">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
                {section.heading}
              </h2>

              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {p}
                </p>
              ))}

              {section.bulletPoints && section.bulletPoints.length > 0 && (
                <ul className="space-y-2 mt-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  {section.bulletPoints.map((item, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Expert Tip Callout */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-5 sm:p-6 my-6">
            <div className="flex items-center gap-2 text-emerald-800 font-extrabold text-sm sm:text-base mb-2">
              <ShieldCheck className="h-5 w-5 text-emerald-600 flex-shrink-0" />
              <span>Pro Tip from NCR Cooling Centre Technicians</span>
            </div>
            <p className="text-emerald-950 text-sm sm:text-base leading-relaxed">
              {post.content.expertTip}
            </p>
          </div>

          {/* FAQs Section */}
          {post.content.faqs && post.content.faqs.length > 0 && (
            <div className="pt-6 border-t border-slate-200 space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <HelpCircle className="h-5 w-5 text-blue-600" />
                <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                  Frequently Asked Questions (NCR Cooling Centre Gurgaon)
                </h3>
              </div>
              <div className="space-y-3">
                {post.content.faqs.map((faq, fIdx) => (
                  <div key={fIdx} className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-1.5">
                      {faq.question}
                    </h4>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Urgent Booking Call-to-Action Card */}
          <div className="bg-gradient-to-br from-[#072c49] via-[#0a4877] to-[#0284c7] text-white rounded-2xl p-6 sm:p-8 shadow-xl mt-8">
            <div className="flex items-center gap-2 text-amber-300 text-xs font-extrabold uppercase tracking-wider mb-2">
              <Star className="h-4 w-4 fill-amber-400" />
              <span>NCR Cooling Centre · 5.0 Star Rated Appliance Care</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black mb-3">
              Need Same-Day Doorstep Repair in Gurgaon?
            </h3>
            <p className="text-sky-100 text-xs sm:text-sm mb-6 max-w-xl leading-relaxed">
              Don’t let broken appliances stress you out. Our certified technicians arrive within 30 to 45 minutes across Sector 49, Sohna Road, DLF, Golf Course Road, and all Gurgaon localities with 100% genuine parts and a 90-day warranty.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${businessInfo.phone}`}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-black py-3 px-6 rounded-xl text-sm sm:text-base shadow-md transition-all active:scale-95"
              >
                <Phone className="h-4 w-4" />
                <span>Call Now: {businessInfo.phoneDisplay}</span>
              </a>
              <a
                href={businessInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 rounded-xl text-sm sm:text-base shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp Booking</span>
              </a>
            </div>
          </div>

        </div>

        {/* Related Articles */}
        <div className="mt-12 sm:mt-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              More Expert Guides by NCR Cooling Centre
            </h3>
            <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-bold text-xs sm:text-sm">
              View All &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {relatedPosts.map((item) => (
              <Link
                key={item.id}
                href={`/blog/${item.slug}`}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col group"
              >
                <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-extrabold text-blue-600 uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm mt-1 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                  </div>
                  <span className="text-xs text-slate-400 mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                    <span>{item.readTime}</span>
                    <span className="text-blue-600 font-bold">Read &rarr;</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </article>
    </div>
  );
}
