import React from "react";
import { Product } from "../../types/Products";
import * as styles from "./index.module.scss";
import StarRatings from "react-star-ratings";

type Props = {
  title: string;
  content: string;
};

function ProductItemDescription({ title, content }: Props) {
  return (
    <div className={styles.productContent}>
      <span className={styles.title}>{title}</span>
      <span className={styles.content}>{content}</span>
    </div>
  );
}

export default ProductItemDescription;
