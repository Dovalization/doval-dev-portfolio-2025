import { describe, it, expect, vi } from "vitest";
import { redirect } from "next/navigation";
import RootPage from "./page";

vi.mock("next/navigation", () => ({
  redirect: vi.fn(),
}));

describe("Root Page", () => {
  it("should redirect to /en", () => {
    RootPage();

    expect(redirect).toHaveBeenCalledWith("/en");
  });
});
