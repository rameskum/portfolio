import { z } from 'zod';

// Every list item is either visible or hidden (`enabled`) and ordered by
// `order`. This is the only visibility switch.
export const ContentFlagsSchema = z.object({
  id: z.string(),
  enabled: z.boolean(),
  order: z.number(),
});

export const SiteSchema = z.object({
  wordmark: z.string(),
  location: z.string(),
  statement: z.object({
    leading: z.string(),
    accent: z.string(),
    trailing: z.string(),
  }),
  email: z.string().email(),
  resumePath: z.string(),
});

export const SocialSchema = ContentFlagsSchema.extend({
  label: z.string(),
  href: z.string().url(),
});

// Single source of truth for the person's profile copy, parsed from
// content/profile.md (frontmatter + bio body). Experience length and all
// identity strings live here, not hardcoded in components or metadata.
export const ProfileSchema = z.object({
  name: z.string(),
  headline: z.string(),
  jobTitle: z.string(),
  identityStack: z.string(),
  statusLabel: z.string(),
  yearsOfExperience: z.string(),
  summary: z.string(),
  metaDescription: z.string(),
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
  ownershipLine: z.string().optional(),
  teamSize: z.string().nullable().optional(),
  beforeAfter: z.string().optional(),
  talkingPoint: z.string().optional(),
  bullets: z.array(z.string()),
  visuals: z.array(z.string()).optional(),
  stack: z.array(z.string()),
  motif: z.string().optional(),
  writingSlug: z.string().nullable().optional(),
});

export const ProjectSectionSchema = z.enum(['selected-builds', 'also-ships-ui']);

export const ProjectSchema = ContentFlagsSchema.extend({
  highlight: z.boolean().optional(),
  section: ProjectSectionSchema,
  title: z.string(),
  description: z.string(),
  stack: z.array(z.string()),
  liveUrl: z.string().url().nullable().optional(),
  repoUrl: z.string().url().nullable().optional(),
  href: z.string().nullable().optional(),
  image: z.string().nullable().optional(),
  motif: z.string().optional(),
  eyebrow: z.string().optional(),
  beforeAfter: z.string().optional(),
  talkingPoint: z.string().optional(),
  ownershipLine: z.string().optional(),
  bullets: z.array(z.string()).optional(),
});

export const EducationSchema = ContentFlagsSchema.extend({
  school: z.string(),
  degree: z.string(),
  years: z.string(),
  note: z.string().nullable().optional(),
});

export type Site = z.infer<typeof SiteSchema>;
export type Social = z.infer<typeof SocialSchema>;
export type ProjectSection = z.infer<typeof ProjectSectionSchema>;
export type Profile = z.infer<typeof ProfileSchema>;
export type Metric = z.infer<typeof MetricSchema>;
export type StackItem = z.infer<typeof StackItemSchema>;
export type CaseStudy = z.infer<typeof CaseStudySchema>;
export type Project = z.infer<typeof ProjectSchema>;
export type Education = z.infer<typeof EducationSchema>;
