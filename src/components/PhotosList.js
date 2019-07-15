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
      albumPhoto => albumPhoto.albumId == this.props.id
    );
    return (
      <React.Fragment>
        <div className="container">
          <ul className="list-unstyled row">
            {albumPhotos.map(photo => {
              return (
                <li className="photoList-item col-4" key={photo.id}>
                  <figure className="photo-imgContainer">
                    <ModalState src={photo.thumbnailUrl} url={photo.url} />
                  </figure>
                </li>
              );
            })}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default PhotosList;
