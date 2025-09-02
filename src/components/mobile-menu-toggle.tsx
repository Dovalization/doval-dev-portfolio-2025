"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { X, GitHub, Linkedin } from "react-feather";
import { useActiveSection } from "@/lib/useActiveSection";
import LanguageSelector from "./language-selector";
import { NavigationData } from "@/data/schemas";

export default function MobileMenuToggle({ navigationData }: {
  navigationData: NavigationData;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
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

                {/* Mobile language selector and social links */}
                <div className="border-dark-secondary/30 mt-4 border-t pt-4">
                  <div className="flex items-center justify-center mb-4">
                    <LanguageSelector />
                  </div>
                  <div className="flex items-center justify-center space-x-6">
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
          </div>
        </>
      )}
    </>
  );
}