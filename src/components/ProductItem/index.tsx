import React from "react";
import { Product } from "../../types/Products";
import * as styles from "./index.module.scss";
import StarRatings from "react-star-ratings";
import ProductItemDescription from "../ProductItemDescription";

type Props = {
  product: Product;
};

function ProductItem({ product }: Props) {
  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src={product.images}
        alt={product.name}
        loading="lazy"
        width="100%"
      />
      <div className={styles.description}>
        <div className={styles.header}>
          <span className={styles.colorTag}>{product.color} Wine</span>
          <div className={styles.ranting}>
            <StarRatings
              starRatedColor="#e9e949"
              numberOfStars={5}
              rating={product.ratings_pct}
              starDimension="15px"
              starSpacing="1px"
            />
            <span>({product.ratings_pct})</span>
          </div>
        </div>
        <h3 className={styles.title}>{product.display_name}</h3>
        <p className={styles.subtitle}>({product.name})</p>
        <p className={styles.price}>{product.display_price}</p>
        <ProductItemDescription
          title="Description"
          content={product.tag_line}
        />
        <ProductItemDescription title="Year" content={product.vintage} />
        <ProductItemDescription title="Origin" content={product.origin} />
        <ProductItemDescription
          title="Type"
          content={product.fanciful_varietal}
        />
        <ProductItemDescription title="Pairing" content={product.pairings} />
      </div>
    </div>
  );
}

export default ProductItem;
