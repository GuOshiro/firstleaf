import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CountryList from "./index";
import { Country } from "../../types/Contry";

const mockCountries: Array<Country> = [
  {
    cca3: "BRA",
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
  },
  {
    cca3: "ARG",
    name: {
      common: "Argentina",
      official: "",
      nativeName: {
        eng: {
          official: "",
          common: "",
        },
      },
    },
    flags: {
      svg: "https://flagcdn.com/ar.svg",
      png: "",
    },
    population: 45195777,
    region: "Americas",
    status: "Independent",
    capital: ["Buenos Aires"],
    tld: [],
    cca2: "",
    ccn3: "",
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
  },
  {
    cca3: "COL",
    name: {
      common: "Colombia",
      official: "",
      nativeName: {
        eng: {
          official: "",
          common: "",
        },
      },
    },
    flags: {
      svg: "https://flagcdn.com/co.svg",
      png: "",
    },
    population: 50882891,
    region: "Americas",
    status: "Independent",
    capital: ["Bogotá"],
    tld: [],
    cca2: "",
    ccn3: "",
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
  },
];

describe("CountryList Component", () => {
  it("should render a list of countries sorted alphabetically", () => {
    render(<CountryList countries={mockCountries} />);

    const countryNames = screen
      .getAllByRole("listitem")
      .map((item) => item.querySelector("span")?.textContent);

    expect(countryNames).toEqual(["Argentina", "Brazil", "Colombia"]);
  });

  it("should render the CountryItem component for each country", () => {
    render(<CountryList countries={mockCountries} />);

    mockCountries.forEach((country) => {
      expect(screen.getByText(country.name.common)).toBeInTheDocument();
    });
  });
});
