import { describe, expect, it } from 'vitest';
import { buildContent, caseStudies, site, selectedBuilds, alsoShipsUi, socials } from './content';

const project = (over: Record<string, unknown>) => ({
  id: 'p',
  enabled: true,
  order: 1,
  section: 'selected-builds',
  title: 'T',
  description: 'D',
  stack: [],
  image: '/p.jpg',
  ...over,
});

const base = {
  site: {
    wordmark: 'W',
    location: 'L',
    statement: { leading: 'a', accent: 'b', trailing: 'c' },
    email: 'a@b.co',
    resumePath: '/r.pdf',
  },
  socials: [],
  metrics: [],
  stack: [],
  caseStudies: [],
  projects: [],
  education: [],
};

describe('buildContent', () => {
  it('drops hidden items and orders the rest', () => {
    const { socials } = buildContent({
      ...base,
      socials: [
        { id: 'b', enabled: true, order: 2, label: 'B', href: 'https://b.example' },
        { id: 'hidden', enabled: false, order: 0, label: 'H', href: 'https://h.example' },
        { id: 'a', enabled: true, order: 1, label: 'A', href: 'https://a.example' },
      ],
    });
    expect(socials.map((s) => s.id)).toEqual(['a', 'b']);
  });

  it('groups visible projects by section', () => {
    const { selectedBuilds, alsoShipsUi } = buildContent({
      ...base,
      projects: [
        project({ id: 'ui', section: 'also-ships-ui', order: 1 }),
        project({ id: 'second', order: 2 }),
        project({ id: 'first', order: 1 }),
        project({ id: 'draft', order: 0, enabled: false }),
      ],
    });
    expect(selectedBuilds.map((p) => p.id)).toEqual(['first', 'second']);
    expect(alsoShipsUi.map((p) => p.id)).toEqual(['ui']);
  });

  it('rejects an unknown section', () => {
    expect(() =>
      buildContent({ ...base, projects: [project({ section: 'selected-build' })] })
    ).toThrow();
  });

  it('still validates hidden items', () => {
    expect(() =>
      buildContent({ ...base, projects: [project({ enabled: false, title: undefined })] })
    ).toThrow();
  });
});

describe('site content', () => {
  it('keeps the locked case study order', () => {
    expect(caseStudies.map((c) => c.id)).toEqual(['td-endava', 'amdocs', 'homelab']);
  });

  it('keeps the locked location', () => {
    expect(site.location).toBe('TORONTO · CA');
  });

  it('only exposes visible projects and socials', () => {
    expect(selectedBuilds.length).toBeGreaterThan(0);
    expect([...selectedBuilds, ...alsoShipsUi, ...socials].every((i) => i.enabled)).toBe(true);
  });
});

describe('illustration keys', () => {
  it('rejects an unknown motif', () => {
    expect(() =>
      buildContent({ ...base, projects: [project({ motif: 'NoSuchMotif' })] })
    ).toThrow();
  });

  it('requires a visible project to have an image or a motif', () => {
    expect(() => buildContent({ ...base, projects: [project({ image: undefined })] })).toThrow(/image or a motif/);
    expect(() => buildContent({ ...base, projects: [project({ image: '/a.jpg', motif: undefined })] })).not.toThrow();
    expect(() => buildContent({ ...base, projects: [project({ motif: 'PipelineFlow' })] })).not.toThrow();
  });

  it('lets a hidden project omit its art', () => {
    expect(() => buildContent({ ...base, projects: [project({ enabled: false })] })).not.toThrow();
  });
});
