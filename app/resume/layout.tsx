import type { Metadata } from 'next';
import { OG_BASE, TWITTER_CARD, ogImages } from '@/lib/seo';
import { profile } from '@/lib/profile';

const title = `Resume | ${profile.name}`;
const description = `Resume of ${profile.name}, ${profile.jobTitle} with ${profile.yearsOfExperience} years across telecom and financial systems. Java, Spring Boot, microservices, and data platforms.`;

export const metadata: Metadata = {
  title: 'Resume',
  description,
  alternates: {
    canonical: '/resume',
  },
  openGraph: {
    ...OG_BASE,
    title,
    description,
    url: '/resume',
    images: ogImages(title),
  },
  twitter: {
    ...TWITTER_CARD,
    title,
    description,
  },
};

export default function ResumeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
