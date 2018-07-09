import React, { Component } from "react";
import { Input, Button, Header } from "semantic-ui-react";

class NewCustomEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: "",
      eventVenue: "",
      eventDate: ""
    };
  }

  handleInput = data => {
    this.setState({
      [`${data.name}`]: data.value
    });
  };

  render() {
    return (
      <div>
        <br />
        <Header as="h4">CUSTOM PLAN</Header>
        <Input
          fluid
          type="text"
          onChange={(e, d) => this.handleInput(d)}
          name="eventName"
          placeholder="Event Name"
          value={this.state.eventName}
        />
        <Input
          fluid
          type="text"
          onChange={(e, d) => this.handleInput(d)}
          name="eventVenue"
          placeholder="Event Venue"
          value={this.state.eventVenue}
        />
        <Input
          fluid
          type="date"
          onChange={(e, d) => this.handleInput(d)}
          name="eventDate"
          value={this.state.eventDate}
        />
        <br />
        <br />
        <Button
          onClick={() =>
            this.props.postEvent({
              name: this.state.eventName,
              venue: this.state.eventVenue,
              date: this.state.eventDate
            })
          }
          primary
        >
          Start Plan
        </Button>
      </div>
    );
  }
}

export default NewCustomEvent;
