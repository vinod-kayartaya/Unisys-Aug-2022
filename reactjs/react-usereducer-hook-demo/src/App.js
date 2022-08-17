import React, { useReducer, useEffect } from 'react';

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
            // TODO 1: auto-generate the id before adding
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

    useEffect(() => {
        window.dispatch = dispatch;
        // dispatch({type: 'DELETE_PERSON', payload: 4})
        // dispatch({type: 'ADD_PERSON', payload: {id: 4, firstname: 'Shyam', lastname: 'Sundar', city: 'Shivamogga'}})
    }, []);

    return (
        <>
            <div className='container'>
                <h1>useReducer() hook demo</h1>
                <hr />

                {/* TODO 2: Create HTML form for accepting firstname/lastname/city
                with a submit button, and on submitting the form, dispatch an action to add this data
                to the state maintained by the reducer */}
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
        </>
    );
};

export default App;
