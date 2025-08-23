import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ButtonLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "bg-orange-secondary text-dark-primary hover:bg-orange-primary inline-block transform rounded-lg px-8 py-3 text-lg font-bold shadow-lg transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-xl",
      )}
    >
      {children}
    </Link>
  );
}
