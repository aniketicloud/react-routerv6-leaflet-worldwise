import { FC } from "react";

import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import { City } from "../types";
import { CityItem } from "./CityItem";
import { Message } from "./Message";

interface CityListProps {
  isLoading: boolean;
  cities: City[];
}

export const CityList: FC<CityListProps> = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
};
