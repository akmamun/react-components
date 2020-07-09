import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ModalExample from "./components/Modal/ModalExample";
import Home from "./components/Home";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/modal" component={ModalExample} />
      </Switch>
    </Router>
  );
}
