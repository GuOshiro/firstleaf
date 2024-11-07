import React from "react";
import { render, screen } from "@testing-library/react";
import Logo from "./index";
import { StaticQueryProps } from "gatsby";

jest.mock("gatsby", () => ({
  useStaticQuery: () => ({
    file: {
      publicURL: "https://example.com/logo.svg",
    },
  }),
  graphql: jest.fn(),
}));

describe("Logo Component", () => {
  it("renders logo image with correct src and alt text", () => {
    render(<Logo />);
    const logoImage = screen.getByAltText("Leafy Logo");
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute("src", "https://example.com/logo.svg");
  });
});
