import React, { Component } from 'react';
import Toolbar from './Toolbar';

export class App extends Component {
    state = { count: 0 };

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };
    decrement = () => {
        this.setState({ count: this.state.count - 1 });
    };
    square = () => {
        this.setState({ count: this.state.count * this.state.count });
    };
    squareRoot = () => {
        this.setState({ count: Math.sqrt(this.state.count) });
    };

    render() {
        return (
            <>
                <div className='alert alert-primary'>
                    <div className='container'>
                        <h1>Counter App</h1>
                    </div>
                </div>
                <div className='container'>
                    <p className='lead'>
                        Current value of count is {this.state.count}
                    </p>
                    <Toolbar
                        increment={this.increment}
                        decrement={this.decrement}
                        square={this.square}
                        squareRoot={this.squareRoot}
                    />
                </div>
            </>
        );
    }
}

export default App;
