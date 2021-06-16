import React from "react";

import { Header } from "../header";
import { Main } from "../main";
import { SidePanel } from "../side-panel";
import { Todo } from "../todo";

import "./app.css";

export const App = (props) => {
  return (
    <div className="app">
      <Header />
      <div className="content" >
        <SidePanel />
        <Main store={props.store} />
      </div>
      <Todo />
    </div>
  );
};
