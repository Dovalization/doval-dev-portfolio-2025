import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ContactSection from "./contact-section";
import type { ContactData } from "@/app/types";

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

const mockData: ContactData = {
  title: "Get in Touch",
  description: "Let's work together.",
  email: "hello@doval.dev",
  social: {
    linkedin: "https://linkedin.com/in/gdoval",
    github: "https://github.com/gdoval",
  },
  links: {
    email: "hello@doval.dev",
    downloadCv: "Download CV",
    linkedin: "LinkedIn",
    github: "GitHub",
  },
  lookingFor: {
    title: "What I'm looking for",
    items: [{ title: "Remote", description: "Work from anywhere." }],
  },
};

describe("ContactSection", () => {
  it("opens external links in a new tab with noopener", () => {
    render(<ContactSection data={mockData} />);

    const linkedin = screen.getByRole("link", { name: /linkedin/i });
    const github = screen.getByRole("link", { name: /github/i });

    expect(linkedin).toHaveAttribute("target", "_blank");
    expect(linkedin).toHaveAttribute("rel", "noopener noreferrer");
    expect(github).toHaveAttribute("target", "_blank");
    expect(github).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("does not add target or rel to the mailto link", () => {
    render(<ContactSection data={mockData} />);

    const email = screen.getByRole("link", { name: mockData.links.email });

    expect(email).toHaveAttribute("href", `mailto:${mockData.email}`);
    expect(email).not.toHaveAttribute("target");
    expect(email).not.toHaveAttribute("rel");
  });

  it("opens the CV in a new tab but without noopener (internal path)", () => {
    render(<ContactSection data={mockData} />);

    const cv = screen.getByRole("link", { name: /download cv/i });

    expect(cv).toHaveAttribute("href", "/guilherme-doval-cv.pdf");
    expect(cv).toHaveAttribute("target", "_blank");
    expect(cv).not.toHaveAttribute("rel");
  });
});
