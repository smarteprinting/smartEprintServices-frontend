import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import SiteLayout from './components/SiteLayout';

const inter = Inter({ subsets: ['latin'], preload: false });

export const metadata = {
  metadataBase: new URL('https://smarteprintservices.com'),
  title: 'Smart ePrint Services | Online Retailer for Printers, Scanners, Ink & Toner',
  description:
    'Smart ePrint Services is an online retailer offering printers, scanners, ink, toner, accessories, and office printing supplies across the USA. Owned and operated by Innovation Dynamics Group LLC.',
  keywords: [
    'printer store',
    'scanner store',
    'buy printers online',
    'ink and toner cartridges',
    'laser printer',
    'all-in-one printer',
    'business printing solutions',
    'genuine printer supplies',
    'online printer retailer',
  ],
  applicationName: 'Smart ePrint Services',
  authors: [{ name: 'Smart ePrint Services' }],
  creator: 'Innovation Dynamics Group LLC',
  publisher: 'Innovation Dynamics Group LLC',
  alternates: {
    canonical: 'https://smarteprintservices.com',
  },
  openGraph: {
    title: 'Smart ePrint Services | Online Retailer for Printers, Scanners, Ink & Toner',
    description:
      'Shop genuine printers, document scanners, original ink & toner cartridges, and printing accessories across the United States. Owned and operated by Innovation Dynamics Group LLC.',
    url: 'https://smarteprintservices.com',
    siteName: 'Smart ePrint Services',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://smarteprintservices.com/hero-printer-clean.avif',
        width: 1200,
        height: 630,
        alt: 'Smart ePrint Services printers and office technology',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Smart ePrint Services | Online Retailer for Printers, Scanners, Ink & Toner',
    description:
      'Explore reliable printers, scanners, ink, toner, and accessories for home offices and businesses. Fast US shipping.',
    images: ['https://smarteprintservices.com/hero-printer-clean.avif'],
  },
  icons: {
    icon: '/svg-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b5c91',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {process.env.NODE_ENV === 'production' && (
          <Script
            id="cookieyes"
            strategy="beforeInteractive"
            src="https://cdn-cookieyes.com/client_data/c10dbbbd8867014a9030d7802875f74c/script.js"
          />
        )}

        <Script
          id="jivo-chat"
          src="https://code.jivosite.com/widget/d7JjftxKYx"
          strategy="afterInteractive"
        />
        <SiteLayout>{children}</SiteLayout>

        {/* Organization structured data — Online Retailer */}
        <Script
          id="org-structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Smart ePrint Services",
              "alternateName": "SmartEprint Services",
              "legalName": "Innovation Dynamics Group LLC",
              "url": "https://smarteprintservices.com",
              "logo": "https://smarteprintservices.com/logo.png",
              "description": "Smart ePrint Services is an independent online retailer selling printers, scanners, ink, toner, and printing accessories across the United States. Owned and operated by Innovation Dynamics Group LLC, an HP Authorized Reseller.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "11397 Quincy St NE",
                "addressLocality": "Blaine",
                "addressRegion": "MN",
                "postalCode": "55434",
                "addressCountry": "US"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+1-877-765-2289",
                  "contactType": "customer service",
                  "areaServed": "US",
                  "availableLanguage": "English"
                }
              ],
              "email": "support@smarteprintservices.com",
              "sameAs": [
                "https://www.smarteprintservices.com"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}

