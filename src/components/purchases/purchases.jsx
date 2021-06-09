import React from "react";

import styles from "./purchases.module.css";

export const Purchases = ({store}) => (
  <div className={styles.purchases}>
    Корзина:
    <p>Холодильник: {store.state.purchases.fridge}</p>
    <p>TV: {store.state.purchases.tv}</p>
    <p>Стиралка: {store.state.purchases.washingMashine}</p>
    <div>Сумма Покупок: {store.state.purchases.sumPrice} $</div>
    <button
      type="button"
      className={styles.buyButton}
      onClick={() => store.onClear()}
    >
      Очистить корзину
    </button>
    <button
      type="button"
      className={styles.buyButton}
      onClick={() => store.onBuyAll()}
    >
      Купить
    </button>
  </div>
);
