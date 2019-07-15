import React from "react";

import PhotosList from "../components/PhotosList";
import AlbumInfo from "../components/AlbumInfo";

class Album extends React.Component {
  state = {
    loading: true,
    error: null,
    userData: undefined,
    albumData: undefined,
    photosData: undefined
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
      ),
      fetch(
        `https://jsonplaceholder.typicode.com/albums/${
          this.props.match.params.albumId
        }/photos`
      )
    ])
      .then(([userRes, albumRes, photosRes]) =>
        Promise.all([userRes.json(), albumRes.json(), photosRes.json()])
      )
      .catch(error => this.setState({ loading: false, error: error }))
      .then(([userData, albumData, photosData]) =>
        this.setState({
          loading: false,
          userData: userData,
          albumData: albumData,
          photosData: photosData
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
        <AlbumInfo
          id={this.props.match.params.albumId}
          userAlbums={this.state.albumData}
          user={this.state.userData}
        />
        <PhotosList
          id={this.props.match.params.albumId}
          photos={this.state.photosData}
        />
      </React.Fragment>
    );
  }
}

export default Album;
