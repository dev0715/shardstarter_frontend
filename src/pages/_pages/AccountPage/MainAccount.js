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
            <RoundedLabel
              keyword={AccountInfo.balance.keyword}
              value={AccountInfo.balance.value}
              bgColor="#171717"
              width="350px"
              height="40px"
            />
            <RoundedLabel
              keyword={AccountInfo.buy.keyworkd}
              value={AccountInfo.buy.value}
              bgColor="#171717"
              width="160px"
              height="40px"
            />
          </div>
          <RoundedLabel
            keyword={AccountInfo.wallet.keyword}
            value={AccountInfo.wallet.value}
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
            {AccountInfo.accountBox.map((element, index) => (
              <div key={index}>
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
              <div key={index} style={{marginRight: '60px'}}>
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
        </div>
      </Box>
    </div>
  );
}

export default MainAccount;
