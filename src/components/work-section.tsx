import Collapsible from "@/components/collapsible";

const projects = [
  {
    title: "Horizon Chase 2 Marketing Site & CMS",
    description:
      "A high-performance, multilingual marketing site built for fast iteration by non-dev content editors.",
    banner: {
      url: "/images/projects/hc2-bg.webp",
      alt: "Horizon Chase 2 marketing site banner",
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
        title: "My approach",
        body: "I spent time shadowing the marketing workflow to understand their actual content creation process. This revealed they needed visual preview capabilities and wanted to experiment with component arrangements, not just text changes. I designed a component system with NextJS and PrismicCMS that matched their mental model, then built the technical architecture around those content patterns",
      },
      {
        title: "Impact",
        body: "Marketing team now ships campaigns 3x faster without developer involvement. The performance improvements (LCP < 2.0s) contributed to 38% organic traffic growth, but more importantly, the team can now iterate on messaging and test ideas in real-time.",
      },
    ],
    stack: [
      "Next.js",
      "Prismic CMS",
      "TypeScript",
      "Tailwind CSS",
      "Image Optimization",
      "i18n",
    ],
  },
  {
    title: "Wonderbox",
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
        body: "Needed a site to capture the creative, shareable spirit of the game while remaining performant and accessible across devices.",
      },
      {
        title: "Solution",
        body: "Built with semantic HTML, CSS, and JavaScript to highlight media assets, ensure responsive layouts, and provide a flexible structure for showcasing community-driven content.",
      },
      {
        title: "Impact",
        body: "Delivered a fast-loading, visually engaging site that increased game visibility, supported community engagement, and complemented ongoing marketing campaigns.",
      },
      {
        title: "Performance",
        body: "Site achieved 95+ Lighthouse scores across all metrics and became template for future game marketing sites at the studio.",
      },
    ],
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Aquiris Game Studio",
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
        title: "My approach",
        body: "Worked closely with leadership to understand how they wanted to position the studio globally. Designed an information architecture that showcased both technical expertise and creative range. Integrated with a CMS that enabled different team members to contribute content to the site without needing extensive technical knowledge.",
      },
      {
        title: "Impact",
        body: "The revamped web presence opened doors to larger publishing partnerships and helped attract senior talent from major studios. More importantly, non-technical team members can now maintain the studio's portfolio without depending on a single developer.",
      },
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Prismic CMS",
      "Styled Components",
    ],
  },
  {
    title: "Independent Tech Consulting (2017 - 2023)",
    description:
      "I've worked with various clients to enhance their online presence and streamline their operations.",
    banner: {
      url: "/images/projects/consulting-bg.png",
      alt: "Independent Tech Consulting site banner",
    },
    logo: {
      url: "/images/doval-dev-logo.svg",
      alt: "Independent Tech Consultant logo",
    },
    sections: [
      {
        title: "Building trust through online presence",
        body: "Working with clients across healthcare, legal, hospitality, and sports industries taught me how different domains require different approaches to the same underlying challenge: establishing credibility and connecting with their audience online.",
      },
      {
        title: "What I learned",
        body: "A law firm's website needs to project authority and expertise. A martial arts academy needs to convey philosophy and community. A luxury transport service needs to communicate exclusivity and reliability. Same technical tools, completely different content strategies and user experiences.",
      },
      {
        title: "My process evolved",
        body: "I developed a framework for stakeholder interviews that uncovers not just what people want their project to do, but how they want their audience to feel. Then I translate those emotional and business goals into technical and design decisions.",
      },
    ],
    stack: ["WordPress", "HTML", "CSS", "JavaScript"],
  },
  // {
  //   title: "Pereira & Maron – Law Firm",
  //   description:
  //     "A professional website for a law firm, designed to highlight expertise and connect with clients internationally.",
  //   banner: {
  //     url: "/images/projects/pmadv-bg.webp",
  //     alt: "Pereira & Maron site banner",
  //   },
  //   logo: {
  //     url: "/images/projects/pmadv-logo.webp",
  //     alt: "Pereira & Maron logo",
  //   },
  //   problem:
  //     "Needed an institutional site to showcase legal expertise in multiple practice areas and attract clients globally.",
  //   approach:
  //     "Created a WordPress site with structured service pages, bilingual support, and brand-aligned professional design.",
  //   result:
  //     "Enhanced firm credibility, attracted local and international clients, and reinforced global positioning.",
  //   stack: ["WordPress", "HTML", "CSS", "JavaScript"],
  // },
];

export default function WorkSection() {
  return (
    <section
      id="work"
      className="container mx-auto flex flex-col items-center gap-8 px-4 py-16 sm:px-6"
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
