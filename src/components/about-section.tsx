export default function AboutSection() {
  return (
    <section
      id="about"
      className="container mx-auto flex flex-col items-center gap-8 px-4 py-16 text-center sm:px-6"
    >
      <h2 className="text-light-primary text-4xl font-bold">About Me</h2>
      <div className="flex max-w-prose flex-col gap-6 text-left text-lg">
        <p className="text-light-primary leading-6 font-bold">
          Hi! I'm Guilherme Doval, a full-stack developer and designer based in
          Brasil. I specialize in building systems that make people's lives
          easier.
        </p>
        <p className="text-light-primary leading-6">
          I don't build products that box people in. I build tools that give
          them clarity, control, and the freedom to act. I've felt firsthand how
          systems can scatter focus and push the urgent over the important.
        </p>
        <p className="text-light-primary leading-6">
          So I design software that fits how people actually think: fast to use,
          simple to maintain, easy to change, and built for momentum. When
          technology supports clarity and efficiency, people don't just use it —
          they rely on it. And that's the kind of work I believe is worth
          building.
        </p>
      </div>
      <blockquote className="text-orange-secondary text-xl font-semibold italic">
        "Make the important visible, reduce friction, and keep teams moving."
      </blockquote>
    </section>
  );
}
