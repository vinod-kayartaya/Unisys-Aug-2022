import React, { useRef } from 'react';
import './ContactForm.css';

const ContactForm = ({ addContact }) => {
    const firstnameRef = useRef();
    const lastnameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    const genderMaleRef = useRef();
    const genderFemaleRef = useRef();

    const submitHandler = (evt) => {
        evt.preventDefault();

        const contact = {
            firstname: firstnameRef.current.value,
            lastname: lastnameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            city: cityRef.current.value,
            state: stateRef.current.value,
            gender: genderMaleRef.current.checked
                ? genderMaleRef.current.value
                : genderFemaleRef.current.value,
        };
        addContact(contact);

        firstnameRef.current.value = '';
        lastnameRef.current.value = '';
        emailRef.current.value = '';
        phoneRef.current.value = '';
        cityRef.current.value = '';
        stateRef.current.value = '';

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
                            ref={lastnameRef}
                            type='text'
                            className='form-control'
                            id='lastname'
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
                                ref={genderMaleRef}
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
                                ref={genderFemaleRef}
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
                            ref={emailRef}
                            type='email'
                            className='form-control'
                            id='email'
                        />
                    </div>
                </div>
                <div className='mb-3 row'>
                    <label htmlFor='phone' className='col-sm-2 col-form-label'>
                        Phone
                    </label>
                    <div className='col-sm-8'>
                        <input
                            ref={phoneRef}
                            type='text'
                            className='form-control'
                            id='phone'
                        />
                    </div>
                </div>
                <div className='mb-3 row'>
                    <label htmlFor='city' className='col-sm-2 col-form-label'>
                        City
                    </label>
                    <div className='col-sm-8'>
                        <input
                            ref={cityRef}
                            type='text'
                            className='form-control'
                            id='city'
                        />
                    </div>
                </div>
                <div className='mb-3 row'>
                    <label htmlFor='state' className='col-sm-2 col-form-label'>
                        State
                    </label>
                    <div className='col-sm-8'>
                        <input
                            ref={stateRef}
                            type='text'
                            className='form-control'
                            id='state'
                        />
                    </div>
                </div>

                <button className='btn btn-primary'>Save</button>
            </form>
        </>
    );
};

export default ContactForm;
