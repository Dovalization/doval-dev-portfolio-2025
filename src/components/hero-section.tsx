"use client";
import { cn } from "@/lib/utils";
import { useInViewAnimation } from "@/lib/useInViewAnimation";
import ParticleBackground from "@/components/particle-background";
import ButtonLink from "@/components/button-link";
const hero = {
  image: { src: "/images/about.png", alt: "About Me" },
  headingTop: "Full-stack Developer",
  headingAccent: "Human-centered design",
  subheading:
    "I build solutions that empower people – tools that help teams work better together. My work is driven by a desire to understand user needs and a passion for creating meaningful experiences.",
  ctas: [
    { label: "About me", href: "#about" },
    { label: "See my work", href: "#work" },
    { label: "Get in touch", href: "#contact" },
  ],
};

export default function HeroSection() {
  const { ref: heroRef, isInView: isHeroVisible } = useInViewAnimation({
    threshold: 0.1, // Trigger when 10% of hero section is visible
    rootMargin: "-50px 0px", // Add small buffer to avoid flickering
    triggerOnce: false, // Keep original behavior of re-triggering
  });

  return (
    <div
      className={cn(
        "after:from-dark-primary relative ease-in-out after:pointer-events-none after:absolute after:right-0 after:bottom-0 after:left-0 after:h-40 after:bg-gradient-to-t after:to-transparent",
      )}
      ref={heroRef}
    >
      <section className="container mx-auto flex h-[calc(100vh-5rem)] flex-col items-center justify-center gap-8 overflow-hidden px-4 text-center sm:px-6">
        <ParticleBackground isVisible={isHeroVisible} />
        <h1 className="text-light-primary text-5xl leading-tight font-bold text-shadow-black text-shadow-sm sm:text-6xl lg:text-7xl">
          {hero.headingTop}
          <br />
          <span className="text-orange-secondary">{hero.headingAccent}</span>
        </h1>
        <p className="text-light-primary mx-auto max-w-prose text-lg leading-relaxed font-semibold text-shadow-black text-shadow-sm sm:text-xl">
          {hero.subheading}
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {hero.ctas.map((cta, idx) => (
            <ButtonLink key={idx} href={cta.href}>
              {cta.label}
            </ButtonLink>
          ))}
        </div>
      </section>
    </div>
  );
}
