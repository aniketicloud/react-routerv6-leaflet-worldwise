import { FC } from "react";

import styles from "./CountryItem.module.css";

interface CountryItemProps {
  country: { emoji: string; country: string };
}

export const CountryItem: FC<CountryItemProps> = ({ country }) => {
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
};
