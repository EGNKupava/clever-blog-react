import React, { useEffect, useState } from "react";

import { fetchData } from '../../utils/fech-data';
import './table.css'

export const Table = () => {
  const [json, setJson] = useState([]);
  const [isTableVisible, setIsTableVisible] = useState(false);

  useEffect(() => {
    console.log('DID_MOUNT');
    fetchData().then(data => {setJson(data)});
  }, []);

    return (
      <>
      { isTableVisible ? (
        <table className="table">
        <tbody>
        { json.map(({ userId, body, title, id }) => (
        <tr key={id} >
          <td>{userId}</td>
          <td>{body}</td>
          <td>{title}</td>
        </tr>
      ))}
      </tbody>
    </table>) : (
      <div>
        <button type="button" onClick={() => setIsTableVisible(true)}>Показать</button>
        </div>
      )}
      </>
    );
}

