import React from "react";

import { Clock } from "../clock";
import { ToggleThemeButton } from "../toggle-theme-button/toggle-theme-button";

import styles from "./header.module.css";

export const Header = (props) => (
  <div className={styles.header}>
    <div className={styles.logo}>Cleverland</div>
    <div className={styles.side}>
      <ToggleThemeButton />
      <Clock />
    </div>
  </div>
);
