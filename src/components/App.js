import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { PhoneList } from './Phonelist/PhoneList';
import { Container } from './ContactForm/StyledContactFrom';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';

export const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length !== 0 && (
        <>
          <h2>Contacts</h2>
          <Filter />
          <PhoneList />
        </>
      )}
    </Container>
  );
};
