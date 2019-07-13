import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "../pages/Home";
import User from "../pages/User";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/user/:userId" component={User} />
          <Route exact path="/" component={Home} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
