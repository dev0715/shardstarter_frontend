import React from 'react';
import Box from '@mui/material/Box';
import { Fantasy, Solchicks, Bulkperks, Sidus, NetVRK } from 'utils/_utils/EntityFieldDefs';
import Card from 'components/_components/Card';

const Projects = () => {
  const projectArr = [Fantasy, Solchicks, Bulkperks, Sidus, NetVRK];

  return (
    <Box
      sx={{
        '@media (max-width: 600px)': {
          margin: '20px 2%'
        },
        margin: '20px 8%',
        display: '-webkit-box',
        overflowX: 'hidden !important'
      }}
    >
      {projectArr.map((project) => (
        <Card img={project.img} label={project.label} sx={{ marginRight: '40px', }} />
      ))}
    </Box>
  );
};

export default Projects;
