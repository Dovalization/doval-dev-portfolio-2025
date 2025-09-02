import Image from "next/image";
import { about as aboutData } from "@/data/loader";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="container mx-auto flex scroll-mt-12 flex-col items-center gap-8 px-4 text-center sm:px-6"
    >
      <h2 className="font-bold">{aboutData.title}</h2>
      <Image
        src={aboutData.image.src}
        alt={aboutData.image.alt}
        width={aboutData.image.width}
        height={aboutData.image.height}
        className="rounded-full shadow-2xl"
      />
      <div className="flex max-w-prose flex-col gap-6 text-left sm:text-left text-lg">
        {aboutData.paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className={`text-light-primary leading-6 ${
              index === 0 ? "font-bold" : ""
            }`}
          >
            {paragraph}
          </p>
        ))}
      </div>
      <blockquote className="text-orange-secondary text-xl font-semibold">
        &ldquo;{aboutData.quote}&rdquo;
      </blockquote>
    </section>
  );
}
