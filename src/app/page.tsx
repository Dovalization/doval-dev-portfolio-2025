import Link from "next/link";
import Image from "next/image";

// Content data (to be replaced by CMS)
const homeData = {
  hero: {
    image: { src: "/images/about.png", alt: "About Me" },

    headingTop: "Full-stack Developer",
    headingAccent: "Human-centered design",
    subheading:
      "I build solutions that empower people – tools that help teams work better together. My work is driven by a desire to understand user needs and a passion for creating meaningful experiences.",
    ctas: [
      { label: "About me", href: "/about" },
      { label: "See my work", href: "/work" },
      { label: "Get in touch", href: "/contact" },
    ],
  },
} as const;

export default function HomePage() {
  return (
    <section className="bg-primary relative flex h-[calc(100vh-5rem)] flex-col items-center justify-center gap-8 overflow-hidden px-4 text-center sm:px-6">
      <Image
        src={homeData.hero.image.src}
        alt={homeData.hero.image.alt}
        width={256}
        height={256}
        className="rounded-full shadow-2xl"
      />
      <h1 className="text-light-primary text-5xl leading-tight font-bold sm:text-6xl lg:text-7xl">
        {homeData.hero.headingTop}
        <br />
        <span className="from-orange-secondary to-orange-primary bg-gradient-to-tr bg-clip-text text-transparent">
          {homeData.hero.headingAccent}
        </span>
      </h1>
      <p className="text-gray-light mx-auto max-w-prose text-xl leading-relaxed sm:text-2xl">
        {homeData.hero.subheading}
      </p>

      {/* Call to Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        {homeData.hero.ctas.map((cta, idx) => (
          <Link
            key={idx}
            href={cta.href}
            className="bg-orange-secondary text-dark-primary hover:bg-orange-primary inline-block transform rounded-full px-8 py-3 text-lg font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            {cta.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
