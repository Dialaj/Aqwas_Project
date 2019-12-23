import React, { Component } from "react";
import './App.css';
import Home from './Components/Home';
import Suggestions from './Components/Suggestions';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import Map from './Components/Map'

export class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/Home" component={() => <Home />} />
          <Route path="/Suggestions" component={() => <Suggestions />} />
          <Route exact path="/" component={() => <Home />} />
          <Route exact path="/Map" component={() => <Map />} />
        </Switch>
      </BrowserRouter>

    )
    

  }
}
export default App