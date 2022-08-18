import React from 'react';
import ContactForm from './components/ContactForm';
import ProductForm from './components/ProductForm';

const Header = () => (
    <>
        <div className='alert alert-primary'>
            <div className='container'>
                <h1>Working forms using Formik</h1>
            </div>
        </div>
    </>
);

const App = () => {
    return (
        <>
            <Header />
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <ContactForm />
                    </div>
                    <div className='col-2'></div>
                    <div className='col'>
                        <ProductForm />
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
