import React from "react";
import ReactDom from "react-dom";

import styles from "./modal.module.css";

export class Modal extends React.Component {
  render() {
    return ReactDom.createPortal(
      <div className={styles.modal}>
        <div className={styles.modalCard}>
          <p>Слишком большая сумма!!!</p>
          <button type="button" onClick={() => this.props.store.onClose()}>
            X
          </button>
        </div>
      </div>,
      document.getElementById("root")
    );
  }
}
