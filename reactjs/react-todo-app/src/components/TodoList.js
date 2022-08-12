import React, { Component } from 'react';
import TodoEntry from './TodoEntry';

export class TodoList extends Component {
    render() {
        let { todos, toggleTodoDone, deleteTodo } = this.props;

        let todosJsx = todos.map((t) => (
            <TodoEntry
                key={t.id}
                todo={t}
                deleteTodo={deleteTodo}
                toggleTodoDone={toggleTodoDone}
            />
        ));

        return (
            <>
                <button
                    onClick={this.props.deleteCompletedTodos}
                    className='btn btn-outline-danger'
                >
                    Delete finished tasks
                </button>
                <button
                    onClick={this.props.deleteAllTodos}
                    className='btn btn-outline-danger'
                >
                    Delete all tasks
                </button>

                <br />
                <br />
                <br />

                {todos.length > 0 ? (
                    <div>
                        <h3>Todo List</h3>
                        <ul className='list-group'>{todosJsx}</ul>
                    </div>
                ) : (
                    <div>
                        <h3 className='text-danger'>
                            You don't have any tasks!
                        </h3>
                    </div>
                )}

                {/* {!todos.length && (
                    <div>
                        <h3 className='text-danger'>
                            You don't have any tasks!
                        </h3>
                    </div>
                )}

                {todos.length > 0 && (
                    <div>
                        <h3>Todo List</h3>
                        <ul className='list-group'>{todosJsx}</ul>
                    </div>
                )} */}
            </>
        );
    }
}

export default TodoList;
