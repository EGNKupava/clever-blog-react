import React from "react";

import "./message.css";

export const Message = ({ message = {} }) => (
  <div className="message">
    <div className="message-header">{message.user}</div>
    <div className="message-text">{message.text}</div>
  </div>
);
