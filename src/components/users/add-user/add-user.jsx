import React from "react";
import { Modal, Form, Input, Button, Select } from "antd";
import { useDispatch } from "react-redux";
import { addUserRequest } from "../../../store/users/action-creators";
import styles from "./add-user.module.css";

const { Option } = Select;

export const AddUser = ({ modal, setModal }) => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const emailRules = [
    {
      type: "email",
      message: "Плохой e-mail",
    },
    {
      required: true,
      message: "Please input your E-mail!",
    },
  ];

  const loginRules = [
    {
      required: true,
      message: "Обязательное поле",
    },
    {
      pattern: /\w\w\w/,
      message: "Не менее 3 символов",
    },
  ];

  const secureWordRules = [
    {
      required: true,
      message: "Please input your password!",
    },
  ];

  const technologiesOptions = ["HTML", "CSS", "JS", "React"];

  const onFinish = (values) => {
    console.log("values: ", values);
    dispatch(addUserRequest(values));
    form.resetFields();
  };
  return (
    <Modal
      title="+ Пользователь"
      visible={modal}
      footer={null}
      onCancel={() => setModal(false)}
    >
      <Form onFinish={onFinish} form={form} className="add-user">
        <Form.Item name="firstName" label="Имя">
          <Input />
        </Form.Item>
        <Form.Item name="lastName" label="Фамилия">
          <Input />
        </Form.Item>
        <Form.Item name="login" label="login" rules={loginRules}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Секретное слово"
          name="secureWord"
          rules={secureWordRules}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item label="E-mail" name="email" rules={emailRules}>
          <Input />
        </Form.Item>
        <Form.Item
          name="phoneNumber"
          label="Телефон"
          rules={[{ pattern: /\d/, message: "Разрешены только цифры" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="role" label="Специализация">
          <Input />
        </Form.Item>
        <Form.Item name="technologies" label="Навыки">
          <Select mode="multiple">
            {technologiesOptions.map((item) => (
              <Option value={item}>{item}</Option>
            ))}
          </Select>
        </Form.Item>
        <Button type="primary" htmlType="submit" shape="circle">
          Отправить
        </Button>
      </Form>
    </Modal>
  );
};

// \w\w\w
// https://learn.javascript.ru/regexp-methods#str-match-regexp
// regexp.test(str)
// /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
// () => ({
//   validator(_, value) {
//     if (!value) {
//       return Promise.reject(new Error('Заполните информацию'));
//     }
//     return Promise.resolve();
//   },
//   required: true
