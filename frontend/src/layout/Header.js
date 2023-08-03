import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import ListIcon from '@mui/icons-material/FormatListBulleted';
import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from '@mui/icons-material/Email';
import { alpha, useTheme } from '@mui/material/styles';
import GroupAddIcon from '@mui/icons-material/GroupAdd';


import CustomButton from '../components/CustomButton';

const Header = ({ onSidebarOpen }) => {
  const theme = useTheme();
  
  return (
    <>
      <AppBar
        position='sticky'
        sx={{
          backgroundColor: 'black',
          border: 0,
          padding: '10px 0',
          marginBottom: '20px',
          top: 'auto',
          boxShadow: '0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)',
          '&:hover': {
          border: '2px rgb(54, 199, 175)', // Replace 'red' with your desired border color
          }
        }}
      >
        <Toolbar sx={{ minHeight: 70 }}>
          <Link href='/' sx={{ textDecoration: 'none' }}>
            <IconButton size='large' disabled>
              <LanguageIcon 
                sx={{ 
                  color: theme.palette.primary.main, 
                  height: 40, 
                  width: 40 
                }} 
              />
              <Box sx={{ display: { md: 'inline', xs: 'none' } }}>
                <Typography 
                  variant='h6' 
                  sx={{ 
                    fontFamily:"'Permanent Marker', 'cursive'",
                    flexGrow: 1,
                    color: theme.palette.primary.main,
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    marginLeft: '10px'
                    
                  }}
                >
                  Luco Music
                </Typography>
              </Box>
            </IconButton>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{ 
              alignItems: 'center',
              display: { lg: 'flex', md: 'none', xs: 'none' }
            }}
          >
            <Link href="/" passHref>
              <CustomButton icon={<HomeIcon />} text="Home" />
            </Link>
            <Link href="/about" passHref>
              <CustomButton icon={<InfoIcon />} text="About" />
            </Link>
            <Link href="/whatWeDo" passHref>
              <CustomButton icon={<ListIcon />} text="What We Do" />
            </Link>
            <Link href="/contact" passHref>
              <CustomButton icon={<EmailIcon />} text="Contact" />
            </Link>
         
            <Divider
              orientation='vertical'
              sx={{ 
                height: 32, 
                mx: 2,
                display: { lg: 'flex', md: 'none', xs: 'none' } 
              }} 
            />
            <Box sx={{ display: { lg: 'flex', md: 'none', xs: 'none' } }}>
              <IconButton 
                aria-label='Join Luco' 
                href='#'
                target='_blank'
                sx={{ 
                  color: theme.palette.primary.main,
                }}
              >
                <GroupAddIcon fontSize='large' />
              </IconButton>
              <IconButton 
                aria-label='Instagram' 
                href='#'
                target='_blank'
                sx={{ 
                  color: theme.palette.primary.main,
                }}
              >
                <InstagramIcon fontSize='large' />
              </IconButton>
              <IconButton 
                aria-label='Login' 
                href='#'
                target='_blank'
                sx={{ 
                  color: theme.palette.primary.main,
                }}
              >
                <AccountCircleIcon fontSize='large' />
              </IconButton>
            </Box>
          </Box>
          <Box 
            sx={{ 
              display: { md: 'block', lg: 'none' } 
            }} 
            alignItems='center'
          >
            <Button
              onClick={() => onSidebarOpen()}
              aria-label='Menu'
              variant='outlined'
              sx={{
                borderRadius: 2,
                minWidth: 'auto',
                padding: 1,
                borderColor: alpha(theme.palette.divider, 0.2)
              }}
            >
              <MenuIcon />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

Header.propTypes = {
  onSidebarOpen: PropTypes.func,
};

export default Header;
