import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductGrid from "./index";
import { useProducts } from "../../hooks/useProducts";
import { Product } from "../../types/Products";

const mockData: Array<Product> = [
  {
    id: 1,
    special_notes: "Award Winning",
    name: "Cartesian 2020 Sauvignon Blanc California",
    tag_line:
      "A Sauvignon Blanc filled with wonder, mouthwatering acidity, and a touch of minerality",
    vintage: "2020",
    origin: "California",
    fanciful_varietal: "Sauvignon Blanc",
    msrp: 64.2,
    price: 34.0,
    display_msrp: "$64.20",
    display_price: "$34.00",
    award_highlights: {
      "silver-medal": 1,
    },
    pairings: "Summer Salad, Tuna Steak, Fried Calamari",
    color: "White",
    images:
      "https://images-dev.firstleaf.com/images/4112/desktop/Cartesian_20_Sauv_Blanc_P2CAR20SVB0521-FLE.png?1619038336",
    ratings_pct: 4.42,
    display_name: "Cartesian",
  },
  {
    id: 2,
    special_notes: "None",
    name: "Meiggs' Pardon 2020 Sauvignon Blanc North Coast, California",
    tag_line: "A taste of the Old World from New World vineyards",
    vintage: "2020",
    origin: "North Coast, California",
    fanciful_varietal: "Sauvignon Blanc",
    msrp: 27.6,
    price: 23.0,
    display_msrp: "$27.60",
    display_price: "$23.00",
    award_highlights: {
      "silver-medal": 1,
    },
    pairings: "Salty Cheese, Grilled Fish, Fried Calamari",
    color: "White",
    images:
      "https://images-dev.firstleaf.com/images/5534/desktop/Meiggs'_Pardon_20_Sauvignon_Blanc_P2MEI20SVB1021-FLE.png?1632187363",
    ratings_pct: 4.17,
    display_name: "Meiggs' Pardon",
  },
];

jest.mock("../../hooks/useProducts", () => ({
  useProducts: jest.fn(),
}));

jest.mock("../ProductItem", () => ({ product }: { product: Product }) => (
  <div data-testid="product-item">{product.name}</div>
));

describe("ProductGrid Component", () => {
  beforeEach(() => {
    (useProducts as jest.Mock).mockReturnValue({ data: mockData });
  });

  it("displays a loading message when data is not available", () => {
    (useProducts as jest.Mock).mockReturnValue({ data: null });
    render(<ProductGrid />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders products once data is available", () => {
    render(<ProductGrid />);
    expect(screen.getByText("Products")).toBeInTheDocument();

    mockData.forEach((product) => {
      expect(screen.getByText(product.name)).toBeInTheDocument();
    });
  });

  it("renders unique color filters", () => {
    render(<ProductGrid />);
    const colors = Array.from(
      new Set(mockData.map((product) => product.color))
    );

    colors.forEach((color) => {
      expect(screen.getByText(color)).toBeInTheDocument();
    });
  });
});
