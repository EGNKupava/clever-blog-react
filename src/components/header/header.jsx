import React from "react";

import { Clock } from "../clock";

import logo from "./assets/logo.svg";

import styles from "./header.module.css";

export const Header = (props) => (
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="картинка" />
        </div>
        <Clock />
      </div>
);
