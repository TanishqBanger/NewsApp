import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
      <Router>
      <Navbar/>
      <Switch>
        <Route path="/"><News pageSize={5} country="us" category="general"/></Route>
        <Route path="/business"><News pageSize={5} country="us" category="general"/></Route>
        <Route path="/entertainment"><News pageSize={5} country="us" category="general"/></Route>
        <Route path="/general"><News pageSize={5} country="us" category="general"/></Route>
        <Route path="/health"><News pageSize={5} country="us" category="general"/></Route>
        <Route path="/science"><News pageSize={5} country="us" category="general"/></Route>
        <Route path="/technology"><News pageSize={5} country="us" category="general"/></Route>
      </Switch>
      </Router>
      </div>
    );
  }
}

export default App;