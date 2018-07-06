import React, { Component } from "react";
import { Container, Header, Menu } from "semantic-ui-react";

class ConcertList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.props.setConcert(name);
  };

  render() {
    const { activeItem } = this.state;
    return (
      <Container>
        <Header as="h4">CONCERTS</Header>
        <Menu fluid vertical>
          {this.props.concerts.map(concert => (
            <Menu.Item
              active={activeItem === concert.id}
              className="concert-list-item"
              key={concert.id}
              name={concert.id}
              onClick={this.handleItemClick}
            >
              <Header as="h4">{concert.name}</Header>
              <p>{concert.dates.start.localDate}</p>
            </Menu.Item>
          ))}
        </Menu>
      </Container>
    );
  }
}

export default ConcertList;
