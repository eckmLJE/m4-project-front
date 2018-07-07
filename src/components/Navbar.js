import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
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
      <Menu fixed="top" >
        <NavLink to="/" exact activeStyle={linkStyle}>
          <Menu.Item header as="h3">
            TICKETS
          </Menu.Item>
        </NavLink>
        <NavLink to="/plans" exact activeStyle={linkStyle}>
          <Menu.Item header as="h3">
            Plans
          </Menu.Item>
        </NavLink>
        <NavLink to="/concerts" exact activeStyle={linkStyle}>
          <Menu.Item header as="h3">
            Concerts
          </Menu.Item>
        </NavLink>
      </Menu>
    );
  }
}

export default Navbar;
