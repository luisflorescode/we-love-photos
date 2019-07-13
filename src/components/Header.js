import React from "react";
import { Link } from "react-router-dom";

import "./styles/Header.css";

class Header extends React.Component {
  render() {
    return (
      <header>
        <Link to={`/`}>
          <span className="header-logo">❤</span>We Love Photos
        </Link>
      </header>
    );
  }
}

export default Header;
