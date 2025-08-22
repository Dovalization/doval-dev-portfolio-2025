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
    "Hey! I'm Guilherme Doval, a full-stack engineer with a frontend focus. I build tools that make work clearer, faster and easier.",
  nonNegotiables: [
    {
      title: "Solve real problems",
      text: "Decisions are grounded in observed user needs. We reduce complexity so people can focus on what matters.",
      icon: "Lightbulb",
    },
    {
      title: "Champion the user",
      text: "Every choice serves the person using the product, not the system. Empathy and clarity guide the work.",
      icon: "User",
    },
    {
      title: "Build for experience",
      text: "Usability and experience drive trust, adoption, and outcomes. How it feels matters as much as what it does.",
      icon: "LayoutDashboard",
    },
    {
      title: "Lower cognitive load",
      text: "Predictable flows and clear state support momentum. We remove distractions and decision fatigue.",
      icon: "Minimize2",
    },
    {
      title: "Enable autonomy",
      text: "Technology should empower, not control. It gives people the freedom and confidence to act independently.",
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
      <div className="container mx-auto flex flex-col gap-16">
        <MetaSection
          title={aboutData.meta.title}
          subtitle={aboutData.summary}
        />

        {/* Story */}
        <section>
          <h2 className="text-light-primary mb-6 text-3xl font-bold">
            Why I build & how I work
          </h2>
          <div className="max-w-[72ch] space-y-6 text-lg">
            <p className="text-light-primary leading-8">
              I don’t build products that box people in. I build tools that give
              them clarity, control, and the freedom to act. I’ve felt firsthand
              how systems can scatter focus and push the urgent over the
              important.
            </p>
            <p className="text-light-primary leading-8">
              So I design software that fits how people actually think: fast to
              use, simple to maintain, easy to change, and built for momentum.
              When technology supports clarity and efficiency, people don’t just
              use it — they rely on it. And that’s the kind of work I believe is
              worth building.
            </p>
            <blockquote className="border-orange-secondary border-l-2 pl-4 text-lg font-semibold text-slate-200 italic">
              “Make the important visible, reduce friction, and keep teams
              moving.”
            </blockquote>
          </div>
        </section>

        {/* Five Non-Negotiables */}
        <section className="flex flex-col gap-16 pt-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {aboutData.nonNegotiables.map((n, i) => {
              const iconMap = {
                Lightbulb,
                User,
                LayoutDashboard,
                Minimize2,
                Unlock,
              };
              const Icon = iconMap[n.icon];
              return (
                <div
                  key={i}
                  className="from-dark-secondary to-gray-medium border-gray-medium/20 relative flex flex-col items-center gap-2 rounded-2xl border bg-gradient-to-br px-4 py-6 pt-12 text-center shadow-2xl text-shadow-sm"
                >
                  <div className="bg-orange-secondary absolute -top-10 flex h-20 w-20 items-center justify-center rounded-full">
                    <Icon
                      className="text-dark-primary h-8 w-8"
                      strokeWidth={2.5}
                    />
                  </div>
                  <h3 className="text-light-primary text-lg font-semibold">
                    {n.title}
                  </h3>
                  <p className="text-light-primary text-sm">{n.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Toolbox */}
        <section>
          <h2 className="text-light-primary mb-8 text-3xl font-bold">
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
        <section>
          <h2 className="text-light-primary mb-8 text-3xl font-bold">
            Testimonials
          </h2>
          <div className="grid gap-6">
            {aboutData.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="from-dark-secondary to-gray-medium border-gray-medium/20 break-inside-avoid rounded-xl border bg-gradient-to-br p-6 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-orange-primary h-16 w-1 flex-shrink-0 rounded-full" />
                  <div>
                    <p className="text-light-primarytext-lg leading-relaxed italic">
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
