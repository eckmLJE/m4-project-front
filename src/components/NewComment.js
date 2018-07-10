import React, { Component } from "react";
import { Form, TextArea, Button, Container } from "semantic-ui-react";

class NewComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentContent: ""
    };
  }

  handleTextArea = (event, data) => {
    this.setState({
      commentContent: data.value
    });
  };

  render() {
    return (
      <Container>
        <br />
        <Form>
          <TextArea
            onChange={this.handleTextArea}
            value={this.state.commentContent}
          />
          <br />
          <br />
          <Button
            onClick={e => {
              e.preventDefault();
              this.props.handleComment(this.state.commentContent);
            }}
            secondary
          >
            Submit Comment
          </Button>
        </Form>
      </Container>
    );
  }
}

export default NewComment;
