import React, { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { PhoneList } from './Phonelist/PhoneList';
import { Container } from './ContactForm/StyledContactFrom';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { fetchContacts } from 'redux/contactsOperation';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  
  return (
    <Container>
      <Toaster />
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
