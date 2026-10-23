import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { profile } from '@/lib/profile';

const title = `Resume | ${profile.name}`;
const description = `Resume of ${profile.name}, ${profile.jobTitle} with ${profile.yearsOfExperience} years across telecom and financial systems. Java, Spring Boot, microservices, and data platforms.`;

export const metadata: Metadata = pageMetadata({ path: '/resume', title, description });

export default function ResumeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
