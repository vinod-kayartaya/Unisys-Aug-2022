import React, { Component } from 'react';
import TodoEntry from './TodoEntry';

export class TodoList extends Component {
    render() {
        let { todos, toggleTodoDone } = this.props;

        let todosJsx = todos.map((t) => (
            <TodoEntry key={t.id} todo={t} toggleTodoDone={toggleTodoDone} />
        ));

        return (
            <>
                <h3>Todo List</h3>
                <ul className='list-group'>{todosJsx}</ul>
            </>
        );
    }
}

export default TodoList;
