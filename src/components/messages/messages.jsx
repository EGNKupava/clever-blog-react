import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Message } from "./message";
import { NewMessage } from "../new-message";

import { getMessagesRequest } from "../../store/messages/actions";

import "./messages.css";

export const Messages = () => {
  const dispatch = useDispatch();
  const { messages } = useSelector((store) => store.messages);

  useEffect(() => {
    dispatch(getMessagesRequest());
  }, []);

  return (
    <div className="messages">
      ЧАТ
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      <NewMessage />
    </div>
  );
};
