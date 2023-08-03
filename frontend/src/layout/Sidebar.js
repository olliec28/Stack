import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ListIcon from '@mui/icons-material/FormatListBulleted';
import TextIcon from '@mui/icons-material/TextSmsOutlined';
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';


import CustomButton from '../components/CustomButton';

const Sidebar = ({ open, onClose }) => {
  const theme = useTheme();

  return (
    <>
      <Drawer
        anchor='left'
        onClose={() => onClose()}
        open={open}
        variant='temporary'
        PaperProps={{
          sx: {
            backgroundColor: 'black',
            width: 270
          }
        }}
      >
        <Box
          height='100%'
          padding={2}
          position='relative'
        >
          <Box paddingX={2} paddingY={1}>
            <Link href='/' sx={{ textDecoration: 'none' }}>
              <IconButton size='large' disabled>
                <LanguageIcon
                  sx={{
                    color: theme.palette.primary.main,
                    height: 30,
                    width: 30
                  }}
                />
                <Typography
                  variant='h6'
                  color={theme.palette.primary.main}
                  flexGrow={1}
                  fontWeight='bold'
                  textDecoration='none'
                  marginLeft='10px'
                  sx={{
                    fontFamily:"'Permanent Marker', 'cursive'"
                  }}
                  
                >
                  Luco Music
                </Typography>
              </IconButton>
            </Link>
          </Box>
          <Box paddingX={2} paddingBottom={8}>
            <Link href="/" passHref>
              <CustomButton icon={<HomeIcon />} text="Home" />
            </Link>
            <Box paddingY={3}>
              <Link href="/about" passHref>
              <CustomButton icon={<InfoIcon />} text="About" />
            </Link>
            </Box>
            <Box paddingY={0}>
              <CustomButton
                href='#What We Do'
                icon={<ListIcon />}
                text='What We Do'
              />
            </Box>
            <Box paddingY={2}>
              <CustomButton
                href='#contact'
                icon={<EmailIcon />}
                text='Contact'
              />
            </Box>
            <Box paddingY={2}>
              <Divider />
            </Box>
            <Box paddingBottom={2}>
              <Stack direction='row' spacing={4} justifyContent='center' alignItems='center'>
                <IconButton
                  aria-label='LinkedIn'
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
                  aria-label='GitHub'
                  href='#'
                  target='_blank'
                  sx={{
                    color: theme.palette.primary.main,
                  }}
                >
                  <AccountCircleIcon fontSize='large' />
                </IconButton>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
};

export default Sidebar;
