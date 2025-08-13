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
      <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-light-primary">
        {title}
      </h1>
      {subtitle && (
        <p className="text-xl text-gray-light mb-16 max-w-3xl">{subtitle}</p>
      )}
    </section>
  );
}
