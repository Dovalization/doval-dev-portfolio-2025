import Link from "next/link";
import { HeartHandshake, Zap, ShieldCheck } from "lucide-react";
import Image from "next/image";

// Content data (to be replaced by CMS)
const homeData = {
  hero: {
    headingTop: "Building Systems That",
    headingAccent: "Empower People",
    subheading:
      "Full-Stack Engineer focused on Frontend, creating tools that help teams work better together.",
    cta: { label: "Let's Work Together", href: "/contact" },
  },
  selectedWork: [
    {
      badge: "Marketing Site & CMS",
      title: "Horizon Chase 2",
      description:
        "High-performance, multilingual marketing site with fast iteration for non-dev content editors.",
      href: "/work",
    },
    {
      badge: "Platform Revamp",
      title: "Aquiris Web Platform",
      description:
        "Unified architecture for multiple game marketing pages with scalable component library.",
      href: "/work",
    },
    {
      badge: "Workflow Automation",
      title: "Internal Tools Suite",
      description:
        "Queue management with RBAC and audit tooling to eliminate bottlenecks and improve autonomy.",
      href: "/work",
    },
  ],
  aboutPreview: {
    title: "About Me",
    paragraphs: [
      "I believe in building systems that empower people and teams to do their best work.",
      "I bring a perspective that combines technical expertise with human-centered design thinking.",
    ],
    stats: [
      { title: "7+ years", subtitle: "building for the web" },
      { title: "Systems mindset", subtitle: "with human focus" },
    ],
    ctaLabel: "Read my full story",
    ctaHref: "/about",
    image: { src: "/images/about.png", alt: "About Me" },
  },
  coreValues: [
    {
      icon: "HeartHandshake",
      title: "Human-Centered",
      description: "Build tools that empower people and reduce friction.",
    },
    {
      icon: "Zap",
      title: "Performance-Driven",
      description: "Fast by default. Optimize for real-world usage and scale.",
    },
    {
      icon: "ShieldCheck",
      title: "Craft & Reliability",
      description:
        "Thoughtful engineering, clear communication, steady delivery.",
    },
  ],
  testimonials: [
    {
      quote:
        "Guilherme consistently brings clarity to complex problems and delivers fast, reliable solutions.",
      author: "Alex R.",
      role: "Engineering Manager",
    },
    {
      quote:
        "A great partner across design and engineering. We shipped quickly without compromising quality.",
      author: "Marina S.",
      role: "Product Designer",
    },
    {
      quote:
        "He improved our Core Web Vitals and developer workflow in weeks. Huge impact.",
      author: "Rafael T.",
      role: "Tech Lead",
    },
  ],
  cta: {
    title: "Let's Build Something Great Together",
    description:
      "Ready to create tools that empower people and teams? I'd love to hear about your project and explore how we can work together.",
    ctaLabel: "Get In Touch",
    ctaHref: "/contact",
  },
} as const;

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-primary via-dark-secondary to-dark-primary" />
        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-light-primary mb-8 leading-tight">
            {homeData.hero.headingTop}
            <br />
            <span className="text-orange-secondary">
              {homeData.hero.headingAccent}
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-light mb-12 max-w-4xl mx-auto leading-relaxed">
            {homeData.hero.subheading}
          </p>
          <Link
            href={homeData.hero.cta.href}
            className="bg-orange-secondary text-dark-primary px-12 py-4 rounded-full text-lg font-bold hover:bg-orange-primary transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
          >
            {homeData.hero.cta.label}
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
            {homeData.selectedWork.map((item, idx) => (
              <article
                key={idx}
                className="group bg-gradient-to-br from-dark-secondary to-gray-medium shadow-2xl border border-gray-medium/20 rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-orange-primary/10"
              >
                <div className="h-48 bg-gradient-to-br from-dark-secondary via-dark-secondary to-dark-primary relative overflow-hidden">
                  <span className="absolute left-6 top-6 inline-block px-3 py-1 bg-orange-primary/20 text-orange-secondary border border-orange-primary/30 rounded-full text-xs font-semibold">
                    {item.badge}
                  </span>
                  <span className="absolute -right-6 -bottom-6 w-24 h-24 bg-orange-secondary/10 rounded-full blur-2xl" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-light-primary mb-3 group-hover:text-orange-secondary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-light mb-6">{item.description}</p>
                  <Link
                    href={item.href}
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
              </article>
            ))}
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
                {homeData.aboutPreview.title}
              </h2>
              {homeData.aboutPreview.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-gray-light mb-6 text-lg leading-relaxed"
                >
                  {p}
                </p>
              ))}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {homeData.aboutPreview.stats.map((s, i) => (
                  <div key={i} className="">
                    <h3 className="font-semibold text-lg mb-3 text-orange-secondary flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-secondary rounded-full"></div>
                      {s.title}
                    </h3>
                    <p className="text-gray-light text-sm">{s.subtitle}</p>
                  </div>
                ))}
              </div>
              <Link
                href={homeData.aboutPreview.ctaHref}
                className="text-light-primary font-medium hover:text-orange-secondary transition-colors inline-flex items-center text-lg"
              >
                {homeData.aboutPreview.ctaLabel}
              </Link>
            </div>
            <div className="relative bg-gradient-to-br from-dark-secondary to-gray-medium rounded-full p-8 shadow-2xl aspect-square overflow-hidden max-w-sm mx-auto w-full">
              <Image
                src={homeData.aboutPreview.image.src}
                alt={homeData.aboutPreview.image.alt}
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
            {homeData.coreValues.map((value, i) => {
              const iconMap = { HeartHandshake, Zap, ShieldCheck } as const;
              const Icon = iconMap[value.icon as keyof typeof iconMap];
              return (
                <div
                  key={i}
                  className="bg-gradient-to-br from-dark-secondary to-gray-medium rounded-2xl p-8 shadow-2xl text-center border border-gray-medium/20"
                >
                  <div className="w-16 h-16 bg-orange-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Icon
                      className="w-8 h-8 text-dark-primary"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-light-primary">
                    {value.title}
                  </h3>
                  <p className="text-gray-light">{value.description}</p>
                </div>
              );
            })}
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
            {homeData.testimonials.map((t, i) => (
              <figure
                key={i}
                className="bg-gradient-to-br from-dark-secondary to-gray-medium rounded-2xl p-8 shadow-2xl border border-gray-medium/20"
              >
                <div className="w-8 h-1 bg-orange-secondary rounded mb-6" />
                <blockquote className="text-light-primary text-lg leading-relaxed mb-6">
                  {`“${t.quote}”`}
                </blockquote>
                <figcaption className="text-gray-light text-sm">
                  {t.author} — {t.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-dark-secondary to-gray-medium">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-light-primary">
            {homeData.cta.title}
          </h2>
          <p className="text-gray-light mb-8 text-xl max-w-3xl mx-auto leading-relaxed">
            {homeData.cta.description}
          </p>
          <Link
            href={homeData.cta.ctaHref}
            className="bg-orange-secondary text-dark-primary px-12 py-4 rounded-full text-lg font-bold hover:bg-orange-primary transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
          >
            {homeData.cta.ctaLabel}
          </Link>
        </div>
      </section>
    </div>
  );
}
