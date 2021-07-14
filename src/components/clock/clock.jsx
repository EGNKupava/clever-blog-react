import React from "react";

import "./clock.css";

export class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };
  }

  updateTime() {
    this.setState({ date: new Date() });
  }

  componentDidMount() {
    this.idTimer = setInterval(() => this.updateTime(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.idTimer);
  }

  render() {
    return (
      <div className="clock">
        <span>Время:</span>
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}
