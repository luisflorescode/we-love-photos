import React from "react";

import "./styles/Searcher.css";

class Searcher extends React.Component {
  render() {
    return (
      <div className="searcher-container">
        <span className="searcher-text">Search</span>
        <input className="form-control" type="text" />
      </div>
    );
  }
}

export default Searcher;
