import React from "react";

import "./styles/Layout.css";
import Header from "./Header";

function Layout(props) {
  return (
    <React.Fragment>
      <Header />
      <div className="page-container">{props.children}</div>
    </React.Fragment>
  );
}

export default Layout;
