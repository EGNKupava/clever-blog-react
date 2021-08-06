import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import { Header } from "../header";
import { Main } from "../main";
import { SidePanel } from "../side-panel";
import { Todo } from "../todo";
import { Table } from "../table";
import { ThemeContext, themes } from "../theme-context";
import { Accordion } from "../accordion";
import { Messages } from "../messages";
import { UsersList } from "../users";
import { Hooks } from "../hooks";

import "antd/dist/antd.css";
import "./app.css";
import { Login } from "../login";

export const App = (props) => {
  const [theme, setTheme] = useState(themes.light);

  const { isAuth } = useSelector((state) => state.user);

  const toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  };

  if (!isAuth) {
    return <Login />;
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
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
            <Route path="/catalogue">
              <Main />
            </Route>
            <Route path="/todo">
              <Todo />
            </Route>
            <Route path="/table">
              <Table />
            </Route>
            <Route path="/questions">
              <Accordion />
            </Route>
            <Route path="/messages">
              <Messages />
            </Route>
            <Route path="/users">
              <UsersList />
            </Route>
            <Route path="/hooks">
              <Hooks />
            </Route>
            <Route path="*">
              <div> 404 PAGE NOT FOUND </div>
            </Route>
          </Switch>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};
