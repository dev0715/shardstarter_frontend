import React from 'react';
import { Box } from '@mui/material';
import { RoundedLabel, Label } from 'components/_components/Label';

import LeftStaking from '../StakingPage/LeftStaking';

function MainAccount() {
  return (
    <div>
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
          justifyContent: 'space-between'
        }}
      >
        <LeftStaking />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <RoundedLabel keyword="Balance" value="$SHMX 120,000.00" bgColor="#171717" width="350px" height="40px" />
            <RoundedLabel keyword="BUY" value="$SHMX" bgColor="#171717" width="160px" height="40px" />
          </div>
          <RoundedLabel
            keyword="Wallet"
            value="90fsfdggfhgslrheug556gfddhsfhg78uguipggui78ugb"
            bgColor="#171717"
            width="770px"
            height="40px"
          />
          <div
            style={{
              width: '770px',
              height: '221px',
              border: '1px solid #02FF7B',
              borderRadius: '8px',
              backgroundColor: '#171717',
              margin: '10px',
              padding: '30px 20px'
            }}
          >
            <div>
              <div
                style={{
                  width: '188px',
                  height: '37px',
                  backgroundColor: '#4B4B4B',
                  color: '#02FF7B',
                  fontSize: '17px',
                  padding: '5px 15px',

                  borderRadius: '7px'
                }}
              >
                NON EVM WALLET
              </div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Label
                  text={{
                    value: '7Jhdggfuid7fdhbfgofuoirsdn56fdgs',
                    size: 26
                  }}
                />
                <span style={{ width: '26px', height: '26px', margin: '8px' }}>
                  <img src="_img/icon/pencil.png" />
                </span>
              </div>

              <div
                style={{
                  width: '188px',
                  height: '37px',
                  backgroundColor: '#4B4B4B',
                  color: '#02FF7B',
                  fontSize: '17px',
                  padding: '5px 15px',
                  marginTop: '10px',
                  borderRadius: '7px'
                }}
              >
                Eamil Address
              </div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <Label
                  text={{
                    value: '7Jhdggfuid7fdhbfgofuoirsdn56fdgs',
                    size: 26
                  }}
                />
                <span style={{ width: '26px', height: '26px', margin: '8px' }}>
                  <img src="_img/icon/pencil.png" />
                </span>
              </div>
            </div>
          </div>
          <div style={{display: 'flex', padding:'10px'}}>
              <div>
                <Label text={{
                    value: 'Staked $SHMX',
                    size: 20,
                    weight: 100,
                    color: 'green'
                  }}/>
                  <Label text={{
                    value: '$12000.00',
                    size: 40
                  }}/>
              </div>
              <div style={{marginLeft: '60px'}}>
                <Label text={{
                    value: 'Unclaimed Tokens',
                    size: 20,
                    weight: 100,
                    color: 'green'
                  }}/>
                  <Label text={{
                    value: '1,239,000.00',
                    size: 40
                  }}/>
              </div>
            </div>
        </div>
      </Box>
    </div>
  );
}

export default MainAccount;
