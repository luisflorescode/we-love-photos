import React from "react";

import Header from "../components/Header";
import Searcher from "../components/Searcher";
import Result from "../components/Result";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Searcher />
        <Result />
      </React.Fragment>
    );
  }
}

export default Home;
