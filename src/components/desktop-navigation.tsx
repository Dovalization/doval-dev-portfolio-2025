"use client";

import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/lib/hooks/useActiveSection";
import { NavigationData } from "@/app/types";

export default function DesktopNavigation({
  navItems,
}: {
  navItems: NavigationData["navItems"];
}) {
  const activeSection = useActiveSection();
  const pathname = usePathname();
  const { lang } = useParams<{ lang: string }>();

  return (
    <div className="hidden space-x-8 md:flex">
      {navItems.map((item) => {
        const isActive = item.href.startsWith("/")
          ? pathname.includes(item.href)
          : activeSection === item.href.slice(1);
        const resolvedHref = item.href.startsWith("#") ? `/${lang}${item.href}` : item.href;
        return (
          <Link
            key={item.href}
            href={resolvedHref}
            className={cn(
              "hover:text-orange-secondary border-b-2 py-2 text-sm font-medium transition-all duration-200 ease-in-out",
              isActive
                ? "text-orange-secondary border-orange-secondary font-bold"
                : "text-gray-light border-transparent",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
