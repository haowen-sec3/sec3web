import React from "react";
import Header from "../Header";
import styles from "./layout.module.scss";

type props = {
  children: React.ReactNode;
  className?: string;
  bg: "bg" | "no-bg";
};

const Layout = ({ children, className, bg }: props) => {
  return (
    <div className={`${styles.layout} ${className} ${styles[bg]}`}>
      {children}
    </div>
  );
};

export default Layout;
