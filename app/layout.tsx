import type { Metadata } from 'next';
import { Manrope, Newsreader, DM_Mono } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400'],
  style: ['italic'],
  variable: '--font-newsreader',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rameskum.com'),
  title: {
    default: 'Ramesh Kumar | Java & Spring Backend Engineer',
    template: '%s | Ramesh Kumar',
  },
  description:
    'Senior backend engineer with 7+ years building Java, Spring Boot, and Kubernetes microservices for telecom and finance.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rameskum.com',
    siteName: 'Ramesh Kumar',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ramesh Kumar | Java & Spring Backend Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${newsreader.variable} ${dmMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
