import Link from "next/link";
import Image from "next/image";
import { GitHub, Linkedin } from "react-feather";
import { NavigationData } from "@/data/schemas";
import LanguageSelector from "./language-selector";
import DesktopNavigation from "./desktop-navigation";
import MobileMenuToggle from "./mobile-menu-toggle";

interface HeaderProps {
  data: NavigationData;
  currentLocale: "en" | "pt";
}

export function Header({ data: navigationData }: HeaderProps) {
  // Fallback data if navigationData is undefined

  return (
    <nav className="bg-dark-primary/95 border-dark-secondary/50 sticky top-0 z-50 border-b backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <span className="relative flex aspect-video min-w-40">
              <Image
                src="/images/doval-dev-logo.svg"
                alt="doval.dev"
                fill
                style={{ objectFit: "contain" }}
              />
            </span>
          </Link>

          <div className="flex items-center gap-8">
            {/* Desktop Navigation */}
            <DesktopNavigation navItems={navigationData.navItems} />

            {/* Language Selector and Social Icons */}
            <div className="hidden items-center space-x-4 md:flex">
              <div className="h-6 w-px bg-gray-700" />
              <a
                href={navigationData.social.github}
                target="_blank"
                rel="noopener noreferrer"
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
              >
                <Linkedin
                  size={24}
                  className="text-gray-light hover:text-orange-secondary transition-colors duration-200"
                />
              </a>
              <div className="h-6 w-px bg-gray-700" />
              <LanguageSelector />
            </div>

            {/* Mobile Menu Toggle */}
            <MobileMenuToggle navigationData={navigationData} />
          </div>
        </div>
      </div>
    </nav>
  );
}
