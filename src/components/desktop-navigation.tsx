"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/lib/useActiveSection";
import { NavigationData } from "@/data/schemas";

export default function DesktopNavigation({ navItems }: {
  navItems: NavigationData["navItems"];
}) {
  const activeSection = useActiveSection();

  return (
    <div className="hidden space-x-8 md:flex">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "hover:text-orange-secondary border-b-2 py-2 text-sm font-medium transition-all duration-200 ease-in-out",
            activeSection === item.href.slice(1)
              ? "text-orange-secondary border-orange-secondary font-bold"
              : "text-gray-light border-transparent",
          )}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}