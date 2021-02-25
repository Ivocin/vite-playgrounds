import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./App";

export default function Index() {
  return (
    <Router>
      <Switch>
        <Route path="/app">
          <App />
        </Route>
      </Switch>
    </Router>
  );
}
