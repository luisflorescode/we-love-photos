import React from "react";

import "./styles/PhotosList.css";
import Modal from "./Modal";

class ModalState extends React.Component {
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
    return (
      <React.Fragment>
        <img
          className="photo-image"
          src={this.props.src}
          alt="PhotoImage"
          onClick={this.handleOpenModal}
        />
        <Modal
          isOpen={this.state.modalIsOpen}
          onClose={this.handleCloseModal}
          url={this.props.url}
        />
      </React.Fragment>
    );
  }
}

export default ModalState;
