import './App.css';
import Lottery from './Lottery'

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title='Mini Daily' numBalls={4} maxNum={25} />
    </div>
  );
}

export default App;
