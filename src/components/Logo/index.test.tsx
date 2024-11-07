import React from "react";
import { render, screen } from "@testing-library/react";
import Logo from "./index";
import { StaticQuery, graphql } from "gatsby";
import { StaticQueryProps } from "gatsby";

// Mock StaticQuery component in Gatsby
jest.mock("gatsby", () => ({
  StaticQuery: ({ render }: StaticQueryProps<any>) => {
    if (render) {
      return render({
        file: {
          publicURL: "https://example.com/logo.svg",
        },
      });
    }
    return null;
  },
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
