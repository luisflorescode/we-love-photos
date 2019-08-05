import React from "react";
import { Link } from "react-router-dom";

import "./styles/Header.css";

class Header extends React.Component {
  render() {
    return (
      <header>
        <Link className="header" to={`/`}>
          <span className="header-logo" role="img" aria-label="heart">
            ❤
          </span>
          We Love Photos
          <span role="img" aria-label="camera">
            📷
          </span>
        </Link>
      </header>
    );
  }
}

export default Header;
