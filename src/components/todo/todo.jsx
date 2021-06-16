import React from 'react';

import { useParams, useRouteMatch } from "react-router-dom";

export const ToDo = () => {
  const match = useRouteMatch("/todo/:id");
  const { id } = useParams();
  console.log('id: ', id);
  console.log('match: ', match);
return (
  <div>TODO</div>
)
}
