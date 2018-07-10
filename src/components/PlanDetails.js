import React, { Component } from "react";
import { Container, Header, Segment, Divider, Button } from "semantic-ui-react";

import NewComment from "./NewComment";



class PlanDetails extends Component {
  constructor() {
    super();
    this.state = {
      createComment: false
    };
  }

  handleComment = content => {
    this.props.postComment(content)
    this.setState({ createComment: false });
  };

  render() {
    let planComments = this.props.comments.filter(
      comment => comment.attributes["event-id"] == this.props.plan.id
    );
    return (
      <Container>
        <br />
        <Header as="h4">PLAN DETAIL</Header>
        <Segment>
          <h3>{this.props.plan.attributes.name}</h3>
          <h4>{this.props.plan.attributes.venue}</h4>
          <h4>{this.props.plan.attributes.date}</h4>

          {planComments.length > 0
            ? planComments.map(comment => (
                <Container key={comment.id}>
                  <Divider />
                  <h5>
                    Comment by{" "}
                    {
                      this.props.users.find(
                        user => user.id == comment.attributes["user-id"]
                      ).attributes.username
                    }
                  </h5>
                  <p>{comment.attributes.content}</p>
                </Container>
              ))
            : null}
          <Divider />
          {this.state.createComment ? null : (
            <Button
              onClick={() =>
                this.setState({ createComment: !this.state.createComment })
              }
              secondary
            >
              Add Comment
            </Button>
          )}

          {this.state.createComment ? (
            <NewComment handleComment={this.handleComment} />
          ) : null}
        </Segment>
      </Container>
    );
  }
}

export default PlanDetails;
