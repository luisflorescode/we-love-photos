import React from "react";
import { Link } from "react-router-dom";

import Logo from "../images/logo.png";
import "./styles/Header.css";

class Header extends React.Component {
  render() {
    return (
      <header>
        <Link className="header" to={`/`}>
          <img className="header-logo" src={Logo} alt="headerLogo" />
          We Love Photos
        </Link>
      </header>
    );
  }
}

export default Header;
