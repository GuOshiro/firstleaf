import React from "react";
import * as styles from "./index.module.scss";

type Props = {
  label: string;
  onClick?: () => void;
};
function Button({ label, onClick }: Props) {
  return (
    <button className={styles.buttonCheckout} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
