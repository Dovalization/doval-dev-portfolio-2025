import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import NotFound from "./not-found";

// Mock the NotFoundWarning component
vi.mock("@/components/not-found-warning", () => ({
  default: ({ homeHref }: { homeHref?: string }) => (
    <div data-testid="not-found-content" data-home-href={homeHref}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <a href={homeHref}>Go Home</a>
      <a href="javascript:history.back()">Go Back</a>
    </div>
  ),
}));

describe("Root NotFound", () => {
  it("renders NotFoundWarning component", () => {
    render(<NotFound />);

    const content = screen.getByTestId("not-found-content");
    expect(content).toBeInTheDocument();
  });

  it("passes correct homeHref to NotFoundWarning", () => {
    render(<NotFound />);

    const content = screen.getByTestId("not-found-content");
    expect(content).toHaveAttribute("data-home-href", "/en");
  });

  it("renders basic 404 content through NotFoundWarning", () => {
    render(<NotFound />);

    expect(screen.getByRole("heading", { name: "404" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Page Not Found" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Go Home" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Go Back" })).toBeInTheDocument();
  });
});
