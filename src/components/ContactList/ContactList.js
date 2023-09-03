import React from 'react';
import ContactItem from './ContactItem/ContactItem';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(({ contacts }) => contacts);
  const filter = useSelector(({ filter }) => filter);

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;