import React from "react";
import { Link } from "react-router-dom";

import "./styles/UserProfile.css";
import UserPhoto from "./UserPhoto";

class UserProfile extends React.Component {
  render() {
    return (
      <div className="userProfile-container">
        <Link className="userProfile-link" to={`/user/${this.props.user.id}`}>
          <figure className="userProfile-imgContainer">
            <UserPhoto
              className="user-photo"
              email={this.props.user.email}
              alt="UserPhoto"
            />
          </figure>
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
