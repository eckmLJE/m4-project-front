import React from "react";
import { Container, Image, Header, Segment } from "semantic-ui-react";
import moment from "moment";

const ConcertDetails = props => {
  return (
    <Container>
      <br/>
      <Header as="h4">CONCERT DETAIL</Header>
      <Segment>
        <Image
          src={props.concert.images.find(image => image.width > 600).url}
        />
      </Segment>
      <Segment>
        <h4>{props.concert.name}</h4>
        <p>Venue: {props.concert._embedded.venues[0].name}</p>
        <p>Date: {moment(props.concert.dates.start.localDate).format("MMMM Do, YYYY")}</p>
        <p>Time: {props.concert.dates.start.localTime}</p>
        <iframe title="tickets" width="100%" height="300px" src={props.concert.url} />
      </Segment>
    </Container>
  );
};

export default ConcertDetails;
