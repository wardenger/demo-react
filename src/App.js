import React from 'react';
import logo from './logo.svg';
import './App.css';

import FunctionHello from './components/FunctionHello'
import ClassHello from './components/ClassHello'
import Clock from './components/Clock'
import ToggleEvent from './components/ToggleEvent'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <FunctionHello name="wardenger" />
      <ClassHello name="react" />
      <Clock />
      <ToggleEvent />
    </div>
  );
}

export default App;
