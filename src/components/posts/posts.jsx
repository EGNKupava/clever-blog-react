import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPostsRequest } from "../../store/posts/actions";

export const Posts = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((store) => store.posts);

  console.log("posts: ", posts);

  useEffect(() => {
    dispatch(getPostsRequest());
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <h4>{post.description}</h4>
          <p>{post.text}</p>
        </div>
      ))}
    </div>
  );
};
