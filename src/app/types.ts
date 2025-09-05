import { z } from "zod";

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

// Main Data Schema
export const DataSchema = z.object({
  hero: HeroSchema,
  about: AboutSchema,
  coreValues: CoreValuesSchema,
  work: WorkSchema,
  skills: SkillsSchema,
  contact: ContactSchema,
  navigation: NavigationSchema,
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