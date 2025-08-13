import MetaSection from "@/components/meta-section";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-dark-primary text-light-primary py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <MetaSection title="About" />

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-light-primary">{`My Story`}</h2>
          <div className="prose prose-lg max-w-none leading-relaxed space-y-6">
            <p className="text-gray-light">
              {`I don't build products that trap people — I build tools that give
              them clarity, control, and the freedom to act.`}
            </p>
            <p className="text-gray-light">
              {`That conviction isn't just a design choice; it's personal. As a
              neurodivergent developer, I've felt the drag of systems that
              interrupt momentum, scatter focus, or bury the important under the
              urgent. I know the frustration of having a clear goal but no clear
              path forward.`}
            </p>
            <p className="text-gray-light">
              {`Over time, I turned that frustration into focus: creating systems
              and interfaces that work the way people actually think and decide.
              Fast to use. Simple to maintain. Designed to keep the important
              visible and help teams act on what matters.`}
            </p>
            <p className="text-gray-light">
              {`Each step in my career built on the last. Game development taught me speed, iteration, and the value of cross-disciplinary teamwork. Design and UI/UX sharpened my instinct for clarity and usability. Full-stack engineering gave me the technical depth to make those qualities scalable and sustainable.`}
            </p>
            <p className="font-medium text-light-primary">
              {`When technology supports clarity, momentum, and trust, people don't just use it — they depend on it. And that's the kind of work worth building.`}
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-light-primary">{`Five Non-Negotiables`}</h2>
          <div className="grid gap-6">
            <div className="bg-dark-secondary border border-gray-medium/30 rounded-xl p-6 hover:shadow-xl hover:shadow-orange-primary/10 transition-all duration-300 hover:border-orange-primary/50">
              <div className="flex items-start gap-4">
                <div className="w-1 h-12 bg-orange-primary rounded-full flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-light-primary">{`Built for real needs`}</h3>
                  <p className="text-gray-light">{`Solutions grounded in how people actually work, think, and decide.`}</p>
                </div>
              </div>
            </div>
            <div className="bg-dark-secondary border border-gray-medium/30 rounded-xl p-6 hover:shadow-xl hover:shadow-orange-secondary/10 transition-all duration-300 hover:border-orange-secondary/50">
              <div className="flex items-start gap-4">
                <div className="w-1 h-12 bg-orange-secondary rounded-full flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-light-primary">{`Champion the user`}</h3>
                  <p className="text-gray-light">{`Every design choice is an act of advocacy.`}</p>
                </div>
              </div>
            </div>
            <div className="bg-dark-secondary border border-gray-medium/30 rounded-xl p-6 hover:shadow-xl hover:shadow-orange-primary/10 transition-all duration-300 hover:border-orange-primary/50">
              <div className="flex items-start gap-4">
                <div className="w-1 h-12 bg-orange-primary rounded-full flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-light-primary">{`Experience is the product`}</h3>
                  <p className="text-gray-light">{`How it feels to use matters as much as what it does.`}</p>
                </div>
              </div>
            </div>
            <div className="bg-dark-secondary border border-gray-medium/30 rounded-xl p-6 hover:shadow-xl hover:shadow-orange-secondary/10 transition-all duration-300 hover:border-orange-secondary/50">
              <div className="flex items-start gap-4">
                <div className="w-1 h-12 bg-orange-secondary rounded-full flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-light-primary">{`Reduce cognitive friction`}</h3>
                  <p className="text-gray-light">{`Clarity and predictability keep people moving forward.`}</p>
                </div>
              </div>
            </div>
            <div className="bg-dark-secondary border border-gray-medium/30 rounded-xl p-6 hover:shadow-xl hover:shadow-orange-primary/10 transition-all duration-300 hover:border-orange-primary/50">
              <div className="flex items-start gap-4">
                <div className="w-1 h-12 bg-orange-primary rounded-full flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-light-primary">{`Support autonomy`}</h3>
                  <p className="text-gray-light">{`Tools should empower, not control.`}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-light-primary">{`Toolbox`}</h2>
          <div className="grid gap-8">
            {/* Languages */}
            <div className="bg-gradient-to-br from-dark-secondary to-dark-primary border border-orange-primary/20 rounded-xl p-8 hover:shadow-xl hover:shadow-orange-primary/10 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-orange-primary rounded-full"></div>
                <h3 className="font-bold text-xl text-orange-primary">{`Languages`}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-dark-primary/50 rounded-lg p-4 border border-gray-medium/20">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-semibold text-light-primary">{`JavaScript/TypeScript`}</span>
                  </div>
                  <p className="text-sm text-gray-light">{`Type safety & developer experience`}</p>
                </div>
                <div className="bg-dark-primary/50 rounded-lg p-4 border border-gray-medium/20">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-semibold text-light-primary">{`SQL`}</span>
                  </div>
                  <p className="text-sm text-gray-light">{`Direct data control & performance`}</p>
                </div>
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
                  {[
                    { name: "React", desc: "Component reusability" },
                    { name: "Next.js", desc: "Full-stack performance" },
                    { name: "Tailwind CSS", desc: "Rapid, consistent styling" },
                    { name: "Zod", desc: "Runtime type validation" },
                    { name: "TanStack Query", desc: "Smart data fetching" },
                  ].map((tech, index) => (
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
                  <h3 className="font-bold text-xl text-orange-primary">{`Backend`}</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { name: "Node.js", desc: "JavaScript everywhere" },
                    {
                      name: "Express/Fastify",
                      desc: "Flexible API architecture",
                    },
                    { name: "PostgreSQL", desc: "Reliable, powerful data" },
                  ].map((tech, index) => (
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
                  {[
                    { name: "Docker", desc: "Consistent environments" },
                    { name: "CI/CD", desc: "Automated reliability" },
                    { name: "Vitest", desc: "Fast, modern testing" },
                    { name: "Playwright", desc: "Real user testing" },
                  ].map((tech, index) => (
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
                  <h3 className="font-bold text-xl text-orange-primary">{`Observability`}</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { name: "Sentry", desc: "Error tracking" },
                    { name: "Grafana", desc: "Visual monitoring" },
                    { name: "Prometheus", desc: "Metrics collection" },
                  ].map((tech, index) => (
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
            <div className="bg-gradient-to-br from-dark-secondary to-dark-primary border border-orange-primary/20 rounded-xl p-8 hover:shadow-xl hover:shadow-orange-primary/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-1 h-16 bg-orange-primary rounded-full flex-shrink-0"></div>
                <div>
                  <p className="text-light-primary mb-4 italic text-lg leading-relaxed">{`"Guilherme's ability to bridge design sensibility with solid engineering made every project better."`}</p>
                  <div className="text-sm">
                    <div className="font-medium text-light-primary">{`Colleague`}</div>
                    <div className="text-gray-light">{`Aquiris Game Studio`}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-dark-secondary to-dark-primary border border-orange-secondary/20 rounded-xl p-8 hover:shadow-xl hover:shadow-orange-secondary/10 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-1 h-16 bg-orange-secondary rounded-full flex-shrink-0"></div>
                <div>
                  <p className="text-light-primary mb-4 italic text-lg leading-relaxed">{`"Working with Guilherme felt like having both a product thinker and an engineer in the same person."`}</p>
                  <div className="text-sm">
                    <div className="font-medium text-light-primary">{`Project Manager`}</div>
                    <div className="text-gray-light">{`Foton Tech`}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-light-primary">{`My Approach`}</h2>
          <div className="bg-dark-secondary border border-gray-medium/30 rounded-xl p-8 hover:shadow-xl hover:shadow-orange-primary/10 transition-all duration-300">
            <p className="text-gray-light leading-relaxed mb-6">
              {`I believe the best technology feels invisible — it gets out of the way and lets people focus on what matters to them. Whether I'm building a marketing site, designing an internal tool, or architecting a complex system, I start with the same question:`}
            </p>
            <p className="text-2xl font-semibold text-center text-light-primary mb-6">
              {`"How can this make someone's day better?"`}
            </p>
            <p className="text-gray-light leading-relaxed">
              {`From there, every technical decision — from database schema to component architecture to deployment strategy — serves that human goal. The result is software that people actually want to use, teams can maintain confidently, and businesses can depend on to grow.`}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
