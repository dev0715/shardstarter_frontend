import React from 'react';
import Box from '@mui/material/Box';
import { Label, LH5, LH4, GLabel } from './Label';
import { LinearProgressBar } from './ProgressBar';
import { SecondaryButton, IconButtonGroup } from './Button';
import { facebook, twitter, instagram, reddit } from 'utils/_utils/EntityFieldDefs';

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

export const CardBox = (props) => {
  const { value, label, price, percent } = props.item;
  return (
    <Box
      sx={{
        backgroundImage: "url('_img/cards/bg.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderRadius: '14px',
        margin: '30px, 0px',
        width: '100%',
        padding: '16px 25px'
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <LH4 text={label} />
        <LH4 text={value} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '22px' }}>
        <Label text={price} sx={{ fontSize: '16px', color: '#A7A7A7' }} />
        <Label text={`${percent}%`} sx={{ fontSize: '16px', color: '#A7A7A7' }} />
      </Box>
      <Box>
        <LinearProgressBar value={percent} />
      </Box>
    </Box>
  );
};

export const ProjectCard = ({ project }) => {
  return (
    <Box
      sx={{
        maxWidth: '500px',
        width: '100%',
        backgroundColor: '#000000',
        padding: '30px',
        borderRadius: '20px',
        border: '1px solid #7070704C'
      }}
    >
      <Box display="flex" flexDirection="column">
        <Box display="flex" flexDirection="row">
          <img src={project.cardimg} alt={project.label} width={100} />
          <Box sx={{ paddingLeft: '20px' }}>
            <Label text={project.value} sx={{ fontSize: '30px', fontWeight: 600 }} />
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                borderRadius: '22px',
                width: '122px',
                height: '43px',
                backgroundColor: '#171717',
                marginTop: '8px'
              }}
            >
              <img src="_img/projects/greendot.png" width={11} alt="Green Dot" style={{ marginLeft: '20px' }} />
              <LH4 text="Active" sx={{ fontWeight: 100, marginLeft: '10px', color: '#02FF7B' }} />
            </Box>
          </Box>
        </Box>
        <LH4 text={project.text} sx={{ marginTop: '25px', fontWeight: 100, color: '#A7A7A7' }} />
        <Box sx={{ marginTop: '30px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Label text="Max Rise" sx={{ fontSize: '22px', color: '#4B4B4B', fontWeight: 700 }} />
          <Label text={project.maxRise} sx={{ fontSize: '22px', fontWeight: 700 }} />
        </Box>
        <Box
          sx={{
            marginTop: '20px',
            marginBottom: '30px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}
        >
          <Label text="Token Allocation" sx={{ fontSize: '22px', color: '#4B4B4B', fontWeight: 700 }} />
          <Label text={project.tokenAllocation} sx={{ fontSize: '22px', fontWeight: 700 }} />
        </Box>
        {project.list.map((item, idx) => (
          <CardBox key={idx} item={item} />
        ))}
        <Box
          sx={{
            marginTop: '40px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            '@media (max-width: 600px)': {
              flexDirection: 'column',
              alignItems: 'center'
            }
          }}
        >
          <SecondaryButton label="Private Deal" sx={{ width: '190px' }} />
          <IconButtonGroup size="40px" elements={[twitter, facebook, instagram, reddit]} />
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
