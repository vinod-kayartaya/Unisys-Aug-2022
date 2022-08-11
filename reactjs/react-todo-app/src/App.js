import React, { Component } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';

export class App extends Component {
    state = {
        todos: [
            { id: 1, text: 'Create a React project', done: false },
            { id: 2, text: 'Update website', done: true },
            { id: 3, text: 'Plan a new video course', done: false },
            { id: 4, text: "Let's have a break", done: false },
        ],
    };

    toggleTodoDone = (id) => {
        console.log('toggleTodoDone() is called with id', id);
        // search for the todo based on the id given
        let { todos } = this.state;
        let t = todos.find((t) => t.id === id);
        t.done = !t.done;
        this.setState({ todos }); // the entire component tree will now be re-rendered
    };

    render() {
        return (
            <>
                <Header />
                <div className='container'>
                    <TodoList
                        todos={this.state.todos}
                        toggleTodoDone={this.toggleTodoDone}
                    />
                </div>
            </>
        );
    }
}

export default App;
