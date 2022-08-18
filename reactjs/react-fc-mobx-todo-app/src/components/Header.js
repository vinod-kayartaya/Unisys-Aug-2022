import { observer } from 'mobx-react-lite';
import React from 'react';
import todoStore from '../todo-store';
const Header = () => {
    return (
        <>
            <div className='alert alert-primary'>
                <div className='container'>
                    <h1>Todo App</h1>
                    <p className='lead'>Powered by React and MobX</p>
                </div>
            </div>
            <div className='container'>
                <p>
                    Total {todoStore.count}, pending {todoStore.pendingCount}
                </p>
            </div>
        </>
    );
};

export default observer(Header);
