import React, { Component } from "react";
import { Container, Header, Menu } from "semantic-ui-react";
import moment from "moment";

class PlansList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: "plan"
    };
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.props.setPlan(name);
  };

  render() {
    const { activeItem } = this.state;
    return (
      <Container className="planList">
        <br />
        <Header as="h4">PLANS</Header>
        <Menu fluid vertical>
          {this.props.plans ? (
            this.props.plans.map(plan => (
              <Menu.Item
                active={activeItem === plan.id}
                className="plan-list-item"
                key={plan.id}
                name={plan.id}
                onClick={this.handleItemClick}
              >
                <Header as="h4">{plan.attributes.name}</Header>
                <p>{moment(plan.attributes.date).format("MMMM Do, YYYY")}</p>
              </Menu.Item>
            ))
          ) : (
            <Menu.Item>Currently No Plans -- Go Make One!</Menu.Item>
          )}
        </Menu>
      </Container>
    );
  }
}

export default PlansList;
