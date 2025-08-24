import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="container mx-auto flex flex-col items-center gap-8 px-4 py-16 text-center sm:px-6"
    >
      <h2>About Me</h2>
      <Image
        src="/images/about.png"
        alt="About Me"
        width={175}
        height={175}
        className="rounded-full shadow-2xl"
      />
      <div className="flex max-w-prose flex-col gap-6 text-left text-lg">
        <p className="text-light-primary leading-6 font-bold">
          Hi! I&rsquo;m Guilherme Doval, a full-stack developer with 8+ years of experience building 
          scalable web applications and design systems. Based in Brazil, I specialize in creating 
          high-performance tools that reduce cognitive load and improve team productivity.
        </p>
        <p className="text-light-primary leading-6">
          I don&rsquo;t build products that box people in. I create tools that give teams clarity, 
          control, and the freedom to act on what matters most. My approach focuses on understanding 
          real user workflows and eliminating friction at every interaction.
        </p>
        <p className="text-light-primary leading-6">
          From leading frontend architecture at game studios to building CMS platforms that handle 
          millions of page views, I&rsquo;ve learned that the best software feels invisible — it amplifies 
          human capability without getting in the way.
        </p>
      </div>
      <blockquote className="text-orange-secondary text-xl font-semibold">
        “Make the important visible, reduce friction, and keep teams moving.”
      </blockquote>
    </section>
  );
}
