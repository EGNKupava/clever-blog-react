import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router";

import { getPostRequest } from "../../store/currentPost/actions";

export const Post = () => {
  const dispatch = useDispatch();
  const postSelector = (store) => store.currentPost;
  const currentPost = useSelector(postSelector);

  const match = useRouteMatch("/posts/:id");
  const { id } = match.params;
  console.log("id: ", id);
  console.log("match: ", match);
  console.log("currentPost: ", currentPost);

  useEffect(() => {
    dispatch(getPostRequest(id));
  }, []);

  return <div>POST</div>;
};
