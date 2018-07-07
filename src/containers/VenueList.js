import React, { Component } from "react";
import { Menu, Header, Container, Button } from "semantic-ui-react";

import NewCustomEvent from "../components/NewCustomEvent";

class VenueList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "theAnthem",
      createCustom: false
    };
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.props.fetchConcerts(name);
  };

  render() {
    const { activeItem } = this.state;
    return (
      <Container>
        <br />
        <Header as="h4">VENUES</Header>
        <Menu fluid vertical>
          <Menu.Item
            name="theAnthem"
            active={activeItem === "theAnthem"}
            onClick={this.handleItemClick}
          >
            The Anthem
          </Menu.Item>
          <Menu.Item
            name="blackCat"
            active={activeItem === "blackCat"}
            onClick={this.handleItemClick}
          >
            Black Cat
          </Menu.Item>
          <Menu.Item
            name="echoStage"
            active={activeItem === "echoStage"}
            onClick={this.handleItemClick}
          >
            EchoStage
          </Menu.Item>
          <Menu.Item
            name="nineThirtyClub"
            active={activeItem === "nineThirtyClub"}
            onClick={this.handleItemClick}
          >
            9:30 Club
          </Menu.Item>
          <Menu.Item
            name="rockAndRollHotel"
            active={activeItem === "rockAndRollHotel"}
            onClick={this.handleItemClick}
          >
            Rock and Roll Hotel
          </Menu.Item>
        </Menu>
        <br />
        <Header as="h5">Can't find what you're looking for?</Header>
        <Button primary
          onClick={() => {
            this.setState({ createCustom: !this.state.createCustom });
          }}
        >
          Create Custom Plan
        </Button>
        {this.state.createCustom ? <NewCustomEvent postEvent={this.props.postEvent}/> : null}
      </Container>
    );
  }
}

export default VenueList;
