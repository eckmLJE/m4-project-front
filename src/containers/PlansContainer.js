import React, { Component } from "react";
import { Grid, Container } from "semantic-ui-react";

import PlansList from "../components/PlansList";
import PlanDetails from "../components/PlanDetails";
import PlanFriends from "../components/PlanFriends";

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
      .then(res => res.json())
      .then(json =>
        this.setState({
          plans: json.data,
          users: json.included
        })
      );
  };

  setPlan = id => {
    this.setState({
      currentPlan: this.state.plans.find(plan => plan.id === id)
    });
  };

  componentDidMount = () => {
    this.fetchPlans();
  };

  findUsersByIds = arr => {
    let foundUsers = [];
    arr.forEach(id => {
      foundUsers.push(this.state.users.find(user => user.id === id));
    });
    return foundUsers;
  };

  render() {
    return (
      <div>
        {this.props.loggedIn ? (
          <Grid padded columns={4}>
            <Grid.Row>
              <Grid.Column width={4}>
                <PlansList
                  planState={this.state}
                  setPlan={this.setPlan}
                  plans={this.state.plans}
                />
              </Grid.Column>
              <Grid.Column width={6}>
                {this.state.currentPlan ? (
                  <PlanDetails plan={this.state.currentPlan} />
                ) : null}
              </Grid.Column>
              <Grid.Column width={6}>
                {this.state.currentPlan ? (
                  <PlanFriends
                    plan={this.state.currentPlan}
                    findUsers={this.findUsersByIds}
                  />
                ) : null}
              </Grid.Column>
              <Grid.Column width={1} />
            </Grid.Row>
          </Grid>
        ) : (
          <div>
            <br />
            <br />
            <br />
            <br />
            <Container>
              <h3>You are not currently logged in.</h3>
            </Container>
          </div>
        )}
      </div>
    );
  }
}

export default PlansContainer;
