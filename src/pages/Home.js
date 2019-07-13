import React from "react";

import Searcher from "../components/Searcher";
import ResultList from "../components/ResultList";

class Home extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const response = await fetch("http://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading) {
      return "Loading...";
    }

    return (
      <React.Fragment>
        <Searcher />
        <ResultList results={this.state.data} />
      </React.Fragment>
    );
  }
}

export default Home;
