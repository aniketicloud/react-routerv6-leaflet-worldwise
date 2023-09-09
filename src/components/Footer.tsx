import styles from "./Footer.module.css";
import React, { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <footer className={styles.footer}>
    <p className={styles.copyright}>
      &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.
    </p>
  </footer>
);

export default Footer;
