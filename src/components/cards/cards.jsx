import React from "react";

import { Card } from "../card";
import { Modal } from "../modal";

import { data } from "../../constants/goods-data";

import styles from "./cards.module.css";

const DEFAULT_STATE = {
  tv: 0,
  fridge: 0,
  washingMashine: 0,
  sumPrice: 0,
  isModalVisible: false,
};

export class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = DEFAULT_STATE;
  }

  onBuy = (goods, count, price) => {
    this.setState({
      [goods]: this.state[goods] + count,
      sumPrice: this.state.sumPrice + price,
    });
  };

  onBuyAll = () => {
    if (this.state.sumPrice > 3000) {
      this.setState({ isModalVisible: true });
      return;
    }
  };

  onClose = () => {
    this.setState({ isModalVisible: false });
  };

  onClear = () => {
    this.setState(DEFAULT_STATE);
  };

  render() {
    return (
      <div className={styles.cardsContainer}>
        <div className={styles.cards}>
          {data.map((cardData) => (
            <Card cardData={cardData} key={cardData.key} onBuy={this.onBuy} />
          ))}
        </div>
        <div className={styles.purchases}>
          Корзина:
          <p>Холодильник: {this.state.fridge}</p>
          <p>TV: {this.state.tv}</p>
          <p>Стиралка: {this.state.washingMashine}</p>
          <div>Сумма Покупок: {this.state.sumPrice} $</div>
          <button
            type="button"
            className={styles.buyButton}
            onClick={this.onClear}
          >
            Очистить корзину
          </button>
          <button
            type="button"
            className={styles.buyButton}
            onClick={this.onBuyAll}
          >
            Купить
          </button>
        </div>
        {this.state.isModalVisible && <Modal onClose={this.onClose} />}
      </div>
    );
  }
}
