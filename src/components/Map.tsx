import { FC } from "react";
import styles from "./Map.module.css";

interface MapProps {}

export const Map: FC<MapProps> = () => (
  <div className={styles.mapContainer}>Map</div>
);
