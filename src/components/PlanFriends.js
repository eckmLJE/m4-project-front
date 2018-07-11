import React, { Component } from "react";
import { Segment, Header } from "semantic-ui-react";

class PlanFriends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  componentWillUpdate = () => {};

  render() {
    const relatedIds = this.props.plan.relationships.users.data.map(
      user => user.id
    );
    const foundFriends = this.props.findUsers(relatedIds);
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
  }
}

export default PlanFriends;
