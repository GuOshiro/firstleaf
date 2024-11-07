import React, { useMemo, useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import ProductItem from "../ProductItem";
import { Product } from "../../types/Products";
import * as styles from "./index.module.scss";
import ProductFilter from "../ProductFilter";

function ProductGrid() {
  const { data } = useProducts();
  const [filteredColor, setFilter] = useState<Array<string>>([]);

  if (!data) {
    return <div>Loading...</div>;
  }
  
  const colors = useMemo(() => {
    const uniqueColors = new Set(data.map((product) => product.color));
    return [...uniqueColors];
  }, [data]);

  const filteredItems = useMemo(() => {
    return data.filter((product) => {
      if (filteredColor.length === 0) return true;
      return filteredColor.some((color) => {
        return product.color === color;
      });
    });
  }, [data, filteredColor]);

  return (
    <div>
      <h1>Products</h1>
      <ProductFilter
        filteredColor={filteredColor}
        setFilter={setFilter}
        colors={colors}
      />
      <div className={styles.grid}>
        {filteredItems?.map((product: Product, index: number) => (
          <ProductItem
            key={`${index}-${product.id}-${product.name}`}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
