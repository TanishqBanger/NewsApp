import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
      <Router>
      <Navbar/>
      <Link to='/'></Link>
      <Link to='/business'></Link>
      <Link to='/entertainment'></Link>
      <Link to='/general'></Link>
      <Link to='/health'></Link>
      <Link to='/science'></Link>
      <Link to='/sports'></Link>
      <Link to='/technology'></Link>
      <Routes>
      <Route exact path='/' element={<News pageSize={5} country="us" category="general"/>} />
      <Route path='/business' element={<News pageSize={5} country="us" category="business"/>} />
      <Route path='/entertainment' element={<News pageSize={5} country="us" category="entertainment"/>} />
      <Route path='/general' element={<News pageSize={5} country="us" category="general"/>} />
      <Route path='/health' element={<News pageSize={5} country="us" category="health"/>} />
      <Route path='/science' element={<News pageSize={5} country="us" category="science"/>} />
      <Route path='/sports' element={<News pageSize={5} country="us" category="sports"/>} />
      <Route path='/technology' element={<News pageSize={5} country="us" category="technology"/>} />
    
      </Routes>
        {/* <Route path="/"><News pageSize={5} country="us" category="general"/></Route>
        <Route path="/business"><News pageSize={5} country="us" category="business"/></Route>
        <Route path="/entertainment"><News pageSize={5} country="us" category="entertainment"/></Route>
        <Route path="/general"><News pageSize={5} country="us" category="general"/></Route>
        <Route path="/health"><News pageSize={5} country="us" category="health"/></Route>
        <Route path="/science"><News pageSize={5} country="us" category="science"/></Route>
        <Route path="/sports"><News pageSize={5} country="us" category="sports"/></Route>
        <Route path="/technology"><News pageSize={5} country="us" category="technology"/></Route> */}
      </Router>
      </div>
    );
  }
}

export default App;