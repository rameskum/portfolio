import { describe, expect, it } from 'vitest';
import { NAV_LINKS, SECTION_IDS } from './sections';

describe('sections', () => {
  it('has unique section ids', () => {
    const ids = Object.values(SECTION_IDS);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('keeps the existing anchor ids stable', () => {
    expect(Object.values(SECTION_IDS).sort()).toEqual(
      ['also-ships-ui', 'contact', 'projects', 'work', 'writing']
    );
  });

  it('points every fragment nav link at a declared section', () => {
    const ids = new Set<string>(Object.values(SECTION_IDS));
    const fragments = NAV_LINKS.filter((l) => l.href.startsWith('#'));
    expect(fragments.length).toBeGreaterThan(0);
    for (const link of fragments) expect(ids.has(link.href.slice(1))).toBe(true);
  });
});
