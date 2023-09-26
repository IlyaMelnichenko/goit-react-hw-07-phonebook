import { useDispatch } from 'react-redux';
import { RemoveButton } from './StyledPhoneItem';
import { fetchDeleteContacts } from 'redux/contactsOperation';

export const PhoneItem = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        {contact.name}:{contact.phone}
      </div>
      <RemoveButton
        value={contact.id}
        onClick={() => {
          dispatch(fetchDeleteContacts(contact.id));
        }}
      >
        Delete
      </RemoveButton>
    </>
  );
};
