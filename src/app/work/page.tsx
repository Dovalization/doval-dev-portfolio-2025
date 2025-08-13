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
    <div className="min-h-screen bg-dark-primary text-light-primary py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <MetaSection
          title={workData.meta.title}
          subtitle={workData.meta.subtitle}
        />

        {workData.caseStudies.map((cs, idx) => (
          <section
            key={idx}
            className="px-8 py-12 bg-dark-secondary border border-gray-medium/30 rounded-2xl overflow-hidden mb-20 flex flex-col gap-8"
          >
            <div className="flex items-center justify-start gap-4">
              <div
                className={`w-2 h-16 bg-orange-secondary rounded-full flex-shrink-0`}
              ></div>
              <div>
                <h2 className="text-3xl font-bold mb-2 text-light-primary">
                  {cs.title}
                </h2>
                {/* First paragraph summarizing problem/intro */}
                <p className="text-md text-light-primary max-w-3xl">
                  {cs.problem.split(".")[0]}.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-3 text-orange-secondary flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-secondary rounded-full"></div>
                  Problem
                </h3>
                <p className="text-gray-light">{cs.problem}</p>
              </div>
              <div className=" ">
                <h3 className="font-semibold text-lg mb-3 text-orange-secondary flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-secondary rounded-full"></div>
                  Approach
                </h3>
                <p className="text-gray-light">{cs.approach}</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 text-orange-secondary flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-secondary rounded-full"></div>
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
                    className="text-gray-light border border-gray-light/30 px-3 py-1 rounded-full text-sm font-medium"
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
          <h2 className="text-3xl font-bold mb-8 text-light-primary">
            Other Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workData.otherProjects.map((p) => (
              <div
                key={p.title}
                className="bg-dark-secondary border border-gray-medium/30 rounded-xl p-6 transition-all duration-300"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-1 h-8 bg-orange-secondary rounded-full flex-shrink-0 transition-colors"></div>
                  <h3 className="text-lg font-semibold text-light-primary">
                    {p.title}
                  </h3>
                </div>
                <p className="text-gray-light text-sm mb-4 leading-relaxed">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-gray-light border border-gray-light/30 px-3 py-1 rounded-full text-xs font-medium"
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
        <section className="text-center bg-gradient-to-br from-orange-primary/10 via-orange-secondary/5 to-cream/5 border border-orange-primary/20 rounded-2xl p-12">
          <h2 className="text-2xl font-bold mb-4 text-light-primary">
            {workData.cta.title}
          </h2>
          <p className="text-gray-light mb-6 max-w-2xl mx-auto">
            {workData.cta.text}
          </p>
          <a
            href={workData.cta.button.href}
            className="bg-orange-primary text-dark-primary px-8 py-3 rounded-lg font-medium hover:bg-orange-secondary transition-colors inline-block shadow-lg hover:shadow-orange-primary/30"
          >
            {workData.cta.button.label}
          </a>
        </section>
      </div>
    </div>
  );
}
