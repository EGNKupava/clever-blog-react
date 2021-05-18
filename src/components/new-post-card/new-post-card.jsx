import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Drawer, Button, Form, Input } from "antd";
import { newPostCardToggle } from "../../store/posts/actions";
import { useForm } from "antd/lib/form/Form";

export const NewPostCard = () => {
  const dispatch = useDispatch();
  const postSelector = (store) => store.posts;

  const { newPostCardVisible } = useSelector(postSelector);
  const [form] = useForm();
  // useEffect(() => {
  //   dispatch(getPostRequest(id));
  // }, []);

  const onClose = () => {
    console.log("close");
    dispatch(newPostCardToggle());
  };

  const onSubmit = (values) => {
    console.log(values);
    form.resetFields();
  };
  return (
    <Drawer
      title="+ Добавить новый пост"
      placement="right"
      closable
      maskClosable={false}
      onClose={onClose}
      visible={newPostCardVisible}
      width={800}
    >
      <Form className="form" form={form} layout="vertical" onFinish={onSubmit}>
        <Form.Item name="title" label="Заголовок">
          <Input />
        </Form.Item>
        <Form.Item name="text" label="Текст">
          <Input.TextArea />
        </Form.Item>
      </Form>
      <Button
        type="primary"
        onClick={() => {
          form.submit();
        }}
      >
        Создать
      </Button>
    </Drawer>
  );
};
