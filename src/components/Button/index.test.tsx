import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./index";

test("renders Header component", () => {
  render(<Button label="Checkout" />);
  const countdownElement = screen.getByText(/Checkout/i);
  expect(countdownElement).toBeInTheDocument();
});
