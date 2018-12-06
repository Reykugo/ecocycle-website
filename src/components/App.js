import React, { Component } from 'react';
import Navbar from './navbar/Navbar';
import Home from './home/Home'
import ShareCo from './share&co/Share&Co';
import EcoScan from './eco-scan/EcoScan';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar/>
        </header>
        <Home/>
        <EcoScan/>
        <ShareCo/>
      </div>
    );
  }
}

export default App;
