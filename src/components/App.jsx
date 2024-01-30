import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { List } from './List/List';

export const App = () => {
  const storedContacts = JSON.parse(localStorage.getItem('contacts'));
  const [contacts, setContacts] = useState(storedContacts);
  const [filter, setFilter] = useState('');

  const handleAddContact = evt => {
    const form = document.querySelector('form');
    const nameToAdd = form.elements.name.value;
    const phoneNumber = form.elements.number.value;
    const contactExist = contacts.some(
      contact => contact.name.toLowerCase() === nameToAdd.toLowerCase()
    );
    if (nameToAdd === '' && phoneNumber === '') {
      return;
    }
    if (contactExist) {
      alert('This contact is already on Your list');
    } else {
      const newContact = { name: nameToAdd, id: nanoid(), number: phoneNumber };
      setContacts([...contacts, newContact]);
      form.reset();
    }
  };

  const deleteContact = contactId => {
    const remainingContacts = contacts.filter(
      contact => contact.id !== contactId
    );
    setContacts(remainingContacts);
  };

  const handleFilter = evt => {
    evt.preventDefault();
    if (evt.target.value === null) {
      setFilter('');
    }
    setFilter(evt.target.value.toLowerCase());
  };

  const showFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    console.log(filter);
  });

  return (
    <div>
      <Form addContact={handleAddContact}></Form>
      <h2>Contacts</h2>
      <Filter contactFilter={handleFilter}></Filter>
      <List
        showFiltered={showFilteredContacts()}
        removeContact={deleteContact}
      ></List>
      -----------------------------------------------------------
    </div>
  );
};
