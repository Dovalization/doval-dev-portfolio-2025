import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";

export function BlogH2({ children, ...props }: ComponentPropsWithoutRef<"h2">) {
  return (
    <h2
      className="text-light-primary text-2xl font-bold leading-tight md:text-3xl"
      {...props}
    >
      {children}
    </h2>
  );
}

export function BlogH3({ children, ...props }: ComponentPropsWithoutRef<"h3">) {
  return (
    <h3
      className="text-light-primary text-xl font-semibold leading-snug md:text-2xl"
      {...props}
    >
      {children}
    </h3>
  );
}

export function BlogH4({ children, ...props }: ComponentPropsWithoutRef<"h4">) {
  return (
    <h4
      className="text-light-primary text-lg font-semibold leading-snug"
      {...props}
    >
      {children}
    </h4>
  );
}

export function BlogP({ children, ...props }: ComponentPropsWithoutRef<"p">) {
  return (
    <p className="text-light-primary text-base leading-relaxed md:text-lg" {...props}>
      {children}
    </p>
  );
}

export function BlogA({ href, children, ...props }: ComponentPropsWithoutRef<"a">) {
  const isExternal = href?.startsWith("http");
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-secondary hover:text-orange-primary underline underline-offset-2 transition-colors duration-200"
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <Link
      href={href ?? "#"}
      className="text-orange-secondary hover:text-orange-primary underline underline-offset-2 transition-colors duration-200"
      {...props}
    >
      {children}
    </Link>
  );
}

export function BlogBlockquote({ children, ...props }: ComponentPropsWithoutRef<"blockquote">) {
  return (
    <blockquote
      className="border-orange-primary text-gray-light border-l-4 pl-5 italic"
      {...props}
    >
      {children}
    </blockquote>
  );
}

export function BlogCode({ children, ...props }: ComponentPropsWithoutRef<"code">) {
  return (
    <code
      className="bg-dark-secondary text-cream rounded px-1.5 py-0.5 font-mono text-sm"
      {...props}
    >
      {children}
    </code>
  );
}

export function BlogPre({ children, ...props }: ComponentPropsWithoutRef<"pre">) {
  return (
    <pre
      className="bg-dark-secondary overflow-x-auto rounded-lg p-5 font-mono text-sm leading-relaxed"
      {...props}
    >
      {children}
    </pre>
  );
}

export function BlogUl({ children, ...props }: ComponentPropsWithoutRef<"ul">) {
  return (
    <ul className="text-light-primary list-disc space-y-2 pl-6 text-base md:text-lg" {...props}>
      {children}
    </ul>
  );
}

export function BlogOl({ children, ...props }: ComponentPropsWithoutRef<"ol">) {
  return (
    <ol
      className="text-light-primary list-decimal space-y-2 pl-6 text-base md:text-lg"
      {...props}
    >
      {children}
    </ol>
  );
}

export function BlogHr(props: ComponentPropsWithoutRef<"hr">) {
  return <hr className="h-0 border-0 border-t border-gray-medium/30" {...props} />;
}

export function BlogSection({ children, ...props }: ComponentPropsWithoutRef<"section">) {
  return (
    <section className="flex flex-col gap-5" {...props}>
      {children}
    </section>
  );
}

export function BlogStrong({ children, ...props }: ComponentPropsWithoutRef<"strong">) {
  return (
    <strong className="text-light-primary font-bold" {...props}>
      {children}
    </strong>
  );
}

export function BlogTable({ children, ...props }: ComponentPropsWithoutRef<"table">) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm" {...props}>
        {children}
      </table>
    </div>
  );
}

export function BlogTh({ children, ...props }: ComponentPropsWithoutRef<"th">) {
  return (
    <th
      className="border-b border-gray-medium/40 px-4 py-2 text-left text-xs font-bold uppercase tracking-wider text-gray-light"
      {...props}
    >
      {children}
    </th>
  );
}

export function BlogTd({ children, ...props }: ComponentPropsWithoutRef<"td">) {
  return (
    <td
      className="border-b border-gray-medium/20 px-4 py-2 text-light-primary"
      {...props}
    >
      {children}
    </td>
  );
}
