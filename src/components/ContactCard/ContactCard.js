import { useDispatch } from 'react-redux';
import { BtnDeleteContact, CardItem } from './ContactCard.styled';
import { deleteContact } from '../../redux/fetchAxios';

export const ContactCard = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();

  return (
    <CardItem id={id}>
      <h3>
        {name}: {phone}
      </h3>
      <BtnDeleteContact
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </BtnDeleteContact>
    </CardItem>
  );
};
