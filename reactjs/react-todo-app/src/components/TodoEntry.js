import React, { Component } from 'react';

export class TodoEntry extends Component {
    render() {
        // the props received from the parent component is READ-ONLY
        // We get a local copy of the prop and changing the value of this local copy
        // does not change the data in the parent
        let { todo, toggleTodoDone } = this.props;

        return (
            <>
                <li
                    className='list-group-item'
                    style={{
                        textDecoration: todo.done ? 'line-through' : 'none',
                        cursor: 'default',
                    }}
                    onClick={() => toggleTodoDone(todo.id)}
                >
                    {todo.text}
                </li>
            </>
        );
    }
}

export default TodoEntry;
