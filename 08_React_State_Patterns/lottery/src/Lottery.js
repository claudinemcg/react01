import React, { Component } from 'react'
import LottoBall from './LottoBall'
import './Lottery.css'

class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        numBalls: 6,
        maxNum: 40
    }
    constructor(props) {
        super(props);
        this.state = { nums: Array.from({ length: this.props.numBalls }) };
        // creates new array the length of the numBalls prop
        this.handleClick = this.handleClick.bind(this);
    }

    generate() {
        this.setState(currState => ({
            // currState is callback
            nums: currState.nums.map(
                n => Math.floor(Math.random() * this.props.maxNum) + 1
                // want it to be 1 -40 would give 0 - 39 without +1
            )
        }));
    }
    handleClick() {
        this.generate();
    }

    render() {
        return (
            <section className="Lottery">
                <h1>{this.props.title}</h1>
                <div>
                    {this.state.nums.map(n => <LottoBall num={n} />)}
                </div>
                <button onClick={this.handleClick}>Generate</button>

            </section >
        )
    }
}

export default Lottery;
