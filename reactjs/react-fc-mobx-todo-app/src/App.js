import React from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import todoStore from './todo-store';

window.todoStore = todoStore;

const App = () => {
    return (
        <>
            <Header />
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <TodoForm />
                    </div>
                    <div className='col'>
                        <TodoList store={todoStore} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
