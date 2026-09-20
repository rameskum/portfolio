import type { Metadata } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['italic'],
  variable: '--font-instrument-serif',
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
      <body className={`${inter.variable} ${instrumentSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
