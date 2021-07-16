import React from "react";
import { Modal } from "antd";

import styles from "./add-user.module.css";

export const AddUser = ({ modal, setModal }) => {
  return (
    <Modal
      title="Basic Modal"
      visible={modal}
      onOk={() => setModal(false)}
      onCancel={() => setModal(false)}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};
