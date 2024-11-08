import React from "react";
import { graphql } from "gatsby";
import { Country } from "../types/Contry";
import CountryDetails from "../components/CountryDetails";

export const query = graphql`
  query ($cca3: String!) {
    country(cca3: { eq: $cca3 }) {
      name {
        common
      }
      population
      region
      subregion
      flags {
        svg
      }
      status
      capital
    }
  }
`;

type Props = {
  data: {
    country: Country;
  };
};

function CountryTemplate({ data }: Props) {
  const country = data.country;

  return <CountryDetails country={country} />;
}

export default CountryTemplate;
