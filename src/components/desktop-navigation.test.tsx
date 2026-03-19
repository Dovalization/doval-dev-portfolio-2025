import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import DesktopNavigation from "./desktop-navigation";
import { useActiveSection } from "@/lib/hooks/useActiveSection";

vi.mock("next/navigation", () => ({
  usePathname: () => "/en",
  useParams: () => ({ lang: "en" }),
}));

vi.mock("@/lib/hooks/useActiveSection", () => ({
  useActiveSection: vi.fn().mockReturnValue(null),
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

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Blog", href: "/en/blog" },
];

describe("DesktopNavigation", () => {
  it("prefixes hash hrefs with the current locale", () => {
    render(<DesktopNavigation navItems={navItems} />);

    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute(
      "href",
      "/en#about",
    );
    expect(screen.getByRole("link", { name: "Work" })).toHaveAttribute(
      "href",
      "/en#work",
    );
  });

  it("passes non-hash hrefs through unchanged", () => {
    render(<DesktopNavigation navItems={navItems} />);

    expect(screen.getByRole("link", { name: "Blog" })).toHaveAttribute(
      "href",
      "/en/blog",
    );
  });

  it("marks a nav item active when its section is visible", () => {
    vi.mocked(useActiveSection).mockReturnValue("about");

    render(<DesktopNavigation navItems={navItems} />);

    expect(screen.getByRole("link", { name: "About" })).toHaveClass(
      "font-bold",
    );
    expect(screen.getByRole("link", { name: "Work" })).not.toHaveClass(
      "font-bold",
    );
  });
});
