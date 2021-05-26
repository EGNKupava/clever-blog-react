import React from "react";

import styles from "./card.module.css";

export class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.onCounterChange = this.onCounterChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
  }

  onCounterChange({ target: { value } }) {
    this.setState({
      counter: value,
    });
  }

  onDescriptionChange({ target: { value } }) {
    this.setState({
      description: value,
    });
  }

  render() {
    console.log("props: ", this.props);
    const {
      cardData: { title, description, imgSrc },
    } = this.props;
    return (
      <div className={styles.card}>
        <h2>{title}</h2>
        <div>{description}</div>
        <img src={imgSrc} alt="logo" className={styles.cardImg} />
        <div>
          <label>
            Количество:
            <input
              type="number"
              name="card-counter"
              onChange={this.onCounterChange}
              value={this.state.counter}
            />
          </label>
        </div>
        <div>
          <label>
            Описание:
            <input
              type="text"
              onChange={this.onDescriptionChange}
              value={this.state.description}
            />
          </label>
        </div>
        <div>
          <h4>В стейте записано: </h4>
          <p> counter: {this.state.counter}</p>
          <p> description: {this.state.description}</p>
        </div>
      </div>
    );
  }
}
