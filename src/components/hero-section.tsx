"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import ParticleBackground from "@/components/particle-background";

interface HeroSectionProps {
  hero: {
    image: { src: string; alt: string };
    headingTop: string;
    headingAccent: string;
    subheading: string;
    ctas: { label: string; href: string }[];
  };
}

export default function HeroSection({ hero }: HeroSectionProps) {
  const { ref: heroRef, inView: isHeroVisible } = useInView({
    threshold: 0.1, // Trigger when 10% of hero section is visible
    rootMargin: "-50px 0px", // Add small buffer to avoid flickering
  });

  return (
    <div
      className="after:from-dark-primary relative after:pointer-events-none after:absolute after:right-0 after:bottom-0 after:left-0 after:h-40 after:bg-gradient-to-t after:to-transparent"
      ref={heroRef}
    >
      <section className="container mx-auto flex h-[calc(100vh-5rem)] flex-col items-center justify-center gap-8 overflow-hidden px-4 text-center sm:px-6">
        <ParticleBackground isVisible={isHeroVisible} />
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          width={256}
          height={256}
          className="rounded-full shadow-2xl"
        />
        <h1 className="text-light-primary text-5xl leading-tight font-bold sm:text-6xl lg:text-7xl">
          {hero.headingTop}
          <br />
          <span className="from-orange-secondary to-orange-primary bg-gradient-to-tr bg-clip-text text-transparent">
            {hero.headingAccent}
          </span>
        </h1>
        <p className="text-gray-light mx-auto max-w-prose text-lg leading-relaxed sm:text-xl">
          {hero.subheading}
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {hero.ctas.map((cta, idx) => (
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
    </div>
  );
}
