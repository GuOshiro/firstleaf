import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CountryDetails from "./index";
import { Country } from "../../types/Contry";

const mockCountry: Country = {
  name: {
    common: "Brazil",
    official: "",
    nativeName: {
      eng: {
        official: "",
        common: "",
      },
    },
  },
  flags: {
    svg: "https://flagcdn.com/br.svg",
    png: "",
  },
  population: 211049527,
  region: "Americas",
  status: "Independent",
  capital: ["Brasília"],
  tld: [],
  cca2: "",
  ccn3: "",
  cca3: "",
  independent: false,
  unMember: false,
  currencies: {
    SHP: {
      name: "",
      symbol: "",
    },
  },
  idd: {
    root: "",
    suffixes: [],
  },
  altSpellings: [],
  languages: {
    eng: "",
  },
  translations: {
    ara: {
      official: "",
      common: "",
    },
    bre: {
      official: "",
      common: "",
    },
    ces: {
      official: "",
      common: "",
    },
    cym: {
      official: "",
      common: "",
    },
    deu: {
      official: "",
      common: "",
    },
    est: {
      official: "",
      common: "",
    },
    fin: {
      official: "",
      common: "",
    },
    fra: {
      official: "",
      common: "",
    },
    hrv: {
      official: "",
      common: "",
    },
    hun: {
      official: "",
      common: "",
    },
    ita: {
      official: "",
      common: "",
    },
    jpn: {
      official: "",
      common: "",
    },
    kor: {
      official: "",
      common: "",
    },
    nld: {
      official: "",
      common: "",
    },
    per: {
      official: "",
      common: "",
    },
    pol: {
      official: "",
      common: "",
    },
    por: {
      official: "",
      common: "",
    },
    rus: {
      official: "",
      common: "",
    },
    slk: {
      official: "",
      common: "",
    },
    spa: {
      official: "",
      common: "",
    },
    srp: {
      official: "",
      common: "",
    },
    swe: {
      official: "",
      common: "",
    },
    tur: {
      official: "",
      common: "",
    },
    urd: {
      official: "",
      common: "",
    },
    zho: {
      official: "",
      common: "",
    },
  },
  latlng: [],
  landlocked: false,
  area: 0,
  demonyms: {
    eng: {
      f: "",
      m: "",
    },
  },
  flag: "",
  maps: {
    googleMaps: "",
    openStreetMaps: "",
  },
  car: {
    signs: [],
    side: "",
  },
  timezones: [],
  continents: [],
  coatOfArms: {},
  startOfWeek: "",
  capitalInfo: {
    latlng: [],
  },
};

describe("CountryDetails Component", () => {
  it("renders country details correctly", () => {
    render(<CountryDetails country={mockCountry} />);

    expect(screen.getByText("Brazil")).toBeInTheDocument();

    const image = screen.getByAltText("Brazil flag");
    expect(image).toHaveAttribute("src", "https://flagcdn.com/br.svg");

    expect(screen.getByText(/Population: 211049527/)).toBeInTheDocument();

    expect(screen.getByText(/Region: Americas/)).toBeInTheDocument();

    expect(screen.getByText(/Status: Independent/)).toBeInTheDocument();

    expect(screen.getByText(/Capital: Brasília/)).toBeInTheDocument();
  });
});
