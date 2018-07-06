import React, { Component } from "react";
import { Menu, Header, Container } from "semantic-ui-react";

class VenueList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        activeItem: "theAnthem"
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
        <Header as="h4">VENUES</Header>
        <Menu vertical relaxed>
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
            9:30 CLUB
          </Menu.Item>
          <Menu.Item
            name="rockAndRollHotel"
            active={activeItem === "rockAndRollHotel"}
            onClick={this.handleItemClick}
          >
            Rock and Roll Hotel
          </Menu.Item>
        </Menu>
      </Container>
    );
  }
}

export default VenueList;
