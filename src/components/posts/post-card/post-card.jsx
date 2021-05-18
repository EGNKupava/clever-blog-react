import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";

// import { getPostsRequest } from "../../store/posts/actions";
import "./post-card.css";
import { useHistory } from "react-router";

export const PostCard = ({ post = {} }) => {
  // const dispatch = useDispatch();
  // const { posts } = useSelector((store) => store.posts.posts);
  const history = useHistory();

  const onButtonClick = () => {
    history.push(`/posts/${post._id}`);
  };

  return (
    <div className="post-card">
      <div className="post-card-content">
        <h2>{post.title}</h2>
        <h4>{post.description}</h4>
        <p>{post.text}</p>
      </div>
      <Button onClick={onButtonClick}>Показать все</Button>
    </div>
  );
};
