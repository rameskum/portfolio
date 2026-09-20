import { z } from 'zod';

export const ContentFlagsSchema = z.object({
  id: z.string(),
  enabled: z.boolean(),
  order: z.number(),
  featured: z.boolean().optional(),
  highlight: z.boolean().optional(),
});

export const SiteSchema = z.object({
  name: z.string(),
  wordmark: z.string(),
  location: z.string(),
  headline: z.string(),
  statusLabel: z.string(),
  statement: z.object({
    leading: z.string(),
    accent: z.string(),
    trailing: z.string(),
  }),
  summary: z.string(),
  email: z.string().email(),
  resumePath: z.string(),
  socials: z.array(
    z.object({
      id: z.string(),
      label: z.string(),
      href: z.string().url(),
      enabled: z.boolean(),
      order: z.number(),
    })
  ),
});

export const MetricSchema = ContentFlagsSchema.extend({
  value: z.string(),
  label: z.string(),
  source: z.string().optional(),
});

export const StackItemSchema = ContentFlagsSchema.extend({
  label: z.string(),
});

export const CaseStudySchema = ContentFlagsSchema.extend({
  org: z.string(),
  role: z.string(),
  location: z.string().optional(),
  start: z.string(),
  end: z.string().nullable(),
  title: z.string(),
  summary: z.string(),
  bullets: z.array(z.string()),
  metrics: z.array(
    z.object({
      value: z.string(),
      label: z.string(),
    })
  ),
  stack: z.array(z.string()),
  motif: z.string().optional(),
  writingSlug: z.string().nullable().optional(),
});

export const ProjectSchema = ContentFlagsSchema.extend({
  title: z.string(),
  description: z.string(),
  stack: z.array(z.string()),
  liveUrl: z.string().url().nullable().optional(),
  repoUrl: z.string().url().nullable().optional(),
  href: z.string().nullable().optional(),
  image: z.string().nullable().optional(),
  motif: z.string().optional(),
  tier: z.enum(['primary', 'secondary', 'archived']),
});

export const WritingItemSchema = ContentFlagsSchema.extend({
  slug: z.string(),
  title: z.string(),
  excerpt: z.string(),
  date: z.string(),
  tags: z.array(z.string()),
  source: z.string(),
  externalUrl: z.string().url().nullable().optional(),
  bodyPath: z.string().nullable().optional(),
});

export const EducationSchema = z.object({
  id: z.string(),
  enabled: z.boolean(),
  school: z.string(),
  degree: z.string(),
  years: z.string(),
  note: z.string().nullable().optional(),
});

export type Site = z.infer<typeof SiteSchema>;
export type Metric = z.infer<typeof MetricSchema>;
export type StackItem = z.infer<typeof StackItemSchema>;
export type CaseStudy = z.infer<typeof CaseStudySchema>;
export type Project = z.infer<typeof ProjectSchema>;
export type WritingItem = z.infer<typeof WritingItemSchema>;
export type Education = z.infer<typeof EducationSchema>;
