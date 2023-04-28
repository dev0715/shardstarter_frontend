import React from 'react';
import Box from '@mui/material/Box';
import { Label } from './Label';
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
        <Label text={{ value: props.label, size: 18 }} />
        <Label text={{ value: props.status, size: 30, color: 'gree' }} />
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
        <Label text={{ value: label }} />
        <Label text={{ value: value }} />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '22px' }}>
        <Label text={{ value: price, size: 16, color: 'grey' }} />
        <Label text={{ value: `${percent}%`, size: 16, color: 'grey' }} />
      </Box>
      <Box>
        <LinearProgressBar value={percent} />
      </Box>
    </Box>
  );
};

export const RoundedCard = (props) => {
  const { img, bgColor, label, width, height, color, size } = props;
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: '22px',
        width: width,
        height: height,
        backgroundColor: bgColor,
        marginTop: '8px',
        justifyContent: 'center'
      }}
    >
      {img && <img src={img} width={11} alt="Green Dot" style={{ marginRight: '10px' }} />}
      <Label text={{ value: label, weight: 100, color, size }} />
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
            <Label text={{ value: project.value, size: 30 }} />
            <RoundedCard
              img="_img/projects/greendot.png"
              bgColor="#171717"
              label="Active"
              width={122}
              height={43}
              color="green"
            />
          </Box>
        </Box>
        <Label text={{ value: project.text, color: 'grey', weight: 100 }} sx={{ marginTop: '25px' }} />
        <Box sx={{ marginTop: '30px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Label text={{ value: 'Max Rise', size: 22, color: 'black' }} />
          <Label text={{ value: project.maxRise, size: 22 }} />
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
          <Label text={{ value: 'Token Allocation', size: 22, color: 'black' }} />
          <Label text={{ value: project.tokenAllocation, size: 22 }} />
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
