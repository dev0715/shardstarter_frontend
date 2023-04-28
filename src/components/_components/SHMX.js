import React from 'react';
import { InputLabel, Box } from '@mui/material';
import { PrimaryButton } from './Button';

export const SHMX = (props) => {
  return (
    <InputLabel
      sx={{
        color: 'white',
        fontSize: '26px',
        border: '1px solid #02FF7B',
        paddingLeft: '30px',
        paddingTop: '34px',
        paddingBottom: '23px',
        borderRadius: '8px',
        position: 'relative'
      }}
    >
      1,200.00
      <div style={{position: 'absolute', top:'-20px'}}>$SHMX</div>
      <PrimaryButton
        label="State"
        sx={{
          padding: '8px',
          width: '220px'
        }}
        hasFocus={true}
      />
    </InputLabel>
  );
};
