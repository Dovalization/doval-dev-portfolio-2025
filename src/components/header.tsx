"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { GitHub, Linkedin } from "react-feather";
const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-dark-primary/95 backdrop-blur-md border-b border-dark-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/">
            <span className="flex aspect-video relative min-w-40">
              <Image
                src="/doval-dev-logo.svg"
                alt="Logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </span>
          </Link>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-orange-secondary py-2",
                    pathname === item.href
                      ? "text-orange-secondary border-b-2 border-orange-secondary"
                      : "text-gray-light"
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
                  className="text-gray-light hover:text-orange-secondary transition-colors duration-500 "
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin
                  size={26}
                  className="text-gray-light hover:text-orange-secondary transition-colors duration-500"
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
