import React from "react";
import { Container, Header, Segment, Image } from "semantic-ui-react";
import moment from "moment";

const PlanDetails = (props) => {
  // let relatedUsers = [];
  // props.plan.relationships.users.data.forEach((user) => {
  //   relatedUsers.push(
  //     props.allUsers.find((foundUser) => foundUser.id === user.id)
  //   );
  // });

  return (
    <Container>
      <br />
      <Header as="h1">PLAN DETAIL</Header>
      {console.log(props)}
      <h2>{props.plan.attributes.name}</h2>
      <h3>{props.plan.attributes.venue}</h3>
      <h3>{props.plan.attributes.date}</h3>
    </Container>
  );
};

export default PlanDetails;
