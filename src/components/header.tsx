"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { GitHub, Linkedin } from "react-feather";
import { useActiveSection } from "@/lib/useActiveSection";
const navItems = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const activeSection = useActiveSection();

  return (
    <nav className="bg-dark-primary/95 border-dark-secondary/50 sticky top-0 z-50 border-b backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/">
            <span className="relative flex aspect-video min-w-40">
              <Image
                src="images/doval-dev-logo.svg"
                alt="Logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </span>
          </Link>

          <div className="flex items-center gap-8">
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

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub
                  size={26}
                  className="text-gray-light hover:text-orange-secondary transition-colors duration-200"
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin
                  size={26}
                  className="text-gray-light hover:text-orange-secondary transition-colors duration-200"
                />
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-light hover:text-orange-secondary">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
