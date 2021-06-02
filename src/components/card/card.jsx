import React from "react";
import PropTypes from "prop-types";

import { Image } from "./card-image/image";

import styles from "./card.module.css";

export class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0, sumPrice: 0 };
  }

  onCounter = ({ target: { value } }) => {
    this.setState({
      counter: value,
      sumPrice: value * this.props.cardData.price,
    });
  };

  onButtonClick = () => {
    this.props.onBuy(
      this.props.cardData.id,
      +this.state.counter,
      this.state.sumPrice
    );
    this.setState({ counter: 0, sumPrice: 0 });
  };

  render() {
    const {
      cardData: { title, description, imgSrc },
    } = this.props;
    return (
      <div className={styles.card}>
        <h2 className={styles.title}>{title}</h2>
        <div>{description}</div>
        <Image imgSrc={imgSrc} className={styles.cardImg} />
        <div>Цена: {this.props.cardData.price}$</div>
        <div>
          Сумма: {this.state.sumPrice ? `${this.state.sumPrice}$` : null}
        </div>
        <div>
          <label>
            Количество:
            <input
              type="number"
              name="card-counter"
              onChange={this.onCounter}
              value={this.state.counter}
            />
          </label>
        </div>
        <button type="button" onClick={this.onButtonClick}>
          Добавить в корзину
        </button>
      </div>
    );
  }
}

Card.defaultProps = {
  cardData: {},
  onBuy: () => {},
};

Card.propTypes = {
  cardData: PropTypes.objectOf(PropTypes.any),
  onBuy: PropTypes.func,
};
