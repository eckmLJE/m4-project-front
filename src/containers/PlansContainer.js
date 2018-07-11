import React, { Component } from "react";
import { Grid, Container } from "semantic-ui-react";

import PlansList from "../components/PlansList";
import PlanDetails from "../components/PlanDetails";
import PlanFriends from "../components/PlanFriends";

const plansUrl = "http://localhost:3000/api/v1/events";
const updatePlanUrl = "http://localhost:3000/api/v1/updateplan";
const commentsUrl = "http://localhost:3000/api/v1/comments";

class PlansContainer extends Component {
  constructor() {
    super();
    this.state = {
      plans: [],
      users: [],
      comments: [],
      currentPlan: null,
      updated: false
    };
  }

  fetchPlans = () => {
    console.log("fetchPlans reached");
    let token = localStorage.getItem("token");
    fetch(plansUrl, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(json =>
        this.setState({
          plans: json.data,
          users: json.included.filter(included => included.type === "users"),
          comments: json.included.filter(
            included => included.type === "comments"
          )
        })
      );
  };

  setPlan = id => {
    this.setState({
      currentPlan: this.state.plans.find(plan => plan.id === id)
    });
  };

  updatePlan = () => {
    let userPlan = {
      id: this.state.currentPlan.id,
      user_id: this.props.currentUserId
    };
    let body = JSON.stringify(userPlan);
    console.log(body);
    fetch(updatePlanUrl, {
      method: "POST",
      body: body,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(this.fetchPlans);
  };

  componentDidMount = () => {
    this.fetchPlans();
  };

  postComment = content => {
    let comment = {
      user_id: this.props.currentUserId,
      event_id: this.state.currentPlan.id,
      content: content
    };
    let body = JSON.stringify(comment);
    fetch(commentsUrl, {
      method: "POST",
      body: body,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    }).then(this.fetchPlans);
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
        <br />
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
                  <PlanDetails
                    plan={this.state.currentPlan}
                    comments={this.state.comments}
                    users={this.state.users}
                    currentUserId={this.props.currentUserId}
                    postComment={this.postComment}
                    updatePlan={this.updatePlan}
                  />
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
