import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

import { PostCard } from "./post-card";

import { getPostsRequest, newPostCardToggle } from "../../store/posts/actions";

import "./posts.css";

export const Posts = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((store) => store.posts.posts);

  const onAddPost = () => {
    dispatch(newPostCardToggle());
  };

  useEffect(() => {
    dispatch(getPostsRequest());
  }, []);

  return (
    <div className="posts">
      <div className="posts-panel">
        <Button
          onClick={onAddPost}
          type="default"
          shape="round"
          className="add-post"
          size="large"
        >
          <PlusCircleOutlined /> Новый пост
        </Button>
      </div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};
