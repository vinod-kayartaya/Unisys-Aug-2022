import React from 'react';
import './Header.css';

const Header = ({ count }) => {
    return (
        <div className='alert alert-primary'>
            <div className='container'>
                <h1>Addressbook - v1</h1>
                <p className='lead'>You have {count || 'no'} contacts</p>
            </div>
        </div>
    );
};

export default Header;
