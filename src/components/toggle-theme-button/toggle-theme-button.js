import React, { useContext } from "react";
import { Switch } from "antd";
import { ThemeContext } from "../theme-context";

export const ToggleThemeButton = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <Switch
      onChange={toggleTheme}
      checkedChildren="Light"
      unCheckedChildren="Dark"
    />
  );
};
