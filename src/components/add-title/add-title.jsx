import React from "react";

export const AddTitle = (props) => (
  <div>
    <h1>{props.title}</h1>
    <div>{props.children}</div>
  </div>
);
