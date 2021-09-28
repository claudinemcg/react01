import React, { Component } from 'react'
import './Box.css'
import { choice } from './helpers'

class Box extends Component {
        constructor(props){
        super(props);
        this.state = { color: choice(this.props.colors)};
        this.handleClick = this.handleClick.bind(this);
    }
    pickColor(){
        let newColor;
        do { newColor = choice(this.props.colors);
         } while (newColor === this.state.color)
         // keep changing the color until it's differnt from the previous one ie if it's red, keep going until it's another colour
        this.setState({color: newColor});
        // when it's a different colour set the state
    }
    handleClick(){
        this.pickColor();
    }
    render(){
        return(
            <div 
            className="Box" 
            style={{backgroundColor: this.state.color}} 
            onClick = {this.handleClick}>
            </div>
        )
    }
}

export default Box;