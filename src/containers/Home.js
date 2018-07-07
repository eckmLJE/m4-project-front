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
        <Container>
          Welcome
          <Login />
        </Container>
    );
  }
}

export default Home;
