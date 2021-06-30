import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./table.css";

export const Table = () => {
  const [isTableVisible, setIsTableVisible] = useState(true);
  const dispatch = useDispatch();
  const {
    tableData: json,
    isError,
    isLoading,
    errorMessage,
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch({ type: "GET_TABLE_DATA_REQUEST" });
  }, []);

  return (
    <>
      {isLoading && <div>LOADING</div>}
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
