import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="container mx-auto flex flex-col items-center gap-8 px-4 py-16 text-center sm:px-6"
    >
      <h2 className="font-bold">About me</h2>
      <Image
        src="/images/about.png"
        alt="About Me"
        width={175}
        height={175}
        className="rounded-full shadow-2xl"
      />
      <div className="flex max-w-prose flex-col gap-6 text-left text-lg">
        <p className="text-light-primary leading-6 font-bold">
          Hi! I&#39;m Guilherme Doval—I turn messy stakeholder requests into
          systems that actually work.
        </p>
        <p className="text-light-primary leading-6">
          Eight years ago, I was building game worlds. Today, I build web
          applications. What connects them? Both require translating abstract
          visions into concrete, interactive experiences that people can
          navigate intuitively.
        </p>
        <p className="text-light-primary leading-6">
          My Master&#39;s in Design and Visual Culture taught me to read between
          the lines of what people say they want versus what they actually need.
          My game development background taught me to balance creativity with
          technical constraints. My web development experience taught me that
          the best solutions are the ones teams can understand, maintain, and
          evolve.
        </p>
        <p className="text-light-primary leading-6">
          I handle the full spectrum: stakeholder interviews, UX flows, system
          architecture, implementation, and deployment. But what makes me
          different is how I connect these pieces—seeing how a database design
          decision impacts user experience, or how a stakeholder&#39;s business
          constraint actually points toward a cleaner technical solution.
        </p>
      </div>
      <blockquote className="text-orange-secondary text-xl font-semibold">
        “Make the important visible, reduce friction, and keep teams moving.”
      </blockquote>
    </section>
  );
}
