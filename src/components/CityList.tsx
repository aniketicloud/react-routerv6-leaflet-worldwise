import styles from "./CityList.module.css";
import Spinner from "./Spinner";

export const CityList = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner />;
  return <ul className={styles.cityList}>List</ul>

};
