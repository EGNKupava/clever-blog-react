import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./components/app";
import { BrowserRouter as Router } from "react-router-dom";

import { Store } from "./store";
import reportWebVitals from "./reportWebVitals";

const store = new Store();

export const renderAll = () => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App store={store} />
      </Router>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderAll();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
