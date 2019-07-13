import React from "react";

import Header from "../components/Header";
import Searcher from "../components/Searcher";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Searcher />
      </div>
    );
  }
}

export default Home;
