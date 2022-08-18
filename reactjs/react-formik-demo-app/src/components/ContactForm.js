import React from 'react';
import { useFormik } from 'formik';

const cfg = {
    initialValues: {
        firstname: '',
        lastname: '',
        email: '',
        city: 'Bangalore',
    },
    onSubmit: (values) => {
        console.log('The current values from the form are', values);
    },
    validate: ({ firstname, email }) => {
        const err = {};

        // firstname is mandatory
        // firstname must be at least 3 letters
        // email must be a valid email address pattern
        if (!firstname) {
            err.firstname = 'Firstname is required but missing';
        } else if (firstname.length < 3) {
            err.firstname = `At least 3 letters required for firstname, but got only ${firstname.length}`;
        }

        const re =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!email) {
            err.email = 'Email is required but missing';
        } else if (re.test(email) === false) {
            err.email = 'Email does not look like a proper email address';
        }

        console.log(err);
        return err;
    },
};

const ContactForm = () => {
    const f = useFormik(cfg);

    return (
        <>
            <h3>Add contact details</h3>
            <form onSubmit={f.handleSubmit}>
                <div>
                    <label htmlFor='firstname'>Firstname</label>
                    <div>
                        <input
                            type='text'
                            name='firstname'
                            id='firstname'
                            className='form-control'
                            value={f.values.firstname}
                            onChange={f.handleChange}
                        />
                        {f.errors.firstname && (
                            <div className='text-danger'>
                                {f.errors.firstname}
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    <label htmlFor='lastname'>Lastname</label>
                    <div>
                        <input
                            type='text'
                            name='lastname'
                            id='lastname'
                            className='form-control'
                            value={f.values.lastname}
                            onChange={f.handleChange}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor='email'>Email address</label>
                    <div>
                        <input
                            type='email'
                            name='email'
                            id='email'
                            className='form-control'
                            value={f.values.email}
                            onChange={f.handleChange}
                        />
                        {f.errors.email && (
                            <div className='text-danger'>{f.errors.email}</div>
                        )}
                    </div>
                </div>
                <div>
                    <label htmlFor='city'>City</label>
                    <div>
                        <input
                            type='text'
                            name='city'
                            id='city'
                            className='form-control'
                            value={f.values.city}
                            onChange={f.handleChange}
                        />
                    </div>
                </div>
                <button className='btn btn-primary'>Save</button>
            </form>
        </>
    );
};

export default ContactForm;
