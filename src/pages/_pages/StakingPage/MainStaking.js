import React from 'react'
import Box from '@mui/material/Box'
import LeftStaking from './LeftStaking'
import RightStaking from './RightStaking'

function MainStaking() {
  return (
    <Box
      sx={{
        '@media (max-width: 1500px)': {
          width: '100%',
          marginLeft: '0px'
        },
        backgroundImage: 'url("_img/staking/background.png")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        borderRadius: '38px',
        padding: '60px 65px',
        marginLeft: '150px',
        marginRight: '150px',
        display: 'flex',
        justifyContent:'space-between'
      }}
    >
      <LeftStaking />
      <RightStaking />
    </Box>
  )
}

export default MainStaking