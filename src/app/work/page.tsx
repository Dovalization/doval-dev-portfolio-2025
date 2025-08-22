import ContactCTASection from "@/components/contact-cta-section";
import MetaSection from "@/components/meta-section";
import Collapsible from "@/components/collapsible";
// Content data (to be replaced by CMS)
const workData = {
  meta: {
    title: "Work",
    subtitle:
      "Here are some projects that showcase my approach to building fast, human-centered systems. Each one taught me something new about balancing user needs with technical constraints.",
  },
  caseStudies: [
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
  otherProjects: [
    {
      title: "E-commerce Performance Audit",
      description:
        "Comprehensive performance analysis and optimization recommendations for a high-traffic e-commerce site.",
      tags: ["Performance", "Web Vitals", "Optimization"],
    },
    {
      title: "Component Library Design System",
      description:
        "Scalable design system with React components, documentation, and automated testing for consistency.",
      tags: ["React", "Storybook", "Design System"],
    },
    {
      title: "API Gateway & Microservices",
      description:
        "Scalable API architecture with authentication, rate limiting, and comprehensive monitoring.",
      tags: ["Node.js", "Docker", "Microservices"],
    },
    {
      title: "Real-time Dashboard",
      description:
        "Live analytics dashboard with WebSocket connections and interactive data visualizations.",
      tags: ["WebSockets", "D3.js", "Real-time"],
    },
    {
      title: "Mobile-First PWA",
      description:
        "Progressive web app with offline capabilities, push notifications, and native-like performance.",
      tags: ["PWA", "Service Workers", "Mobile"],
    },
    {
      title: "Accessibility Audit & Remediation",
      description:
        "WCAG 2.1 AA compliance audit and implementation of accessibility improvements across web platform.",
      tags: ["WCAG", "A11y", "Compliance"],
    },
  ],
  cta: {
    title: "Interested in Working Together?",
    text: "I'm always excited to take on new challenges and help teams build better, faster, more human-centered systems.",
    button: { label: "Let's Talk About Your Project", href: "/contact" },
  },
};

export default function WorkPage() {
  return (
    <div className="bg-dark-primary text-light-primary min-h-screen px-4 py-20 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col gap-16">
        <MetaSection
          title={workData.meta.title}
          subtitle={workData.meta.subtitle}
        />

        {/* Case Studies Section */}
        <section>
          <h2 className="text-light-primary mb-8 text-3xl font-bold">
            Featured Projects
          </h2>
          <div className="flex flex-col gap-8">
            {workData.caseStudies.map((cs, idx) => (
              <Collapsible project={cs} key={idx} />
            ))}
          </div>
        </section>

        {/* Smaller Projects Grid */}
        <section className="mb-16">
          <h2 className="text-light-primary mb-8 text-3xl font-bold">
            Other Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {workData.otherProjects.map((p) => (
              <div
                key={p.title}
                className="to-gray-medium border-gray-medium/20 from-dark-secondary border-gray-/30 flex flex-col gap-2 overflow-hidden rounded-2xl border bg-gradient-to-br p-6 shadow-2xl transition-all duration-300"
              >
                <div className="mb-3 flex items-start gap-3">
                  <div className="bg-orange-secondary h-8 w-1 flex-shrink-0 rounded-full transition-colors"></div>
                  <h3 className="text-light-primary text-lg font-semibold">
                    {p.title}
                  </h3>
                </div>
                <p className="text-gray-light mb-4 text-sm leading-relaxed">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-gray-light border-gray-light/30 rounded-full border px-3 py-1 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <ContactCTASection />
      </div>
    </div>
  );
}
