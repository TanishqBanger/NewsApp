
import './App.css';

import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import NewsItem from './Components/NewsItem';

class App extends Component {
  render() {
    return (
      <div>
      <Navbar/>
      <News/>
      <NewsItem/>
      </div>
    );
  }
}

export default App;