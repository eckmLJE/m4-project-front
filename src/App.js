import React, { Component } from "react";
import { Menu } from "semantic-ui-react";

import TicketsContainer from "./containers/TicketsContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Menu>
          <Menu.Item header as="h2">
            TICKETS TICKETS TICKETS
          </Menu.Item>
        </Menu>
        <TicketsContainer />
      </div>
    );
  }
}

export default App;
