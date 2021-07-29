import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table } from "antd";

import { AddUser } from "./add-user";
import { columns } from "../users/columns";

import { getUsersRequest } from "../../store/users/action-creators";

import styles from "./users.module.css";

export const UsersList = (props) => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  const onUsersRequest = () => dispatch(getUsersRequest());
  const onSetModal = () => setModal(true);
  useEffect(() => {
    dispatch(getUsersRequest());
  }, []);

  const { users, isLoading } = useSelector((state) => state.users);

  return (
    <div className={styles.usersList}>
      <Button onClick={onSetModal}>Добавить Пользователя</Button>
      {modal && <AddUser modal={modal} setModal={setModal} />}
      <Table
        columns={columns}
        dataSource={users}
        loading={{ tip: "Загрузка данных", spinning: isLoading }}
      />
    </div>
  );
};
