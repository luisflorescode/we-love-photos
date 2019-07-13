import React from "react";
import { Link } from "react-router-dom";

import "./styles/ResultList.css";

class ResultList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled">
        {this.props.results.map(result => {
          return (
            <li className="resultList-item" key={result.id}>
              <Link to={`/user/${result.id}`}>
                <div className="result-container">
                  <div className="result-profile">
                    <figure className="result-photoContainer" />
                    <div className="result-user">
                      <span className="user-username">@{result.username}</span>
                      <span className="user-name">{result.name}</span>
                    </div>
                  </div>
                  <span className="user-see">See Albums</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ResultList;
