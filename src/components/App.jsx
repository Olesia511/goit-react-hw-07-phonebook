import { GlobalStyle } from './GlobalStyles';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { BasicContainer, ContactsContainer } from './App.styled';
import { useSelector } from 'react-redux';
import { getContacts } from '../redux/selectors';

export const App = () => {
  const { contacts } = useSelector(getContacts);

  return (
    <BasicContainer>
      <h1>Phonebook</h1>
      <ContactForm />

      <ContactsContainer>
        <h2 style={{ marginBottom: 24 }}>Contacts</h2>
        <h3 style={{ marginBottom: 8 }}>Find contacts by name</h3>
        <Filter />
        {contacts.length > 0 && <ContactList />}
      </ContactsContainer>
      <GlobalStyle />
    </BasicContainer>
  );
};
