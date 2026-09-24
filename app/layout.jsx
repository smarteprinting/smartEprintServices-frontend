import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import SiteLayout from './components/SiteLayout';

const inter = Inter({ subsets: ['latin'], preload: false });

export const metadata = {
  metadataBase: new URL('https://smarteprintservices.com'),
  title: 'SmartEprint Services | Printer, Scanner & Office Tech Solutions',
  description:
    'SmartEprint Services provides printers, scanners, office technology, and on-site support for homes, small businesses, schools, and organizations across the USA.',
  keywords: [
    'printer store',
    'scanner store',
    'office printers',
    'printer installation',
    'laser printer',
    'all-in-one printer',
    'business printing solutions',
    'smart print services',
    'on-site technology support',
  ],
  applicationName: 'SmartEprint Services',
  authors: [{ name: 'SmartEprint Services' }],
  creator: 'SmartEprint Services',
  publisher: 'SmartEprint Services',
  alternates: {
    canonical: 'https://smarteprintservices.com',
  },
  openGraph: {
    title: 'SmartEprint Services | Printer, Scanner & Office Tech Solutions',
    description:
      'Shop printers, scanners, and office tech solutions with expert guidance, fast shipping, and on-site support across the United States.',
    url: 'https://smarteprintservices.com',
    siteName: 'SmartEprint Services',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://smarteprintservices.com/hero-printer-clean.avif',
        width: 1200,
        height: 630,
        alt: 'SmartEprint Services printers and office technology',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmartEprint Services | Printer, Scanner & Office Tech Solutions',
    description:
      'Explore reliable printer, scanner, and office technology solutions for home offices, businesses, and organizations.',
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
      </body>
    </html>
  );
}

