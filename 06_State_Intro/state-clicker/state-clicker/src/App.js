import Random from './Random'
import './App.css';
import { Component } from 'react';

// function App() {
class App extends Component {
  render() {
    return (
      <div>
        <Random maxNum={10} isWinner={7} />
      </div>
    );
  }
}

export default App;
