import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import HeroButtons from './HeroButtons';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), { defaultMatches: true });

  const [hero, setHero] = useState([]);

  const fetchHero = () => {
    axios
      .get('/hero', {
        headers: {
          Accept: 'application/json',
          'Access-Control-Allow-Origin': process.env.BACKEND_URL,
        },
      })
      .then((response) => {
        setHero(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchHero();
  }, []);

  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    // Restart the video when it ends
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  };

  return (
    <div id='home'>
      {hero.slice(0, 1).map((item, i) => (
        <Box
          key={i}
          sx={{
            position: 'relative',
            width: '100%',
            height: '550px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <video
            ref={videoRef}
            autoPlay
            muted
            onEnded={handleVideoEnded}
            style={{
              objectFit: 'cover',
              width: '100%',
              height: '100%',
              border: `6px solid ${theme.palette.primary.main}`
            }}
          >
            <source src={item.video} type="video/mp4" />
            {/* Add additional source tags for different video formats if necessary */}
          </video>

          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              padding: '2rem',
              textAlign: 'center',
              zIndex: 1,
            }}
          >
            <Typography
              color={'theme.palette.primary.main'}
              variant='h4'
              component='span'
              fontWeight={1000}
              marginBottom={2}
              fontSize={'70px'}
            >
              {item.title}
            
            </Typography>
            <HeroButtons />
          </Box>
        </Box>
      ))}
    </div>
  );
};

export default Hero;
