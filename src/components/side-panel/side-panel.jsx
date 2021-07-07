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
        Домашки
      </NavLink>
      <NavLink className="side-panel-link" to="/todo">
        TODO
      </NavLink>
      <NavLink className="side-panel-link" to="/messages">
        Clever Чат
      </NavLink>
      <NavLink className="side-panel-link" to="/faq">
        Интересные статьи
      </NavLink>
    </div>
  );
};
