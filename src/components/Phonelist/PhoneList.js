import { useSelector } from 'react-redux';
import { PhoneItem } from '../Phoneitem/PhoneItem';
import { StyledItem, StyledList } from './StyledPhoneList';
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

export const PhoneList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const getFiltered = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  const filteredContacts = getFiltered();
  return (
    <StyledList>
      {filteredContacts.map(contact => (
        <StyledItem key={contact.id}>
          <PhoneItem contact={contact} />
        </StyledItem>
      ))}
    </StyledList>
  );
};
