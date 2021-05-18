import React from "react";
import { Redirect, Route } from "react-router-dom";

import { Posts } from "../posts";
import { Post } from "../post";
import { Header } from "../header";
import { SidePanel } from "../side-panel";
import { NewPostCard } from "../new-post-card";

import "antd/dist/antd.css";

import "./app.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <SidePanel />
        <Route exact path="/">
          <Redirect to="/posts" />
        </Route>
        <Route exact path="/posts">
          <Posts />
        </Route>
        <Route exact path="/posts/:id">
          <Post />
        </Route>
        <NewPostCard />
      </div>
    </div>
  );
};

export default App;
