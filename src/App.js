import React, { Component } from 'react';

import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Ruls from './Components/Ruls';
import Registration from './Components/Registration';


class App extends Component {
  render() {
    return (
      <div className="App">

      <Header/>
      <About/>
      <Ruls/>
      <Registration/>
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>*/}

      </div>

    );
  }
}

export default App;
