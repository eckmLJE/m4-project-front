import React, { Component } from "react";
import { Input, Button, Header } from "semantic-ui-react";

class NewCustomEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventName: "",
      eventVenue: "",
      eventDate: "",
      planCreated: false
    };
  }

  handleInput = data => {
    this.setState({
      [`${data.name}`]: data.value
    });
  };

  handleCustomSubmit = () => {
    this.props.postEvent({
      name: this.state.eventName,
      venue: this.state.eventVenue,
      date: this.state.eventDate
    })
    this.setState({
      planCreated: true
    })
  }

  render() {
    return (
      <div>
        <br />
        <Header as="h4">CUSTOM PLAN</Header>
        {this.state.planCreated ? (
          <Header as="h4">Plan Created! Go to PLANS</Header>
        ) : (
          <div>
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
              onClick={this.handleCustomSubmit}
              primary
            >
              Start Plan
            </Button>
          </div>
        )}
      </div>
    );
  }
}

export default NewCustomEvent;
