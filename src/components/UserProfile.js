import React from "react";

import "./styles/UserProfile.css";
import UserPhoto from "./UserPhoto";

class UserProfile extends React.Component {
  render() {
    return (
      <div className="userProfile-container">
        <UserPhoto
          className="user-photo"
          email={this.props.user.email}
          alt="UserPhoto"
        />
        <div className="userProfile-info">
          <strong className="info-username">@{this.props.user.username}</strong>
          <span className="info-name">{this.props.user.name}</span>
        </div>
      </div>
    );
  }
}

export default UserProfile;
