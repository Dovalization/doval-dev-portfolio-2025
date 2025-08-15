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
  story: {
    heading: "My Story",
    paragraphs: [
      "I don't build products that trap people — I build tools that give them clarity, control, and the freedom to act.",
      "That conviction isn't just a design choice; it's personal. As a neurodivergent developer, I've felt the drag of systems that interrupt momentum, scatter focus, or bury the important under the urgent. I know the frustration of having a clear goal but no clear path forward.",
      "Over time, I turned that frustration into focus: creating systems and interfaces that work the way people actually think and decide. Fast to use. Simple to maintain. Designed to keep the important visible and help teams act on what matters.",
      "Each step in my career built on the last. Game development taught me speed, iteration, and the value of cross-disciplinary teamwork. Design and UI/UX sharpened my instinct for clarity and usability. Full-stack engineering gave me the technical depth to make those qualities scalable and sustainable.",
      "When technology supports clarity, momentum, and trust, people don't just use it — they depend on it. And that's the kind of work worth building.",
    ],
  },
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
      text: "Clarity and predictability keep people moving forward. We minimize distractions and decision fatigue at every step.",
      icon: "Minimize2",
    },
    {
      title: "Support autonomy",
      text: "Tools should empower, not control. Technology adapts to the user, giving them freedom and confidence to act independently.",
      icon: "Unlock",
    },
  ],
  toolbox: {
    languages: [
      {
        name: "JavaScript/TypeScript",
        desc: "Type safety & developer experience",
      },
      { name: "SQL", desc: "Direct data control & performance" },
    ],
    frontend: [
      { name: "React", desc: "Component reusability" },
      { name: "Next.js", desc: "Full-stack performance" },
      { name: "Tailwind CSS", desc: "Rapid, consistent styling" },
      { name: "Zod", desc: "Runtime type validation" },
      { name: "TanStack Query", desc: "Smart data fetching" },
    ],
    backend: [
      { name: "Node.js", desc: "JavaScript everywhere" },
      { name: "Express/Fastify", desc: "Flexible API architecture" },
      { name: "PostgreSQL", desc: "Reliable, powerful data" },
    ],
    devops: [
      { name: "Docker", desc: "Consistent environments" },
      { name: "CI/CD", desc: "Automated reliability" },
      { name: "Vitest", desc: "Fast, modern testing" },
      { name: "Playwright", desc: "Real user testing" },
    ],
    observability: [
      { name: "Sentry", desc: "Error tracking" },
      { name: "Grafana", desc: "Visual monitoring" },
      { name: "Prometheus", desc: "Metrics collection" },
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
  approach: {
    intro:
      "I believe the best technology feels invisible — it gets out of the way and lets people focus on what matters to them. Whether I'm building a marketing site, designing an internal tool, or architecting a complex system, I start with the same question:",
    question: "How can this make someone's day better?",
    outro:
      "From there, every technical decision — from database schema to component architecture to deployment strategy — serves that human goal. The result is software that people actually want to use, teams can maintain confidently, and businesses can depend on to grow.",
  },
} as const;

export default function AboutPage() {
  return (
    <div className="bg-dark-primary text-light-primary min-h-screen px-4 py-20 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <MetaSection title={aboutData.meta.title} />

        <section className="mb-16">
          <h2 className="text-light-primary mb-6 text-2xl font-semibold">
            {aboutData.story.heading}
          </h2>
          <div className="prose prose-lg max-w-none space-y-6 leading-relaxed">
            {aboutData.story.paragraphs.map((p, i) => (
              <p
                key={i}
                className={
                  i === aboutData.story.paragraphs.length - 1
                    ? "text-light-primary font-medium"
                    : "text-gray-light"
                }
              >
                {p}
              </p>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-light-primary mb-8 text-2xl font-semibold">{`Five Non-Negotiables`}</h2>
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
                  className="from-dark-secondary to-gray-medium border-gray-medium/20 flex flex-col items-center gap-4 rounded-2xl border bg-gradient-to-br px-4 py-6 text-center shadow-2xl"
                >
                  <div className="bg-orange-secondary flex h-16 w-16 items-center justify-center rounded-full">
                    <Icon
                      className="text-dark-primary h-8 w-8"
                      strokeWidth={2.5}
                      aria-hidden="true"
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

        <section className="mb-16">
          <h2 className="text-light-primary mb-8 text-2xl font-semibold">{`Toolbox`}</h2>
          <div className="grid gap-8">
            {/* Languages */}
            <div className="from-dark-secondary to-dark-primary border-orange-primary/20 hover:shadow-orange-primary/10 rounded-xl border bg-gradient-to-br p-8 transition-all duration-300 hover:shadow-xl">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-orange-primary h-3 w-3 rounded-full"></div>
                <h3 className="text-orange-secondary text-xl font-bold">{`Languages`}</h3>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {aboutData.toolbox.languages.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-dark-primary/50 border-gray-medium/20 rounded-lg border p-4"
                  >
                    <div className="mb-2 flex items-start justify-between">
                      <span className="text-light-primary font-semibold">
                        {tech.name}
                      </span>
                    </div>
                    <p className="text-gray-light text-sm">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Frontend & Backend */}
            <div className="grid gap-8 md:grid-cols-2">
              <div className="from-dark-secondary to-dark-primary border-orange-secondary/20 hover:shadow-orange-secondary/10 rounded-xl border bg-gradient-to-br p-8 transition-all duration-300 hover:shadow-xl">
                <div className="mb-6 flex items-center gap-3">
                  <div className="bg-orange-secondary h-3 w-3 rounded-full"></div>
                  <h3 className="text-orange-secondary text-xl font-bold">{`Frontend`}</h3>
                </div>
                <div className="space-y-4">
                  {aboutData.toolbox.frontend.map((tech, index) => (
                    <div
                      key={index}
                      className="bg-dark-primary/50 border-gray-medium/20 rounded-lg border p-3"
                    >
                      <div className="text-light-primary mb-1 font-medium">
                        {tech.name}
                      </div>
                      <div className="text-gray-light text-sm">{tech.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="from-dark-secondary to-dark-primary border-orange-primary/20 hover:shadow-orange-primary/10 rounded-xl border bg-gradient-to-br p-8 transition-all duration-300 hover:shadow-xl">
                <div className="mb-6 flex items-center gap-3">
                  <div className="bg-orange-primary h-3 w-3 rounded-full"></div>
                  <h3 className="text-orange-secondary text-xl font-bold">{`Backend`}</h3>
                </div>
                <div className="space-y-4">
                  {aboutData.toolbox.backend.map((tech, index) => (
                    <div
                      key={index}
                      className="bg-dark-primary/50 border-gray-medium/20 rounded-lg border p-3"
                    >
                      <div className="text-light-primary mb-1 font-medium">
                        {tech.name}
                      </div>
                      <div className="text-gray-light text-sm">{tech.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* DevOps & Observability */}
            <div className="grid gap-8 md:grid-cols-2">
              <div className="from-dark-secondary to-dark-primary border-orange-secondary/20 hover:shadow-orange-secondary/10 rounded-xl border bg-gradient-to-br p-8 transition-all duration-300 hover:shadow-xl">
                <div className="mb-6 flex items-center gap-3">
                  <div className="bg-orange-secondary h-3 w-3 rounded-full"></div>
                  <h3 className="text-orange-secondary text-xl font-bold">{`DevOps & Testing`}</h3>
                </div>
                <div className="space-y-4">
                  {aboutData.toolbox.devops.map((tech, index) => (
                    <div
                      key={index}
                      className="bg-dark-primary/50 border-gray-medium/20 rounded-lg border p-3"
                    >
                      <div className="text-light-primary mb-1 font-medium">
                        {tech.name}
                      </div>
                      <div className="text-gray-light text-sm">{tech.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="from-dark-secondary to-dark-primary border-orange-primary/20 hover:shadow-orange-primary/10 rounded-xl border bg-gradient-to-br p-8 transition-all duration-300 hover:shadow-xl">
                <div className="mb-6 flex items-center gap-3">
                  <div className="bg-orange-primary h-3 w-3 rounded-full"></div>
                  <h3 className="text-orange-secondary text-xl font-bold">{`Observability`}</h3>
                </div>
                <div className="space-y-4">
                  {aboutData.toolbox.observability.map((tech, index) => (
                    <div
                      key={index}
                      className="bg-dark-primary/50 border-gray-medium/20 rounded-lg border p-3"
                    >
                      <div className="text-light-primary mb-1 font-medium">
                        {tech.name}
                      </div>
                      <div className="text-gray-light text-sm">{tech.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-light-primary mb-8 text-2xl font-semibold">{`Testimonials`}</h2>
          <div className="grid gap-6">
            {aboutData.testimonials.map((t, i) => (
              <div
                key={i}
                className={`from-dark-secondary to-dark-primary border-orange-primary/20 hover:shadow-orange-primary/10 rounded-xl border bg-gradient-to-br p-8 transition-all duration-300 hover:shadow-xl`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`bg-orange-primary h-16 w-1 flex-shrink-0 rounded-full`}
                  ></div>
                  <div>
                    <p className="text-light-primary mb-4 text-lg leading-relaxed italic">{`"${t.quote}"`}</p>
                    <div className="text-sm">
                      <div className="text-light-primary font-medium">
                        {t.author}
                      </div>
                      <div className="text-gray-light">{t.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-light-primary mb-6 text-2xl font-semibold">{`My Approach`}</h2>
          <div className="bg-dark-secondary border-gray-medium/30 hover:shadow-orange-primary/10 rounded-xl border p-8 transition-all duration-300 hover:shadow-xl">
            <p className="text-gray-light mb-6 leading-relaxed">
              {aboutData.approach.intro}
            </p>
            <p className="text-light-primary mb-6 text-center text-2xl font-semibold">{`"${aboutData.approach.question}"`}</p>
            <p className="text-gray-light leading-relaxed">
              {aboutData.approach.outro}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
