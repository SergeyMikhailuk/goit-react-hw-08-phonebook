import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

import { Wrapper } from './styled';

const Contacts = () => (
  <Wrapper>
    <ContactForm />

    <h2>Contacts</h2>
    <Filter />
    <ContactList />
  </Wrapper>
);

export default Contacts;
