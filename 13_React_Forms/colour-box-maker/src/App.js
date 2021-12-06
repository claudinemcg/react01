import React, {Component } from 'react'
import './App.css'
import BoxList from './BoxList';

class App extends Component {
  render(){
    return (
     
      <div>
        {/* //   <Box height={10} width={20} color="purple" />
       //   <Box height={20} width={10} color="teal" /> */}
    
        <BoxList />
      
      </div>
    );
  }
}

export default App;
