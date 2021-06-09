import React from "react";

import './table.css'

const TableComponent = ({data}) => (
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

const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const json = await response.json();
  return json;
};

export class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = { json: [] };
  }

  componentDidMount() {
    fetchData().then(json => this.setState({json}));
    console.log('DID_MOUNT');
  
  }

  componentDidUpdate() {
    console.log('UPDATE');
  }

  render() {
    return (
        <TableComponent data={this.state.json}/>
    );
  }
}

