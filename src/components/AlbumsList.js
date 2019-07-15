import React from "react";
import { Link } from "react-router-dom";

import "./styles/AlbumsList.css";

class AlbumsList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2 className="albumsList-title">Albums</h2>
        <div className="container">
          <ul className="list-unstyled row">
            {this.props.albums.map(album => {
              return (
                <li className="albumsList-item col-4" key={album.id}>
                  <figure className="album-imgContainer">
                    <Link to={`/album/${this.props.user.id}/${album.id}`}>
                      <img
                        className="album-image"
                        src={`https://picsum.photos/200/300?random=${
                          album.id
                        }}`}
                        alt="AlbumImage"
                      />
                    </Link>
                  </figure>
                  <h3 className="album-title">{album.title}</h3>
                </li>
              );
            })}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default AlbumsList;
