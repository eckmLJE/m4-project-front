import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

import VenueList from "./VenueList";
import ConcertList from "./ConcertList";
import ConcertDetails from "../components/ConcertDetails";
import tmApiKey from "../tmApiKey";

const url = tmApiKey;
const venueUrl = "&venueId=";
const sortUrl = "&sort=date,asc&page=0&size=20";

const eventsUrl = "http://localhost:3000/api/v1/events";

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
    this.setState({ currentConcert: null });
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
    return this.state.concerts.find(concert => concert.id === id);
  };

  setConcert = id => {
    this.setState({
      currentConcert: id
    });
  };

  postEvent = event => {
    let body = JSON.stringify(event);
    fetch(eventsUrl, {
      method: "POST",
      body: body,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    // .then(() => window.history.pushState())
  };

  render() {
    return (
      <Grid padded columns={3}>
        {/* <button onClick={() => console.log(this.state)}>show state</button> */}
        <Grid.Row>
          <Grid.Column width={3}>
            <VenueList
              postEvent={this.postEvent}
              fetchConcerts={this.fetchConcerts}
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <ConcertList
              concerts={this.state.concerts}
              setConcert={this.setConcert}
            />
          </Grid.Column>
          <Grid.Column width={7}>
            {this.state.currentConcert ? (
              <ConcertDetails
                concert={this.findConcert(this.state.currentConcert)}
              />
            ) : null}
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>
      </Grid>
    );
  }
}

export default TicketsContainer;
