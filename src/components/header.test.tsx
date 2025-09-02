import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Header } from "./header";

// Mock Next.js components
vi.mock("next/image", () => ({
  default: ({
    src,
    alt,
    ...props
  }: {
    src: string;
    alt: string;
    [key: string]: unknown;
  }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} {...props} />
  ),
}));

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
    [key: string]: unknown;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

// Mock component dependencies
vi.mock("@/components/language-selector", () => ({
  default: () => <div data-testid="language-selector">Language Selector</div>,
}));

vi.mock("@/components/desktop-navigation", () => ({
  default: ({
    navItems,
  }: {
    navItems: Array<{ label: string; href: string }>;
  }) => (
    <div data-testid="desktop-navigation">
      {navItems.map((item) => (
        <a key={item.label} href={item.href}>
          {item.label}
        </a>
      ))}
    </div>
  ),
}));

vi.mock("@/components/mobile-menu-toggle", () => ({
  default: () => <div data-testid="mobile-menu-toggle">Mobile Menu</div>,
}));

vi.mock("@/data/schemas", () => ({
  NavigationData: {},
}));

const mockNavigationData = {
  navItems: [
    { label: "About", href: "#about" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
  social: {
    github: "https://github.com/test",
    linkedin: "https://linkedin.com/in/test",
  },
};

describe("Header", () => {
  it("renders logo with correct attributes", () => {
    render(<Header data={mockNavigationData} currentLocale="en" />);

    const logo = screen.getByAltText("doval.dev");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "/images/doval-dev-logo.svg");
  });

  it("renders navigation items", () => {
    render(<Header data={mockNavigationData} currentLocale="en" />);

    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Work")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("renders social media links with correct hrefs", () => {
    render(<Header data={mockNavigationData} currentLocale="en" />);

    // Find all links and filter by href
    const allLinks = screen.getAllByRole("link");
    const githubLink = allLinks.find(
      (link) => link.getAttribute("href") === "https://github.com/test",
    );
    const linkedinLink = allLinks.find(
      (link) => link.getAttribute("href") === "https://linkedin.com/in/test",
    );

    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute("target", "_blank");
  });

  it("has sticky navigation styling", () => {
    render(<Header data={mockNavigationData} currentLocale="en" />);

    const nav = screen.getByRole("navigation");
    expect(nav).toHaveClass("sticky", "top-0", "z-50");
  });

  it("logo links to home page", () => {
    render(<Header data={mockNavigationData} currentLocale="en" />);

    const logoLink = screen.getByRole("link", { name: /doval.dev/i });
    expect(logoLink).toHaveAttribute("href", "/");
  });
});
