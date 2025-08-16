// section that includes a title and subtitle

export default function MetaSection({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="mb-12">
      <h1 className="text-light-primary mb-8 text-4xl font-bold sm:text-5xl">
        {title}
      </h1>
      {subtitle && (
        <p className="text-gray-light mb-16 max-w-prose text-xl">{subtitle}</p>
      )}
    </section>
  );
}
