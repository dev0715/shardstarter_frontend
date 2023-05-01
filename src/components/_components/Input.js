import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

export const SearchInput = (props) => {
  return (
    <TextField
      placeholder={props.placeholder}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        style: {
          fontWeight: 100,
          backgroundColor: '#171717',
          maxWidth: '400px',
          height: '70px',
          fontSize: '20px',
          border: '1px solid #02FF7B'
        }
      }}
    />
  );
};
