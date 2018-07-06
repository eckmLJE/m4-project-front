import React, { Component } from "react";

import VenueList from "./VenueList";
import ConcertList from "./ConcertList";
import ConcertDetails from "../components/ConcertDetails";
import tmApiKey from "../tmApiKey";

const url = tmApiKey;
const venueUrl = "&venueId=";
const sortUrl = "&sort=date,asc&page=0&size=20";

const venueIds = {
  rockAndRollHotel: "KovZpZAEk7aA",
  nineThirtyClub: "KovZpZA7knFA",
  theAnthem: "KovZ917A3Y7",
  echoStage: "KovZpZAadt7A",
  blackCat: "KovZpZA1k1IA"
};

class TicketsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      concerts: [],
      currentVenue: null,
      currentConcert: null
    };
  }

  fetchConcerts = venueName => {
    fetch(url + venueUrl + venueIds[`${venueName}`] + sortUrl)
      .then(res => res.json())
      .then(data =>
        this.setState({
          concerts: data._embedded.events
        })
      );
  };

  componentDidMount = () => {
    this.fetchConcerts("theAnthem");
  };

  findConcert = id => {
    return this.state.concerts.find(concert => concert.id == id);
  };

  setConcert = id => {
    this.setState({
      currentConcert: id
    });
  };

  render() {
    return (
      <div className="grid-container">
        <VenueList fetchConcerts={this.fetchConcerts} />
        <ConcertList
          concerts={this.state.concerts}
          setConcert={this.setConcert}
        />
        {this.state.currentConcert ? (
          <ConcertDetails
            concert={this.findConcert(this.state.currentConcert)}
          />
        ) : null}
      </div>
    );
  }
}

export default TicketsContainer;
