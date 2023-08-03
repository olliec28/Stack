import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import UploadIcon from '@mui/icons-material/Upload';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Fade from '@mui/material/Fade';
import Divider from '@mui/material/Divider';
import Image from 'next/image';

import crownImage from '/Users/olivercustance/OneDrive - University of Huddersfield/Luco music/portfolio-website-django-next.js/frontend/public/images/crown-2.png';

const Projects = () => {
  const theme = useTheme();

  return (
    <div id="projects">
      <style>
        {`
          @keyframes flash {
            0%, 50% {
              opacity: 0;
            }
            25%, 75% {
              opacity: 1;
            }
          }

          .flash-slow {
            animation: flash 6s infinite;
          }
        `}
      </style>
      <Box position="relative">
        <Box
          maxWidth={{ sm: 720, md: 1236 }}
          width={1}
          margin="0 auto"
          paddingX={2}
          paddingY={6} // Increased the padding
        >
          <Box marginBottom={4}>
            <Typography
              variant="h2"
              align="center"
              data-aos="fade-up"
              fontWeight={900}
              gutterBottom
            >
              <Box
                component="span"
                display="inline-block"
                position="relative"
                paddingY={2} // Add padding to top and bottom
              >
                <Box
                  component={Divider}
                  sx={{
                    position: 'absolute',
                    width: '100%',
                    top: '-5px', // Adjust the top value to move the divider above the text
                    transform: 'translateY(-30%)',
                    animation: 'moveDivider 2s infinite',
                    animationTimingFunction: 'linear',
                    backgroundColor: theme.palette.text.primary,
                    opacity: 0.5,
                    height: '8px', // Increase the height of the divider
                  }}
                />
                How it works
              </Box>
            </Typography>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between" // Distribute the circles evenly
          >
            <Fade in={true} timeout={1000} style={{ animation: 'flash 6s infinite', animationDelay: '2s' }}>
              <Box
                component={Card}
                width={250} // Adjust the width as per your preference
                height={250} // Adjust the height as per your preference
                display="flex"
                flexDirection="column"
                alignItems="center" // Center horizontally
                justifyContent="center" // Center vertically
                textAlign="center"
                borderRadius="50%" // Make it circular
                border={`4px solid ${theme.palette.text.primary}`} // Thicker border
                backgroundColor={theme.palette.background.default} // Background color matches the overall background
              >
                <UploadIcon fontSize="inherit" sx={{ fontSize: 250 }} />
              </Box>
            </Fade>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              mx={2}
              className="flash-slow"
              style={{ animationDelay: '0s' }}
            >
              <ArrowForwardIosIcon fontSize="large" sx={{ fontSize: 90 }} />
            </Box>
            <Fade in={true} timeout={1000} style={{ animation: 'flash 6s infinite', animationDelay: '4s' }}>
              <Box
                component={Card}
                width={250} // Adjust the width as per your preference
                height={250} // Adjust the height as per your preference
                display="flex"
                flexDirection="column"
                alignItems="center" // Center horizontally
                justifyContent="center" // Center vertically
                textAlign="center"
                borderRadius="50%" // Make it circular
                border={`4px solid ${theme.palette.text.primary}`} // Thicker border
                backgroundColor={theme.palette.background.default} // Background color matches the overall background
              >
                <Image
                  src={crownImage}
                  alt="King's Crown"
                  width={200} // Adjust the width as per your preference
                  height={200} // Adjust the height as per your preference
                />
              </Box>
            </Fade>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              mx={2}
              className="flash-slow"
              style={{ animationDelay: '2s' }}
            >
              <ArrowForwardIosIcon fontSize="large" sx={{ fontSize: 90 }} />
            </Box>
            <Fade in={true} timeout={1000} style={{ animation: 'flash 6s infinite', animationDelay: '6s' }}>
              <Box
                component={Card}
                width={250} // Adjust the width as per your preference
                height={250} // Adjust the height as per your preference
                display="flex"
                flexDirection="column"
                alignItems="center" // Center horizontally
                justifyContent="center" // Center vertically
                textAlign="center"
                borderRadius="50%" // Make it circular
                border={`4px solid ${theme.palette.text.primary}`} // Thicker border
                backgroundColor={theme.palette.background.default} // Background color matches the overall background
              >
                <MonetizationOnIcon
                  fontSize="inherit"
                  sx={{ fontSize: 250 }}
                />
              </Box>
            </Fade>
          </Box>
          <Box display="flex" justifyContent="space-between" marginTop={4}>
            <Box textAlign="left" width={1 / 3} ml={-10}>
              <Typography variant="subtitle2" align="center" fontSize={28} fontWeight={800}> {/* Increased the font size */}
                1. Upload music
              </Typography>
            </Box>
            <Box textAlign="center" width={1 / 3} ml={9}>
              <Typography variant="subtitle2" align="center" fontSize={28} fontWeight={800}> {/* Increased the font size */}
                2. Receive royalty
              </Typography>
            </Box>
            <Box textAlign="center" width={1 / 3} >
              <Typography variant="subtitle2" align="center" fontSize={28} fontWeight={800} style={{ marginRight: '-10rem' }}> {/* Increased the font size */}
                3. Earn money
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Projects;
