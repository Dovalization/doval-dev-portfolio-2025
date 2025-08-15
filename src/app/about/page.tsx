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

        {/* Story */}
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

        {/* Five Non-Negotiables */}
        <section className="mb-16">
          <h2 className="text-light-primary mb-8 text-2xl font-semibold">
            Five Non-Negotiables
          </h2>
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
                  className="from-dark-secondary to-gray-medium border-gray-medium/20 flex flex-col items-center gap-4 rounded-2xl border bg-gradient-to-br px-4 py-6 text-center shadow-2xl"
                >
                  <div className="bg-orange-secondary flex h-16 w-16 items-center justify-center rounded-full">
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

        {/* Approach */}
        <section className="mb-16">
          <h2 className="text-light-primary mb-6 text-2xl font-semibold">
            My Approach
          </h2>
          <div className="from-dark-secondary to-gray-medium border-gray-medium/20 mb-8 break-inside-avoid rounded-xl border bg-gradient-to-br p-6 shadow-lg">
            <p className="text-gray-light mb-6 leading-relaxed">
              {aboutData.approach.intro}
            </p>
            <p className="text-light-primary mb-6 text-center text-2xl font-semibold">
              {`"${aboutData.approach.question}"`}
            </p>
            <p className="text-gray-light leading-relaxed">
              {aboutData.approach.outro}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
