import { observer } from 'mobx-react-lite';
import React from 'react';
import todoStore from '../todo-store';

const TodoEntry = ({ todo }) => {
    const style = {
        textDecoration: todo.done ? 'line-through' : 'none',
        cursor: 'pointer',
    };
    return (
        <>
            <span
                onClick={() => todoStore.toggleTodoStatus(todo.id)}
                style={style}
            >
                {todo.text}
            </span>
            <button
                className='btn btn-link text-danger'
                style={{ textDecoration: 'none' }}
                onClick={() => todoStore.deleteTodo(todo.id)}
            >
                &#x1F5D1;
            </button>
        </>
    );
};

export default observer(TodoEntry);
