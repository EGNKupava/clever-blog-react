import React from "react";

import logo from "./assets/logo.svg";

import styles from "./header.module.css";

export class Header extends React.Component {
  render() {
    return (
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="картинка" />
        </div>
        HEADER
      </div>
    );
  }
}
