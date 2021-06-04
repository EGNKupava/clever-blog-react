import React from "react";

import { Cards } from "../cards";
import { Purchases } from "../purchases";
import { Modal } from "../modal";

import styles from "./main.module.css";

export class Main extends React.Component {
  render() {
    return (
      <div className={styles.main}>
        <Cards store={this.props.store} />
        <Purchases store={this.props.store} />
        {this.props.store.state.isModalVisible && (
          <Modal store={this.props.store} />
        )}
      </div>
    );
  }
}
