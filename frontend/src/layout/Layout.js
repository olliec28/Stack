import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import NoSsr from '@mui/material/NoSsr';
import Zoom from '@mui/material/Zoom';
import useMediaQuery from '@mui/material/useMediaQuery';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useTheme } from '@mui/material/styles';

import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up('lg'), { defaultMatches: true });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isLg ? false : openSidebar;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Box
      id='page-top'
      sx={{
        backgroundColor: theme.palette.background.default,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Header onSidebarOpen={handleSidebarOpen} />
      <Sidebar onClose={handleSidebarClose} open={open} />

      <Box
        flex='1 0 auto'
        maxWidth='100%'
        width='100%'
        margin='0 auto'
        paddingX={0}
        paddingY={0}
        marginTop='-21px' // Add this line to remove the space
      >
        {children}
      </Box>

      <Footer />

      <NoSsr>
        <Zoom in={trigger}>
          <Box
            onClick={scrollToTop} // Call the scrollToTop function here
            role='presentation'
            sx={{ position: 'fixed', bottom: 24, right: 32 }}
          >
            <Fab
              color='primary'
              size='small'
              aria-label='scroll back to top'
              sx={{
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: theme.palette.primary.main,
                  border: `2px solid ${theme.palette.primary.main}`,
                },
              }}
            >
              <KeyboardArrowUpIcon />
            </Fab>
          </Box>
        </Zoom>
      </NoSsr>
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
