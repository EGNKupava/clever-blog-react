import React from "react";

import logo from "./assets/logo.svg";

import styles from "./header.module.css";

export const Header = () => (
  <div className={styles.header}>
    <div className={styles.logoContainer}>
      <img src={logo} alt="logo" />
      <p className={styles.logoTitle}>Cleverland</p>
    </div>
    <p className={styles.journal}>Journal</p>
  </div>
);
