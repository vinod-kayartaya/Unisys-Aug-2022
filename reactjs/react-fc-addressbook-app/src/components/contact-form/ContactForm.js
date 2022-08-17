import React, { useRef, useState } from 'react';
import './ContactForm.css';

const ContactForm = ({ addContact }) => {
    const [contact, setContact] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        city: 'Bangalore',
        state: 'Karnataka',
        gender: 'Male',
    });
    const firstnameRef = useRef();

    const changeHandler = (evt) => {
        const { name, value } = evt.target;
        setContact({ ...contact, [name]: value });
    };

    const submitHandler = (evt) => {
        evt.preventDefault();
        addContact(contact);
        setContact({
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            city: 'Bangalore',
            state: 'Karnataka',
            gender: 'Male',
        });
        firstnameRef.current.focus();
    };

    return (
        <>
            <form onSubmit={submitHandler}>
                <div className='mb-3 row'>
                    <label
                        htmlFor='firstname'
                        className='col-sm-2 col-form-label'
                    >
                        Firstname
                    </label>
                    <div className='col-sm-8'>
                        <input
                            ref={firstnameRef}
                            type='text'
                            className='form-control'
                            id='firstname'
                            name='firstname'
                            value={contact.firstname}
                            onChange={changeHandler}
                        />
                    </div>
                </div>
                <div className='mb-3 row'>
                    <label
                        htmlFor='lastname'
                        className='col-sm-2 col-form-label'
                    >
                        Lastname
                    </label>
                    <div className='col-sm-8'>
                        <input
                            type='text'
                            className='form-control'
                            id='lastname'
                            name='lastname'
                            value={contact.lastname}
                            onChange={changeHandler}
                        />
                    </div>
                </div>

                <div className='mb-3 row'>
                    <label className='col-sm-2 col-form-label'>Gender</label>
                    <div className='col-sm-8'>
                        <label>
                            <input
                                type='radio'
                                name='gender'
                                className='form-check-input'
                                id='genderMale'
                                value='Male'
                                defaultChecked
                                onChange={changeHandler}
                            />
                            Male
                        </label>
                        <label>
                            <input
                                type='radio'
                                name='gender'
                                className='form-check-input'
                                id='genderFemale'
                                value='Female'
                                onChange={changeHandler}
                            />
                            Female
                        </label>
                    </div>
                </div>

                <div className='mb-3 row'>
                    <label htmlFor='email' className='col-sm-2 col-form-label'>
                        Email
                    </label>
                    <div className='col-sm-8'>
                        <input
                            type='email'
                            className='form-control'
                            id='email'
                            name='email'
                            value={contact.email}
                            onChange={changeHandler}
                        />
                    </div>
                </div>
                <div className='mb-3 row'>
                    <label htmlFor='phone' className='col-sm-2 col-form-label'>
                        Phone
                    </label>
                    <div className='col-sm-8'>
                        <input
                            type='text'
                            className='form-control'
                            id='phone'
                            name='phone'
                            value={contact.phone}
                            onChange={changeHandler}
                        />
                    </div>
                </div>
                <div className='mb-3 row'>
                    <label htmlFor='city' className='col-sm-2 col-form-label'>
                        City
                    </label>
                    <div className='col-sm-8'>
                        <input
                            type='text'
                            name='city'
                            className='form-control'
                            id='city'
                            value={contact.city}
                            onChange={changeHandler}
                        />
                    </div>
                </div>
                <div className='mb-3 row'>
                    <label htmlFor='state' className='col-sm-2 col-form-label'>
                        State
                    </label>
                    <div className='col-sm-8'>
                        <input
                            type='text'
                            name='state'
                            className='form-control'
                            id='state'
                            value={contact.state}
                            onChange={changeHandler}
                        />
                    </div>
                </div>

                <button className='btn btn-primary'>Save</button>
            </form>
        </>
    );
};

export default ContactForm;
