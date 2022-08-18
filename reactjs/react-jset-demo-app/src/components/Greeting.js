import React, { Component } from 'react';

export class Greeting extends Component {
    state = { message: 'Hello, world!' };

    btnHandler = () => {
        this.setState({ message: this.state.message.toUpperCase() });
    };

    componentDidMount() {
        // lifecycle method; gets executed ONCE after the component is mounted/rendered
        const { message } = this.props;
        if (message) {
            this.setState({ message });
        }
    }

    render() {
        return (
            <div>
                <h1 data-testid='msg'>{this.state.message}</h1>
                <button data-testid='btnGreet' onClick={this.btnHandler}>Change to Uppercase</button>
            </div>
        );
    }
}

export default Greeting;
