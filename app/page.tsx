import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Work } from '@/components/work';
import { Projects } from '@/components/projects';
import { Writing } from '@/components/writing';
import { Contact } from '@/components/contact';
import { profile } from '@/lib/profile';
import { pageMetadata, personJsonLd } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  path: '/',
  title: `${profile.name} - ${profile.jobTitle}`,
  description: profile.metaDescription,
});

// Fully static: served from the CDN edge, no server round-trip on first paint.
export const dynamic = 'force-static';

export default function Home() {  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd()) }}
      />
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-primary focus:text-primary-foreground focus:top-4 focus:left-4"
      >
        Skip to main content
      </a>
      <div className="max-w-7xl mx-auto border-x border-border bg-background">
        <Header />
        <main id="main-content">
          <Hero />
          <Work />
          <Projects />
          <Writing />
          <Contact />
        </main>
        <footer className="border-t border-border px-6 md:px-12 py-8">
          <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
