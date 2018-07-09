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
      users: [],
      currentPlan: null
    };
  }

  fetchPlans = () => {
    fetch(plansUrl)
      .then((res) => res.json())
      .then((json) =>
        this.setState({
          plans: json.data,
          users: json.included
        })
      );
  };

  setPlan = (id) => {
    this.setState({
      currentPlan: this.state.plans.find((plan) => plan.id === id)
    });
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
              planState={this.state}
              setPlan={this.setPlan}
              plans={this.state.plans}
            />
          </Grid.Column>
          <Grid.Column width={8}>
            {this.state.currentPlan ? (
              <PlanDetails
                plan={this.state.currentPlan}
                allUsers={this.state.users}
              />
            ) : null}
          </Grid.Column>
          <Grid.Column width={4} />
        </Grid.Row>
      </Grid>
    );
  }
}

export default PlansContainer;
