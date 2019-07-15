import React from "react";
import ReactDOM from "react-dom";

import "./styles/Modal.css";

function Modal(props) {
  if (!props.isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal" onClick={props.onClose}>
      <img src={props.url} alt="photoImg" />
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
