import React from "react";

export class Table extends React.Component {
  constructor(props) {
    super(props);
    this.dajsonta = null;
    this.state = { json: null };
  }

  componentDidMount() {
    console.log('DID_MOUNT');
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
      this.setState({json})});
  }

  componentWillUnmount() {
  }

  render() {
    console.log('this.state.json: ', this.state.json);
    return (
      <div>
        ТАБЛИЦА
      </div>
    );
  }
}

