import React from "react";
import "./assets/App.css";

import Create from "./components/Create";
import Edit from "./components/Edit";
import Index from "./components/Index";
import Show from "./components/Show";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Link to={"/"}>Home</Link>
      <Link to={"/index"}>index</Link>
      <Link to={"/create"}>create</Link>
      <h1>Novel</h1>
      <Switch>
        <Route exact path="/create" component={Create} />
        <Route path="/index" component={Index} />
        <Route path="/edit/:id" component={Edit} />
        <Route path="/show/:id" component={Show} />
      </Switch>
    </Router>
  );
}

export default App;
