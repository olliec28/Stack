import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme, useMediaQuery } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

const HeroButtons = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), { defaultMatches: true });

  return (
    <>
      <Box
        display="flex"
        flexDirection={{ xs: 'column', sm: 'row' }}
        alignItems="stretched"
        justifyContent="center"
        marginTop={4}
        gap={85}
      >
        <Button 
          component="a"
          variant="contained"
          size="large"
          color="primary"
          href="#"
          startIcon={<GroupAddIcon />} // Join icon
          fullWidth={isMd ? false : true}
          disableElevation={true}
          sx={{
            fontSize: '1.75rem',
            padding: '20px',
            borderRadius: '50px',
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.black,
            '&:hover': {
              backgroundColor: 'transparent',
              color: theme.palette.primary.main,
              border: '2px solid ' + theme.palette.primary.main
            }
          }}
        >
          Join Luco
        </Button>
        <Button 
          component="a"
          variant="outlined"
          color="primary"
          size="large"
          href="#"
          startIcon={<AccountCircleIcon />} // Login icon
          fullWidth={isMd ? false : true}
          disableElevation={true}
          sx={{
            fontSize: '1.75rem',
            padding: '20px',
            borderRadius: '50px',
            border: '2px solid ' + theme.palette.primary.main,
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.black,
            '&:hover': {
              backgroundColor: 'transparent',
              color: theme.palette.primary.main,
              border: '2px solid ' + theme.palette.primary.main
            }
          }}
        >
          Login
        </Button>
      </Box>
    </>
  );
};

export default HeroButtons;
