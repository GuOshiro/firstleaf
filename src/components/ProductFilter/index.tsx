import React, { Dispatch, SetStateAction, useCallback } from "react";
import * as styles from "./index.module.scss";

type Props = {
  filteredColor: Array<string>;
  colors: Array<string>;
  setFilter: Dispatch<SetStateAction<Array<string>>>;
};

function ProductFilter({ filteredColor, setFilter, colors }: Props) {
  const handleColorChange = (color: string) => {
    setFilter((prevState) => {
      if (prevState.includes(color)) {
        return prevState.filter((item) => item !== color);
      } else {
        return [...prevState, color];
      }
    });
  };

  const isSelected = useCallback(
    (color: string) => filteredColor.includes(color),
    [filteredColor]
  );

  return (
    <div>
      {colors.map((color) => (
        <span
          className={`${styles.tag} ${
            isSelected(color) ? styles.tagSelected : ""
          }`}
          key={color}
          onClick={() => handleColorChange(color)}
        >
          {color}
        </span>
      ))}
    </div>
  );
}

export default ProductFilter;
