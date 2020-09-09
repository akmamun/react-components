import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ModalExample from "./components/modal/ModalExample";
import Home from "./components/Home";
import Login from "./components/login/Login";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/modal" component={ModalExample} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}
