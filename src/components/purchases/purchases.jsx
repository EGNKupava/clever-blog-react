import React from "react";

import styles from "./purchases.module.css";

export class Purchases extends React.Component {
  render() {
    return (
      <div className={styles.purchases}>
        Корзина:
        <p>Холодильник: {this.props.store.state.purchases.fridge}</p>
        <p>TV: {this.props.store.state.purchases.tv}</p>
        <p>Стиралка: {this.props.store.state.purchases.washingMashine}</p>
        <div>Сумма Покупок: {this.props.store.state.purchases.sumPrice} $</div>
        <button
          type="button"
          className={styles.buyButton}
          onClick={() => this.props.store.onClear()}
        >
          Очистить корзину
        </button>
        <button
          type="button"
          className={styles.buyButton}
          onClick={() => this.props.store.onBuyAll()}
        >
          Купить
        </button>
      </div>
    );
  }
}
