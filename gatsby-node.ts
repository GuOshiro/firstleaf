import { GatsbyNode } from "gatsby";
import path from "path";

interface Country {
  cca3: string;
  name: {
    common: string;
  };
  population: number;
  region: string;
  subregion: string;
  flags: {
    svg: string;
  };
  capital: string[];
}

const slugify = (text: string): string =>
  text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");

export const sourceNodes: GatsbyNode["sourceNodes"] = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions;

  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const countries: Country[] = await response.json();

    countries.forEach((country) => {
      const nodeData = {
        ...country,
        id: createNodeId(`country-${country.cca3}`),
        internal: {
          type: "Country",
          contentDigest: createContentDigest(country),
        },
      };
      createNode(nodeData);
    });
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
};

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;

  const result = await graphql<{
    allCountry: {
      nodes: {
        name: { common: string };
        cca3: string;
      }[];
    };
  }>(`
    query {
      allCountry {
        nodes {
          name {
            common
          }
          cca3
        }
      }
    }
  `);

  if (!result.data) {
    console.error("Error: No data found in GraphQL query");
    return;
  }

  const countryTemplate = path.resolve(`src/templates/country.tsx`);

  result.data.allCountry.nodes.forEach((country) => {
    createPage({
      path: `/countries/${slugify(country.name.common)}`,
      component: countryTemplate,
      context: {
        cca3: country.cca3,
      },
    });
  });
};
