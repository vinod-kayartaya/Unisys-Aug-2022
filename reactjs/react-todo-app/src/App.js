import React, { Component } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';
import './App.css';
import TodoForm from './components/TodoForm';

export class App extends Component {
    state = {
        todos: [
            { id: 4, text: "Let's have a break", done: false },
            { id: 3, text: 'Plan a new video course', done: false },
            { id: 2, text: 'Update website', done: true },
            { id: 1, text: 'Create a React project', done: false },
        ],
    };

    addTodo = (text) => {
        const { todos } = this.state;
        let id;
        if (todos.length > 0) {
            let todoIds = todos.map((t) => t.id);
            id = Math.max(...todoIds) + 1;
        } else {
            id = 1;
        }
        const todo = { id, text, done: false };
        todos.unshift(todo);
        this.setState({ todos });
    };

    toggleTodoDone = (id) => {
        let { todos } = this.state;
        let t = todos.find((t) => t.id === id);
        if (t) {
            t.done = !t.done;
            this.setState({ todos }); // the entire component tree will now be re-rendered
        }
    };

    deleteTodo = (id) => {
        let { todos } = this.state;
        let index = todos.findIndex((t) => t.id === id);
        if (index !== -1) {
            todos.splice(index, 1);
            this.setState({ todos });
        }
    };

    deleteAllTodos = () => {
        this.setState({ todos: [] });
    };

    deleteCompletedTodos = () => {
        let { todos } = this.state;
        todos = todos.filter((t) => !t.done);
        this.setState({ todos });
    };

    render() {
        return (
            <>
                <Header />
                <div className='container'>
                    <TodoForm addTodo={this.addTodo} />

                    <TodoList
                        todos={this.state.todos}
                        deleteTodo={this.deleteTodo}
                        toggleTodoDone={this.toggleTodoDone}
                        deleteAllTodos={this.deleteAllTodos}
                        deleteCompletedTodos={this.deleteCompletedTodos}
                    />
                </div>
            </>
        );
    }
}

export default App;
