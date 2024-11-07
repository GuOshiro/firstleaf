import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductFilter from "./index";
import * as styles from "./index.module.scss";

describe("ProductFilter Component", () => {
  const colors = ["Red", "Blue", "Green"];
  const filteredColor = ["Red"];
  const setFilter = jest.fn();

  const renderComponent = () => {
    render(
      <ProductFilter
        filteredColor={filteredColor}
        colors={colors}
        setFilter={setFilter}
      />
    );
  };

  it("renders the colors as clickable elements", () => {
    renderComponent();

    colors.forEach((color) => {
      expect(screen.getByText(color)).toBeInTheDocument();
    });
  });

  it("calls setFilter with correct arguments to add or remove colors", () => {
    renderComponent();

    const redTag = screen.getByText("Red");
    fireEvent.click(redTag);
    expect(setFilter).toHaveBeenCalledWith(expect.any(Function));

    const greenTag = screen.getByText("Green");
    fireEvent.click(greenTag);
    expect(setFilter).toHaveBeenCalledWith(expect.any(Function));
  });
});
