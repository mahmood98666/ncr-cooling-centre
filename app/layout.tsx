import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { QuickActionBar } from '@/components/QuickActionBar';
import { businessInfo } from '@/lib/businessData';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://ncrcoolingcentre.in'),
  title: `${businessInfo.name} | Best AC, Fridge, Geyser & Washing Machine Repair in Gurgaon`,
  description: `Top-rated 5.0 Google rated doorstep appliance repair in Gurgaon. AC repair, AC Gas filling, Refrigerator, Geyser, Washing Machine and Microwave repair. Call ${businessInfo.phoneDisplay}.`,
  keywords: [
    'NCR Cooling Centre',
    'NCR Cooling Center',
    'Cooling Centre Near Me',
    'Cooling Center Near Me',
    'Near Me Service Center Gurgaon',
    'AC repair near me',
    'AC repair Gurgaon',
    'AC gas filling Gurgaon',
    'Cooler repair near me Gurgaon',
    'Air cooler service Gurgaon',
    'Geyser repair Gurgaon',
    'Refrigerator repair Gurugram',
    'Washing machine repair Gurgaon',
    'Microwave repair Sector 49 Gurgaon',
    'Doorstep appliance repair Gurugram',
    'Appliance service center Sector 49'
  ],
  openGraph: {
    title: `${businessInfo.name} | 5.0 Star Rated Appliance Repair Gurugram`,
    description: `Fast same-day doorstep repair for AC, Gas Filling, Fridge, Geyser, Washing Machine across all Gurgaon sectors. Call ${businessInfo.phoneDisplay}`,
    type: 'website',
    siteName: businessInfo.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${businessInfo.name} | 5.0 Star Rated Appliance Repair Gurugram`,
    description: `Doorstep AC, Geyser, Washing Machine, Fridge repair in Gurgaon. Call ${businessInfo.phoneDisplay}`,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico' },
    ],
    shortcut: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: '9d3540b4e7ba7b65',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // LocalBusiness Schema for Google Rich Snippets SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: businessInfo.name,
    alternateName: [
      'NCR Cooling Center',
      'NCR Cooling Centre Gurgaon',
      'NCR Cooling Centre Sector 49',
      'Cooling Centre Near Me',
      'NCR AC Service Centre',
      'NCR Appliance Care Gurugram'
    ],
    image: 'https://ncrcoolingcentre.in/images/real/ncr-cooling-centre-banner.jpg',
    telephone: businessInfo.phone,
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Sarswati Kunj 2, Orchid Petals, Block S, Wazirabad, Sector 49',
      addressLocality: 'Gurugram',
      addressRegion: 'Haryana',
      postalCode: '122003',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.4180,
      longitude: 77.0600
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
      ],
      opens: '08:00',
      closes: '19:30'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '21',
      bestRating: '5',
      worstRating: '1'
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-slate-50 text-slate-900" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow pb-16 md:pb-0">{children}</main>
        <Footer />
        <QuickActionBar />
      </body>
    </html>
  );
}
