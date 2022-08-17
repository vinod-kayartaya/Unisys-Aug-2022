import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const linkStyles = {
    color: '#fff',
    textDecoration: 'none',
};

const Header = () => {
    const [searchText, setSearchText] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!searchText) return;
        history.push('/movies?searchText=' + searchText); // changes the 'location'
    };

    return (
        <>
            <div className='alert alert-primary'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-4'>
                            <h3>
                                <Link style={linkStyles} to='/'>
                                    Movie browser
                                </Link>
                            </h3>
                        </div>
                        <div className='col-8'>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type='search'
                                    name='searchText'
                                    value={searchText}
                                    onChange={({ target }) =>
                                        setSearchText(target.value)
                                    }
                                    id='searchText'
                                    className='form-control'
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
