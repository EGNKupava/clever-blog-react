import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "antd";

import { AddUser } from "./add-user";

import { getUsersRequest } from "../../store/users/action-creators";

import styles from "./users.module.css";

export const UsersList = (props) => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  const onUsersRequest = () => dispatch(getUsersRequest());
  const onSetModal = () => setModal(true);
  useEffect(() => {
    onUsersRequest();
  }, []);

  return (
    <div className={styles.usersList}>
      <Button onClick={onSetModal}>Добавить Пользователя</Button>
      {modal && <AddUser modal={modal} setModal={setModal} />}
    </div>
  );
};
