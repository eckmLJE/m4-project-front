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
        {this.props.loggedIn ? (
          <h4>Welcome Back!</h4>
        ) : (
          <Login loggedIn={this.props.loggedIn} logIn={this.props.logIn} />
        )}
      </div>
    );
  }
}

export default Home;
