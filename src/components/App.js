import React, { Component } from 'react';
import Navbar from './navbar/Navbar';
import Home from './home/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar/>
        </header>
        <Home/>
      </div>
    );
  }
}

export default App;
