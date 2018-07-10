import React from "react";
import { Container, Header, Segment } from "semantic-ui-react";

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
