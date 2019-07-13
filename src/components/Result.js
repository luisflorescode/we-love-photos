import React from "react";

import "./styles/Result.css";

class Result extends React.Component {
  render() {
    return (
      <div className="result-container">
        <div className="result-profile">
          <figure className="result-photoContainer" />
          <div className="result-user">
            <span className="user-username">@username</span>
            <span className="user-name">name</span>
          </div>
        </div>
        <span className="user-see">See Albums</span>
      </div>
    );
  }
}

export default Result;
