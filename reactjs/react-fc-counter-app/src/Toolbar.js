import React from 'react';

// all the props sent to the functional components are received a single method argument
export const Toolbar = ({ increment, decrement }) => {
    return (
        <>
            {/* we just pass the name of the function to the button,
        but the call to that function happens when we click on 
        the button */}
            <button onClick={increment} className='btn btn-secondary'>
                Increment
            </button>
            <button onClick={decrement} className='btn btn-secondary'>
                Decrement
            </button>
        </>
    );
};
