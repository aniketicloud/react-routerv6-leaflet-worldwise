import { Outlet } from "react-router-dom";
import { AppNav } from "./AppNav";
import Footer from "./Footer";
import { Logo } from "./Logo";
import styles from "./Sidebar.module.css";
import { FC } from "react";

interface SideBarProps {}

export const SideBar: FC<SideBarProps> = () => (
  <div className={styles.sidebar}>
    <Logo />
    <AppNav />
    <Outlet />
    <Footer />
  </div>
);
