import PropTypes from 'prop-types';
import { Item, Button } from './ContactsListItem.style';

export const ContactsListItem = ({ contact, onDelete }) => {
  return (
    <Item>
      <p>
        {contact.name}: {contact.number}
      </p>
      <Button type="button" onClick={() => onDelete(contact.id)}>
        Delete
      </Button>
    </Item>
  );
};

ContactsListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func,
};
