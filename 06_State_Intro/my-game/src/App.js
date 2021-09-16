import React, { Component } from 'react'
import Game from "./Game";
import Rando from './Rando'
import './App.css';

// function App() {
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Rando maxNum={7} />
      </div>
    );
  }
}

export default App;
