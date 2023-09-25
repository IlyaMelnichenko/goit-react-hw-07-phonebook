import { useDispatch } from 'react-redux';
import { RemoveButton } from './StyledPhoneItem';
import { deleteContact } from 'redux/contactsSlice';

export const PhoneItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        {contact.Name}:{contact.Number}
      </div>
      <RemoveButton
        value={contact.id}
        onClick={() => {
          dispatch(deleteContact(contact.id));
        }}
      >
        Delete
      </RemoveButton>
    </>
  );
};
