import React, { useState } from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import './App.css';
import ContactList from './components/contact-list/ContactList';
import ContactForm from './components/contact-form/ContactForm';

const initialData = [
    {
        id: 1,
        firstname: 'Nestor',
        lastname: 'Jentet',
        email: 'njentet0@mapquest.com',
        phone: '(482) 5128220',
        gender: 'Male',
        city: 'Bershet’',
        state: null,
    },
    {
        id: 2,
        firstname: 'Gib',
        lastname: 'Tawn',
        email: 'gtawn1@bravesites.com',
        phone: '(372) 9231651',
        gender: 'Male',
        city: 'Meia Via',
        state: 'Santarém',
    },
    {
        id: 3,
        firstname: 'Doll',
        lastname: 'Dyzart',
        email: 'ddyzart2@uol.com.br',
        phone: '(798) 8772278',
        gender: 'Female',
        city: 'Dūāb',
        state: null,
    },
    {
        id: 4,
        firstname: 'Bailey',
        lastname: 'Condict',
        email: 'bcondict3@netvibes.com',
        phone: '(963) 2503248',
        gender: 'Male',
        city: 'Pak Chom',
        state: null,
    },
    {
        id: 5,
        firstname: 'Elfreda',
        lastname: 'McPhee',
        email: 'emcphee4@bluehost.com',
        phone: '(827) 7005726',
        gender: 'Female',
        city: 'Matina',
        state: null,
    },
    {
        id: 6,
        firstname: 'Boone',
        lastname: 'Mulbery',
        email: 'bmulbery5@cyberchimps.com',
        phone: '(954) 8732223',
        gender: 'Male',
        city: 'Herby',
        state: null,
    },
    {
        id: 7,
        firstname: 'Gabriella',
        lastname: 'Whates',
        email: 'gwhates6@w3.org',
        phone: '(789) 6403158',
        gender: 'Female',
        city: 'Pacarkeling',
        state: null,
    },
    {
        id: 8,
        firstname: 'Faith',
        lastname: 'Armitage',
        email: 'farmitage7@deliciousdays.com',
        phone: '(987) 4754118',
        gender: 'Female',
        city: 'Penghu',
        state: null,
    },
    {
        id: 9,
        firstname: 'Neron',
        lastname: 'Foale',
        email: 'nfoale8@4shared.com',
        phone: '(882) 3316951',
        gender: 'Male',
        city: 'Cahabón',
        state: null,
    },
    {
        id: 10,
        firstname: 'Roxy',
        lastname: 'Dericut',
        email: 'rdericut9@vistaprint.com',
        phone: '(151) 9743342',
        gender: 'Female',
        city: 'Wakapuken',
        state: null,
    },
];

const App = () => {
    // state
    const [contacts, setContacts] = useState(initialData);

    // behavior
    const deleteContact = (id) => {
        if (window.confirm('Are you sure to delete this contact?' + id)) {
            let newContacts = contacts.filter((c) => c.id !== id);
            setContacts(newContacts);
        }
    };
    const addContact = (contact) => {
        // generate the new id
        contact.id =
            contacts && contacts.length
                ? Math.max(...contacts.map((c) => c.id)) + 1
                : 1;
        setContacts([...contacts, contact]);
    };

    // purely for debug purpose:
    window.addContact = addContact;
    // addContact({firstname: 'Vinod', lastname: 'Kumar', gender: 'Male', email: 'vinod@vinod.co', phone: '9731424784', city: 'Bangalore', state: 'Karnataka'})

    return (
        <>
            <Header count={contacts.length} />

            <div className='container'>
                <div className='row mh-600'>
                    <div className='col'>
                        <ContactForm addContact={addContact} />
                    </div>
                    <div className='col'>
                        <ContactList
                            contacts={contacts}
                            deleteContact={deleteContact}
                        />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default App;
