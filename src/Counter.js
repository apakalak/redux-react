import React, { Component } from 'react';
import './Counter.css';

/*class Counter extends React.Component{
    render() {
        return (
            <div>
                <h1>{this.props.value}</h1>
                <button onClick={this.props.onDecrement}>-</button>
                <button onClick={this.props.onIncrement}>+</button>
            </div>
        )
    }
}*/

//React 0.14 -  React components can be simple function returning components
const Counter = ({value, onDecrement, onIncrement}) => {
    return(
        <div>
            <h1>{value}</h1>
            <button onClick={onDecrement}>-</button>
            <button onClick={onIncrement}>+</button>
        </div>
    )
}

export default Counter