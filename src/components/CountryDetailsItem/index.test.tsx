import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CountryDetailsItem from "./index";
import * as styles from "./index.module.scss";

describe("CountryDetailsItem", () => {
  it("should render the label and content when provided", () => {
    const label = "Population";
    const content = 211049527;

    render(<CountryDetailsItem label={label} content={content} />);

    expect(screen.getByText(label)).toBeInTheDocument();

    expect(screen.getByText(content.toString())).toBeInTheDocument();
  });

  it("should render '-' when no content is provided", () => {
    const label = "Capital";

    render(<CountryDetailsItem label={label} />);

    expect(screen.getByText(label)).toBeInTheDocument();

    expect(screen.getByText("-")).toBeInTheDocument();
  });
});
