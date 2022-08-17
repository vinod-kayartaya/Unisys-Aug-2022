import React from 'react';

const Home = () => {
    return (
        <>
            <div className='text-center'>
                <img
                    style={{ borderRadius: '50%' }}
                    className='img-thumbnail'
                    src='./vinod.jpeg'
                    alt='Vinod Kumar Kayartaya'
                />

                <h3>Movie Browser Application</h3>
                <p className='lead'>
                    Powered by React Functional Components and Axios
                </p>
            </div>
        </>
    );
};

export default Home;
