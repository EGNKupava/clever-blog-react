import { Spin } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button } from "antd";

import {
  getMessagesRequest,
  sendMessage,
} from "../../store/messages/action-creators";
import "./messages.css";

export const Messages = () => {
  const dispatch = useDispatch();
  const { messages, totalResults, isLoading, isError } = useSelector(
    (state) => state.messages
  );

  const [form] = Form.useForm();

  useEffect(() => {
    dispatch(getMessagesRequest());
  }, []);

  const getDate = (date) => new Date(Date.parse(date)).toLocaleString();

  const onFinish = ({ message }) => {
    dispatch(sendMessage(message));
    form.resetFields();
  };

  return (
    <div className="messages">
      <h2>ЧАТ</h2>
      <Spin spinning={isLoading} tip="Ждите...">
        {messages.map((message, index) => (
          <div className="message" key={index.toString()}>
            <div className="date">{getDate(message.date)}</div>
            <div className="user">user: {message.user}</div>
            <div className="text">{message.text && message.text}</div>
            <div className="likes">Likes: {message.likes}</div>
          </div>
        ))}
      </Spin>
      <Form onFinish={onFinish} form={form}>
        <Form.Item name="message" label="Введите сообщение">
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Отправить
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
