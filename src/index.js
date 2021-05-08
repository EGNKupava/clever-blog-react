import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/app";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import ruRu from "antd/lib/locale/ru_RU";
import configureStore from "./configure-store";

import "./index.css";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider locale={ruRu}>
        <App />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
