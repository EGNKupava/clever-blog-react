import React from "react";

import { TableComponent } from './table-component';
import { fetchData } from '../../utils/fech-data';
import './table.css'

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

