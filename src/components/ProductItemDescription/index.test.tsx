import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductItemDescription from "./index";
import * as styles from "./index.module.scss";

describe("ProductItemDescription Component", () => {
  it("renders the title and content props correctly", () => {
    const title = "Origin";
    const content = "France";

    render(<ProductItemDescription title={title} content={content} />);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(content)).toBeInTheDocument();
  });
});
