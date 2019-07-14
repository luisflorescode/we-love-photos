import React from "react";

import UserProfile from "../components/UserProfile";
import AlbumsList from "../components/AlbumsList";

class User extends React.Component {
  state = {
    loading: true,
    error: null,
    userData: undefined,
    albumsData: undefined
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    Promise.all([
      fetch(
        `https://jsonplaceholder.typicode.com/users/${
          this.props.match.params.userId
        }`
      ),
      fetch(
        `https://jsonplaceholder.typicode.com/albums?userId=${
          this.props.match.params.userId
        }`
      )
    ])
      .then(([userRes, albumsRes]) =>
        Promise.all([userRes.json(), albumsRes.json()])
      )
      .catch(error => this.setState({ loading: false, error: error }))
      .then(([userData, albumsData]) =>
        this.setState({
          loading: false,
          userData: userData,
          albumsData: albumsData
        })
      )
      .catch(error => this.setState({ loading: false, error: error }));
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
        <UserProfile user={this.state.userData} />
        <AlbumsList albums={this.state.albumsData} />
      </React.Fragment>
    );
  }
}

export default User;
