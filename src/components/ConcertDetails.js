import React from "react";
import { Container, Image } from "semantic-ui-react";

const ConcertDetails = props => {
  return (
    <Container>
      <Image src={props.concert.images.find(image => image.width > 500).url} />
      <div>{props.concert.name}</div>
    </Container>
  );
};

export default ConcertDetails;
