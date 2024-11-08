import React, { useMemo } from "react";
import { Country } from "../../types/Contry";
import * as styles from "./index.module.scss";
import CountryItem from "../CountryItem";
import Layout from "../Layout";

type Props = {
  countries: Array<Country>;
};

function CountryList({ countries }: Props) {
  const sortedCountries = useMemo(() => {
    return countries.sort((a, b) => {
      const nameA = a.name.common.toLowerCase();
      const nameB = b.name.common.toLowerCase();

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
  }, [countries]);

  return (
    <Layout>
      <h1>Countries</h1>
      <ul className={styles.list}>
        {sortedCountries.map((country) => (
          <li key={country.cca3}>
            <CountryItem country={country} />
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default CountryList;
