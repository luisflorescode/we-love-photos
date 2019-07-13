import React from "react";
import { Link } from "react-router-dom";

import "./styles/UserProfile.css";

class UserProfile extends React.Component {
  render() {
    return (
      <div className="userProfile-container">
        <Link className="userProfile-link" to={`/user/${this.props.user.id}`}>
          <figure className="userProfile-imgContainer" />
          <div className="userProfile-info">
            <strong className="info-username">
              @{this.props.user.username}
            </strong>
            <span className="info-name">{this.props.user.name}</span>
          </div>
        </Link>
      </div>
    );
  }
}

export default UserProfile;
