import React, { Component } from 'react';

export class TodoForm extends Component {
    state = { todoText: '' };

    submitHandler = (evt) => {
        evt.preventDefault(); // prevents the form submission to the server
        // console.log(document.getElementById('todoText').value);
        // console.log(this.refs.todoText.value);

        if (!this.state.todoText) return;

        this.props.addTodo(this.state.todoText);
        this.setState({ todoText: '' });
    };

    changeHandler = (evt) => {
        this.setState({ todoText: evt.target.value });
    };

    render() {
        return (
            <>
                <h3>Add a new Todo entry</h3>

                <form
                    style={{ marginBottom: '50px' }}
                    onSubmit={this.submitHandler}
                >
                    <input
                        name='todoText'
                        value={this.state.todoText}
                        onChange={this.changeHandler}
                        ref='todoText'
                        type='text'
                        id='todoText'
                        className='form-control'
                        placeholder='enter what do you want to do...'
                        autoFocus
                    />
                </form>
            </>
        );
    }
}

export default TodoForm;
