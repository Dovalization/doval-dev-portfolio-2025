import Link from "next/link";
import { HeartHandshake, Zap, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-primary" />
        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-light-primary mb-8 leading-tight">
            {"Building Systems That"}
            <br />
            <span className="text-orange-secondary">{"Empower People"}</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-light mb-12 max-w-4xl mx-auto leading-relaxed">
            {
              "Full-Stack Engineer focused on Frontend, creating tools that help teams work better together."
            }
          </p>
          <Link
            href="/contact"
            className="bg-orange-secondary text-dark-primary px-12 py-4 rounded-full text-lg font-bold hover:bg-orange-primary transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
          >
            {"Let's Work Together"}
          </Link>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-1/2 right-10 w-20 h-20 bg-orange-secondary rounded-full opacity-20 blur-xl" />
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-orange-primary rounded-full opacity-10 blur-2xl" />
      </section>

      {/* Selected Work Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-light-primary">
            Selected Work
          </h2>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Horizon Chase 2 */}
            <div className="group bg-gradient-to-br from-dark-secondary to-gray-medium border border-gray-medium/30 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-orange-primary/10">
              <div className="h-48 bg-gradient-to-br from-dark-secondary via-dark-secondary to-dark-primary relative overflow-hidden">
                <span className="absolute left-6 top-6 inline-block px-3 py-1 bg-orange-primary/20 text-orange-secondary border border-orange-primary/30 rounded-full text-xs font-semibold">
                  Marketing Site & CMS
                </span>
                <span className="absolute -right-6 -bottom-6 w-24 h-24 bg-orange-secondary/10 rounded-full blur-2xl" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-light-primary mb-3 group-hover:text-orange-secondary transition-colors">
                  Horizon Chase 2
                </h3>
                <p className="text-gray-light mb-6">
                  High-performance, multilingual marketing site with fast
                  iteration for non-dev content editors.
                </p>
                <Link
                  href="/work"
                  className="inline-flex items-center text-orange-primary font-medium group-hover:text-orange-secondary transition-colors"
                >
                  View case study
                  <svg
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Aquiris Platform */}
            <div className="group bg-gradient-to-br from-dark-secondary to-gray-medium border border-gray-medium/30 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-orange-primary/10">
              <div className="h-48 bg-gradient-to-br from-dark-secondary via-dark-secondary to-dark-primary relative overflow-hidden">
                <span className="absolute left-6 top-6 inline-block px-3 py-1 bg-orange-primary/20 text-orange-secondary border border-orange-primary/30 rounded-full text-xs font-semibold">
                  Platform Revamp
                </span>
                <span className="absolute -left-8 -bottom-8 w-28 h-28 bg-orange-primary/10 rounded-full blur-2xl" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-light-primary mb-3 group-hover:text-orange-secondary transition-colors">
                  Aquiris Web Platform
                </h3>
                <p className="text-gray-light mb-6">
                  Unified architecture for multiple game marketing pages with
                  scalable component library.
                </p>
                <Link
                  href="/work"
                  className="inline-flex items-center text-orange-primary font-medium group-hover:text-orange-secondary transition-colors"
                >
                  View case study
                  <svg
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Internal Tools */}
            <div className="group bg-gradient-to-br from-dark-secondary to-gray-medium border border-gray-medium/30 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-orange-primary/10">
              <div className="h-48 bg-gradient-to-br from-dark-secondary via-dark-secondary to-dark-primary relative overflow-hidden">
                <span className="absolute left-6 top-6 inline-block px-3 py-1 bg-orange-primary/20 text-orange-secondary border border-orange-primary/30 rounded-full text-xs font-semibold">
                  Workflow Automation
                </span>
                <span className="absolute right-6 bottom-6 w-16 h-16 bg-orange-secondary/10 rounded-full blur-xl" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-light-primary mb-3 group-hover:text-orange-secondary transition-colors">
                  Internal Tools Suite
                </h3>
                <p className="text-gray-light mb-6">
                  Queue management with RBAC and audit tooling to eliminate
                  bottlenecks and improve autonomy.
                </p>
                <Link
                  href="/work"
                  className="inline-flex items-center text-orange-primary font-medium group-hover:text-orange-secondary transition-colors"
                >
                  View case study
                  <svg
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/work"
              className="text-light-primary font-medium hover:text-orange-secondary transition-colors inline-flex items-center text-lg"
            >
              View all projects
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 text-light-primary">
                About Me
              </h2>
              <p className="text-gray-light mb-6 text-lg leading-relaxed">
                I believe in building systems that empower people and teams to
                do their best work.
              </p>
              <p className="text-gray-light mb-8 text-lg leading-relaxed">
                I bring a perspective that combines technical expertise with
                human-centered design thinking.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-dark-secondary to-gray-medium rounded-xl p-6 border border-gray-medium/20">
                  <div className="w-2 h-2 bg-orange-primary rounded-full mb-4" />
                  <p className="text-light-primary font-semibold mb-1">
                    7+ years
                  </p>
                  <p className="text-gray-light text-sm">
                    building for the web
                  </p>
                </div>
                <div className="bg-gradient-to-br from-dark-secondary to-gray-medium rounded-xl p-6 border border-gray-medium/20">
                  <div className="w-2 h-2 bg-orange-primary rounded-full mb-4" />
                  <p className="text-light-primary font-semibold mb-1">
                    Systems mindset
                  </p>
                  <p className="text-gray-light text-sm">with human focus</p>
                </div>
              </div>
              <Link
                href="/about"
                className="text-light-primary font-medium hover:text-orange-secondary transition-colors inline-flex items-center text-lg"
              >
                Read my full story
              </Link>
            </div>
            <div className="relative bg-gradient-to-br from-dark-secondary to-gray-medium rounded-full p-8 shadow-2xl aspect-square overflow-hidden max-w-sm mx-auto w-full">
              <Image
                src="/images/about.png"
                alt="About Me"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-light-primary">
            Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-dark-secondary to-gray-medium rounded-2xl p-8 shadow-2xl text-center border border-gray-medium/20">
              <div className="w-16 h-16 bg-orange-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                <HeartHandshake
                  className="w-8 h-8 text-dark-primary"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-light-primary">
                Human-Centered
              </h3>
              <p className="text-gray-light">
                Build tools that empower people and reduce friction.
              </p>
            </div>
            <div className="bg-gradient-to-br from-dark-secondary to-gray-medium rounded-2xl p-8 shadow-2xl text-center border border-gray-medium/20">
              <div className="w-16 h-16 bg-orange-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                <Zap
                  className="w-8 h-8 text-dark-primary"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-light-primary">
                Performance-Driven
              </h3>
              <p className="text-gray-light">
                Fast by default. Optimize for real-world usage and scale.
              </p>
            </div>
            <div className="bg-gradient-to-br from-dark-secondary to-gray-medium rounded-2xl p-8 shadow-2xl text-center border border-gray-medium/20">
              <div className="w-16 h-16 bg-orange-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                <ShieldCheck
                  className="w-8 h-8 text-dark-primary"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-light-primary">
                Craft & Reliability
              </h3>
              <p className="text-gray-light">
                Thoughtful engineering, clear communication, steady delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-light-primary">
            What Colleagues Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <figure className="bg-gradient-to-br from-dark-secondary to-gray-medium rounded-2xl p-8 shadow-2xl border border-gray-medium/20">
              <div className="w-8 h-1 bg-orange-primary rounded mb-6" />
              <blockquote className="text-light-primary text-lg leading-relaxed mb-6">
                “Guilherme consistently brings clarity to complex problems and
                delivers fast, reliable solutions.”
              </blockquote>
              <figcaption className="text-gray-light text-sm">
                Alex R. — Engineering Manager
              </figcaption>
            </figure>
            <figure className="bg-gradient-to-br from-dark-secondary to-gray-medium rounded-2xl p-8 shadow-2xl border border-gray-medium/20">
              <div className="w-8 h-1 bg-orange-primary rounded mb-6" />
              <blockquote className="text-light-primary text-lg leading-relaxed mb-6">
                “A great partner across design and engineering. We shipped
                quickly without compromising quality.”
              </blockquote>
              <figcaption className="text-gray-light text-sm">
                Marina S. — Product Designer
              </figcaption>
            </figure>
            <figure className="bg-gradient-to-br from-dark-secondary to-gray-medium rounded-2xl p-8 shadow-2xl border border-gray-medium/20">
              <div className="w-8 h-1 bg-orange-primary rounded mb-6" />
              <blockquote className="text-light-primary text-lg leading-relaxed mb-6">
                “He improved our Core Web Vitals and developer workflow in
                weeks. Huge impact.”
              </blockquote>
              <figcaption className="text-gray-light text-sm">
                Rafael T. — Tech Lead
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-dark-secondary to-gray-medium">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-light-primary">
            {"Let's Build Something Great Together"}
          </h2>
          <p className="text-gray-light mb-8 text-xl max-w-3xl mx-auto leading-relaxed">
            {
              "Ready to create tools that empower people and teams? I'd love to hear about your project and explore how we can work together."
            }
          </p>
          <Link
            href="/contact"
            className="bg-orange-secondary text-dark-primary px-12 py-4 rounded-full text-lg font-bold hover:bg-orange-primary transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
