import React, { Component } from 'react'

class Random extends Component {
    constructor(props) {
        super(props);
        this.state = { num: 0 }
        this.changeNumber = this.changeNumber.bind(this);
    }

    changeNumber() {
        let rand = Math.floor(Math.random() * this.props.maxNum);
        this.setState({ num: rand })
    }

    render() {
        console.log(this.state.num);
        return (
            <div>
                <h1>Your Random Number is: {this.state.num}</h1>
                {(this.state.num === this.props.isWinner) ?
                    <h2>YOU WIN</h2>
                    : <button onClick={this.changeNumber}>
                        Random Number</button>
                }
            </div>
        )
    }
}

export default Random;