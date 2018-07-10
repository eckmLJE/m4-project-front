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
      loggedIn: false,
      currentUser: "",
      currentUserId: ""
    };
  }

  logIn = () => {
    this.setState({ loggedIn: true });
  };

  setCurrentUser = (username, id) => {
    this.setState({ currentUser: username, currentUserId: id });
  };

  render() {
    const loggedIn = this.state.loggedIn;
    return (
      <Router>
        <div>
          <Route path="/" component={Navbar} />
          <Route
            exact
            path="/"
            render={() => <Home loggedIn={loggedIn} logIn={this.logIn} setUser={this.setCurrentUser} currentUser={this.state.currentUser}/>}
          />
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
