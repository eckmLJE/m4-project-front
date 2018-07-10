import React from "react";
import { Segment, Header } from "semantic-ui-react";

const PlanFriends = props => {
  const relatedIds = props.plan.relationships.users.data.map(user => user.id);
  const foundFriends = props.findUsers(relatedIds);
  return (
    <div>
      <br />
      <Header as="h4">Interested Friends</Header>
      {foundFriends.length > 0 ? (
        <Segment>
          {foundFriends.map(user => (
            <h2 key={user.id}>{user.attributes.username}</h2>
          ))}
        </Segment>
      ) : (
        <Segment>No friends have signed on to this event</Segment>
      )}
    </div>
  );
};

export default PlanFriends;
