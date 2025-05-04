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
      <News pageSize={5} country="us" category="sports"/>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;