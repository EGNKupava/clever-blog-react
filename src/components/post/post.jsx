import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router";

import { getPostRequest } from "../../store/currentPost/actions";

import style from "./post.module.css";

export const Post = () => {
  const dispatch = useDispatch();
  const postSelector = (store) => store.currentPost;
  const { post } = useSelector(postSelector);

  const match = useRouteMatch("/posts/:id");
  const { id } = match.params;

  useEffect(() => {
    dispatch(getPostRequest(id));
  }, []);

  return (
    <div className={style.post}>
      <div className={style.postContent}>
        <h2>{post.title}</h2>
        <div className={style.postDate}>{post.date}</div>
        <p>Описание:</p>
        <h4>{post.description}</h4>
        <p>{post.text}</p>
      </div>
    </div>
  );
};
