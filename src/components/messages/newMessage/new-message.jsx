import React from "react";
import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { SendOutlined } from "@ant-design/icons";
import { sendMessage } from "../../../store/messages/action-creators";

import "./new-message.css";

export const NewMessage = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = ({ message }) => {
    dispatch(sendMessage(message));
    form.resetFields();
  };
  return (
    <Form onFinish={onFinish} form={form} className="new-message">
      <Form.Item name="message">
        <Input.TextArea
          placeholder="Расскажи как оно!)"
          autoSize
          className="text-area"
        />
      </Form.Item>
      <Button type="primary" htmlType="submit" shape="circle">
        <SendOutlined />
      </Button>
    </Form>
  );
};
