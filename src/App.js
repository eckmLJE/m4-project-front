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
      loggedIn: true,
      currentUsername: "Bob",
      currentUserId: "2"
    };
  }

  logIn = () => {
    this.setState({ loggedIn: true });
  };

  setCurrentUsername = (username, id) => {
    this.setState({ currentUsername: username, currentUserId: id });
  };

  render() {
    const loggedIn = this.state.loggedIn;
    return (
      <Router>
        <div>
          <Route path="/" render={() => <Navbar loggedIn={loggedIn} />} />
          <Route
            exact
            path="/"
            render={() => (
              <Home
                loggedIn={loggedIn}
                logIn={this.logIn}
                setUser={this.setCurrentUser}
                currentUsername={this.state.currentUsername}
              />
            )}
          />
          <Route
            exact
            path="/concerts"
            render={() => (
              <TicketsContainer
                loggedIn={loggedIn}
                currentUserId={this.state.currentUserId}
              />
            )}
          />
          <Route
            exact
            path="/plans"
            render={() => (
              <PlansContainer
                loggedIn={loggedIn}
                currentUserId={this.state.currentUserId}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
