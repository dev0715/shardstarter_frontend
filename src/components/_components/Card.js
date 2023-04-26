import React from 'react';
import Box from '@mui/material/Box';

const Card = (props) => {
  return (
    <Box
      width={320}
      height={150}
      sx={{
        ...props.sx,
        backgroundImage: 'url("_img/cards/background.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      Card
    </Box>
  );
};

export default Card;
