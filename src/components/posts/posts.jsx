import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { PostCard } from "./post-card";

import { getPostsRequest, newPostCardToggle } from "../../store/posts/actions";

import "./posts.css";
import { Button } from "antd";

export const Posts = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((store) => store.posts.posts);

  console.log("posts: ", posts);

  const onAddPost = () => {
    dispatch(newPostCardToggle());
  };

  useEffect(() => {
    dispatch(getPostsRequest());
  }, []);

  return (
    <div className="posts">
      <div className="posts-panel">
        <Button onClick={onAddPost} className="add-post">
          + Новый пост
        </Button>
      </div>
      {posts.map((post) => (
        <PostCard key={post.key} post={post} />
      ))}
    </div>
  );
};
