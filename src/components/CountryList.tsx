import { FC } from "react";

import type { City } from "../types";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import { Message } from "./Message";
import { CountryItem } from "./CountryItem";

interface CountryListProps {
  isLoading: boolean;
  cities: City[];
}

type CountryItem = {
  country: string;
  emoji: string;
};

export const CountryList: FC<CountryListProps> = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countryItems: CountryItem[] = cities.reduce(
    (accumulator, { country, emoji }) => {
      if (!accumulator.map((city) => city.country).includes(country)) {
        return [...accumulator, { country: country, emoji: emoji }];
      } else {
        return accumulator;
      }
    },
    [] as CountryItem[]
  );

  return (
    <ul className={styles.countryList}>
      {countryItems.map(({ country, emoji }) => (
        <CountryItem country={{ country, emoji }} key={country} />
      ))}
    </ul>
  );
};
