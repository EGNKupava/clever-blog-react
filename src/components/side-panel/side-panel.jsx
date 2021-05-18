import React from "react";
import { NavLink } from "react-router-dom";

import "./side-panel.css";

export const SidePanel = () => {
  return (
    <div className="side-panel">
      <div>Навигация</div>
      <NavLink
        className="side-panel-link"
        activeClassName="active-link"
        to="/posts"
      >
        Блог
      </NavLink>
      <NavLink
        className="side-panel-link"
        activeClassName="active-link"
        to="/todo"
      >
        TODO
      </NavLink>
    </div>
  );
};
