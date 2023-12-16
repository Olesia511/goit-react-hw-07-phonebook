import { GlobalStyle } from './GlobalStyles';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { BasicContainer, ContactsContainer } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getError, getIsLoading } from '../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/fetchAxios';

export const App = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <BasicContainer>
      <h1>Phonebook</h1>
      <ContactForm />

      <ContactsContainer>
        <h2 style={{ marginBottom: 24 }}>Contacts</h2>
        <h3 style={{ marginBottom: 8 }}>Find contacts by name</h3>
        <Filter />
        {items.length > 0 && <ContactList />}
        {isLoading && !error && <b>Request in progress...</b>}
      </ContactsContainer>
      <GlobalStyle />
    </BasicContainer>
  );
};
