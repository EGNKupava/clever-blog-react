import React from "react";
import { useDispatch } from "react-redux";
import { Button, Form, Input } from "antd";
import { newMessageRequest } from "../../store/messages/actions";
import { useForm } from "antd/lib/form/Form";

export const NewMessage = () => {
  const dispatch = useDispatch();

  const [messageForm] = useForm();

  const onSubmit = (values) => {
    dispatch(newMessageRequest(values.message));
    messageForm.resetFields();
  };
  return (
    <Form
      className="form"
      form={messageForm}
      layout="vertical"
      onFinish={onSubmit}
    >
      <Form.Item name="message" label="Текст сообщения">
        <Input />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Создать
      </Button>
    </Form>
  );
};
