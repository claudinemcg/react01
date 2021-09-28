import React, { Component } from 'react'
import {choice} from './helpers'
import Coin from './Coin';

class CoinContainer extends Component {
    static defaultProps = { 
        coins :[
            { side: 'heads', imgSrc:'https://upload.wikimedia.org/wikipedia/en/2/26/Common_face_of_one_euro_coin.jpg'},
            { side: 'tails', imgSrc:'https://upload.wikimedia.org/wikipedia/en/0/0a/Eurocoin.ie.100.gif' }
        ]
    }
    constructor(props){
        super(props);
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        };
        this.handleClick= this.handleClick.bind(this);
        this.flipCoin = this.flipCoin.bind(this);
    }
    flipCoin () {
        const newCoin = choice(this.props.coins);
        this.setState(st => { //st is the old state
            return {
                currCoin: newCoin,
                nFlips: st.nFlips += 1,
                nHeads: st.nHeads += (newCoin.side === 'heads' ? 1 : 0),
                nTails: st.nTails += (newCoin.side === 'tails' ? 1 : 0)
            }
        })
    }

    // longer way
    // flipCoin() {
        //const newCoin = choice(this.props.coins);
        // this.setState(st => { //st is the old state
        //     let newState = {
        //         ...st, // puts in values from st (old state- this.state above) that we aren't changing yet- so nHeads and nTails
        //         currCoin: newCoin,
        //         nFlips: st.nFlips + 1,
        //     }
        //     if (newCoin.side === 'heads') {
        //         newState.nHeads += 1;
        //     } else {
        //         newState.nTails += 1;
        //     }
        //     return newState;
        // })

    handleClick(e) {
        this.flipCoin();
    }


    render(){ 
        return(
            <div className="CoinContainer">
                <h2>Let's Flip a Coin</h2>
                {/* <Coin side={this.state.currCoin.side} imgSrc={this.state.currCoin.imgSrc}/> */}
                {this.state.currCoin && <Coin info={this.state.currCoin}
                />} 
                {/* if currCoin is true- ie not null-> show coin,
                 if it's null show no coin */}

                <button onClick={this.handleClick}>Flip the coin</button>
                
                <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} heads and {this.state.nTails} tails. </p>
            </div>
        )
    }
}

export default CoinContainer;