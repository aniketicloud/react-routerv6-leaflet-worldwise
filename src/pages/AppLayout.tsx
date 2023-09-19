import { useEffect } from "react";
import { Map } from "../components/Map";
import { SideBar } from "../components/SideBar";
import styles from "./AppLayout.module.css";
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";

export const AppLayout = () => {
  useEffect(() => {
    polyfillCountryFlagEmojis();
  }, []);
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
    </div>
  );
};
