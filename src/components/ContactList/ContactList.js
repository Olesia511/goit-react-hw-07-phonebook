import { ContactCard } from 'components/ContactCard/ContactCard';
import { useSelector } from 'react-redux';
import { selectFilterContacts } from '../../redux/selectors';

export const ContactList = () => {
  const filterContacts = useSelector(selectFilterContacts);

  return (
    <ul style={{ maxWidth: 680 }}>
      {filterContacts.map(contact => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
