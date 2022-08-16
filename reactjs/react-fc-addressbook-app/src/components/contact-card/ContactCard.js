import React from 'react';
import './ContactCard.css';

const ContactCard = ({ contact, deleteContact }) => {
    const fullname = (contact) => {
        return `${contact.gender === 'Male' ? 'Mr.' : 'Ms.'} ${
            contact.firstname
        } ${contact.lastname}`;
    };

    return (
        <>
            <div className='card'>
                <div className='card-body'>
                    <h5 className='card-title'>
                        <div className='row'>
                            <div className='col-11'>{fullname(contact)}</div>
                            <div className='col-1 text-danger trash'>
                                <i
                                    onClick={() => deleteContact(contact.id)}
                                    className='fa-solid fa-trash-can'
                                ></i>
                            </div>
                        </div>
                    </h5>
                    <p>
                        Email: {contact.email}, Phone: {contact.phone}
                        <br />
                        {contact.city} {contact.state}
                    </p>
                </div>
            </div>
        </>
    );
};

export default ContactCard;
