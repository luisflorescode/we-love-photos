import React from "react";

import "./styles/PhotosList.css";
import ModalState from "./ModalState";

class PhotosList extends React.Component {
  state = {
    modalIsOpen: false
  };

  handleOpenModal = event => {
    this.setState({ modalIsOpen: true });
  };

  handleCloseModal = event => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    const albumPhotos = this.props.photos.filter(
      albumPhoto => String(albumPhoto.albumId) === this.props.id
    );
    return (
      <React.Fragment>
        <ul className="list-unstyled grid">
          {albumPhotos.map(photo => {
            return (
              <li className="photoList-item" key={photo.id}>
                <figure className="photo-imgContainer">
                  <ModalState src={photo.thumbnailUrl} url={photo.url} />
                </figure>
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default PhotosList;
