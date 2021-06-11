import React from "react";
import PropTypes from 'prop-types';

export const TableComponent = ({data}) => (
  <table className="table">
    <tbody>
    { data.map(({ userId, body, title }) => (
      <tr>
        <td>{userId}</td>
        <td>{body}</td>
        <td>{title}</td>
      </tr>
    ))}
    </tbody>
  </table>
);

TableComponent.prototype = {
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
}