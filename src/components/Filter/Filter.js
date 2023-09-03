import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';
import { Label, Input } from '../Filter/FilterStyles';

const Filter = () => {
  const filter = useSelector(({ filter }) => filter);
  const dispatch = useDispatch();

  const handleFilter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };
  
return (
    <Label>
      <p>Find contacts by name</p>
      <Input type="text" value={filter} onChange={handleFilter} />
    </Label>
  );
};
  
export default Filter;