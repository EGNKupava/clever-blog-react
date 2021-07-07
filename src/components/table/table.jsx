import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "../spinner";

import "./table.css";

export const Table = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  console.log("state: ", state);

  const {
    tableData: json,
    isError,
    isLoading,
    errorMessage,
  } = useSelector((state) => state.table);

  const onButtonClick = () => {
    dispatch({ type: "GET_TABLE_DATA_REQUEST" });
  };

  return (
    <>
      <button type="button" onClick={onButtonClick}>
        Сделать запрос
      </button>
      {isLoading && <Spinner />}
      {isError ? (
        <h1>{errorMessage}</h1>
      ) : (
        <table className="table">
          <tbody>
            {json.map(({ userId, body, title, id }) => (
              <tr key={id}>
                <td>{userId}</td>
                <td>{body}</td>
                <td>{title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
