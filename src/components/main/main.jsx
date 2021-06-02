import React from "react";

import { Cards } from "../cards";

import styles from "./main.module.css";

export class Main extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return (
      <div className={styles.main} ref={this.myRef}>
        <Cards />
      </div>
    );
  }
}
