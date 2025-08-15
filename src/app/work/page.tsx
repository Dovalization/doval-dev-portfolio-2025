import MetaSection from "@/components/meta-section";

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
      problem:
        "Needed a high-performance, multilingual marketing site with fast iteration for non-dev content editors. The previous site was slow to load and difficult for the marketing team to update without developer intervention.",
      approach:
        "Built with Next.js + Prismic headless CMS, created a custom component library for consistent branding, implemented comprehensive image optimization pipeline, and set up preview builds for content validation.",
      result:
        "Achieved LCP < 2.0s across all pages, saw +38% organic traffic growth in 90 days, and enabled the marketing team to update content independently without developer help.",
      tech: [
        "Next.js",
        "Prismic CMS",
        "TypeScript",
        "Tailwind CSS",
        "Image Optimization",
        "i18n",
      ],
    },
    {
      title: "Aquiris Web Platform Revamp",
      problem:
        "Fragmented, slow-to-update marketing pages for multiple games. Each game had its own site with inconsistent branding, poor performance, and manual deployment processes that caused delays.",
      approach:
        "Created a unified Next.js architecture with a scalable component library, implemented consistent design system across all game sites, and set up automated deployments with preview environments.",
      result:
        "Enabled faster content updates, significantly improved Core Web Vitals scores (CLS and LCP), and established consistent branding across all game properties.",
      tech: [
        "Next.js",
        "React",
        "Component Library",
        "CI/CD",
        "Performance Optimization",
        "Design System",
      ],
    },
    {
      title: "Internal Tools Workflow Automation",
      problem:
        "Manual workflows caused significant delays and errors in project handoffs. Teams were blocked waiting for approvals, and there was no clear visibility into process status or bottlenecks.",
      approach:
        "Built custom queue management system with role-based access control (RBAC), implemented comprehensive audit tooling for transparency, and created automated notification systems for status updates.",
      result:
        "Achieved 60% faster project handoffs, dramatically improved accuracy by eliminating manual errors, and gave teams more autonomy with clear visibility into process status.",
      tech: [
        "Node.js",
        "PostgreSQL",
        "RBAC",
        "Queue Management",
        "Audit Logging",
        "Automation",
      ],
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
} as const;

// Removed unused ESLint directive
export default function WorkPage() {
  return (
    <div className="bg-dark-primary text-light-primary min-h-screen px-4 py-20 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <MetaSection
          title={workData.meta.title}
          subtitle={workData.meta.subtitle}
        />

        {workData.caseStudies.map((cs, idx) => (
          <section
            key={idx}
            className="to-gray-medium border-gray-medium/20 from-dark-secondary mb-20 flex flex-col gap-8 overflow-hidden rounded-2xl border bg-gradient-to-br p-8 shadow-2xl"
          >
            <div className="flex items-center justify-start gap-4">
              <div
                className={`bg-orange-secondary h-16 w-2 flex-shrink-0 rounded-full`}
              ></div>
              <div>
                <h2 className="text-light-primary mb-2 text-3xl font-bold">
                  {cs.title}
                </h2>
                {/* First paragraph summarizing problem/intro */}
                <p className="text-md text-light-primary max-w-3xl">
                  {cs.problem.split(".")[0]}.
                </p>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div>
                <h3 className="text-orange-secondary mb-3 flex items-center gap-2 text-lg font-semibold">
                  <div className="bg-orange-secondary h-2 w-2 rounded-full"></div>
                  Problem
                </h3>
                <p className="text-gray-light">{cs.problem}</p>
              </div>
              <div>
                <h3 className="text-orange-secondary mb-3 flex items-center gap-2 text-lg font-semibold">
                  <div className="bg-orange-secondary h-2 w-2 rounded-full"></div>
                  Approach
                </h3>
                <p className="text-gray-light">{cs.approach}</p>
              </div>
              <div>
                <h3 className="text-orange-secondary mb-3 flex items-center gap-2 text-lg font-semibold">
                  <div className="bg-orange-secondary h-2 w-2 rounded-full"></div>
                  Result
                </h3>
                <p className="text-gray-light">{cs.result}</p>
              </div>
            </div>
            <div>
              <div className="flex flex-wrap gap-2">
                {cs.tech.map((t) => (
                  <span
                    key={t}
                    className="text-gray-light border-gray-light/30 rounded-full border px-3 py-1 text-sm font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Smaller Projects Grid */}
        <section className="mb-16">
          <h2 className="text-light-primary mb-8 text-3xl font-bold">
            Other Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {workData.otherProjects.map((p) => (
              <div
                key={p.title}
                className="bg-dark-secondary border-gray-medium/30 rounded-xl border p-6 transition-all duration-300"
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
        <section className="p-12 text-center">
          <h2 className="text-light-primary mb-4 text-2xl font-bold">
            {workData.cta.title}
          </h2>
          <p className="text-gray-light mx-auto mb-6 max-w-2xl">
            {workData.cta.text}
          </p>
          <a
            href={workData.cta.button.href}
            className="bg-orange-primary text-dark-primary hover:bg-orange-secondary hover:shadow-orange-primary/30 inline-block rounded-lg px-8 py-3 font-medium shadow-lg transition-colors"
          >
            {workData.cta.button.label}
          </a>
        </section>
      </div>
    </div>
  );
}
