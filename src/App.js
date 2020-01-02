import React, { Component } from "react";
import "./App.css";
import Home from "./Components/Home";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Map from "./Components/Map";
export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Suggestions" render={() => <Map />} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;