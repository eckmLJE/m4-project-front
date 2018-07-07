import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

import PlansList from "../components/PlansList";
import PlanDetails from "../components/PlanDetails";

const plansUrl = "http://localhost:3000/api/v1/events";

class PlansContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plans: [],
      user: [],
      currentPlan: null
    };
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    this.props.fetchConcerts(name);
  };

  fetchPlans = () => {
    fetch(plansUrl)
      .then(res => res.json())
      .then(json =>
        this.setState({
          plans: json.data,
          users: json.included
        })
      );
  };

  componentDidMount = () => {
    this.fetchPlans();
  };

  render() {
    return (
      <Grid padded columns={3}>
        <Grid.Row>
          <Grid.Column width={4}>
            <PlansList
              setPlan={this.handleItemClick}
              plans={this.state.plans}
            />
          </Grid.Column>
          <Grid.Column width={8}>
            {this.state.currentPlan ? <PlanDetails /> : null}
          </Grid.Column>
          <Grid.Column width={4}>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default PlansContainer;
