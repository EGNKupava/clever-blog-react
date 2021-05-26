import React from "react";

import logo from "./assets/logo.svg";

import styles from "./header.module.css";

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="картинка" />
        </div>
        <h2>Компонет создан в {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
