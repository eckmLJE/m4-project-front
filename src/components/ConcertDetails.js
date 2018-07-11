import React, { Component } from "react";
import { Container, Image, Header, Segment, Button } from "semantic-ui-react";
import moment from "moment";

class ConcertDetails extends Component {
  constructor() {
    super();
    this.state = {
      concertCreated: false
    };
  }

  handleSubmit = () => {
    this.props.postEvent({
      name: this.props.concert.name,
      venue: this.props.concert._embedded.venues[0].name,
      date: this.props.concert.dates.start.localDate,
      user_id: this.props.currentUserId
    });
    this.setState({
      concertCreated: true
    });
  };

  render() {
    return (
      <Container>
        <br />
        <Header as="h4">CONCERT DETAIL</Header>
        <Segment style={{ height: "75vh", overflowY: "scroll" }}>
          <Image
            src={this.props.concert.images.find(image => image.width > 600).url}
          />
          <br />
          {this.state.concertCreated ? (
            <h4>Plan Created! Find it on PLANS</h4>
          ) : (
            <Button onClick={this.handleSubmit} fluid secondary>
              Start a Plan
            </Button>
          )}

          <h4>{this.props.concert.name}</h4>
          <p>Venue: {this.props.concert._embedded.venues[0].name}</p>
          <p>
            Date:{" "}
            {moment(this.props.concert.dates.start.localDate).format(
              "MMMM Do, YYYY"
            )}
          </p>
          <p>Time: {this.props.concert.dates.start.localTime}</p>
        </Segment>
      </Container>
    );
  }
}

export default ConcertDetails;
