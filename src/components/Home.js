import React, { Component } from "react";
import { Container } from "semantic-ui-react";

import Login from "../components/Login";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <Login />
      </div>
    );
  }
}

export default Home;
