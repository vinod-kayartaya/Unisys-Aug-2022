import React, { Component } from 'react';
import './Toolbar.css';

export class Toolbar extends Component {
    render() {
        return (
            <div>
                {/* button.btn.btn-secondary*2{Decrement} */}
                <button
                    onClick={this.props.decrement}
                    className='btn btn-secondary'
                >
                    Decrement
                </button>
                <button
                    onClick={this.props.increment}
                    className='btn btn-secondary'
                >
                    Increment
                </button>
                <button
                    onClick={this.props.square}
                    className='btn btn-secondary'
                >
                    Square
                </button>
                <button
                    onClick={this.props.squareRoot}
                    className='btn btn-secondary'
                >
                    Square root
                </button>
            </div>
        );
    }
}

export default Toolbar;
