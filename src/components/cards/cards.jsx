import React from "react";

import { Card } from "../card";
import { Modal } from "../modal";

import { data } from "../../constants/goods-data";

import styles from "./cards.module.css";

export class Cards extends React.Component {
  render() {
    return (
      <div className={styles.cardsContainer}>
        <div className={styles.cards}>
          {data.map((cardData) => (
            <Card
              cardData={cardData}
              key={cardData.key}
              store={this.props.store}
            />
          ))}
        </div>
      </div>
    );
  }
}
