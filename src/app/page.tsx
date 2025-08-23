import Link from "next/link";
import Image from "next/image";
import {
  User,
  Minimize2,
  Unlock,
  Linkedin,
  Mail,
  Layout,
  GitHub,
  Target,
} from "react-feather";
import Collapsible from "@/components/collapsible";
import HeroSection from "@/components/hero-section";

// Content data (to be replaced by CMS)
const hero = {
  image: { src: "/images/about.png", alt: "About Me" },

  headingTop: "Full-stack Developer",
  headingAccent: "Human-centered design",
  subheading:
    "I build solutions that empower people – tools that help teams work better together. My work is driven by a desire to understand user needs and a passion for creating meaningful experiences.",
  ctas: [
    { label: "About me", href: "/about" },
    { label: "See my work", href: "/work" },
    { label: "Get in touch", href: "/contact" },
  ],
};

const about = {
  heading: "About Me",
  content: (
    <>
      <p className="text-light-primary leading-6 font-bold">
        Hi! I’m Guilherme Doval, a full-stack developer and designer based in
        Brasil. I specialize in building systems that make people’s lives
        easier.
      </p>
      <p className="text-light-primary leading-6">
        I don’t build products that box people in. I build tools that give them
        clarity, control, and the freedom to act. I’ve felt firsthand how
        systems can scatter focus and push the urgent over the important.
      </p>
      <p className="text-light-primary leading-6">
        So I design software that fits how people actually think: fast to use,
        simple to maintain, easy to change, and built for momentum. When
        technology supports clarity and efficiency, people don’t just use it —
        they rely on it. And that’s the kind of work I believe is worth
        building.
      </p>
    </>
  ),
  quote: "Make the important visible, reduce friction, and keep teams moving.",
  skills: {
    sections: [
      {
        key: "languages",
        title: "Languages",

        items: [
          {
            name: "JavaScript/TypeScript",
            desc: "Type safety & developer experience",
          },
          { name: "SQL", desc: "Direct data control & performance" },
        ],
      },
      {
        key: "frontend",
        title: "Frontend",
        items: [
          { name: "React", desc: "Component reusability" },
          { name: "Next.js", desc: "Full-stack performance" },
          { name: "Tailwind CSS", desc: "Rapid, consistent styling" },
          { name: "Zod", desc: "Runtime type validation" },
          { name: "TanStack Query", desc: "Smart data fetching" },
        ],
      },
      {
        key: "backend",
        title: "Backend",
        items: [
          { name: "Node.js", desc: "JavaScript everywhere" },
          { name: "Express/Fastify", desc: "Flexible API architecture" },
          { name: "PostgreSQL", desc: "Reliable, powerful data" },
        ],
      },
      {
        key: "devops",
        title: "DevOps & Testing",
        items: [
          { name: "Docker", desc: "Consistent environments" },
          { name: "CI/CD", desc: "Automated reliability" },
          { name: "Vitest", desc: "Fast, modern testing" },
          { name: "Playwright", desc: "Real user testing" },
        ],
      },
      {
        key: "observability",
        title: "Observability",
        items: [
          { name: "Sentry", desc: "Error tracking" },
          { name: "Grafana", desc: "Visual monitoring" },
          { name: "Prometheus", desc: "Metrics collection" },
        ],
      },
    ],
  },
};

const coreValues = [
  {
    title: "Solve real problems",
    text: "Decisions are grounded in observed user needs. We reduce complexity so people can focus on what matters.",
    icon: Target,
  },
  {
    title: "Champion the user",
    text: "Every choice serves the person using the product, not the system. Empathy and clarity guide the work.",
    icon: User,
  },
  {
    title: "Build for experience",
    text: "Usability and experience drive trust, adoption, and outcomes. How it feels matters as much as what it does.",
    icon: Layout,
  },
  {
    title: "Lower cognitive load",
    text: "Predictable flows and clear state support momentum. We remove distractions and decision fatigue.",
    icon: Minimize2,
  },
  {
    title: "Enable autonomy",
    text: "Technology should empower, not control. It gives people the freedom and confidence to act independently.",
    icon: Unlock,
  },
];

const work = {
  heading: "My Work",
  description:
    "Projects that showcase my approach to building fast, human-centered systems. Each one taught me something new about balancing user needs with technical constraints.",
  projects: [
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
      problem:
        "Needed a high-performance, multilingual marketing site with fast iteration for non-dev content editors. The previous site was slow to load and difficult for the marketing team to update without developer intervention.",
      approach:
        "Built with Next.js + Prismic headless CMS, created a custom component library for consistent branding, implemented comprehensive image optimization pipeline, and set up preview builds for content validation.",
      result:
        "Achieved LCP < 2.0s across all pages, saw +38% organic traffic growth in 90 days, and enabled the marketing team to update content independently without developer help.",
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
      problem:
        "Needed a site to capture the creative, shareable spirit of the game while remaining performant and accessible across devices.",
      approach:
        "Built with semantic HTML, CSS, and JavaScript to highlight media assets, ensure responsive layouts, and provide a flexible structure for showcasing community-driven content.",
      result:
        "Delivered a fast-loading, visually engaging site that increased game visibility, supported community engagement, and complemented ongoing marketing campaigns.",
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
      problem:
        "Needed a professional, modern site that reflected international reputation and showcased a wide portfolio. Previous site didn’t represent the brand’s scale.",
      approach:
        "Developed with Next.js, React, and Prismic CMS. Created a modular component system, integrated multilingual support, and optimized performance.",
      result:
        "Launched a scalable, polished site that improved brand perception, centralized portfolio management, and enabled self-service updates by the team.",
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "Prismic CMS",
        "Styled Components",
      ],
    },
    {
      title: "Horizon Chase",
      description:
        "A dedicated site for Horizon Chase, celebrating its retro arcade spirit and engaging its community.",
      banner: {
        url: "/images/projects/hc-bg.webp",
        alt: "Horizon Chase banner",
      },
      logo: { url: "/images/projects/hc-logo.webp", alt: "Horizon Chase logo" },
      problem:
        "Required a dedicated hub to represent Horizon Chase’s unique retro-arcade identity and deliver updates to fans.",
      approach:
        "Built with Next.js, TypeScript, and Prismic CMS, emphasizing visual storytelling aligned with the game’s low-poly aesthetic.",
      result:
        "Boosted fan engagement, streamlined content updates, and provided a reliable platform for announcements and expansions.",
      stack: [
        "Next.js",
        "TypeScript",
        "React",
        "Prismic CMS",
        "Styled Components",
      ],
    },
    {
      title: "Del Paraíso",
      description:
        "An institutional site for a residential development in Rio de Janeiro, designed to highlight its natural surroundings.",
      banner: {
        url: "/images/projects/delparaiso-bg.webp",
        alt: "Del Paraíso site banner",
      },
      logo: {
        url: "/images/projects/delparaiso-logo.webp",
        alt: "Del Paraíso logo",
      },
      problem:
        "Needed a digital presence to showcase the beauty and exclusivity of a residential retreat surrounded by nature.",
      approach:
        "Created a WordPress-based site with SEO-friendly structure, responsive design, and immersive imagery.",
      result:
        "Delivered a professional site that increased visibility, supported real estate marketing, and attracted interest from potential buyers.",
      stack: ["WordPress", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "Dr. João Diogo Martins",
      description:
        "An institutional website for an ENT specialist in Lisbon to reach and inform patients.",
      banner: {
        url: "/images/projects/dr-bg.webp",
        alt: "Dr João Diogo Martins site banner",
      },
      logo: {
        url: "/images/projects/dr-logo.webp",
        alt: "Dr João Diogo Martins logo",
      },
      problem:
        "Required a professional, easy-to-use website to communicate services and build trust with patients.",
      approach:
        "Designed and developed a WordPress site with clear service information, responsive design, and user-friendly navigation.",
      result:
        "Established a trusted online presence, improved patient communication, and streamlined service discovery.",
      stack: ["WordPress", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "Travel Lider",
      description:
        "A premium transportation service site in Portugal, tailored to attract tourists and business travelers.",
      banner: {
        url: "/images/projects/travellider-bg.webp",
        alt: "Travel Lider site banner",
      },
      logo: {
        url: "/images/projects/travellider-logo.webp",
        alt: "Travel Lider logo",
      },
      problem:
        "Needed an online channel to promote luxury private transportation services to international clients.",
      approach:
        "Developed a WordPress site with multilingual support, SEO enhancements, and a design communicating exclusivity and trust.",
      result:
        "Boosted brand awareness, increased bookings, and supported business growth in a competitive market.",
      stack: ["WordPress", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "Five Elements Jiu-Jitsu",
      description:
        "A site to promote the academy’s classes, philosophy, and community around Gracie Jiu-Jitsu.",
      banner: {
        url: "/images/projects/5ej-bg.webp",
        alt: "Five Elements Jiu-Jitsu banner",
      },
      logo: {
        url: "/images/projects/5ej-logo.svg",
        alt: "Five Elements Jiu-Jitsu logo",
      },
      problem:
        "Required an institutional site to attract new students and convey the academy’s philosophy and mission.",
      approach:
        "Built a WordPress site with storytelling elements, responsive design, and structured class information.",
      result:
        "Increased student enrollment, strengthened community identity, and provided a digital hub for communication.",
      stack: ["WordPress", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "União Portuguesa de Karate-Do",
      description:
        "An institutional site for a Karate association in Portugal, preserving history and enabling event communication.",
      banner: { url: "/images/projects/upkd-bg.webp", alt: "UPKD site banner" },
      logo: { url: "/images/projects/upkd-logo.png", alt: "UPKD logo" },
      problem:
        "Needed a reliable site to represent the association’s history and communicate events to members.",
      approach:
        "Developed a WordPress site with clear navigation, event publishing, and institutional branding.",
      result:
        "Improved credibility, enhanced communication with members, and preserved association history online.",
      stack: ["WordPress", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "Pereira & Maron – Law Firm",
      description:
        "A professional website for a law firm, designed to highlight expertise and connect with clients internationally.",
      banner: {
        url: "/images/projects/pmadv-bg.webp",
        alt: "Pereira & Maron site banner",
      },
      logo: {
        url: "/images/projects/pmadv-logo.webp",
        alt: "Pereira & Maron logo",
      },
      problem:
        "Needed an institutional site to showcase legal expertise in multiple practice areas and attract clients globally.",
      approach:
        "Created a WordPress site with structured service pages, bilingual support, and brand-aligned professional design.",
      result:
        "Enhanced firm credibility, attracted local and international clients, and reinforced global positioning.",
      stack: ["WordPress", "HTML", "CSS", "JavaScript"],
    },
  ],
};

export default function HomePage() {
  return (
    <div>
      <HeroSection hero={hero} />
      <section className="container mx-auto flex flex-col items-center gap-8 px-4 py-16 text-center sm:px-6">
        <h2 className="text-light-primary text-4xl font-bold">
          {about.heading}
        </h2>
        <div className="flex max-w-prose flex-col gap-6 text-left text-lg">
          {about.content}
        </div>
        <blockquote className="text-orange-secondary text-xl font-semibold italic">
          {about.quote}
        </blockquote>
      </section>
      <section className="container mx-auto flex flex-col gap-8 px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {coreValues.map((valueEntry, index) => {
            const Icon = valueEntry.icon;
            return (
              <div
                key={index}
                className="from-dark-secondary to-gray-medium border-gray-medium/20 relative flex flex-col items-center gap-2 rounded-2xl border bg-gradient-to-br px-4 py-6 pt-12 text-center shadow-2xl text-shadow-sm"
              >
                <div className="bg-orange-secondary absolute -top-10 flex h-20 w-20 items-center justify-center rounded-full">
                  <Icon
                    className="text-dark-primary h-8 w-8"
                    strokeWidth={2.5}
                  />
                </div>
                <h3 className="text-light-primary text-lg font-semibold">
                  {valueEntry.title}
                </h3>
                <p className="text-light-primary text-sm">{valueEntry.text}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="container mx-auto flex flex-col items-center gap-8 px-4 py-16 sm:px-6">
        <h2 className="text-light-primary text-center text-4xl font-bold">
          {work.heading}
        </h2>
        <p className="text-gray-light mx-auto max-w-prose text-lg leading-relaxed sm:text-xl">
          {work.description}
        </p>
        <div className="flex flex-col gap-8">
          {work.projects.map((project, index) => (
            <Collapsible project={project} key={index} />
          ))}
        </div>
      </section>
      {/* Toolbox */}
      <section className="container mx-auto flex flex-col gap-8 px-4 py-16 sm:px-6">
        <h2 className="text-light-primary mb-8 text-center text-4xl font-bold">
          Skills & Tools
        </h2>
        <div className="columns-1 gap-6 space-y-8 md:columns-2 lg:columns-3">
          {about.skills.sections.map(({ key, title, items }) => (
            <div
              key={key}
              className="from-dark-secondary to-gray-medium border-gray-medium/20 mb-8 break-inside-avoid rounded-xl border bg-gradient-to-br p-4 shadow-lg"
            >
              <div className="mb-4 flex items-center gap-2">
                <div className="bg-orange-secondary h-2 w-2 rounded-full" />
                <h3 className="text-orange-secondary text-lg font-semibold">
                  {title}
                </h3>
              </div>
              {/* Items */}
              <div className="grid gap-2">
                {items.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-dark-primary/50 border-gray-medium/20 rounded-lg border px-3 py-2"
                  >
                    <div className="text-light-primary text-sm leading-tight font-medium">
                      {tech.name}
                    </div>
                    <p className="text-gray-light mt-0.5 text-xs leading-snug">
                      {tech.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Contact */}
      <section id="contact" className="px-4 py-16 sm:px-6">
        <div className="container mx-auto flex max-w-prose flex-col items-center gap-8 text-center">
          <h2 className="text-4xl font-bold">Let’s Work Together</h2>
          <p className="text-gray-light text-lg leading-relaxed">
            I’m interested in product engineering roles where I can shape both
            user experience and technical architecture. Always open to
            discussing new projects and opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:doval.guilherme94@gmail.com"
              className="text-gray-light hover:text-orange-secondary flex items-center gap-3 transition-colors"
            >
              <Mail size={24} />
              <span>doval.guilherme94@gmail.com</span>
            </a>
            <a
              href="https://linkedin.com/in/dovalization"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-light hover:text-orange-secondary flex items-center gap-3 transition-colors"
            >
              <Linkedin size={24} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/dovalization"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-light hover:text-orange-secondary flex items-center gap-3 transition-colors"
            >
              <GitHub size={24} />
              <span>GitHub</span>
            </a>
          </div>

          <article className="from-dark-secondary to-gray-medium border-gray-medium/20 max-w-2xl rounded-lg border bg-gradient-to-br p-8 text-left shadow-lg">
            <h3 className="mb-4 text-lg font-semibold">What I’m Looking For</h3>
            <ul className="space-y-4 text-slate-400">
              <li>
                • Product Engineering roles where I can shape UX and technical
                architecture
              </li>
              <li>
                • Teams that value systems thinking and user-centered design
              </li>
              <li>
                • Projects focused on reducing cognitive friction and improving
                workflows
              </li>
              <li>
                • Opportunities to mentor and collaborate with cross-functional
                teams
              </li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}
