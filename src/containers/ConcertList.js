import React, { Component } from "react";
import { Container, Header, Menu, Segment } from "semantic-ui-react";
import moment from "moment";

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
      <Container className="concertList">
        <br />
        <Header as="h4">CONCERTS</Header>
        <Segment style={{ height: "75vh", overflowY: "scroll" }}>
          <Menu fluid vertical>
            {this.props.concerts.map(concert => (
              <Menu.Item
                active={activeItem === concert.id}
                className="concert-list-item"
                key={concert.id}
                name={concert.id}
                onClick={this.handleItemClick}
              >
                {/* <Image size="medium" src={concert.images.find(image => image.width > 500).url} /> */}
                <Header as="h4">{concert.name}</Header>
                <p>
                  {moment(concert.dates.start.localDate).format(
                    "MMMM Do, YYYY"
                  )}
                </p>
              </Menu.Item>
            ))}
          </Menu>
        </Segment>
      </Container>
    );
  }
}

export default ConcertList;
