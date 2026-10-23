import siteData from '@/content/site.json';
import socialsData from '@/content/socials.json';
import metricsData from '@/content/metrics.json';
import stackData from '@/content/stack.json';
import caseStudiesData from '@/content/case-studies.json';
import projectsData from '@/content/projects.json';
import educationData from '@/content/education.json';
import {
  SiteSchema,
  SocialSchema,
  MetricSchema,
  StackItemSchema,
  CaseStudySchema,
  ProjectSchema,
  EducationSchema,
} from './schemas';
import { z } from 'zod';

export interface RawContent {
  site: unknown;
  socials: unknown;
  metrics: unknown;
  stack: unknown;
  caseStudies: unknown;
  projects: unknown;
  education: unknown;
}

// An item is visible when `enabled`, and visible items are shown in `order`.
function visible<T extends { enabled: boolean; order: number }>(items: T[]): T[] {
  return items
    .filter((item) => item.enabled)
    .sort((a, b) => a.order - b.order);
}

// Validates every collection (hidden items included, so a malformed draft
// still fails the build) and returns only what the site shows, already
// ordered and grouped. Every export below is therefore ready to render.
export function buildContent(raw: RawContent) {
  const projects = visible(z.array(ProjectSchema).parse(raw.projects));
  return {
    site: SiteSchema.parse(raw.site),
    socials: visible(z.array(SocialSchema).parse(raw.socials)),
    metrics: visible(z.array(MetricSchema).parse(raw.metrics)),
    stack: visible(z.array(StackItemSchema).parse(raw.stack)),
    caseStudies: visible(z.array(CaseStudySchema).parse(raw.caseStudies)),
    selectedBuilds: projects.filter((p) => p.section === 'selected-builds'),
    alsoShipsUi: projects.filter((p) => p.section === 'also-ships-ui'),
    education: visible(z.array(EducationSchema).parse(raw.education)),
  };
}

// Validate content at module load (build time)
export const {
  site,
  socials,
  metrics,
  stack,
  caseStudies,
  selectedBuilds,
  alsoShipsUi,
  education,
} = buildContent({
  site: siteData,
  socials: socialsData,
  metrics: metricsData,
  stack: stackData,
  caseStudies: caseStudiesData,
  projects: projectsData,
  education: educationData,
});
