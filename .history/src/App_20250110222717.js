import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {BrowserRouter as Router,Routes,Route,Link,} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

class App extends Component {
  pageSize=15;
  apiKey = process.env.REACT_APP_NEWS_API

  state = {
    progress: 0
  }
  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
      <Router>
      <Navbar/>
      <LoadingBar
        height={3}
        color="#f11946"
        progress={this.state.progress}
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
      <Route exact path='/' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="us" category="general"/>} />
      <Route exact path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country="us" category="business"/>} />
      <Route exact path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.apiKey}key="entertainment" pageSize={this.pageSize} country="us" category="entertainment"/>} />
      <Route exact path='/general' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="us" category="general"/>} />
      <Route exact path='/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country="us" category="health"/>} />
      <Route exact path='/science' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country="us" category="science"/>} />
      <Route exact path='/sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country="us" category="sports"/>} />
      <Route exact path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country="us" category="technology"/>} />
    
      </Routes>
        {/* <Route path="/"><News setProgress={this.setProgress apiKey={this.apiKey}} pageSize={this.pageSize} country="us" category="general"/></Route>
        <Route path="/business"><News setProgress={this.setProgress apiKey={this.apiKey}} pageSize={this.pageSize} country="us" category="business"/></Route>
        <Route path="/entertainment"><News setProgress={this.setProgress apiKey={this.apiKey}} pageSize={this.pageSize} country="us" category="entertainment"/></Route>
        <Route path="/general"><News setProgress={this.setProgress apiKey={this.apiKey}} pageSize={this.pageSize} country="us" category="general"/></Route>
        <Route path="/health"><News setProgress={this.setProgress apiKey={this.apiKey}} pageSize={this.pageSize} country="us" category="health"/></Route>
        <Route path="/science"><News setProgress={this.setProgress apiKey={this.apiKey}} pageSize={this.pageSize} country="us" category="science"/></Route>
        <Route path="/sports"><News setProgress={this.setProgress apiKey={this.apiKey}} pageSize={this.pageSize} country="us" category="sports"/></Route>
        <Route path="/technology"><News setProgress={this.setProgress apiKey={this.apiKey}} pageSize={this.pageSize} country="us" category="technology"/></Route> */}
      </Router>
      </div>
    );
  }
}

export default App;