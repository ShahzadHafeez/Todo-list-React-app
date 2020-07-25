import React, { Component } from "react";
import "./App.css";
import List from "./components/List";
import NewList from "./components/NewList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function showOldList() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <h1 className="text-center">TODO </h1>
          <List />
        </div>
      </div>
    </div>
  );
}

function newList() {
  return <NewList />;
}

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={showOldList} />
          <Route path="/new" exact component={newList} />
        </Switch>
      </Router>
    );
  }
}

export default App;
