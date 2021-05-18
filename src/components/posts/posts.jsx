import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { PostCard } from "./post-card";

import { getPostsRequest } from "../../store/posts/actions";

import "./posts.css";

export const Posts = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((store) => store.posts.posts);

  console.log("posts: ", posts);

  useEffect(() => {
    dispatch(getPostsRequest());
  }, []);

  return (
    <div className="posts">
      {posts.map((post) => (
        <PostCard key={post.key} post={post} />
      ))}
    </div>
  );
};
