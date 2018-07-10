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

  login = e => {
    e.preventDefault();

    let params = {
      username: this.state.username,
      password: this.state.password
    };

    let url = "http://localhost:3000/login";

    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(params)
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.token);
        this.props.logIn()
        this.props.setUser(res.username, res.id);
      });
  };

  render() {
    return (
      <Container>
        <h4>Please Log In to Use ConcertPlan</h4>
        <Input>
          <Input
            onChange={(e, d) => this.setState({ username: d.value })}
            placeholder="Username"
            value={this.state.username}
          />
          <Input
            type="password"
            onChange={(e, d) => this.setState({ password: d.value })}
            placeholder="Password"
            value={this.state.password}
          />
          <Button onClick={this.login}> Login </Button>
        </Input>
      </Container>
    );
  }
}

export default Login;
