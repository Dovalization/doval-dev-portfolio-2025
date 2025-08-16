import MetaSection from "@/components/meta-section";
import {
  Lightbulb,
  User,
  LayoutDashboard,
  Minimize2,
  Unlock,
} from "lucide-react";

// Content data (to be replaced by CMS)
const aboutData = {
  meta: { title: "About" },
  summary:
    "Full-stack engineer focused on frontend. I design and ship tools that make work clearer, faster, and easier to maintain.",
  nonNegotiables: [
    {
      title: "Build to solve real problems",
      text: "Solutions are grounded in real user needs, not assumptions. We reduce complexity so people can focus on what matters most.",
      icon: "Lightbulb",
    },
    {
      title: "Champion the user",
      text: "Every design choice serves the person using it, not the system itself. Empathy and clarity guide every decision we make.",
      icon: "User",
    },
    {
      title: "Experience is the product",
      text: "How it feels to use matters as much as what it does. The experience shapes how people interact, trust, and succeed with technology.",
      icon: "LayoutDashboard",
    },
    {
      title: "Reduce cognitive friction",
      text: "Predictable flows and clear state keep people moving. We remove distractions and decision fatigue at every step.",
      icon: "Minimize2",
    },
    {
      title: "Support autonomy",
      text: "Tools should empower, not control. Technology adapts to the user, giving them freedom and confidence to act independently.",
      icon: "Unlock",
    },
  ],
  toolbox: {
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
  testimonials: [
    {
      quote:
        "Guilherme's ability to bridge design sensibility with solid engineering made every project better.",
      author: "Colleague",
      company: "Aquiris Game Studio",
    },
    {
      quote:
        "Working with Guilherme felt like having both a product thinker and an engineer in the same person.",
      author: "Project Manager",
      company: "Foton Tech",
    },
  ],
} as const;

export default function AboutPage() {
  return (
    <div className="bg-dark-primary text-light-primary min-h-screen px-4 py-20 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <MetaSection
          title={aboutData.meta.title}
          subtitle={aboutData.summary}
        />

        {/* Story */}
        <section className="mb-16">
          <div>
            <h2 className="text-light-primary mb-6 text-2xl font-semibold">
              Why I build & how I work
            </h2>
            <div className="max-w-[72ch] space-y-6 text-lg">
              <p className="text-light-primary leading-8">
                I don’t build products that trap people — I build tools that
                give them clarity, control, and the freedom to act. As a
                developer and designer, I’ve personally felt the drag of systems
                that scatter focus and bury the important under the urgent.
              </p>
              <p className="text-light-primary leading-8">
                I design software that matches how people actually think and
                behave — fast to use, simple to maintain, built for momentum and
                easy to change. When technology supports clarity, efficiency,
                and reliability, people don’t just use it — they depend on it.
                And that’s the kind of work I believe is worth building.
              </p>
              <blockquote className="border-orange-secondary border-l-2 pl-4 text-lg font-bold text-slate-200 italic">
                “Make the important visible, reduce friction, and keep teams
                moving.”
              </blockquote>
            </div>
          </div>
        </section>

        {/* Five Non-Negotiables */}
        <section className="mb-16 flex flex-col gap-16 pt-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {aboutData.nonNegotiables.map((n, i) => {
              const iconMap = {
                Lightbulb,
                User,
                LayoutDashboard,
                Minimize2,
                Unlock,
              };
              const Icon = iconMap[n.icon as keyof typeof iconMap];
              return (
                <div
                  key={i}
                  className="from-dark-secondary to-gray-medium border-gray-medium/20 relative flex flex-col items-center gap-2 rounded-2xl border bg-gradient-to-br px-4 py-6 pt-12 text-center shadow-2xl"
                >
                  <div className="bg-orange-secondary absolute -top-10 flex h-20 w-20 items-center justify-center rounded-full">
                    <Icon
                      className="text-dark-primary h-8 w-8"
                      strokeWidth={2.5}
                    />
                  </div>
                  <h3 className="text-light-primary text-xl font-bold">
                    {n.title}
                  </h3>
                  <p className="text-gray-light">{n.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Approach */}
        <section className="mb-16 max-w-prose"></section>

        {/* Toolbox */}
        <section className="mb-16">
          <h2 className="text-light-primary mb-8 text-2xl font-semibold">
            Toolbox
          </h2>
          <div className="columns-1 gap-6 space-y-8 md:columns-2 lg:columns-3">
            {aboutData.toolbox.sections.map(({ key, title, items }) => (
              <div
                key={key}
                className="from-dark-secondary to-gray-medium border-gray-medium/20 mb-8 break-inside-avoid rounded-xl border bg-gradient-to-br p-4 shadow-lg"
              >
                {/* Header */}
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

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-light-primary mb-8 text-2xl font-semibold">
            Testimonials
          </h2>
          <div className="grid gap-6">
            {aboutData.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="from-dark-secondary to-gray-medium border-gray-medium/20 mb-8 break-inside-avoid rounded-xl border bg-gradient-to-br p-6 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-orange-primary h-16 w-1 flex-shrink-0 rounded-full" />
                  <div>
                    <p className="text-light-primary mb-4 text-lg leading-relaxed italic">
                      {`"${testimonial.quote}"`}
                    </p>
                    <div className="text-sm">
                      <div className="text-light-primary font-medium">
                        {testimonial.author}
                      </div>
                      <div className="text-gray-light">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
