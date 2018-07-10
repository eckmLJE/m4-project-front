import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const linkStyle = {
  background: "#F2F2F2",
  textDecoration: "none",
  visited: "none",
  link: "none"
};

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Menu fixed="top">
        <NavLink to="/" exact activeStyle={linkStyle}>
          <Menu.Item header as="h3">
            <Icon name="home" />Home
          </Menu.Item>
        </NavLink>
        <NavLink to="/concerts" exact activeStyle={linkStyle}>
          <Menu.Item header as="h3">
            <Icon name="ticket" />Concerts
          </Menu.Item>
        </NavLink>
        <NavLink to="/plans" exact activeStyle={linkStyle}>
          <Menu.Item header as="h3">
            <Icon name="users" /> Plans
          </Menu.Item>
        </NavLink>
      </Menu>
    );
  }
}

export default Navbar;
