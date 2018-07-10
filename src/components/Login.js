import React, { Component } from "react";
import { Input, Button, Container } from "semantic-ui-react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  usernameChange = data => {
    this.setState({
      username: data
    });
  };

  passwordChange = data => {
    this.setState({
      password: data
    });
  };

  render() {
    return (
      <Container>
        <h4>Please Log In to Use ConcertPlan</h4>
        <Input>
          <Input
            onChange={(e, d) => this.usernameChange(d.value)}
            placeholder="Username"
            value={this.state.username}
          />
          <Input
            type="password"
            onChange={(e, d) => this.passwordChange(d.value)}
            placeholder="Password"
            value={this.state.password}
          />
          <Button> Login </Button>
        </Input>
      </Container>
    );
  }
}

export default Login;
