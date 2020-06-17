import React from "react";
import "./assets/App.css";

import Create from "./components/Create";
import Edit from "./components/Edit";
import Index from "./components/Index";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Link to={"/"}>Home</Link>
      <Link to={"/index"}>index</Link>
      <Link to={"/create"}>create</Link>
      <Switch>
        <Route exact path="/create" component={Create} />
        <Route path="/index" component={Index} />
        <Route path="/edit/:id" component={Edit} />
      </Switch>
    </Router>
  );
}

export default App;
