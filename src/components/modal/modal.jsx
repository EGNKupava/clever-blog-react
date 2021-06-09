import React from "react";
import ReactDom from "react-dom";

import styles from "./modal.module.css";

export const Modal = ({store}) => ReactDom.createPortal(
    <div className={styles.modal}>
      <div className={styles.modalCard}>
        <p>Слишком большая сумма!!!</p>
        <button type="button" onClick={() => store.onClose()}>
          X
        </button>
      </div>
    </div>,
    document.getElementById("root")
);


