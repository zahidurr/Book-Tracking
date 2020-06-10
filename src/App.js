import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import BookShelves from "./components/BookShelves";
import Search from "./components/Search";
import ErrorPage404 from "./components/ErrorPage404";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" component={BookShelves} />
          <Route path="/search" component={Search} />
          <Route component={ErrorPage404} />
        </Switch>
      </div>
    );
  }
}

export default App;
