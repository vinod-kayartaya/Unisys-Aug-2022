import React, { Component } from 'react';
import './Counter.css';
export class Counter extends Component {
    state = { count: 0 };

    increment = () => {
        // this.state is a special member of a component
        // it should not be mutated directly
        // you should use the setSate() method inherited from Component class
        // calling setState() not only mutates/changes the state, but also
        // invokes the render methods (re-renders the component)

        // this.state.count++; // this should not be done; use setState() to change the state
        this.setState({ count: this.state.count + 1 });
    };
    decrement = () => {
        console.log('this is', this);
        // this.state.count--; // this should not be done; use setState() to change the state
        this.setState({ count: this.state.count - 1 });
    };
    reset() {
        console.log('this is', this);
        // when using a regular function (and not an arrow function), the context switch happens.
        // When we assigned this method to the button, onClick={this.reset}, the function becomes
        // part of the button (and not as a member method of the Counter object). Hence we do get an
        // error for "this.setState(..)". One way to fix this is to convert this into an arrow function.
        // And another way is to bind this to the class
        this.setState({ count: 0 });
    }
    render() {
        console.log('render() is called!');
        return (
            <div>
                <h2>Counter App</h2>
                <h3>Count is {this.state.count}</h3>
                <button className='btn btn-primary' onClick={this.decrement}>
                    Decrement
                </button>
                <button className='btn btn-primary' onClick={this.increment}>
                    Increment
                </button>
                <button
                    className='btn btn-primary'
                    onClick={this.reset.bind(this)}
                >
                    Reset
                </button>
            </div>
        );
    }
}

export default Counter;
