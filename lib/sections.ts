// Anchor ids for the homepage sections, and the nav entries that point at
// them. Section modules, the Header and the Hero call to action all read from
// here, so renaming an id is a type error instead of a silently dead link.

export const SECTION_IDS = {
  work: 'work',
  projects: 'projects',
  alsoShipsUi: 'also-ships-ui',
  writing: 'writing',
  contact: 'contact',
} as const;

export type SectionId = (typeof SECTION_IDS)[SectionKey];
type SectionKey = keyof typeof SECTION_IDS;

export const sectionHref = (id: SectionId) => `#${id}`;

export const NAV_LINKS = [
  { href: sectionHref(SECTION_IDS.work), label: 'Work' },
  { href: sectionHref(SECTION_IDS.projects), label: 'Projects' },
  { href: sectionHref(SECTION_IDS.writing), label: 'Writing' },
  { href: '/resume', label: 'Resume' },
  { href: sectionHref(SECTION_IDS.contact), label: 'Contact' },
] as const;
