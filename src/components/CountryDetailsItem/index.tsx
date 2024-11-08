import React from "react";
import * as styles from "./index.module.scss";

type Props = {
  label: string;
  content?: string | number;
};

function CountryDetailsItem({ label, content }: Props) {
  return (
    <div className={styles.container}>
      <span className={styles.label}>{label}</span>
      <span className={styles.content}>{content || "-"}</span>
    </div>
  );
}

export default CountryDetailsItem;
