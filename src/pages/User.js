import React from "react";

import UserProfile from "../components/UserProfile";

class User extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const response = await fetch(
        `http://jsonplaceholder.typicode.com/users/${
          this.props.match.params.userId
        }`
      );
      const data = await response.json();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return "Loading...";
    }

    if (this.state.error) {
      return `Error: ${this.state.error.message}`;
    }

    return (
      <React.Fragment>
        <UserProfile user={this.state.data} />
      </React.Fragment>
    );
  }
}

export default User;
