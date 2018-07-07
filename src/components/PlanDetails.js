import React from "react";
import { Container, Header, Segment, Image } from "semantic-ui-react";
import moment from "moment";

const PlanDetails = props => {
  return (
    <Container>
      <br />
      <Header as="h4">CONCERT DETAIL</Header>
      <Segment>
        <Image
          src={props.concert.images.find(image => image.width > 600).url}
        />
      </Segment>
      <Segment>
        <h4>{props.concert.name}</h4>
        <p>Venue: {props.concert._embedded.venues[0].name}</p>
        <p>
          Date:{" "}
          {moment(props.concert.dates.start.localDate).format("MMMM Do, YYYY")}
        </p>
      </Segment>
    </Container>
  );
};

export default PlanDetails