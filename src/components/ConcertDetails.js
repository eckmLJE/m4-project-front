import React from "react";
import { Container, Image, Header, Segment } from "semantic-ui-react";

const ConcertDetails = props => {
  return (
    <div>
      <Header as="h4">CONCERT DETAIL</Header>
      <Segment>
        <Image
          src={props.concert.images.find(image => image.width > 500).url}
        />
      </Segment>
      <Segment>{props.concert.name}</Segment>
    </div>
  );
};

export default ConcertDetails;
