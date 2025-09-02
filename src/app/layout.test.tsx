import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import RootLayout from "./layout";

// Mock CSS imports
vi.mock("./globals.css", () => ({}));

// Mock Next.js fonts
vi.mock("next/font/google", () => ({
  Open_Sans: () => ({
    variable: "--font-open-sans",
  }),
  JetBrains_Mono: () => ({
    variable: "--font-jetbrains-mono",
  }),
}));

describe("RootLayout", () => {
  it("renders children content", () => {
    render(
      <RootLayout>
        <div>Test content</div>
      </RootLayout>,
    );

    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("has correct html lang attribute", () => {
    render(
      <RootLayout>
        <div>Test</div>
      </RootLayout>,
    );

    const html = document.documentElement;
    expect(html).toHaveAttribute("lang", "en");
  });

  it("has correct body classes", () => {
    render(
      <RootLayout>
        <div>Test</div>
      </RootLayout>,
    );

    const body = document.body;
    expect(body).toHaveClass(
      "bg-dark-primary",
      "text-light-primary",
      "min-h-screen",
      "font-sans",
    );
  });

  it("includes font variables in html class", () => {
    render(
      <RootLayout>
        <div>Test</div>
      </RootLayout>,
    );

    const html = document.documentElement;
    expect(html.className).toContain("--font-open-sans");
    expect(html.className).toContain("--font-jetbrains-mono");
    expect(html.className).toContain("antialiased");
  });
});
