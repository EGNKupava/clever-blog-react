import React from "react";

import { Cards } from "../cards";
import { Purchases } from "../purchases";
import { Modal } from "../modal";
import { useParams } from "react-router";

import styles from "./main.module.css";

export const Main = ({ store }) => {
  const { id } = useParams();
  console.log("id ", id);

  return (
    <div className={styles.main}>
      <Cards store={store}>
        <div>HI</div>
      </Cards>
      <Purchases store={store} />
      {store.state.isModalVisible && <Modal store={store} />}
    </div>
  );
};
