import Link from "next/link";

export default function ContactCTASection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-light-primary mb-6 text-4xl font-bold">
          {`Let's build something great together`}
        </h2>
        <p className="text-gray-light mx-auto mb-8 max-w-prose text-xl leading-relaxed">
          {`If you have a project in mind or just want to say hello, reach out. I’m always open to new ideas, collaborations, and opportunities.`}
        </p>
        <Link
          href="/contact"
          className="bg-orange-secondary text-dark-primary hover:bg-orange-primary inline-block transform rounded-full px-12 py-4 text-lg font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          Get in touch
        </Link>
      </div>
    </section>
  );
}
