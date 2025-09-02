import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import NotFoundWarning from "./not-found-warning";

// Mock Next.js Link component
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

describe("NotFoundWarning", () => {
  it("renders 404 heading with correct styling", () => {
    render(<NotFoundWarning />);

    const heading = screen.getByRole("heading", { name: "404" });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass(
      "text-orange-secondary",
      "text-6xl",
      "md:text-8xl",
    );
  });

  it('renders "Page Not Found" title', () => {
    render(<NotFoundWarning />);

    const title = screen.getByRole("heading", { name: "Page Not Found" });
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass("text-2xl", "md:text-3xl");
  });

  it("renders descriptive text with proper escaping", () => {
    render(<NotFoundWarning />);

    const description = screen.getByText(
      /The page you're looking for doesn't exist or has been moved/,
    );
    expect(description).toBeInTheDocument();
    expect(description).toHaveClass("text-light-secondary");
  });

  it('renders "Go Home" link with default href', () => {
    render(<NotFoundWarning />);

    const homeLink = screen.getByRole("link", { name: "Go Home" });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/en");
    expect(homeLink).toHaveClass("bg-orange-secondary", "text-dark-primary");
  });

  it('renders "Go Home" link with custom href', () => {
    render(<NotFoundWarning homeHref="/pt" />);

    const homeLink = screen.getByRole("link", { name: "Go Home" });
    expect(homeLink).toHaveAttribute("href", "/pt");
  });

  it('renders "Go Back" link', () => {
    render(<NotFoundWarning />);

    const backLink = screen.getByRole("link", { name: "Go Back" });
    expect(backLink).toBeInTheDocument();
    // React blocks javascript: URLs in tests for security, so we just check it exists
    expect(backLink).toHaveClass("border-orange-secondary", "bg-transparent");
  });

  it("has proper container styling with default classes", () => {
    render(<NotFoundWarning />);

    const container = screen
      .getByText("404")
      .closest('[class*="min-h-screen"]');
    expect(container).toHaveClass("bg-dark-primary", "text-light-primary");
  });

  it("applies custom className", () => {
    render(<NotFoundWarning className="custom-class" />);

    const container = screen
      .getByText("404")
      .closest('[class*="min-h-screen"]');
    expect(container).toHaveClass("custom-class");
  });

  it("has responsive design classes", () => {
    render(<NotFoundWarning />);

    const heading = screen.getByRole("heading", { name: "404" });
    expect(heading).toHaveClass("text-6xl", "md:text-8xl");

    const title = screen.getByRole("heading", { name: "Page Not Found" });
    expect(title).toHaveClass("text-2xl", "md:text-3xl");

    const description = screen.getByText(/The page you're looking for/);
    expect(description).toHaveClass("text-lg", "md:text-xl");
  });

  it("has proper touch target sizes for accessibility", () => {
    render(<NotFoundWarning />);

    const homeLink = screen.getByRole("link", { name: "Go Home" });
    const backLink = screen.getByRole("link", { name: "Go Back" });

    expect(homeLink).toHaveClass("min-h-[44px]", "min-w-[44px]");
    expect(backLink).toHaveClass("min-h-[44px]", "min-w-[44px]");
  });

  it("has responsive button layout", () => {
    render(<NotFoundWarning />);

    const buttonContainer = screen.getByRole("link", {
      name: "Go Home",
    }).parentElement;
    expect(buttonContainer).toHaveClass(
      "flex-col",
      "sm:flex-row",
      "sm:justify-center",
    );
  });
});
