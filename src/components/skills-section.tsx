import { Code, Monitor, Server, Settings, BarChart } from "react-feather";

const skills = {
  sections: [
    {
      key: "languages",
      title: "Languages",
      icon: Code,
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
      icon: Monitor,
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
      icon: Server,
      items: [
        { name: "Node.js", desc: "JavaScript everywhere" },
        { name: "Express/Fastify", desc: "Flexible API architecture" },
        { name: "PostgreSQL", desc: "Reliable, powerful data" },
      ],
    },
    {
      key: "devops",
      title: "DevOps & Testing",
      icon: Settings,
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
      icon: BarChart,
      items: [
        { name: "Sentry", desc: "Error tracking" },
        { name: "Grafana", desc: "Visual monitoring" },
        { name: "Prometheus", desc: "Metrics collection" },
      ],
    },
  ],
};

export default function SkillsSection() {
  return (
    <section className="container mx-auto flex flex-col gap-8 px-4 py-16 sm:px-6">
      <h2 className="text-light-primary mb-8 text-center text-4xl font-bold">
        Skills & Tools
      </h2>
      <div className="columns-1 gap-6 space-y-8 md:columns-2 lg:columns-3">
        {skills.sections.map(({ key, title, icon, items }) => {
          const Icon = icon;
          return (
            <div
              key={key}
              className="from-dark-secondary to-gray-medium border-gray-medium/20 mb-8 break-inside-avoid rounded-xl border bg-gradient-to-br p-4 shadow-lg"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="bg-orange-secondary flex h-8 w-8 items-center justify-center rounded-full">
                  <Icon
                    className="text-dark-primary h-4 w-4"
                    strokeWidth={2.5}
                  />
                </div>
                <h3 className="text-orange-secondary text-lg font-semibold">
                  {title}
                </h3>
              </div>
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
          );
        })}
      </div>
    </section>
  );
}
