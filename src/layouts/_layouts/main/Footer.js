import React from 'react';
import { Box } from '@mui/material';
import { LH5, TLabel, GLabel } from 'components/_components/Label';
import { IconButtonGroup } from 'components/_components/Button';
import {
  loremString,
  privacyString,
  twitter,
  facebook,
  instagram,
  linkedin,
  reddit
} from 'utils/_utils/EntityFieldDefs';
const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#171717',
        padding: '70px 10%',
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid #002B15',
        flexDirection: 'row',
        '@media (max-width: 1360px)': {
          flexDirection: 'column',
          alignItems: 'center'
        }
      }}
    >
      <Box>
        <Box height={64} sx={{ marginBottom: '60px' }}>
          <img src="_img/footer.png" alt="Footer" height="100%" />
        </Box>
        <LH5
          text={loremString}
          sx={{
            fontWeight: 100,
            width: '612px',
            '@media (max-width: 1360px)': {
              width: '400px',
              marginBottom: '50px'
            }
          }}
        />
      </Box>

      <Box>
        <Box display="flex" flexDirection="row" width={400} justifyContent="space-between">
          <TLabel text="Join Our " />
          <GLabel text="Community" />
        </Box>
        <IconButtonGroup
          sx={{ marginTop: '30px' }}
          size="50px"
          elements={[twitter, facebook, instagram, reddit, linkedin]}
        />
        <LH5 text={privacyString} sx={{ fontWeight: 100, marginTop: '40px' }} />
      </Box>
    </Box>
  );
};

export default Footer;
