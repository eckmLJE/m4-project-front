import React, { Component } from "react";

import TicketsContainer from "./containers/TicketsContainer";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>TICKETS TICKETS TICKETS</h1>
        </div>
        <TicketsContainer />
      </div>
    );
  }
}

export default App;
