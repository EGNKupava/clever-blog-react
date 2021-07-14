import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spin, Input, Popconfirm } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  HeartOutlined,
  CheckCircleOutlined,
  StopOutlined,
} from "@ant-design/icons";
import classNames from "classnames";
import { isToday, format } from "date-fns";

import { NewMessage } from "./newMessage";

import {
  getMessagesRequest,
  deleteMessageRequest,
  editMessageRequest,
  upadateMessageLikesRequest,
} from "../../store/messages/action-creators";

import "./messages.css";

export const Messages = () => {
  const dispatch = useDispatch();
  const { messages, totalResults, isLoading, isError } = useSelector(
    (state) => state.messages
  );
  const { userName } = useSelector((state) => state.user);

  const [editedMessage, setEditedMessage] = useState(null);
  const [editedMessageText, setEditedMessageText] = useState("");

  useEffect(() => {
    dispatch(getMessagesRequest());
  }, []);

  const getDate = (date) => {
    const dateObj = new Date(Date.parse(date));
    return isToday(dateObj)
      ? format(dateObj, "HH:mm")
      : format(dateObj, "d.LL");
  };

  const onDelete = (id) => {
    dispatch(deleteMessageRequest(id));
  };

  const onEdit = (id, text) => {
    setEditedMessage(id);
    setEditedMessageText(text);
  };

  const onLike = (id, likes) => {
    dispatch(upadateMessageLikesRequest(id, `${+likes + 1}`));
  };

  const onEditSave = () => {
    dispatch(editMessageRequest(editedMessage, editedMessageText));
    setEditedMessage(null);
    setEditedMessageText("");
  };

  const onEditCancel = () => {
    setEditedMessage(null);
    setEditedMessageText("");
  };

  const messageClass = (user) =>
    classNames("message", { my: user === userName });

  return (
    <div className="messages">
      <h2>ЧАТ</h2>
      <Spin spinning={isLoading} tip="Ждите...">
        <div className="chat-window">
          {messages.map(({ user, date, id, text, likes }, index) => (
            <div className={messageClass(user)} key={index.toString()}>
              <div className="head">
                <div className="user">{user}</div>
                <div className="date">{getDate(date)}</div>
                {user === userName && (
                  <div className="edit-section">
                    <Popconfirm
                      title="Редактировать?"
                      onConfirm={() => onEdit(id, text)}
                      okText="Да"
                      cancelText="Отмена"
                      className
                    >
                      <EditOutlined />
                    </Popconfirm>
                    <Popconfirm
                      title="Удалить?"
                      onConfirm={() => onDelete(id)}
                      okText="Да"
                      cancelText="Отмена"
                      className
                    >
                      <DeleteOutlined />
                    </Popconfirm>
                  </div>
                )}
              </div>
              {editedMessage === id ? (
                <div>
                  <Input.TextArea
                    value={editedMessageText}
                    autoSize
                    onChange={({ target: { value } }) =>
                      setEditedMessageText(value)
                    }
                  />
                  <button
                    type="button"
                    onClick={onEditSave}
                    className="edit-btn"
                  >
                    <CheckCircleOutlined />
                  </button>
                  <button type="button" onClick={onEditCancel}>
                    <StopOutlined />
                  </button>
                </div>
              ) : (
                <div className="text">{text}</div>
              )}
              <div className="likes">
                <HeartOutlined onClick={() => onLike(id, likes)} /> {likes}
              </div>
            </div>
          ))}
          <div className="total-messages">
            Cообщений: <span>{totalResults}</span>
          </div>
        </div>
      </Spin>
      <NewMessage />
    </div>
  );
};
