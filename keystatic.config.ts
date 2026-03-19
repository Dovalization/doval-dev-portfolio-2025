import { config, collection, singleton, fields } from "@keystatic/core";

const contentSchemaFields = {
  hero: fields.object({
    image: fields.object({
      src: fields.text({ label: "Source URL" }),
      alt: fields.text({ label: "Alt text" }),
    }),
    headingTop: fields.text({ label: "Heading Top" }),
    headingAccent: fields.text({ label: "Heading Accent" }),
    subheading: fields.text({ label: "Subheading", multiline: true }),
    ctas: fields.array(
      fields.object({
        label: fields.text({ label: "Label" }),
        href: fields.text({ label: "Link" }),
        primary: fields.checkbox({ label: "Primary CTA", defaultValue: false }),
      }),
      { label: "CTAs" },
    ),
  }),
  about: fields.object({
    title: fields.text({ label: "Title" }),
    image: fields.object({
      src: fields.text({ label: "Source URL" }),
      alt: fields.text({ label: "Alt text" }),
      width: fields.integer({ label: "Width" }),
      height: fields.integer({ label: "Height" }),
    }),
    paragraphs: fields.array(
      fields.text({ label: "Paragraph", multiline: true }),
      { label: "Paragraphs" },
    ),
    quote: fields.text({ label: "Quote", multiline: true }),
  }),
  coreValues: fields.array(
    fields.object({
      title: fields.text({ label: "Title" }),
      text: fields.text({ label: "Text", multiline: true }),
      icon: fields.text({ label: "Icon (Feather icon name)" }),
    }),
    { label: "Core Values" },
  ),
  work: fields.object({
    title: fields.text({ label: "Title" }),
    description: fields.text({ label: "Description", multiline: true }),
    projects: fields.array(
      fields.object({
        title: fields.text({ label: "Title" }),
        description: fields.text({ label: "Description", multiline: true }),
        banner: fields.object({
          url: fields.text({ label: "Banner URL" }),
          alt: fields.text({ label: "Banner Alt text" }),
        }),
        logo: fields.object({
          url: fields.text({ label: "Logo URL" }),
          alt: fields.text({ label: "Logo Alt text" }),
          size: fields.select({
            label: "Logo Size",
            options: [
              { label: "Small", value: "small" },
              { label: "Medium", value: "medium" },
              { label: "Large", value: "large" },
            ],
            defaultValue: "medium",
          }),
        }),
        sections: fields.array(
          fields.object({
            title: fields.text({ label: "Section Title" }),
            body: fields.text({ label: "Section Body", multiline: true }),
          }),
          { label: "Sections" },
        ),
        stack: fields.array(fields.text({ label: "Technology" }), {
          label: "Stack",
        }),
      }),
      { label: "Projects" },
    ),
  }),
  skills: fields.object({
    title: fields.text({ label: "Title" }),
    description: fields.text({ label: "Description", multiline: true }),
    sections: fields.array(
      fields.object({
        key: fields.text({ label: "Key" }),
        title: fields.text({ label: "Title" }),
        icon: fields.text({ label: "Icon" }),
        items: fields.array(
          fields.object({
            name: fields.text({ label: "Name" }),
            desc: fields.text({ label: "Description" }),
          }),
          { label: "Items" },
        ),
      }),
      { label: "Skill Sections" },
    ),
  }),
  contact: fields.object({
    title: fields.text({ label: "Title" }),
    description: fields.text({ label: "Description", multiline: true }),
    email: fields.text({ label: "Email" }),
    social: fields.object({
      linkedin: fields.text({ label: "LinkedIn URL" }),
      github: fields.text({ label: "GitHub URL" }),
    }),
    links: fields.object({
      email: fields.text({ label: "Email Link Label" }),
      downloadCv: fields.text({ label: "Download CV Label" }),
      linkedin: fields.text({ label: "LinkedIn Label" }),
      github: fields.text({ label: "GitHub Label" }),
    }),
    lookingFor: fields.object({
      title: fields.text({ label: "Looking For Title" }),
      items: fields.array(
        fields.object({
          title: fields.text({ label: "Item Title" }),
          description: fields.text({
            label: "Item Description",
            multiline: true,
          }),
        }),
        { label: "Items" },
      ),
    }),
  }),
  navigation: fields.object({
    navItems: fields.array(
      fields.object({
        href: fields.text({ label: "Link" }),
        label: fields.text({ label: "Label" }),
      }),
      { label: "Nav Items" },
    ),
    social: fields.object({
      github: fields.text({ label: "GitHub URL" }),
      linkedin: fields.text({ label: "LinkedIn URL" }),
    }),
  }),
  blog: fields.object({
    title: fields.text({ label: "Blog Title" }),
    subtitle: fields.text({ label: "Subtitle", multiline: true }),
    allPosts: fields.text({ label: "All Posts Label" }),
    readingTime: fields.text({ label: "Reading Time Label" }),
    publishedOn: fields.text({ label: "Published On Label" }),
    backToBlog: fields.text({ label: "Back to Blog Label" }),
    typeLabels: fields.object({
      post: fields.text({ label: "Post Type Label" }),
      devlog: fields.text({ label: "Devlog Type Label" }),
    }),
    emptyState: fields.text({ label: "Empty State Message" }),
    featured: fields.text({ label: "Featured Label" }),
    readMore: fields.text({ label: "Read More Label" }),
    filterAll: fields.text({ label: "Filter All Label" }),
    filters: fields.text({ label: "Filters Label" }),
    clearFilters: fields.text({ label: "Clear Filters Label" }),
    newerPost: fields.text({ label: "Newer Post Label" }),
    olderPost: fields.text({ label: "Older Post Label" }),
  }),
};

const postSchema = {
  title: fields.text({ label: "Title" }),
  excerpt: fields.text({ label: "Excerpt", multiline: true }),
  created_at: fields.datetime({ label: "Created At" }),
  updated_at: fields.datetime({ label: "Updated At" }),
  type: fields.select({
    label: "Type",
    options: [
      { label: "Post", value: "post" },
      { label: "Devlog", value: "devlog" },
    ],
    defaultValue: "post",
  }),
  status: fields.select({
    label: "Status",
    options: [
      { label: "Draft", value: "draft" },
      { label: "Published", value: "published" },
    ],
    defaultValue: "draft",
  }),
  cover_image: fields.text({ label: "Cover Image URL" }),
  tags: fields.array(fields.text({ label: "Tag" }), { label: "Tags" }),
  tier: fields.integer({ label: "Tier (1–3)" }),
  pillar: fields.text({ label: "Pillar" }),
  lang: fields.ignored(),
  content: fields.mdx({ label: "Content", extension: "md" }),
};

export default config({
  storage: {
    kind: "local",
  },
  ui: {
    brand: { name: "doval.dev" },
    navigation: {
      singletons: ["contentEn", "contentPt"],
      collections: ["postsEn", "postsPt"],
    },
  },
  singletons: {
    contentEn: singleton({
      label: "Content (EN)",
      path: "content/en/content",
      schema: contentSchemaFields,
    }),
    contentPt: singleton({
      label: "Content (PT)",
      path: "content/pt/content",
      schema: contentSchemaFields,
    }),
  },
  collections: {
    postsEn: collection({
      label: "Posts (EN)",
      slugField: "title",
      path: "content/en/posts/*",
      format: { contentField: "content" },
      schema: postSchema,
    }),
    postsPt: collection({
      label: "Posts (PT)",
      slugField: "title",
      path: "content/pt/posts/*",
      format: { contentField: "content" },
      schema: postSchema,
    }),
  },
});
