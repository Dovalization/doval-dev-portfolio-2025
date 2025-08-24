import {
  Code,
  Monitor,
  Server,
  Settings,
  Layers,
  Feather,
  Activity,
} from "react-feather";

const skills = {
  sections: [
    {
      key: "languages",
      title: "Languages",
      icon: Code,
      items: [
        { name: "JavaScript/TypeScript", desc: "Type-safe development" },
        { name: "SQL", desc: "Database queries & optimization" },
        { name: "Python", desc: "Scripting & automation" },
      ],
    },
    {
      key: "frontend",
      title: "Frontend",
      icon: Monitor,
      items: [
        { name: "React", desc: "Component-based UI development" },
        { name: "Next.js", desc: "App Router & Server Components" },
        { name: "Tailwind CSS", desc: "Utility-first styling" },
        { name: "Three.js", desc: "3D graphics & WebGL" },
        { name: "Framer Motion", desc: "Smooth animations" },
        { name: "TanStack Query", desc: "Server state synchronization" },
        { name: "React Hook Form", desc: "Form handling & validation" },
        { name: "Zod", desc: "Schema validation" },
      ],
    },
    {
      key: "backend",
      title: "Backend & CMS",
      icon: Server,
      items: [
        { name: "Node.js", desc: "Server-side JavaScript" },
        { name: "Express/Fastify", desc: "API development" },
        { name: "PostgreSQL", desc: "Relational database" },
        { name: "Prismic CMS", desc: "Headless content management" },
        { name: "WordPress", desc: "Custom theme development" },
        { name: "Supabase", desc: "Real-time database" },
      ],
    },
    {
      key: "architecture",
      title: "Architecture",
      icon: Layers,
      items: [
        { name: "Component Libraries", desc: "Reusable UI systems" },
        { name: "API Design", desc: "RESTful & GraphQL" },
        { name: "Performance Optimization", desc: "Core Web Vitals" },
        { name: "Responsive Design", desc: "Mobile-first approach" },
      ],
    },
    {
      key: "devops",
      title: "DevOps & Testing",
      icon: Settings,
      items: [
        { name: "Docker", desc: "Container orchestration" },
        { name: "Vercel/Netlify", desc: "Serverless deployment" },
        { name: "GitHub Actions", desc: "CI/CD automation" },
        { name: "Vitest", desc: "Unit testing" },
        { name: "Playwright", desc: "End-to-end testing" },
      ],
    },
    {
      key: "design",
      title: "Design Systems",
      icon: Feather,
      items: [
        { name: "Figma", desc: "Design & prototyping" },
        { name: "Adobe Creative Suite", desc: "Visual asset creation" },
        { name: "Design Tokens", desc: "Systematic design values" },
        { name: "Storybook", desc: "Component documentation" },
      ],
    },
    {
      key: "monitoring",
      title: "Monitoring",
      icon: Activity,
      items: [
        { name: "Sentry", desc: "Error tracking" },
        { name: "Google Analytics", desc: "User behavior insights" },
        { name: "Lighthouse", desc: "Performance auditing" },
      ],
    },
  ],
};

export default function SkillsSection() {
  return (
    <section className="container mx-auto flex flex-col gap-8 px-4 py-16 sm:px-6">
      <h2 className="mb-8 text-center">
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
                <h3 className="text-orange-secondary font-medium">
                  {title}
                </h3>
              </div>
              <div className="grid gap-2 font-mono">
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
