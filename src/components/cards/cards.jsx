import React from "react";

import { Card } from "../card";

import { data } from "../../constants/goods-data";

import styles from "./cards.module.css";

const DEFAULT_STATE = { tv: 0, fridge: 0, washingMashine: 0 };

export class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = DEFAULT_STATE;
  }

  onBuy = (goods, count) => {
    this.setState({ [goods]: this.state[goods] + count });
  };

  render() {
    return (
      <div className={styles.main}>
        {data.map((cardData) => (
          <Card cardData={cardData} key={cardData.key} onBuy={this.onBuy} />
        ))}
        <div>
          Корзина:
          <p>Холодильник: {this.state.fridge}</p>
          <p>TV: {this.state.tv}</p>
          <p>Стиралка: {this.state.washingMashine}</p>
          <button type="button" onClick={() => this.setState(DEFAULT_STATE)}>
            Очистить корзину
          </button>
        </div>
      </div>
    );
  }
}
