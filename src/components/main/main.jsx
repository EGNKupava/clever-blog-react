import React from "react";

import { Cards } from "../cards";
import { Purchases } from "../purchases";
import { Modal } from "../modal";
import { Table } from '../table';

import styles from "./main.module.css";

export const Main = ({store}) => (
  <div className={styles.main}>
    <Cards store={store} />
    <Purchases store={store} />
    {store.state.isModalVisible && (
      <Modal store={store} />
    )}
    <Table />
  </div>
);

