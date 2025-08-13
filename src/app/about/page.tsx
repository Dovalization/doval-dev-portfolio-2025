import MetaSection from "@/components/meta-section";

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
      text: "Solutions grounded in actual user needs. We do not seek to create complexity, but to reduce it.",
    },
    {
      title: "Champion the user",
      text: "Every design choice serves the person using it, not the system itself.",
    },
    {
      title: "Experience is the product",
      text: "How it feels to use matters as much as what it does, and that experience shapes how people interact with technology.",
    },
    {
      title: "Reduce cognitive friction",
      text: "Clarity and predictability keep people moving forward, reducing distractions and decision fatigue.",
    },
    {
      title: "Support autonomy",
      text: "Tools should empower, not control. Technology should adapt to the user, not the other way around.",
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
    <div className="min-h-screen bg-dark-primary text-light-primary py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <MetaSection title={aboutData.meta.title} />

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-light-primary">
            {aboutData.story.heading}
          </h2>
          <div className="prose prose-lg max-w-none leading-relaxed space-y-6">
            {aboutData.story.paragraphs.map((p, i) => (
              <p
                key={i}
                className={
                  i === aboutData.story.paragraphs.length - 1
                    ? "font-medium text-light-primary"
                    : "text-gray-light"
                }
              >
                {p}
              </p>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-light-primary">{`Five Non-Negotiables`}</h2>
          <div className="grid gap-6">
            {aboutData.nonNegotiables.map((n, i) => (
              <div
                key={i}
                className={`bg-dark-secondary border border-gray-medium/30 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:shadow-orange-primary/10 hover:border-orange-primary/50`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-1 h-12 bg-orange-primary rounded-full flex-shrink-0`}
                  ></div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-light-primary">
                      {n.title}
                    </h3>
                    <p className="text-gray-light">{n.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-light-primary">{`Toolbox`}</h2>
          <div className="grid gap-8">
            {/* Languages */}
            <div className="bg-gradient-to-br from-dark-secondary to-dark-primary border border-orange-primary/20 rounded-xl p-8 hover:shadow-xl hover:shadow-orange-primary/10 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-orange-primary rounded-full"></div>
                <h3 className="font-bold text-xl text-orange-secondary">{`Languages`}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {aboutData.toolbox.languages.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-dark-primary/50 rounded-lg p-4 border border-gray-medium/20"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-semibold text-light-primary">
                        {tech.name}
                      </span>
                    </div>
                    <p className="text-sm text-gray-light">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Frontend & Backend */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-dark-secondary to-dark-primary border border-orange-secondary/20 rounded-xl p-8 hover:shadow-xl hover:shadow-orange-secondary/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-orange-secondary rounded-full"></div>
                  <h3 className="font-bold text-xl text-orange-secondary">{`Frontend`}</h3>
                </div>
                <div className="space-y-4">
                  {aboutData.toolbox.frontend.map((tech, index) => (
                    <div
                      key={index}
                      className="bg-dark-primary/50 rounded-lg p-3 border border-gray-medium/20"
                    >
                      <div className="font-medium text-light-primary mb-1">
                        {tech.name}
                      </div>
                      <div className="text-sm text-gray-light">{tech.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-dark-secondary to-dark-primary border border-orange-primary/20 rounded-xl p-8 hover:shadow-xl hover:shadow-orange-primary/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-orange-primary rounded-full"></div>
                  <h3 className="font-bold text-xl text-orange-secondary">{`Backend`}</h3>
                </div>
                <div className="space-y-4">
                  {aboutData.toolbox.backend.map((tech, index) => (
                    <div
                      key={index}
                      className="bg-dark-primary/50 rounded-lg p-3 border border-gray-medium/20"
                    >
                      <div className="font-medium text-light-primary mb-1">
                        {tech.name}
                      </div>
                      <div className="text-sm text-gray-light">{tech.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* DevOps & Observability */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-dark-secondary to-dark-primary border border-orange-secondary/20 rounded-xl p-8 hover:shadow-xl hover:shadow-orange-secondary/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-orange-secondary rounded-full"></div>
                  <h3 className="font-bold text-xl text-orange-secondary">{`DevOps & Testing`}</h3>
                </div>
                <div className="space-y-4">
                  {aboutData.toolbox.devops.map((tech, index) => (
                    <div
                      key={index}
                      className="bg-dark-primary/50 rounded-lg p-3 border border-gray-medium/20"
                    >
                      <div className="font-medium text-light-primary mb-1">
                        {tech.name}
                      </div>
                      <div className="text-sm text-gray-light">{tech.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-dark-secondary to-dark-primary border border-orange-primary/20 rounded-xl p-8 hover:shadow-xl hover:shadow-orange-primary/10 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-orange-primary rounded-full"></div>
                  <h3 className="font-bold text-xl text-orange-secondary">{`Observability`}</h3>
                </div>
                <div className="space-y-4">
                  {aboutData.toolbox.observability.map((tech, index) => (
                    <div
                      key={index}
                      className="bg-dark-primary/50 rounded-lg p-3 border border-gray-medium/20"
                    >
                      <div className="font-medium text-light-primary mb-1">
                        {tech.name}
                      </div>
                      <div className="text-sm text-gray-light">{tech.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-light-primary">{`Testimonials`}</h2>
          <div className="grid gap-6">
            {aboutData.testimonials.map((t, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br from-dark-secondary to-dark-primary border rounded-xl p-8 hover:shadow-xl transition-all duration-300 border-orange-primary/20 hover:shadow-orange-primary/10`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-1 h-16 bg-orange-primary rounded-full flex-shrink-0`}
                  ></div>
                  <div>
                    <p className="text-light-primary mb-4 italic text-lg leading-relaxed">{`"${t.quote}"`}</p>
                    <div className="text-sm">
                      <div className="font-medium text-light-primary">
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
          <h2 className="text-2xl font-semibold mb-6 text-light-primary">{`My Approach`}</h2>
          <div className="bg-dark-secondary border border-gray-medium/30 rounded-xl p-8 hover:shadow-xl hover:shadow-orange-primary/10 transition-all duration-300">
            <p className="text-gray-light leading-relaxed mb-6">
              {aboutData.approach.intro}
            </p>
            <p className="text-2xl font-semibold text-center text-light-primary mb-6">{`"${aboutData.approach.question}"`}</p>
            <p className="text-gray-light leading-relaxed">
              {aboutData.approach.outro}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
