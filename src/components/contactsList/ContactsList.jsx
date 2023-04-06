import PropTypes from 'prop-types';
import { ContactsListItem } from 'components/contactsList/ContactsListItem';

export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <ContactsListItem
            id={contact.id}
            key={contact.id}
            contact={contact}
            name={contact.name}
            number={contact.number}
            onDelete={onDelete}
          />
        );
      })}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  onDelete: PropTypes.func.isRequired,
};
