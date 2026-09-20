import siteData from '@/content/site.json';
import metricsData from '@/content/metrics.json';
import stackData from '@/content/stack.json';
import caseStudiesData from '@/content/case-studies.json';
import projectsData from '@/content/projects.json';
import writingData from '@/content/writing.json';
import educationData from '@/content/education.json';

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

export const site = siteData;
export const metrics = enabledSorted(metricsData);
export const stack = enabledSorted(stackData);
export const caseStudies = enabledSorted(caseStudiesData);
export const projects = projectsData;
export const writing = writingData;
export const education = educationData;

export const featuredProjects = featured(projectsData);
export const featuredWriting = featured(writingData);
