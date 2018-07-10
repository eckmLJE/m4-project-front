import React, { Component } from "react";

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
          <h4>Welcome Back {this.props.currentUser}!</h4>
        ) : (
          <Login setUser={this.props.setUser} loggedIn={this.props.loggedIn} logIn={this.props.logIn} />
        )}
      </div>
    );
  }
}

export default Home;
