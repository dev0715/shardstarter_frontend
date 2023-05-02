import React from 'react';
import { Box } from '@mui/material';
import { RoundedLabel, Label } from 'components/_components/Label';
import { AccountInfo } from '../../../utils/_utils/EntityFieldDefs';
import LeftStaking from '../StakingPage/LeftStaking';

function MainAccount() {
  return (
    <div>
      <Box
        sx={{
          '@media (max-width: 1500px)': {
            width: '100%',
            marginLeft: '0px',
            flexDirection: 'column'
          },
          backgroundImage: 'url("_img/staking/background.png")',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          borderRadius: '38px',
          padding: '60px 65px',
          marginLeft: '150px',
          marginRight: '150px',
          marginTop: '70px',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <LeftStaking />
        <Box
          sx={{
            '@media (max-width: 1500px': {
              width: '100%'
            },
            display: 'flex',
            flexDirection: 'column',
            width: '770px',
            marginRight: '70px'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <RoundedLabel keyword={AccountInfo.balance.keyword} value={AccountInfo.balance.value} bgColor="#171717" />
            <RoundedLabel keyword={AccountInfo.buy.keyword} value={AccountInfo.buy.value} bgColor="#171717" />
          </div>
          <RoundedLabel keyword={AccountInfo.wallet.keyword} value={AccountInfo.wallet.value} bgColor="#171717" />
          <div
            style={{
              width: '100%',
              height: '251px',
              border: '1px solid #02FF7B',
              borderRadius: '8px',
              backgroundColor: '#171717',
              padding: '30px 28px',
              marginTop: '12px'
            }}
          >
            {AccountInfo.accountBox.map((element, index) => (
              <div key={index} style={{ marginBottom: '30px' }}>
                {/* Added Part Start */}
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
                  {element.keyword}
                </div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <Label
                    text={{
                      value: element.value,
                      size: 26
                    }}
                  />
                  <img src="_img/icon/pencil.png" width="26px" style={{ margin: '8px' }} />
                </div>
                {/* Added Part End */}
              </div>
            ))}
          </div>
          {/* Total View */}
          <div style={{ display: 'flex', padding: '10px' }}>
            {AccountInfo.totalView.map((element, index) => (
              <div key={index} style={{ marginRight: '60px' }}>
                <Label
                  text={{
                    value: element.keyword,
                    size: 20,
                    weight: 100,
                    color: 'green'
                  }}
                />
                <Label
                  text={{
                    value: element.value,
                    size: 40
                  }}
                />
              </div>
            ))}
          </div>
        </Box>
      </Box>
    </div>
  );
}

export default MainAccount;
