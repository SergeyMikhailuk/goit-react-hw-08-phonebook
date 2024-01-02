import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useGetContactsQuery, useRemoveContactMutation } from '../../redux/contactsSlice';
import { getFilter } from '../../redux/filterSlice';

import { List, ListItem } from './ContactsList.styled';

const ContactList = () => {
  const { data: contacts } = useGetContactsQuery(undefined);
  const [removeContact, { isLoading: isDeleting }] = useRemoveContactMutation();
  const [removedContactId, setRemovedContactId] = useState('');
  const filter = useSelector(getFilter);

  const onContactDelete = async (contactId: string) => {
    removeContact(contactId);
    setRemovedContactId(contactId);
  };

  const getFilteredContacts = () => {
    if (!contacts) return;
    if (!filter) return [...contacts];

    const contactToLowerCase = filter.toLowerCase();
    return [...contacts].filter(contact => contact.name.toLowerCase().includes(contactToLowerCase));
  };
  const filteredContacts = getFilteredContacts() || [];

  useEffect(() => {
    if (!isDeleting && removedContactId) setRemovedContactId('');
  }, [removedContactId, isDeleting]);

  return (
    <List>
      {filteredContacts.map((contact, index) => (
        <ListItem key={contact.id}>
          <span>{index + 1}</span>
          {contact.name}, {contact.number}
          <button type="button" onClick={() => onContactDelete(contact.id)} disabled={isDeleting}>
            {contact.id === removedContactId ? 'deleting..' : 'delete'}
          </button>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
