import { FC } from "react";
import styles from "./CityItem.module.css";
import { City } from "../types";
import { formatDate } from "../utils";
import { CountryFlag } from "./CountryFlag";

interface CityItemProps {
  city: City;
}

export const CityItem: FC<CityItemProps> = ({ city }) => {
  const { cityName, date, emoji } = city;
  return (
    <li className={styles.cityItem}>
      <span className={styles.emoji}>
        <CountryFlag countryCode={emoji} />
      </span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>({formatDate(date)})</time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
};
