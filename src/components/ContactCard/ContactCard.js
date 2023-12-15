import { useDispatch } from 'react-redux';
import { BtnDeleteContact, CardItem } from './ContactCard.styled';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactCard = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <CardItem key={id} id={id}>
      <h3>
        {name}: {number}
      </h3>
      <BtnDeleteContact
        type="button"
        onClick={() => {
          handleDeleteContact(id);
        }}
      >
        Delete
      </BtnDeleteContact>
    </CardItem>
  );
};
