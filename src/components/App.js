import React, { Component } from 'react';
import Navbar from './navbar/Navbar';
import Home from './home/Home'
import ShareCo from './share&co/Share&Co';
import JeanFekoi from './jean-fekoi/JeanFekoi';
import Application from './application/Application';
import Footer from './footer/Footer';
import Team from './team/Team';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar/>
        </header>
        <Home/>
        <ShareCo/>
        <JeanFekoi/>
        <Team />
        <Application/>
        <Footer />
      </div>
    );
  }
}

export default App;
