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
import LoadingBar from "react-top-loading-bar";

class App extends Component {
  pageSize=15;
  render() {
    return (
      <div>
      <Router>
      <Navbar/>
      <LoadingBar
        color="#f11946"
        progress={10}
        onLoaderFinished={() => setProgress(0)}
      />
      <Link to='/'></Link>
      <Link to='/business'></Link>
      <Link to='/entertainment'></Link>
      <Link to='/general'></Link>
      <Link to='/health'></Link>
      <Link to='/science'></Link>
      <Link to='/sports'></Link>
      <Link to='/technology'></Link>
      <Routes>
      <Route exact path='/' element={<News pageSize={this.pageSize} country="us" category="general"/>} />
      <Route exact path='/business' element={<News pageSize={this.pageSize} country="us" category="business"/>} />
      <Route exact path='/entertainment' element={<News pageSize={this.pageSize} country="us" category="entertainment"/>} />
      <Route exact path='/general' element={<News pageSize={this.pageSize} country="us" category="general"/>} />
      <Route exact path='/health' element={<News pageSize={this.pageSize} country="us" category="health"/>} />
      <Route exact path='/science' element={<News pageSize={this.pageSize} country="us" category="science"/>} />
      <Route exact path='/sports' element={<News pageSize={this.pageSize} country="us" category="sports"/>} />
      <Route exact path='/technology' element={<News pageSize={this.pageSize} country="us" category="technology"/>} />
    
      </Routes>
        {/* <Route path="/"><News pageSize={this.pageSize} country="us" category="general"/></Route>
        <Route path="/business"><News pageSize={this.pageSize} country="us" category="business"/></Route>
        <Route path="/entertainment"><News pageSize={this.pageSize} country="us" category="entertainment"/></Route>
        <Route path="/general"><News pageSize={this.pageSize} country="us" category="general"/></Route>
        <Route path="/health"><News pageSize={this.pageSize} country="us" category="health"/></Route>
        <Route path="/science"><News pageSize={this.pageSize} country="us" category="science"/></Route>
        <Route path="/sports"><News pageSize={this.pageSize} country="us" category="sports"/></Route>
        <Route path="/technology"><News pageSize={this.pageSize} country="us" category="technology"/></Route> */}
      </Router>
      </div>
    );
  }
}

export default App;