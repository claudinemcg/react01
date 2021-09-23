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
        this.state = { nums: Array.from({ length: this.props.maxBalls }) };
        this.handleClick = this.handleClick.bind(this);
    }

    generate() {

    }

    handleClick() {
        this.generate();
    }

    render() {
        return (
            <section>
                <h1>{this.props.title}</h1>
                <div>
                    {this.state.nums.map(n => <LottoBall num={n} />)}
                </div>
                <button onClick={this.handleClick}>Generate</button>

            </section>
        )
    }
}

export default Lottery;
