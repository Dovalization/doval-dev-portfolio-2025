import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-block transform rounded-lg px-8 py-3 text-lg font-bold shadow-lg transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-xl",
        variant === "primary"
          ? "bg-orange-secondary text-dark-primary hover:bg-orange-primary"
          : "bg-transparent text-orange-secondary border-2 border-orange-secondary hover:bg-orange-secondary hover:text-dark-primary",
      )}
    >
      {children}
    </Link>
  );
}
