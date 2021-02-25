import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Layout from "./Layout";
import App from "~/pages/App/App";
import "antd/dist/antd.less";

export default function Index() {
  return (
    <Router>
      <Layout />
      <Switch>
        <Route path="/app">
          <App />
        </Route>
      </Switch>
    </Router>
  );
}
