import React, { Component } from "react";

import VenueList from "./VenueList";
import ConcertList from "./ConcertList";
import ConcertDetails from "../components/ConcertDetails";
import tmApiKey from "../tmApiKey";

const url = tmApiKey;

class TicketsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      concerts: [],
      currentVenue: null,
      currentConcert: null
    };
  }

  fetchConcerts = () => {
    fetch(url)
      .then(res => res.json())
      .then(data =>
        this.setState({
          concerts: data._embedded.events
        })
      );
  };

  componentDidMount = () => {
    this.fetchConcerts();
  };

  findConcert = id => {
    console.log("findConcert reached with", id);
    return this.state.concerts.find(concert => concert.id == id);
  };

  setConcert = id => {
    console.log(id, "setConcert reached with id");
    this.setState({
      currentConcert: id
    });
  };

  render() {
    return (
      <div className="grid-container">
        <VenueList />
        <ConcertList
          concerts={this.state.concerts}
          setConcert={this.setConcert}
        />
        {this.state.currentVenue ? (
          <ConcertDetails
            concert={this.findConcert(this.state.currentConcert)}
          />
        ) : null}
      </div>
    );
  }
}

export default TicketsContainer;
