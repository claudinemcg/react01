import React, { Component } from 'react'

class BrokenClick extends Component {
    constructor(props) {
        super(props);
        this.state = { clicked: false };
        this.handleClick = this.handleClick.bind(this); // otherwise won't be able to find handleClick on onClick below
    }
    handleClick(e) {
        this.setState({ clicked: true });
    }
    render() {
        return (
            <div>
                <h1>{this.state.clicked ? 'Clicked' : 'Not Clicked'}</h1>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        )
    }
}

export default BrokenClick;