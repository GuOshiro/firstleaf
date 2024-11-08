import React from "react";
import { Link } from "gatsby";
import { Country } from "../../types/Contry";
import * as styles from "./index.module.scss";

type Props = {
  country: Country;
};

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");

function CountryList({ country }: Props) {
  return (
    <Link
      className={styles.link}
      to={`/countries/${slugify(country.name.common)}`}
    >
      <img
        className={styles.image}
        src={country.flags.svg}
        alt={`${country.name.common} flag`}
      />
      <span className={styles.name}>{country.name.common}</span>
    </Link>
  );
}

export default CountryList;
