import { describe, expect, it } from 'vitest';
import { pageMetadata, personJsonLd, SITE_URL } from './seo';
import { profile } from './profile';

describe('pageMetadata', () => {
  const meta = pageMetadata({ path: '/resume', title: 'Resume | Ada', description: 'About Ada' });

  it('sets the canonical path and an absolute document title', () => {
    expect(meta.alternates?.canonical).toBe('/resume');
    expect(meta.title).toEqual({ absolute: 'Resume | Ada' });
    expect(meta.description).toBe('About Ada');
  });

  it('declares a complete Open Graph block that matches the document title', () => {
    expect(meta.openGraph).toMatchObject({
      type: 'website',
      siteName: profile.name,
      title: 'Resume | Ada',
      description: 'About Ada',
      url: '/resume',
      images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Resume | Ada' }],
    });
  });

  it('declares a complete Twitter block', () => {
    expect(meta.twitter).toMatchObject({
      card: 'summary_large_image',
      title: 'Resume | Ada',
      description: 'About Ada',
      images: ['/og-image.png'],
    });
  });
});

describe('site identity', () => {
  it('has a site URL without a trailing slash', () => {
    expect(SITE_URL).toMatch(/^https:\/\/[^/]+$/);
  });

  it('builds the Person JSON-LD from the profile', () => {
    expect(personJsonLd()).toMatchObject({
      '@type': 'Person',
      name: profile.name,
      url: SITE_URL,
      jobTitle: profile.jobTitle,
    });
  });
});
