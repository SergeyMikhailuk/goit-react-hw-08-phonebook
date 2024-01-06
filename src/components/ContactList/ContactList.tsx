import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useGetContactsQuery, useRemoveContactMutation } from 'store/contactsSlice';
import { getFilter } from 'store/filterSlice';

import { ButtonsWrapper, List, ListItem } from './ContactsList.styled';
import ContactEditModal from '../ContactEditModal';

const ContactList = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currentContact, setCurrentContact] = useState<Contact>();

  const { data: contacts } = useGetContactsQuery(undefined);
  const [removeContact, { isLoading: isDeleting }] = useRemoveContactMutation();
  const [removedContactId, setRemovedContactId] = useState('');
  const filter = useSelector(getFilter);

  const editContactHandler = (contact: Contact) => {
    setIsOpenModal(true);
    setCurrentContact(contact);
  };

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
    <>
      <List>
        {filteredContacts.map((contact, index) => (
          <ListItem key={contact.id}>
            <span>{index + 1}</span>
            {contact.name}, {contact.number}
            <ButtonsWrapper>
              <button onClick={() => editContactHandler(contact)}>edit</button>
              <button
                type="button"
                onClick={() => onContactDelete(contact.id)}
                disabled={isDeleting}
              >
                {contact.id === removedContactId ? 'deleting...' : 'delete'}
              </button>
            </ButtonsWrapper>
          </ListItem>
        ))}
      </List>
      <ContactEditModal
        contact={currentContact}
        onClose={() => setIsOpenModal(false)}
        open={isOpenModal}
      />
    </>
  );
};

export default ContactList;

type Contact = {
  id: string;
  name: string;
  number: string;
};
