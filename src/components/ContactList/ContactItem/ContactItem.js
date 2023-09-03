import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { ListItem, DeleteButton } from '../ContactItem/ContactItemStyles';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

 return (
    <ListItem>
      <span>
        {name}: {number}
      </span>
      <DeleteButton onClick={() => dispatch(deleteContact(id))} type="button">
        Delete
      </DeleteButton>
    </ListItem>
  );
};
 

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;