import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./components/app";

import { Store, subscribe } from "./store";
import reportWebVitals from "./reportWebVitals";

// const DEFAULT_STATE = {
//   purchases: {
//     tv: 0,
//     fridge: 0,
//     washingMashine: 0,
//     sumPrice: 0,
//   },
//   isModalVisible: false,
// };

// export class Store {
//   constructor() {
//     this.state = DEFAULT_STATE;
//   }

//   onBuy(goods, count, price) {
//     this.state = {
//       ...this.state,
//       purchases: {
//         ...this.state.purchases,
//         [goods]: this.state.purchases[goods] + count,
//         sumPrice: this.state.purchases.sumPrice + price,
//       },
//     };
//     renderAll();
//   }

//   onBuyAll() {
//     if (this.state.purchases.sumPrice > 3000) {
//       this.state = {
//         ...this.state,
//         isModalVisible: true,
//       };
//     }
//     console.log(this.state);
//     renderAll();
//   }

//   onClose() {
//     this.state = {
//       ...this.state,
//       isModalVisible: false,
//     };
//     renderAll();
//   }

//   onClear() {
//     this.state = DEFAULT_STATE;
//     renderAll();
//   }
// }

const store = new Store();

const renderAll = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderAll();

subscribe(renderAll);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
