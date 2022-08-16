import React from 'react';
import ContactCard from '../contact-card/ContactCard';

const ContactList = ({ contacts, deleteContact }) => {
    // for every contact in the array contacts, create a <ContactCard />
    // and then render the whole JSX

    const contactListJsx = contacts.map((c) => (
        <ContactCard key={c.id} contact={c} deleteContact={deleteContact} />
    ));

    return <>{contactListJsx}</>;
};

export default ContactList;
