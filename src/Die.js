import React, { Component } from 'react';
import './Die.css'

class Die extends Component {
    render(){
        let dieNum = this.props.number;
        let dieClass = `fas fa-dice-${dieNum} fa-9x ${this.props.rolling && 'Die-shaking'}`;
        return(
            <div className="Die">
                <i className={dieClass}/>
            </div>
        );
    };
}

export default Die;