import React, { useMemo } from "react";

import { Country } from "../../types/Contry";
import * as styles from "./index.module.scss";
import Layout from "../Layout";
import CountryDetailsItem from "../CountryDetailsItem";

type Props = {
  country: Country;
};

function CountryDetails({ country }: Props) {
  return (
    <Layout>
      <h1>{country.name.common}</h1>
      <div className={styles.container}>
        <div>
          <img
            className={styles.image}
            src={country.flags.svg}
            alt={`${country.name.common} flag`}
          />
        </div>
        <div>
          <CountryDetailsItem label="Population" content={country.population} />
          <CountryDetailsItem label="Population" content={country.population} />
          <CountryDetailsItem label="Region" content={country.region} />
          <CountryDetailsItem label="Status" content={country.status} />
          <CountryDetailsItem label="Subregion" content={country.subregion} />
          <CountryDetailsItem label="Capital" content={country.capital?.[0]} />
        </div>
      </div>
    </Layout>
  );
}

export default CountryDetails;
