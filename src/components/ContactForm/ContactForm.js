import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  ButtonForm,
  ErrMsg,
  FormContact,
  InputForm,
  LabelForm,
} from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/fetchAxios';

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(/^[a-zA-Zа-яА-Я\s]+$/, 'The name must contain only letters')
    .required('Required'),
  phone: Yup.string()
    .matches(
      /^\d{3} \d{3} \d{2} \d{2}$/,
      'Enter the number in the format "095 111 22 33"'
    )
    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          phone: '',
        }}
        validationSchema={formSchema}
        onSubmit={(initialValues, actions) => {
          dispatch(addContact(initialValues));
          actions.resetForm();
        }}
      >
        <FormContact>
          <LabelForm>
            Name
            <InputForm name="name" placeholder="Olesia" type="text" required />
            <ErrMsg name="name" component="span" />
          </LabelForm>

          <LabelForm>
            Phone
            <InputForm
              name="phone"
              placeholder="095 111 22 33"
              type="tel"
              required
            />
            <ErrMsg name="phone" component="span" />
          </LabelForm>
          <ButtonForm type="submit">Add contact</ButtonForm>
        </FormContact>
      </Formik>
    </div>
  );
};
