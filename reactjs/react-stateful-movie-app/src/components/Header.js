import React, { Component } from 'react';

export class Header extends Component {
    state = { searchText: localStorage['searchText'] || '' };

    submitHandler = (evt) => {
        evt.preventDefault();
        // call the function to search for movies (coming from "props")
        if (!this.state.searchText) return;

        localStorage['searchText'] = this.state.searchText;
        this.props.searchMovies(this.state.searchText);
    };

    chnageHandler = ({ target }) => {
        this.setState({ searchText: target.value });
    };

    render() {
        return (
            <>
                <div className='alert alert-primary'>
                    <div className='container'>
                        {/* .row>.col-4+.col-8 */}
                        <div className='row'>
                            <div className='col-4'>
                                <h1>Movie browser</h1>
                            </div>
                            <div className='col-8'>
                                <form onSubmit={this.submitHandler}>
                                    <input
                                        value={this.state.searchText}
                                        onChange={this.chnageHandler}
                                        type='search'
                                        className='form-control'
                                        autoFocus
                                        placeholder='which movie are you looking for?'
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Header;
