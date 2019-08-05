import React from "react";
import { Link } from "react-router-dom";

import "./styles/AlbumsList.css";

class AlbumsList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2 className="albumsList-title">Albums</h2>
        <ul className="list-unstyled albums-grid">
          {this.props.albums.map(album => {
            return (
              <li className="albumsList-item" key={album.id}>
                <figure className="album-imgContainer">
                  <Link to={`/album/${this.props.user.id}/${album.id}`}>
                    <img
                      className="album-image"
                      src={`https://picsum.photos/1200/900?random=${album.id}}`}
                      alt="AlbumImage"
                    />
                  </Link>
                </figure>
                <h3 className="album-title">{album.title}</h3>
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default AlbumsList;
