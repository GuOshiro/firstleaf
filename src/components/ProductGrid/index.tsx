import React from "react";
import { useProducts } from "../../hooks/useProducts";
import ProductItem from "../ProductItem";
import { Product } from "../../types/Products";
import * as styles from "./index.module.scss";

function ProductGrid() {
  const { data } = useProducts();

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.grid}>
      {data?.map((product: Product, index: number) => (
        <ProductItem
          key={`${index}-${product.id}-${product.name}`}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductGrid;
