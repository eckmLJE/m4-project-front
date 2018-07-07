import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import "semantic-ui-css/semantic.min.css";

import Navbar from "./components/Navbar";
import TicketsContainer from "./containers/TicketsContainer";
import PlansContainer from "./containers/PlansContainer";
import Home from "./containers/Home";

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={Navbar} />
      <Route exact path="/" component={Home} />
      <Route exact path="/concerts" component={TicketsContainer} />
      <Route exact path="/plans" component={PlansContainer} />
    </div>
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
