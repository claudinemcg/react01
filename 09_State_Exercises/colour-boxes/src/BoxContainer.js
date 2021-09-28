import React, { Component } from 'react'
import Box from './Box'
import './BoxContainer.css'

class BoxContainer extends Component {
    static defaultProps = {
        numBoxes: 18,
        allColors: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
    }
    render(){
        const boxes = Array.from({length: this.props.numBoxes}).map(
        () => (<Box colors={this.props.allColors}/>));
        // create numBoxes e.g. if numBoxes = 18, there'll be 18 boxes

        return (
            <div className="BoxContainer">
                {boxes}
            </div>
        )
    }
}

export default BoxContainer;