import React from 'react';
import TodoEntry from './TodoEntry';
import { observer } from 'mobx-react-lite';
import Toolbar from './Toolbar';

const TodoList = ({ store }) => {
    const todosJsx = store.todos.map((t) => (
        <li className='list-group-item' key={t.id}>
            <TodoEntry todo={t} />
        </li>
    ));

    return (
        <>
            {store.count > 0 && (
                <>
                    <h3>The list of todos for you...</h3>
                    <ul className='list-group'>{todosJsx}</ul>
                    <Toolbar />
                </>
            )}

            {store.count === 0 && (
                <>
                    <h3 className='text-danger'>
                        You don't have any TODO entries
                    </h3>
                </>
            )}
        </>
    );
};

// the observer function takes a component and returns a modified version of the component
// such a component/function is called "higher-order-component" or "HOC"
export default observer(TodoList);
