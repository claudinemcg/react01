import React, { Component } from 'react'
import Game from "./Game";
import Rando from './Rando'
import Button from './Button'
import BrokenClick from './BrokenClick'
import './App.css';

// function App() {
class App extends Component {
  render() {
    return (
      <div className='App'>
        <BrokenClick />
        {/* <Rando maxNum={7} /> */}
      </div>
    );
  }
}

export default App;
