import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

import Navbar from "./components/Navbar";
import TicketsContainer from "./containers/TicketsContainer";
import PlansContainer from "./containers/PlansContainer";
import Home from "./components/Home";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    };
  }

  logIn = () => {
    this.setState({ loggedIn: true });
  };

  render() {
    const loggedIn = this.state.loggedIn;
    return (
      <Router>
        <div>
          <Route path="/" component={Navbar} />
          <Route exact path="/" render={() => <Home loggedIn={loggedIn} logIn={this.logIn} />} />
          <Route
            exact
            path="/concerts"
            render={() => <TicketsContainer loggedIn={loggedIn} />}
          />
          <Route
            exact
            path="/plans"
            render={() => <PlansContainer loggedIn={loggedIn} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
