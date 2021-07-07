import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getMessagesRequest } from "../../store/messages/action-creators";
import "./messages.css";

export const Messages = () => {
  const dispatch = useDispatch();
  const { messages, totalResults, isLoading, isError } = useSelector(
    (state) => state.messages
  );

  useEffect(() => {
    dispatch(getMessagesRequest());
  }, []);
  return (
    <div className="messages">
      ЧАТ
      {messages.map((message) => (
        <div>{message.text}</div>
      ))}
    </div>
  );
};
