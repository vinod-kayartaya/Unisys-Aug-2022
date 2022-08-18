import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import store from '../todo-store';

const TodoForm = () => {
    const [todoText, setTodoText] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        if (!todoText) return;

        store.addTodo(todoText);
        setTodoText('');
    };

    return (
        <>
            <h3>Add a new Todo entry</h3>

            <form style={{ marginBottom: '50px' }} onSubmit={submitHandler}>
                <input
                    name='todoText'
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                    type='text'
                    className='form-control'
                    placeholder='enter what do you want to do...'
                    autoFocus
                />
            </form>
        </>
    );
};

export default TodoForm;
