import Link from "next/link";
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
      <section className="relative overflow-hidden px-4 py-32 sm:px-6 lg:px-8">
        <div className="from-dark-primary via-dark-secondary to-dark-primary absolute inset-0 bg-gradient-to-br" />
        <div className="relative mx-auto max-w-5xl text-center">
          <h1 className="text-light-primary mb-8 text-5xl leading-tight font-bold sm:text-6xl lg:text-7xl">
            {homeData.hero.headingTop}
            <br />
            <span className="text-orange-secondary">
              {homeData.hero.headingAccent}
            </span>
          </h1>
          <p className="text-gray-light mx-auto mb-12 max-w-4xl text-xl leading-relaxed sm:text-2xl">
            {homeData.hero.subheading}
          </p>
          <Link
            href={homeData.hero.cta.href}
            className="bg-orange-secondary text-dark-primary hover:bg-orange-primary inline-block transform rounded-full px-12 py-4 text-lg font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            {homeData.hero.cta.label}
          </Link>
        </div>
        {/* Decorative elements */}
        <div className="bg-orange-secondary absolute top-1/2 right-10 h-20 w-20 rounded-full opacity-20 blur-xl" />
        <div className="bg-orange-primary absolute bottom-20 left-10 h-32 w-32 rounded-full opacity-10 blur-2xl" />
      </section>

      {/* Selected Work Preview */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-light-primary mb-16 text-center text-4xl font-bold">
            Selected Work
          </h2>
          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {homeData.selectedWork.map((item, idx) => (
              <article
                key={idx}
                className="group from-dark-secondary to-gray-medium border-gray-medium/20 hover:shadow-orange-primary/10 transform overflow-hidden rounded-2xl border bg-gradient-to-br shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="from-dark-secondary via-dark-secondary to-dark-primary relative h-48 overflow-hidden bg-gradient-to-br">
                  <span className="bg-orange-primary/20 text-orange-secondary border-orange-primary/30 absolute top-6 left-6 inline-block rounded-full border px-3 py-1 text-xs font-semibold">
                    {item.badge}
                  </span>
                  <span className="bg-orange-secondary/10 absolute -right-6 -bottom-6 h-24 w-24 rounded-full blur-2xl" />
                </div>
                <div className="p-8">
                  <h3 className="text-light-primary group-hover:text-orange-secondary mb-3 text-2xl font-bold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-light mb-6">{item.description}</p>
                  <Link
                    href={item.href}
                    className="text-orange-primary group-hover:text-orange-secondary inline-flex items-center font-medium transition-colors"
                  >
                    View case study
                    <svg
                      className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
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
          <div className="mt-12 text-center">
            <Link
              href="/work"
              className="text-light-primary hover:text-orange-secondary inline-flex items-center text-lg font-medium transition-colors"
            >
              View all projects
              <svg
                className="ml-2 h-5 w-5"
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
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-light-primary mb-8 text-4xl font-bold">
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
              <div className="mb-8 grid grid-cols-2 gap-6">
                {homeData.aboutPreview.stats.map((s, i) => (
                  <div key={i} className="">
                    <h3 className="text-orange-secondary mb-3 flex items-center gap-2 text-lg font-semibold">
                      <div className="bg-orange-secondary h-2 w-2 rounded-full"></div>
                      {s.title}
                    </h3>
                    <p className="text-gray-light text-sm">{s.subtitle}</p>
                  </div>
                ))}
              </div>
              <Link
                href={homeData.aboutPreview.ctaHref}
                className="text-light-primary hover:text-orange-secondary inline-flex items-center text-lg font-medium transition-colors"
              >
                {homeData.aboutPreview.ctaLabel}
              </Link>
            </div>
            <div className="from-dark-secondary to-gray-medium relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-full bg-gradient-to-br p-8 shadow-2xl">
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

      {/* Testimonials */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-light-primary mb-16 text-center text-4xl font-bold">
            What Colleagues Say
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {homeData.testimonials.map((t, i) => (
              <figure
                key={i}
                className="from-dark-secondary to-gray-medium border-gray-medium/20 rounded-2xl border bg-gradient-to-br p-8 shadow-2xl"
              >
                <div className="bg-orange-secondary mb-6 h-1 w-8 rounded" />
                <blockquote className="text-light-primary mb-6 text-lg leading-relaxed">
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
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-light-primary mb-6 text-4xl font-bold">
            {homeData.cta.title}
          </h2>
          <p className="text-gray-light mx-auto mb-8 max-w-3xl text-xl leading-relaxed">
            {homeData.cta.description}
          </p>
          <Link
            href={homeData.cta.ctaHref}
            className="bg-orange-secondary text-dark-primary hover:bg-orange-primary inline-block transform rounded-full px-12 py-4 text-lg font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            {homeData.cta.ctaLabel}
          </Link>
        </div>
      </section>
    </div>
  );
}
