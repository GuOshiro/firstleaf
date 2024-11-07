import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./index";

jest.mock("gatsby", () => ({
  useStaticQuery: () => ({
    file: {
      publicURL: "test.com/logo.svg",
    },
  }),
  graphql: jest.fn(),
}));

describe("Header Component", () => {
  it("renders Header component and render countdown", () => {
    render(<Header />);
    const countdownElement = screen.getByText(/Reserving your wines for/i);
    expect(countdownElement).toBeInTheDocument();
  });

  it("renders Header component and render checkout", () => {
    render(<Header />);
    const checkoutElement = screen.getByText(/Checkout/i);
    expect(checkoutElement).toBeInTheDocument();
  });
});
