import { FC } from "react";

import { City } from "../types";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import { Message } from "./Message";
import { CountryItem } from "./CountryItem";

interface CountryListProps {
  isLoading: boolean;
  cities: City[];
}

export const CountryList: FC<CountryListProps> = ({ cities, isLoading }) => {
  const uniqueCountryMap = new Map();
  cities.forEach(({ country, emoji }) => {
    uniqueCountryMap.set(country, emoji);
  });

  const countryObjArray = Array.from(uniqueCountryMap, ([key, value]) => ({
    [key]: value,
  }));

  console.log(countryObjArray);

  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <ul className={styles.countryList}>
      {cities.map(({ country, emoji, id }) => (
        <CountryItem country={{ country, emoji }} key={id} />
      ))}
    </ul>
  );
};
