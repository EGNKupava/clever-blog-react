import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dropdown, Button } from "antd";

import { Clock } from "../clock";
import { ToggleThemeButton } from "../toggle-theme-button/toggle-theme-button";

import styles from "./header.module.css";

export const Header = (props) => {
  const { profile } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  const userMenu = (
    <Button type="primary" onClick={onLogout} className={styles.logOut}>
      Выход
    </Button>
  );

  return (
    <div className={styles.header}>
      <div className={styles.logo}>Cleverland</div>
      <div>
        <Dropdown overlay={userMenu} placement="topLeft">
          <img
            className={styles.userImg}
            src={profile.imageUrl}
            alt="userLogo"
          />
        </Dropdown>
        <span className={styles.userName}>{profile.name}</span>
      </div>
      <div className={styles.side}>
        <ToggleThemeButton />
        <Clock />
      </div>
    </div>
  );
};
