import type { Metadata, Viewport } from 'next';
import './globals.css';
import { weddingData } from '@/data/wedding';

export const viewport: Viewport = {
  themeColor: weddingData.seo.themeColor,
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(weddingData.seo.siteUrl),
  title: weddingData.seo.title,
  description: weddingData.seo.description,
  keywords: weddingData.seo.keywords,
  authors: [{ name: weddingData.seo.author }],
  creator: weddingData.seo.author,
  publisher: weddingData.seo.author,
  alternates: {
    canonical: weddingData.seo.canonicalUrl,
  },
  icons: {
    icon: [
      { url: weddingData.seo.favicon, type: 'image/webp' },
    ],
    apple: [
      { url: weddingData.seo.appleTouchIcon, sizes: '180x180', type: 'image/webp' },
    ],
    shortcut: [weddingData.seo.favicon],
  },
  openGraph: {
    title: weddingData.seo.title,
    description: weddingData.seo.description,
    url: weddingData.seo.canonicalUrl,
    siteName: `${weddingData.couple.combinedNames} Wedding`,
    locale: weddingData.seo.locale,
    type: weddingData.seo.ogType,
    images: [
      {
        url: weddingData.seo.ogImage,
        width: 1200,
        height: 675,
        alt: weddingData.seo.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: weddingData.seo.twitterCard,
    title: weddingData.seo.title,
    description: weddingData.seo.description,
    images: [weddingData.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: weddingData.seo.title,
    description: weddingData.seo.description,
    startDate: '2026-12-15T10:00:00+05:30',
    endDate: '2026-12-17T23:00:00+05:30',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: weddingData.venue.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: weddingData.venue.address,
        addressLocality: weddingData.venue.city,
        addressCountry: 'IN',
      },
    },
    image: [`${weddingData.seo.siteUrl}${weddingData.seo.ogImage}`],
    organizer: {
      '@type': 'Person',
      name: weddingData.couple.combinedNames,
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@400;600;700;800&family=Alex+Brush&family=Asul:wght@400;700&family=EB+Garamond:ital,wght@0,400..800;1,400..800&family=Elsie+Swash+Caps:wght@400;900&family=Great+Vibes&family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500;600;700&family=Jost:wght@300;400;500;600;700&family=Lunasima:wght@400;700&family=Lusitana:wght@400;700&family=Luxurious+Script&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
        <link rel="preload" as="image" href="/invitation/page1_sky.webp" type="image/webp" />
        <link rel="preload" as="image" href="/invitation/page1_temple.webp" type="image/webp" />
        <link rel="preload" as="image" href="/invitation/page1_tree.webp" type="image/webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-[#580B1A] selection:text-[#FFFDF8]">
        {children}
      </body>
    </html>
  );
}
