import React from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { AppContainer, Header } from '../components/AppStyles';

const App = () => {
  return (
    <AppContainer>
      <Header>Phonebook</Header>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </AppContainer>
  );
};
 

export default App;