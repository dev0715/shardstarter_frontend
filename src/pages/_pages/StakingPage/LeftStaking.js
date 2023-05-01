import React from 'react';
import Box from '@mui/material/Box';
import { Label } from 'components/_components/Label';
import { Staking } from 'utils/_utils/Staking';

const renderDetails = () => (
  <Box sx={{ display: 'flex', rowGap: '15px', flexDirection: 'column' }}>
    {Staking.details.map((detail, idx) => (
      <Box key={idx} sx={{ display: 'flex' }}>
        <img src={detail.imgUrl} alt={detail.imgUrl} width={80} height={80} />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Label sx={{ marginLeft: '15px', minWidth: '75px' }} text={detail.label} />
          {detail.value && <Label sx={{ marginLeft: '15px' }} text={detail.value} />}
        </Box>
      </Box>
    ))}
  </Box>
);

function LeftStaking() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          display: 'flex',
          '@media(max-width: 500px)': {
            flexDirection: 'column'
          }
        }}
      >
        <img src={Staking.icon} alt={Staking.iconUrl} width={120} height={120} />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Label sx={{ marginLeft: '15px', minWidth: '75px' }} text={Staking.label} />
          {Staking.value && <Label sx={{ marginLeft: '15px' }} text={Staking.value} />}
        </Box>
      </Box>
      <Box sx={{ marginTop: '42px' }}>{renderDetails()}</Box>
    </div>
  );
}

export default LeftStaking;
