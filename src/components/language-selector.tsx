"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface LanguageSelectorProps {
  className?: string;
}

export default function LanguageSelector({ className }: LanguageSelectorProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Extract current locale from pathname
  const currentLocale = pathname.startsWith("/pt") ? "pt" : "en";

  const languages = [
    {
      code: "en",
      name: "English",
      shortName: "EN",
    },
    {
      code: "pt",
      name: "Português",
      shortName: "PT",
    },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === currentLocale) || languages[0];

  const handleLanguageChange = (localeCode: "en" | "pt") => {
    // Navigate to the same page but with different locale
    const newPath = `/${localeCode}`;
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className={cn("relative", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-dark-primary text-light-primary focus:ring-orange-primary focus:ring-offset-dark-primary flex items-center gap-2 rounded-lg border border-gray-700 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-800 focus:ring-2 focus:ring-offset-2 focus:outline-none"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <span className="hidden sm:inline">{currentLanguage.shortName}</span>
        <svg
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen && "rotate-180",
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="bg-dark-primary absolute top-full right-0 z-50 mt-2 w-48 rounded-lg border border-gray-700 shadow-xl">
          <div className="py-2">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() =>
                  handleLanguageChange(language.code as "en" | "pt")
                }
                className={cn(
                  "flex w-full items-center gap-3 px-4 py-2 text-left text-sm transition-colors hover:bg-gray-800",
                  currentLocale === language.code
                    ? "text-orange-primary bg-gray-800"
                    : "text-light-primary",
                )}
                aria-current={currentLocale === language.code}
              >
                <span className="text-base" aria-hidden="true">
                  {language.flag}
                </span>
                <span className="font-medium">{language.name}</span>
                {currentLocale === language.code && (
                  <svg
                    className="ml-auto h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Overlay to close dropdown when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
