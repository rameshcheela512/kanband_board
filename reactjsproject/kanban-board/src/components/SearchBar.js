import React from 'react';
import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../store/tasksSlice';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    dispatch(setSearchTerm(event.target.value));
  };

  return (
    <TextField
      variant="outlined"
      fullWidth
      placeholder="Search tasks..."
      onChange={handleSearch}
      style={{ marginBottom: '16px' }}
    />
  );
};

export default SearchBar;
