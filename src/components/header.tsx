"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { GitHub, Linkedin, X } from "react-feather";
import { useActiveSection } from "@/lib/useActiveSection";
import { useState } from "react";
import { navigation as navigationData } from "@/data/loader";

export function Header() {
  const activeSection = useActiveSection();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-dark-primary/95 border-dark-secondary/50 sticky top-0 z-50 border-b backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/">
            <span className="relative flex aspect-video min-w-40">
              <Image
                src={navigationData.logo.src}
                alt={navigationData.logo.alt}
                fill
                style={{ objectFit: "contain" }}
              />
            </span>
          </Link>

          <div className="flex items-center gap-8">
            <div className="hidden space-x-8 md:flex">
              {navigationData.navItems.map((item) => (
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
            <div className="hidden items-center space-x-4 md:flex">
              <a
                href={navigationData.social.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub
                  size={26}
                  className="text-gray-light hover:text-orange-secondary transition-colors duration-200"
                />
              </a>
              <a
                href={navigationData.social.linkedin}
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
              <button
                onClick={toggleMobileMenu}
                className="text-gray-light hover:text-orange-secondary touch-manipulation p-2"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" strokeWidth={2} />
                ) : (
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
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />

          {/* Mobile menu content */}
          <div className="bg-dark-primary border-dark-secondary/50 fixed inset-x-0 top-20 z-50 border-b md:hidden">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                {navigationData.navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={cn(
                      "block touch-manipulation rounded-lg px-4 py-3 text-lg font-medium transition-colors duration-200",
                      activeSection === item.href.slice(1)
                        ? "text-orange-secondary bg-dark-secondary/50 font-bold"
                        : "text-gray-light hover:text-orange-secondary hover:bg-dark-secondary/30",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Mobile social links */}
                <div className="border-dark-secondary/30 mt-4 flex items-center justify-center space-x-6 border-t pt-4">
                  <a
                    href={navigationData.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="touch-manipulation p-2"
                  >
                    <GitHub
                      size={24}
                      className="text-gray-light hover:text-orange-secondary transition-colors duration-200"
                    />
                  </a>
                  <a
                    href={navigationData.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="touch-manipulation p-2"
                  >
                    <Linkedin
                      size={24}
                      className="text-gray-light hover:text-orange-secondary transition-colors duration-200"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
