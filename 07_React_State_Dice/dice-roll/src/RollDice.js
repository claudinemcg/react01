import React, { Component } from 'react'
import Die from './Die';

class RollDice extends Component {
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    }
    constructor(props) {
        super(props);
        this.state = { die1: 'one', die2: 'two' }
    }

    render() {
        return (
            <div>
                <Die num={this.state.die1} />
                <Die num={this.state.die1} />

                <button >Roll Dice</button>
            </div>

        );
    }
}

export default RollDice;