import React from 'react';
import { Box, Button, IconButton } from '@mui/material';

export const PrimaryButton = (props) => {
  return (
    <Button variant="contained" {...props}>
      {props.label}
    </Button>
  );
};

export const IconButtonGroup = (props) => {
  return (
    <Box sx={props.sx}>
      {props.elements.map((element, idx) => (
        <IconButton key={idx} onClick={() => (window.location.href = element.path)}>
          <img src={element.img} width={props.size} />
        </IconButton>
      ))}
    </Box>
  );
};
