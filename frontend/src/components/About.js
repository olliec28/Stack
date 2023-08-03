import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Image from 'next/image'
import mypic from '/Users/olivercustance/OneDrive - University of Huddersfield/Luco music/portfolio-website-django-next.js/frontend/public/images/warnermusic.png'

const About = ({ imageUrl }) => {
  

  return (
    <div id='about'>
      <Box
        maxWidth={{ sm: 720, md: 1236 }}
        width={1}
        margin='0 auto'
        paddingX={2}
        paddingY={4}
        textAlign='center'
      >
        <Typography
          variant='h2'
          align='center'
          data-aos='fade-up'
          fontWeight={900}
          gutterBottom
        >
          In partnership with
        </Typography>
        
        <Box display='flex' justifyContent='center' alignItems='center' marginTop={4}>
          <Image
          src={mypic}
          
            width="350px"
            height="150px"
          />
        </Box>
      </Box>
    </div>
  );
};

export default About;
