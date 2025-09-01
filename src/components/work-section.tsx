import Collapsible from "@/components/collapsible";

const projects = [
  {
    title: "Epic Games - Internal Business Tooling Platform",
    description:
      "Full-stack development of Epic's centralized internal business tooling platform, replacing fragmented processes with coherent, scalable solutions.",
    banner: {
      url: "/images/projects/epic-bg.webp", // You'll need to create this
      alt: "Epic Games banner",
    },
    logo: {
      url: "/images/projects/epic-logo.svg", // You'll need to create this
      alt: "Epic Games logo",
      size: "small",
    },
    sections: [
      {
        title: "Challenge",
        body: "Epic's business operations were hampered by fragmented processes and scattered admin panels built on older, outdated stacks and architecture. These legacy tools were difficult to maintain and add new features to, slowing development work. Teams needed faster access to information and tools, but existing systems were unreliable and required extensive manual workflows.",
      },
      {
        title: "My Approach",
        body: "As full-stack engineer on an agile team, I worked directly with stakeholders to understand their workflows, then collaborated closely with designers to implement and refine flows. Thanks to my design background, I was able to communicate more effectively and bridge the gap between design vision and technical implementation. Focused on rapid feature delivery to unlock capabilities early and gather stakeholder feedback, with extensive testing and code reviews to ensure team reliability.",
      },
      {
        title: "Impact",
        body: "Successfully delivered multiple mission-critical tools including cosmetics management and organization management as part of Epic's centralized tooling platform. My design background enabled smoother design-to-development handoffs and faster iteration cycles. The rapid development approach allowed stakeholders to validate functionality early, reducing rework and accelerating feature rollouts across the platform.",
      },
    ],
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Zod",
      "Vitest",
      "Playwright",
      "OpenTelemetry",
      "Grafana",
    ],
  },
  {
    title: "Horizon Chase 2 - Marketing Website",
    description:
      "A high-performance, multilingual marketing site built for fast iteration by non-dev content editors.",
    banner: {
      url: "/images/projects/hc2-bg.webp",
      alt: "Horizon Chase 2 banner",
    },
    logo: {
      url: "/images/projects/hc2-logo.webp",
      alt: "Horizon Chase 2 logo",
    },
    sections: [
      {
        title: "Challenge",
        body: "The marketing team was bottlenecked by developer dependencies—they couldn't launch campaigns quickly or test different messaging approaches. Meanwhile, the existing site's poor performance was hurting SEO and user engagement.",
      },
      {
        title: "My Approach",
        body: "I spent time shadowing the marketing workflow to understand their actual content creation process. This revealed they needed visual preview capabilities and wanted to experiment with component arrangements, not just text changes. I designed a component system in Prismic that matched their mental model, then built the technical architecture around those content patterns.",
      },
      {
        title: "Impact",
        body: "Marketing team now ships campaigns 3x faster without developer involvement. The performance improvements (LCP < 2.0s) contributed to 38% organic traffic growth, but more importantly, the team can now iterate on messaging and test ideas in real-time.",
      },
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Prismic CMS",
      "Tailwind CSS",
      "Image Optimization",
      "i18n",
    ],
  },
  {
    title: "Aquiris Game Studio - Institutional Website",
    description:
      "A modern studio site reflecting a global game portfolio, built for scalability and multilingual support.",
    banner: {
      url: "/images/projects/aquiris-bg.webp",
      alt: "Aquiris Game Studio banner",
    },
    logo: { url: "/images/projects/aquiris-logo.svg", alt: "Aquiris logo" },
    sections: [
      {
        title: "Challenge",
        body: "A growing games studio with an impressive portfolio, but their web presence looked visually dated and content was difficult to update. The disconnect was hurting business development conversations and talent acquisition.",
      },
      {
        title: "My Approach",
        body: "Worked closely with leadership to understand how they wanted to position the studio globally. Designed an information architecture that showcased both technical expertise and creative range. Built a CMS structure that let different team members contribute content while maintaining brand consistency.",
      },
      {
        title: "Impact",
        body: "The professional presence opened doors to larger publishing partnerships and helped attract senior talent from major studios. More importantly, the team can now maintain their portfolio without bottlenecking on a single person.",
      },
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Prismic CMS",
      "Tailwind CSS",
      "Image Optimization",
      "i18n",
    ],
  },
  {
    title: "Wonderbox - Marketing Website",
    description:
      "An action-adventure game site highlighting player creativity, diorama gameplay, and community sharing features.",
    banner: {
      url: "/images/projects/box-bg.webp",
      alt: "Wonderbox banner",
    },
    logo: {
      url: "/images/projects/box-logo.webp",
      alt: "Wonderbox logo",
    },
    sections: [
      {
        title: "Challenge",
        body: "Needed a site to capture the creative, shareable spirit of the game while remaining performant and accessible across devices. The game's unique diorama-based gameplay required a different visual approach than typical game marketing sites.",
      },
      {
        title: "My Approach",
        body: "Built with semantic HTML, CSS, and JavaScript to highlight media assets and ensure responsive layouts. Created a flexible component structure for showcasing community-driven content while maintaining fast load times through careful image optimization and progressive enhancement.",
      },
      {
        title: "Impact",
        body: "Delivered a fast-loading, visually engaging site that increased game visibility and supported community engagement. Site achieved 95+ Lighthouse scores across all metrics and became the template for future game marketing sites at the studio.",
      },
    ],
    stack: ["HTML", "CSS", "JavaScript", "Vite", "Image Optimization"],
  },
  {
    title: "Independent Consulting Projects (2017-2023)",
    description:
      "Built digital presence solutions for clients across healthcare, legal, hospitality, and sports industries.",
    banner: {
      url: "/images/projects/consulting-bg.png",
      alt: "Independent consulting projects banner",
    },
    logo: {
      url: "/images/doval-dev-logo.svg",
      alt: "Independent consultant logo",
    },
    sections: [
      {
        title: "Challenge",
        body: "Clients across different industries all needed to establish credibility and connect with their audiences online, but each domain required completely different approaches. A law firm needs to project authority, while a martial arts academy needs to convey philosophy and community.",
      },
      {
        title: "My Approach",
        body: "Developed a framework for stakeholder interviews that uncovers not just what people want their site to do, but how they want their audience to feel. Then I translate those emotional and business goals into technical and design decisions. Each project became a case study in adapting the same technical tools to different content strategies and user experiences.",
      },
      {
        title: "Impact",
        body: "Successfully launched 10+ sites across diverse industries, each tailored to their specific audience needs and business goals. This experience taught me how to rapidly understand different domain contexts and translate abstract business requirements into concrete technical solutions.",
      },
    ],
    stack: [
      "WordPress",
      "HTML",
      "CSS",
      "JavaScript",
      "SEO Optimization",
      "Google Analytics",
      "Lighthouse",
      "Figma",
      "i18n",
    ],
  },
];

export default function WorkSection() {
  return (
    <section
      id="work"
      className="container mx-auto flex scroll-mt-12 flex-col items-center gap-8 px-4 sm:px-6"
    >
      <h2 className="text-center font-bold">My work</h2>
      <p className="mx-auto max-w-prose text-lg leading-relaxed sm:text-xl">
        Each project taught me something different about translating stakeholder
        vision into working systems. Some required deep technical optimization,
        others needed careful UX research, and a few demanded both. Here&apos;s
        how I approached the challenges:
      </p>
      <div className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <Collapsible project={project} key={index} />
        ))}
      </div>
    </section>
  );
}
