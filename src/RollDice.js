import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css'

class RollDice extends Component {
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    }
    constructor(props){
        super(props);
        this.state= {
            die1 : 0,
            die2 : 0,
            isRolling : false
        };
        this.roll = this.roll.bind(this);
    }

    // Method to Roll Dice
    roll() {
        this.setState({
            die1: Math.floor(Math.random() * this.props.sides.length),
            die2: Math.floor(Math.random() * this.props.sides.length),
            isRolling: true
        });

        // setTimeout(() => {
        //     this.setState({rolling : false});
        // }, 1000);

        setTimeout(() => {
            this.setState({isRolling: false})
        }, 800);
    }

    render(){
        let die1 = this.state.die1;
        let die2 = this.state.die2;
        let dieFace = this.props.sides;

        return (
            <div className="RollDice">
                <Die number = {dieFace[die1]} rolling={this.state.isRolling}/>
                <Die number = {dieFace[die2]} rolling={this.state.isRolling}/>
                <button onClick={this.roll} disabled={this.state.isRolling}>
                    {this.state.isRolling ? "Rolling..." : "Roll Dice!"}
                </button>
            </div>
        );
    };
}

export default RollDice;