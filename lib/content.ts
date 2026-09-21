import siteData from '@/content/site.json';
import metricsData from '@/content/metrics.json';
import stackData from '@/content/stack.json';
import caseStudiesData from '@/content/case-studies.json';
import projectsData from '@/content/projects.json';
import writingData from '@/content/writing.json';
import educationData from '@/content/education.json';
import {
  SiteSchema,
  MetricSchema,
  StackItemSchema,
  CaseStudySchema,
  ProjectSchema,
  WritingItemSchema,
  EducationSchema,
  type Site,
  type Metric,
  type StackItem,
  type CaseStudy,
  type Project,
  type WritingItem,
  type Education,
} from './schemas';
import { z } from 'zod';

interface ContentFlags {
  id: string;
  enabled: boolean;
  order: number;
  featured?: boolean;
  highlight?: boolean;
}

export function enabledSorted<T extends ContentFlags>(items: T[]): T[] {
  return items
    .filter((item) => item.enabled)
    .sort((a, b) => a.order - b.order);
}

export function featured<T extends ContentFlags>(items: T[]): T[] {
  return enabledSorted(items).filter((item) => item.featured);
}

// Validate content at module load (build time)
export const site = SiteSchema.parse(siteData);
export const metrics = enabledSorted(z.array(MetricSchema).parse(metricsData));
export const stack = enabledSorted(z.array(StackItemSchema).parse(stackData));
export const caseStudies = enabledSorted(z.array(CaseStudySchema).parse(caseStudiesData));
export const projects = z.array(ProjectSchema).parse(projectsData);
export const writing = z.array(WritingItemSchema).parse(writingData);
export const education = enabledSorted(z.array(EducationSchema).parse(educationData));

export const featuredProjects = featured(projects);
export const featuredWriting = featured(writing);
