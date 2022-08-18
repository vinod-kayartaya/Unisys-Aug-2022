import React, { useReducer, useEffect, useState } from 'react';

// a sample data maintained by the "useReducer" api
const initialState = {
    people: [
        { id: 1, firstname: 'Vinod', lastname: 'Kumar', city: 'Bangalore' },
        { id: 2, firstname: 'John', lastname: 'Smith', city: 'Dallas' },
        { id: 3, firstname: 'Jane', lastname: 'Doe', city: 'Washington' },
    ],
};
// reducer is a function that takes 2 arguments:
// 1. state (maintained by the useReducer api)
// 2. action (a simple JS object having "type" and "payload" properties)
// Based on the "type" of action, reducer mutates the state
// The reducer is automatically called when an "action" is "dispatched".
// The reducer must return the modified state.
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PERSON': {
            // here payload may be a persons object
            let { people } = state;
            let newId =
                state.people && state.people.length
                    ? Math.max(...state.people.map((p) => p.id)) + 1
                    : 1;
            action.payload.id = newId;
            people.push(action.payload);
            return { ...state, people };
        }
        case 'DELETE_PERSON': {
            // here payload may be the id of the person to be deleted
            let { people } = state;
            people = people.filter((p) => p.id !== action.payload);
            return { ...state, people };
        }
        default:
            return { ...state };
    }
};

const App = () => {
    // the "useReducer()" returns an array of 2 elements:
    // 1. state maintained by the "useReducer" api (which is same as the initialState passed)
    // 2. a function (typically called as "dispatch"), which can be used to dispatch an action
    const [state, dispatch] = useReducer(reducer, initialState);
    const [person, setPerson] = useState({
        firstname: '',
        lastname: '',
        city: '',
    });

    const handleTextChange = ({ target }) => {
        const { name, value } = target;
        setPerson({ ...person, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!person.firstname || !person.city) return;

        dispatch({ type: 'ADD_PERSON', payload: person });
        setPerson({
            firstname: '',
            lastname: '',
            city: '',
        });
    };

    return (
        <>
            <div className='container'>
                <h1>useReducer() hook demo</h1>
                <hr />

                <div className='row'>
                    <div className='col'>
                        <h3>Add a new person data</h3>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor='firstname'>Firstname</label>
                                <div>
                                    <input
                                        type='text'
                                        className='form-control'
                                        name='firstname'
                                        value={person.firstname}
                                        onChange={handleTextChange}
                                        id='firstname'
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor='lastname'>Lastname</label>
                                <div>
                                    <input
                                        type='text'
                                        className='form-control'
                                        name='lastname'
                                        value={person.lastname}
                                        onChange={handleTextChange}
                                        id='lastname'
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor='city'>City</label>
                                <div>
                                    <input
                                        type='text'
                                        className='form-control'
                                        name='city'
                                        value={person.city}
                                        onChange={handleTextChange}
                                        id='city'
                                    />
                                </div>
                            </div>
                            <button className='btn btn-primary'>
                                Save data
                            </button>
                        </form>
                    </div>
                    <div className='col'>
                        <h3>Here are the people info:</h3>
                        <ul>
                            {state.people.map((p) => (
                                <li key={p.id}>
                                    {p.firstname} {p.lastname} lives in {p.city}
                                    <button
                                        style={{ textDecoration: 'none' }}
                                        className='btn btn-link'
                                        onClick={() =>
                                            dispatch({
                                                type: 'DELETE_PERSON',
                                                payload: p.id,
                                            })
                                        }
                                    >
                                        &times;
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
