import React from 'react';
import Button from '@mui/material/Button';

export const PrimaryButton = (props) => {
  return (
    <Button variant="contained" {...props}>
      {props.label}
    </Button>
  );
};
