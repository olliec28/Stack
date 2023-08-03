import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import Link from '@mui/material/Link';
import CopyrightIcon from '@mui/icons-material/Copyright';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const Footer = () => {
  const theme = useTheme();
  const [footer, setFooter] = useState([]);

  const fetchFooter = () => {
    axios
      .get('/footer', {
        headers: {
          Accept: 'application/json',
          'Access-Control-Allow-Origin': process.env.BACKEND_URL,
        },
      })
      .then((response) => {
        setFooter(response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchFooter();
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Divider
          sx={{
            backgroundColor: theme.palette.primary.main,
            height: 4, // Adjust the height to make it thicker
          }}
        />
        {footer.slice(0, 1).map((item, index) => (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginBottom: '20px',
              textAlign: 'left',
              paddingTop: '20px', // Increase the padding or height as needed
              paddingBottom: '20px', // Increase the padding or height as needed
            }}
            key={index}
          >
            <Link to="/" style={{ textDecoration: 'none' }}>
              <IconButton size="large" disabled>
                <LanguageIcon
                  sx={{
                    color: theme.palette.primary.main,
                    height: 40,
                    width: 40,
                  }}
                />
              </IconButton>
            </Link>
            <Box sx={{ display: { md: 'inline', xs: 'none' } }}>
              <Typography
                variant="h6"
                component={Link}
                to="/"
                sx={{
                  fontFamily: "'Permanent Marker', 'cursive'",
                  flexGrow: 1,
                  color: theme.palette.primary.main,
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  marginLeft: '10px',
                  fontSize: 20, // Increase the text size
                }}
              >
                Luco Music
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '150px' }}>
              <LocationOnIcon sx={{ color: theme.palette.primary.main, fontSize: 20 }} /> {/* Increase the icon and text size */}
              <Typography
                variant="body2"
                sx={{ marginLeft: '5px', color: 'white', fontSize: 16 }} // Increase the text size
              >
                <Link
                  href="https://www.google.com/maps/search/?api=1&query=Huddersfield"
                  color="inherit"
                  underline="none"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                  '&:hover': {
                    borderBottom: '2px solid white', // Add a white line under the link on hover
                  },
                }}
                >
                  Huddersfield
                </Link>
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '150px' }}>
              <EmailIcon sx={{ color: theme.palette.primary.main, fontSize: 20 }} /> {/* Increase the icon and text size */}
              <Link
                href="mailto:enquiries@lucomusic.com"
                color="inherit"
                underline="none"
                sx={{
                  marginLeft: '5px',
                  color: 'white',
                  fontSize: 16, // Increase the text size
                  textDecoration: 'none',
                  '&:hover': {
                    borderBottom: '2px solid white', // Add a white line under the link on hover
                  },
                }}
              >
                enquiries@lucomusic.com
              </Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: '150px' }}>
              <Typography
                variant="body2"
                sx={{ color: 'white', fontSize: 16, marginLeft: '5px' }} // Increase the text size and add left margin
              >
                <CopyrightIcon
                  sx={{
                    fontSize: 16, // Increase the icon size
                    color: theme.palette.primary.main,
                    marginRight: '5px', // Add right margin
                  }}
                />
                {new Date().getFullYear()} Luco Music. All rights reserved.
              </Typography>
            </Box>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
};

export default Footer;
