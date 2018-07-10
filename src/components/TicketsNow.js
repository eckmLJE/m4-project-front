import React from "react";
import { Segment, Header } from "semantic-ui-react";

const TicketsNow = props => {
  return (
    <div>
      <br />
      <Header as="h4">TICKET DETAIL</Header>
      <Segment style={{ height: "75vh", overflowY: "hidden" }}>
        <iframe
          title="tickets"
          width="100%"
          height="100%"
          src={props.concert.url}
        />
      </Segment>
    </div>
  );
};

export default TicketsNow;