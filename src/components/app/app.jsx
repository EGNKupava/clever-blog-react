import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { Header } from "../header";
import { Main } from "../main";
import { SidePanel } from "../side-panel";
import { Todo } from "../todo";
import { Table } from "../table";

import "./app.css";

export const App = (props) => {
  const isAuth = true;
  
  if(!isAuth) {
    return (
      <div>
        ЛОГИН
      </div>
    )
  }

  return (
    <div className="app">
      <Header />
      <div className="content">
        <SidePanel />
        <Switch>
          <Route exact path="/">
            <div>КОРЕНЬ</div>
          </Route>
          <Route path="/main">
            <div>ГЛАВНАЯ</div>
          </Route>
          <Route path="/catalogue/:id">
            <Main store={props.store} />
          </Route>
          <Route path="/todo">
            <Todo />
          </Route>
          <Route path="/table">
            <Table />
          </Route>
        </Switch>
      </div>
    </div>
  );
};
