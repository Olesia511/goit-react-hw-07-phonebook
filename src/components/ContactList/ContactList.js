import { ContactCard } from 'components/ContactCard/ContactCard';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';

export const ContactList = () => {
  const { contacts } = useSelector(getContacts);
  const { filter } = useSelector(getFilter);
  
  const filterContacts = contacts.filter(el =>
    el.name.toLowerCase().includes(filter)
  );

  return (
    <ul style={{ maxWidth: 680 }}>
      {filterContacts.map(contact => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
