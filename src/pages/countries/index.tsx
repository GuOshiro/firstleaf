import React from "react";
import { graphql } from "gatsby";
import { Country } from "../../types/Contry";
import CountryList from "../../components/CountryList";

export const query = graphql`
  query {
    allCountry {
      nodes {
        name {
          common
        }
        flags {
          svg
        }
        cca3
      }
    }
  }
`;

type Props = {
  data: {
    allCountry: { nodes: Array<Country> };
  };
};

function CountriesPage({ data }: Props) {
  return <CountryList countries={data.allCountry.nodes} />;
}

export default CountriesPage;
