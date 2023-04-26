import React from 'react';
import Box from '@mui/material/Box';
import { LH5, GLabel } from './Label';

const Card = (props) => {
  return (
    <Box
      width={320}
      height={150}
      sx={{
        ...props.sx,
        backgroundImage: 'url("_img/cards/background.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Box sx={{ marginLeft: '22px' }}>
        <img src={props.img} alt={props.label} width={80} />
      </Box>
      <Box sx={{ marginLeft: '15px', display: 'flex', justifyContent: 'space-around', flexFlow: 'column' }}>
        <LH5 text={props.label} />
        <GLabel text={props.status} sx={{ fontSize: '30px !important' }} />
      </Box>
    </Box>
  );
};

export default Card;
