import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
      <Router>
      <Navbar/>
      <Switch>
        <Route path="/"><News pageSize={5} country="us" category="general"/></Route>
        <Route path="/business"><News pageSize={5} country="us" category="business"/></Route>
        <Route path="/entertainment"><News pageSize={5} country="us" category="entertainment"/></Route>
        <Route path="/general"><News pageSize={5} country="us" category="general"/></Route>
        <Route path="/health"><News pageSize={5} country="us" category="health"/></Route>
        <Route path="/science"><News pageSize={5} country="us" category="science"/></Route>
        <Route path="/sports"><News pageSize={5} country="us" category="sports"/></Route>
        <Route path="/technology"><News pageSize={5} country="us" category="technology"/></Route>
      </Switch>
      </Router>
      </div>
    );
  }
}

export default App;