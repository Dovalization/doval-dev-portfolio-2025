import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="container mx-auto flex scroll-mt-12 flex-col items-center gap-8 px-4 text-center sm:px-6"
    >
      <h2 className="font-bold">About me</h2>
      <Image
        src="/images/about.png"
        alt="About Me"
        width={175}
        height={175}
        className="rounded-full shadow-2xl"
      />
      <div className="flex max-w-prose flex-col gap-6 text-left sm:text-left text-lg">
        <p className="text-light-primary leading-6 font-bold">
          Hi! I&rsquo;m Guilherme Doval—I turn ambitious visions into technology
          people can rely on.
        </p>
        <p className="text-light-primary leading-6">
          Eight years ago, I was building game worlds where every design
          decision shaped how players experienced the gameplay. Today, I build
          web applications where every decision shapes how teams get work done.
          What connects them? Understanding that technology isn&rsquo;t just
          about functionality—it&rsquo;s about creating experiences that feel
          intuitive to the people using them.
        </p>
        <p className="text-light-primary leading-6">
          My Master&rsquo;s research on interface design and user psychology
          revealed something crucial: interfaces don&rsquo;t just provide
          functionality—they create meaning and emotional connection. I studied
          how game user interfaces could increase player immersion, even when
          they were technically &rsquo;harder to use&rsquo;. This taught me that
          the psychological experience of using a system matters as much as its
          efficiency.
        </p>
        <p className="text-light-primary leading-6">
          This research background changes how I approach every project. While
          most developers optimize for usability metrics, I understand when to
          balance efficiency with engagement. I can see when a technical
          decision will affect how users relate to the system, or when a
          stakeholder&rsquo;s vision actually aligns with creating better user
          experiences.
        </p>
        <p className="text-light-primary leading-6">
          I handle the complete process: stakeholder interviews, user research,
          system architecture, implementation, and deployment. But what sets me
          apart is connecting these pieces through an understanding of how
          people actually process and relate to technology. I don&rsquo;t just
          build what stakeholders ask for—I research what users actually need,
          then build systems that work for both the business and the people
          using them.
        </p>
        <p className="text-light-primary leading-6">
          The result? Technology that teams don&rsquo;t just use, but rely on.
          Systems that feel intuitive because they&rsquo;re built around how
          people naturally think and work.
        </p>
      </div>
      <blockquote className="text-orange-secondary text-xl font-semibold">
        “Make the important visible, reduce friction, and build reliable
        systems.”
      </blockquote>
    </section>
  );
}
