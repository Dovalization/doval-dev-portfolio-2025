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
        "flex min-h-[44px] min-w-[44px] transform touch-manipulation items-center justify-center rounded-lg px-6 py-3 text-base font-bold shadow-lg transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-xl sm:px-8 sm:py-3 sm:text-lg",
        variant === "primary"
          ? "bg-orange-secondary text-dark-primary hover:bg-orange-primary"
          : "text-orange-secondary border-orange-secondary hover:bg-orange-secondary hover:text-dark-primary border-2 bg-transparent",
      )}
    >
      {children}
    </Link>
  );
}
