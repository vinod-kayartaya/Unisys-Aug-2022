import { observer } from 'mobx-react-lite';
import React from 'react';
import todoStore from '../todo-store';

const Toolbar = () => {
    return (
        <>
            <button
                onClick={todoStore.deleteFinishedTodos}
                className='btn btn-outline-danger'
            >
                Delete finished ({todoStore.count - todoStore.pendingCount})
            </button>
            <button
                onClick={todoStore.deleteAllTodos}
                className='btn btn-outline-danger'
            >
                Delete all
            </button>
        </>
    );
};

export default observer(Toolbar);
