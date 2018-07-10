import React from "react";
import { Container, Header, Segment, Image } from "semantic-ui-react";
import moment from "moment";

const PlanDetails = props => {
  
  return (
    <Container>
      <br />
      <Header as="h4">PLAN DETAIL</Header>
      <Segment>
        <h5>{props.plan.attributes.name}</h5>
        <p>{props.plan.attributes.venue}</p>
        <p>{props.plan.attributes.date}</p>
      </Segment>
    </Container>
  );
};

export default PlanDetails;
