import React from "react";
import { useSelector } from "react-redux";

import logo from "./assets/logo.svg";

import styles from "./header.module.css";

export const Header = () => {
  const { avatarSrc, name } = useSelector((store) => store.user);

  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="logo" />
        <p className={styles.logoTitle}>Cleverland</p>
      </div>
      <p className={styles.journal}>Journal</p>
      <div className={styles.user}>
        <img src={avatarSrc} alt="avatar" className={styles.avatar} />
        <p>{name}</p>
      </div>
    </div>
  );
};
