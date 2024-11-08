import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CountryList from "./index"; // Adjust import path if necessary
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
  tld: [],
  cca2: "",
  ccn3: "",
  cca3: "",
  independent: false,
  status: "",
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
  capital: [],
  altSpellings: [],
  region: "",
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
  population: 0,
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

describe("CountryList Component", () => {
  it("renders country name and flag correctly", () => {
    render(
      <div>
        <CountryList country={mockCountry} />
      </div>
    );
    expect(screen.getByText("Brazil")).toBeInTheDocument();
    const image = screen.getByAltText("Brazil flag");
    expect(image).toHaveAttribute("src", "https://flagcdn.com/br.svg");
  });

  it("renders the link with the correct URL", () => {
    render(
      <div>
        <CountryList country={mockCountry} />
      </div>
    );
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/countries/brazil");
  });
});
