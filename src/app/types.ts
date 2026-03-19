import { z } from "zod";

// Locale Schema
export const LocaleSchema = z.enum(["en", "pt"]);
export type Locale = z.infer<typeof LocaleSchema>;

// Hero Section Schema
export const HeroSchema = z.object({
  image: z.object({
    src: z.string(),
    alt: z.string(),
  }),
  headingTop: z.string(),
  headingAccent: z.string(),
  subheading: z.string(),
  ctas: z.array(z.object({
    label: z.string(),
    href: z.string(),
    primary: z.boolean().optional(),
  })),
});

// About Section Schema
export const AboutSchema = z.object({
  title: z.string(),
  image: z.object({
    src: z.string(),
    alt: z.string(),
    width: z.number(),
    height: z.number(),
  }),
  paragraphs: z.array(z.string()),
  quote: z.string(),
});

// Core Values Schema
export const CoreValueSchema = z.object({
  title: z.string(),
  text: z.string(),
  icon: z.string(),
});

export const CoreValuesSchema = z.array(CoreValueSchema);

// Work Section Schema
export const ProjectSchema = z.object({
  title: z.string(),
  description: z.string(),
  banner: z.object({
    url: z.string(),
    alt: z.string(),
  }),
  logo: z.object({
    url: z.string(),
    alt: z.string(),
    size: z.enum(["small", "medium", "large"]).optional(),
  }),
  sections: z.array(z.object({
    title: z.string(),
    body: z.string(),
  })),
  stack: z.array(z.string()),
});

export const WorkSchema = z.object({
  title: z.string(),
  description: z.string(),
  projects: z.array(ProjectSchema),
});

// Skills Section Schema
export const SkillItemSchema = z.object({
  name: z.string(),
  desc: z.string(),
});

export const SkillSectionSchema = z.object({
  key: z.string(),
  title: z.string(),
  icon: z.string(),
  items: z.array(SkillItemSchema),
});

export const SkillsSchema = z.object({
  title: z.string(),
  description: z.string(),
  sections: z.array(SkillSectionSchema),
});

// Contact Section Schema
export const ContactSchema = z.object({
  title: z.string(),
  description: z.string(),
  email: z.string().email(),
  social: z.object({
    linkedin: z.string().url(),
    github: z.string().url(),
  }),
  links: z.object({
    email: z.string(),
    downloadCv: z.string(),
    linkedin: z.string(),
    github: z.string(),
  }),
  lookingFor: z.object({
    title: z.string(),
    items: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })),
  }),
});

// Navigation Schema
export const NavigationSchema = z.object({
  navItems: z.array(z.object({
    href: z.string(),
    label: z.string(),
  })),
  social: z.object({
    github: z.string().url(),
    linkedin: z.string().url(),
  }),
});

// Blog Dictionary Schema
export const BlogDictionarySchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  allPosts: z.string(),
  readingTime: z.string(),
  publishedOn: z.string(),
  backToBlog: z.string(),
  typeLabels: z.object({
    post: z.string(),
    devlog: z.string(),
  }),
  emptyState: z.string(),
  featured: z.string(),
  readMore: z.string(),
  filterAll: z.string(),
  filters: z.string(),
  clearFilters: z.string(),
  newerPost: z.string(),
  olderPost: z.string(),
});

// Post Schemas
export const PostMetaSchema = z.object({
  title: z.string(),
  created_at: z.coerce.date(),
  updated_at: z.coerce.date(),
  type: z.enum(["post", "devlog"]),
  status: z.enum(["draft", "published"]),
  tags: z.array(z.string()).default([]),
  tier: z.number().int().min(1).max(3).optional(),
  pillar: z.string().optional(),
  source: z.string().optional(),
  cover_image: z.string().optional(),
  excerpt: z.string(),
  lang: z.enum(["en", "pt"]).default("en"),
});

export const PostSchema = PostMetaSchema.extend({
  slug: z.string(),
  rawContent: z.string(),
  readingTimeMinutes: z.number(),
});

// Main Data Schema
export const DataSchema = z.object({
  hero: HeroSchema,
  about: AboutSchema,
  coreValues: CoreValuesSchema,
  work: WorkSchema,
  skills: SkillsSchema,
  contact: ContactSchema,
  navigation: NavigationSchema,
  blog: BlogDictionarySchema,
});

// Export types
export type HeroData = z.infer<typeof HeroSchema>;
export type AboutData = z.infer<typeof AboutSchema>;
export type CoreValue = z.infer<typeof CoreValueSchema>;
export type Project = z.infer<typeof ProjectSchema>;
export type WorkData = z.infer<typeof WorkSchema>;
export type SkillsData = z.infer<typeof SkillsSchema>;
export type ContactData = z.infer<typeof ContactSchema>;
export type NavigationData = z.infer<typeof NavigationSchema>;
export type AppData = z.infer<typeof DataSchema>;
export type BlogDictionary = z.infer<typeof BlogDictionarySchema>;
export type PostMeta = z.infer<typeof PostMetaSchema>;
export type Post = z.infer<typeof PostSchema>;