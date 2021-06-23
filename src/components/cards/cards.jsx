import React from "react";

import { Card } from "../card";
import { AddTitle } from "../add-title/add-title";

import { data } from "../../constants/goods-data";

import styles from "./cards.module.css";

export const Cards = (props) => (
  <div className={styles.cardsContainer}>
    <div className={styles.cards}>
      {data.map((cardData) => (
        <AddTitle title="КАРТОЧКА">
          <Card cardData={cardData} key={cardData.key} store={props.store} />
        </AddTitle>
      ))}
    </div>
  </div>
);
