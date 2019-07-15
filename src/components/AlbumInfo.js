import React from "react";
import { Link } from "react-router-dom";

import "./styles/AlbumInfo.css";

class AlbumInfo extends React.Component {
  render() {
    const albums = this.props.userAlbums.filter(
      album => String(album.id) === this.props.id
    );
    return (
      <div className="albumInfo-container">
        <ul className="list-unstyled row">
          {albums.map(album => {
            return (
              <li className="" key={album.id}>
                <h1 className="albumInfo-title">{album.title}</h1>
                <Link to={`/user/${this.props.user.id}`}>
                  <strong className="albumInfo-user">
                    by @{this.props.user.username}
                  </strong>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default AlbumInfo;