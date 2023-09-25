import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { StyledForm, StyledFild, AddButton } from './StyledContactFrom';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

const schema = Yup.object().shape({
  Name: Yup.string()
    .matches(/^[A-Za-zА-Яа-яЁё\s]+$/, 'Invalid name')
    .required('This is required!')
    .min(1, 'Too Short!')
    .max(50, 'Too Long!'),
  Number: Yup.string()
    .matches(/^\+?[0-9]{1,3}-?[0-9]+$/, 'Invalid number')
    .required('This is required!')
    .min(6, 'Too Short!')
    .max(20, 'Too Long!'),
});

export const ContactForm = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{
          Name: '',
          Number: '',
        }}
        validationSchema={schema}
        onSubmit={values => {
          const checkName = values.Name;
          console.log(values);
          if (
            contacts.some(
              contact => contact.Name.toLowerCase() === checkName.toLowerCase()
            )
          ) {
            alert(`${checkName} already recorded in the directory`);
            return;
          }
          dispatch(addContact({ id: nanoid(), ...values }));
        }}
      >
        <StyledForm>
          <label>
            Name
            <StyledFild name="Name" />
            <ErrorMessage name="Name" component="div" />
          </label>
          <label>
            Number
            <StyledFild type="tel" name="Number" />
            <ErrorMessage name="Number" component="div" />
          </label>

          <AddButton type="submit">Add contact</AddButton>
        </StyledForm>
      </Formik>
    </>
  );
};
