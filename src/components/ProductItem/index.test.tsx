import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductItem from "./index";
import { Product } from "../../types/Products";

const mockProduct: Product = {
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
};

jest.mock("../ProductItemDescription", () => ({
  __esModule: true,
  default: ({ title, content }: { title: string; content: string }) => (
    <div>
      <strong>{title}</strong>: <span>{content}</span>
    </div>
  ),
}));

describe("ProductItem Component", () => {
  it("renders product image with correct src and alt attributes", () => {
    render(<ProductItem product={mockProduct} />);
    const img = screen.getByRole("img");

    expect(img).toHaveAttribute("src", mockProduct.images);
    expect(img).toHaveAttribute("alt", mockProduct.name);
    expect(img).toHaveAttribute("loading", "lazy");
  });

  it("displays product details including color, title, and price", () => {
    render(<ProductItem product={mockProduct} />);

    expect(screen.getByText(`${mockProduct.color} Wine`)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.display_name)).toBeInTheDocument();
    expect(screen.getByText(`(${mockProduct.name})`)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.display_price)).toBeInTheDocument();
  });

  it("renders star ratings component with correct rating percentage", () => {
    render(<ProductItem product={mockProduct} />);
    const ratingText = screen.getByText(`(${mockProduct.ratings_pct})`);
    expect(ratingText).toBeInTheDocument();
  });

  it("displays product descriptions for tag line, vintage, origin, type, and pairing", () => {
    render(<ProductItem product={mockProduct} />);

    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(screen.getByText(mockProduct.tag_line)).toBeInTheDocument();

    expect(screen.getByText("Year")).toBeInTheDocument();
    expect(screen.getByText(mockProduct.vintage)).toBeInTheDocument();

    expect(screen.getByText("Origin")).toBeInTheDocument();
    expect(screen.getByText(mockProduct.origin)).toBeInTheDocument();

    expect(screen.getByText("Type")).toBeInTheDocument();
    expect(screen.getByText(mockProduct.fanciful_varietal)).toBeInTheDocument();

    expect(screen.getByText("Pairing")).toBeInTheDocument();
    expect(screen.getByText(mockProduct.pairings)).toBeInTheDocument();
  });
});
