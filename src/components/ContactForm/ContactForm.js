import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { StyledForm, StyledFild, AddButton } from './StyledContactFrom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAddContacts } from 'redux/contactsOperation';

const schema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[A-Za-zА-Яа-яЁё\s]+$/, 'Invalid name')
    .required('This is required!')
    .min(1, 'Too Short!')
    .max(50, 'Too Long!'),
  phone: Yup.string()
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
          name: '',
          phone: '',
        }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          const checkName = values.name;

          if (
            contacts.some(
              contact => contact.name.toLowerCase() === checkName.toLowerCase()
            )
          ) {
            alert(`${checkName} already recorded in the directory`);
            return;
          }
          dispatch(fetchAddContacts({ ...values }));
          actions.resetForm();
        }}
      >
        <StyledForm>
          <label>
            Name
            <StyledFild name="name" />
            <ErrorMessage name="name" component="div" />
          </label>
          <label>
            Number
            <StyledFild type="tel" name="phone" />
            <ErrorMessage name="phone" component="div" />
          </label>

          <AddButton type="submit">Add contact</AddButton>
        </StyledForm>
      </Formik>
    </>
  );
};
